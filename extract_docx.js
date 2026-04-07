const mammoth = require("mammoth");
const fs = require("fs");

mammoth.extractRawText({path: "c:/proyecto/propuestaIT/GAP.docx"})
    .then(function(result){
        const text = result.value; // The raw text
        const messages = result.messages;
        console.log("=== EXTRACTION RESULT ===");
        console.log(text);
        fs.writeFileSync("c:/proyecto/propuestaIT/GAP_extracted.txt", text);
    })
    .catch(function(err){
        console.error("ERROR extracting GAP.docx:", err);
    });
