// reportes/reportViewer/components/mapeo/helpers/reportesFill.js
export function toNumberSafe(v) {
  if (v === null || v === undefined) return 0
  if (typeof v === "number") return isFinite(v) ? v : 0

  const s = String(v).trim()
  if (!s) return 0

  // Soporta "1.23" o "1,23"
  const normalized = s.replace(/\s/g, "").replace(",", ".")
  const n = Number(normalized)

  return isFinite(n) ? n : 0
}

export function fillReportTemplatesFromFlatArray(flatValues, templates) {
  // templates: Array de objetos (tus tablas build*)
  // Armamos índice: codigo -> referencia al objeto + key
  const index = new Map()

  for (const obj of templates) {
    if (!obj) continue
    for (const key of Object.keys(obj)) {
      // solo keys tipo codigo, ignorar metadatos
      if (key === "userid" || key === "periodoid" || key === "empresaid" || key === "reporteid" || key === "tablaorigen")
        continue

      index.set(String(key).toLowerCase(), obj)
    }
  }

  const notFound = []

  for (const row of flatValues || []) {
    const code = String(row?.codigo ?? "").toLowerCase()
    if (!code) continue

    const target = index.get(code)
    if (!target) {
      notFound.push(code)
      continue
    }

    target[code] = toNumberSafe(row.valor)
  }

  return { notFoundCount: notFound.length, notFound }
}
