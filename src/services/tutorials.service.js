// src/services/tutorials.service.js
import api from "@/plugins/axios/axios"

export function useTutorialsService() {
  const APP_NAME = import.meta.env.VITE_APP_NAME || "convertex"

  async function getActive() {
    const { data } = await api.get("/v1/convertex/tutorials", {
      params: { app: APP_NAME },
    })

    return { items: data?.data ?? [], grouped: data?.grouped ?? {} }
  }

  async function getSoporte() {
    const { data } = await api.get("/v1/convertex/tutorials", {
      params: { app: APP_NAME, soporte: 1 },
    })

    return data?.data ?? []
  }

  async function getCategories() {
    const { data } = await api.get("/v1/convertex/tutorials/categories", {
      params: { app: APP_NAME },
    })

    return data?.data ?? []
  }

  async function create(payload) {
    const { data } = await api.post("/v1/convertex/tutorials", {
      app: APP_NAME,
      ...payload,
    })

    return data?.data
  }

  async function update(id, payload) {
    const { data } = await api.put(`/v1/convertex/tutorials/${id}`, payload)

    return data?.data
  }

  async function remove(id) {
    const { data } = await api.delete(`/v1/convertex/tutorials/${id}`)

    return data
  }

  return { getActive, getSoporte, getCategories, create, update, remove }
}
