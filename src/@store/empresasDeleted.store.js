// src/@store/empresasDeleted.store.js
import { defineStore } from "pinia"
import { useEmpresaService } from "@/services/empresa.service"

export const useEmpresasDeletedStore = defineStore("empresas-deleted", {
  state: () => ({
    empresas: [],
    loaded: false,
  }),

  actions: {
    async load() {
      const api = useEmpresaService()

      try {
        const lista = await api.fetchDeletedByUser()

        this.empresas = Array.isArray(lista) ? lista : []
        this.loaded = true
      } catch (err) {
        console.error("[EmpresasDeletedStore] Error al cargar empresas eliminadas:", err)
        this.empresas = []
        this.loaded = false
        throw err
      }
    },
  },
})
