// src/views/pages/authentication/useAuthenticationStore.js
import { defineStore } from 'pinia'
import axios from "@/plugins/axios/axios"
import { environment } from '@/utils/environments'
import ability from '@/plugins/casl/ability'   // 👈 IMPORTA LA INSTANCIA, no useAppAbility

const APIURL = import.meta.env.VITE_API_URL

export const useAuthenticationStore = defineStore('AuthenticationStore', {
  state: () => ({
    user: null,
    abilities: [],
  }),

  actions: {
    // 👉 Fetch entitlements data
    fetchEntitlements(params) {
      return axios.get(`${environment.apiUrl}/v1/users/me/entitlements`, { params })
    },

    // 👉 /v1/users/me y actualizar CASL
    async fetchMeAndAbilities() {
      try {
        const { data } = await axios.get(`${environment.apiUrl}/v1/users/me`)

        this.user = data.user
        this.abilities = data.abilities || []

        sessionStorage.setItem('userData', JSON.stringify(this.user))
        sessionStorage.setItem('userAbilities', JSON.stringify(this.abilities))

        ability.update(this.abilities)

        // devolvemos los datos al que llama
        return data
      } catch (error) {
        console.error('Error en fetchMeAndAbilities:', error)
        throw error
      }
    },
  },
})
