<script setup>
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()
import { initializeOtrosGastos, initializeOtrosGastosAnt } from "@core/utils/initializers"

const props = defineProps({
  data: {
    gas_50204: null,
    gas_50204_ant: null,
  },
})

const otrosGastos = initializeOtrosGastos()
const otrosGastosAnt = initializeOtrosGastosAnt()

/* PERIODO ACTUAL */
let eri_502 = otrosGastos['eri_502']
let eri_50204 = otrosGastos['eri_50204']
let eri_5020401 = otrosGastos['eri_5020401']
let eri_5020402 = otrosGastos['eri_5020402']

/* PERIODO ANTERIOR */
let eri_502_ant = otrosGastosAnt['eri_502_ant']
let eri_50204_ant = otrosGastosAnt['eri_50204_ant']
let eri_5020401_ant = otrosGastosAnt['eri_5020401_ant']
let eri_5020402_ant = otrosGastosAnt['eri_5020402_ant']

const eri_50201 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")).toFixed(2)
})

const eri_50202 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2)
})

const eri_50203 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2)
})

const eri_50201_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosdeventasifluc_ant", "eri_50201_ant", true)).toFixed(2)
})

const eri_50202_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosadministrativosifluc_ant", "eri_50202_ant", true)).toFixed(2)
})

const eri_50203_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosfinancierosifluc_ant", "eri_50203_ant", true)).toFixed(2)
})

let values = ref([])

const handleActionClick = async id => {
  eri_50204.value = (Number(eri_5020401.value) + Number(eri_5020402.value)).toFixed(2)
  eri_502.value = (Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value)).toFixed(2)

  props.data.gas_50204 = eri_50204.value

  const otrosgastos = {
    eri_502: eri_502.value,
    eri_50201: eri_50201.value,
    eri_50202: eri_50202.value,
    eri_50204: eri_50204.value,
    eri_5020401: eri_5020401.value,
    eri_5020402: eri_5020402.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    otrosgastosifluc: otrosgastos,
  })
}

const handleActionClick_ant = async id => {
  eri_50204_ant.value = (Number(eri_5020401_ant.value) + Number(eri_5020402_ant.value)).toFixed(2)
  eri_502_ant.value = (Number(eri_50201_ant.value) + Number(eri_50202_ant.value) + Number(eri_50203_ant.value) + Number(eri_50204_ant.value)).toFixed(2)

  props.data.gas_50204_ant = eri_50204_ant.value

  const otrosgastos_ant = {
    eri_502_ant: eri_502_ant.value,
    eri_50201_ant: eri_50201_ant.value,
    eri_50202_ant: eri_50202_ant.value,
    eri_50203_ant: eri_50203_ant.value,
    eri_50204_ant: eri_50204_ant.value,
    eri_5020401_ant: eri_5020401_ant.value,
    eri_5020402_ant: eri_5020402_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    otrosgastosifluc_ant: otrosgastos_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
onUnmounted(() => handleActionClick(1))
onUnmounted(() => handleActionClick_ant(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm" style="font-size:0.900rem">CUENTA</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PERDIDA EN INVERSIONES EN ASOCIADAS / SUBSIDIARIAS Y OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020401" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020401" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_5020401_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">5020402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020402" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_5020402" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 5020402" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   type="number" v-model="eri_5020402_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS GASTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">50204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50204" type="number" disabled v-model="eri_50204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 50204" type="number" disabled v-model="eri_50204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">TOTAL GASTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502" type="number" disabled v-model="eri_502" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 502" type="number" disabled v-model="eri_502_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
