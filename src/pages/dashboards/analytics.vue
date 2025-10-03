<script setup>
const items = [
  'Ingrese valores únicamente hasta con 2 decimales',
  'Para la separación decimal utilizar punto',
  'No utilizar ni coma ni punto para la separación de miles',
  'Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar',
]

const usuario = JSON.parse(sessionStorage.getItem('userData'))
const aplicaciones = usuario.aplicaciones
let aplicacion = aplicaciones.find(app => app.aplicacionId === 4)
const fechaCaducidad = aplicacion.fechapago
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

const fechaProximoPago = dia + '-' + mes + '-' + anio
const fechaactual = new Date()
const unDia = 24 * 60 * 60 * 1000 // Milisegundos en un día
const diasFaltantes = Math.ceil((fecha - fechaactual) / unDia)

</script>

<template>
  <div>
    <VCard title="ACCESO CONVERTEX" >
      <VCardText>
        <h2><span style="color: #2c3555;">Su licencia actual caduca el:</span> {{ fechaProximoPago }}</h2>
        <p>Le quedan {{diasFaltantes}} días para que renueve su licencia</p>
      </VCardText>
    </VCard>
    <div style="height: 30px;"></div>
    <VCard title="IMPORTANTE 🙌">
      <VCardText><h2><span style="color: #2c3555;">Recomendaciones para un óptimo funcionamiento:</span></h2></VCardText>
      <VCardText>
        <VList :items="items" />
      </VCardText>
      <VCardText><h2 class="text-primary">ANTES DE SOLICITAR SOPORTE, POR FAVOR ES NECESARIO QUE REVISE Y VEA LOS TUTORIALES</h2></VCardText>
    </VCard>
  </div>
</template>

<!--
<script setup>
import { ref, watchEffect, computed } from 'vue'
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"

const items = [
  'Ingrese valores únicamente hasta con 2 decimales',
  'Para la separación decimal utilizar punto',
  'No utilizar ni coma ni punto para la separación de miles',
  'Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar',
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
    console.log(response)
    empresasEliminadas.value = response.data.empresas
    totalPage.value = response.data.totalPage
    totalEmpresasEliminadasIfluc.value = response.data.totalEmpresasEliminadasIfluc

    console.log("totalEmpresasEliminadasIfluc: ", totalEmpresasEliminadasIfluc.value)
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
  <div>
    <VCard title="IMPORTANTE 🙌">
      <VCardText><h2>Recomendaciones para un óptimo funcionamiento:</h2></VCardText>
      <VCardText>
        <VList :items="items" />
      </VCardText>
    </VCard>
  </div>

  <VDivider />
  <div style="margin-top:20px;margin-bottom:20px;margin-left:12px;">
    EMPRESAS ELIMINADAS
  </div>
  <VDivider />

  <VRow>
    <VTable
      class="text-no-wrap"
      style="margin-top:20px;"
    >
      <thead>
        <tr>
          <th scope="col">
            RUC
          </th>
          <th scope="col">
            EMPRESA
          </th>
          <th scope="col">
            CIUDAD
          </th>
          <th scope="col">
            PROVINCIA
          </th>
          <th scope="col">
            USUARIO
          </th>
          <th scope="col">
            FECHA CREACIÓN
          </th>
          <th scope="col">
            FECHA ELIMINACIÓN
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="empresa in empresasEliminadas"
          :key="empresa.id"
          style="height: 3.75rem;"
        >
          <td>
            <span class="text-capitalize text-base">{{ empresa.ruc }}</span>
          </td>
          <td>
            <span class="text-capitalize text-base font-weight-semibold">{{ empresa.nombre }}</span>
          </td>
          <td>
            <span class="text-base">{{ empresa.ciudad }}</span>
          </td>
          <td>
            {{ empresa.provincia }}
          </td>
          <td>
            {{ empresa.userId }}
          </td>
          <td>
            {{ empresa.fechaCreacion }}
          </td>
          <td>
            {{ empresa.createdAt }}
          </td>
        </tr>
      </tbody>

      <tfoot v-show="!empresasEliminadas.length">
        <tr>
          <td
            colspan="7"
            class="text-center"
          >
            No existen empresas eliminadas aún
          </td>
        </tr>
      </tfoot>
    </VTable>
  </VRow>
</template>
-->
