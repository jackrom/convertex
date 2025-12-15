import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'
import { environment } from '@/utils/environments'
import { useIndexedDB } from '@/composables/useIndexedDB'

// Inicializamos helper de IndexedDB
const indexedDBApi = useIndexedDB()
const { clearStore, addItem } = indexedDBApi

export const useEmpresaListStore = defineStore('EmpresaListStore', {
  state: () => ({
    empresas: [],
    loadingEmpresas: false,
    empresasLoaded: false,

    empresasEliminadas: [],
    loadingEmpresasEliminadas: false,
    empresasEliminadasLoaded: false,
  }),

  actions: {
    // 👉 Sincroniza la lista de empresas recibida con IndexedDB
    async syncEmpresasToIndexedDB(remotas) {
      try {
        if (!Array.isArray(remotas)) return

        // Normalizamos: cada empresa debe tener 'id' (usamos id o ruc)
        const lista = remotas.map(raw => ({
          ...raw,
          id: raw.id ?? raw.ruc,
        }))

        await clearStore('empresasconvertexs')

        for (const empresa of lista) {
          await addItem('empresasconvertexs', empresa, empresa.id)
        }
      } catch (error) {
        console.error('[useEmpresaListStore] Error sincronizando empresas en IndexedDB:', error)
      }
    },

    // 👉 Fetch empresas data (con protección + sync IndexedDB)
    async fetchEmpresas(params = {}) {
      // Evita peticiones simultáneas
      if (this.loadingEmpresas) return

      // Si ya cargaste y no te están pidiendo forzar, devuelve lo que hay
      if (this.empresasLoaded && !params.force) {
        return this.empresas
      }

      this.loadingEmpresas = true
      try {
        const { data } = await axios.get(
          `${environment.apiUrl}/v1/convertex/empresasconvertex/by-user`,
          { params },
        )

        // 'data' aquí es el JSON completo de la API:
        // { ok: true, data: [ ...empresas ] }
        this.empresas = data
        this.empresasLoaded = true

        // Extraemos el array real de empresas para IndexedDB
        let empresasRemotas = []
        if (Array.isArray(data?.data)) {
          empresasRemotas = data.data
        } else if (Array.isArray(data)) {
          empresasRemotas = data
        }

        await this.syncEmpresasToIndexedDB(empresasRemotas)

        return data
      } finally {
        this.loadingEmpresas = false
      }
    },

    // 👉 Add Empresa
    async addEmpresa(empresaData) {
      const response = await axios.post(
        `${environment.apiUrl}/v1/convertex/empresasconvertex`,
        { empresa: empresaData },
      )

      // Opcional: podrías marcar empresasLoaded=false para forzar un refetch en el próximo fetchEmpresas
      this.empresasLoaded = false

      return response
    },

    // 👉 fetch single empresa
    async fetchEmpresa(id) {
      return axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`)
    },

    // 👉 delete single empresa
    async eliminarEmpresaSeleccionada(id) {
      const response = await axios.delete(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`)

      // Luego de eliminar, marcamos para que se refresque desde servidor
      this.empresasLoaded = false

      return response
    },

    // 👉 add single empresa to delete empresa table
    async agregarEmpresaEliminadaToDB(dataEmpresa) {
      return axios.post(
        `${environment.apiUrl}/v1/convertex/empresaseliminadasconvertex`,
        { dataEmpresa },
      )
    },

    // 👉 Fetch empresas eliminadas (también con protección)
    async fetchEmpresasEliminadasConvertex(params = {}) {
      if (this.loadingEmpresasEliminadas) return

      if (this.empresasEliminadasLoaded && !params.force) {
        return this.empresasEliminadas
      }

      this.loadingEmpresasEliminadas = true
      try {
        const { data } = await axios.get(
          `${environment.apiUrl}/v1/convertex/empresasconvertex/deleted/by-user`,
          { params },
        )

        this.empresasEliminadas = data
        this.empresasEliminadasLoaded = true

        return data
      } finally {
        this.loadingEmpresasEliminadas = false
      }
    },
  },
})
