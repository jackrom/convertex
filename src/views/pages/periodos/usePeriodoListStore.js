import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'
import { environment } from '@/utils/environments'
import { useIndexedDB } from '@/composables/useIndexedDB'

const indexedDBApi = useIndexedDB()
const { clearStore, addItem } = indexedDBApi

export const usePeriodoListStore = defineStore('PeriodoListStore', {
  state: () => ({
    periodos: [],
    loadingPeriodos: false,
    periodosLoaded: false, // para cargar solo una vez si quieres
  }),

  actions: {
    // 👉 Sincroniza periodos con IndexedDB (solo activos: deletedat = null)
    async syncPeriodosToIndexedDB(remotos) {
      try {
        if (!Array.isArray(remotos)) return

        // Filtramos solo periodos no eliminados lógicamente
        const activos = remotos.filter(p => !p.deletedat)

        await clearStore('periodosconvertexs')

        for (const raw of activos) {
          const periodo = {
            ...raw,
            id: raw.id, // PeriodosConvertex tiene PK numérica
          }

          await addItem('periodosconvertexs', periodo, periodo.id)
        }
      } catch (error) {
        console.error('[usePeriodoListStore] Error sincronizando periodos en IndexedDB:', error)
      }
    },

    // 👉 Fetch periodos data (con protección + sync IndexedDB)
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

        // data viene como: { ok, periodos, totalPage, totalPeriodos }
        let lista = []
        if (Array.isArray(data?.periodos)) {
          lista = data.periodos
        } else if (Array.isArray(data)) {
          lista = data
        }

        await this.syncPeriodosToIndexedDB(lista)

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

      // Marcamos para que el próximo fetch se actualice desde servidor
      this.periodosLoaded = false

      return response
    },

    async fetchPeriodo(id) {
      return axios.get(`${environment.apiUrl}/v1/convertex/periodosconvertex/${id}`)
    },

    async eliminarPeriodoSeleccionado(id) {
      const response = await axios.delete(`${environment.apiUrl}/v1/convertex/periodosconvertex/${id}`)

      // Marcamos para refrescar periodos
      this.periodosLoaded = false

      return response
    },
  },
})
