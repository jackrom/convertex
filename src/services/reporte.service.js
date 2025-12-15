import { http } from "./http.service"

export function useReporteService() {
  return {
    fetch: async userId => {
      const { data } = await http.get(`/v1/convertex/reportesconvertex/by-user`, {
        params: { user: userId },
      })

      return data.data || []
    },

    async fetchByPeriodo(periodoId) {
      const { data } = await http.get(
        `/v1/convertex/reportesconvertex/by-periodo/${periodoId}`,
      )

      return Array.isArray(data?.data) ? data.data : []
    },

    create: async reporte => {
      return await http.post(`/v1/convertex/reportesconvertex`, reporte)
    },

    async update(id, reporte) {
      return http.put(`/v1/convertex/reportesconvertex/${id}`, reporte)
    },
  }
}
