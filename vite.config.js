import { fileURLToPath } from 'url'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vuetify from 'vite-plugin-vuetify'

const rutaServidor = '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueJsx(),

    // Excluimos JSON de la internacionalización
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [
        fileURLToPath(new URL(`./${rutaServidor}src/plugins/i18n/locales/**`, import.meta.url)),
      ],
      // Excluimos los archivos JSON de los assets
      exclude: [
        fileURLToPath(new URL(`./${rutaServidor}src/assets/jsondata/*.json`, import.meta.url)),
      ],
    }),

    // Otros plugins
    vuetify({
      styles: {
        configFile: `src/styles/variables/_vuetify.scss`,
      },
    }),
    Pages({
      dirs: [`./${rutaServidor}src/pages`],
    }),
    Layouts({
      layoutsDirs: `./${rutaServidor}src/layouts/`,
    }),
    Components({
      dirs: [`${rutaServidor}src/@core/components`, `${rutaServidor}src/views/demos`],
      dts: true,
    }),
    AutoImport({
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
      },
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/math', 'vue-i18n', 'pinia'],
      vueTemplate: true,
    }),
    DefineOptions(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL(`./src`, import.meta.url)),
      '@themeConfig': fileURLToPath(new URL(`./themeConfig.js`, import.meta.url)),
      '@core': fileURLToPath(new URL(`./src/@core`, import.meta.url)),
      '@layouts': fileURLToPath(new URL(`./src/@layouts`, import.meta.url)),
      '@images': fileURLToPath(new URL(`./src/assets/images/`, import.meta.url)),
      '@styles': fileURLToPath(new URL(`./src/styles/`, import.meta.url)),
      '@configured-variables': fileURLToPath(new URL(`./src/styles/variables/_template.scss`, import.meta.url)),
      '@axios': fileURLToPath(new URL(`./src/plugins/axios`, import.meta.url)),
      '@validators': fileURLToPath(new URL(`./src/@core/utils/validators`, import.meta.url)),
      'apexcharts': fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url)),
    },
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  optimizeDeps: {
    exclude: ['vuetify'],
    entries: [
      `./src/**/*.vue`,
    ],
  },
})
