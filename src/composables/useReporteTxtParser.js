import { useEcpLogic } from "@/composables/useEcpLogic"
import { useEriLogic } from "@/composables/useEriLogic"
import { useEsfLogic } from "@/composables/useEsfLogic"
import { useNotasLogic } from "@/composables/useNotasLogic"
import { useSectorLogic } from "@/composables/useSectorLogic"

export function useReporteTxtParser() {
  const ecpLogic = useEcpLogic()
  const eriLogic = useEriLogic()
  const esfLogic = useEsfLogic()
  const notasLogic = useNotasLogic()
  const sectorLogic = useSectorLogic()

  // 1. Dividir por bloques
  function dividirBloques(texto) {
    const bloques = {}
    const regex = /\[(.*?)\]([\s\S]*?)(?=\[|$)/g

    let match
    while ((match = regex.exec(texto)) !== null) {
      const nombre = match[1].trim()

      bloques[nombre] = match[2].trim()
    }

    return bloques
  }

  // 2. Convertir lines tipo "clave=valor"
  function parseKv(content) {
    const result = {}
    const lines = content.split("\n")

    for (const line of lines) {
      if (!line.includes("=")) continue

      const [clave, val] = line.split("=").map(s => s.trim())

      result[clave] = isNaN(Number(val)) ? val : Number(val)
    }

    return result
  }

  // 3. Parse NOTAS
  function parseNotas(content) {
    const lines = content.split("\n").filter(l => l.trim().length > 0)

    return lines.map((line, index) => {
      const [numero, titulo, contenido] = line.split("|")

      return {
        id: crypto.randomUUID(),
        numero: Number(numero) || index + 1,
        titulo: titulo?.trim() || "",
        contenido: contenido?.trim() || "",
      }
    })
  }

  // 4. Parse ESF (grupo.clave)
  function parseEsf(content) {
    const result = {
      activoCorriente: {},
      activoNoCorriente: {},
      pasivoCorriente: {},
      pasivoNoCorriente: {},
      patrimonio: {},
    }

    const lines = content.split("\n")

    for (const line of lines) {
      if (!line.includes("=")) continue

      const [k, val] = line.split("=")
      const value = Number(val.trim())

      const [grupo, clave] = k.split(".")
      if (!grupo || !clave) continue

      if (result[grupo] !== undefined) {
        result[grupo][clave] = value
      }
    }

    return result
  }

  // 5. Parse principal
  function parseTxt(texto) {
    const bloques = dividirBloques(texto)

    return {
      ecp: bloques["ECP"] ? ecpLogic.normalizarECP(parseKv(bloques["ECP"])) : null,
      eri: bloques["ERI"] ? eriLogic.normalizarERI(parseKv(bloques["ERI"])) : null,
      esf: bloques["ESF"] ? esfLogic.normalizarESF(parseEsf(bloques["ESF"])) : null,
      notas: bloques["NOTAS"] ? notasLogic.normalizarNotas(parseNotas(bloques["NOTAS"])) : [],
      sector: bloques["SECTOR"] ? sectorLogic.normalizarSector(parseKv(bloques["SECTOR"])) : null,
    }
  }

  return {
    parseTxt,
  }
}
