import { defineStore } from 'pinia'
import axios from '@axios'
import { environment } from "@/utils/environments"

export const useEmpresaListStore = defineStore('EmpresaListStore', {

  actions: {
    // 👉 Fetch empresa data
    fetchEmpresas(params) {
      return axios.get(`${environment.apiUrl}/empresasifluc/byuser`, { params })
    },

    // 👉 Add Empresa
    addEmpresa(empresaData) {
      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/empresasifluc`, { empresa: empresaData }).then(response => {
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single empresa
    fetchEmpresa(id) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/empresasifluc/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 👉 delete single empresa
    eliminarEmpresaSeleccionada(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${environment.apiUrl}/empresasifluc/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 👉 add single empresa to delete empresa table
    agregarEmpresaEliminadaToDB(dataEmpresa) {

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/empresaseliminadasIfluc`, { dataEmpresa }).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    fetchEmpresasEliminadasIfluc(params) {
      return axios.get(`${environment.apiUrl}/empresaseliminadasIfluc/byuser`, { params })
    },
  },
})
