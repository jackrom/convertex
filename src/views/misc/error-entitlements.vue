<script setup>
import { useRoute } from 'vue-router'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import miscUnderMaintenance from '@images/pages/misc-under-maintenance.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)
const route = useRoute()

const reason = route.query?.reason || 'unknown'

const messages = {
  auth: {
    title: 'Error de autenticación',
    description: 'Tu sesión no pudo ser verificada por el servidor. Esto puede ocurrir si tu token expiró o si no tienes los permisos necesarios.',
  },
  'auth-loop': {
    title: 'Problema de autenticación recurrente',
    description: 'Detectamos un problema recurrente al verificar tu sesión. Por favor, limpia las cookies del navegador e intenta nuevamente.',
  },
  'api-unavailable': {
    title: 'Servidor no disponible',
    description: 'No fue posible conectar con el servidor de FacilContabilidad. Verifica que el API esté ejecutándose e intenta nuevamente.',
  },
  entitlements: {
    title: 'Error al verificar tu suscripción',
    description: 'No pudimos verificar tus permisos y suscripciones activas. Por favor, intenta nuevamente o contacta a soporte.',
  },
  unknown: {
    title: 'Error inesperado',
    description: 'Ocurrió un error inesperado al cargar la aplicación. Por favor, intenta nuevamente.',
  },
}

const msg = messages[reason] || messages.unknown

const handleRetry = () => {
  sessionStorage.clear()
  window.location.href = '/'
}

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})
</script>

<template>
  <div class="misc-wrapper mb-lg-15">
    <div class="text-center mb-20">
      <h4
        class="text-h4 font-weight-medium mb-5"
        style="margin-top: 50px;"
      >
        {{ msg.title }} ⚠️
      </h4>
      <p class="text-body-1 mb-2">
        {{ msg.description }}
      </p>
      <p class="text-body-2 text-medium-emphasis mb-6">
        Código: {{ reason }}
      </p>

      <div class="d-flex justify-center gap-4">
        <VBtn
          color="primary"
          @click="handleRetry"
        >
          Reintentar
        </VBtn>
        <VBtn
          variant="outlined"
          href="mailto:info@facilcontabilidad.com"
        >
          Contactar soporte
        </VBtn>
      </div>
    </div>

    <div
      class="misc-avatar w-100 text-center"
      style="margin-top: 50px;"
    >
      <VImg
        :src="miscUnderMaintenance"
        alt="Error"
        :max-width="550"
        :min-height="300"
        class="mx-auto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/pages/misc.scss";
</style>
