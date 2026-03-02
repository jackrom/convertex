// src/plugins/axios.js
import axios from 'axios'
import { environment } from '@/utils/environments'
import { getKeycloak } from '@/plugins/keycloak'

const api = axios.create({
  baseURL: environment.apiUrl,
  timeout: 15000,
})

// Token de Keycloak antes de cada request
api.interceptors.request.use(async config => {
  const kc = getKeycloak()

  console.log('KC', kc)
  if (kc?.updateToken) {
    try { await kc.updateToken(30) } catch {}
  }
  const token = kc?.token
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default api
