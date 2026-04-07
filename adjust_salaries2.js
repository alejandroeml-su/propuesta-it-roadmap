const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx',
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const regex = /const marketSalaries = \{[\s\S]*?\};/;
  content = content.replace(regex, (match) => {
    return match.replace(/: \d+/g, (val) => {
      const num = parseInt(val.replace(': ', ''));
      const adjusted = Math.round((num * 0.61) / 100) * 100;
      return ': ' + adjusted;
    });
  });
  
  fs.writeFileSync(file, content);
});

console.log("Salaries adjusted successfully.");
