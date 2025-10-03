import { defineStore } from 'pinia'
import axios from '@axios'
import { environment } from "@/utils/environments"

export const useSriListStore = defineStore('SriListStore', {
  actions: {
    // 👉 Fetch users data
    fetchReportesSri(params) { return axios.get(`${environment.apiUrl}/srifc/byuser`, { params }) },

    // 👉 Add User
    addReporteSri(periodoData) {
      console.log(periodoData)

      return new Promise((resolve, reject) => {
        axios.post(`${environment.apiUrl}/srifc`, {
          periodo: periodoData,
        }).then(response => {
          console.log(response)
          resolve(response)
        })
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single user
    fetchReporte(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
