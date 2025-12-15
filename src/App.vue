<script setup>
import { useTheme } from 'vuetify'
import { useThemeConfig } from '@core/composable/useThemeConfig'
import { hexToRgb } from '@layouts/utils'
import AlertContainer from "@/components/AlertContainer.vue"
import { storeToRefs } from "pinia"
import { useUiSnackbarStore } from "@/@store/uiSnackbar.store"

const snackbarStore = useUiSnackbarStore()
const { visible, message, color, timeout } = storeToRefs(snackbarStore)

const {
  syncInitialLoaderTheme,
  syncVuetifyThemeWithTheme: syncConfigThemeWithVuetifyTheme,
  isAppRtl,
} = useThemeConfig()

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
// syncInitialLoaderTheme()
syncConfigThemeWithVuetifyTheme()
</script>

<template>
  <VLocaleProvider :rtl="isAppRtl">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />

      <VSnackbar
        v-model="visible"
        :timeout="timeout"
        :color="color"
        location="bottom right"
      >
        {{ message }}
      </VSnackbar>

      <AlertContainer />
    </VApp>
  </VLocaleProvider>
</template>
