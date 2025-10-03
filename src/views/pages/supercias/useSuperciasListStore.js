import { defineStore } from 'pinia'
import axios from '@axios'
import { environment } from "@/utils/environments"
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

export const useSuperciasListStore = defineStore('SuperciasListStore', {
  actions: {
    // 👉 Fetch users data
    fetchReportesIfluc(params) { return axios.get(`${environment.apiUrl}/reportesifluc/byuser`, { params }) },

    // 👉 Add Reporte
    addReporteSupercias(periodoData) {

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/reportesifluc`, {
          reporte: periodoData.reporte,
        })
          .then(response => {

            const reporteId = (response.data && response.data.reporteId) ? response.data.reporteId : JSON.parse(localStorage.getItem('reporteId'))
            console.log("reporteId", reporteId)
            const userId = periodoData.activoscorrientesifluc?.userId || JSON.parse(sessionStorage.getItem('userData')).id
            const empresaId = periodoData.activoscorrientesifluc?.empresaId || JSON.parse(sessionStorage.getItem('empresanueva'))
            const periodoId = periodoData.activoscorrientesifluc?.periodoId || JSON.parse(sessionStorage.getItem('periodonuevo'))
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
              { endpoint: 'activoscorrientesifluc', data: periodoData.activoscorrientesifluc },
              { endpoint: 'activosnocorrientesifluc', data: periodoData.activosnocorrientesifluc },
              { endpoint: 'pasivoscorrientesifluc', data: periodoData.pasivoscorrientesifluc },
              { endpoint: 'pasivosnocorrientesifluc', data: periodoData.pasivosnocorrientesifluc },
              { endpoint: 'patrimonioifluc', data: periodoData.patrimonioifluc },
              { endpoint: 'costosifluc', data: periodoData.costosifluc },
              { endpoint: 'ingresosifluc', data: periodoData.ingresosifluc },
              { endpoint: 'otrosingresosifluc', data: periodoData.otrosingresosifluc },
              { endpoint: 'gastosdeventasifluc', data: periodoData.gastosdeventasifluc },
              { endpoint: 'gastosfinancierosifluc', data: periodoData.gastosfinancierosifluc },
              { endpoint: 'gastosadministrativosifluc', data: periodoData.gastosadministrativosifluc },
              { endpoint: 'otrosgastosifluc', data: periodoData.otrosgastosifluc },
              { endpoint: 'resultadosifluc', data: periodoData.resultadosifluc },
              { endpoint: 'operacionesdiscontinuadasIfluc', data: periodoData.operacionesdiscontinuadasifluc },
              { endpoint: 'otrosresultadosintegralesifluc', data: periodoData.otrosresultadosintegralifluc },
              { endpoint: 'participacioncontroladoraifluc', data: periodoData.resultadosparticipacioncontroladoraifluc },
              { endpoint: 'actividadesdeoperacionifluc', data: periodoData.actividadesdeoperacionifluc },
              { endpoint: 'actividadesdeinversionifluc', data: periodoData.actividadesdeinversionifluc },
              { endpoint: 'actividadesdefinanciamientoifluc', data: periodoData.actividadesdefinanciamientoifluc },
              { endpoint: 'conciliacionifluc', data: periodoData.conciliacionganancianetaifluc },
              { endpoint: 'ecpifluc', data: periodoData.ecpifluc },
              { endpoint: 'perdidasacumcuentasincobydeterioroifluc', data: periodoData.movperdidasacumuladascuentasincobrablesydeterioro },
              { endpoint: 'perdidasacumvalnetrealizyotrasperdeninvifluc', data: periodoData.movperdidasacumuladasvalornetorealizacion },
              { endpoint: 'propiedadesplantasyequiposifluc', data: periodoData.movpropiedadesplantasyequipos },
              { endpoint: 'propiedadesdeinversionifluc', data: periodoData.movpropiedadesdeinversion },
              { endpoint: 'intangiblesifluc', data: periodoData.movintangibles },
              { endpoint: 'activosbiologicosifluc', data: periodoData.movactivosbiologicos },
              { endpoint: 'impuestosdiferidosifluc', data: periodoData.movimpuestosdiferidos },
              { endpoint: 'jubilacionpatronalifluc', data: periodoData.movjubilacionpatronal },
              { endpoint: 'deshaucioifluc', data: periodoData.deshaucio },
              { endpoint: 'activosfinancieroslargoplazoifluc', data: periodoData.activosfinancieroslargoplazo },
              { endpoint: 'otrosifluc', data: periodoData.otros },
            ].forEach(item => createRequest(item.endpoint, item.data));

            [
              { endpoint: 'activoscorrientesantifluc', data: periodoData.activoscorrientesifluc_ant },
              { endpoint: 'activosnocorrientesantifluc', data: periodoData.activosnocorrientesifluc_ant },
              { endpoint: 'pasivoscorrientesantifluc', data: periodoData.pasivoscorrientesifluc_ant },
              { endpoint: 'pasivosnocorrientesantifluc', data: periodoData.pasivosnocorrientesifluc_ant },
              { endpoint: 'patrimonioantifluc', data: periodoData.patrimonioifluc_ant },
              { endpoint: 'costosantifluc', data: periodoData.costosifluc_ant },
              { endpoint: 'ingresosantifluc', data: periodoData.ingresosifluc_ant },
              { endpoint: 'otrosingresosantifluc', data: periodoData.otrosingresosifluc_ant },
              { endpoint: 'gastosdeventasantifluc', data: periodoData.gastosdeventasifluc_ant },
              { endpoint: 'gastosfinancierosantifluc', data: periodoData.gastosfinancierosifluc_ant },
              { endpoint: 'gastosadministrativosantifluc', data: periodoData.gastosadministrativosifluc_ant },
              { endpoint: 'otrosgastosantifluc', data: periodoData.otrosgastosifluc_ant },
              { endpoint: 'resultadosantifluc', data: periodoData.resultadosifluc_ant },
              { endpoint: 'operacionesdiscontinuadasantIfluc', data: periodoData.operacionesdiscontinuadasifluc_ant },
              { endpoint: 'otrosresultadosintegralesantifluc', data: periodoData.otrosresultadosintegralifluc_ant },
              { endpoint: 'participacioncontroladoraantifluc', data: periodoData.resultadosparticipacioncontroladoraifluc_ant },
              { endpoint: 'perdidasacumcuentasincobydeterioroantifluc', data: periodoData.movperdidasacumuladascuentasincobrablesydeterioro_ant },
              { endpoint: 'perdidasacumvalnetrealizyotrasperdeninvantifluc', data: periodoData.movperdidasacumuladasvalornetorealizacion_ant },
              { endpoint: 'propiedadesplantasyequiposantifluc', data: periodoData.movpropiedadesplantasyequipos_ant },
              { endpoint: 'propiedadesdeinversionantifluc', data: periodoData.movpropiedadesdeinversion_ant },
              { endpoint: 'intangiblesantifluc', data: periodoData.movintangibles_ant },
              { endpoint: 'activosbiologicosantifluc', data: periodoData.movactivosbiologicos_ant },
              { endpoint: 'impuestosdiferidosantifluc', data: periodoData.movimpuestosdiferidos_ant },
              { endpoint: 'jubilacionpatronalantifluc', data: periodoData.movjubilacionpatronal_ant },
              { endpoint: 'deshaucioantifluc', data: periodoData.deshaucio_ant },
              { endpoint: 'activosfinancieroslargoplazoantifluc', data: periodoData.activosfinancieroslargoplazo_ant },
              { endpoint: 'otrosantifluc', data: periodoData.otros_ant },
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


    // 👉 fetch single reporte actual
    fetchReporteIflucActual(reporte) {
      console.log(reporte)
      localStorage.setItem('reporteId', JSON.stringify(reporte['reporteId']))

      const reportStore = useReportStore()

      return axios
        .get(`${environment.apiUrl}/reportesifluc/actualnew/${reporte['reporteId']}`)
        .then(response => {
          console.log(response)
          response.data.empresaId = reporte['empresaId']
          response.data.nombre_reporte = "ifluc"
          response.data.periodoId = reporte['periodoId']
          response.data.periodosreporteifluc = reporte['periodosreporteifluc']
          response.data.empresareporteifluc = reporte['empresareporteifluc']
          response.data.userId = reporte['userId']
          if (response.data['reporteTurboNotas']) {
            localStorage.setItem('entidad', JSON.stringify(response.data['reporteTurboNotas']))
          }
          if (response.data['reporteInformeSocietario']) {
            localStorage.setItem('informesocietario', JSON.stringify(response.data['reporteInformeSocietario']))
          }
          reportStore.setReportData(response.data)

          localStorage.setItem('empresa', JSON.stringify(response.data.empresareporteifluc))
        })
        .catch(error => {
          console.error("Error al obtener el reporte:", error)
        })
    },

    fetchReporteIflucAnterior(reporte) {
      const reportStore = useReportStore()

      return axios
        .get(`${environment.apiUrl}/reportesifluc/anteriornew/${reporte['reporteId']}`)
        .then(response => {
          response.data.empresaId = reporte['empresaId']
          response.data.nombre_reporte = "ifluc"
          response.data.periodoId = reporte['periodoId']
          response.data.periodosreporteifluc = reporte['periodosreporteifluc']
          response.data.empresareporteifluc = reporte['empresareporteifluc']
          response.data.userId = reporte['userId']
          reportStore.setReportDataAnt(response.data)
        })
        .catch(error => {
          console.error("Error al obtener el reporte:", error)
        })
    },

    // 👉 fetch single user
    fetchReporteSuperciasByCompanyByPeriodo(empresa, periodo) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/reportesifluc/${empresa}/${periodo}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 delete single reporte
    eliminarReporteSeleccionado(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${environment.apiUrl}/reportesifluc/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    fetchReporteIflucByPeriodoActual(periodoId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/reportesIfluc/actual/ByPeriodo/${periodoId}`).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    addReporteTurboNotas(reporteData) {
      console.log("reporteData", reporteData)

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/turbonotasfc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteTurboNotas(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/turbonotasfc/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    addReporteInformeSocietario(reporteData) {
      reporteData.reporteId = reporteData.entidad.reporteId

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/informesocietariofc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteInformeSocietario(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/informesocietariofc/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    updateReporteIfluc(reporteData) {
      reporteData.reporteId = JSON.parse(localStorage.getItem('reporteId'))
      console.log("reporteData: ", reporteData)

      return new Promise((resolve, reject) => {
        axios.put(`${environment.apiUrl}/reportesIfluc`, { reporte: reporteData }).then(response => {
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
        axios.post(`${environment.apiUrl}/actividadesdefinanciamientofdifluc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeFinanciamiento(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/actividadesdefinanciamientofdifluc/${reporteId}`).then(response => {
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
        axios.post(`${environment.apiUrl}/actividadesdeoperacionnfdifluc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeOperacion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/actividadesdeoperacionnfdifluc/${reporteId}`).then(response => {
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
        axios.post(`${environment.apiUrl}/actividadesdeinversionfdifluc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowActividadesDeInversion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/actividadesdeinversionfdifluc/${reporteId}`).then(response => {
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
        axios.post(`${environment.apiUrl}/conciliacionfdifluc`, { reporte: reporteData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    getReporteDynamicFlowConciliacion(reporteId) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/conciliacionfdifluc/${reporteId}`).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },
  },
})
