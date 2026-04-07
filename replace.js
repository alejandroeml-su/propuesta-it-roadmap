const fs = require('fs');

let content = fs.readFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', 'utf8');

content = content.replace(/Gerencia de Tecnología/g, "Tecnología y Transformación Digital");
content = content.replace(/Gerente de Tecnología y Transformación Digital/g, "Tecnología y Transformación Digital");
content = content.replace(/Gerente de Tecnología/g, "Tecnología y Transformación Digital");
content = content.replace(/Jefatura/g, "Líder");
content = content.replace(/Jefe de Infraestructura y Operaciones/g, "Líder de Infraestructura y Operaciones");

// Update menu
content = content.replace(
  `["org", "👥 Estructura y Roles"], ["interactive-timeline"`,
  `["org", "👥 Estructura y Roles"], ["hierarchy", "🌳 Jerarquía"], ["interactive-timeline"`
);

const hierarchyView = `
      {viewMode === "hierarchy" && (
        <div style={{ maxWidth: 850, margin: "0 auto", padding: "10px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Jerarquía Mínima Viable</h2>
            <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Distribución y mínimo headcount requerido por área</p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            <div style={{ width: "80%", height: 2, background: "#7678ED88", position: "relative" }}>
              <div style={{ position: "absolute", left: "0%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "25%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "75%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "100%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
            </div>
            
            {/* Children grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", width: "100%", gap: 12, marginTop: 16 }}>
              {orgStructure.map((cell, idx) => {
                const min = parseInt(cell.headcount.replace(/\\D.*/g, '')) || 1;
                return (
                  <div key={idx} style={{
                    background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "14px 10px",
                    borderTop: \`4px solid \${cell.accent}\`, textAlign: "center",
                    borderLeft: "1px solid rgba(255,255,255,0.05)", borderRight: "1px solid rgba(255,255,255,0.05)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    display: "flex", flexDirection: "column", alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: cell.accent, marginBottom: 12, lineHeight: 1.3 }}>{cell.title}</div>
                    
                    <div>
                        <div style={{ fontSize: 10, color: "#a0a8bc", marginBottom: 3 }}>Líderes</div>
                        <div style={{
                          background: \`\${cell.accent}15\`, color: cell.accent,
                          fontSize: 12, fontWeight: 800, padding: "4px 12px", borderRadius: 12, display: "inline-block"
                        }}>
                          Mínimo: {min}
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
`;

content = content.replace('{viewMode === "interactive-timeline" && (', hierarchyView + '\n      {viewMode === "interactive-timeline" && (');

fs.writeFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', content);
fs.writeFileSync('c:/proyecto/propuestaIT/vite-app/src/App.jsx', content);
