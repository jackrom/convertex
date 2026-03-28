// src/services/faqs.service.js
import api from "@/plugins/axios/axios"

export function useFaqsService() {
  const APP_NAME = import.meta.env.VITE_APP_NAME || "convertex"

  async function getActive() {
    const { data } = await api.get("/v1/convertex/faqs", { params: { app: APP_NAME } })

    return data?.data ?? []
  }

  async function create(payload) {
    const { data } = await api.post("/v1/convertex/faqs", { app: APP_NAME, ...payload })

    return data?.data
  }

  async function update(id, payload) {
    const { data } = await api.put(`/v1/convertex/faqs/${id}`, payload)

    return data?.data
  }

  async function remove(id) {
    const { data } = await api.delete(`/v1/convertex/faqs/${id}`)

    return data
  }

  return { getActive, create, update, remove }
}
