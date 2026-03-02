/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import ability from '@/plugins/casl/ability'
import i18n from '@/plugins/i18n'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { es } from 'vuetify/locale'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import { abilitiesPlugin } from '@casl/vue'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import { initKeycloak, getKeycloak } from '@/plugins/keycloak'
import { useAuthenticationStore } from '@/views/pages/authentication/useAuthenticationStore'

loadFonts()

const pinia = createPinia()
const PUBLIC_REDIRECT = 'http://localhost:5173/not-authorized'

async function bootstrap() {
  // 1) Iniciar Keycloak
  const authenticated = await initKeycloak('login-required')

  console.log('authenticated', authenticated)

  if (!authenticated) {
    console.error('Usuario no autenticado en Keycloak')

    return
  }

  // 2) Crear app y registrar plugins
  const app = createApp(App)


  app.use(vuetify, {
    locale: {
      defaultLocale: 'es',
      locales: { es },
    },
  })
  app.use(pinia)
  app.use(CKEditor)
  app.use(router)
  app.use(layoutsPlugin)
  app.use(i18n)
  app.use(abilitiesPlugin, ability, { useGlobalProperties: true })

  const authenticationUserStore = useAuthenticationStore()

  const fetchEntitlementsConvertex = async () => {
    const kc = getKeycloak()

    try {
      // /v1/users/me
      const me = await authenticationUserStore.fetchMeAndAbilities()

      console.log('me:', me)

      // /v1/users/me/entitlements
      const entResp = await authenticationUserStore.fetchEntitlements()
      const data = entResp?.data || {}

      console.log('entitlements:', data)

      const convertex = data.apps?.find(a => a.key === 'convertex')

      // Usuario logueado pero sin Convertex activo
      if (!convertex || !convertex.isActive) {
        console.warn('Usuario sin Convertex activo, cerrando sesión…')

        if (kc) {
          await kc.logout({ redirectUri: PUBLIC_REDIRECT })
        } else {
          window.location.href = PUBLIC_REDIRECT
        }

        // Muy importante: NO seguir montando la app
        return false
      }

      return true
    } catch (error) {
      // Timeout/abort
      if (error.code === 'ECONNABORTED' || error.message === 'Request aborted') {
        console.warn('Request inicial abortado/timeout:', error)

        return false
      }

      // 401 / 403 ⇒ algo va mal con permisos del backend
      if (error.response && [401, 403].includes(error.response.status)) {
        console.warn('Backend devolvió', error.response.status, 'cerrando sesión…')

        const kc = getKeycloak()
        if (kc) {
          await kc.logout({ redirectUri: PUBLIC_REDIRECT })
        } else {
          window.location.href = PUBLIC_REDIRECT
        }

        return false
      }

      console.error('Error al cargar datos iniciales:', error)

      // Si llegamos aquí sí montaremos la app pero en una ruta de error
      await router.replace({
        name: 'error-entitlements',
        query: { reason: 'entitlements' },
      })

      return true
    }
  }

  // 3) Esperar antes de montar
  const puedeMontar = await fetchEntitlementsConvertex()

  if (!puedeMontar) {
    // ya hemos hecho logout o redirección
    return
  }

  console.log('Montando app...')

  // 4) Montar app
  app.mount('#app')
}

bootstrap()
