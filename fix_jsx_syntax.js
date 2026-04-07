const fs = require('fs');

const files = [
  'c:/proyecto/propuestaIT/vite-app/src/App.jsx',
  'c:/proyecto/propuestaIT/roadmap_unificado_avante.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let content = fs.readFileSync(file, 'utf8');

  // The error is because we replaced `)}\n    </div>\n  );\n}` and swallowed the `)}` of viewMode === "hierarchy"
  // Let's find exactly the end and reconstruct it properly.
  
  // What does the file currently look like at the end?
  // It has:
  /*
1208:         </div>
1209:           </div>
1210:         )}
1211:       </div>
1212:     </div>
1213:   );
1214: }
  */
  // But line 1210 `)}` is currently trying to close `globalPage === "to-be"`, 
  // while `viewMode === "hierarchy"` was left un-closed.
  
  // So we need to ensure the closing looks exactly like:
  /*
        </div>
      )}
          </div>
        )}
      </div>
    </div>
  );
}
  */
  
  // Let's just find the very end and fix it.
  const endRegex = /        <\/div>\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>\s*\);\s*\}\s*$/;
  // If it's the broken state:
  if (content.match(endRegex)) {
    content = content.replace(endRegex, `        </div>\n      )}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}`);
  } else {
    // If it's an even more broken state where we just have:
    // </div>\n  </div>\n  )}\n  </div>\n</div>\n);
    const brokenRegex2 = /        <\/div>\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>\s*\);\s*\}\s*$/;
    
    // Actually, let's just do a string replacement on the last 50 characters to be absolutely safe.
    // The problem is `</div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}`
    // It's missing `      )}\n` right before `        </div>\n        )}\n`
    
    // Let's just replace the exact broken text:
    const brokenText = `        </div>\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}`;
    if (content.endsWith(brokenText)) {
      const fixedText = `        </div>\n      )}\n          </div>\n        )}\n      </div>\n    </div>\n  );\n}`;
      content = content.substring(0, content.length - brokenText.length) + fixedText;
    } else {
      // Find the last `</div>` array.
      // Easiest is to just search `totalTasks} tareas` block
      const lastBlockRegex = /\[\`\$\{totalTasks\} tareas\`, "Por área y prioridad"\], \["4 células", "Ops, Cloud, Core, Dev"\], \["5 plataformas", "ERP, HIS, Odoo 18, AWS\/EKS, Red"\], \["3 edificios", "Cuartos de comunicaciones"\], \["Stack", "React, Next\.js, Node\.js, Prisma"\]\]\.map\(\(\[t, d\], i\) => \([\s\S]*?<\/div>\s*\)\)\}\s*<\/div>\s*<\/div>/;
      
      const match = content.match(lastBlockRegex);
      if (match) {
        const fullEndRegex = new RegExp(lastBlockRegex.source + /[\s\S]*$/.source);
        
        content = content.replace(fullEndRegex, (match) => {
          // match is the entire rest of the file starting from that array.
          // We know what it SHOULD be.
          return `[\`\${totalTasks} tareas\`, "Por área y prioridad"], ["4 células", "Ops, Cloud, Core, Dev"], ["5 plataformas", "ERP, HIS, Odoo 18, AWS/EKS, Red"], ["3 edificios", "Cuartos de comunicaciones"], ["Stack", "React, Next.js, Node.js, Prisma"]].map(([t, d], i) => (
                <div key={i} style={{ padding: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#ccd0da" }}>{t}</div>
                  <div style={{ fontSize: 10, color: "#4a5270", marginTop: 3 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
          </div>
        )}
      </div>
    </div>
  );
}`;
        });
      }
    }
  }

  fs.writeFileSync(file, content);
});

console.log("Corrección de corchetes aplicada exitosamente.");
