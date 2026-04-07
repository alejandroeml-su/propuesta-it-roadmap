const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx',
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Insertar activities en Operaciones e Infraestructura
  const rep1 = `justification: "Esta célula es la columna vertebral operativa para soportar más de 200 usuarios y 3 edificios conectando todos los endpoints a las redes seguras.",
    activities: [
      "Monitoreo y mantenimiento preventivo/correctivo de enlaces y cuartos de comunicaciones en los 3 edificios.",
      "Soporte directo nivel 1 a usuarios para software básico, hardware, periféricos y conectividad diaria.",
      "Control, asignación y auditoría física del inventario de activos de TI e infraestructura física."
    ],`;
  content = content.replace(/justification: "Esta célula es la columna vertebral operativa para soportar más de 200 usuarios y 3 edificios conectando todos los endpoints a las redes seguras.",/g, rep1);

  // Insertar activities en Cloud & Ciberseguridad
  const rep2 = `justification: "Responsable central único para administrar la nube de AWS y velar por la ciberseguridad general del entorno HIS\/ERP.",
    activities: [
      "Aprovisionamiento, optimización y mantenimiento de la infraestructura nativa en la nube (AWS, EKS).",
      "Definición y aplicación exhaustiva de políticas de acceso, monitoreo de amenazas y auditoría de ciberseguridad.",
      "Formulación técnica y ejecución de simulacros para el Plan de Recuperación ante Desastres (DRP)."
    ],`;
  content = content.replace(/justification: "Responsable central único para administrar la nube de AWS y velar por la ciberseguridad general del entorno HIS\/ERP.",/g, rep2);

  // Insertar activities en Sistemas Core
  const rep3 = `justification: "Equipo compacto enfocado en velar por el buen funcionamiento y el contacto con los proveedores del HIS y Odoo.",
    activities: [
      "Modelado de reglas de negocio y estabilización técnica de los procesos operativos transaccionales en Odoo 18.",
      "Soporte integral, parametrización operativa y seguimiento continuo para el Sistema de Información Hospitalaria (HIS).",
      "Control de incidentes críticos, validación de la interoperabilidad financiera y operaciones médicas."
    ],`;
  content = content.replace(/justification: "Equipo compacto enfocado en velar por el buen funcionamiento y el contacto con los proveedores del HIS y Odoo.",/g, rep3);

  // Insertar activities en Fábrica de Software
  const rep4 = `justification: "Desarrollo on-demand para cubrir brechas con soluciones a medida que reducen fricción operativa.",
    activities: [
      "Desarrollo de conectores directos y microservicios para la interoperabilidad entre el ecosistema propio y de terceros.",
      "Mantenimiento, despliegue y soporte continuo de soluciones front-end/back-end elaboradas a la medida.",
      "Digitalización y automatización de procesos internos puntuales que ralenticen la cadena operativa diaria."
    ],`;
  content = content.replace(/justification: "Desarrollo on-demand para cubrir brechas con soluciones a medida que reducen fricción operativa.",/g, rep4);


  // Render component replacement
  const uiOriginal = /<span style=\{\{ fontWeight: 700 \}\}>¿Por qué esta célula\?<\/span>\s*<div style=\{\{ marginTop: 4, color: "#a0a8bc" \}\}>\{cell\.justification\}<\/div>/g;
  
  const uiReplacement = `<span style={{ fontWeight: 800 }}>¿Por qué esta célula y cuál es su objetivo central?</span>
                      <div style={{ marginTop: 6, color: "#a0a8bc", marginBottom: 8 }}>{cell.justification}</div>
                      {cell.activities && (
                        <div style={{ marginTop: 12, background: "rgba(0,0,0,0.15)", padding: "12px 14px", borderRadius: 8, borderLeft: \`2px solid \${cell.accent}44\` }}>
                          <div style={{ fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5, color: cell.accent, marginBottom: 8 }}>🎯 Principales Actividades Departamentales:</div>
                          <ul style={{ margin: 0, paddingLeft: 18, color: "#a0a8bc", fontSize: 11, display: "flex", flexDirection: "column", gap: 6 }}>
                            {cell.activities.map((act, idx) => (
                              <li key={idx} style={{ lineHeight: 1.4 }}>{act}</li>
                            ))}
                          </ul>
                        </div>
                      )}`;
                      
  content = content.replace(uiOriginal, uiReplacement);

  fs.writeFileSync(file, content);
});

console.log("Activities UI agregadas exitosamente.");
