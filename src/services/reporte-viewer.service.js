// src/services/reporte-viewer.service.js
import api from "@/plugins/axios/axios"
import { usePerformanceStore } from "@/@store/performance.store"

const perf = usePerformanceStore()

export function useReportViewerService() {
  // -------------------------------
  // GET /reportesconvertex/:reporteid
  // → devuelve un "fullReport" con .values.*
  // -------------------------------
  async function getReporteFull(reporteid) {
    const start = performance.now()

    const { data } = await api.get(`/v1/convertex/reportesconvertex/${reporteid}`, {
      params: {
        includeFull: 1,
      },
    })

    perf.addApiTime({
      endpoint: "/v1/convertex/reportesconvertex/:reporteid",
      duration: performance.now() - start,
      timestamp: new Date().toISOString(),
    })

    const base = data?.data
    if (!base) throw new Error("Reporte no encontrado en API")

    // El endpoint devuelve asociaciones como:
    // - esfvalues, erivalues, ecpvalues, efemdvalues
    // Las empacamos en un objeto .values
    const fullReport = {
      ...base,
      values: {
        esfvalues: base.esfvalues ?? [],
        erivalues: base.erivalues ?? [],
        ecpvalues: base.ecpvalues ?? [],
        efemdvalues: base.efemdvalues ?? [],
      },
    }

    return fullReport
  }

  // -------------------------------
  // Bulk save genérico por tipo
  // bodies: array de objetos
  //   { userid, periodoid, empresaid, reporteid, tablaorigen, ...campos }
  // -------------------------------
  async function bulkSave(tipo, bodies = []) {
    if (!bodies.length) return

    let url = null

    switch (tipo) {
    case "esf":
      url = "/v1/convertex/esfvalues_convertex/bulk"
      break
    case "eri":
      url = "/v1/convertex/erivalues_convertex/bulk"
      break
    case "ecp":
      url = "/v1/convertex/ecpvalues_convertex/bulk"
      break
    case "efemd":
      url = "/v1/convertex/efemdvalues_convertex/bulk"
      break
    default:
      throw new Error(`Tipo de valores no soportado en bulkSave: ${tipo}`)
    }

    const start = performance.now()

    // Puedes hacerlo paralelo o secuencial.
    // Aquí lo ponemos paralelo (normalmente pocos cuerpos).
    await Promise.all(bodies.map(body => api.post(url, body)))

    perf.addApiTime({
      endpoint: `${url} (bulk)`,
      duration: performance.now() - start,
      timestamp: new Date().toISOString(),
    })
  }

  return {
    getReporteFull,
    bulkSave,
  }
}
