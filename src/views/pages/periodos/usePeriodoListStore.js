import { defineStore } from 'pinia'
import axios from '@axios'
import { environment } from "@/utils/environments"
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"

export const usePeriodoListStore = defineStore('PeriodoListStore', {
  actions: {

    // 👉 Fetch users data
    fetchPeriodos(params) { return axios.get(`${environment.apiUrl}/periodosifluc/byuser`, { params }) },

    fetchPeriodosWithFlowValid(params) { return axios.get(`${environment.apiUrl}/periodosifluc/byuser/flowvalid`, { params }) },

    // 👉 Add User
    addPeriodo(periodoData) {
      console.log('nuevoPeriodoData: ', periodoData)

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/periodosifluc`, {
          periodo: periodoData,
        }).then(response => {
          console.log('ID NUEVO PERIODO CREADO: ', response.data.id)
          localStorage.setItem('periodonuevo', JSON.stringify(response.data.id))
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single user
    fetchPeriodo(id) {
      return new Promise((resolve, reject) => {
        axios.get(`${environment.apiUrl}/periodosifluc/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 👉 fetch single user
    eliminarPeriodoSeleccionado(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${environment.apiUrl}/periodosifluc/${id}`).then(response => {
          resolve(response)
        }).catch(error => reject(error))
      })
    },
  },
})
