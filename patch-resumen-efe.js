// patch-resumen-efe.js
// Corrige la jerarquía del Resumen EFE para que use siempre la suma de hijos
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve("src/views/reportes/reportViewer/components/ResumenEFE.vue");
let code = readFileSync(file, "utf-8");

const oldLine = `node.childNonZero ? node.childSum : node.own`;
const newLine = `node.childSum`;

if (!code.includes(oldLine)) {
    if (code.includes("node.hasChildren ? node.childSum : node.own")) {
        console.log("✅ Ya está corregido");
    } else {
        console.error("❌ No encontré la línea esperada");
        // Buscar similar
        code.split(/\r?\n/).forEach((l, i) => {
            if (l.includes("childSum") || l.includes("childNonZero"))
                console.log(`  L${i+1}: ${l.trim()}`);
        });
    }
} else {
    code = code.replace(oldLine, newLine);
    writeFileSync(file, code, "utf-8");
    console.log("✅ Corregido: jerarquía ahora siempre usa suma de hijos");
}
