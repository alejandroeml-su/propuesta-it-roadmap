const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx',
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Regex string for finding the main container div
  const targetRegex = /\{\/\* CRONOGRAMA EJECUCION \(MAIN BAR\) \*\/\}\s*<div style=\{\{ background: "rgba\(255,255,255,0\.02\)", padding: 24, borderRadius: 16, border: "1px solid rgba\(255,255,255,0\.05\)" \}\}>/g;
  
  const replacement = `{/* CRONOGRAMA EJECUCION (MAIN BAR) */}
          <div style={{ position: "relative", background: "rgba(255,255,255,0.02)", padding: "24px 24px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
            {/* Indicador de Porcentaje en la esquina superior derecha */}
            <div style={{ position: "absolute", top: 20, right: 24, display: "flex", flexDirection: "column", alignItems: "flex-end", zIndex: 10 }}>
              <div style={{ fontSize: 9, color: "#6a7490", marginBottom: 4, textTransform: "uppercase", fontWeight: 700, letterSpacing: 0.5 }}>Avance</div>
              <div style={{ 
                background: \`\${timelineTasks[timelineIndex].phaseAccent}15\`, 
                color: timelineTasks[timelineIndex].phaseAccent, 
                padding: "4px 12px", borderRadius: 20, fontSize: 16, fontWeight: 800, 
                border: \`1px solid \${timelineTasks[timelineIndex].phaseAccent}55\`, 
                boxShadow: \`0 0 15px \${timelineTasks[timelineIndex].phaseAccent}22\`, 
                transition: "all 0.3s ease", display: "inline-block" 
              }}>
                {Math.round(((timelineIndex + 1) / timelineTasks.length) * 100)}%
              </div>
            </div>`;

  if (content.match(targetRegex)) {
    content = content.replace(targetRegex, replacement);
  }
  
  fs.writeFileSync(file, content);
});

console.log("Porcentaje global agregado a la esquina superior derecha.");
