import type { App } from 'vue'
import Keycloak from 'keycloak-js'
import { ability } from '@/plugins/casl/ability'

let keycloak: Keycloak | null = null

export function getKeycloak(): Keycloak {
  if (!keycloak) throw new Error('Keycloak not initialized')
  return keycloak
}

keycloak = new Keycloak({
  url: import.meta.env.VITE_KC_URL,
  realm: import.meta.env.VITE_KC_REALM,
  clientId: import.meta.env.VITE_KC_CLIENT_ID,
})

let abilitySynced = false

function getClientRoles(): string[] {
  const clientId = import.meta.env.VITE_KC_CLIENT_ID
  const ra = keycloak.tokenParsed?.resource_access as any
  return ra?.[clientId]?.roles ?? []
}

function rolesToAbilities(roles: string[]) {
  // Ajusta esto a tu modelo real de permisos (meta.action/meta.subject)
  if (roles.includes('admin')) return [{ action: 'manage', subject: 'all' }]
  if (roles.includes('client')) return [{ action: 'read', subject: 'Dashboard' }]

  // mínimo para que no reviente el menú/auth
  return [{ action: 'read', subject: 'Auth' }]
}

export function syncAbilityFromKeycloak(force = false) {
  if (abilitySynced && !force) return
  if (!keycloak.authenticated) return

  const roles = getClientRoles()
  ability.update(rolesToAbilities(roles))
  abilitySynced = true
}

export async function initKeycloak() {
  const authenticated = await keycloak.init({
    onLoad: 'check-sso', // login solo cuando una ruta lo requiera
    pkceMethod: 'S256',
    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    checkLoginIframe: false,
  })

  if (authenticated) syncAbilityFromKeycloak(true)

  // refresh token
  setInterval(async () => {
    if (!keycloak.token) return
    try {
      const refreshed = await keycloak.updateToken(30)
      if (refreshed) syncAbilityFromKeycloak(true)
    } catch {
      // si falla refresh, normalmente se reloguea cuando intente navegar
      // puedes forzar logout/login si quieres
    }
  }, 10_000)

  return authenticated
}

export default function (app: App) {
  // expón keycloak en la app
  app.provide('keycloak', keycloak)
  app.config.globalProperties.$keycloak = keycloak
}
