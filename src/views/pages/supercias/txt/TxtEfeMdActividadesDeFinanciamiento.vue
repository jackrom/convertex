<script setup>
import {
  calcular_9501, calcular_9501_ant,
  calcular_9502, calcular_9502_ant,
  calcular_9503,
  calcular_9505,
  calcular_9507,
  calcularEfeCuadre,
  getFormattedNumber,
  loadFromLocalStorage,
} from "@core/utils/formulas"

import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const props = defineProps({
  data: {
    res_diferenciaporcuadrar_af: null,
    res_diferenciaporcuadrar_af_ant: null,
  },
})

import { computed, ref } from "vue"
import {
  initializeActividadesDeFinanciamiento,
} from "@core/utils/initializers"

const values = ref([])

const actividadesDeFinanciamiento = initializeActividadesDeFinanciamiento()

/* PERIODO ACTUAL */
const efe_md_95 = actividadesDeFinanciamiento['efe_md_95']
const efe_md_950301 = actividadesDeFinanciamiento['efe_md_950301']
const efe_md_950302 = actividadesDeFinanciamiento['efe_md_950302']
const efe_md_950303 = actividadesDeFinanciamiento['efe_md_950303']
const efe_md_950304 = actividadesDeFinanciamiento['efe_md_950304']
const efe_md_950305 = actividadesDeFinanciamiento['efe_md_950305']
const efe_md_950306 = actividadesDeFinanciamiento['efe_md_950306']
const efe_md_950307 = actividadesDeFinanciamiento['efe_md_950307']
const efe_md_950308 = actividadesDeFinanciamiento['efe_md_950308']
const efe_md_950309 = actividadesDeFinanciamiento['efe_md_950309']
const efe_md_950310 = actividadesDeFinanciamiento['efe_md_950310']

const efe_md_diferenciaporcuadrar = ref('0')

const convertirNegativo_950303 = async id => { efe_md_950303.value = (Number(efe_md_950303.value) > 0) ? Number(efe_md_950303.value) * -1 : Number(efe_md_950303.value) }
const convertirNegativo_950305 = async id => { efe_md_950305.value = (Number(efe_md_950305.value) > 0) ? Number(efe_md_950305.value) * -1 : Number(efe_md_950305.value) }
const convertirNegativo_950306 = async id => { efe_md_950306.value = (Number(efe_md_950306.value) > 0) ? Number(efe_md_950306.value) * -1 : Number(efe_md_950306.value) }
const convertirNegativo_950308 = async id => { efe_md_950308.value = (Number(efe_md_950308.value) > 0) ? Number(efe_md_950308.value) * -1 : Number(efe_md_950308.value) }

const esf_10101 = computed(() => {
  return reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101")
})

const efe_md_95030101 = computed(() => {
  const value = reportStore.getSingleReportValue("ecpifluc", "ecp_990201_301")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95030102 = computed(() => {
  const value = reportStore.getSingleReportValue("ecpifluc", "ecp_990201_302")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95030103 = computed(() => {
  const value = reportStore.getSingleReportValue("ecpifluc", "ecp_990202_301")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95030104 = computed(() => {
  const value = reportStore.getSingleReportValue("ecpifluc", "ecp_990202_302")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95030801 = computed(() => {
  const value = reportStore.getSingleReportValue("otros", "mov_dividendos_dividendospagados")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95031001 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20205")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20205_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95031002 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_202070202")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_202070202_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95031003 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20201")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20201_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95031004 = computed(() => {
  const value = reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_20203")
  const valueAnt = reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_20203_ant", true)

  return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
})

const efe_md_95031005 = computed(() => {
  const value = reportStore.getSingleReportValue("movjubilacionpatronal", "mov_beneficiospagados")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95031006 = computed(() => {
  return Number(reportStore.getSingleReportValue("deshaucio", "mov_beneficiospagados")).toFixed(2)
})

const efe_md_95031007 = computed(() => {
  const value = reportStore.getSingleReportValue("actividadesdefinanciamientoifluc", "efe_md_95031007")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_95031008 = computed(() => {
  const value = reportStore.getSingleReportValue("ecpifluc", "ecp_99020901_Total")

  return value ? Number(value).toFixed(2) : "0.00"
})

const efe_md_9501 = computed(() => {
  return calcular_9501()
})

const efe_md_9502 = computed(() => {
  return calcular_9502()
})

const efe_md_9503 = computed(() => {
  return calcular_9503()
})

const efe_md_950401 = ref(reportStore.getSingleReportValue("actividadesdefinanciamientoifluc", "efe_md_950401"))

const efe_md_9504 = ref(0)

const efe_md_9505 = ref(0)

const efe_md_9506 = computed(() => {
  return reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10101_ant", true)
})

const efe_md_9507 = ref(0)

const handleActionClick = async id => {
  calcularEfeCuadre()

  efe_md_95.value = (Number(efe_md_9501.value) + Number(efe_md_9502.value) + Number(efe_md_9503.value)).toFixed(2)
  efe_md_9504.value = (Number(efe_md_950401.value)).toFixed(2)
  efe_md_9505.value = Number(calcular_9505()).toFixed(2)
  efe_md_9507.value = (Number(efe_md_9505.value) + Number(efe_md_9506.value)).toFixed(2)
  efe_md_950310.value = (Number(efe_md_95031001.value) + Number(efe_md_95031002.value) + Number(efe_md_95031003.value) + Number(efe_md_95031004.value) + Number(efe_md_95031005.value) + Number(efe_md_95031006.value) + Number(efe_md_95031007.value) + Number(efe_md_95031008.value)).toFixed(2)
  efe_md_950308.value = (Number(efe_md_95030801.value)).toFixed(2)
  efe_md_950301.value = (Number(efe_md_95030101.value) + Number(efe_md_95030102.value) + Number(efe_md_95030103.value) + Number(efe_md_95030104.value)).toFixed(2)

  efe_md_diferenciaporcuadrar.value = (Number(efe_md_9507.value) - Number(esf_10101.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_efe_af(efe_md_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_efe_af", efe_md_diferenciaporcuadrar.value)

  props.data.res_diferenciaporcuadrar_af = efe_md_diferenciaporcuadrar.value

  reportStore.updateReportData("actividadesdefinanciamientoifluc", 'efe_md_95031007', 0.00)

  const actividadesdefinanciamiento = {
    efe_md_95: efe_md_95.value,
    efe_md_9501: efe_md_9501.value,
    efe_md_9503: efe_md_9503.value,
    efe_md_950301: efe_md_950301.value,
    efe_md_95030101: efe_md_95030101.value,
    efe_md_95030102: efe_md_95030102.value,
    efe_md_95030103: efe_md_95030103.value,
    efe_md_95030104: efe_md_95030104.value,
    efe_md_950302: efe_md_950302.value,
    efe_md_950303: efe_md_950303.value,
    efe_md_950304: efe_md_950304.value,
    efe_md_950305: efe_md_950305.value,
    efe_md_950306: efe_md_950306.value,
    efe_md_950307: efe_md_950307.value,
    efe_md_950308: efe_md_950308.value,
    efe_md_95030801: efe_md_95030801.value,
    efe_md_950309: efe_md_950309.value,
    efe_md_950310: efe_md_950310.value,
    efe_md_95031001: efe_md_95031001.value,
    efe_md_95031002: efe_md_95031002.value,
    efe_md_95031003: efe_md_95031003.value,
    efe_md_95031004: efe_md_95031004.value,
    efe_md_95031005: efe_md_95031005.value,
    efe_md_95031006: efe_md_95031006.value,
    efe_md_95031007: efe_md_95031007.value,
    efe_md_95031008: efe_md_95031008.value,
    efe_md_9504: efe_md_9504.value,
    efe_md_950401: efe_md_950401.value,
    efe_md_9505: efe_md_9505.value,
    efe_md_9506: efe_md_9506.value,
    efe_md_9507: efe_md_9507.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    actividadesdefinanciamientoifluc: actividadesdefinanciamiento,
  })
}

onMounted(() => {
  handleActionClick(1)
})
onUnmounted(() => {
  handleActionClick(1)
})
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
            <VCardTitle>ESTADOS DE FLUJOS DE EFECTIVO POR EL MÉTODO DIRECTO</VCardTitle>
          </VCol>
        </VRow>
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
                  md="8"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >CONCEPTO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >CUENTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >PERIODO ACTUAL</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol
                  cols="12 bg-primary"
                  md="12"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >ACTIVIDADES DE FINANCIAMIENTO</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Aporte en efectivo por aumento de capital</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950301</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950301"
                    label="(+) 950301"
                    v-model="efe_md_950301"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Aumento (Disminución) de Capital Social</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95030101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95030101"
                    label="(+) 95030101"
                    v-model="efe_md_95030101"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Aumento (Disminución) de Capital Social y Aporte para Futura Capitalización</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95030102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95030102"
                    label="(+) 95030102"
                    v-model="efe_md_95030102"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Aporte para Futura Capitalizaciones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95030103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95030103"
                    label="(+) 95030103"
                    v-model="efe_md_95030103"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Aporte para Futura Capitalizaciones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95030104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95030104"
                    label="(+) 95030104"
                    v-model="efe_md_95030104"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Financiamiento por emisión de títulos valores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950302</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950302"
                    label="(+) 950302"
                    v-model="efe_md_950302"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Pagos por adquirir o rescatar las acciones de la entidad</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950303</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950303"
                    v-model="efe_md_950303"
                    label="(-) 950303"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950303(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Financiación por préstamos a largo plazo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950304</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950304"
                    label="(+) 950304"
                    v-model="efe_md_950304"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Pagos de préstamos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950305</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950305"
                    v-model="efe_md_950305"
                    label="(-) 950305"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950305(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Pagos de pasivos por arrendamientos financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950306</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950306"
                    v-model="efe_md_950306"
                    label="(-) 950306"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950306(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950307</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950307"
                    label="(+) 950307"
                    v-model="efe_md_950307"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Dividendos pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950308</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950308"
                    v-model="efe_md_950308"
                    label="(-) 950308"
                    type="number"
                    disabled
                    @blur="convertirNegativo_950308(this); handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Otros Dividendos Pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95030801</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95030801"
                    v-model="efe_md_95030801"
                    label="(-) 95030801"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950309</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950309"
                    label="(+) 950309"
                    v-model="efe_md_950309"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950310</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950310"
                    label="(+) 950310"
                    v-model="efe_md_950310"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Porción no Corrientes de Valores Emitidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031001</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031001"
                    label="(+) 95031001"
                    v-model="efe_md_95031001"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Provisiones por Beneficios a Empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031002</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031002"
                    label="(+) 95031002"
                    v-model="efe_md_95031002"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Pasivos por Contratos de Arrendamiento</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031003</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031003"
                    label="(+) 95031003"
                    v-model="efe_md_95031003"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Obligaciones con Instituciones Financieras</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031004</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031004"
                    label="(+) 95031004"
                    v-model="efe_md_95031004"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Pago por Jubilación Patronal</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031005</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031005"
                    label="(+) 95031005"
                    v-model="efe_md_95031005"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Pago por Desahucio</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031006</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031006"
                    label="(+) 95031006"
                    v-model="efe_md_95031006"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Dividendos Pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031007</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031007"
                    label="(+) 95031007"
                    v-model="efe_md_95031007"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm ml-5">Transferencias a Cuentas de Activos y Pasivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95031008</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95031008"
                    label="(+) 95031008"
                    v-model="efe_md_95031008"
                    type="number"
                    disabled
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE FINANCIACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9503</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9503"
                    v-model="efe_md_9503"
                    label="(+) 9503"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VDivider />

              <div style="background: #efefef;">
                <VRow class="font-weight-medium px-4 mt-10">
                  <VCol
                    cols="12"
                    md="8"
                  >
                    <span class="text-sm">Efectos de la variación en la tasa de cambio sobre el efectivo y equivalentes al efectivo</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <span class="text-sm">950401</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <VTextField
                      id="efe_md_950401"
                      label="(+) 950401"
                      v-model="efe_md_950401"
                      type="number"
                      @blur="handleActionClick(this);"
                      @input="handleActionClick(this);"
                      @keyup="handleActionClick(this);"
                    />
                  </VCol>
                </VRow>

                <VRow class="font-weight-medium px-4 mt-10 mb-1 text-black">
                  <VCol
                    cols="12"
                    md="8"
                  >
                    <span class="text-sm">EFECTOS DE LA VARIACION EN LA TASA DE CAMBIO SOBRE EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <span class="text-sm">9504</span>
                  </VCol>
                  <VCol
                    cols="12"
                    md="2"
                  >
                    <VTextField
                      id="efe_md_9504"
                      v-model="efe_md_9504"
                      label="(+) 9504"
                      type="number"
                      disabled
                    />
                  </VCol>
                </VRow>
              </div>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">INCREMENTO NETO (DISMINUCIÓN) EN EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO, ANTES DEL EFECTO DE LOS CAMBIOS EN LA TASA DE CAMBIO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95"
                    label="(+) 95"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">INCREMENTO (DISMINUCIÓN) NETO DE EFECTIVO Y EQUIVALENTES AL EFECTIVO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9505</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9505"
                    v-model="efe_md_9505"
                    label="(+) 9505"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL PRINCIPIO DEL PERIODO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9506</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    label="(+) 9506"
                    disabled
                    id="efe_md_9506"
                    type="number"
                    @blur="handleActionClick(this)"
                    v-model="efe_md_9506"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL FINAL DEL PERIODO SEGÚN EFE</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9507</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9507"
                    v-model="efe_md_9507"
                    label="(+) 9507"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO SEGÚN ESF</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm"></span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="esf_10101"
                    v-model="esf_10101"
                    label="(+) 10101"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="8"
                >
                  <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm" />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                  :style="(efe_md_diferenciaporcuadrar != 0) ? 'background: rgba(255,0,0,.2);' : 'background: rgba(0,128,0,.2);'"
                >
                  <VTextField
                    id="efe_md_9507"
                    v-model="efe_md_diferenciaporcuadrar"
                    label="(+) 9507"
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
