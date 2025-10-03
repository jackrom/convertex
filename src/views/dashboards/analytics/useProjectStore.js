import axios from '@axios'
import { environment } from "@/utils/environments"

export const useProjectStore = defineStore('ProjectStore', {
  actions: {
    fetchEmpresasEliminadasIfluc(params) {
      return axios.get(`${environment.apiUrl}/empresaseliminadasIfluc/byuser`, { params })
    },
  },
})
