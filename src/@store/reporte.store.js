import { defineStore } from "pinia"
import { useCache } from "@/composables/useCache"
import { useReporteCache } from "@/composables/useReporteCache"
import { useReporteService } from "@/services/reporte.service"
import { useReporteLogic } from "@/composables/useReporteLogic"
import { useAudit } from "@/composables/useAudit"
import { useSessionUser } from "@/composables/useSessionUser"
import { usePeriodoLogic } from "@/composables/usePeriodoLogic"
import { normalizeReporte } from "@/utils/reporte-normalizer"

const audit = useAudit()

export const useReporteStore = defineStore("reportes", {
  state: () => ({
    reportes: [],
    reporte: null,
    periodoId: null,
    loaded: false,
    origen: "cache",
  }),

  actions: {
    async load() {
      // this.periodoId = periodoId

      const { userId } = useSessionUser()
      const cache = useCache()

      // const cache = useReporteCache()
      const api = useReporteService()
      const logic = useReporteLogic()

      const lista = await cache.getOrFetch(
        'reportes',
        () => api.fetch(userId),
      )

      // normalizar
      let reportes = lista.map(normalizeReporte)

      console.log(reportes)

      if (reportes) {
        this.reportes = reportes
        this.origen = reportes.origen
        this.loaded = true
      }
    },

    async hydrateFromTxt(dataTxt) {
      const logic = useReporteLogic()
      const cache = useReporteCache()

      const merged = logic.mergeConTxt(this.reporte, dataTxt)

      logic.validarReporte(merged)

      this.reporte = merged
      this.origen = "txt"

      audit.registrar({
        modulo: "TXT",
        accion: "import",
        targetId: this.reporte.id,
        empresaId: this.reporte.empresaId,
        periodoId: this.reporte.periodoId,
        antes: this.reporte,
        despues: merged,
        meta: { origen: "txt" },
      })

      await cache.save(merged)
    },

    async saveToServer() {
      const api = useReporteService()
      const logic = useReporteLogic()

      logic.validarReporte(this.reporte)

      await api.update(this.reporte.id, this.reporte)
    },
  },
})
