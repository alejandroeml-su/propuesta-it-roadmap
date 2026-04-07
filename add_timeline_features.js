const fs = require('fs');

let content = fs.readFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', 'utf8');

if (!content.includes('const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);')) {
  content = content.replace('const [timelineIndex, setTimelineIndex] = useState(0);', 'const [timelineIndex, setTimelineIndex] = useState(0);\n  const [hoveredTaskIndex, setHoveredTaskIndex] = useState(null);');
}

if (!content.includes('const hiringMilestones =')) {
  const milestones = `
const hiringMilestones = [
  { taskIndex: 0, title: "Líder Infra/Redes", color: "#5BC0BE" },
  { taskIndex: 12, title: "Cloud Lead", color: "#E63946" },
  { taskIndex: 25, title: "Soporte N1 (x3)", color: "#5BC0BE" },
  { taskIndex: 45, title: "Líneas Core", color: "#F0A500" },
  { taskIndex: 60, title: "Dev Team", color: "#7678ED" }
];
`;
  content = content.replace('export default function RoadmapApp() {', milestones + '\nexport default function RoadmapApp() {');
}

const originalProgressBarBlock = `          <div style={{ position: "relative", marginBottom: 20 }}>
            {/* Barra de progreso general */}
            <div style={{ height: 6, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                background: timelineTasks[timelineIndex].phaseAccent,
                width: \`\${((timelineIndex + 1) / timelineTasks.length) * 100}%\`,
                transition: "width 0.4s ease-out, background 0.4s ease-out"
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginTop: 6, color: "#6a7490" }}>
              <span>Inicio: 15 Abril</span>
              <span>Tarea {timelineIndex + 1} de {timelineTasks.length}</span>
              <span>Fin Proyectado</span>
            </div>
          </div>`;

const newProgressBarBlock = `          <div style={{ position: "relative", marginBottom: 40, marginTop: 20 }}>
            {/* Hitos de contratación paralelos */}
            <div style={{ position: "relative", height: 24, marginBottom: 4 }}>
              <div style={{ fontSize: 9, color: "#a0a8bc", position: "absolute", top: 0, left: 0, fontStyle: "italic" }}>
                Timeline de Contrataciones:
              </div>
              <div style={{ position: "relative", width: "100%", height: "100%", marginTop: 12 }}>
                {hiringMilestones.map((hm, i) => {
                  const leftPos = (hm.taskIndex / timelineTasks.length) * 100;
                  return (
                    <div key={i} style={{ position: "absolute", left: \`\${leftPos}%\`, top: 0, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ fontSize: 9, fontWeight: 700, color: hm.color, whiteSpace: "nowrap", marginBottom: 2, background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: 4 }}>{hm.title}</div>
                      <div style={{ width: 2, height: 6, background: hm.color }} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Barra de progreso interactiva (Hover para ver tareas planificadas) */}
            <div style={{ position: "relative" }}>
              <div style={{ height: 12, background: "rgba(255,255,255,0.05)", borderRadius: 6, display: "flex", overflow: "visible", position: "relative" }}>
                
                {/* Progress Fill Indicator */}
                <div style={{
                  position: "absolute", top: 0, left: 0, height: "100%",
                  background: \`linear-gradient(90deg, \${timelineTasks[timelineIndex].phaseAccent}44, \${timelineTasks[timelineIndex].phaseAccent})\`,
                  width: \`\${((timelineIndex + 1) / timelineTasks.length) * 100}%\`,
                  transition: "width 0.4s ease-out, background 0.4s ease-out",
                  borderRadius: 6, zIndex: 1, boxShadow: \`0 0 10px \${timelineTasks[timelineIndex].phaseAccent}66\`
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
                      background: hoveredTaskIndex === idx ? "rgba(255,255,255,0.3)" : "transparent",
                    }}
                  />
                ))}
              </div>

              {/* Tooltip flotante al hacer hover sobre un segmento de la barra */}
              {hoveredTaskIndex !== null && (
                <div style={{
                  position: "absolute",
                  bottom: "20px", 
                  left: \`\${(hoveredTaskIndex / timelineTasks.length) * 100}%\`,
                  transform: "translateX(-50%)",
                  background: "#1e2538", border: \`1px solid \${timelineTasks[hoveredTaskIndex].phaseAccent}\`,
                  padding: "10px 14px", borderRadius: 8, width: 220, zIndex: 10,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)", pointerEvents: "none"
                }}>
                  <div style={{ fontSize: 10, color: timelineTasks[hoveredTaskIndex].phaseAccent, fontWeight: 700, marginBottom: 4 }}>
                    {timelineTasks[hoveredTaskIndex].date} · Tarea {hoveredTaskIndex + 1}
                  </div>
                  <div style={{ fontSize: 11, color: "#fff", lineHeight: 1.4 }}>
                    {timelineTasks[hoveredTaskIndex].task}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, marginTop: 6, color: "#6a7490" }}>
              <span>Inicio: 15 Abril</span>
              <span>Progreso: {Math.round(((timelineIndex + 1) / timelineTasks.length) * 100)}%</span>
              <span>Fin Proyectado</span>
            </div>
          </div>`;

content = content.replace(originalProgressBarBlock, newProgressBarBlock);

fs.writeFileSync('c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx', content);
fs.writeFileSync('c:/proyecto/propuestaIT/vite-app/src/App.jsx', content);
