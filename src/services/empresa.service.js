// src/services/empresa.service.js
import api from "@/plugins/axios/axios"
import { usePerformanceStore } from "@/@store/performance.store"

export function useEmpresaService() {
  const performanceStore = usePerformanceStore()

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

  return {

    // ==============================================================
    // LISTA DE EMPRESAS POR USER (ACTIVAS)
    // ==============================================================
    async fetch(userId) {
      const response = await trackApi(
        "GET /v1/convertex/empresasconvertex/by-user",
        () => api.get(
          "/v1/convertex/empresasconvertex/by-user",
          { params: { user: userId } },
        ),
      )

      const { data } = response

      console.log(data)

      // backend responde { ok, data: [...] }
      return data.data || []
    },

    // ==============================================================
    // LISTA DE EMPRESAS ELIMINADAS DEL USUARIO (soft delete)
    // ==============================================================
    async fetchDeletedByUser() {
      const response = await trackApi(
        "GET /v1/convertex/empresasconvertex/deleted/by-user",
        () => api.get("/v1/convertex/empresasconvertex/deleted/by-user"),
      )

      const { data } = response

      // backend responde { ok, data: [...] }
      return data.data || []
    },

    // ==============================================================
    // CREAR EMPRESA
    // ==============================================================
    async create(empresa) {
      // Devolvemos el mismo axios response que tenías antes
      return trackApi(
        "POST /v1/convertex/empresasconvertex",
        () => api.post("/v1/convertex/empresasconvertex", { empresa }),
      )
    },

    // ==============================================================
    // ELIMINAR EMPRESA (CASCADE)
    // ==============================================================
    async delete(id) {
      return trackApi(
        "DELETE /v1/convertex/empresasconvertex/:id/cascade",
        async () => {
          try {
            return await api.delete(`/v1/convertex/empresasconvertex/${id}/cascade`)
          } catch (err) {
            if (err?.response?.status === 404) {
              return { data: { ok: true, alreadyDeleted: true } }
            }
            throw err
          }
        },
      )
    },
  }
}
