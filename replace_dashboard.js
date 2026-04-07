const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx',
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');

  // Asegurarnos de que el state esté
  if (!content.includes('const [globalPage, setGlobalPage] = useState("to-be");')) {
    content = content.replace(
      'export default function RoadmapApp() {',
      'export default function RoadmapApp() {\n  const [globalPage, setGlobalPage] = useState("to-be");'
    );
  }

  // Target Regex para el inicio (Captura todo desde return ( hasta el div del titulo principal)
  const rootRegex = /return\s*\([\s\S]*?<div style=\{\{\s*textAlign:\s*"center",\s*marginBottom:\s*28\s*\}\}>/m;
  
  const layoutStart = `return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0b1120", color: "#e2e8f0", fontFamily: "system-ui, sans-serif" }}>
      <style>{\`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      \`}</style>
      
      {/* Sidebar Opciones */}
      <div style={{ width: 250, borderRight: "1px solid rgba(255,255,255,0.05)", background: "#060913", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "30px 24px", borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
          <h1 style={{ margin: 0, fontSize: 18, color: "#fff", letterSpacing: 0.5, fontWeight: 800 }}>Inversiones Avante</h1>
          <div style={{ fontSize: 11, color: "#a0a8bc", marginTop: 6, opacity: 0.8 }}>IT Strategic Planning</div>
        </div>
        
        <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#4a5270", marginBottom: 8, paddingLeft: 8, textTransform: "uppercase", letterSpacing: 1 }}>Vistas del Roadmap</div>
          
          <button onClick={() => setGlobalPage("as-is")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "as-is" ? "rgba(91, 192, 190, 0.1)" : "transparent",
            color: globalPage === "as-is" ? "#5BC0BE" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "as-is" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            AS-IS
          </button>

          <button onClick={() => setGlobalPage("gap")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "gap" ? "rgba(240, 165, 0, 0.1)" : "transparent",
            color: globalPage === "gap" ? "#F0A500" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "gap" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🌉</span>
            GAP Análisis
          </button>

          <button onClick={() => setGlobalPage("to-be")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "to-be" ? "rgba(118, 120, 237, 0.1)" : "transparent",
            color: globalPage === "to-be" ? "#7678ED" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "to-be" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🚀</span>
            TO-BE (Propuesta)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, height: "100vh", overflowY: "auto", position: "relative", background: "linear-gradient(160deg, #070b14 0%, #0f1729 40%, #131b2e 100%)" }}>
        
        {/* VISTAS EN CONSTRUCCIÓN */}
        {globalPage === "as-is" && (
          <div style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center", animation: "fadeIn 0.4s" }}>
            <div style={{ fontSize: 70, marginBottom: 20 }}>🔍</div>
            <h2 style={{ fontSize: 32, color: "#fff", marginBottom: 12 }}>Situación Actual (AS-IS)</h2>
            <p style={{ color: "#a0a8bc", fontSize: 16, lineHeight: 1.6 }}>Esta sección documenta la arquitectura técnica, los flujos operativos actuales de negocio y el estado organizativo base previo a la intervención. Identifica qué tenemos actualmente y cómo funciona hoy sin ninguna de las reestructuraciones técnicas planificadas.</p>
            <div style={{ marginTop: 40, border: "2px dashed rgba(255,255,255,0.05)", borderRadius: 16, height: 250, display: "flex", alignItems: "center", justifyContent: "center", color: "#4a5270", fontSize: 14 }}>
              Lienzo habilitado. Pendiente de ingresar matriz y diagramas de estado base...
            </div>
          </div>
        )}

        {globalPage === "gap" && (
          <div style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center", animation: "fadeIn 0.4s" }}>
            <div style={{ fontSize: 70, marginBottom: 20 }}>🌉</div>
            <h2 style={{ fontSize: 32, color: "#fff", marginBottom: 12 }}>GAP Análisis (Brechas)</h2>
            <p style={{ color: "#a0a8bc", fontSize: 16, lineHeight: 1.6 }}>Diagnóstico puntual de deficiencias, cuellos de botella tecnológicos, brechas funcionales de Odoo y riesgos críticos identificados al comparar el AS-IS que tenemos versus el TO-BE que exige un modelo digitalmente maduro, seguro y operacional.</p>
            <div style={{ marginTop: 40, border: "2px dashed rgba(255,255,255,0.05)", borderRadius: 16, height: 250, display: "flex", alignItems: "center", justifyContent: "center", color: "#4a5270", fontSize: 14 }}>
              Lienzo habilitado. Pendiente de ingresar cuadro de brechas y listado de fricciones...
            </div>
          </div>
        )}

        {/* TO-BE (TODO EL CONTENIDO ORIGINAL) */}
        {globalPage === "to-be" && (
          <div style={{ padding: "24px 16px", animation: "fadeIn 0.4s" }}>
            {/* INICIO CONTENIDO PREVIO */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>`;

  if (content.match(rootRegex)) {
    content = content.replace(rootRegex, layoutStart);
    
    // Replace the exact ending
    const endBlockRegex = /      \)}\s*<\/div>\s*\);\s*}\s*$/;
    const newEndBlock = `          </div>
        )}
      </div>
    </div>
  );
}`;
    
    content = content.replace(endBlockRegex, newEndBlock);
    
    fs.writeFileSync(file, content);
    console.log("Aplicado en " + file);
  } else {
    // Check if it already applied
    if (content.includes("Sidebar Opciones")) {
      console.log("Ya estaba aplicado en " + file);
    } else {
      console.log("No hice match en " + file);
    }
  }
});
