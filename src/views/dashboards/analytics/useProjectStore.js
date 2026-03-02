import axios from '@axios'
import { environment } from "@/utils/environments"

export const useProjectStore = defineStore('ProjectStore', {
  actions: {
    fetchEmpresasEliminadasConvertex(params) {
      return axios.get(`${environment.apiUrl}/v1/convertex/empresasconvertex/deleted/by-user`, { params })
    },
  },
})
