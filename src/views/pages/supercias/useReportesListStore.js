import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'
import { environment } from "@/utils/environments"
import { useReportStore } from "@/@store/reportStore"

import { useIndexedDB } from '@/composables/useIndexedDB'

const indexedDB = useIndexedDB()

// const reportStore = useReportStore()

const getMetaFromPeriodoData = periodoData => {
  const base = periodoData.activoscorrientesconvertex ?? {}

  return {
    userId: base.userId ?? JSON.parse(sessionStorage.getItem('sub')),
    empresaId: base.empresaId ?? JSON.parse(sessionStorage.getItem('empresanueva')),
    periodoId: base.periodoId ?? JSON.parse(sessionStorage.getItem('periodonuevo')),
  }
}

const groupRowsByTablaOrigen = rows => {
  return (rows || []).reduce((acc, row) => {
    // Soportar tanto `tablaorigen` (esf/eri) como `tablaOrigen` (ecp/efemd)
    const tabla = row.tablaorigen ?? row.tablaOrigen
    if (!tabla) return acc

    if (!acc[tabla])
      acc[tabla] = {}

    // Soportar `nombrecampo` y `nombreCampo`
    const fieldKey = row.nombrecampo ?? row.nombreCampo
    if (!fieldKey) return acc

    const num = Number(row.valor ?? 0)

    acc[tabla][fieldKey] = Number.isNaN(num) ? 0 : num

    return acc
  }, {})
}

// Convierte el payload agrupado del endpoint /reportesconvertex/:reporteid/values
// cuando se llama con ?groupBy=tablaorigen
// de: { Tabla: [ { nombrecampo/NombreCampo, valor, ... }, ... ] }
// a:  { Tabla: { nombreCampo: valorNum, ... } }
const groupValuesPayloadByTablaOrigen = grouped => {
  const result = {}

  Object.entries(grouped || {}).forEach(([tabla, rows]) => {
    const tablaObj = {}

    ;(rows || []).forEach(row => {
      const fieldKey = row.nombrecampo ?? row.nombreCampo
      if (!fieldKey) return

      const num = Number(row.valor ?? 0)

      tablaObj[fieldKey] = Number.isNaN(num) ? 0 : num
    })

    result[tabla] = tablaObj
  })

  return result
}

export const useReportesListStore = defineStore('ReportesListStore', {
  actions: {
    async saveBulkAndCache(endpoint, payload) {
      // endpoint: 'erivalues_convertex/bulk', 'esfvalues_convertex/bulk', etc.
      const url = `${environment.apiUrl}/v1/convertex/${endpoint}`

      const resp = await axios.post(url, payload)
      const rows = resp.data?.data ?? []

      if (Array.isArray(rows) && rows.length) {
        // Mapear endpoint → nombre del store en IndexedDB
        const endpointKey = endpoint.split('?')[0] // por si algún día agregas query params

        const storeNameMap = {
          'erivalues_convertex/bulk': 'erivaluesconvertexs',
          'esfvalues_convertex/bulk': 'esfvaluesconvertexs',
          'efemdvalues_convertex/bulk': 'efemdvaluesconvertexs',
          'ecpvalues_convertex/bulk': 'ecpvaluesconvertexs',
        }

        const storeName = storeNameMap[endpointKey]

        if (storeName) {
          try {
            // addItem ya soporta arrays y usa keyPath 'id'
            await indexedDB.addItem(storeName, rows)
          } catch (err) {
            console.error(`Error guardando en IndexedDB (${storeName})`, err)
          }
        } else {
          console.warn(`No hay store mapeado para endpoint ${endpointKey}`)
        }
      }

      return resp
    },

    async hydrateReportFromIndexedDBOrApi(reporte) {
      const reportStore = useReportStore()
      const indexedDB = useIndexedDB()

      // Soportar distintos formatos de "reporte"
      const reporteid =
        reporte.reporteId ??
        reporte.reporteid ??
        reporte.id

      const userId =
        reporte.userId ??
        reporte.userid ??
        JSON.parse(sessionStorage.getItem('sub') || 'null')

      const empresaId =
        reporte.empresaId ??
        reporte.empresaid ??
        reporte.empresa?.id

      const periodoId =
        reporte.periodoId ??
        reporte.periodoid ??
        reporte.periodo?.id

      if (!reporteid) {
        console.warn('[hydrateReportFromIndexedDBOrApi] reporte sin reporteid:', reporte)

        return { source: 'none', data: null }
      }

      try {
        // 1) Intentar leer valores desde IndexedDB
        const [esfRows, eriRows, efemdRows, ecpRows] = await Promise.all([
          indexedDB.getAllByIndex('esfvaluesconvertexs', 'byReporte', reporteid),
          indexedDB.getAllByIndex('erivaluesconvertexs', 'byReporte', reporteid),
          indexedDB.getAllByIndex('efemdvaluesconvertexs', 'byReporte', reporteid),
          indexedDB.getAllByIndex('ecpvaluesconvertexs', 'byReporte', reporteid),
        ])

        const totalRows =
          (esfRows?.length || 0) +
          (eriRows?.length || 0) +
          (efemdRows?.length || 0) +
          (ecpRows?.length || 0)

        if (totalRows > 0) {
          // ✅ Hay datos en IndexedDB → reconstruimos estructura compatible con reportStore
          const esfByTabla = groupRowsByTablaOrigen(esfRows)
          const eriByTabla = groupRowsByTablaOrigen(eriRows)
          const efeByTabla = groupRowsByTablaOrigen(efemdRows)

          const ecpObject = (ecpRows || []).reduce((acc, row) => {
            acc[row.nombrecampo] = Number(row.valor ?? 0)

            return acc
          }, {})

          const data = {
            // EFE (método directo)
            Actividadesdeoperacion: efeByTabla['Actividadesdeoperacion'] || {},
            Actividadesdeinversion: efeByTabla['Actividadesdeinversion'] || {},
            Actividadesdefinanciamiento: efeByTabla['Actividadesdefinanciamiento'] || {},
            Conciliacion: efeByTabla['Conciliacion'] || {},

            // ERI
            Costos: eriByTabla['Costos'] || {},
            Ingresos: eriByTabla['Ingresos'] || {},
            Otrosingresos: eriByTabla['Otrosingresos'] || {},
            Gastosdeventas: eriByTabla['Gastosdeventas'] || {},
            Gastosadministrativos: eriByTabla['Gastosadministrativos'] || {},
            Gastosfinancieros: eriByTabla['Gastosfinancieros'] || {},
            Otrosgastos: eriByTabla['Otrosgastos'] || {},
            Resultados: eriByTabla['Resultados'] || {},
            Operacionesdiscontinuadas: eriByTabla['Operacionesdiscontinuadas'] || {},
            Otrosresultadosintegrales: eriByTabla['Otrosresultadosintegrales'] || {},
            Participacioncontroladora: eriByTabla['Participacioncontroladora'] || {},

            // ESF
            Activoscorrientes: esfByTabla['Activoscorrientes'] || {},
            Activosnocorrientes: esfByTabla['Activosnocorrientes'] || {},
            Pasivoscorrientes: esfByTabla['Pasivoscorrientes'] || {},
            Pasivosnocorrientes: esfByTabla['Pasivosnocorrientes'] || {},
            Patrimonio: esfByTabla['Patrimonio'] || {},

            // ECP
            Ecp: ecpObject,

            // Metadatos
            empresaId,
            userId,
            periodoId,
            periodosreporteconvertex:
              reporte.periodosreporteconvertex ??
              reporte.periodo ??
              null,
            empresareporteconvertex:
              reporte.empresareporteconvertex ??
              reporte.empresa ??
              null,
            nombre_reporte: 'convertex',
          }

          reportStore.setReportData(data)
          if (data.empresareporteconvertex)
            localStorage.setItem('empresa', JSON.stringify(data.empresareporteconvertex))

          return { source: 'indexeddb', data }
        }

        // 2) No hay datos localmente → fallback a la API actualnew
        const resp = await axios.get(
          `${environment.apiUrl}/v1/convertex/reportesconvertex/actualnew/${reporteid}`,
        )

        const apiData = resp.data || {}

        apiData.empresaId = empresaId
        apiData.nombre_reporte = 'convertex'
        apiData.periodoId = periodoId
        apiData.periodosreporteconvertex =
          reporte.periodosreporteconvertex ?? apiData.periodosreporteconvertex
        apiData.empresareporteconvertex =
          reporte.empresareporteconvertex ?? reporte.empresa ?? apiData.empresareporteconvertex
        apiData.userId = userId

        reportStore.setReportData(apiData)
        if (apiData.empresareporteconvertex)
          localStorage.setItem('empresa', JSON.stringify(apiData.empresareporteconvertex))

        return { source: 'api', data: apiData }
      } catch (error) {
        console.error('Error en hydrateReportFromIndexedDBOrApi:', error)
        throw error
      }
    },

    async hydrateReportAnteriorFromIndexedDBOrApi(reporte) {
      const reportStore = useReportStore()
      const indexedDB = useIndexedDB()

      // ID del reporte (actual) que sirve para llamar a /anteriornew
      const reporteid =
        reporte.reporteId ??
        reporte.reporteid ??
        reporte.id

      // (Si algún día tienes un ID propio para el anterior, lo puedes añadir aquí)
      const previousReportId =
        reporte.reporteIdAnterior ??
        reporte.reporteId_ant ??
        reporte.reporteAnteriorId ??
        null

      const empresaId =
        reporte.empresaId ??
        reporte.empresaid ??
        reporte.empresa?.id

      const periodoId =
        reporte.periodoId ??
        reporte.periodoid ??
        reporte.periodo?.id

      if (!reporteid) {
        console.warn('[hydrateReportAnteriorFromIndexedDBOrApi] reporte sin reporteid:', reporte)

        return { source: 'none', data: null }
      }

      try {
        // 1) Si tienes un ID específico para el anterior y datos en IndexedDB, úsalo
        if (previousReportId) {
          const [esfRows, eriRows, efemdRows, ecpRows] = await Promise.all([
            indexedDB.getAllByIndex('esfvaluesconvertexs', 'byReporte', previousReportId),
            indexedDB.getAllByIndex('erivaluesconvertexs', 'byReporte', previousReportId),
            indexedDB.getAllByIndex('efemdvaluesconvertexs', 'byReporte', previousReportId),
            indexedDB.getAllByIndex('ecpvaluesconvertexs', 'byReporte', previousReportId),
          ])

          const totalRows =
            (esfRows?.length || 0) +
            (eriRows?.length || 0) +
            (efemdRows?.length || 0) +
            (ecpRows?.length || 0)

          if (totalRows > 0) {
            const esfByTabla = groupRowsByTablaOrigen(esfRows)
            const eriByTabla = groupRowsByTablaOrigen(eriRows)
            const efeByTabla = groupRowsByTablaOrigen(efemdRows)

            const ecpObjectAnt = (ecpRows || []).reduce((acc, row) => {
              acc[row.nombrecampo] = Number(row.valor ?? 0)

              return acc
            }, {})

            const dataAnt = {
              // ESF
              ActivoscorrientesAnt: esfByTabla['Activoscorrientes'] || {},
              ActivosnocorrientesAnt: esfByTabla['Activosnocorrientes'] || {},
              PasivoscorrientesAnt: esfByTabla['Pasivoscorrientes'] || {},
              PasivosnocorrientesAnt: esfByTabla['Pasivosnocorrientes'] || {},
              PatrimonioAnt: esfByTabla['Patrimonio'] || {},

              // ERI
              CostosAnt: eriByTabla['Costos'] || {},
              IngresosAnt: eriByTabla['Ingresos'] || {},
              OtrosingresosAnt: eriByTabla['Otrosingresos'] || {},
              GastosdeventasAnt: eriByTabla['Gastosdeventas'] || {},
              GastosadministrativosAnt: eriByTabla['Gastosadministrativos'] || {},
              GastosfinancierosAnt: eriByTabla['Gastosfinancieros'] || {},
              OtrosgastosAnt: eriByTabla['Otrosgastos'] || {},
              ResultadosAnt: eriByTabla['Resultados'] || {},
              OperacionesdiscontinuadasAnt: eriByTabla['Operacionesdiscontinuadas'] || {},
              OtrosresultadosintegralesAnt: eriByTabla['Otrosresultadosintegrales'] || {},
              ParticipacioncontroladoraAnt: eriByTabla['Participacioncontroladora'] || {},

              // EFE
              ActividadesdeoperacionAnt: efeByTabla['Actividadesdeoperacion'] || {},
              ActividadesdeinversionAnt: efeByTabla['Actividadesdeinversion'] || {},
              ActividadesdefinanciamientoAnt: efeByTabla['Actividadesdefinanciamiento'] || {},
              ConciliacionAnt: efeByTabla['Conciliacion'] || {},

              empresaId,
              userId:
                reporte.userId ??
                reporte.userid ??
                JSON.parse(sessionStorage.getItem('sub') || 'null'),
              periodoId,
            }

            reportStore.setReportData(dataAnt)

            return { source: 'indexeddb', data: dataAnt }
          }
        }

        // 2) Fallback → API /anteriornew/:reporteid
        const resp = await axios.get(
          `${environment.apiUrl}/v1/convertex/reportesconvertex/anteriornew/${reporteid}`,
        )

        const apiDataAnt = resp.data || {}

        apiDataAnt.empresaId = empresaId
        apiDataAnt.nombre_reporte = 'convertex'
        apiDataAnt.periodoId = periodoId
        apiDataAnt.periodosreporteconvertex =
          reporte.periodosreporteconvertex ?? apiDataAnt.periodosreporteconvertex
        apiDataAnt.empresareporteconvertex =
          reporte.empresareporteconvertex ?? reporte.empresa ?? apiDataAnt.empresareporteconvertex
        apiDataAnt.userId =
          reporte.userId ??
          reporte.userid ??
          JSON.parse(sessionStorage.getItem('sub') || 'null')

        reportStore.setReportData(apiDataAnt)

        return { source: 'api', data: apiDataAnt }
      } catch (error) {
        console.error('Error en hydrateReportAnteriorFromIndexedDBOrApi:', error)
        throw error
      }
    },


    // 👉 Fetch users data
    fetchReportes(params) { return axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/by-user/${params.user}`, { params }) },

    // 👉 Add Reporte
    async addReporteConvertex(periodoData) {
      const indexedDB = useIndexedDB()

      console.log('addReporteConvertex -> periodoData', periodoData)

      try {
        // 1) Crear el reporte principal
        const resp = await axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex`, {
          reporte: periodoData.reporte,
        })

        console.log('resp reporte principal: ', resp)

        const reporteid = resp.data?.data?.reporteid || JSON.parse(localStorage.getItem('reporteid'))
        const userid    = periodoData.reporte.userid
        const empresaid = periodoData.reporte.empresaid
        const periodoid = periodoData.reporte.periodoid

        // Helper para añadir metadata común al payload
        const createPayload = data => ({
          ...data,
          reporteid,
          userid,
          empresaid,
          periodoid,
        })

        // Mapa endpoint → nombre del store en IndexedDB
        const storeNameMap = {
          'erivalues_convertex/bulk':   'erivaluesconvertexs',
          'esfvalues_convertex/bulk':   'esfvaluesconvertexs',
          'efemdvalues_convertex/bulk': 'efemdvaluesconvertexs',
          'ecpvalues_convertex/bulk':   'ecpvaluesconvertexs',
        }

        // Helper: hace el POST y guarda la respuesta en IndexedDB
        const bulkPostAndCache = async (endpoint, data) => {
          if (!data) return

          const url = `${environment.apiUrl}/v1/convertex/${endpoint}`
          const payload = createPayload(data)

          const response = await axios.post(url, payload)
          const rows = response.data?.data ?? []

          const endpointKey = endpoint.split('?')[0]
          const storeName = storeNameMap[endpointKey]

          if (storeName && Array.isArray(rows) && rows.length) {
            try {
              await indexedDB.addItem(storeName, rows)
            } catch (err) {
              console.error(`Error guardando en IndexedDB (${storeName})`, err)
            }
          } else if (!storeName) {
            console.warn(`No hay store mapeado para endpoint ${endpointKey}`)
          }

          return response
        }

        const operations = []

        const pushOp = (endpoint, data) => {
          if (!data) return
          operations.push(bulkPostAndCache(endpoint, data))
        }

        // ======================
        // ESF (Estado de Situación Financiera)
        // ======================
        pushOp('esfvalues_convertex/bulk', periodoData.activoscorrientesconvertex)
        pushOp('esfvalues_convertex/bulk', periodoData.activosnocorrientesconvertex)
        pushOp('esfvalues_convertex/bulk', periodoData.pasivoscorrientesconvertex)
        pushOp('esfvalues_convertex/bulk', periodoData.pasivosnocorrientesconvertex)
        pushOp('esfvalues_convertex/bulk', periodoData.patrimonioconvertex)

        // ======================
        // ERI (Estado de Resultados Integral)
        // ======================
        pushOp('erivalues_convertex/bulk', periodoData.ingresosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.costosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.otrosingresosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.gastosdeventasconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.gastosadministrativosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.gastosfinancierosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.otrosgastosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.resultadosconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.operacionesdiscontinuadasconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.otrosresultadosintegralconvertex)
        pushOp('erivalues_convertex/bulk', periodoData.resultadosparticipacioncontroladoraconvertex)

        // ======================
        // EFE (Flujo de Efectivo - método directo)
        // ======================
        pushOp('efemdvalues_convertex/bulk', periodoData.actividadesdeoperacionconvertex)
        pushOp('efemdvalues_convertex/bulk', periodoData.actividadesdeinversionconvertex)
        pushOp('efemdvalues_convertex/bulk', periodoData.actividadesdefinanciamientoconvertex)
        pushOp('efemdvalues_convertex/bulk', periodoData.conciliacionganancianetaconvertex)

        // ======================
        // ECP (Estado de Cambios en el Patrimonio)
        // ======================
        pushOp('ecpvalues_convertex/bulk', periodoData.ecpconvertex)

        // Ejecutar todos los POST + cache en paralelo
        await Promise.all(operations)

        return resp
      } catch (error) {
        console.error('Error en addReporteConvertex', error)
        throw error
      }
    },



    /*
    addReporteConvertexOld(periodoData) {

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex`, {
          reporte: periodoData.reporte,
        })
          .then(response => {

            const reporteId = (response.data && response.data.reporteId) ? response.data.reporteId : JSON.parse(localStorage.getItem('reporteId'))

            console.log("reporteId", reporteId)

            const userId = periodoData.activoscorrientesconvertex?.userId || JSON.parse(sessionStorage.getItem('sub'))
            const empresaId = periodoData.activoscorrientesconvertex?.empresaId || JSON.parse(sessionStorage.getItem('empresanueva'))
            const periodoId = periodoData.activoscorrientesconvertex?.periodoId || JSON.parse(sessionStorage.getItem('periodonuevo'))
            const promises = []

            const createRequest = (endpoint, data) => {
              if (!data) {
                data = {}
              }
              data.reporteId = reporteId
              data.userId = userId
              data.empresaId = empresaId
              data.periodoId = periodoId
              if (reporteId && userId && periodoId) {
                console.log("data: ", data)
                promises.push(axios.post(`${environment.apiUrl}/${endpoint}`, { cuentas: data }))
              }
            };

            [
              { endpoint: 'activoscorrientesconvertex', data: periodoData.activoscorrientesconvertex },
              { endpoint: 'activosnocorrientesconvertex', data: periodoData.activosnocorrientesconvertex },
              { endpoint: 'pasivoscorrientesconvertex', data: periodoData.pasivoscorrientesconvertex },
              { endpoint: 'pasivosnocorrientesconvertex', data: periodoData.pasivosnocorrientesconvertex },
              { endpoint: 'patrimonioconvertex', data: periodoData.patrimonioconvertex },
              { endpoint: 'costosconvertex', data: periodoData.costosconvertex },
              { endpoint: 'ingresosconvertex', data: periodoData.ingresosconvertex },
              { endpoint: 'otrosingresosconvertex', data: periodoData.otrosingresosconvertex },
              { endpoint: 'gastosdeventasconvertex', data: periodoData.gastosdeventasconvertex },
              { endpoint: 'gastosfinancierosconvertex', data: periodoData.gastosfinancierosconvertex },
              { endpoint: 'gastosadministrativosconvertex', data: periodoData.gastosadministrativosconvertex },
              { endpoint: 'otrosgastosconvertex', data: periodoData.otrosgastosconvertex },
              { endpoint: 'resultadosconvertex', data: periodoData.resultadosconvertex },
              { endpoint: 'operacionesdiscontinuadasconvertex', data: periodoData.operacionesdiscontinuadasconvertex },
              { endpoint: 'otrosresultadosintegralesconvertex', data: periodoData.otrosresultadosintegralconvertex },
              { endpoint: 'participacioncontroladoraconvertex', data: periodoData.resultadosparticipacioncontroladoraconvertex },
              { endpoint: 'actividadesdeoperacionconvertex', data: periodoData.actividadesdeoperacionconvertex },
              { endpoint: 'actividadesdeinversionconvertex', data: periodoData.actividadesdeinversionconvertex },
              { endpoint: 'actividadesdefinanciamientoconvertex', data: periodoData.actividadesdefinanciamientoconvertex },
              { endpoint: 'conciliacionconvertex', data: periodoData.conciliacionganancianetaconvertex },
              { endpoint: 'ecpconvertex', data: periodoData.ecpconvertex },
              { endpoint: 'perdidasacumcuentasincobydeterioroconvertex', data: periodoData.movperdidasacumuladascuentasincobrablesydeterioro },
              { endpoint: 'perdidasacumvalnetrealizyotrasperdeninvconvertex', data: periodoData.movperdidasacumuladasvalornetorealizacion },
              { endpoint: 'propiedadesplantasyequiposconvertex', data: periodoData.movpropiedadesplantasyequipos },
              { endpoint: 'propiedadesdeinversionconvertex', data: periodoData.movpropiedadesdeinversion },
              { endpoint: 'intangiblesconvertex', data: periodoData.movintangibles },
              { endpoint: 'activosbiologicosconvertex', data: periodoData.movactivosbiologicos },
              { endpoint: 'impuestosdiferidosconvertex', data: periodoData.movimpuestosdiferidos },
              { endpoint: 'jubilacionpatronalconvertex', data: periodoData.movjubilacionpatronal },
              { endpoint: 'deshaucioconvertex', data: periodoData.deshaucio },
              { endpoint: 'activosfinancieroslargoplazoconvertex', data: periodoData.activosfinancieroslargoplazo },
              { endpoint: 'otrosconvertex', data: periodoData.otros },
            ].forEach(item => createRequest(item.endpoint, item.data));

            [
              { endpoint: 'activoscorrientesantconvertex', data: periodoData.activoscorrientesconvertex_ant },
              { endpoint: 'activosnocorrientesantconvertex', data: periodoData.activosnocorrientesconvertex_ant },
              { endpoint: 'pasivoscorrientesantconvertex', data: periodoData.pasivoscorrientesconvertex_ant },
              { endpoint: 'pasivosnocorrientesantconvertex', data: periodoData.pasivosnocorrientesconvertex_ant },
              { endpoint: 'patrimonioantconvertex', data: periodoData.patrimonioconvertex_ant },
              { endpoint: 'costosantconvertex', data: periodoData.costosconvertex_ant },
              { endpoint: 'ingresosantconvertex', data: periodoData.ingresosconvertex_ant },
              { endpoint: 'otrosingresosantconvertex', data: periodoData.otrosingresosconvertex_ant },
              { endpoint: 'gastosdeventasantconvertex', data: periodoData.gastosdeventasconvertex_ant },
              { endpoint: 'gastosfinancierosantconvertex', data: periodoData.gastosfinancierosconvertex_ant },
              { endpoint: 'gastosadministrativosantconvertex', data: periodoData.gastosadministrativosconvertex_ant },
              { endpoint: 'otrosgastosantconvertex', data: periodoData.otrosgastosconvertex_ant },
              { endpoint: 'resultadosantconvertex', data: periodoData.resultadosconvertex_ant },
              { endpoint: 'operacionesdiscontinuadasantconvertex', data: periodoData.operacionesdiscontinuadasconvertex_ant },
              { endpoint: 'otrosresultadosintegralesantconvertex', data: periodoData.otrosresultadosintegralconvertex_ant },
              { endpoint: 'participacioncontroladoraantconvertex', data: periodoData.resultadosparticipacioncontroladoraconvertex_ant },
              { endpoint: 'perdidasacumcuentasincobydeterioroantconvertex', data: periodoData.movperdidasacumuladascuentasincobrablesydeterioro_ant },
              { endpoint: 'perdidasacumvalnetrealizyotrasperdeninvantconvertex', data: periodoData.movperdidasacumuladasvalornetorealizacion_ant },
              { endpoint: 'propiedadesplantasyequiposantconvertex', data: periodoData.movpropiedadesplantasyequipos_ant },
              { endpoint: 'propiedadesdeinversionantconvertex', data: periodoData.movpropiedadesdeinversion_ant },
              { endpoint: 'intangiblesantconvertex', data: periodoData.movintangibles_ant },
              { endpoint: 'activosbiologicosantconvertex', data: periodoData.movactivosbiologicos_ant },
              { endpoint: 'impuestosdiferidosantconvertex', data: periodoData.movimpuestosdiferidos_ant },
              { endpoint: 'jubilacionpatronalantconvertex', data: periodoData.movjubilacionpatronal_ant },
              { endpoint: 'deshaucioantconvertex', data: periodoData.deshaucio_ant },
              { endpoint: 'activosfinancieroslargoplazoantconvertex', data: periodoData.activosfinancieroslargoplazo_ant },
              { endpoint: 'otrosantconvertex', data: periodoData.otros_ant },
            ].forEach(item => createRequest(item.endpoint, item.data))

            Promise.all(promises)
              .then(() => resolve(response))
              .catch(error => {
                console.error("Error en las peticiones", error)
                reject(error)
              })
          })
          .catch(error => reject(error))
      })
    },
    */

    // 👉 fetch single reporte actual
    fetchReporteconvertexActual(reporte) {
      console.log(reporte)
      localStorage.setItem('reporteId', JSON.stringify(reporte['reporteId']))

      const reportStore = useReportStore()

      return axios
        .get(`${environment.apiUrl}/v1/convertex/reportesconvertex/actualnew/${reporte['reporteId']}`)
        .then(response => {
          console.log(response)
          response.data.empresaId = reporte['empresaId']
          response.data.nombre_reporte = "convertex"
          response.data.periodoId = reporte['periodoId']
          response.data.periodosreporteconvertex = reporte['periodosreporteconvertex']
          response.data.empresareporteconvertex = reporte['empresareporteconvertex']
          response.data.userId = reporte['userId']
          if (response.data['reporteTurboNotas']) {
            localStorage.setItem('entidad', JSON.stringify(response.data['reporteTurboNotas']))
          }
          if (response.data['reporteInformeSocietario']) {
            localStorage.setItem('informesocietario', JSON.stringify(response.data['reporteInformeSocietario']))
          }
          reportStore.setReportData(response.data)

          localStorage.setItem('empresa', JSON.stringify(response.data.empresareporteconvertex))
        })
        .catch(error => {
          console.error("Error al obtener el reporte:", error)
        })
    },

    fetchReporteconvertexAnterior(reporte) {
      const reportStore = useReportStore()

      return axios
        .get(`${environment.apiUrl}/v1/convertex/reportesconvertex/anteriornew/${reporte['reporteId']}`)
        .then(response => {
          response.data.empresaId = reporte['empresaId']
          response.data.nombre_reporte = "convertex"
          response.data.periodoId = reporte['periodoId']
          response.data.periodosreporteconvertex = reporte['periodosreporteconvertex']
          response.data.empresareporteconvertex = reporte['empresareporteconvertex']
          response.data.userId = reporte['userId']
          reportStore.setReportDataAnt(response.data)
        })
        .catch(error => {
          console.error("Error al obtener el reporte:", error)
        })
    },

    // 👉 fetch single user
    fetchReporteConvertexByCompanyByPeriodo(empresa, periodo) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/${empresa}/${periodo}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 delete single reporte
    eliminarReporteSeleccionado(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${environment.apiUrl}/v1/convertex/reportesconvertex/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    fetchReporteconvertexByPeriodoActual(periodoId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/actual/ByPeriodo/${periodoId}`).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    addReporteTurboNotas(reporteData) {
      console.log("reporteData", reporteData)

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/turbonotasfc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteTurboNotas(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/turbonotasfc/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteInformeSocietario(reporteData) {
      reporteData.reporteId = reporteData.entidad.reporteId

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/informesocietariofc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteInformeSocietario(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/informesocietariofc/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    updateReporteconvertex(reporteData) {
      reporteData.reporteId = JSON.parse(localStorage.getItem('reporteId'))
      console.log("reporteData: ", reporteData)

      return new Promise((resolve, reject) => {
        axios.put(`${environment.apiUrl}/v1/convertex/reportesconvertex/reportesconvertex`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteDynamicFlowActividadesDeFinanciamiento(reporteData) {
      delete reporteData.createdAt
      delete reporteData.id
      delete reporteData.updatedAt

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdefinanciamientofdconvertex`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeFinanciamiento(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdefinanciamientofdconvertex/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteDynamicFlowActividadesDeOperacion(reporteData) {

      delete reporteData.createdAt
      delete reporteData.id
      delete reporteData.updatedAt

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdeoperacionnfdconvertex`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeOperacion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdeoperacionnfdconvertex/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteDynamicFlowActividadesDeInversion(reporteData) {
      delete reporteData.createdAt
      delete reporteData.id
      delete reporteData.updatedAt

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdeinversionfdconvertex`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeInversion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/actividadesdeinversionfdconvertex/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteDynamicFlowConciliacion(reporteData) {
      delete reporteData.createdAt
      delete reporteData.id
      delete reporteData.updatedAt

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/reportesconvertex/conciliacionfdconvertex`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowConciliacion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/reportesconvertex/conciliacionfdconvertex/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },
  },
})
