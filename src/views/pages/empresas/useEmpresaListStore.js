import { defineStore } from 'pinia'
import axios from '@/plugins/axios/axios'
import { environment } from '@/utils/environments'

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
    // 👉 Fetch empresas data (con protección)
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

        this.empresas = data
        this.empresasLoaded = true

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

      return response
    },

    // 👉 fetch single empresa
    async fetchEmpresa(id) {
      return axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`)
    },

    // 👉 delete single empresa
    async eliminarEmpresaSeleccionada(id) {
      return axios.delete(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`)
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
