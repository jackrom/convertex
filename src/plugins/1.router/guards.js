// src/plugins/1.router/guards.js
import { canNavigate } from '@layouts/plugins/casl'
import { syncAbilityFromKeycloak } from '@/plugins/keycloak/keycloak-casl'
import api from "@/plugins/axios/axios"
import keycloak from "@/plugins/keycloak/index" // lo creamos abajo

let entitlementsCache = null
async function getEntitlements() {
  if (!entitlementsCache) {
    const { data } = await api.get('/v1/users/me/entitlements')

    console.log('entitlements data: ', data)
    entitlementsCache = data.apps || []
  }

  return entitlementsCache
}

export const setupGuards = router => {
  router.beforeEach(async to => {
    // 1) rutas públicas
    if (to.meta.public)
      return

    const isLoggedIn = !!keycloak.authenticated

    // 2) si la ruta es "solo no autenticados" (login)
    if (to.meta.unauthenticatedOnly || to.meta.redirectIfLoggedIn) {
      if (isLoggedIn) return '/'

      return
    }

    // Convertex activo
    if (to.meta?.requiresConvertex) {
      try {
        const apps = await getEntitlements()
        const convertex = apps.find(a => a.key === 'convertex')

        console.log('   requiresConvertex → convertex =', convertex)

        if (!convertex || !convertex.isActive) {
          console.log('   ❌ convertex inactivo → not-authorized')

          return { name: 'not-authorized' }
        }
      } catch (err) {
        console.error('   💥 error entitlements', err)

        return { name: 'error-entitlements' }
      }
    }

    // 3) si requiere auth y no está logueado => Keycloak login
    const requiresAuth = to.meta.requiresAuth ?? true


    // 4) ya autenticado: sincroniza abilities desde Keycloak (1 vez por sesión)
    syncAbilityFromKeycloak()

    // 5) CASL
    if (!canNavigate(to) && to.matched.length)
      return { name: 'not-authorized' }
  })
}
