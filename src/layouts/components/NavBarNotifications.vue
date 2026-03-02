<script setup>
import Notifications from '@core/components/Notifications.vue'
import { ref, computed, onMounted, watch } from 'vue'
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"

// (Tus imports de imágenes se pueden quedar igual)
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import paypal from '@images/svg/paypal.svg'

// (Si no usas este array, lo puedes borrar)
const notificationsMock = [
  { img: avatar4, title: 'Congratulation Flora! 🎉', subtitle: 'Won the monthly best seller badge', time: 'Today' },
  { text: 'Tom Holland', title: 'New user registered.', subtitle: '5 hours ago', time: 'Yesterday' },

  // ...
]

// --- State & store ---
const empresasEliminadas = ref([])
const empresaListStore = useEmpresaListStore()

const totalEmpresasEliminadasConvertex = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const rowPerPage = ref(10)

// ✅ userId directamente del sessionStorage, sin JSON.parse
const userId = ref(null)
const sub = sessionStorage.getItem('sub')

userId.value = sub || null

// --- Fetch ---
const fetchEmpresasConvertex = async () => {
  if (!userId.value) {
    console.warn('No hay sub en sessionStorage, no se puede cargar empresas eliminadas')

    return
  }

  try {
    const response = await empresaListStore.fetchEmpresasEliminadasConvertex({
      user: userId.value,
      origen: 'convertex',
    })

    const data = response?.data || response || {}

    empresasEliminadas.value = data.empresas || []
    totalPage.value = data.totalPage || 1
    totalEmpresasEliminadasConvertex.value =
      data.totalEmpresasEliminadasConvertex || empresasEliminadas.value.length
  } catch (error) {
    // 👉 Ignorar abortos/timeout para no ensuciar consola
    if (error.code === 'ECONNABORTED' || error.message === 'Request aborted') {
      console.warn('Request de empresas eliminadas abortado (redirect / recarga).')

      return
    }

    console.error('Error al cargar empresas eliminadas de Convertex:', error)
  }
}


// Carga inicial
watchEffect(fetchEmpresasConvertex())

// Si cambias de página, recargas
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value

  fetchEmpresasConvertex()
})

// Texto de paginación (si luego lo quieres usar en el template)
const paginationData = computed(() => {
  const total = totalEmpresasEliminadasConvertex.value || 0
  if (!total) return 'No hay registros'

  const firstIndex = (currentPage.value - 1) * rowPerPage.value + 1

  const lastIndex = Math.min(
    firstIndex + empresasEliminadas.value.length - 1,
    total,
  )

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ total } registros`
})
</script>

<template>
  <Notifications
    :notifications="empresasEliminadas"
  />
</template>
