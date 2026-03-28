// src/services/reportes.service.js
import api from "@/plugins/axios/axios"
import { usePerformanceStore } from "@/@store/performance.store"
import { useIndexedDBService } from "@/services/indexeddb.service"

export function useReportesService() {
  const performanceStore = usePerformanceStore()
  const indexedDB = useIndexedDBService()

  // Helper genérico para medir tiempos de API
  const trackApi = async (endpointLabel, fn) => {
    const start = performance.now()
    const response = await fn()
    const duration = performance.now() - start

    performanceStore.addApiTime({
      endpoint: endpointLabel,
      duration,
      timestamp: new Date().toISOString(),
    })

    return response
  }

  // 🔹 Helpers internos de API
  const list = async userId => {
    try {
      const response = await trackApi(
        "GET /v1/convertex/reportesconvertex/by-user/:userId/values",
        () => api.get(`/v1/convertex/reportesconvertex/by-user/${userId}/values`),
      )

      const { data } = response

      return (data.data || []).map(rep => ({
        ...rep,
        reporteid: rep.reporteid ? Number(rep.reporteid) : null,
        id: rep.id ?? rep.reporteid ?? null,
      }))
    } catch (err) {

      // 🔹 Si el backend devuelve 404 → devolver lista vacía
      if (err.response?.status === 404) {
        console.warn("No hay reportes para este usuario. Devolviendo []")

        return []
      }

      // 🔹 Otros errores sí deben mostrarse
      console.error("Error cargando reportes:", err)
      throw err
    }
  }


  const getOne = async id => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:id",
      () => api.get(`/v1/convertex/reportesconvertex/${id}`),
    )

    return response.data.data
  }

  const remove = async id => {
    return trackApi(
      "DELETE /v1/convertex/reportesconvertex/:id",
      () => api.delete(`/v1/convertex/reportesconvertex/${id}`),
    )
  }

  const create = async payload => {
    const response = await trackApi(
      "POST /v1/convertex/reportesconvertex",
      () => api.post(
        "/v1/convertex/reportesconvertex",
        { reporte: payload },
      ),
    )

    // data = { ok: true, data: createdRow, upsert: ... }
    console.log('creando reporte: ', response.data)

    return response.data
  }


  const getByEmpresaPeriodo = async ({ empresaid, periodoid }) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:empresaid/:periodoid/lookup",
      () => api.get(
        `/v1/convertex/reportesconvertex/${empresaid}/${periodoid}/lookup`,
      ),
    )

    // { ok: true, data: row }
    return response.data
  }


  // params puede incluir: { tipo, limit, offset, groupBy }
  const getValues = async (reporteid, params = {}) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:reporteid/values",
      () => api.get(
        `/v1/convertex/reportesconvertex/${reporteid}/values`,
        { params },
      ),
    )

    // { ok: true, data: { esfvalues, erivalues, ... }, meta }
    return response.data
  }

  // ----------------------------
  // 🔹 MAPA endpoint → store IDB
  // ----------------------------
  const storeNameMap = {
    "erivalues_convertex/bulk":   "erivaluesconvertexs",
    "esfvalues_convertex/bulk":   "esfvaluesconvertexs",
    "efemdvalues_convertex/bulk": "efemdvaluesconvertexs",
    "ecpvalues_convertex/bulk":   "ecpvaluesconvertexs",
  }

  // 🔹 Helper: POST + guardar en IndexedDB (también medido)
  const bulkPostAndCache = async (endpoint, data, meta) => {
    if (!data) return

    const url = `/v1/convertex/${endpoint}`
    const payload = { ...data, ...meta }

    const response = await trackApi(
      `POST ${url}`,
      () => api.post(url, payload),
    )

    const { data: resp } = response
    const rows = resp?.data ?? []

    const endpointKey = endpoint.split("?")[0]
    const storeName = storeNameMap[endpointKey]

    if (storeName && Array.isArray(rows) && rows.length) {
      try {
        await indexedDB.bulkPut(storeName, rows)
      } catch (err) {
        console.error(`Error guardando en IndexedDB (${storeName})`, err)
      }
    } else if (!storeName) {
      console.warn(`No hay store mapeado para endpoint ${endpointKey}`)
    }

    return resp
  }

  // ============================================================
  // PATCH para reportes.service.js
  // Reemplazar ÚNICAMENTE la función createWithValues
  // El resto del archivo queda exactamente igual
  // ============================================================
  const createWithValues = async periodoData => {
    // 1) Crear el reporte principal (sin cambios)
    const resCreate = await create(periodoData.reporte)

    const body = resCreate ?? {}

    const row =
      body?.data?.reporte ||
      body?.data ||
      body?.reporte ||
      body

    const reporteid = Number(row.reporteid)
    const userid    = row.userid
    const empresaid = row.empresaid
    const periodoid = row.periodoid

    const meta = { reporteid, userid, empresaid, periodoid }

    // ✅ FIX: en vez de Promise.all (40 POSTs simultáneos que saturan
    // el rate limit), construir la lista de operaciones y ejecutarlas
    // de forma SECUENCIAL con un pequeño delay entre cada una.
    const operations = []

    const pushOp = (endpoint, bloque) => {
      if (!bloque) return
      operations.push({ endpoint, bloque })
    }

    // ESF
    pushOp("esfvalues_convertex/bulk", periodoData.activoscorrientesconvertex)
    pushOp("esfvalues_convertex/bulk", periodoData.activosnocorrientesconvertex)
    pushOp("esfvalues_convertex/bulk", periodoData.pasivoscorrientesconvertex)
    pushOp("esfvalues_convertex/bulk", periodoData.pasivosnocorrientesconvertex)
    pushOp("esfvalues_convertex/bulk", periodoData.patrimonioconvertex)
    pushOp("esfvalues_convertex/bulk", periodoData.activoscorrientesconvertex_ant)
    pushOp("esfvalues_convertex/bulk", periodoData.activosnocorrientesconvertex_ant)
    pushOp("esfvalues_convertex/bulk", periodoData.pasivoscorrientesconvertex_ant)
    pushOp("esfvalues_convertex/bulk", periodoData.pasivosnocorrientesconvertex_ant)
    pushOp("esfvalues_convertex/bulk", periodoData.patrimonioconvertex_ant)

    // ERI
    pushOp("erivalues_convertex/bulk", periodoData.ingresosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.costosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.otrosingresosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.gastosdeventasconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.gastosadministrativosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.gastosfinancierosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.otrosgastosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.resultadosconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.operacionesdiscontinuadasconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.otrosresultadosintegralconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.resultadosparticipacioncontroladoraconvertex)
    pushOp("erivalues_convertex/bulk", periodoData.ingresosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.costosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.otrosingresosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.gastosdeventasconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.gastosadministrativosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.gastosfinancierosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.otrosgastosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.resultadosconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.operacionesdiscontinuadasconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.otrosresultadosintegralconvertex_ant)
    pushOp("erivalues_convertex/bulk", periodoData.resultadosparticipacioncontroladoraconvertex_ant)

    // EFE
    pushOp("efemdvalues_convertex/bulk", periodoData.actividadesdeoperacionconvertex)
    pushOp("efemdvalues_convertex/bulk", periodoData.actividadesdeinversionconvertex)
    pushOp("efemdvalues_convertex/bulk", periodoData.actividadesdefinanciamientoconvertex)
    pushOp("efemdvalues_convertex/bulk", periodoData.conciliacionganancianetaconvertex)

    // ECP
    pushOp("ecpvalues_convertex/bulk", periodoData.ecpconvertex)

    // 2) ✅ Ejecutar secuencialmente — 1 POST a la vez, sin saturar el rate limit
    for (const { endpoint, bloque } of operations) {
      await bulkPostAndCache(endpoint, bloque, meta)
    }

    console.log("row: ", row)

    return row
  }

  const getValuesByEmpresaPeriodo = async (empresaid, periodoid, params = {}) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/by-period/:empresaid/:periodoid/values",
      () => api.get(
        `/v1/convertex/reportesconvertex/by-period/${empresaid}/${periodoid}/values`,
        { params },        // { tipo, groupBy, limit, offset } opcionales
      ),
    )

    return response.data
  }

  // ================================
  // 🔹 Descarga de TXT SRI desde API
  // ================================
  const getTxtFile = async (
    reporteid,
    { tipo = "esf", forceRefresh = false } = {},
  ) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:reporteid/txt",
      () =>
        api.get(`/v1/convertex/reportesconvertex/${reporteid}/txt`, {
          params: {
            tipo, // esf | eri | ecp | efe  (el backend normaliza "efe" → "efemd")
            ...(forceRefresh ? { forceRefresh: "1" } : {}), // zod acepta "1"/"0" o "true"/"false"
          },
          responseType: "blob",
        }),
    )

    // Intentar recuperar el nombre de archivo desde el header
    const disposition = response.headers["content-disposition"] || ""
    let fileName = `reporte_${tipo}_${reporteid}.txt`

    const match = /filename="?([^"]+)"?/.exec(disposition)
    if (match?.[1]) {
      fileName = match[1]
    }

    const blob = new Blob([response.data], {
      type: "text/plain;charset=utf-8",
    })

    return { blob, fileName }
  }

  const downloadTxt = async (
    reporteid,
    options = { tipo: "esf", forceRefresh: false },
  ) => {
    const { blob, fileName } = await getTxtFile(reporteid, options)

    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")

    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
  }

  // ================================
  // 🔹 Descarga de PDF desde API
  //    GET /v1/convertex/reportesconvertex/:reporteid/pdf
  //    generar-pdf/:reporteid
  // ================================
  const getPdfFile = async (
    reporteid,
    { tipo = null, forceRefresh = false } = {},
  ) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:reporteid/pdf?tipo=all",
      () =>
        api.get(`/v1/convertex/reportesconvertex/${reporteid}/pdf?tipo=all`, {
          params: {
            ...(tipo ? { tipo } : {}),                         // esf | eri | ecp | efe | efemd
            ...(forceRefresh ? { forceRefresh: "1" } : {}),    // zod acepta "1"/"0" o "true"/"false"
          },
          responseType: "blob",
        }),
    )

    // Intentar recuperar el nombre de archivo desde el header
    const disposition = response.headers["content-disposition"] || ""
    let fileName = tipo
      ? `reporte_${tipo}_${reporteid}.pdf`
      : `reporte_completo_${reporteid}.zip`

    const match = /filename="?([^"]+)"?/.exec(disposition)
    if (match?.[1]) {
      fileName = match[1]
    }

    const blob = new Blob([response.data], {
      type: "application/pdf",
    })

    return { blob, fileName }
  }

  const downloadPdf = async (
    reporteid,
    options = { tipo: null, forceRefresh: false },
  ) => {
    const { blob, fileName } = await getPdfFile(reporteid, options)

    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")

    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
  }

  // ================================
  // 🔹 Descarga de EXCEL desde API
  //    GET /v1/convertex/reportesconvertex/:reporteid/excel
  // ================================
  const getExcelFile = async (
    reporteid,
    { forceRefresh = false } = {},
  ) => {
    const response = await trackApi(
      "GET /v1/convertex/reportesconvertex/:reporteid/excel",
      () =>
        api.get(
          `/v1/convertex/reportesconvertex/${reporteid}/excel`,
          {
            params: {
              ...(forceRefresh ? { forceRefresh: "1" } : {}),
            },
            responseType: "blob",
          }))

    // Leer el nombre de archivo desde content-disposition
    const disposition = response.headers["content-disposition"] || ""
    let fileName = `reporte_${reporteid}.xlsx`

    const match = /filename="?([^"]+)"?/.exec(disposition)
    if (match?.[1]) {
      fileName = match[1]
    }

    const blob = new Blob([response.data], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })

    return { blob, fileName }
  }

  const downloadExcel = async (
    reporteid,
    options = { forceRefresh: false },
  ) => {
    console.log('reporteid', reporteid)

    const { blob, fileName } = await getExcelFile(reporteid, options)

    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")

    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    a.remove()
    window.URL.revokeObjectURL(url)
  }

  // API pública del servicio
  return {
    list,
    getOne,
    delete: remove,
    create,
    createWithValues,
    getValuesByEmpresaPeriodo,
    getValues,
    getByEmpresaPeriodo,
    getTxtFile,
    downloadTxt,
    getPdfFile,
    downloadPdf,
    getExcelFile,
    downloadExcel,
  }
}
