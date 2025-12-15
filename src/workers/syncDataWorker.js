// src/workers/syncDataWorker.js

self.onmessage = async function (e) {
  const { action, payload } = e.data || {}
  const params = payload || {}

  try {
    switch (action) {
      case 'syncEmpresas': {
        const empresas = await fetchEmpresas(params)
        self.postMessage({ action, status: 'success', empresas })
        break
      }

      case 'syncPeriodos': {
        const periodos = await fetchPeriodos(params)
        self.postMessage({ action, status: 'success', periodos })
        break
      }

      // 🔹 NUEVO: sincronizar reportes (listado /by-user)
      case 'syncReportes': {
        const reportes = await fetchReportes(params)
        self.postMessage({ action, status: 'success', reportes })
        break
      }

      // 🔹 syncAll: empresas + periodos + reportes
      case 'syncAll': {
        const [empresas, periodos, reportes] = await Promise.all([
          fetchEmpresas(params),
          fetchPeriodos(params),
          fetchReportes(params),
        ])

        self.postMessage({
          action,
          status: 'success',
          empresas,
          periodos,
          reportes,
        })
        break
      }

      default: {
        self.postMessage({
          action,
          status: 'error',
          message: `Acción no soportada en syncDataWorker: ${String(action)}`,
        })
      }
    }
  } catch (error) {
    self.postMessage({
      action,
      status: 'error',
      message: error?.message ?? String(error),
    })
  }
}

// ---------------------------------------------------------------------------
// Empresas
// payload esperado: { apiUrl, token, userId }
// ---------------------------------------------------------------------------
async function fetchEmpresas({ apiUrl, token, userId }) {
  if (!apiUrl) throw new Error('apiUrl es requerido en fetchEmpresas')
  if (!userId) throw new Error('userId es requerido en fetchEmpresas')

  const url = `${apiUrl}/v1/convertex/empresasconvertex/by-user?user=${encodeURIComponent(
    userId,
  )}`

  const headers = {
    'Content-Type': 'application/json',
  }

  if (token)
    headers.Authorization = `Bearer ${token}`

  const res = await fetch(url, { method: 'GET', headers })

  if (!res.ok)
    throw new Error(`Error HTTP al obtener empresas: ${res.status} ${res.statusText}`)

  const json = await res.json()

  if (Array.isArray(json?.data)) return json.data
  if (Array.isArray(json)) return json

  return []
}

// ---------------------------------------------------------------------------
// Periodos
// payload esperado: { apiUrl, token, userId }
// ---------------------------------------------------------------------------
async function fetchPeriodos({ apiUrl, token, userId }) {
  if (!apiUrl) throw new Error('apiUrl es requerido en fetchPeriodos')
  if (!userId) throw new Error('userId es requerido en fetchPeriodos')

  const url = `${apiUrl}/v1/convertex/periodosconvertex/by-user?user=${encodeURIComponent(
    userId,
  )}&perPage=500&currentPage=1`

  const headers = {
    'Content-Type': 'application/json',
  }

  if (token)
    headers.Authorization = `Bearer ${token}`

  const res = await fetch(url, { method: 'GET', headers })

  if (!res.ok)
    throw new Error(`Error HTTP al obtener periodos: ${res.status} ${res.statusText}`)

  const json = await res.json()

  if (Array.isArray(json?.periodos)) return json.periodos
  if (Array.isArray(json)) return json

  return []
}

// ---------------------------------------------------------------------------
// Reportes
// payload esperado: { apiUrl, token, userId, perPage?, currentPage? }
// ---------------------------------------------------------------------------
async function fetchReportes({ apiUrl, token, userId, perPage, currentPage }) {
  if (!apiUrl) throw new Error('apiUrl es requerido en fetchReportes')
  if (!userId) throw new Error('userId es requerido en fetchReportes')

  const searchParams = new URLSearchParams()
  if (perPage) searchParams.append('perPage', String(perPage))
  if (currentPage) searchParams.append('currentPage', String(currentPage))

  const queryString = searchParams.toString()

  const url = `${apiUrl}/v1/convertex/reportesconvertex/by-user/${encodeURIComponent(
    userId,
  )}${queryString ? `?${queryString}` : ''}`

  const headers = {
    'Content-Type': 'application/json',
  }

  if (token)
    headers.Authorization = `Bearer ${token}`

  const res = await fetch(url, { method: 'GET', headers })

  if (!res.ok)
    throw new Error(`Error HTTP al obtener reportes: ${res.status} ${res.statusText}`)

  const json = await res.json()

  // Backend: { data: [ ... ] } o directamente [ ... ]
  if (Array.isArray(json?.data)) return json.data
  if (Array.isArray(json)) return json

  return []
}
