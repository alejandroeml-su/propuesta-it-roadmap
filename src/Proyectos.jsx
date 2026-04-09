import { useState, useRef, useEffect } from "react";

const initialProjects = [
  {
    id: 1,
    proyecto: "EPCIS & MDM",
    estadoGeneral: "EN PROGRESO CON BLOQUEOS PARCIALES",
    estadoGeneralColor: "yellow",
    subproyectos: [
      { id: "1a", nombre: "EPCIS", estado: "EN PROCESO", color: "yellow", detalle: "DESARROLLO E IMPLEMENTACIÓN EN CURSO.", responsable: "IPCOM", impacto: "", comentario: "" },
      { id: "1b", nombre: "MDM (MASTER DATA MANAGEMENT)", estado: "PENDIENTE", color: "red", detalle: "EN ESPERA DE APROBACIÓN DE NUEVA INFRAESTRUCTURA.", responsable: "AVANTE", impacto: "", comentario: "" },
    ],
  },
  {
    id: 2,
    proyecto: "ISBM",
    estadoGeneral: "EN PROGRESO CON MÚLTIPLES DEPENDENCIAS",
    estadoGeneralColor: "yellow",
    subproyectos: [
      { id: "2a", nombre: "CORRECCIÓN DE PLANTILLA DE PRODUCTOS", estado: "PENDIENTE", color: "red", detalle: "AJUSTES REQUERIDOS NO HAN SIDO COMPLETADOS.", responsable: "AVANTE", impacto: "", comentario: "" },
      { id: "2b", nombre: "ENTREGA DE REPORTES", estado: "PENDIENTE DE REVISIÓN", color: "yellow", detalle: "REPORTES ENTREGADOS, EN PROCESO DE VALIDACIÓN CONJUNTA.", responsable: "AVANTE / IPCOM", impacto: "", comentario: "" },
      { id: "2c", nombre: "LISTAS DE PRECIOS (LAB. Y RADIOLOGÍA)", estado: "PENDIENTE", color: "red", detalle: "INFORMACIÓN AÚN NO PROPORCIONADA.", responsable: "AVANTE", impacto: "LIMITA CONFIGURACIÓN DE SERVICIOS Y FACTURACIÓN.", comentario: "" },
    ],
  },
  {
    id: 3,
    proyecto: "EXPEDIENTE ELECTRÓNICO",
    estadoGeneral: "EN PROCESO",
    estadoGeneralColor: "yellow",
    subproyectos: [
      { id: "3a", nombre: "IMPLEMENTACIÓN GENERAL", estado: "EN PROCESO", color: "yellow", detalle: "DESARROLLO ACTIVO DEL SISTEMA.", responsable: "—", impacto: "", comentario: "" },
      { id: "3b", nombre: "MÓDULO TRIAGE", estado: "EN PROCESO", color: "yellow", detalle: "TRABAJO CONJUNTO EN AVANCE.", responsable: "IPCOM / AVANTE", impacto: "", comentario: "" },
    ],
  },
  {
    id: 4,
    proyecto: "RRHH",
    estadoGeneral: "PENDIENTE",
    estadoGeneralColor: "red",
    subproyectos: [
      { id: "4a", nombre: "IMPLEMENTACIÓN RRHH", estado: "PENDIENTE", color: "red", detalle: "—", responsable: "AVANTE", impacto: "", comentario: "" },
    ],
  },
  {
    id: 5,
    proyecto: "FUNCIONES Y ROLES",
    estadoGeneral: "PENDIENTE",
    estadoGeneralColor: "red",
    subproyectos: [
      { id: "5a", nombre: "DEFINICIÓN DE PERFILES Y PERMISOS", estado: "PENDIENTE", color: "red", detalle: "NO SE HAN DEFINIDO ESTRUCTURAS DE ACCESO.", responsable: "AVANTE", impacto: "", comentario: "" },
    ],
  },
];

const badgeStyles = {
  red: { bg: "#FEE2E2", text: "#991B1B", dot: "#EF4444" },
  yellow: { bg: "#FEF3C7", text: "#92400E", dot: "#F59E0B" },
  green: { bg: "#D1FAE5", text: "#065F46", dot: "#10B981" },
};

const StatusBadge = ({ estado, color }) => {
  const c = badgeStyles[color] || badgeStyles.yellow;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 10px", borderRadius: 20, background: c.bg,
      color: c.text, fontSize: 10, fontWeight: 700, whiteSpace: "nowrap",
      lineHeight: "18px", letterSpacing: "0.02em",
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: c.dot, flexShrink: 0 }} />
      {estado}
    </span>
  );
};

const EditableCell = ({ value, onChange, placeholder, accentColor }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    if (editing && ref.current) ref.current.focus();
  }, [editing]);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  if (editing) {
    return (
      <textarea
        ref={ref}
        value={draft}
        onChange={(e) => setDraft(e.target.value.toUpperCase())}
        onBlur={() => { onChange(draft); setEditing(false); }}
        onKeyDown={(e) => { if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
        style={{
          width: "100%", minHeight: 48, padding: 6,
          border: `2px solid ${accentColor || "#3B82F6"}`,
          borderRadius: 5, fontFamily: "inherit", fontSize: 12, resize: "vertical",
          outline: "none", background: accentColor === "#EF4444" ? "#FEF2F2" : "var(--input-bg)",
          color: "var(--text-main)", lineHeight: 1.4, boxSizing: "border-box",
          textTransform: "uppercase",
        }}
      />
    );
  }
  return (
    <div
      onClick={() => setEditing(true)}
      style={{
        minHeight: 30, padding: "5px 7px", borderRadius: 5, cursor: "pointer",
        border: `1.5px dashed ${value ? (accentColor === "#EF4444" ? "#FECACA" : "var(--table-text-head)") : "var(--table-text-head)"}`,
        color: value ? (accentColor === "#EF4444" ? "#991B1B" : "var(--text-secondary)") : "var(--text-subtlest)",
        fontSize: 12, lineHeight: 1.4,
        background: value ? (accentColor === "#EF4444" ? "#FEF2F2" : "var(--table-bg-light)") : "transparent",
        fontWeight: value && accentColor === "#EF4444" ? 600 : 400,
        textTransform: "uppercase",
      }}
      title="CLIC PARA EDITAR"
    >
      {value || placeholder || "＋ AGREGAR..."}
    </div>
  );
};

export default function SeguimientoProyectos() {
  const [projects, setProjects] = useState(initialProjects);

  const updateField = (projIdx, subIdx, field, val) => {
    setProjects((prev) => {
      const next = prev.map((p) => ({ ...p, subproyectos: p.subproyectos.map((s) => ({ ...s })) }));
      next[projIdx].subproyectos[subIdx][field] = val;
      return next;
    });
  };

  const thStyle = {
    padding: "10px 12px", textAlign: "left", fontSize: 11, fontWeight: 700,
    textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--table-text-head)",
    borderBottom: "2px solid #1E293B", whiteSpace: "nowrap",
  };

  const tdBase = {
    padding: "10px 12px", fontSize: 12, color: "var(--text-secondary)",
    verticalAlign: "top", textTransform: "uppercase",
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--bg-main)", minHeight: "100vh", padding: "20px 12px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ maxWidth: 1400, margin: "0 auto 16px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 10 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "var(--table-bg-dark)", margin: 0, textTransform: "uppercase" }}>
            SEGUIMIENTO DE PROYECTOS
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "3px 0 0", textTransform: "uppercase" }}>AVANTE — 08 DE ABRIL DE 2026</p>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase" }}>
          {[
            { label: "PENDIENTE", color: "#EF4444" },
            { label: "EN PROCESO", color: "#F59E0B" },
            { label: "COMPLETADO", color: "#10B981" },
          ].map((l) => (
            <span key={l.label} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: l.color }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Table */}
      <div style={{
        maxWidth: 1400, margin: "0 auto", background: "var(--text-main)FFF", borderRadius: 10,
        boxShadow: "var(--shadow-main)",
        overflowX: "auto",
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 1050 }}>
          <thead>
            <tr style={{ background: "var(--table-bg-dark)" }}>
              <th style={{ ...thStyle, width: 36, textAlign: "center" }}>#</th>
              <th style={{ ...thStyle, width: 150 }}>PROYECTO</th>
              <th style={{ ...thStyle, width: 130 }}>ESTADO PROYECTO</th>
              <th style={{ ...thStyle, width: 170 }}>SUBPROYECTO</th>
              <th style={{ ...thStyle, width: 120 }}>ESTADO SUB.</th>
              <th style={{ ...thStyle }}>DETALLE</th>
              <th style={{ ...thStyle, width: 110 }}>RESPONSABLE</th>
              <th style={{ ...thStyle, width: 170 }}>IMPACTO</th>
              <th style={{ ...thStyle, width: 170 }}>COMENTARIOS</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, pi) =>
              proj.subproyectos.map((sub, si) => {
                const isFirst = si === 0;
                const isLast = si === proj.subproyectos.length - 1;
                const stripeBg = pi % 2 === 0 ? "var(--text-main)FFF" : "var(--table-bg-alt)";
                const rowBorder = isLast ? "2.5px solid var(--text-secondary)" : "1px solid var(--border-table-light)";
                const groupBorder = "2.5px solid var(--text-secondary)";

                return (
                  <tr key={sub.id} style={{ background: stripeBg }}>
                    {isFirst && (
                      <td
                        rowSpan={proj.subproyectos.length}
                        style={{
                          ...tdBase, borderBottom: groupBorder,
                          fontWeight: 700, color: "var(--text-subtlest)", textAlign: "center",
                          verticalAlign: "middle", background: stripeBg,
                          borderRight: "1px solid var(--border-table-light)",
                        }}
                      >
                        {proj.id}
                      </td>
                    )}

                    {isFirst && (
                      <td
                        rowSpan={proj.subproyectos.length}
                        style={{
                          ...tdBase, borderBottom: groupBorder,
                          fontWeight: 700, color: "var(--table-bg-dark)", fontSize: 13,
                          verticalAlign: "middle", lineHeight: 1.4,
                          background: stripeBg, borderRight: "1px solid var(--border-table-light)",
                        }}
                      >
                        {proj.proyecto}
                      </td>
                    )}

                    {isFirst && (
                      <td
                        rowSpan={proj.subproyectos.length}
                        style={{
                          ...tdBase, borderBottom: groupBorder,
                          verticalAlign: "middle", textAlign: "center",
                          background: stripeBg, borderRight: "1px solid var(--border-table-light)",
                        }}
                      >
                        <StatusBadge estado={proj.estadoGeneral} color={proj.estadoGeneralColor} />
                      </td>
                    )}

                    <td style={{ ...tdBase, borderBottom: rowBorder, fontWeight: 600, color: "var(--text-main)" }}>
                      {sub.nombre}
                    </td>

                    <td style={{ ...tdBase, borderBottom: rowBorder }}>
                      <StatusBadge estado={sub.estado} color={sub.color} />
                    </td>

                    <td style={{ ...tdBase, borderBottom: rowBorder, lineHeight: 1.5 }}>
                      {sub.detalle}
                    </td>

                    <td style={{ ...tdBase, borderBottom: rowBorder, fontWeight: 500 }}>
                      {sub.responsable}
                    </td>

                    {/* Impacto — editable */}
                    <td style={{ ...tdBase, borderBottom: rowBorder, padding: "8px 10px", textTransform: "none" }}>
                      <EditableCell
                        value={sub.impacto}
                        onChange={(v) => updateField(pi, si, "impacto", v)}
                        placeholder="＋ AGREGAR IMPACTO..."
                        accentColor="#EF4444"
                      />
                    </td>

                    {/* Comentarios — editable */}
                    <td style={{ ...tdBase, borderBottom: rowBorder, padding: "8px 10px", textTransform: "none" }}>
                      <EditableCell
                        value={sub.comentario}
                        onChange={(v) => updateField(pi, si, "comentario", v)}
                        placeholder="＋ AGREGAR COMENTARIO..."
                        accentColor="#3B82F6"
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <p style={{ maxWidth: 1400, margin: "10px auto 0", fontSize: 11, color: "var(--text-subtlest)", textAlign: "center", textTransform: "uppercase" }}>
        HAZ CLIC EN LAS COLUMNAS DE IMPACTO O COMENTARIOS PARA AGREGAR NOTAS A CADA SUBPROYECTO.
      </p>
    </div>
  );
}
