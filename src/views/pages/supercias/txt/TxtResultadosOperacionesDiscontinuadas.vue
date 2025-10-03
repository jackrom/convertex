<script setup>
import { calcular_eri_607, calcular_eri_707 } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import {
  initializeResultadosOperacionesDiscontinuasAntRefs,
  initializeResultadosOperacionesDiscontinuasRefs,
} from "@core/utils/initializers"

const reportStore = useReportStore()

const values = ref([])

const operacionesDiscontinuadas = initializeResultadosOperacionesDiscontinuasRefs()
const operacionesDiscontinuadasAnt = initializeResultadosOperacionesDiscontinuasAntRefs()

/* PERIODO NUEVO */
let eri_600 = operacionesDiscontinuadas['eri_600']
let eri_700 = operacionesDiscontinuadas['eri_700']
let eri_701 = operacionesDiscontinuadas['eri_701']
let eri_702 = operacionesDiscontinuadas['eri_702']
let eri_703 = operacionesDiscontinuadas['eri_703']
let eri_704 = operacionesDiscontinuadas['eri_704']
let eri_705 = operacionesDiscontinuadas['eri_705']
let eri_706 = operacionesDiscontinuadas['eri_706']

/* PERIODO ANTERIOR */
let eri_600_ant = operacionesDiscontinuadasAnt['eri_600_ant']
let eri_700_ant = operacionesDiscontinuadasAnt['eri_700_ant']
let eri_701_ant = operacionesDiscontinuadasAnt['eri_701_ant']
let eri_702_ant = operacionesDiscontinuadasAnt['eri_702_ant']
let eri_703_ant = operacionesDiscontinuadasAnt['eri_703_ant']
let eri_704_ant = operacionesDiscontinuadasAnt['eri_704_ant']
let eri_705_ant = operacionesDiscontinuadasAnt['eri_705_ant']
let eri_706_ant = operacionesDiscontinuadasAnt['eri_706_ant']
let eri_707_ant = operacionesDiscontinuadasAnt['eri_707_ant']

let convertirNegativo_703_ant = async id => { eri_703_ant.value = (Number(eri_703_ant.value) > 0) ? Number(eri_703_ant.value) * -1 : Number(eri_703_ant.value) }
let convertirNegativo_705_ant = async id => { eri_705_ant.value = (Number(eri_705_ant.value) > 0) ? Number(eri_705_ant.value) * -1 : Number(eri_705_ant.value) }

let convertirNegativo_703 = async id => { eri_703.value = (Number(eri_703.value) > 0) ? Number(eri_703.value) * -1 : Number(eri_703.value) }
let convertirNegativo_705 = async id => { eri_705.value = (Number(eri_705.value) > 0) ? Number(eri_705.value) * -1 : Number(eri_705.value) }

const eri_607 = computed(() => {
  return calcular_eri_607()
})

const eri_607_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_607_ant", true)).toFixed(2)
})

const eri_707 = computed(() => {
  return calcular_eri_607()
})

const handleActionClick = async id => {
  eri_607.value = calcular_eri_607()
  eri_702.value = (Number(eri_700.value) + Number(eri_701.value)).toFixed(2)
  eri_704.value = (Number(eri_702.value) + Number(eri_703.value)).toFixed(2)
  eri_706.value = (Number(eri_704.value) + Number(eri_705.value)).toFixed(2)

  const resultadosoperacionesdiscontinuas = {
    eri_700: eri_700.value,
    eri_701: eri_701.value,
    eri_702: eri_702.value,
    eri_703: eri_703.value,
    eri_704: eri_704.value,
    eri_705: eri_705.value,
    eri_706: eri_706.value,
    eri_707: eri_707.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    operacionesdiscontinuadasifluc: resultadosoperacionesdiscontinuas,
  })
}

const handleActionClick_ant = async id => {
  eri_702_ant.value = (Number(eri_700_ant.value) + Number(eri_701_ant.value)).toFixed(2)
  eri_704_ant.value = (Number(eri_702_ant.value) + Number(eri_703_ant.value)).toFixed(2)
  eri_706_ant.value = (Number(eri_704_ant.value) + Number(eri_705_ant.value)).toFixed(2)
  eri_707_ant.value = (Number(eri_706_ant.value) + Number(eri_607_ant.value)).toFixed(2)

  const resultadosoperacionesdiscontinuas_ant = {
    eri_700_ant: eri_700_ant.value,
    eri_701_ant: eri_701_ant.value,
    eri_702_ant: eri_702_ant.value,
    eri_703_ant: eri_703_ant.value,
    eri_704_ant: eri_704_ant.value,
    eri_705_ant: eri_705_ant.value,
    eri_706_ant: eri_706_ant.value,
    eri_707_ant: eri_707_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    operacionesdiscontinuadasifluc_ant: resultadosoperacionesdiscontinuas_ant,
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
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">INGRESOS POR OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">700</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 700" @blur="handleActionClick(this)" type="number" v-model="eri_700" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 700" @blur="handleActionClick_ant(this)" type="number" v-model="eri_700_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">GASTOS POR OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">701</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 701" @blur="handleActionClick(this)" type="number" v-model="eri_701" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 701" @blur="handleActionClick_ant(this)" type="number" v-model="eri_701_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA DE OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">702</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 702" type="number" disabled v-model="eri_702" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 702" type="number" disabled v-model="eri_702_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">15% PARTICIPACIÓN TRABAJADORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">703</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 703" @blur="convertirNegativo_703(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_703" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 703" @blur="convertirNegativo_703_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_703_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) ANTES DE IMPUESTOS DE OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">704</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 704" type="number" disabled v-model="eri_704" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 704" type="number" disabled v-model="eri_704_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">IMPUESTO A LA RENTA CAUSADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">705</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 705" @blur="convertirNegativo_705(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="eri_705" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(-) 705" @blur="convertirNegativo_705_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="eri_705_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) DE OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">706</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 706" type="number" disabled v-model="eri_706" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 706" type="number" disabled v-model="eri_706_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) NETA DEL PERIODO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">707</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 707" type="number" disabled v-model="eri_707" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 707" type="number" disabled v-model="eri_707_ant" />
                </VCol>
              </VRow>



            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
