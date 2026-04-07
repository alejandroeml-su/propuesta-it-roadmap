const fs = require('fs');

let content = fs.readFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', 'utf8');

const marketSalariesObj = `
const marketSalaries = {
  "Líder de Infraestructura y Operaciones": 1800,
  "Técnico de Soporte N1 — Mesa de Ayuda": 750,
  "Técnico de Soporte N2 — Especialista en Redes": 1100,
  "Auxiliar de Inventario y Logística TI": 600,
  "Ingeniero de Cloud & Seguridad (Lead)": 2800,
  "Analista de Ciberseguridad": 1600,
  "Administrador Cloud Junior (Fase 4)": 1000,
  "Líder de Sistemas Core / Analista Funcional Senior": 2500,
  "Analista Técnico de Odoo": 1900,
  "Analista de Sistemas Clínicos (HIS)": 1700,
  "Analista de Soporte Funcional N2": 950,
  "Líder de Desarrollo / Tech Lead": 3200,
  "Desarrollador Fullstack Senior": 2400,
  "Desarrollador Fullstack Junior": 1100,
  "QA / Tester (Fase 4)": 1300,
  "Coordinador de Gobernanza TI / PMO": 2200,
  "Analista de Procesos y Compras TI": 1200,
  "Asistente de Gobernanza (según volumen)": 700
};
`;

if (!content.includes('const marketSalaries')) {
  // insert before timelineTasks
  content = content.replace('const timelineTasks = [];', marketSalariesObj + '\nconst timelineTasks = [];');
}

const stateDef = 'const [expandedHierarchyNode, setExpandedHierarchyNode] = useState(null);\n  const toggleHierarchyNode = (idx) => {\n    setExpandedHierarchyNode(expandedHierarchyNode === idx ? null : idx);\n  };\n';
if (!content.includes('expandedHierarchyNode')) {
  content = content.replace('const [timelineIndex, setTimelineIndex] = useState(0);', 'const [timelineIndex, setTimelineIndex] = useState(0);\n  ' + stateDef);
}

const newHierarchy = `
      {viewMode === "hierarchy" && (
        <div style={{ maxWidth: 950, margin: "0 auto", padding: "10px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Jerarquía Mínima Viable y Costo Operativo</h2>
            <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Clic en cada nodo para ver los roles en detalle. Estructura base para el plan.</p>
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
            <div style={{ width: "80%", height: 2, background: "#7678ED88", position: "relative" }}>
              <div style={{ position: "absolute", left: "16%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "50%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
              <div style={{ position: "absolute", left: "84%", top: 0, width: 2, height: 16, background: "#7678ED88" }} />
            </div>
            
            {/* Children logic mapping into 3 groups */}
            <div style={{ display: "flex", width: "100%", justifyContent: "space-between", gap: 16, marginTop: 16 }}>
              
              {/* Group 1: Tecnología */}
              <div style={{ position: "relative", border: "2px dashed rgba(91, 192, 190, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 2 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(91, 192, 190, 0.8)", textTransform: "uppercase" }}>Tecnología</div>
                {[orgStructure[0], orgStructure[1]].map((cell, idx) => {
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
              <div style={{ position: "relative", border: "2px dashed rgba(240, 165, 0, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", gap: 12, flex: 2 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(240, 165, 0, 0.8)", textTransform: "uppercase" }}>Sistemas y Desarrollo</div>
                {[orgStructure[2], orgStructure[3]].map((cell, idx) => {
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

              {/* Group 3: Gobernanza (Single) */}
              <div style={{ position: "relative", border: "2px dashed rgba(42, 157, 143, 0.4)", borderRadius: 16, padding: "16px 12px 28px", display: "flex", flex: 1 }}>
                <div style={{ position: "absolute", bottom: 6, left: 12, fontSize: 11, fontWeight: 700, color: "rgba(42, 157, 143, 0.8)", textTransform: "uppercase" }}>Gestión</div>
                {[orgStructure[4]].map((cell, idx) => {
                  const originalIdx = 4;
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
              ** Se ha calculado utilizando el headcount <strong>MÍNIMO</strong> requerido descrito en la estructura. Este valor corresponde únicamente a salarios brutos base y NO incluye cargas patronales, aguinaldos, indemnizaciones u otras prestaciones de ley.
            </div>
          </div>
        </div>
      )}
`;

const regex = /{viewMode === "hierarchy" && \([\s\S]*?(?={viewMode === "interactive-timeline" && \()/;
content = content.replace(regex, newHierarchy + '\n\n      ');

fs.writeFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', content);
fs.writeFileSync('c:/proyecto/propuestaIT/vite-app/src/App.jsx', content);
