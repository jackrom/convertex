/* eslint-disable import/order */
import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'
import { getKeycloak, initKeycloak } from '@/plugins/keycloak/keycloak'
import { useAuthenticationStore } from '@/views/pages/authentication/useAuthenticationStore'
import { router } from '@/plugins/1.router'

// Styles
import '@core/scss/template/index.scss'
import '@styles/styles.scss'

const PUBLIC_REDIRECT = 'http://localhost:5173/not-authorized';

(async () => {
  const authenticated = await initKeycloak('login-required')

  if (!authenticated) {
    window.location.href = PUBLIC_REDIRECT

    return
  }

  const app = createApp(App)

  registerPlugins(app)

  const authenticationUserStore = useAuthenticationStore()
  const puedeMontar = await verificarEntitlements(authenticationUserStore)

  if (!puedeMontar) return

  app.mount('#app')
})()

async function verificarEntitlements(authenticationUserStore) {
  const kc = getKeycloak()

  try {
    const me = await authenticationUserStore.fetchMeAndAbilities()

    const entResp = await authenticationUserStore.fetchEntitlements()
    const data = entResp?.data || {}

    const ifluc = data.apps?.find(a => a.key === 'ifluc')

    if (!ifluc || !ifluc.isActive) {
      if (kc) await kc.logout({ redirectUri: PUBLIC_REDIRECT })
      else window.location.href = PUBLIC_REDIRECT

      return false
    }

    return true
  } catch (error) {
    if (error.code === 'ECONNABORTED' || error.message === 'Request aborted') {
      console.warn('Request inicial abortado/timeout:', error)

      return false
    }

    if (error.response && [401, 403].includes(error.response.status)) {

      const kcInner = getKeycloak()
      if (kcInner) await kcInner.logout({ redirectUri: PUBLIC_REDIRECT })
      else window.location.href = PUBLIC_REDIRECT

      return false
    }

    await router.replace({ name: 'error-entitlements', query: { reason: 'entitlements' } })

    return true
  }
}
