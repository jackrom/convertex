<script setup>
import { useReportStore } from "@/@store/reportStore"
import {
  initializeActivosFinancierosLargoPlazo,
  initializeActivosFinancierosLargoPlazoAnt,
} from "@core/utils/initializers"

const reportStore = useReportStore()
const values = ref([])

const movActivosFinancierosLP = initializeActivosFinancierosLargoPlazo()
const movActivosFinancierosLPAnt = initializeActivosFinancierosLargoPlazoAnt()

/* PERIODO NUEVO */
let mov_saldoinicial = movActivosFinancierosLP['mov_saldoinicial']
let mov_nuevasinversiones = movActivosFinancierosLP['mov_nuevasinversiones']
let mov_interesactualizacionantiguasinv = movActivosFinancierosLP['mov_interesactualizacionantiguasinv']
let mov_provisionpordeterioro = movActivosFinancierosLP['mov_provisionpordeterioro']
let mov_ajustes = movActivosFinancierosLP['mov_ajustes']
let mov_saldofinalsegunmovimiento = movActivosFinancierosLP['mov_saldofinalsegunmovimiento']
let mov_diferenciaporcuadrar = movActivosFinancierosLP['mov_diferenciaporcuadrar']

/* PERIODO ANTERIOR */
let mov_saldoinicial_ant = movActivosFinancierosLPAnt['mov_saldoinicial_ant']
let mov_nuevasinversiones_ant = movActivosFinancierosLPAnt['mov_nuevasinversiones_ant']
let mov_interesactualizacionantiguasinv_ant = movActivosFinancierosLPAnt['mov_interesactualizacionantiguasinv_ant']
let mov_provisionpordeterioro_ant = movActivosFinancierosLPAnt['mov_provisionpordeterioro_ant']
let mov_ajustes_ant = movActivosFinancierosLPAnt['mov_ajustes_ant']
let mov_saldofinalsegunmovimiento_ant = movActivosFinancierosLPAnt['mov_saldofinalsegunmovimiento_ant']
let mov_diferenciaporcuadrar_ant = movActivosFinancierosLPAnt['mov_diferenciaporcuadrar_ant']

let convertirNegativo_provisionpordeterioro_ant = async id => { mov_provisionpordeterioro_ant.value = (Number(mov_provisionpordeterioro_ant.value) != 0 && Number(mov_provisionpordeterioro_ant.value) > 0) ? Number(mov_provisionpordeterioro_ant.value) * -1 : Number(mov_provisionpordeterioro_ant.value) }
let convertirNegativo_provisionpordeterioro = async id => { mov_provisionpordeterioro.value = (Number(mov_provisionpordeterioro.value) != 0 && Number(mov_provisionpordeterioro.value) > 0) ? Number(mov_provisionpordeterioro.value) * -1 : Number(mov_provisionpordeterioro.value) }

const mov_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10206")).toFixed(2)
})

const mov_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10206_ant", true)).toFixed(2)
})

const handleActionClick = async id => {
  mov_saldofinalsegunmovimiento.value = (Number(mov_saldoinicial.value) + Number(mov_nuevasinversiones.value) + Number(mov_interesactualizacionantiguasinv.value) + Number(mov_provisionpordeterioro.value) + Number(mov_ajustes.value)).toFixed(2)
  mov_saldoinicial.value = Number(mov_saldofinalsegunmovimiento_ant.value).toFixed(2)
  mov_diferenciaporcuadrar.value = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_aflp(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_aflp", mov_diferenciaporcuadrar.value)

  const activosfinancieroslargoplazo = {
    mov_saldoinicial: mov_saldoinicial.value,
    mov_nuevasinversiones: mov_nuevasinversiones.value,
    mov_interesactualizacionantiguasinv: mov_interesactualizacionantiguasinv.value,
    mov_provisionpordeterioro: mov_provisionpordeterioro.value,
    mov_ajustes: mov_ajustes.value,
    mov_saldofinalsegunmovimiento: mov_saldofinalsegunmovimiento.value,
    mov_saldofinalsegunesf: mov_saldofinalsegunesf.value,
    mov_diferenciaporcuadrar: mov_diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    activosfinancieroslargoplazo: activosfinancieroslargoplazo,
  })
}

const handleActionClick_ant = async id => {
  mov_saldofinalsegunmovimiento_ant.value = (Number(mov_saldoinicial_ant.value) + Number(mov_nuevasinversiones_ant.value) + Number(mov_interesactualizacionantiguasinv_ant.value) + Number(mov_provisionpordeterioro_ant.value) + Number(mov_ajustes_ant.value)).toFixed(2)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_aflpAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_aflp_ant", mov_diferenciaporcuadrar_ant.value)

  const activosfinancieroslargoplazo_ant = {
    mov_saldoinicial_ant: mov_saldoinicial_ant.value,
    mov_nuevasinversiones_ant: mov_nuevasinversiones_ant.value,
    mov_interesactualizacionantiguasinv_ant: mov_interesactualizacionantiguasinv_ant.value,
    mov_provisionpordeterioro_ant: mov_provisionpordeterioro_ant.value,
    mov_ajustes_ant: mov_ajustes_ant.value,
    mov_saldofinalsegunmovimiento_ant: mov_saldofinalsegunmovimiento_ant.value,
    mov_saldofinalsegunesf_ant: mov_saldofinalsegunesf_ant.value,
    mov_diferenciaporcuadrar_ant: mov_diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    activosfinancieroslargoplazo_ant: activosfinancieroslargoplazo_ant,
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
                  <VTextField label="(+) saldo inicial" disabled type="number" v-model="mov_saldoinicial" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) saldo inicial" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_saldoinicial_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) NUEVAS INVERSIONES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) nuevas inversiones" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_nuevasinversiones" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) nuevas inversiones" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_nuevasinversiones_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+) INTERÉS O ACTUALIZACIÓN DE ANTIGUAS INVERSIONES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) interes o actualizacion" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_interesactualizacionantiguasinv" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+) interes o actualizacion" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_interesactualizacionantiguasinv_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) PROVISIÓN POR DETERIORO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provision" @blur="convertirNegativo_provisionpordeterioro(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_provisionpordeterioro" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) provision" @blur="convertirNegativo_provisionpordeterioro_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_provisionpordeterioro_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(+/-) AJUSTES</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="mov_ajustes" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(+/-) ajustes" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="mov_ajustes_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">(-) SALDO FINAL SEGÚN MOVIMIENTO</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="mov_saldofinalsegunmovimiento" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun mov" disabled type="number" v-model="mov_saldofinalsegunmovimiento_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">SALDO FINAL SEGUN ESF</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="mov_saldofinalsegunesf" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="(-) saldo final segun esf" disabled type="number" v-model="mov_saldofinalsegunesf_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-5">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_diferenciaporcuadrar" />
                </VCol>
                <VCol cols="12" md="3">
                  <VTextField label="diferencia" type="number" disabled v-model="mov_diferenciaporcuadrar_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
