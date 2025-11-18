// Archivo: stores/reportStore.js
import { defineStore } from "pinia"

export const useReportStore = defineStore("report", {
  state: () => ({
    reportData: {},
    reportDataAnt: {},

    // Valores adicionales para los reportes
    esfvalues: {},
    erivalues: {},
    ecpvalues: {},
    efemdvalues: {},

    // Otros valores de diferencia por cuadrar
    diferenciaPerdidaAcumuladaCuentasIncobrables_actual: 0,
    diferenciaPerdidaAcumuladaCuentasIncobrables_ant: 0,

    // ... otros valores de diferencia
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

      const data = targetData[key]

      if (data) {
        if (Array.isArray(data)) {
          return this.mapArrayData(data)
        } else if (typeof data === 'object') {
          return this.mapObjectData(data)
        }
      }

      return null
    },

    /**
     * Función auxiliar para mapear arrays de datos
     */
    mapArrayData(arrayData) {
      return arrayData.map(item => this.mapObjectData(item))
    },

    /**
     * Función auxiliar para mapear objetos de datos
     */
    mapObjectData(data) {
      return Object.fromEntries(
        Object.entries(data).map(([fieldKey, fieldValue]) =>
          (fieldKey === 'updatedAt' || fieldKey === 'createdAt')
            ? [fieldKey, fieldValue]
            : [fieldKey, this.parseValue(fieldValue)],
        ),
      )
    },

    /**
     * Función para convertir valores en números, si es posible
     */
    parseValue(value) {
      return Number(value) || 0
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

    /**
     * Cargar todos los valores asociados a un reporte
     * @param {string} reporteid - El ID del reporte
     * @param {boolean} isAnt - Si se debe cargar de los datos anteriores
     */
    async loadReportValues(reporteid, isAnt = false) {
      const targetState = isAnt ? this.reportDataAnt : this.reportData

      try {
        // Hacer la llamada a la API para obtener los valores del reporte
        const response = await fetch(`/api/reportesconvertex/${reporteid}/values`)
        const data = await response.json()

        if (response.ok && data.ok) {
          // Guardar los datos de valores de los diferentes tipos
          targetState.esfvalues = data.data.esf || {}
          targetState.erivalues = data.data.eri || {}
          targetState.ecpvalues = data.data.ecp || {}
          targetState.efemdvalues = data.data.efemd || {}

          // Guardar en localStorage si es necesario
          this.saveToLocalStorage("reportData", targetState)
        } else {
          console.error("Error al cargar los valores del reporte:", data.error)
        }
      } catch (error) {
        console.error("Error al hacer la petición de valores:", error)
      }
    },

    /**
     * Guardar datos del reporte en el estado y en localStorage.
     * @param {Object} data - Los datos del reporte.
     */
    setReportData(data) {
      this.reportData = data
      this.saveToLocalStorage("reportData", data)
    },

    /**
     * Guardar datos de los valores en el estado y en localStorage.
     * @param {Object} data - Los datos de los valores.
     */
    setReportValues(values) {
      this.reportData.esfvalues = values.esf
      this.reportData.erivalues = values.eri
      this.reportData.ecpvalues = values.ecp
      this.reportData.efemdvalues = values.efemd
      this.saveToLocalStorage("reportData", this.reportData)
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

    // Función de refresco del store
    refreshStore() {
      this.reportData = this.loadFromLocalStorage("reportData")
      this.reportDataAnt = this.loadFromLocalStorage("reportDataAnt")
    },

    // Limpiar los datos
    clearReportData() {
      try {
        localStorage.removeItem("reportData")
        localStorage.removeItem("reportDataAnt")
        this.reportData = {}
        this.reportDataAnt = {}
      } catch (error) {
        console.error("Error al eliminar datos del reporte del localStorage:", error)
      }
    },
  },
})
