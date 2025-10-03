// Archivo: stores/reportStore.js
import { defineStore } from "pinia"

export const useReportStore = defineStore("report", {
  state: () => ({
    reportData: {},
    reportDataAnt: {},
    diferenciaPerdidaAcumuladaCuentasIncobrables_actual: 0,
    diferenciaPerdidaAcumuladaCuentasIncobrables_ant: 0,
    diferenciaporcuadrar_pavndryopei: 0,
    diferenciaporcuadrar_pavndryopei_ant: 0,
    diferenciaporcuadrar_ppye: 0,
    diferenciaporcuadrar_ppye_ant: 0,
    diferenciaporcuadrar_pdi: 0,
    diferenciaporcuadrar_pdi_ant: 0,
    diferenciaporcuadrar_intangibles: 0,
    diferenciaporcuadrar_intangibles_ant: 0,
    diferenciaporcuadrar_ab: 0,
    diferenciaporcuadrar_ab_ant: 0,
    diferenciaporcuadrar_id_apid: 0,
    diferenciaporcuadrar_id_apid_ant: 0,
    diferenciaporcuadrar_id_ppid: 0,
    diferenciaporcuadrar_id_ppid_ant: 0,
    diferenciaporcuadrar_jp: 0,
    diferenciaporcuadrar_jp_ant: 0,
    diferenciaporcuadrar_desahucio: 0,
    diferenciaporcuadrar_desahucio_ant: 0,
    diferenciaporcuadrar_aflp: 0,
    diferenciaporcuadrar_aflp_ant: 0,
    diferenciaporcuadrar_efe_af: 0,
    diferenciaporcuadrar_efe_af_ant: 0,
    diferenciaporcuadrar_efe_celgnylfo: 0,
    diferenciaporcuadrar_efe_celgnylfo_ant: 0,
  }),
  actions: {
    /**
     * Método para obtener datos del reporte.
     * Si el dato no está en el estado, intenta cargarlo desde localStorage.
     * @param {string} key - Clave del dato a obtener.
     * @param isAnt
     * @returns {*} - Valor del dato o null si no existe.
     */
    getReportData(key, isAnt = false) {
      const targetData = isAnt ? this.reportDataAnt : this.reportData

      if (targetData[key] && Array.isArray(targetData[key])) {
        const arrayData = targetData[key]
        if (arrayData.every(item => typeof item === 'object')) {
          return arrayData.map(item => {
            return Object.fromEntries(
              Object.entries(item).map(([fieldKey, fieldValue]) =>
                (fieldKey === 'updatedAt' || fieldKey === 'createdAt')
                  ? [fieldKey, fieldValue]
                  : [fieldKey, Number(fieldValue) || 0],
              ),
            )
          })
        }
      }

      if (targetData[key] && typeof targetData[key] === 'object') {
        return Object.fromEntries(
          Object.entries(targetData[key]).map(([fieldKey, fieldValue]) =>
            (fieldKey === 'updatedAt' || fieldKey === 'createdAt')
              ? [fieldKey, fieldValue]
              : [fieldKey, Number(fieldValue) || 0],
          ),
        )
      }

      return null
    },

    /**
     * Método para obtener un valor individual del reporte.
     * @param {string} key - Clave del objeto en el estado del reporte.
     * @param {string} field - Campo específico a buscar dentro del objeto.
     * @param {boolean} isAnt - Indica si se busca en los datos antiguos.
     * @returns {*} - Valor del campo o null si no existe.
     */
    getSingleReportValue(key, field, isAnt = false) {
      const targetData = isAnt ? this.reportDataAnt : this.reportData
      const data = targetData[key]
      if (data && typeof data === "object" && field in data) {
        return data[field]
      }

      return null
    },
    setReportData(data) {
      this.reportData = data
      this.saveToLocalStorage("reportData", data)
    },
    setReportDataAnt(data) {
      this.reportDataAnt = data
      this.saveToLocalStorage("reportDataAnt", data)
    },
    updateReportProperty(property, value, isAnt = false) {
      const targetState = isAnt ? "reportDataAnt" : "reportData"
      if (this[targetState][property] !== undefined) {
        this[targetState][property] = value
        this.saveToLocalStorage(targetState, this[targetState])
      }
    },
    updateReportData(key, field, value) {
      const currentData = this.reportData[key] || {}
      if (typeof currentData === 'object') {
        currentData[field] = value
        this.setReportData({ ...this.reportData, [key]: currentData })
      }
    },
    updateReportDataAnt(key, field, value) {
      const currentData = this.reportDataAnt[key] || {}
      if (typeof currentData === 'object') {
        currentData[field] = value
        this.setReportDataAnt({ ...this.reportDataAnt, [key]: currentData })
      }
    },
    saveReportData(reportData) {
      this.reportData = { ...this.reportData, ...reportData }
      localStorage.setItem('reportData', JSON.stringify(this.reportData))
    },
    saveReportDataAnt(reportDataAnt) {
      this.reportData = { ...this.reportDataAnt, ...reportDataAnt }
      localStorage.setItem('reportDataAnt', JSON.stringify(this.reportDataAnt))
    },
    saveToLocalStorage(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data))
      } catch (error) {
        console.error(`Error al guardar ${key} en localStorage:`, error)
      }
    },
    loadFromLocalStorage(key) {
      try {
        return JSON.parse(localStorage.getItem(key)) || {}
      } catch (error) {
        console.error(`Error al cargar ${key} desde localStorage:`, error)

        return {}
      }
    },
    refreshStore() {
      // Refresca los datos desde localStorage en caso de que hayan cambiado externamente
      this.reportData = this.loadFromLocalStorage("reportData")
      this.reportDataAnt = this.loadFromLocalStorage("reportDataAnt")
      this.diferenciaPerdidaAcumuladaCuentasIncobrables_actual = this.loadFromLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_actual") || 0
      this.diferenciaPerdidaAcumuladaCuentasIncobrables_ant = this.loadFromLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_ant") || 0
      this.diferenciaporcuadrar_pavndryopei = this.loadFromLocalStorage("diferenciaporcuadrar_pavndryopei") || 0
      this.diferenciaporcuadrar_pavndryopei_ant = this.loadFromLocalStorage("diferenciaporcuadrar_pavndryopei_ant") || 0
      this.diferenciaporcuadrar_ppye = this.loadFromLocalStorage("diferenciaporcuadrar_ppye") || 0
      this.diferenciaporcuadrar_ppye_ant = this.loadFromLocalStorage("diferenciaporcuadrar_ppye_ant") || 0
      this.diferenciaporcuadrar_pdi = this.loadFromLocalStorage("diferenciaporcuadrar_pdi") || 0
      this.diferenciaporcuadrar_pdi_ant = this.loadFromLocalStorage("diferenciaporcuadrar_pdi_ant") || 0
      this.diferenciaporcuadrar_intangibles = this.loadFromLocalStorage("diferenciaporcuadrar_intangibles") || 0
      this.diferenciaporcuadrar_intangibles_ant = this.loadFromLocalStorage("diferenciaporcuadrar_intangibles_ant") || 0
      this.diferenciaporcuadrar_ab = this.loadFromLocalStorage("diferenciaporcuadrar_ab") || 0
      this.diferenciaporcuadrar_ab_ant = this.loadFromLocalStorage("diferenciaporcuadrar_ab_ant") || 0
      this.diferenciaporcuadrar_id_apid = this.loadFromLocalStorage("diferenciaporcuadrar_id_apid") || 0
      this.diferenciaporcuadrar_id_apid_ant = this.loadFromLocalStorage("diferenciaporcuadrar_id_apid_ant") || 0
      this.diferenciaporcuadrar_id_ppid = this.loadFromLocalStorage("diferenciaporcuadrar_id_ppid") || 0
      this.diferenciaporcuadrar_id_ppid_ant = this.loadFromLocalStorage("diferenciaporcuadrar_id_ppid_ant") || 0
      this.diferenciaporcuadrar_jp = this.loadFromLocalStorage("diferenciaporcuadrar_jp") || 0
      this.diferenciaporcuadrar_jp_ant = this.loadFromLocalStorage("diferenciaporcuadrar_jp_ant") || 0
      this.diferenciaporcuadrar_desahucio = this.loadFromLocalStorage("diferenciaporcuadrar_desahucio") || 0
      this.diferenciaporcuadrar_desahucio_ant = this.loadFromLocalStorage("diferenciaporcuadrar_desahucio_ant") || 0
      this.diferenciaporcuadrar_aflp = this.loadFromLocalStorage("diferenciaporcuadrar_aflp") || 0
      this.diferenciaporcuadrar_aflp_ant = this.loadFromLocalStorage("diferenciaporcuadrar_aflp_ant") || 0
      this.diferenciaporcuadrar_efe_af = this.loadFromLocalStorage("diferenciaporcuadrar_efe_af") || 0
      this.diferenciaporcuadrar_efe_af_ant = this. loadFromLocalStorage("diferenciaporcuadrar_efe_af_ant") || 0
      this.diferenciaporcuadrar_efe_celgnylfo = this.loadFromLocalStorage("diferenciaporcuadrar_efe_celgnylfo") || 0
      this.diferenciaporcuadrar_efe_celgnylfo_ant = this.loadFromLocalStorage("diferenciaporcuadrar_efe_celgnylfo_ant") || 0
    },
    clearReportData() {
      try {
        localStorage.removeItem("reportData")
        localStorage.removeItem("reportDataAnt")
        localStorage.removeItem("diferenciaPerdidaAcumuladaCuentasIncobrables_actual")
        localStorage.removeItem("diferenciaPerdidaAcumuladaCuentasIncobrables_ant")
        localStorage.removeItem("diferenciaporcuadrar_pavndryopei")
        localStorage.removeItem("diferenciaporcuadrar_pavndryopei_ant")
        localStorage.removeItem("diferenciaporcuadrar_ppye")
        localStorage.removeItem("diferenciaporcuadrar_ppye_ant")
        localStorage.removeItem("diferenciaporcuadrar_pdi")
        localStorage.removeItem("diferenciaporcuadrar_pdi_ant")
        localStorage.removeItem("diferenciaporcuadrar_intangibles")
        localStorage.removeItem("diferenciaporcuadrar_intangibles_ant")
        localStorage.removeItem("diferenciaporcuadrar_ab")
        localStorage.removeItem("diferenciaporcuadrar_ab_ant")
        localStorage.removeItem("diferenciaporcuadrar_id_apid")
        localStorage.removeItem("diferenciaporcuadrar_id_apid_ant")
        localStorage.removeItem("diferenciaporcuadrar_id_ppid")
        localStorage.removeItem("diferenciaporcuadrar_id_ppid_ant")
        localStorage.removeItem("diferenciaporcuadrar_jp")
        localStorage.removeItem("diferenciaporcuadrar_jp_ant")
        localStorage.removeItem("diferenciaporcuadrar_desahucio")
        localStorage.removeItem("diferenciaporcuadrar_desahucio_ant")
        localStorage.removeItem("diferenciaporcuadrar_aflp")
        localStorage.removeItem("diferenciaporcuadrar_efe_af")
        localStorage.removeItem("diferenciaporcuadrar_efe_af_ant")
        localStorage.removeItem("diferenciaporcuadrar_efe_celgnylfo")
        localStorage.removeItem("diferenciaporcuadrar_efe_celgnylfo_ant ")
        localStorage.removeItem("diferenciaporcuadrar_aflp_ant")

        this.reportData = {}
        this.reportDataAnt = {}
        this.diferenciaPerdidaAcumuladaCuentasIncobrables_actual = 0
        this.diferenciaPerdidaAcumuladaCuentasIncobrables_ant = 0
        this.diferenciaporcuadrar_pavndryopei = 0
        this.diferenciaporcuadrar_pavndryopei_ant = 0
        this.diferenciaporcuadrar_ppye = 0
        this.diferenciaporcuadrar_ppye_ant = 0
        this.diferenciaporcuadrar_pdi = 0
        this.diferenciaporcuadrar_pdi_ant = 0
        this.diferenciaporcuadrar_intangibles = 0
        this.diferenciaporcuadrar_intangibles_ant = 0
        this.diferenciaporcuadrar_ab = 0
        this.diferenciaporcuadrar_ab_ant = 0
        this.diferenciaporcuadrar_id_apid = 0
        this.diferenciaporcuadrar_id_apid_ant = 0
        this.diferenciaporcuadrar_id_ppid = 0
        this.diferenciaporcuadrar_id_ppid_ant = 0
        this.diferenciaporcuadrar_jp = 0
        this.diferenciaporcuadrar_jp_ant = 0
        this.diferenciaporcuadrar_desahucio = 0
        this.diferenciaporcuadrar_desahucio_ant = 0
        this.diferenciaporcuadrar_aflp = 0
        this.diferenciaporcuadrar_aflp_ant = 0
        this.diferenciaporcuadrar_efe_af = 0
        this.diferenciaporcuadrar_efe_af_ant = 0
        this.diferenciaporcuadrar_efe_celgnylfo = 0
        this.diferenciaporcuadrar_efe_celgnylfo_ant = 0
      } catch (error) {
        console.error("Error al eliminar datos del reporte del localStorage:", error)
      }
    },
    updateEsfCuadre(newValue) {
      this.reportData.esf_cuadre = newValue
    },
    updateEriCuadre(newValue) {
      this.reportData.eri_cuadre = newValue
    },
    updateEfeCuadre(newValue) {
      this.reportData.efe_cuadre = newValue
    },
    updateMovCuadre(newValue) {
      this.reportData.mov_cuadre = newValue
    },
    updateEcpCuadre(newValue) {
      this.reportData.ecp_cuadre = newValue
    },
    updateDiferenciaPerdidaAcumuladaCuentasIncobrables(value) {
      this.diferenciaPerdidaAcumuladaCuentasIncobrables_actual = value
      this.saveToLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_actual", value)
    },
    updateDiferenciaPerdidaAcumuladaCuentasIncobrablesAnt(value) {
      this.diferenciaPerdidaAcumuladaCuentasIncobrables_ant = value
      this.saveToLocalStorage("diferenciaPerdidaAcumuladaCuentasIncobrables_ant", value)
    },
    updateDiferenciaporcuadrar_pavndryopei(value) {
      this.diferenciaporcuadrar_pavndryopei = value
      this.saveToLocalStorage("diferenciaporcuadrar_pavndryopei", value)
    },
    updateDiferenciaporcuadrar_pavndryopeiAnt(value) {
      this.diferenciaporcuadrar_pavndryopei_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_pavndryopei_ant", value)
    },
    updateDiferenciaporcuadrar_ppye(value) {
      this.diferenciaporcuadrar_ppye = value
      this.saveToLocalStorage("diferenciaporcuadrar_ppye", value)
    },
    updateDiferenciaporcuadrar_ppyeAnt(value) {
      this.diferenciaporcuadrar_ppye_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_ppye_ant", value)
    },
    updateDiferenciaporcuadrar_pdi(value) {
      this.diferenciaporcuadrar_pdi = value
      this.saveToLocalStorage("diferenciaporcuadrar_pdi", value)
    },
    updateDiferenciaporcuadrar_pdiAnt(value) {
      this.diferenciaporcuadrar_pdi_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_pdi_ant", value)
    },
    updateDiferenciaporcuadrar_intangibles(value) {
      this.diferenciaporcuadrar_intangibles = value
      this.saveToLocalStorage("diferenciaporcuadrar_intangibles", value)
    },
    updateDiferenciaporcuadrar_intangiblesAnt(value) {
      this.diferenciaporcuadrar_intangibles_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_intangibles_ant", value)
    },
    updateDiferenciaporcuadrar_ab(value) {
      this.diferenciaporcuadrar_ab = value
      this.saveToLocalStorage("diferenciaporcuadrar_ab", value)
    },
    updateDiferenciaporcuadrar_abAnt(value) {
      this.diferenciaporcuadrar_ab_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_ab_ant", value)
    },
    updateDiferenciaporcuadrar_id_apid(value) {
      this.diferenciaporcuadrar_id_apid = value
      this.saveToLocalStorage("diferenciaporcuadrar_id_apid", value)
    },
    updateDiferenciaporcuadrar_id_ppid(value) {
      this.diferenciaporcuadrar_id_ppid = value
      this.saveToLocalStorage("diferenciaporcuadrar_id_ppid", value)
    },
    updateDiferenciaporcuadrar_id_apidAnt(value) {
      this.diferenciaporcuadrar_id_apid_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_id_apid_ant", value)
    },
    updateDiferenciaporcuadrar_id_ppidAnt(value) {
      this.diferenciaporcuadrar_id_ppid_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_id_ppid_ant", value)
    },
    updateDiferenciaporcuadrar_jp(value) {
      this.diferenciaporcuadrar_jp = value
      this.saveToLocalStorage("diferenciaporcuadrar_jp", value)
    },
    updateDiferenciaporcuadrar_jpAnt(value) {
      this.diferenciaporcuadrar_jp_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_jp_ant", value)
    },
    updateDiferenciaporcuadrar_desahucio(value) {
      this.diferenciaporcuadrar_desahucio = value
      this.saveToLocalStorage("diferenciaporcuadrar_desahucio", value)
    },
    updateDiferenciaporcuadrar_desahucioAnt(value) {
      this.diferenciaporcuadrar_desahucio_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_desahucio_ant", value)
    },
    updateDiferenciaporcuadrar_aflp(value) {
      this.diferenciaporcuadrar_aflp = value
      this.saveToLocalStorage("diferenciaporcuadrar_aflp", value)
    },
    updateDiferenciaporcuadrar_aflpAnt(value) {
      this.diferenciaporcuadrar_aflp_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_aflp_ant", value)
    },
    updateDiferenciaporcuadrar_efe_af(value) {
      this.diferenciaporcuadrar_efe_af = value
      this.saveToLocalStorage("diferenciaporcuadrar_efe_af", value)
    },
    updateDiferenciaporcuadrar_efe_afAnt(value) {
      this.diferenciaporcuadrar_efe_af_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_efe_af_ant", value)
    },
    updateDiferenciaporcuadrar_efe_celgnylfo(value) {
      this.diferenciaporcuadrar_efe_celgnylfo = value
      this.saveToLocalStorage("diferenciaporcuadrar_efe_celgnylfo", value)
    },
    updateDiferenciaporcuadrar_efe_celgnylfoAnt(value) {
      this.diferenciaporcuadrar_efe_celgnylfo_ant = value
      this.saveToLocalStorage("diferenciaporcuadrar_efe_celgnylfo_ant", value)
    },
  },
})
