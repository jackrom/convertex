<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeMovPropiedadesDeInversion, initializeMovPropiedadesDeInversionAnt } from "@core/utils/initializers"

const reportStore = useReportStore()

const movPropiedadesDeInversion = initializeMovPropiedadesDeInversion()
const movPropiedadesDeInversionAnt = initializeMovPropiedadesDeInversionAnt()

/* PERIODO NUEVO */
let mov_saldoinicial_terrenos = movPropiedadesDeInversion['terrenos']['mov_saldoinicial_terrenos']
let mov_compras_terrenos = movPropiedadesDeInversion['terrenos']['mov_compras_terrenos']
let mov_bajasincluida_terrenos = movPropiedadesDeInversion['terrenos']['mov_bajasincluida_terrenos']
let mov_valorrazonable_terrenos = movPropiedadesDeInversion['terrenos']['mov_valorrazonable_terrenos']
let mov_transferencia_terrenos = movPropiedadesDeInversion['terrenos']['mov_transferencia_terrenos']
let mov_otros_terrenos = movPropiedadesDeInversion['terrenos']['mov_otros_terrenos']
let mov_gastosdedepreciacion_terrenos = movPropiedadesDeInversion['terrenos']['mov_gastosdedepreciacion_terrenos']
let mov_saldo_terrenos = movPropiedadesDeInversion['terrenos']['mov_saldo_terrenos']

let mov_saldoinicial_edificios = movPropiedadesDeInversion['edificios']['mov_saldoinicial_edificios']
let mov_compras_edificios = movPropiedadesDeInversion['edificios']['mov_compras_edificios']
let mov_bajasincluida_edificios = movPropiedadesDeInversion['edificios']['mov_bajasincluida_edificios']
let mov_valorrazonable_edificios = movPropiedadesDeInversion['edificios']['mov_valorrazonable_edificios']
let mov_transferencia_edificios = movPropiedadesDeInversion['edificios']['mov_transferencia_edificios']
let mov_otros_edificios = movPropiedadesDeInversion['edificios']['mov_otros_edificios']
let mov_gastosdedepreciacion_edificios = movPropiedadesDeInversion['edificios']['mov_gastosdedepreciacion_edificios']
let mov_saldo_edificios = movPropiedadesDeInversion['edificios']['mov_saldo_edificios']

let mov_saldofinalsegunmovimiento = computed(() => {
  return ((Number(mov_saldo_edificios.value) + Number(mov_saldo_terrenos.value)).toFixed(2))
})

let mov_diferenciaporcuadrar = ref(0)

/* PERIODO ANTERIOR */
let mov_saldoinicial_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_saldoinicial_terrenos_ant']
let mov_compras_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_compras_terrenos_ant']
let mov_bajasincluida_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_bajasincluida_terrenos_ant']
let mov_valorrazonable_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_valorrazonable_terrenos_ant']
let mov_transferencia_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_transferencia_terrenos_ant']
let mov_otros_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_otros_terrenos_ant']
let mov_gastosdedepreciacion_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_gastosdedepreciacion_terrenos_ant']
let mov_saldo_terrenos_ant = movPropiedadesDeInversionAnt['terrenos']['mov_saldo_terrenos_ant']

let mov_saldoinicial_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_saldoinicial_edificios_ant']
let mov_compras_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_compras_edificios_ant']
let mov_bajasincluida_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_bajasincluida_edificios_ant']
let mov_valorrazonable_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_valorrazonable_edificios_ant']
let mov_transferencia_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_transferencia_edificios_ant']
let mov_otros_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_otros_edificios_ant']
let mov_gastosdedepreciacion_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_gastosdedepreciacion_edificios_ant']
let mov_saldo_edificios_ant = movPropiedadesDeInversionAnt['edificios']['mov_saldo_edificios_ant']

let mov_saldofinalsegunmovimiento_ant = computed(() => {
  return ((Number(mov_saldo_edificios_ant.value) + Number(mov_saldo_terrenos_ant.value)).toFixed(2))
})

let mov_diferenciaporcuadrar_ant = ref(0)

let convertirNegativo_bajasincluidadepreciaciondada_edificios_ant = async id => { mov_bajasincluida_edificios_ant.value = (Number(mov_bajasincluida_edificios_ant.value) != 0 && Number(mov_bajasincluida_edificios_ant.value) > 0) ? Number(mov_bajasincluida_edificios_ant.value) * -1 : Number(mov_bajasincluida_edificios_ant.value) }
let convertirNegativo_bajasincluidadepreciaciondada_terrenos_ant = async id => { mov_bajasincluida_terrenos_ant.value = (Number(mov_bajasincluida_terrenos_ant.value) != 0 && Number(mov_bajasincluida_terrenos_ant.value) > 0) ? Number(mov_bajasincluida_terrenos_ant.value) * -1 : Number(mov_bajasincluida_terrenos_ant.value) }
let convertirNegativo_gastosdedepreciacion_edificios_ant = async id => { mov_gastosdedepreciacion_edificios_ant.value = (Number(mov_gastosdedepreciacion_edificios_ant.value) != 0 && Number(mov_gastosdedepreciacion_edificios_ant.value) > 0) ? Number(mov_gastosdedepreciacion_edificios_ant.value) * -1 : Number(mov_gastosdedepreciacion_edificios_ant.value) }

let convertirNegativo_bajasincluidadepreciaciondada_edificios = async id => { mov_bajasincluida_edificios.value = (Number(mov_bajasincluida_edificios.value) != 0 && Number(mov_bajasincluida_edificios.value) > 0) ? Number(mov_bajasincluida_edificios.value) * -1 : Number(mov_bajasincluida_edificios.value) }
let convertirNegativo_bajasincluidadepreciaciondada_terrenos = async id => { mov_bajasincluida_terrenos.value = (Number(mov_bajasincluida_terrenos.value) != 0 && Number(mov_bajasincluida_terrenos.value) > 0) ? Number(mov_bajasincluida_terrenos.value) * -1 : Number(mov_bajasincluida_terrenos.value) }
let convertirNegativo_gastosdedepreciacion_edificios = async id => { mov_gastosdedepreciacion_edificios.value = (Number(mov_gastosdedepreciacion_edificios.value) != 0 && Number(mov_gastosdedepreciacion_edificios.value) > 0) ? Number(mov_gastosdedepreciacion_edificios.value) * -1 : Number(mov_gastosdedepreciacion_edificios.value) }

const mov_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10202")).toFixed(2)
})

const mov_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10202_ant", true)).toFixed(2)
})

const handleActionClick = async id => {
  mov_saldoinicial_edificios.value = Number(mov_saldo_edificios_ant.value).toFixed(2)
  mov_saldoinicial_terrenos.value = Number(mov_saldo_terrenos_ant.value).toFixed(2)
  mov_saldo_edificios.value = (Number(mov_saldoinicial_edificios.value) + Number(mov_compras_edificios.value) + Number(mov_bajasincluida_edificios.value) + Number(mov_valorrazonable_edificios.value) + Number(mov_transferencia_edificios.value) + Number(mov_otros_edificios.value) + Number(mov_gastosdedepreciacion_edificios.value)).toFixed(2)
  mov_saldo_terrenos.value = (Number(mov_saldoinicial_terrenos.value) + Number(mov_compras_terrenos.value) + Number(mov_bajasincluida_terrenos.value) + Number(mov_valorrazonable_terrenos.value) + Number(mov_transferencia_terrenos.value) + Number(mov_otros_terrenos.value) + Number(mov_gastosdedepreciacion_terrenos.value)).toFixed(2)

  mov_saldofinalsegunmovimiento.value = (Number(mov_saldo_edificios.value) + Number(mov_saldo_terrenos.value)).toFixed(2)

  mov_diferenciaporcuadrar.value = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_pdi(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_pdi", mov_diferenciaporcuadrar.value)

  const movpropiedadesdeinversion = {
    mov_saldoinicial_terrenos: mov_saldoinicial_terrenos.value,
    mov_compras_terrenos: mov_compras_terrenos.value,
    mov_bajasincluida_terrenos: mov_bajasincluida_terrenos.value,
    mov_valorrazonable_terrenos: mov_valorrazonable_terrenos.value,
    mov_transferencia_terrenos: mov_transferencia_terrenos.value,
    mov_otros_terrenos: mov_otros_terrenos.value,
    mov_gastosdedepreciacion_terrenos: mov_gastosdedepreciacion_terrenos.value,
    mov_saldo_terrenos: mov_saldo_terrenos.value,
    mov_saldoinicial_edificios: mov_saldoinicial_edificios.value,
    mov_compras_edificios: mov_compras_edificios.value,
    mov_bajasincluida_edificios: mov_bajasincluida_edificios.value,
    mov_valorrazonable_edificios: mov_valorrazonable_edificios.value,
    mov_transferencia_edificios: mov_transferencia_edificios.value,
    mov_otros_edificios: mov_otros_edificios.value,
    mov_gastosdedepreciacion_edificios: mov_gastosdedepreciacion_edificios.value,
    mov_saldo_edificios: mov_saldo_edificios.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movpropiedadesdeinversion: movpropiedadesdeinversion,
  })
}

const handleActionClick_ant = async id => {
  mov_saldo_edificios_ant.value = (Number(mov_saldoinicial_edificios_ant.value) + Number(mov_compras_edificios_ant.value) + Number(mov_bajasincluida_edificios_ant.value) + Number(mov_valorrazonable_edificios_ant.value) + Number(mov_transferencia_edificios_ant.value) + Number(mov_otros_edificios_ant.value) + Number(mov_gastosdedepreciacion_edificios_ant.value)).toFixed(2)
  mov_saldo_terrenos_ant.value = (Number(mov_saldoinicial_terrenos_ant.value) + Number(mov_compras_terrenos_ant.value) + Number(mov_bajasincluida_terrenos_ant.value) + Number(mov_valorrazonable_terrenos_ant.value) + Number(mov_transferencia_terrenos_ant.value) + Number(mov_otros_terrenos_ant.value) + Number(mov_gastosdedepreciacion_terrenos_ant.value)).toFixed(2)
  mov_saldofinalsegunmovimiento_ant.value = (Number(mov_saldo_edificios_ant.value) + Number(mov_saldo_terrenos_ant.value)).toFixed(2)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_pdiAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_pdi_ant", mov_diferenciaporcuadrar_ant.value)

  const movpropiedadesdeinversion_ant = {
    mov_saldoinicial_terrenos_ant: mov_saldoinicial_terrenos_ant.value,
    mov_compras_terrenos_ant: mov_compras_terrenos_ant.value,
    mov_bajasincluida_terrenos_ant: mov_bajasincluida_terrenos_ant.value,
    mov_valorrazonable_terrenos_ant: mov_valorrazonable_terrenos_ant.value,
    mov_transferencia_terrenos_ant: mov_transferencia_terrenos_ant.value,
    mov_otros_terrenos_ant: mov_otros_terrenos_ant.value,
    mov_gastosdedepreciacion_terrenos_ant: mov_gastosdedepreciacion_terrenos_ant.value,
    mov_saldo_terrenos_ant: mov_saldo_terrenos_ant.value,
    mov_saldoinicial_edificios_ant: mov_saldoinicial_edificios_ant.value,
    mov_compras_edificios_ant: mov_compras_edificios_ant.value,
    mov_bajasincluida_edificios_ant: mov_bajasincluida_edificios_ant.value,
    mov_valorrazonable_edificios_ant: mov_valorrazonable_edificios_ant.value,
    mov_transferencia_edificios_ant: mov_transferencia_edificios_ant.value,
    mov_otros_edificios_ant: mov_otros_edificios_ant.value,
    mov_gastosdedepreciacion_edificios_ant: mov_gastosdedepreciacion_edificios_ant.value,
    mov_saldo_edificios_ant: mov_saldo_edificios_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movpropiedadesdeinversion_ant: movpropiedadesdeinversion_ant,
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
        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>PERIODO ANTERIOR</VCardTitle>
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
                  <span class="text-sm" style="font-size:0.900rem">TERRENOS</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">EDIFICIOS</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicial_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicial_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) COMPRAS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_compras_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_compras_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) BAJAS INCLUIDA LA (DEPRECIACIÓN DADA DE BAJA)</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida" @blur="convertirNegativo_bajasincluidadepreciaciondada_terrenos_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_bajasincluida_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida" @blur="convertirNegativo_bajasincluidadepreciaciondada_edificios_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_bajasincluida_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) VALOR RAZONABLE</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) valor razonable" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_valorrazonable_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) valor razonable" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_valorrazonable_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) TRANSFERENCIA</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) transferencia" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_transferencia_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) transferencia" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_transferencia_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) OTROS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_otros_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_otros_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) GASTOS DE DEPRECIACIÓN</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="gastos de depreciación" type="number" disabled v-model="mov_gastosdedepreciacion_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="gastos de depreciación" @blur="convertirNegativo_gastosdedepreciacion_edificios_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_gastosdedepreciacion_edificios_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo" type="number" disabled v-model="mov_saldo_terrenos_ant" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo" type="number" disabled v-model="mov_saldo_edificios_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>


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
            <VCardTitle>PERIODO ACTUAL</VCardTitle>
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
                  <span class="text-sm" style="font-size:0.900rem">TERRENOS</span>
                </VCol>
                <VCol cols="12" md="3" >
                  <span class="text-sm" style="font-size:0.900rem">EDIFICIOS</span>
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" disabled type="number" v-model="mov_saldoinicial_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" disabled type="number" v-model="mov_saldoinicial_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) COMPRAS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_compras_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) compras" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_compras_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) BAJAS INCLUIDA LA (DEPRECIACIÓN DADA DE BAJA)</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida" @blur="convertirNegativo_bajasincluidadepreciaciondada_terrenos(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_bajasincluida_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) bajas incluida" @blur="convertirNegativo_bajasincluidadepreciaciondada_edificios(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_bajasincluida_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) VALOR RAZONABLE</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) valor razonable" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_valorrazonable_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) valor razonable" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_valorrazonable_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) TRANSFERENCIA</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) transferencia" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_transferencia_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) transferencia" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_transferencia_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) OTROS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_otros_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) otros" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_otros_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) GASTOS DE DEPRECIACIÓN</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="gastos de depreciación" type="number" disabled v-model="mov_gastosdedepreciacion_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="gastos de depreciación" @blur="convertirNegativo_gastosdedepreciacion_edificios(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_gastosdedepreciacion_edificios" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo" type="number" disabled v-model="mov_saldo_terrenos" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo" type="number" disabled v-model="mov_saldo_edificios" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>

      <VRow
        style="width:100%;"
        class="mb-5 mt-lg-10"
      >
        <VCol
          cols="12"
          md="12"
        >
          <VCardTitle></VCardTitle>
        </VCol>
      </VRow>

      <VDivider class="mt-10 mb-10"></VDivider>

      <VRow
        style="width:100%;"
        class="mb-5 mt-lg-10"
      >
        <VCol
          cols="1"
          md="1"
        ></VCol>
        <VCol
          cols="10"
          md="10"
        >
          <!-- SECTION Table -->
          <VTable class="mt-10">
            <!-- 👉 Table head -->
            <thead>
            <tr>
              <th style="width:600px !important;">CONCEPTO</th>
              <th className="center;" style="width : 800px !important;">
                <div style="width:100%;text-align: center;">PERIODO ACTUAL</div>
              </th>
              <th style="width : 800px !important;">
                <div style="width:100%;text-align: center;">PERIODO ANTERIOR</div>
              </th>
            </tr>
            </thead>


            <tbody>
            <tr style="height: 3.75rem;">
              <td>(-) SALDO FINAL SEGÚN MOVIMIENTO</td>

              <td>
                <VTextField label="saldo final según mov actual" disabled @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="mov_saldofinalsegunmovimiento" v-model="mov_saldofinalsegunmovimiento" />
              </td>

              <td>
                <VTextField label="saldo final según mov anterior" disabled @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="mov_saldofinalsegunmovimiento_ant" v-model="mov_saldofinalsegunmovimiento_ant" />
              </td>

            </tr>

            <tr style="height: 3.75rem;">
              <td>SALDO FINAL SEGÚN ESF</td>

              <td>
                <VTextField label="saldo final según esf actual" disabled @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="mov_saldofinalsegunesf" v-model="mov_saldofinalsegunesf"/>
              </td>

              <td>
                <VTextField label="saldo final según esf anterior" disabled @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="mov_saldofinalsegunesf_ant" v-model="mov_saldofinalsegunesf_ant"/>
              </td>

            </tr>

            <tr style="height: 3.75rem;">
              <td>DIFERENCIA POR CUADRAR</td>

              <td>
                <VTextField label="diferencia por cuadrar actual" disabled @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="mov_diferenciaporcuadrar" v-model="mov_diferenciaporcuadrar"/>
              </td>

              <td>
                <VTextField label="diferencia por cuadrar anterior" disabled @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="mov_diferenciaporcuadrar_ant" v-model="mov_diferenciaporcuadrar_ant"/>
              </td>

            </tr>

            </tbody>
          </VTable>
        </VCol>
        <VCol
          cols="1"
          md="1"
        ></VCol>
      </VRow>
    </VCardText>
  </VForm>
</template>
