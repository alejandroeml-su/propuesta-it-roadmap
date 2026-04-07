const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx',
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Insert the hover state for hiring milestones
  if (!content.includes('const [hoveredHireIndex, setHoveredHireIndex] = useState(null)')) {
    content = content.replace(
      'const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);',
      'const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);\n  const [hoveredHireIndex, setHoveredHireIndex] = useState(null);'
    );
  }

  // The new segmented block
  const replacement = `      {viewMode === "interactive-timeline" && (
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          
          {/* TIMELINE CONTRATACIONES */}
          <div style={{ marginBottom: 30, background: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, color: "#5BC0BE", marginBottom: 4 }}>Timeline de Incorporación de Personal</h2>
              <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Desliza sobre los puntos para identificar la fecha y perfil a contratar</p>
            </div>
            <div style={{ position: "relative", height: 16, margin: "25px 0 15px 0" }}>
              {/* Línea base */}
              <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", width: "100%", height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2 }} />
              
              {/* Hitos */}
              {hiringMilestones.map((hm, i) => {
                const leftPos = (hm.taskIndex / timelineTasks.length) * 100;
                const isHovered = hoveredHireIndex === i;
                return (
                  <div key={i} 
                    onMouseEnter={() => setHoveredHireIndex(i)}
                    onMouseLeave={() => setHoveredHireIndex(null)}
                    style={{ 
                      position: "absolute", left: \`\${leftPos}%\`, top: "50%", transform: "translate(-50%, -50%)", 
                      width: isHovered ? 18 : 12, height: isHovered ? 18 : 12, borderRadius: "50%", 
                      background: hm.color, border: "2px solid #131b2e", cursor: "pointer",
                      transition: "all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)", zIndex: isHovered ? 5 : 2,
                      boxShadow: isHovered ? \`0 0 14px \${hm.color}88\` : "none"
                    }}>
                    {/* Tooltip Hire */}
                    {isHovered && (
                      <div style={{
                        position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)",
                        background: "#1e2538", border: \`1px solid \${hm.color}\`, padding: "10px 14px",
                        borderRadius: 8, whiteSpace: "nowrap", zIndex: 10,
                        boxShadow: "0 5px 15px rgba(0,0,0,0.5)", pointerEvents: "none", textAlign: "center"
                      }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: hm.color, marginBottom: 2 }}>{hm.title}</div>
                        <div style={{ fontSize: 10, color: "#fff" }}>Ingreso: Tarea {hm.taskIndex + 1}</div>
                        <div style={{ fontSize: 10, color: "#a0a8bc", marginTop: 2, fontStyle: "italic" }}>{timelineTasks[hm.taskIndex]?.date || "15/04/2026"}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#6a7490", marginTop: 16 }}>
              <span>Inicio Fases (15 Abril)</span>
              <span>Finalización del Roadmap</span>
            </div>
          </div>

          {/* CRONOGRAMA EJECUCION (MAIN BAR) */}
          <div style={{ background: "rgba(255,255,255,0.02)", padding: 24, borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 18, color: "#7678ED", marginBottom: 4 }}>Cronograma de Ejecución Interactivo</h2>
              <p style={{ fontSize: 12, color: "#6a7490", margin: 0 }}>Desliza sobre la barra para identificar actividades o haz clic para adelantar</p>
            </div>

            <div style={{ position: "relative", marginBottom: 30 }}>
              <div style={{ height: 16, background: "rgba(255,255,255,0.05)", borderRadius: 8, display: "flex", overflow: "visible", position: "relative" }}>
                {/* Progress Fill */}
                <div style={{
                  position: "absolute", top: 0, left: 0, height: "100%",
                  background: \`linear-gradient(90deg, \${timelineTasks[timelineIndex].phaseAccent}44, \${timelineTasks[timelineIndex].phaseAccent})\`,
                  width: \`\${((timelineIndex + 1) / timelineTasks.length) * 100}%\`,
                  transition: "width 0.4s ease-out, background 0.4s ease-out",
                  borderRadius: 8, zIndex: 1, boxShadow: \`0 0 10px \${timelineTasks[timelineIndex].phaseAccent}66\`
                }} />

                {/* Hover Segments */}
                {timelineTasks.map((t, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredTaskIndex(idx)}
                    onMouseLeave={() => setHoveredTaskIndex(null)}
                    onClick={() => setTimelineIndex(idx)}
                    style={{
                      flex: 1, height: "100%", zIndex: 2,
                      borderRight: "1px solid rgba(255,255,255,0.02)",
                      cursor: "pointer",
                      background: hoveredTaskIndex === idx ? "rgba(255,255,255,0.2)" : "transparent",
                    }}
                  />
                ))}
              </div>

              {/* Tooltip Task */}
              {hoveredTaskIndex !== null && (
                <div style={{
                  position: "absolute",
                  bottom: "30px", 
                  left: \`\${(hoveredTaskIndex / timelineTasks.length) * 100}%\`,
                  transform: "translateX(-50%)",
                  background: "#1e2538", border: \`1px solid \${timelineTasks[hoveredTaskIndex].phaseAccent}\`,
                  padding: "12px 16px", borderRadius: 10, width: 240, zIndex: 10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.6)", pointerEvents: "none"
                }}>
                  <div style={{ fontSize: 11, color: timelineTasks[hoveredTaskIndex].phaseAccent, fontWeight: 800, marginBottom: 4 }}>
                    🗓️ {timelineTasks[hoveredTaskIndex].date} · Tarea {hoveredTaskIndex + 1}
                  </div>
                  <div style={{ fontSize: 12, color: "#fff", lineHeight: 1.4, fontWeight: 500 }}>
                    {timelineTasks[hoveredTaskIndex].task}
                  </div>
                  <div style={{ fontSize: 10, color: "#a0a8bc", marginTop: 4 }}>
                    📍 Área: {timelineTasks[hoveredTaskIndex].track}
                  </div>
                </div>
              )}
              
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginTop: 10, color: "#6a7490" }}>
                <span>Inicio Proyectado (15 Abril)</span>
                <span>Progreso: {Math.round(((timelineIndex + 1) / timelineTasks.length) * 100)}%</span>
                <span>Cierre Roadmap</span>
              </div>
            </div>
            
            {/* Contenido Visual Tarea actual */}
            <div style={{
              background: "rgba(255,255,255,0.02)", borderRadius: 12, padding: 24, minHeight: 250,
              border: \`1px solid \${timelineTasks[timelineIndex].phaseAccent}44\`,
              position: "relative", boxShadow: \`0 8px 30px \${timelineTasks[timelineIndex].phaseAccent}15\`,
              transition: "all 0.4s"
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{timelineTasks[timelineIndex].phaseIcon}</span>
                <div>
                  <div style={{ fontSize: 12, color: timelineTasks[timelineIndex].phaseAccent, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>
                    {timelineTasks[timelineIndex].phaseName}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#e0e0e0", marginTop: 2 }}>
                    🗓️ {timelineTasks[timelineIndex].date}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, color: "#6a7490", marginBottom: 4 }}>Área / Hito</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,0.04)", padding: "6px 10px", borderRadius: 8, display: "inline-block" }}>
                  {timelineTasks[timelineIndex].track}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: "#6a7490", marginBottom: 4 }}>Tarea en curso</div>
                <div style={{ fontSize: 14, color: "#ccd0da", lineHeight: 1.5, padding: "0 4px" }}>
                  {timelineTasks[timelineIndex].task}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 16 }}>
                <div style={{ background: "rgba(91, 192, 190, 0.08)", borderLeft: "3px solid #5BC0BE", padding: "12px 14px", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#5BC0BE", marginBottom: 4, textTransform: "uppercase" }}>Objetivo</div>
                  <div style={{ fontSize: 11, color: "#a0a8bc", lineHeight: 1.4 }}>{timelineTasks[timelineIndex].objective}</div>
                </div>
                <div style={{ background: "rgba(240, 165, 0, 0.08)", borderLeft: "3px solid #F0A500", padding: "12px 14px", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: "#F0A500", marginBottom: 4, textTransform: "uppercase" }}>Entregable</div>
                  <div style={{ fontSize: 11, color: "#a0a8bc", lineHeight: 1.4 }}>{timelineTasks[timelineIndex].deliverable}</div>
                </div>
              </div>
            </div>

            {/* Controles */}
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 24 }}>
              <button
                onClick={() => setTimelineIndex(prev => Math.max(0, prev - 1))}
                disabled={timelineIndex === 0}
                style={{
                  flex: 1, padding: "14px", borderRadius: 10, fontSize: 14, fontWeight: 600,
                  background: timelineIndex === 0 ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.05)",
                  color: timelineIndex === 0 ? "#4a5270" : "#e0e0e0",
                  border: "none", cursor: timelineIndex === 0 ? "not-allowed" : "pointer",
                  transition: "all 0.2s"
                }}
              >
                ◀ Anterior
              </button>
              <button
                onClick={() => setTimelineIndex(prev => Math.min(timelineTasks.length - 1, prev + 1))}
                disabled={timelineIndex === timelineTasks.length - 1}
                style={{
                  flex: 1, padding: "14px", borderRadius: 10, fontSize: 14, fontWeight: 600,
                  background: timelineTasks[timelineIndex].phaseAccent,
                  color: "#131b2e",
                  border: "none", cursor: timelineIndex === timelineTasks.length - 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s", boxShadow: \`0 4px 15px \${timelineTasks[timelineIndex].phaseAccent}33\`
                }}
              >
                Siguiente ▶
              </button>
            </div>
          </div>
        </div>
      )}`;

  // Find boundaries
  const regex = /\{viewMode === "interactive-timeline" && \([\s\S]*?(?=\{viewMode === "timeline" && \()/;
  content = content.replace(regex, replacement + '\n\n      ');

  fs.writeFileSync(file, content);
});

console.log("Timelines separados exitosamente.");
