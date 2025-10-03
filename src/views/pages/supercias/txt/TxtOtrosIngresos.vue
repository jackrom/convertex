<script setup>
import { useReportStore } from "@/@store/reportStore"
import {
  initializeOtrosIngresos,
  initializeOtrosIngresosAnt,
} from "@core/utils/initializers"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    otro_403: null,
    otro_403_ant: null,
  },
})

let values = ref([])

const otrosIngresos = initializeOtrosIngresos()
const otrosIngresosAnt = initializeOtrosIngresosAnt()

let eri_403 = otrosIngresos['eri_403']
let eri_40301 = otrosIngresos['eri_40301']
let eri_40302 = otrosIngresos['eri_40302']
let eri_40303 = otrosIngresos['eri_40303']

let eri_403_ant = otrosIngresosAnt['eri_403_ant']
let eri_40301_ant = otrosIngresosAnt['eri_40301_ant']
let eri_40302_ant = otrosIngresosAnt['eri_40302_ant']
let eri_40303_ant = otrosIngresosAnt['eri_40303_ant']

let handleActionClick = async id => {
  eri_403.value = (Number(eri_40301.value) + Number(eri_40302.value) + Number(eri_40303.value)).toFixed(2)
  props.data.otro_403 = eri_403.value

  const otrosingresos = {
    eri_403: eri_403.value,
    eri_40301: eri_40301.value,
    eri_40302: eri_40302.value,
    eri_40303: eri_40303.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    otrosingresosifluc: otrosingresos,
  })
}

let handleActionClick_ant = async id => {
  eri_403_ant.value = (Number(eri_40301_ant.value) + Number(eri_40302_ant.value) + Number(eri_40303_ant.value)).toFixed(2)
  props.data.otro_403_ant = eri_403_ant.value

  const otrosingresos_ant = {
    eri_403_ant: eri_403_ant.value,
    eri_40301_ant: eri_40301_ant.value,
    eri_40302_ant: eri_40302_ant.value,
    eri_40303_ant: eri_40303_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    otrosingresosifluc_ant: otrosingresos_ant,
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

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GANANCIA EN VENTA DE PROPIEDAD, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40301" type="number" v-model="eri_40301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40301" type="number" v-model="eri_40301_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">GANANCIA EN VENTA DE ACTIVOS BIOLÓGICOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40302" type="number" v-model="eri_40302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40302" type="number" v-model="eri_40302_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">40303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40303" type="number" v-model="eri_40303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 40303" type="number" v-model="eri_40303_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">OTROS INGRESOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 403" type="number" disabled v-model="eri_403" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 403" type="number" disabled v-model="eri_403_ant" />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
