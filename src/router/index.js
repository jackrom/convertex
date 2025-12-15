import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import { canNavigate } from '@layouts/plugins/casl'
import { getKeycloak, kcHasRole, kcToken } from "@/plugins/keycloak/keycloak"

// 👇 IMPORTANTE: no olvides tu cliente axios
import api from "@/plugins/axios/axios"

const rutaServidor = 'empresas-EmpresaList'

// const rutaServidor = 'pages-empresas-list'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: rutaServidor },
      meta: {
        // 👇 clave de i18n, NO texto directo
        titleKey: 'Analytics',
        public: false,
      },
    },
    ...setupLayouts(routes),
  ],
})

console.log("📌 RUTAS DISPONIBLES:");
console.table(
  router.getRoutes().map(r => ({
    name: r.name,
    path: r.path,
    file: r.component?.__file ?? 'layout/redirect/auto',
  })),
)

// Caché simple en memoria para no disparar la API en cada navegación
let entitlementsCache = null

async function getEntitlements() {
  if (!entitlementsCache) {
    const { data } = await api.get('/v1/users/me/entitlements')

    console.log('entitlements data: ', data)
    entitlementsCache = data.apps || []
  }

  return entitlementsCache
}

// Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
router.beforeEach(async (to, from) => {
  console.log('➡️ beforeEach FROM', from.fullPath, 'TO', to.fullPath)

  const keycloak = getKeycloak()

  console.log('   keycloak.authenticated =', keycloak?.authenticated)

  // Rutas públicas
  if (to.meta?.public) {
    console.log('   ✅ meta.public => permitiendo')

    return true
  }

  // No autenticado → login
  if (!keycloak?.authenticated) {
    console.log('   ❌ no autenticado → login()')
    await keycloak.login({ redirectUri: window.location.href })

    return false
  }

  // Rol requerido
  const needRole = to.meta?.needRole
  if (needRole && !kcHasRole(needRole)) {
    console.log('   ❌ falta rol', needRole, '→ not-authorized')

    return { name: 'not-authorized' }
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

  console.log('   ✅ beforeEach OK')

  return true
})

export default router
