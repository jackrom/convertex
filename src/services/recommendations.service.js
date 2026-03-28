// src/services/recommendations.service.js
import api from "@/plugins/axios/axios"

export function useRecommendationsService() {
  const APP_NAME = import.meta.env.VITE_APP_NAME || "convertex"

  async function getActive() {
    const { data } = await api.get("/v1/convertex/recommendations", {
      params: { app: APP_NAME },
    })

    return data?.data ?? []
  }

  async function getAll() {
    const { data } = await api.get("/v1/convertex/recommendations/all", {
      params: { app: APP_NAME },
    })

    return data?.data ?? []
  }

  async function create(payload) {
    const { data } = await api.post("/v1/convertex/recommendations", {
      app: APP_NAME,
      ...payload,
    })

    return data?.data
  }

  async function update(id, payload) {
    const { data } = await api.put(`/v1/convertex/recommendations/${id}`, payload)

    return data?.data
  }

  async function remove(id) {
    const { data } = await api.delete(`/v1/convertex/recommendations/${id}`)

    return data
  }

  async function reorder(items) {
    const { data } = await api.put("/v1/convertex/recommendations/reorder", { items })

    return data
  }

  return { getActive, getAll, create, update, remove, reorder }
}
