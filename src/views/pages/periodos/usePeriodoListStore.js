import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'
import { environment } from '@/utils/environments'

export const usePeriodoListStore = defineStore('PeriodoListStore', {
  state: () => ({
    periodos: [],
    loadingPeriodos: false,
    periodosLoaded: false, // para cargar solo una vez si quieres
  }),

  actions: {
    // 👉 Fetch periodos data (con protección)
    async fetchPeriodos(params = {}) {
      // Evita peticiones simultáneas
      if (this.loadingPeriodos) return

      // Si no quieres recargar siempre, solo cuando se fuerce
      if (this.periodosLoaded && !params.force) {
        return this.periodos
      }

      this.loadingPeriodos = true

      try {
        const { data } = await axios.get(
          `${environment.apiUrl}/v1/convertex/periodosconvertex/by-user`,
          { params },
        )

        console.log('fetchPeriodos: ', data)
        this.periodos = data
        this.periodosLoaded = true

        return data
      } finally {
        this.loadingPeriodos = false
      }
    },

    async fetchPeriodosWithFlowValid(params = {}) {
      const { data } = await axios.get(
        `${environment.apiUrl}/v1/convertex/periodosconvertex/byuser/flowvalid`,
        { params },
      )

      return data
    },

    async addPeriodo(periodoData) {
      console.log('nuevoPeriodoData: ', periodoData)

      const response = await axios.post(
        `${environment.apiUrl}/v1/convertex/periodosconvertex`,
        { periodo: periodoData },
      )

      console.log('ID NUEVO PERIODO CREADO: ', response.data.id)
      localStorage.setItem('periodonuevo', JSON.stringify(response.data.id))

      return response
    },

    async fetchPeriodo(id) {
      return axios.get(`${environment.apiUrl}/v1/convertex/periodosconvertex/${id}`)
    },

    async eliminarPeriodoSeleccionado(id) {
      return axios.delete(`${environment.apiUrl}/v1/convertex/periodosconvertex/${id}`)
    },
  },
})
