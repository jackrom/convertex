// src/services/periodo.service.js
import api from "@/plugins/axios/axios"
import { usePerformanceStore } from "@/@store/performance.store"

export function usePeriodoService() {
  const performanceStore = usePerformanceStore()

  // Helper para registrar tiempos
  const trackApi = async (endpointLabel, fn) => {
    const start = performance.now()
    const response = await fn()
    const duration = performance.now() - start

    performanceStore.addApiTime({
      endpoint: endpointLabel,
      duration,
      timestamp: new Date().toISOString(),
    })

    console.log(response)

    return response
  }

  return {

    // ==============================================================
    // FETCH LISTA DE PERIODOS POR USER
    // ==============================================================
    async fetch(userId) {
      const response = await trackApi(
        "GET /v1/convertex/periodosconvertex/by-user",
        () => api.get(
          "/v1/convertex/periodosconvertex/by-user",
          { params: { user: userId } },
        ),
      )

      return response.data.periodos || []
    },

    // ==============================================================
    // CREAR PERIODO
    // ==============================================================
    async create(periodo) {
      console.log("periodo: ", periodo)

      return await trackApi(
        "POST /v1/convertex/periodosconvertex",
        () => api.post("/v1/convertex/periodosconvertex", { periodo }),
      )
    },

    // ==============================================================
    // ELIMINAR PERIODO
    // ==============================================================
    async delete(id) {
      return await trackApi(
        "DELETE /v1/convertex/periodosconvertex/:id/cascade",
        () => api.delete(`/v1/convertex/periodosconvertex/${id}/cascade`),
      )
    },

    async duplicate(id) {
      return await trackApi(
        "POST /v1/convertex/periodosconvertex/:id/duplicate",
        () => api.post(`/v1/convertex/periodosconvertex/${id}/duplicate`),
      )
    },
  }
}
