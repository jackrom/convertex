import axios from 'axios'
import { environment } from '@/utils/environments'
import { getKeycloak } from '@/plugins/keycloak/keycloak'

const api = axios.create({
  baseURL: environment.apiUrl,
  timeout: 15000,
  headers: {
    'Content-Security-Policy': "default-src 'self'; connect-src 'self' https://login.facilcontabilidad.org; frame-src 'self';",
  },
})

// Token de Keycloak antes de cada request
api.interceptors.request.use(async config => {
  const kc = getKeycloak()

  config.headers['Content-Security-Policy'] = "default-src 'self'; connect-src 'self' https://login.facilcontabilidad.org; frame-src 'self';"

  if (kc?.updateToken) {
    try {
      const refreshed = await kc.updateToken(30)
    } catch (err) {
      console.error('[axios] kc.updateToken error:', err)

      // Aquí podrías decidir redirigir al login, por ejemplo:
      // kc.logout()
    }
  }

  const token = kc?.token
  if (token) {
    config.headers = config.headers || {}
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/**
 * Interceptor de RESPUESTA
 * Maneja:
 *  - Errores HTTP (4xx, 5xx)
 *  - Errores de red (ERR_NETWORK)
 *  - Timeout (ECONNABORTED)
 *  - Peticiones canceladas (ERR_CANCELED)
 */
api.interceptors.response.use(
  response => response,
  async error => {
    const kc = getKeycloak?.()

    // -----------------------------
    // 1) El servidor respondió (status 4xx / 5xx)
    // -----------------------------
    if (error.response) {
      const { status, data, config } = error.response

      console.warn('[axios] HTTP error', {
        status,
        url: config?.url,
        method: config?.method,
        data,
      })

      switch (status) {
      // -------- 4xx: Errores de cliente / autenticación --------
      case 400:
        console.warn('[axios] 400 Bad Request: revisar payload o parámetros', data)
        break

      case 401:
        console.warn('[axios] 401 Unauthorized: sesión expirada o token inválido', data)

        // Aquí puedes forzar logout si quieres tratar esto como "sesión expirada"
        // if (kc) {
        //   await kc.logout({ redirectUri: window.location.origin })
        // }
        break

      case 403:
        console.warn('[axios] 403 Forbidden: usuario sin permisos suficientes', data)

        // Aquí podrías redirigir a "no autorizado"
        // router.push({ name: 'not-authorized' })
        break

      case 404:
        console.warn('[axios] 404 Not Found: recurso no encontrado', data)
        break

      case 409:
        console.warn('[axios] 409 Conflict: conflicto de datos (ej. duplicados)', data)
        break

      case 412:
        console.warn('[axios] 412 Precondition Failed: validación/regla de negocio', data)

        // Tu backend usa mucho 412 para validaciones de negocio → aquí puedes
        // mostrar un mensaje más amigable en UI si quieres
        break

      case 422:
        console.warn('[axios] 422 Unprocessable Entity: error de validación', data)
        break

      // -------- 5xx: Errores del servidor --------
      case 500:
        console.error('[axios] 500 Internal Server Error', data)
        break

      case 502:
        console.error('[axios] 502 Bad Gateway: problema entre servicios/Proxy', data)
        break

      case 503:
        console.error('[axios] 503 Service Unavailable: API caída o en mantenimiento', data)
        break

      case 504:
        console.error('[axios] 504 Gateway Timeout: el servidor tardó demasiado', data)
        break

      default:
        console.error(`[axios] HTTP ${status} no manejado explícitamente`, data)
        break
      }
    }

    // -----------------------------
    // 2) No hubo respuesta del servidor
    //    (el request salió, pero no volvió nada)
    // -----------------------------
    else if (error.request) {
      // Aquí normalmente entran:
      //  - Timeout (ECONNABORTED)
      //  - Problemas de red más raros
      if (error.code === 'ECONNABORTED') {
        console.error('[axios] Timeout: la petición excedió el tiempo límite', {
          url: error.config?.url,
          timeout: error.config?.timeout,
        })
      } else {
        console.error('[axios] Request sin respuesta del servidor', {
          code: error.code,
          url: error.config?.url,
        })
      }
    }

    // -----------------------------
    // 3) Error previo a hacer la petición
    //    (configuración, cancelación, etc.)
    // -----------------------------
    else {
      // Casos típicos:
      //  - ERR_NETWORK: fallo de conexión (puerto cerrado, DNS, etc.)
      //  - ERR_CANCELED: petición cancelada por Axios/AbortController
      //  - Otros errores de JS
      if (error.code === 'ERR_NETWORK') {
        console.error('[axios] ERR_NETWORK: no se pudo conectar con la API', {
          url: error.config?.url,
          baseURL: error.config?.baseURL,
        })
      } else if (error.code === 'ERR_CANCELED') {
        console.warn('[axios] Petición cancelada (ERR_CANCELED)', {
          url: error.config?.url,
        })
      } else {
        console.error('[axios] Error no relacionado con HTTP/Network', {
          message: error.message,
          code: error.code,
        })
      }
    }

    // Importante: seguir rechazando para que el caller pueda manejar el error
    return Promise.reject(error)
  },
)



export default api
