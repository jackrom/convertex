<script setup>
import { getLocalStorageItemAsNumber } from "@core/utils/formatters"
import { calcular_97, calcular_98, calcular_9810, calcular_9820, calcular_eri_607 } from "@core/utils/formulas"
import { useReportStore } from "@/@store/reportStore"
import { initializeResultadosAntRefs, initializeResultadosRefs } from "@core/utils/initializers"
import { ref } from "vue"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    participacion_600: null,
    participacion_600_ant: null,
    participacion_601: null,
    participacion_601_ant: null,
    impuestos_603: 0,
    impuestos_605: 0,
    impuestos_606: 0,
    impuestos_607: 0,
    impuestos_603_ant: 0,
    impuestos_605_ant: 0,
    impuestos_606_ant: 0,
    impuestos_607_ant: 0,
  },
})

const values = ref([])

const resultados = initializeResultadosRefs()
const resultadosAnt = initializeResultadosAntRefs()

/* PERIODO NUEVO */
const eri_6 = ref('0')
const eri_600 = resultados['eri_600']
const eri_601 = resultados['eri_601']
const eri_602 = resultados['eri_602']
const eri_603 = resultados['eri_603']
const eri_604 = resultados['eri_604']
const eri_605 = resultados['eri_605']
const eri_606 = resultados['eri_606']
const eri_607 = resultados['eri_607']

/* PERIODO ANTERIOR */
const eri_6_ant = ref('0')
const eri_600_ant = resultadosAnt['eri_600_ant']
const eri_601_ant = resultadosAnt['eri_601_ant']
const eri_602_ant = resultadosAnt['eri_602_ant']
const eri_603_ant = resultadosAnt['eri_603_ant']
const eri_604_ant = resultadosAnt['eri_604_ant']
const eri_605_ant = resultadosAnt['eri_605_ant']
const eri_606_ant = resultadosAnt['eri_606_ant']
const eri_607_ant = resultadosAnt['eri_607_ant']

const convertirNegativo_601_ant = async id => { eri_601_ant.value = (Number(eri_601_ant.value) > 0) ? Number(eri_601_ant.value) * -1 : Number(eri_601_ant.value) }
const convertirNegativo_603_ant = async id => { eri_603_ant.value = (Number(eri_603_ant.value) > 0) ? Number(eri_603_ant.value) * -1 : Number(eri_603_ant.value) }
const convertirNegativo_605_ant = async id => { eri_605_ant.value = (Number(eri_605_ant.value) > 0) ? Number(eri_605_ant.value) * -1 : Number(eri_605_ant.value) }
const convertirNegativo_601 = async id => { eri_601.value = (Number(eri_601.value) > 0) ? Number(eri_601.value) * -1 : Number(eri_601.value) }
const convertirNegativo_603 = async id => { eri_603.value = (Number(eri_603.value) > 0) ? Number(eri_603.value) * -1 : Number(eri_603.value) }
const convertirNegativo_605 = async id => { eri_605.value = (Number(eri_605.value) > 0) ? Number(eri_605.value) * -1 : Number(eri_605.value) }

const eri_50201 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")).toFixed(2)
})

const eri_50201_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosdeventasifluc_ant", "eri_50201_ant", true)).toFixed(2)
})

const eri_50202 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2)
})

const eri_50202_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosadministrativosifluc_ant", "eri_50202_ant", true)).toFixed(2)
})

const eri_50203 = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2)
})

const eri_50203_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("gastosfinancierosifluc_ant", "eri_50203_ant", true)).toFixed(2)
})

const eri_50204 = computed(() => {
  return Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")).toFixed(2)
})

const eri_50204_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("otrosgastosifluc_ant", "eri_50204_ant", true)).toFixed(2)
})

const eri_401 = computed(() => {
  return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_401")).toFixed(2)
})

const eri_501 = computed(() => {
  return Number(reportStore.getSingleReportValue("costosifluc", "eri_501")).toFixed(2)
})

const eri_403 = computed(() => {
  return Number(reportStore.getSingleReportValue("otrosingresosifluc", "eri_403")).toFixed(2)
})

const eri_403_ant = computed(() => {
  return reportStore.getSingleReportValue("otrosingresosifluc_ant", "eri_403_ant", true)
})

const eri_401_ant = computed(() => reportStore.getSingleReportValue("ingresosifluc_ant", "eri_401_ant", true))

const eri_501_ant = computed(() => reportStore.getSingleReportValue("costosifluc_ant", "eri_501_ant", true))

const handleActionClick = async id => {
  eri_6.value = (Number(eri_600.value)).toFixed(2)

  eri_600.value = ((Number(eri_401.value - eri_501.value) - (Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value))) + Number(eri_403.value)).toFixed(2)
  eri_602.value = (Number(eri_600.value) + Number(eri_601.value)).toFixed(2)
  eri_604.value = (Number(eri_602.value) + Number(eri_603.value)).toFixed(2)
  eri_607.value = (Number(eri_604.value) + Number(eri_605.value) + Number(eri_606.value)).toFixed(2)

  reportStore.updateReportData("otros", 'mov_islr_provisiondelanio', Number(eri_603.value))

  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_970901', (eri_603.value * -1))
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_971001', (eri_601.value * -1))
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_981007', eri_601.value)
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_981008', eri_603.value)
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_9820', calcular_9820())
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_9810', calcular_9810())
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_98', calcular_98())
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_97', calcular_97())
  reportStore.updateReportData("conciliacionganancianetaifluc", 'efe_md_96', calcular_eri_607())

  reportStore.updateReportData("actividadesdeoperacionifluc", 'efe_md_9501020302', (eri_601.value * -1))
  reportStore.updateReportData("actividadesdeoperacionifluc", 'efe_md_9501070202', (eri_603.value * -1))

  props.data.participacion_600 = eri_600.value
  props.data.participacion_601 = eri_601.value
  props.data.impuestos_603 = eri_603.value
  props.data.impuestos_605 = eri_605.value
  props.data.impuestos_606 = eri_606.value
  props.data.impuestos_607 = eri_607.value

  const resultados = {
    eri_600: eri_600.value,
    eri_601: eri_601.value,
    eri_602: eri_602.value,
    eri_603: eri_603.value,
    eri_604: eri_604.value,
    eri_605: eri_605.value,
    eri_606: eri_606.value,
    eri_607: eri_607.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    resultadosifluc: resultados,
  })
}

const handleActionClick_ant = async id => {
  eri_6_ant.value = (Number(eri_600_ant.value)).toFixed(2)
  eri_600_ant.value = ((Number(eri_401_ant.value - eri_501_ant.value) - (Number(eri_50201_ant.value) + Number(eri_50202_ant.value) + Number(eri_50203_ant.value) + Number(eri_50204_ant.value))) + Number(eri_403_ant.value)).toFixed(2)
  eri_602_ant.value = (Number(eri_600_ant.value) + Number(eri_601_ant.value)).toFixed(2)
  eri_604_ant.value = (Number(eri_602_ant.value) + Number(eri_603_ant.value)).toFixed(2)
  eri_607_ant.value = (Number(eri_604_ant.value) + Number(eri_605_ant.value) + Number(eri_606_ant.value)).toFixed(2)

  props.data.participacion_600_ant = eri_600_ant.value
  props.data.participacion_601_ant = eri_601_ant.value
  props.data.impuestos_603_ant = eri_603_ant.value
  props.data.impuestos_605_ant = eri_605_ant.value
  props.data.impuestos_606_ant = eri_606_ant.value
  props.data.impuestos_607_ant = eri_607_ant.value

  const resultados_ant = {
    eri_600_ant: eri_600_ant.value,
    eri_601_ant: eri_601_ant.value,
    eri_602_ant: eri_602_ant.value,
    eri_603_ant: eri_603_ant.value,
    eri_604_ant: eri_604_ant.value,
    eri_605_ant: eri_605_ant.value,
    eri_606_ant: eri_606_ant.value,
    eri_607_ant: eri_607_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    resultadosifluc_ant: resultados_ant,
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
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <VCol
              cols="12"
              md="12"
              style="font-size:8px;"
            >
              <VRow class="font-weight-medium px-4 mb-2">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >CONCEPTO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >CUENTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >PERIODO ACTUAL</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA DE OPERACIONES CONTINUADAS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">600</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_600"
                    label="(+) 600"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_600_ant"
                    label="(+) 600"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">15% PARTICIPACIÓN TRABAJADORES</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">601</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_601"
                    label="(-) 601"
                    type="number"
                    @blur="convertirNegativo_601(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_601_ant"
                    label="(-) 601"
                    type="number"
                    @blur="convertirNegativo_601_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) ANTES DE IMPUESTOS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">602</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_602"
                    label="(+) 602"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_602_ant"
                    label="(+) 602"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">IMPUESTO A LA RENTA CAUSADO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">603</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_603"
                    label="(-) 603"
                    type="number"
                    @blur="convertirNegativo_603(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_603_ant"
                    label="(-) 603"
                    type="number"
                    @blur="convertirNegativo_603_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">GANANCIA (PÉRDIDA) DE OPERACIONES CONTINUADAS ANTES DEL IMPUESTO DIFERIDO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">604</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_604"
                    label="(+) 604"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_604_ant"
                    label="(+) 604"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">(-) GASTO POR IMPUESTO DIFERIDO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">605</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_605"
                    label="(-) 605"
                    type="number"
                    @blur="convertirNegativo_605(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_605_ant"
                    label="(-) 605"
                    type="number"
                    @blur="convertirNegativo_605_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">(+) INGRESO POR IMPUESTO DIFERIDO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">606</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_606"
                    label="(+) 606"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_606_ant"
                    label="(+) 606"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm ml-5">GANANCIA (PERDIDA) DE OPERACIONES CONTINUADAS</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">607</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_607"
                    label="(+) 607"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    v-model="eri_607_ant"
                    label="(+) 607"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
