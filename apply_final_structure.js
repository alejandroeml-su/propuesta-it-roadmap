const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx',
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // 1. Re-define the whole marketSalaries
  content = content.replace(/const marketSalaries = \{[\s\S]*?\};/, `const marketSalaries = {
  "Líder de Infraestructura y Redes": 1700,
  "Técnico de Soporte N1 — Mesa de Ayuda": 750,
  "Ingeniero de Cloud & Seguridad (Lead)": 1700,
  "Líder de Desarrollo y de Core / Tech Lead": 1700,
  "Analista de Sistemas Clínicos (HIS)": 1000,
  "Desarrollador Fullstack Senior": 1500
};`);

  // 2. Modify "Líder de Sistemas Core / Analista Funcional Senior" to the unified title
  content = content.replace(/"Líder de Sistemas Core \/ Analista Funcional Senior"/g, '"Líder de Desarrollo y de Core / Tech Lead"');
  content = content.replace(/"Puente Odoo 18, procesos de negocio e integraciones. Lidera funcionalmente los requerimientos."/g, '"Líder unificado de procesos en Odoo 18, arquitectura técnica e integraciones, dirigiendo los requerimientos funcionales y el desarrollo de software."');

  // 3. Remove "Líder de Desarrollo / Tech Lead" role from Fabrica de Software
  const roleToRemoveRegex = /\{\s*title:\s*"Líder de Desarrollo \/ Tech Lead",[\s\S]*?profile:\s*"[^"]*",\s*\},/;
  content = content.replace(roleToRemoveRegex, '');

  // 4. Update headcount for Fabrica de Software from 2 to 1
  const fabricaRegex = /(title: "Fábrica de Software",[\s\S]*?headcount: )"2"/;
  content = content.replace(fabricaRegex, '$1"1"');

  // 5. Replace "9 personas" with "8 personas"
  content = content.replace(/9 personas base/g, "8 personas base");
  content = content.replace(/9 personas \+/g, "8 personas +");

  fs.writeFileSync(file, content);
});

console.log("Planilla unificada exitosamente a 8 personas.");
