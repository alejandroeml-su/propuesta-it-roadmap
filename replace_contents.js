const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx',
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace AS-IS empty div
  const asIsEmptyDivRegex = /<div style=\{\{ marginTop: 40, border: "2px dashed rgba\(255,255,255,0\.05\)", borderRadius: 16, height: 250, display: "flex", alignItems: "center", justifyContent: "center", color: "#4a5270", fontSize: 14 \}\}>\s*Lienzo habilitado\. Pendiente de ingresar matriz y diagramas de estado base\.\.\.\s*<\/div>/;

  const asIsImage = `<div style={{ marginTop: 40 }}>
              <img src="/AS-IS.png" style={{ width: "100%", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }} alt="Arquitectura AS-IS" />
            </div>`;

  if (content.match(asIsEmptyDivRegex)) {
    content = content.replace(asIsEmptyDivRegex, asIsImage);
  }

  // Replace GAP empty div
  const gapEmptyDivRegex = /<div style=\{\{ marginTop: 40, border: "2px dashed rgba\(255,255,255,0\.05\)", borderRadius: 16, height: 250, display: "flex", alignItems: "center", justifyContent: "center", color: "#4a5270", fontSize: 14 \}\}>\s*Lienzo habilitado\. Pendiente de ingresar cuadro de brechas y listado de fricciones\.\.\.\s*<\/div>/;

  const gapContent = `
            <div style={{ textAlign: "left", background: "rgba(255,255,255,0.02)", padding: "30px 40px", borderRadius: 16, border: "1px solid rgba(255,255,255,0.05)", marginTop: 40 }}>
              <h3 style={{ color: "#F0A500", marginTop: 0, fontSize: 20 }}>Análisis de Brechas (Gap Analysis): Gestión de Servicios e Infraestructura TI</h3>
              <div style={{ color: "#a0a8bc", fontSize: 14, marginBottom: 20 }}>
                <p><strong>Preparado por:</strong> Jefatura de Tecnología y Transformación Digital | <strong>Organización:</strong> Inversiones Avante</p>
                <p style={{ lineHeight: 1.6 }}>He finalizado la revisión del estado actual de nuestras operaciones tecnológicas basándome en la matriz de responsabilidades e implementaciones. Tras contrastar nuestra realidad operativa frente a los marcos de trabajo de ITIL 4 y COBIT 2019, he identificado deficiencias críticas y riesgos inminentes para Inversiones Avante derivados de la tercerización casi total con el proveedor IPCOM.</p>
                <p style={{ lineHeight: 1.6 }}>El hallazgo más alarmante es que no existe un contrato formal firmado que regule esta relación comercial. Operar sin Acuerdos de Nivel de Servicio (SLA), sin Acuerdos de Confidencialidad (NDA), y sin cláusulas de Propiedad Intelectual o salvaguarda de activos intangibles y tangibles, nos deja en una posición de vulnerabilidad extrema.</p>
              </div>

              <h4 style={{ color: "#fff", borderBottom: "1px solid #333", paddingBottom: 8, fontSize: 16 }}>Hallazgos Críticos Generales (Nivel Directivo)</h4>
              <ul style={{ color: "#a0a8bc", fontSize: 14, lineHeight: 1.6, paddingLeft: 20 }}>
                <li style={{ marginBottom: 6 }}><strong>Gestión de Incidentes Deficiente:</strong> Al no contar con SLAs definidos, la reacción ante caídas de sistemas críticos depende enteramente de la disponibilidad arbitraria del proveedor. Esto se traduce en tiempos de inactividad prolongados y pérdida de ingresos.</li>
                <li style={{ marginBottom: 6 }}><strong>Sobrecostos Ocultos por Cambios:</strong> Sin un marco contractual que fije tarifas, el modelo de "cobro por evento" genera un sobrecosto insostenible.</li>
                <li style={{ marginBottom: 6 }}><strong>Pérdida de Propiedad Intelectual (IP):</strong> Todo el desarrollo del código y BD del ERP/HIS pertenecen de facto a IPCOM al no existir un contrato de cesión.</li>
                <li style={{ marginBottom: 6 }}><strong>Riesgo Legal y de Cumplimiento:</strong> La falta de un inventario lógico, sumado a la opacidad del proveedor, abre la puerta a la instalación de software no licenciado, exponiéndose a multas millonarias (violación MEA03).</li>
              </ul>

              <h4 style={{ color: "#fff", borderBottom: "1px solid #333", paddingBottom: 8, marginTop: 30, fontSize: 16 }}>Análisis Detallado por Procesos</h4>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, textAlign: "left", marginTop: 10 }}>
                  <thead>
                    <tr style={{ background: "rgba(240, 165, 0, 0.1)", color: "#F0A500", borderBottom: "1px solid rgba(240, 165, 0, 0.2)" }}>
                      <th style={{ padding: 12 }}>Área / Sistema</th>
                      <th style={{ padding: 12 }}>Problema Operativo (Brecha)</th>
                      <th style={{ padding: 12 }}>Consecuencia (Riesgo/Impacto)</th>
                      <th style={{ padding: 12 }}>Sugerencia de Mitigación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Desarrollo (ERP/HIS)<br/><span style={{fontSize:10, color:"#6a7490", fontWeight: 'normal'}}>Facturación, Inventario...</span></td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Cero control sobre el código y arquitectura. Dependencia.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Secuestro de datos (Vendor Lock-in). Costos altos.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Exigir entregas de ramas de código. Firmar NDA e IP.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Web & Datos</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Publicación e integridad en manos de terceros.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Fugas o alteración de datos sensibles.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Reubicar administración y llaves a TI interno.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>Infraestructura Core<br/><span style={{fontSize:10, color:"#6a7490", fontWeight: 'normal'}}>Redes, Cloud, Servidores</span></td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Sin mapa de red ni control del tenant Cloud.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Riesgo de apagado Cloud por disputa contractual.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Recuperar credenciales root físicas y de AWS.</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>End User & Hardware</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Sin inventario. Posible instalación pirata.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Riesgo de demandas por licenciamiento.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Despliegue de RMM. Inventariar endpoints.</td>
                    </tr>
                    <tr>
                      <td style={{ padding: 12, color: "#fff", fontWeight: 700 }}>CCTV / Seguridad</td>
                      <td style={{ padding: 12, color: "#a0a8bc" }}>Grabaciones expuestas a externos.</td>
                      <td style={{ padding: 12, color: "#E63946" }}>Vulneración absoluta de privacidad física.</td>
                      <td style={{ padding: 12, color: "#5BC0BE" }}>Aislar VLAN. Retirar master keys a IPCOM.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: 30, background: "rgba(230, 57, 70, 0.1)", padding: 20, borderRadius: 12, borderLeft: "4px solid #E63946" }}>
                <h4 style={{ color: "#E63946", marginTop: 0, marginBottom: 12, fontSize: 15 }}>Plan de Acción Inmediato (15 días)</h4>
                <p style={{ color: "#ccd0da", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  <strong>1. Intervención Legal:</strong> Redactar y forzar firma de Acuerdo de Nivel de Servicio (SLA) transitorio y contrato de cesión de Propiedad Intelectual.<br/><br/>
                  <strong>2. Toma de Activos:</strong> Congelar compras hasta levantar hardware y erradicar cualquier aplicativo no licenciado.<br/><br/>
                  <strong>3. Credenciales:</strong> Exigir bajo notario la entrega documentada de credenciales root de AWS y firewalls (IPCOM pasa a tener roles limitados).
                </p>
              </div>
            </div>`;

  if (content.match(gapEmptyDivRegex)) {
    // Replace padding layout container maxWidth in GAP to allow table to breathe
    content = content.replace(/<div style=\{\{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center", animation: "fadeIn 0\.4s" \}\}>([\s\S]*?)<\/div>\n\s*\{\/\* TO-BE/m, 
    (match) => { return match.replace(/maxWidth: 900/, "maxWidth: 1050"); });

    content = content.replace(gapEmptyDivRegex, gapContent);
  }

  // Also replace as-is maxWidth
  content = content.replace(/<div style=\{\{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center", animation: "fadeIn 0\.4s" \}\}>([\s\S]*?AS-IS.png[\s\S]*?)<\/div>/m, 
    (match) => { return match.replace(/maxWidth: 900/, "maxWidth: 1200"); });

  fs.writeFileSync(file, content);
});

console.log("Inyección de archivos en AS-IS y GAP completada.");
