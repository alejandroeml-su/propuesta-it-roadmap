const fs = require('fs');

let content = fs.readFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', 'utf8');

// 1. Replace the entire orgStructure
const startOrg = content.indexOf('const orgStructure = [');
const endOrg = content.indexOf('const marketSalaries');
if (startOrg !== -1 && endOrg !== -1) {
  const newOrgStructure = `const orgStructure = [
  {
    title: "Operaciones e Infraestructura",
    scope: "Soporte Técnico N1/N2, Redes, Cuartos de Comunicaciones (3 edificios), Mantenimiento de Hardware, Inventario",
    color: "#0F4C5C",
    accent: "#5BC0BE",
    headcount: "4",
    justification: "Esta célula es la columna vertebral operativa para soportar más de 200 usuarios y 3 edificios conectando todos los endpoints a las redes seguras.",
    roles: [
      {
        title: "Líder de Infraestructura y Redes",
        type: "Líder",
        description: "Responsable de la infraestructura física, de red y operaciones. Asume también directamente la especialización en redes (switches, APs, enlaces).",
        functions: [
          "Supervisar y gestionar al equipo de soporte técnico N1",
          "Resolver incidentes de red complejos y mantenimiento preventivo de cuartos de comunicaciones",
          "Administrar inventario, infraestructura local y contratos de telecomunicaciones",
        ],
        profile: "Ingeniería en Sistemas, Redes o Telecomunicaciones. Experiencia en Cisco/HP, VLANs, y soporte de usuarios.",
      },
      {
        title: "Técnico de Soporte N1 — Mesa de Ayuda",
        type: "Operativo",
        qty: "3",
        description: "Primer contacto para usuarios. Resuelve problemas básicos y remite a niveles superiores si es requerido.",
        functions: [
          "Recibir y clasificar tickets en el ITSM",
          "Soporte N1: contraseñas, impresoras, red básica, Office",
          "Mantenimiento básico y asignación de equipos de cómputo y periféricos",
        ],
        profile: "Técnico o estudiante. Conocimientos en Windows, redes y excelente atención al cliente.",
      }
    ],
  },
  {
    title: "Cloud & Ciberseguridad",
    scope: "Administración AWS/EKS, Políticas de Seguridad, DRP",
    color: "#6B2737",
    accent: "#E63946",
    headcount: "1",
    justification: "Responsable central único para administrar la nube de AWS y velar por la ciberseguridad general del entorno HIS/ERP.",
    roles: [
      {
        title: "Ingeniero de Cloud & Seguridad (Lead)",
        type: "Líder",
        description: "Único responsable de AWS, postura de ciberseguridad y DRP de toda la organización.",
        functions: [
          "Administrar infraestructura AWS: EC2, EKS, RDS, S3",
          "Gestionar postura de seguridad corporativa y monitoreo de SIEM/alertas",
          "Diseñar y accionar el DRP (Disaster Recovery Plan) y respaldos",
        ],
        profile: "Profesional Senior en Cloud (AWS) y Ciberseguridad. Capacidad de administrar end-to-end.",
      }
    ],
  },
  {
    title: "Sistemas Core Empresariales",
    scope: "Soporte Odoo 18 y HIS, Gestión de Proveedores",
    color: "#1B3A4B",
    accent: "#F0A500",
    headcount: "2",
    justification: "Equipo compacto enfocado en velar por el buen funcionamiento y el contacto con los proveedores del HIS y Odoo.",
    roles: [
      {
        title: "Líder de Sistemas Core / Analista Funcional Senior",
        type: "Líder",
        description: "Puente Odoo 18, procesos de negocio e integraciones. Lidera funcionalmente los requerimientos.",
        functions: [
          "Liderar procesos y soporte funcional de Odoo 18 y módulos empresariales",
          "Traducir necesidades del negocio a las plataformas",
          "Evaluar requerimientos y trabajar de la mano con RRHH, Finanzas",
        ],
        profile: "Conocimiento avanzado en Odoo y análisis de procesos de negocio.",
      },
      {
        title: "Analista de Sistemas Clínicos (HIS)",
        type: "Especialista",
        qty: "1",
        description: "Dedicado a asegurar el HIS y sus flujos clínicos resolviendo y escalando incidentes.",
        functions: [
          "Soporte de sistemas funcionales L2 del HIS para médicos y enfermeras",
          "Gestionar flujos de admisión, consultas y reportes",
          "Interoperabilidad y capacitación base",
        ],
        profile: "Ingeniero/Licenciado enfocado en Salud/Informática.",
      }
    ],
  },
  {
    title: "Fábrica de Software",
    scope: "Desarrollo de integraciones (React, Node, Prisma)",
    color: "#3D348B",
    accent: "#7678ED",
    headcount: "2",
    justification: "Desarrollo on-demand para cubrir brechas con soluciones a medida que reducen fricción operativa.",
    roles: [
      {
        title: "Líder de Desarrollo / Tech Lead",
        type: "Líder",
        description: "Dirige arquitectura de nuevos productos y APIs de integración.",
        functions: [
          "Arquitectura con React, Node.js y bases de datos.",
          "Creación de servicios para la interoperabilidad de Odoo ↔ HIS",
          "CI/CD y calidad de código general.",
        ],
        profile: "Desarrollador Senior Fullstack con dotes de liderazgo.",
      },
      {
        title: "Desarrollador Fullstack Senior",
        type: "Especialista",
        qty: "1",
        description: "Despliega integraciones complejas bajo el lineamiento del tech lead.",
        functions: [
          "Desarrollo frontend y backend de herramientas internas",
          "Soporte en mantenimiento y mejoras",
          "Optimización de consultas",
        ],
        profile: "Desarrollador Fullstack en ecosistema JS y bases relacionales.",
      }
    ],
  }
];\n\n`;
  content = content.substring(0, startOrg) + newOrgStructure + content.substring(endOrg);
}

// 2. Modify marketSalaries
const startMarket = content.indexOf('const marketSalaries');
const endMarket = content.indexOf('const timelineTasks = [];');
if (startMarket !== -1 && endMarket !== -1) {
  const newSalaries = `const marketSalaries = {
  "Líder de Infraestructura y Redes": 1900,
  "Técnico de Soporte N1 — Mesa de Ayuda": 750,
  "Ingeniero de Cloud & Seguridad (Lead)": 2800,
  "Líder de Sistemas Core / Analista Funcional Senior": 2500,
  "Analista de Sistemas Clínicos (HIS)": 1700,
  "Líder de Desarrollo / Tech Lead": 3200,
  "Desarrollador Fullstack Senior": 2400
};
\n`;
  content = content.substring(0, startMarket) + newSalaries + content.substring(endMarket);
}

// 3. Resumen text
content = content.replace(/Resumen: 14–21 personas \+ Tecnología y Transformación Digital/g, "Resumen: 9 personas + Tecnología y Transformación Digital");
content = content.replace(/5 células.*Gobernanza"/g, '4 células", "Ops, Cloud, Core, Dev"');

// 4. Hierarchy view redesign
const startHierarchy = content.indexOf('{viewMode === "hierarchy" && (');
const endHierarchyBlock = content.indexOf('{viewMode === "interactive-timeline" && (');

if (startHierarchy !== -1 && endHierarchyBlock !== -1) {
  const newHierarchy = `      {viewMode === "hierarchy" && (
        <div style={{ maxWidth: 950, margin: "0 auto", padding: "10px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Jerarquía Mínima Viable y Costo Operativo</h2>
            <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Clic en cada nodo para ver los roles en detalle. Estructura ajustada (9 personas base).</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 40 }}>
            {/* Root Node */}
            <div style={{
              background: "linear-gradient(135deg, #3D348B, #7678ED)",
              borderRadius: 12, padding: "14px 20px",
              boxShadow: "0 8px 24px rgba(118, 120, 237, 0.2)",
              textAlign: "center", border: "1px solid #7678ED44", zIndex: 2
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 0.5 }}>Tecnología y Transformación Digital</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 4 }}>Estrategia · Alineación de Negocio</div>
            </div>
            
            {/* Line down to children */}
            <div style={{ width: 2, height: 25, background: "#7678ED88" }} />
            
            {/* Horizontal connection line */}
            <div style={{ width: "60%", height: 2, background: "#7678ED88", position: "relative" }}>
              <div style={{ position: "absolute", left: "0%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "100%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
            </div>
            
            {/* Children logic mapping into 2 groups */}
            <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: 30, marginTop: 16 }}>
              
              {/* Group 1: Tecnología */}
              <div style={{ position: "relative", border: "2px dashed rgba(91, 192, 190, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 1, maxWidth: 450 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(91, 192, 190, 0.8)", textTransform: "uppercase" }}>Tecnología</div>
                {[orgStructure[0], orgStructure[1]].map((cell, idx) => {
                  if (!cell) return null;
                  const originalIdx = idx; // 0 or 1
                  const min = parseInt(cell.headcount.replace(/\\D.*/g, '')) || 1;
                  const isExpanded = expandedHierarchyNode === originalIdx;
                  return (
                    <div key={originalIdx} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div onClick={() => toggleHierarchyNode(originalIdx)} style={{
                        background: isExpanded ? \`linear-gradient(135deg, \${cell.color}, \${cell.color}cc)\` : "rgba(255,255,255,0.03)", 
                        borderRadius: 12, padding: "14px 10px", cursor: "pointer", transition: "all 0.2s",
                        borderTop: \`4px solid \${cell.accent}\`, textAlign: "center",
                        borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)",
                        borderBottom: isExpanded ? "none" : "1px solid rgba(255,255,255,0.05)",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: isExpanded ? "auto" : "100%"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: cell.accent, marginBottom: 12, lineHeight: 1.3 }}>{cell.title}</div>
                        <div>
                            <div style={{ fontSize: 10, color: "#a0a8bc", marginBottom: 3 }}>Plantilla Min.</div>
                            <div style={{ background: \`\${cell.accent}15\`, color: cell.accent, fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, display: "inline-block" }}>
                              {min}
                            </div>
                        </div>
                      </div>
                      {isExpanded && (
                        <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "0 0 12px 12px", border: \`1px solid rgba(255,255,255,0.05)\`, borderTop: "none", padding: "12px 10px", marginTop: 0, height: "100%" }}>
                          {cell.roles.map((rol, ri) => (
                            <div key={ri} style={{ fontSize: 11, color: "#ccd0da", marginBottom: 8, lineHeight: 1.3, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                              <div style={{ color: cell.accent, fontWeight: 700 }}>• {rol.title}</div>
                              <div style={{ opacity: 0.7, fontSize: 10, marginTop: 2, paddingLeft: 10 }}>{rol.type} {(rol.qty && parseInt(rol.qty.replace(/\\D.*/g, ''))) ? \`(x\${parseInt(rol.qty.replace(/\\D.*/g, ''))})\` : '(x1)'}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Group 2: Sistemas y Desarrollo */}
              <div style={{ position: "relative", border: "2px dashed rgba(240, 165, 0, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 1, maxWidth: 450 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(240, 165, 0, 0.8)", textTransform: "uppercase" }}>Sistemas y Desarrollo</div>
                {[orgStructure[2], orgStructure[3]].map((cell, idx) => {
                  if (!cell) return null;
                  const originalIdx = idx + 2; // 2 or 3
                  const min = parseInt(cell.headcount.replace(/\\D.*/g, '')) || 1;
                  const isExpanded = expandedHierarchyNode === originalIdx;
                  return (
                    <div key={originalIdx} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                      <div onClick={() => toggleHierarchyNode(originalIdx)} style={{
                        background: isExpanded ? \`linear-gradient(135deg, \${cell.color}, \${cell.color}cc)\` : "rgba(255,255,255,0.03)", 
                        borderRadius: 12, padding: "14px 10px", cursor: "pointer", transition: "all 0.2s",
                        borderTop: \`4px solid \${cell.accent}\`, textAlign: "center",
                        borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)",
                        borderBottom: isExpanded ? "none" : "1px solid rgba(255,255,255,0.05)",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: isExpanded ? "auto" : "100%"
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: cell.accent, marginBottom: 12, lineHeight: 1.3 }}>{cell.title}</div>
                        <div>
                            <div style={{ fontSize: 10, color: "#a0a8bc", marginBottom: 3 }}>Plantilla Min.</div>
                            <div style={{ background: \`\${cell.accent}15\`, color: cell.accent, fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, display: "inline-block" }}>
                              {min}
                            </div>
                        </div>
                      </div>
                      {isExpanded && (
                        <div style={{ background: "rgba(0,0,0,0.2)", borderRadius: "0 0 12px 12px", border: \`1px solid rgba(255,255,255,0.05)\`, borderTop: "none", padding: "12px 10px", marginTop: 0, height: "100%" }}>
                          {cell.roles.map((rol, ri) => (
                            <div key={ri} style={{ fontSize: 11, color: "#ccd0da", marginBottom: 8, lineHeight: 1.3, paddingBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                              <div style={{ color: cell.accent, fontWeight: 700 }}>• {rol.title}</div>
                              <div style={{ opacity: 0.7, fontSize: 10, marginTop: 2, paddingLeft: 10 }}>{rol.type} {(rol.qty && parseInt(rol.qty.replace(/\\D.*/g, ''))) ? \`(x\${parseInt(rol.qty.replace(/\\D.*/g, ''))})\` : '(x1)'}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          <div style={{ marginTop: 40, background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "24px 32px", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h3 style={{ margin: "0 0 20px 0", fontSize: 16, color: "#5BC0BE" }}>Tabla de Proyección Salarial (Promedio de Mercado - El Salvador)</h3>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.05)", color: "#a0a8bc", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <th style={{ padding: "10px 12px", fontWeight: 600 }}>Área</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600 }}>Puesto / Rol</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "center" }}>Cantidad Mínima</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "right" }}>Salario Base Unitario</th>
                    <th style={{ padding: "10px 12px", fontWeight: 600, textAlign: "right" }}>Costo Total / Mes</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    let grandTotal = 0;
                    return orgStructure.map((area, ai) => {
                      return area.roles.map((role, ri) => {
                        let qty = 1;
                        if (role.qty) {
                          qty = parseInt(role.qty.replace(/\\D.*/g, '')) || 0;
                        }
                        if (qty === 0) return null;
                        
                        const unitSalary = marketSalaries[role.title] || 1000;
                        const rowTotal = unitSalary * qty;
                        grandTotal += rowTotal;

                        return (
                          <tr key={\`\${ai}-\${ri}\`} style={{ borderBottom: "1px solid rgba(255,255,255,0.02)", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                            <td style={{ padding: "12px", color: area.accent, fontWeight: 600, opacity: ri === 0 ? 1 : 0.6 }}>{area.title}</td>
                            <td style={{ padding: "12px", color: "#e0e0e0" }}>{role.title}</td>
                            <td style={{ padding: "12px", textAlign: "center", fontWeight: 700, color: "#fff" }}>{qty}</td>
                            <td style={{ padding: "12px", textAlign: "right" }}>$ {unitSalary.toLocaleString('en-US')}.00</td>
                            <td style={{ padding: "12px", textAlign: "right", fontWeight: 700, color: "#7678ED" }}>$ {rowTotal.toLocaleString('en-US')}.00</td>
                          </tr>
                        );
                      });
                    }).concat(
                      <tr key="total" style={{ background: "rgba(91, 192, 190, 0.1)", borderTop: "2px solid #5BC0BE" }}>
                        <td colSpan={4} style={{ padding: "16px", textAlign: "right", fontWeight: 800, color: "#5BC0BE", fontSize: 14 }}>Costo Salarial Mínimo Estimado (Plantilla Mensual):</td>
                        <td style={{ padding: "16px", textAlign: "right", fontWeight: 800, color: "#5BC0BE", fontSize: 15 }}>$ {grandTotal.toLocaleString('en-US')}.00</td>
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
            </div>
            <div style={{ fontSize: 10, color: "#6a7490", marginTop: 14, fontStyle: "italic", lineHeight: 1.5 }}>
              * Valores en USD. Los salarios reflejan un estimado del percentil 50 de mercado regional (El Salvador) para roles de TI de esta categoría en industria corporativa. <br/>
              ** Se ha calculado utilizando el headcount <strong>MÍNIMO</strong> requerido descrito en la estructura ajustada a 9 recursos base. Este valor corresponde únicamente a salarios brutos base y NO incluye cargas patronales, aguinaldos, indemnizaciones u otras prestaciones de ley ni cargos gerenciales.
            </div>
          </div>
        </div>
      )}\n\n`;
  content = content.substring(0, startHierarchy) + newHierarchy + content.substring(endHierarchyBlock);
}

fs.writeFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', content);
fs.writeFileSync('c:/proyecto/propuestaIT/vite-app/src/App.jsx', content);
