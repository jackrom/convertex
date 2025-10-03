<script setup>
import { VForm } from 'vuetify/components'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import {
  emailValidator,
  requiredValidator,
} from '@validators'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-verify-email-illustration-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-verify-email-illustration-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-verify-email-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-verify-email-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'

import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg?raw'
import authV1TopShape from '@images/svg/auth-v1-top-shape.svg?raw'

import { environment } from "@/utils/environments"

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const ipaddress = ref('')
const userdata = ref([])
let error = ref(false)
let messageError = ref('')

const getip = () => {
  axios.get(`https://api.ipify.org/?format=json`).then(r => {
    const { ip } = r.data

    ipaddress.value = ip
    if (!ipaddress.value && retryCount < MAX_RETRIES) {
      retryCount++
      setTimeout(() => getip(), 1000)
    }

  })
    .catch(e => {
      console.log(e.response.data)
    })
}

getip()

const getlocation = () => {
  axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=a9b75627ce0b4012a07b03888012dbaf&ip=${ ipaddress.value }`).then(r => {
    userdata.value = r.data
  })
    .catch(e => {
      console.log(e.response.data)
    })
}

const login = () => {
  console.log('Entrando a login')
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  console.log('IP:', ipaddress.value)

  axios.post(`${environment.apiUrl}/token`, {
    email: email.value,
    password: password.value,
    aplicacion: 'convertex',
    ip: (ipaddress.value) ? ipaddress.value : '127.0.0.1',
  }).then(r => {
    const { token, user, userAbilities, auth } = r.data
    if (auth) {
      if (user.aplicaciones && user.aplicaciones.length > 0) {
        user.aplicaciones.forEach(app => {
          const fechaCaducidad = app.fechapago
          const fecha = new Date(fechaCaducidad)
          const dia = fecha.getDate()
          let mes = (fecha.getMonth() + 1) < 10 ? '0' + (fecha.getMonth() + 1) : (fecha.getMonth() + 1)
          const anio = fecha.getFullYear()

          switch (mes) {
          case '01':
            mes = 'Enero'
            break
          case '02':
            mes = 'Febrero'
            break
          case '03':
            mes = 'Marzo'
            break
          case '04':
            mes = 'Abril'
            break
          case '05':
            mes = 'Mayo'
            break
          case '06':
            mes = 'Junio'
            break
          case '07':
            mes = 'Julio'
            break
          case '08':
            mes = 'Agosto'
            break
          case '09':
            mes = 'Septiembre'
            break
          case '10':
            mes = 'Octubre'
            break
          case '11':
            mes = 'Noviembre'
            break
          case '12':
            mes = 'Diciembre'
            break
          }

          const fechaactual = new Date()

          const unDia = 24 * 60 * 60 * 1000
          const diasFaltantes = Math.ceil((fecha - fechaactual) / unDia)
          let nombreAplicacion = ''
          switch (app.aplicacionId) {
          case 4:
            nombreAplicacion = 'iFluc'
            break
          case 5:
            nombreAplicacion = 'Academy'
            break
          }

          if (app.aplicacionId === 8 && diasFaltantes > 0) {
            sessionStorage.setItem('userAbilities', JSON.stringify(userAbilities))

            ability.update(userAbilities)
            sessionStorage.setItem('userData', JSON.stringify(user))
            sessionStorage.setItem('accessToken', JSON.stringify(token))
            sessionStorage.setItem('empresasPermitidas', JSON.stringify(app.storage))

            router.replace('/dashboards/analytics')
          } else if (app.aplicacionId === 8 && app.isActive === 0) {
            messageError.value = 'Su usuario parece no estar activo, por favor ponerse en contacto con los administradores'
            error.value = true
            setTimeout(() => {
              messageError.value = ''
              error.value = false
            }, 6000)
          } else {
            messageError.value = `Cuenta suspendida por falta de pago, póngase en contacto con la administración para continuar, tiene ${(app.aplicacionId === 4 && diasFaltantes < 0) ? (diasFaltantes * -1) + " días con la cuenta en mora" : ''}`
            error.value = true
            setTimeout(() => {
              messageError.value = ''
              error.value = false
            }, 6000)
          }
        })
      } else {
        messageError.value = 'Usted no posee aplicación en FacilContabilidad asociada a su usuarios, por favor ponerse en contacto con el administrador'
        error.value = true
        setTimeout(() => {
          messageError.value = ''
          error.value = false
        }, 6000)
      }
    } else {
      messageError.value = 'El email o la contraseña, parecen tener errores, si cree que es un error, por favor pongase en contacto con administración'
      error.value = true
      setTimeout(() => {
        messageError.value = ''
        error.value = false
      }, 6000)
      errors.value = formErrors
      console.error(e.response.data)
    }
  }).catch(e => {
    const msg = e.response?.data?.message || 'Error al iniciar sesión'

    console.error('Error al hacer login:', msg, e)

    messageError.value = msg
    error.value = true
    setTimeout(() => {
      messageError.value = ''
      error.value = false
    }, 6000)
  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid) {
      console.log(isValid)
      login()
    } else {
      messageError.value = 'Por favor ingrese sus credenciales y/o hágalo de manera correcta'
      error.value = true
      setTimeout(() => {
        messageError.value = ''
        error.value = false
      }, 6000)
    }
  })
}
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
      <!-- 馃憠 Top shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1TopShape })"
        class="text-primary auth-v1-top-shape d-none d-sm-block"
      />

      <!-- 馃憠 Bottom shape -->
      <VNodeRenderer
        :nodes="h('div', { innerHTML: authV1BottomShape })"
        class="text-primary auth-v1-bottom-shape d-none d-sm-block"
      />

      <!-- 馃憠 Auth Card -->
      <VCard
        class="auth-card pa-4"
        max-width="448"
      >
        <VCardItem class="justify-center">
          <template #prepend>
            <div class="d-flex">
              <VNodeRenderer :nodes="themeConfig.app.logo" />
            </div>
          </template>

          <VCardTitle class="font-weight-bold text-h3 py-1">
            <img src="../assets/images/logo.png" width="200"/>
          </VCardTitle>
        </VCardItem>
        <VCardText class="pt-1">
          <h4 class="text-h5 text-center mb-1">
            Bienvenidos a  {{ themeConfig.app.title }} 1.0!
          </h4>
          <p class="mb-0 text-center">
            Por favor ingresa tus credenciales
          </p>
        </VCardText>
        <VCardText>
          <VAlert
            v-if="error"
            border="start"
            border-color="error"
          >
            {{messageError}}
          </VAlert>
        </VCardText>
        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="email"
                  label="Email"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                  :error-messages="errors.email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="password"
                  label="Password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="errors.password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap mt-2 mb-4">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Remember me"
                  />
                  <RouterLink
                    class="text-primary ms-2 mb-1"
                    :to="{ name: 'forgot-password' }"
                  >
                    Olvidaste tu Password?
                  </RouterLink>
                </div>

                <!-- login button -->
                <VBtn
                  block
                  type="submit"
                >
                  Login
                </VBtn>
              </VCol>


            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
