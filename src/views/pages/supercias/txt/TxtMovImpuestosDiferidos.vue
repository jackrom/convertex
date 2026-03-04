<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeMovImpuestosDiferidos, initializeMovImpuestosDiferidosAnt } from "@core/utils/initializers"

const reportStore = useReportStore()
const values = ref([])

const movImpuestosDiferidos = initializeMovImpuestosDiferidos()
const movImpuestosDiferidosAnt = initializeMovImpuestosDiferidosAnt()

/* PERIODO NUEVO */
let mov_apid_saldoinicial = movImpuestosDiferidos['mov_apid_saldoinicial']
let mov_apid_generacionenrevision = movImpuestosDiferidos['mov_apid_generacionenrevision']
let mov_apid_afectacionaresultadosintegrales = movImpuestosDiferidos['mov_apid_afectacionaresultadosintegrales']
let mov_apid_ajustesresultadosacumulados = movImpuestosDiferidos['mov_apid_ajustesresultadosacumulados']
let mov_apid_ajustesresultadospyg = movImpuestosDiferidos['mov_apid_ajustesresultadospyg']
let mov_apid_saldofinalsegunmovimiento = movImpuestosDiferidos['mov_apid_saldofinalsegunmovimiento']
let mov_apid_diferenciaporcuadrar = movImpuestosDiferidos['mov_apid_diferenciaporcuadrar']

let mov_ppid_saldoinicial = movImpuestosDiferidos['mov_ppid_saldoinicial']
let mov_ppid_generacionenrevision = movImpuestosDiferidos['mov_ppid_generacionenrevision']
let mov_ppid_afectacionaresultadosintegrales = movImpuestosDiferidos['mov_ppid_afectacionaresultadosintegrales']
let mov_ppid_ajustesresultadosacumulados = movImpuestosDiferidos['mov_ppid_ajustesresultadosacumulados']
let mov_ppid_ajustesresultadospyg = movImpuestosDiferidos['mov_ppid_ajustesresultadospyg']
let mov_ppid_saldofinalsegunmovimiento = movImpuestosDiferidos['mov_ppid_saldofinalsegunmovimiento']
let mov_ppid_diferenciaporcuadrar = movImpuestosDiferidos['mov_ppid_diferenciaporcuadrar']

/* PERIODO ANTERIOR */
let mov_apid_saldoinicial_ant = movImpuestosDiferidosAnt['mov_apid_saldoinicial_ant']
let mov_apid_generacionenrevision_ant = movImpuestosDiferidosAnt['mov_apid_generacionenrevision_ant']
let mov_apid_afectacionaresultadosintegrales_ant = movImpuestosDiferidosAnt['mov_apid_afectacionaresultadosintegrales_ant']
let mov_apid_ajustesresultadosacumulados_ant = movImpuestosDiferidosAnt['mov_apid_ajustesresultadosacumulados_ant']
let mov_apid_ajustesresultadospyg_ant = movImpuestosDiferidosAnt['mov_apid_ajustesresultadospyg_ant']
let mov_apid_saldofinalsegunmovimiento_ant = movImpuestosDiferidosAnt['mov_apid_saldofinalsegunmovimiento_ant']
let mov_apid_diferenciaporcuadrar_ant = movImpuestosDiferidosAnt['mov_apid_diferenciaporcuadrar_ant']

let mov_ppid_saldoinicial_ant = movImpuestosDiferidosAnt['mov_ppid_saldoinicial_ant']
let mov_ppid_generacionenrevision_ant = movImpuestosDiferidosAnt['mov_ppid_generacionenrevision_ant']
let mov_ppid_afectacionaresultadosintegrales_ant = movImpuestosDiferidosAnt['mov_ppid_afectacionaresultadosintegrales_ant']
let mov_ppid_ajustesresultadosacumulados_ant = movImpuestosDiferidosAnt['mov_ppid_ajustesresultadosacumulados_ant']
let mov_ppid_ajustesresultadospyg_ant = movImpuestosDiferidosAnt['mov_ppid_ajustesresultadospyg_ant']
let mov_ppid_saldofinalsegunmovimiento_ant = movImpuestosDiferidosAnt['mov_ppid_saldofinalsegunmovimiento_ant']
let mov_ppid_diferenciaporcuadrar_ant = movImpuestosDiferidosAnt['mov_ppid_diferenciaporcuadrar_ant']

const mov_apid_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10205")).toFixed(2)
})

const mov_apid_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10205_ant", true)).toFixed(2)
})

const mov_ppid_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_2020902")).toFixed(2)
})

const mov_ppid_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_2020902_ant", true)).toFixed(2)
})


const handleActionClick = async id => {
  mov_apid_saldofinalsegunmovimiento.value = (Number(mov_apid_saldoinicial.value) + Number(mov_apid_generacionenrevision.value) + Number(mov_apid_afectacionaresultadosintegrales.value) + Number(mov_apid_ajustesresultadosacumulados.value) + Number(mov_apid_ajustesresultadospyg.value)).toFixed(2)
  mov_apid_saldoinicial.value = Number(mov_apid_saldofinalsegunmovimiento_ant.value).toFixed(2)
  mov_ppid_saldofinalsegunmovimiento.value = (Number(mov_ppid_saldoinicial.value) + Number(mov_ppid_generacionenrevision.value) + Number(mov_ppid_afectacionaresultadosintegrales.value) + Number(mov_ppid_ajustesresultadosacumulados.value) + Number(mov_ppid_ajustesresultadospyg.value)).toFixed(2)
  mov_ppid_saldoinicial.value = Number(mov_ppid_saldofinalsegunmovimiento_ant.value).toFixed(2)

  mov_apid_diferenciaporcuadrar.value = (Number(mov_apid_saldofinalsegunmovimiento.value) - Number(mov_apid_saldofinalsegunesf.value)).toFixed(2)
  mov_ppid_diferenciaporcuadrar.value = (Number(mov_ppid_saldofinalsegunmovimiento.value) - Number(mov_ppid_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_id_apid(mov_apid_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_id_apid", mov_apid_diferenciaporcuadrar.value)

  reportStore.updateDiferenciaporcuadrar_id_ppid(mov_ppid_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_id_ppid", mov_ppid_diferenciaporcuadrar.value)

  const movimpuestosdiferidos = {
    mov_apid_saldoinicial: mov_apid_saldoinicial.value,
    mov_apid_generacionenrevision: mov_apid_generacionenrevision.value,
    mov_apid_afectacionaresultadosintegrales: mov_apid_afectacionaresultadosintegrales.value,
    mov_apid_ajustesresultadosacumulados: mov_apid_ajustesresultadosacumulados.value,
    mov_apid_ajustesresultadospyg: mov_apid_ajustesresultadospyg.value,
    mov_apid_saldofinalsegunmovimiento: mov_apid_saldofinalsegunmovimiento.value,
    mov_apid_saldofinalsegunesf: mov_apid_saldofinalsegunesf.value,
    mov_apid_diferenciaporcuadrar: mov_apid_diferenciaporcuadrar.value,
    mov_ppid_saldoinicial: mov_ppid_saldoinicial.value,
    mov_ppid_generacionenrevision: mov_ppid_generacionenrevision.value,
    mov_ppid_afectacionaresultadosintegrales: mov_ppid_afectacionaresultadosintegrales.value,
    mov_ppid_ajustesresultadosacumulados: mov_ppid_ajustesresultadosacumulados.value,
    mov_ppid_ajustesresultadospyg: mov_ppid_ajustesresultadospyg.value,
    mov_ppid_saldofinalsegunmovimiento: mov_ppid_saldofinalsegunmovimiento.value,
    mov_ppid_saldofinalsegunesf: mov_ppid_saldofinalsegunesf.value,
    mov_ppid_diferenciaporcuadrar: mov_ppid_diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movimpuestosdiferidos: movimpuestosdiferidos,
  })
}

const handleActionClick_ant = async id => {
  mov_apid_saldofinalsegunmovimiento_ant.value = (Number(mov_apid_saldoinicial_ant.value) + Number(mov_apid_generacionenrevision_ant.value) + Number(mov_apid_afectacionaresultadosintegrales_ant.value) + Number(mov_apid_ajustesresultadosacumulados_ant.value) + Number(mov_apid_ajustesresultadospyg_ant.value)).toFixed(2)
  mov_ppid_saldofinalsegunmovimiento_ant.value = (Number(mov_ppid_saldoinicial_ant.value) + Number(mov_ppid_generacionenrevision_ant.value) + Number(mov_ppid_afectacionaresultadosintegrales_ant.value) + Number(mov_ppid_ajustesresultadosacumulados_ant.value) + Number(mov_ppid_ajustesresultadospyg_ant.value)).toFixed(2)

  mov_apid_diferenciaporcuadrar_ant.value = (Number(mov_apid_saldofinalsegunmovimiento_ant.value) - Number(mov_apid_saldofinalsegunesf_ant.value)).toFixed(2)
  mov_ppid_diferenciaporcuadrar_ant.value = (Number(mov_ppid_saldofinalsegunmovimiento_ant.value) - Number(mov_ppid_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_id_apidAnt(mov_apid_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_id_apid_ant", mov_apid_diferenciaporcuadrar_ant.value)

  reportStore.updateDiferenciaporcuadrar_id_ppidAnt(mov_ppid_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_id_ppid_ant", mov_ppid_diferenciaporcuadrar_ant.value)

  const movimpuestosdiferidos_ant = {
    mov_apid_saldoinicial_ant: mov_apid_saldoinicial_ant.value,
    mov_apid_generacionenrevision_ant: mov_apid_generacionenrevision_ant.value,
    mov_apid_afectacionaresultadosintegrales_ant: mov_apid_afectacionaresultadosintegrales_ant.value,
    mov_apid_ajustesresultadosacumulados_ant: mov_apid_ajustesresultadosacumulados_ant.value,
    mov_apid_ajustesresultadospyg_ant: mov_apid_ajustesresultadospyg_ant.value,
    mov_apid_saldofinalsegunmovimiento_ant: mov_apid_saldofinalsegunmovimiento_ant.value,
    mov_apid_saldofinalsegunesf_ant: mov_apid_saldofinalsegunesf_ant.value,
    mov_apid_diferenciaporcuadrar_ant: mov_apid_diferenciaporcuadrar_ant.value,
    mov_ppid_saldoinicial_ant: mov_ppid_saldoinicial_ant.value,
    mov_ppid_generacionenrevision_ant: mov_ppid_generacionenrevision_ant.value,
    mov_ppid_afectacionaresultadosintegrales_ant: mov_ppid_afectacionaresultadosintegrales_ant.value,
    mov_ppid_ajustesresultadosacumulados_ant: mov_ppid_ajustesresultadosacumulados_ant.value,
    mov_ppid_ajustesresultadospyg_ant: mov_ppid_ajustesresultadospyg_ant.value,
    mov_ppid_saldofinalsegunmovimiento_ant: mov_ppid_saldofinalsegunmovimiento_ant.value,
    mov_ppid_saldofinalsegunesf_ant: mov_ppid_saldofinalsegunesf_ant.value,
    mov_ppid_diferenciaporcuadrar_ant: mov_ppid_diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movimpuestosdiferidos_ant: movimpuestosdiferidos_ant,
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
            <VCardTitle>ACTIVO POR IMPUESTOS DIFERIDOS</VCardTitle>
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
                  <span class="text-sm ml-5">(+) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" disabled @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_apid_saldoinicial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_apid_saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) GENERACIÓN/REVERSION</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) generacion/reversion" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_apid_generacionenrevision" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) generacion/reversion" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_apid_generacionenrevision_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AFECTACIÓN A RESULTADOS INTEGRALES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) afectación a resultados" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_apid_afectacionaresultadosintegrales" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) afectación a resultados" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_apid_afectacionaresultadosintegrales_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES A RESULTADOS ACUMULADOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_apid_ajustesresultadosacumulados" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_apid_ajustesresultadosacumulados_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES A RESULTADOS PYG</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados pyg" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_apid_ajustesresultadospyg" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados pyg" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_apid_ajustesresultadospyg_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGÚN MOVIMIENTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(saldo final segun mov" disabled type="number" v-model="mov_apid_saldofinalsegunmovimiento" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun mov" disabled type="number" v-model="mov_apid_saldofinalsegunmovimiento_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGÚN ESF</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun esf" type="number" disabled v-model="mov_apid_saldofinalsegunesf" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun esf" type="number" disabled v-model="mov_apid_saldofinalsegunesf_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_apid_diferenciaporcuadrar" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_apid_diferenciaporcuadrar_ant" />
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
            <VCardTitle>PASIVO POR IMPUESTOS DIFERIDOS</VCardTitle>
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
                  <span class="text-sm ml-5">(+) SALDO INICIAL</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" disabled @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ppid_saldoinicial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ppid_saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) GENERACIÓN/REVERSION</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) generacion/reversion" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ppid_generacionenrevision" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) generacion/reversion" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ppid_generacionenrevision_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AFECTACIÓN A RESULTADOS INTEGRALES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) afectación a resultados" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ppid_afectacionaresultadosintegrales" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) afectación a resultados" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ppid_afectacionaresultadosintegrales_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES A RESULTADOS ACUMULADOS</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ppid_ajustesresultadosacumulados" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ppid_ajustesresultadosacumulados_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES A RESULTADOS PYG</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados pyg" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ppid_ajustesresultadospyg" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes a resultados pyg" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ppid_ajustesresultadospyg_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGÚN MOVIMIENTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(saldo final segun mov" disabled type="number" v-model="mov_ppid_saldofinalsegunmovimiento" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun mov" disabled type="number" v-model="mov_ppid_saldofinalsegunmovimiento_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGÚN ESF</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun esf" type="number" disabled v-model="mov_ppid_saldofinalsegunesf" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="saldo final segun esf" type="number" disabled v-model="mov_ppid_saldofinalsegunesf_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_ppid_diferenciaporcuadrar" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_ppid_diferenciaporcuadrar_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
