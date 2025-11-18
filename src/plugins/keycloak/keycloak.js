// src/plugins/keycloak.js
import Keycloak from 'keycloak-js'

let keycloak = null

/**
 * Inicializa Keycloak.
 * onLoad: 'login-required' | 'check-sso'
 */
export const initKeycloak = async (onLoad = 'login-required') => {
  keycloak = new Keycloak({
    url: 'https://login.facilcontabilidad.org',
    realm: 'ApiFC',
    clientId: 'convertex-spa',
  })

  const config = {
    onLoad,
    pkceMethod: 'S256',
    checkLoginIframe: false,

    // Asegúrate de tener este archivo servido por tu SPA (public/keycloak-silent-check-sso.html)
    silentCheckSsoRedirectUri: `${window.location.origin}/keycloak-silent-check-sso.html`,
    silentCheckSsoFallback: true,
    redirectUri: window.location.origin,
  }

  const authenticated = await keycloak.init(config)

  console.log('TOKEN: ', keycloak.token)
  console.log("authenticated: ", authenticated)

  sessionStorage.setItem('accessToken', keycloak.token)

  // Auto refresh del token
  setInterval(async () => {
    try {
      if (keycloak && keycloak.updateToken) {
        await keycloak.updateToken(30) // refresca si queda <30s
      }
    } catch (e) {
      console.log('error al refrescar: ', e)

      // opcional: manejar errores de refresh
    }
  }, 20000)

  // Exponer también en window si quieres depurar desde consola
  console.log('Keycloak initialized: ', keycloak)
  window.__kc = keycloak

  console.log('sub:', keycloak.tokenParsed.sub)
  sessionStorage.setItem('sub', keycloak.tokenParsed.sub)
  console.log('email:', keycloak.tokenParsed.email)
  sessionStorage.setItem('email', keycloak.tokenParsed.email)
  console.log('preferred_username:', keycloak.tokenParsed.preferred_username)
  sessionStorage.setItem('preferred_username', keycloak.tokenParsed.preferred_username)
  sessionStorage.setItem('name', keycloak.tokenParsed.name)

  console.log('usuario:', keycloak.tokenParsed)

  return authenticated
}

/** Devuelve la instancia viva de Keycloak */
export const getKeycloak = () => keycloak

/** Devuelve el token actual (o null si no hay) */
export const kcToken = () => keycloak?.token || null

/** Fuerza refresh si es necesario y devuelve un token fresco */
export const getFreshToken = async () => {
  if (!keycloak) return null
  if (keycloak.updateToken) {
    await keycloak.updateToken(30).catch(() => {})
  }

  return keycloak.token || null
}

/** Revisa roles tanto de realm como de client (apifc) */
export const kcHasRole = role => {
  if (!keycloak?.tokenParsed) return false

  // Realm roles
  const realmRoles = keycloak.tokenParsed?.realm_access?.roles || []

  // Client roles del API (ajusta si usas otro clientId para tu API)
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
