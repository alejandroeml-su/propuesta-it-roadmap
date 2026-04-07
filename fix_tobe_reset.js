const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx',
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Change initial viewMode state 
  content = content.replace(
    'const [viewMode, setViewMode] = useState("interactive-timeline");',
    'const [viewMode, setViewMode] = useState("timeline");'
  );

  // Change the onclick handler for TO-BE 
  // It currently looks like: `<button onClick={() => setGlobalPage("to-be")} style={{`
  const oldButton = '<button onClick={() => setGlobalPage("to-be")} style={{';
  const newButton = '<button onClick={() => { setGlobalPage("to-be"); setViewMode("timeline"); }} style={{';
  
  if (content.includes(oldButton)) {
      content = content.replace(oldButton, newButton);
  }

  fs.writeFileSync(file, content);
});

console.log("Se configuró el reset de vista Fases para TO-BE correctamente.");
