import { ability } from '@/plugins/casl/ability'
import { getKeycloak } from '@/plugins/keycloak' // o el import real

let synced = false

export function syncAbilityFromKeycloak(force = false) {
  if (synced && !force) return

  const kc = getKeycloak()
  if (!kc?.authenticated) return

  const clientId = import.meta.env.VITE_KC_CLIENT_ID
  const roles = kc.tokenParsed?.resource_access?.[clientId]?.roles ?? []

  // ✅ Mapea roles → abilities (AJUSTA esto a tu app)
  const rules = roles.includes('admin')
    ? [{ action: 'manage', subject: 'all' }]
    : [{ action: 'read', subject: 'Dashboard' }]

  ability.update(rules)
  synced = true
}
