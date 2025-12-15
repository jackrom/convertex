import { defineStore } from "pinia"
import { useSessionUser } from "@/composables/useSessionUser"
import { useEmpresaService } from "@/services/empresa.service"
import { useCache } from "@/composables/useCache"
import { useEmpresaLogic } from "@/composables/useEmpresaLogic"
import { usePeriodoStore } from "@/@store/periodo.store"   // 👈 NUEVO (para refrescar periodos)
import { useReportesStore } from "@/@store/reportes.store"

export const useEmpresaStore = defineStore("empresas", {
  state: () => ({
    empresas: [],
    loaded: false,
    limiteExcedido: false,
    storage: 0, // 👈 por si useSessionUser trae storage
  }),
  getters: {
    empresasActivas(state) {
      return (state.empresas || []).filter(e => !e.deletedat)
    },
  },

  actions: {
    async load({ force = false } = {}) {
      const { userId, storage } = useSessionUser()
      const cache = useCache()
      const logic = useEmpresaLogic()
      const api = useEmpresaService()

      const lista = await cache.getOrFetch(
        "empresas",
        () => api.fetch(userId),
        { force },
      )

      // ✅ defensa: nunca metas eliminadas al store
      const listaActiva = (lista || []).filter(e => !e.deletedat)

      this.empresas = logic.prepararListaEmpresas(listaActiva)

      this.storage = storage
      this.limiteExcedido = logic.calcularLimiteEmpresas(this.empresas, storage)
      this.loaded = true
    },


    async add(empresaNueva) {
      const api = useEmpresaService()
      const cache = useCache()

      await api.create(empresaNueva)

      // invalidar cache → recargar
      await cache.invalidateEmpresas()
      this.loaded = false
      await this.load({ force: true })
    },

    /**
     * Eliminar empresa con borrado lógico en cascada (empresa + periodos + reportes)
     * y sincronizar:
     *  - IndexedDB (empresas, periodos, reportes)
     *  - store de empresas
     *  - store de periodos
     */
    async remove(id) {
      const api = useEmpresaService()
      const cache = useCache()
      const periodoStore = usePeriodoStore()
      const reportesStore = useReportesStore()

      // 1) Optimistic UI: quita inmediatamente del state
      this.empresas = this.empresas.filter(e => e.id !== id)

      // 2) Llama al backend (tu service ya trata 404 como ok)
      await api.delete(id)

      // 3) Limpieza dura de cache
      await Promise.all([
        cache.invalidateEmpresas(),
        cache.invalidatePeriodos(),
        cache.invalidateReportes(),
      ])

      // 4) ✅ Capa extra de seguridad:
      // Si eliminaste la última empresa visible,
      // deja cache "empresas" explícitamente en []
      if (this.empresas.length === 0) {
        await cache.set("empresas", [])
      }

      // 5) Forzar recarga real contra API
      this.loaded = false
      periodoStore.loaded = false
      reportesStore.loaded = false

      await Promise.all([
        this.load({ force: true }),
        periodoStore.load?.({ force: true }),
        reportesStore.load?.({ force: true }),
      ])
    },
  },
})
