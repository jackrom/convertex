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
const empresasEliminadasListStore = useEmpresaListStore()
const totalEmpresasEliminadasIfluc = ref(0)
const currentPage = ref(1)
const totalPage = ref(1)
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)

let userId
try {
  userId = JSON.parse(sessionStorage.getItem('userData')).id
} catch (error) {
  console.error("Error al obtener userData del sessionStorage:", error)
}

const fetchEmpresasIfluc = () => {
  empresasEliminadasListStore.fetchEmpresasEliminadasIfluc({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: userId,
    origen: 'ifluc',
  }).then(response => {
    // console.log(response)
    empresasEliminadas.value = response.data.empresas
    totalPage.value = response.data.totalPage
    totalEmpresasEliminadasIfluc.value = response.data.totalEmpresasEliminadasIfluc

    // console.log("totalEmpresasEliminadasIfluc: ", totalEmpresasEliminadasIfluc.value)
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresasIfluc)

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
