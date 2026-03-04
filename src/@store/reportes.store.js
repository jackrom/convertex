// src/@store/reportes.store.js
import { defineStore } from "pinia"
import { useReportesService } from "@/services/reportes.service"
import { useCache } from "@/composables/useCache"
import { useSessionUser } from "@/composables/useSessionUser"
import { normalizeReporte } from "@/utils/reporte-normalizer"
import { useReporteLogic } from "@/composables/useReporteLogic"

export const useReportesStore = defineStore("reportes", {
  state: () => ({
    reportes: [],
    loaded: false,
    loading: false,
  }),

  getters: {
    activos(state) {
      return state.reportes.filter(r => !r.deletedat)
    },
  },

  actions: {
    async load({ force = false } = {}) {
      const { userId } = useSessionUser()
      const api = useReportesService()
      const cache = useCache()
      const logic = useReporteLogic()

      const lista = await cache.getOrFetch(
        "reportes",
        () => api.list(userId),
        { force },
      )

      let reportes = lista.map(normalizeReporte)

      // marcar duplicados
      reportes = logic.marcarDuplicados(reportes)

      this.reportes = reportes
      this.loaded = true
    },

    async get(id) {
      const api = useReportesService()

      return api.getOne(id)
    },

    async delete(id) {
      const api = useReportesService()
      const cache = useCache()

      await api.delete(id)

      await cache.invalidateReportes()
      this.loaded = false
      await this.load()
    },

    // Si aún la usas en otros flujos simples (solo crear reporte)
    async createForPeriodo(periodo) {
      const api = useReportesService()
      const cache = useCache()
      const { userId } = useSessionUser()

      if (!periodo?.id) {
        console.warn("[reportes.store] createForPeriodo sin periodo válido", periodo)

        return null
      }

      const payload = {
        periodoid: periodo.id,
        empresaid: periodo.empresaid,
        userid: userId,
      }

      const res = await api.create(payload)
      const body = res?.data ?? res

      let creado =
        body?.data?.reporte ||
        body?.reporte ||
        body?.data ||
        body ||
        null

      await cache.invalidateReportes()
      this.loaded = false
      await this.load()

      if (creado?.reporteid) {
        const enLista = this.reportes.find(r => r.reporteid === creado.reporteid)
        if (enLista) return enLista
      }

      return creado
    },

    // 🔹 Nuevo: delega en el servicio la creación completa
    // periodoData = resultado de obtenerDatosReporte(...)
    async addReporteConvertex(periodoData) {
      const api = useReportesService()
      const cache = useCache()

      console.log('periodoData', periodoData)

      const row = await api.createWithValues(periodoData)

      // Refrescar lista de reportes
      await cache.invalidateReportes()
      this.loaded = false
      await this.load()

      return row
    },
  },
})
