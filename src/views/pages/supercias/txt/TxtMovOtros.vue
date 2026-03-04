<script setup>
import { loadFromLocalStorage } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import { initializeMovOtros, initializeMovOtrosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const values = ref([])

const otros = initializeMovOtros()
const otrosAnt = initializeMovOtrosAnt()

/* PERIODO NUEVO */
let mov_islr_pagos = otros['mov_islr_pagos']
let mov_pt_pagos = otros['mov_pt_pagos']
let mov_dividendos_dividendospagados = otros['mov_dividendos_dividendospagados']

/* PERIODO ANTERIOR */
let mov_islr_pagos_ant = otrosAnt['mov_islr_pagos_ant']
let mov_pt_pagos_ant = otrosAnt['mov_pt_pagos_ant']
let mov_dividendos_dividendospagados_ant = otrosAnt['mov_dividendos_dividendospagados_ant']

let convertirNegativo_pt_pagos_ant = async id => { mov_pt_pagos_ant.value = (Number(mov_pt_pagos_ant.value) != 0 && Number(mov_pt_pagos_ant.value) > 0) ? Number(mov_pt_pagos_ant.value) * -1 : Number(mov_pt_pagos_ant.value) }
let convertirNegativo_islr_pagos_ant = async id => { mov_islr_pagos_ant.value = (Number(mov_islr_pagos_ant.value) != 0 && Number(mov_islr_pagos_ant.value) > 0) ? Number(mov_islr_pagos_ant.value) * -1 : Number(mov_islr_pagos_ant.value) }
let convertirNegativo_pt_pagos = async id => { mov_pt_pagos.value = (Number(mov_pt_pagos.value) != 0 && Number(mov_pt_pagos.value) > 0) ? Number(mov_pt_pagos.value) * -1 : Number(mov_pt_pagos.value) }
let convertirNegativo_islr_pagos = async id => { mov_islr_pagos.value = (Number(mov_islr_pagos.value) != 0 && Number(mov_islr_pagos.value) > 0) ? Number(mov_islr_pagos.value) * -1 : Number(mov_islr_pagos.value) }
let convertirNegativo_dividendos_dividendospagados = async id => { mov_dividendos_dividendospagados.value = (Number(mov_dividendos_dividendospagados.value) != 0 && Number(mov_dividendos_dividendospagados.value) > 0) ? Number(mov_dividendos_dividendospagados.value) * -1 : Number(mov_dividendos_dividendospagados.value) }

const mov_islr_provisiondelanio = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
})

const mov_islr_provisiondelanio_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_603_ant", true)).toFixed(2)
})

const mov_pt_provisiondelanio = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
})

const mov_pt_provisiondelanio_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_601_ant", true)).toFixed(2)
})


const handleActionClick = async id => {
  const otros = {
    mov_islr_provisiondelanio: mov_islr_provisiondelanio.value,
    mov_islr_pagos: mov_islr_pagos.value,
    mov_pt_provisiondelanio: mov_pt_provisiondelanio.value,
    mov_pt_pagos: mov_pt_pagos.value,
    mov_dividendos_dividendospagados: mov_dividendos_dividendospagados.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    otros: otros,
  })
}

const handleActionClick_ant = async id => {
  const otros_ant = {
    mov_islr_provisiondelanio_ant: mov_islr_provisiondelanio_ant.value,
    mov_islr_pagos_ant: mov_islr_pagos_ant.value,
    mov_pt_provisiondelanio_ant: mov_pt_provisiondelanio_ant.value,
    mov_pt_pagos_ant: mov_pt_pagos_ant.value,
    mov_dividendos_dividendospagados_ant: mov_dividendos_dividendospagados_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    otros_ant: otros_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>IMPUESTO A LA RENTA</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) PROVISIÓN DEL AÑO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) provisión" disabled type="number" v-model="mov_islr_provisiondelanio" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) provisión" disabled type="number" v-model="mov_islr_provisiondelanio_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) PAGOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) pagos" @blur="convertirNegativo_islr_pagos(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_islr_pagos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) pagos" @blur="convertirNegativo_islr_pagos_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_islr_pagos_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>


        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>PARTICIPACIÓN TRABAJADORES</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) PROVISIÓN DEL AÑO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) provisión" disabled type="number" v-model="mov_pt_provisiondelanio" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) provisión" disabled type="number" v-model="mov_pt_provisiondelanio_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) PAGOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) pagos" @blur="convertirNegativo_pt_pagos(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_pt_pagos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) pagos" @blur="convertirNegativo_pt_pagos_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_pt_pagos_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>


        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>DIVIDENDOS</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>

            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) DIVIDENDOS PAGADOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) dividendos" @blur="convertirNegativo_dividendos_dividendospagados(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_dividendos_dividendospagados" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) dividendos" disabled type="number" v-model="mov_dividendos_dividendospagados_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
