// ══════════════════════════════════════════════════════════════
// PATCH 4 — src/composables/useReportReady.js (CONVERTEX)
//
// Composable que hace polling a init-status para saber
// cuándo el backend terminó de procesar los values.
//
// Uso en ReportViewerPage.vue:
//   const { initStatus, watchReport, stop } = useReportReady()
//   onMounted(() => {
//     if (route.query.new === '1') {
//       watchReport(reporteid, async status => {
//         if (status === 'ready') await store.load(reporteid)
//       })
//     }
//   })
// ══════════════════════════════════════════════════════════════

import { ref, onBeforeUnmount } from 'vue'
import api from '@/plugins/axios/axios'

export function useReportReady() {
  const initStatus = ref('unknown')  // 'unknown' | 'pending' | 'processing' | 'ready' | 'error'
  let timer = null
  let stopped = false

  /**
   * Empieza a hacer polling al endpoint init-status.
   * @param {number} reporteid
   * @param {function} onStatusChange — callback con el nuevo status
   * @param {object} opts — { interval: 3000, maxAttempts: 60 }
   */
  const watchReport = (reporteid, onStatusChange, opts = {}) => {
    const interval    = opts.interval ?? 3000
    const maxAttempts = opts.maxAttempts ?? 60  // 3s × 60 = 3 minutos máx
    let attempts = 0
    stopped = false

    const poll = async () => {
      if (stopped) return
      attempts++

      try {
        const { data } = await api.get(
          `/v1/convertex/reportesconvertex/${reporteid}/init-status`,
        )

        const status = data?.status ?? 'ready'

        initStatus.value = status

        console.log('status', status)

        if (status === 'ready' || status === 'error') {
          onStatusChange?.(status)

          return  // terminó — no seguir polling
        }

        if (attempts >= maxAttempts) {
          console.warn('[useReportReady] Max attempts reached, assuming ready')
          initStatus.value = 'ready'
          onStatusChange?.('ready')

          return
        }

        // Seguir polling
        timer = setTimeout(poll, interval)
      } catch (err) {
        console.warn('[useReportReady] Error polling:', err?.message)

        // En caso de error de red, seguir intentando
        if (attempts < maxAttempts && !stopped) {
          timer = setTimeout(poll, interval * 2)  // backoff
        }
      }
    }

    // Iniciar con delay para dar tiempo al backend
    timer = setTimeout(poll, 1500)
  }

  const stop = () => {
    stopped = true
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  onBeforeUnmount(() => stop())

  return { initStatus, watchReport, stop }
}
