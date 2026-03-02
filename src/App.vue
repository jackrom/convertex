<script setup>
import { watch, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'
import router from '@/router'
import { useRoute } from 'vue-router'

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
} = useThemeConfig()

const { global } = useTheme()
const route = useRoute()

console.log(
  router.getRoutes().map(r => ({ name: r.name, path: r.path })),
)

console.log('ESTOY AQUI')

watch(
  () => route.fullPath,
  newVal => {
    console.log('🔥 Navegando a:', newVal)
  },
  { immediate: true },
)

onMounted(() => {
  const info = router.getRoutes()
    .filter(r => r.name === 'pages-empresas-list')
    .map(r => ({
      name: r.name,
      path: r.path,
      file: r.components?.default?.__file,
    }))

  console.log('🔍 Ruta montada pages-empresas-list =>', info)
})

// ℹ️ Sync current theme with initial loader theme
// syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />
    </VApp>
  </VLocaleProvider>
</template>
