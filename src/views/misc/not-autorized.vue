<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import miscUnderMaintenance from '@images/pages/misc-under-maintenance.png'

const authThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

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
      <!-- 👉 Title and subtitle -->
      <h4 class="text-h4 font-weight-medium mb-5" style="margin-top: 50px;">
        Suscripción caducada o inexistente! 🚧
      </h4>
      <p class="text-body-1 mb-6">
        Lamentamos mucho las molestias causada, pero al parecer usted no tiene un suscripción activa para el iFluc o la misma se encuentra caducada
      </p>

      <VBtn to="/">
        Regresar
      </VBtn>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center" style="margin-top: 50px;">
      <VImg
        :src="miscUnderMaintenance"
        alt="Under Maintenance"
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
