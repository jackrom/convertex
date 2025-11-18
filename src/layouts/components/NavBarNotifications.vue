<script setup>
import Notifications from '@core/components/Notifications.vue'
import { ref, watchEffect, computed } from 'vue'
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"

// Images
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import paypal from '@images/svg/paypal.svg'

const notifications = [
  {
    img: avatar4,
    title: 'Congratulation Flora! 🎉',
    subtitle: 'Won the monthly best seller badge',
    time: 'Today',
  },
  {
    text: 'Tom Holland',
    title: 'New user registered.',
    subtitle: '5 hours ago',
    time: 'Yesterday',
  },
  {
    img: avatar5,
    title: 'New message received 👋🏻',
    subtitle: 'You have 10 unread messages',
    time: '11 Aug',
  },
  {
    img: paypal,
    title: 'Paypal',
    subtitle: 'Received Payment',
    time: '25 May',
    color: 'error',
  },
  {
    img: avatar3,
    title: 'Received Order 📦',
    subtitle: 'New order received from john',
    time: '19 Mar',
  },
]

const empresasEliminadas = ref([])
const empresaListStore = useEmpresaListStore()
const totalEmpresasEliminadasConvertex = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)

const userId = ref(null)
const sub = sessionStorage.getItem('sub')

userId.value = sub || null

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

watchEffect(fetchEmpresasConvertex)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed(() => {
  const firstIndex = empresasEliminadas.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = empresasEliminadas.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalEmpresasEliminadasIfluc.value } registros`
})
</script>

<template>
  <Notifications
    :notifications="empresasEliminadas"
  />
</template>
