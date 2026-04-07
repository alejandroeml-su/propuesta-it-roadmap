const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx',
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Change initial state
  content = content.replace(
    'const [globalPage, setGlobalPage] = useState("to-be");',
    'const [globalPage, setGlobalPage] = useState("inicio");'
  );

  // Add sidebar button correctly before AS-IS
  const asIsButton = '<button onClick={() => setGlobalPage("as-is")}';
  const inicioButton = `<button onClick={() => setGlobalPage("inicio")} style={{
            display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 10,
            background: globalPage === "inicio" ? "rgba(255, 255, 255, 0.08)" : "transparent",
            color: globalPage === "inicio" ? "#ffffff" : "#a0a8bc",
            border: "none", cursor: "pointer", transition: "all 0.2s", textAlign: "left", fontWeight: globalPage === "inicio" ? 700 : 500
          }}>
            <span style={{ fontSize: 18 }}>🏠</span>
            INICIO
          </button>

          <button onClick={() => setGlobalPage("as-is")}`;
  
  if (!content.includes('setGlobalPage("inicio")')) {
      content = content.replace(asIsButton, inicioButton);
  }

  // Add view content correctly before globalPage === "as-is"
  const viewAnchor = '{globalPage === "as-is" && (';
  const viewContent = `{globalPage === "inicio" && (
          <div style={{ height: "100%", paddingBottom: 60, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeIn 0.8s cubic-bezier(0.1, 0.9, 0.2, 1)" }}>
            <h1 style={{
              fontSize: 54, fontWeight: 800, margin: "0 0 16px 0",
              background: "linear-gradient(90deg, #5BC0BE, #7678ED, #F0A500)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.2, textAlign: "center"
            }}>
              Tecnología y Transformación Digital
            </h1>
            <h2 style={{ fontSize: 28, fontWeight: 500, color: "#ccd0da", margin: "0 0 16px 0", letterSpacing: 1.5 }}>
              Análisis y Estructuración
            </h2>
            <div style={{ fontSize: 16, color: "#6a7490", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase" }}>
              Abril 2026
            </div>
          </div>
        )}

        {globalPage === "as-is" && (`

  if (!content.includes('globalPage === "inicio" && (')) {
      content = content.replace(viewAnchor, viewContent);
  }

  fs.writeFileSync(file, content);
});

console.log("Se agregó la pestaña de INICIO correctamente.");
