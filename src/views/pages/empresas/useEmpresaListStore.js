import { defineStore } from 'pinia'
import axios from '@axios'
import { environment } from "@/utils/environments"

const APIURL = import.meta.env.VITE_API_URL

export const useEmpresaListStore = defineStore('EmpresaListStore', {

  actions: {
    // 👉 Fetch empresa data
    fetchEmpresas(params) {
      return axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/by-user`, { params })
    },

    // 👉 Add Empresa
    addEmpresa(empresaData) {
      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/empresasconvertex`, { empresa: empresaData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single empresa
    fetchEmpresa(id) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 👉 delete single empresa
    eliminarEmpresaSeleccionada(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${environment.apiUrl}/v1/convertex/empresasconvertex/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 👉 add single empresa to delete empresa table
    agregarEmpresaEliminadaToDB(dataEmpresa) {

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/v1/convertex/empresaseliminadasconvertex`, { dataEmpresa }).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    fetchEmpresasEliminadasConvertex(params) {
      return axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/deleted/by-user`, { params })
    },
  },
})
