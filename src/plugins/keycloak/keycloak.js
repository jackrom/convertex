// src/plugins/keycloak.js
import Keycloak from 'keycloak-js'

let keycloak = null
let initPromise = null
let initialized = false
let refreshIntervalId = null

const KEYCLOAK_CONFIG = {
  url: 'https://login.facilcontabilidad.org',
  realm: 'ApiFC',
  clientId: 'convertex-spa',
}

const createKeycloakInstance = () => {
  if (!keycloak) {
    keycloak = new Keycloak(KEYCLOAK_CONFIG)
  }

  return keycloak
}

const persistSessionData = kc => {
  if (!kc?.token) return

  sessionStorage.setItem('accessToken', kc.token)

  const parsed = kc.tokenParsed || {}

  if (parsed.sub) sessionStorage.setItem('sub', parsed.sub)
  if (parsed.email) sessionStorage.setItem('email', parsed.email)
  if (parsed.preferred_username) sessionStorage.setItem('preferred_username', parsed.preferred_username)
  if (parsed.name) sessionStorage.setItem('name', parsed.name)
}

const startTokenRefresh = kc => {
  if (refreshIntervalId) return

  refreshIntervalId = setInterval(async () => {
    try {
      if (!kc || !initialized || !kc.authenticated) return

      const refreshed = await kc.updateToken(30)

      if (refreshed && kc.token) {
        sessionStorage.setItem('accessToken', kc.token)
      }
    } catch (e) {
      console.log('error al refrescar:', e)
    }
  }, 20000)
}

export const stopKeycloakRefresh = () => {
  if (refreshIntervalId) {
    clearInterval(refreshIntervalId)
    refreshIntervalId = null
  }
}

export const initKeycloak = async (onLoad = 'login-required') => {
  const kc = createKeycloakInstance()

  if (initialized) {
    return kc.authenticated === true
  }

  if (initPromise) {
    await initPromise

    return kc.authenticated === true
  }

  const config = {
    onLoad,
    pkceMethod: 'S256',
    checkLoginIframe: false,
    silentCheckSsoRedirectUri: `${window.location.origin}/keycloak-silent-check-sso.html`,
    silentCheckSsoFallback: true,
    redirectUri: window.location.origin,
  }

  initPromise = kc.init(config)

  try {
    const authenticated = await initPromise

    initialized = true

    window.__kc = kc

    if (authenticated) {
      persistSessionData(kc)
      startTokenRefresh(kc)
    }

    return authenticated
  } catch (error) {
    initialized = false
    initPromise = null
    throw error
  }
}

/** Devuelve la instancia viva de Keycloak */
export const getKeycloak = () => keycloak

/** Indica si ya pasó por init() */
export const isKeycloakInitialized = () => initialized

/** Devuelve el token actual (o null si no hay) */
export const kcToken = () => keycloak?.token || null

/** Fuerza refresh si es necesario y devuelve un token fresco */
export const getFreshToken = async () => {
  if (!keycloak || !initialized) return null

  try {
    if (keycloak.updateToken) {
      await keycloak.updateToken(30)
    }
  } catch (e) {
    console.log('error al obtener token fresco:', e)
  }

  return keycloak?.token || null
}

/** Revisa roles tanto de realm como de client (apifc) */
export const kcHasRole = role => {
  if (!keycloak?.tokenParsed) return false

  const realmRoles = keycloak.tokenParsed?.realm_access?.roles || []
  const apiClientId = 'apifc'
  const clientRoles = keycloak.tokenParsed?.resource_access?.[apiClientId]?.roles || []

  return realmRoles.includes(role) || clientRoles.includes(role)
}

/** Devuelve todos los roles (realm + client apifc) como Set */
export const kcAllRoles = () => {
  if (!keycloak?.tokenParsed) return new Set()

  const realmRoles = keycloak.tokenParsed?.realm_access?.roles || []
  const apiClientId = 'apifc'
  const clientRoles = keycloak.tokenParsed?.resource_access?.[apiClientId]?.roles || []

  return new Set([...realmRoles, ...clientRoles])
}
