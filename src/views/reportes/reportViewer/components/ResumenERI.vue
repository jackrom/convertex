<!-- src/views/reportes/reportViewer/components/ResumenERI.vue -->
<script setup>
import { formatMoney, round2, isZero, toNumber } from "./functions"
import { computed, ref, defineProps, defineEmits, watchEffect } from "vue"
import { useReportViewerStore } from "@/@store/reportViewer.store"

const props = defineProps({
  // Recibe: 'esf' | 'eri' | 'ecp' | 'efe' desde ReportViewerPage.vue
  eriCuadre: {
    type: [String, Boolean],
    required: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  values: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits([
  "update:showEriResumen",
  "update:eriCuadre",
  "update:modelValue",
])

const store = useReportViewerStore()

const dialog = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v),
})

const showEriResumen = ref(false)

// --- SUFIJOS ERI PARA RESUMEN ---------------------------------
// Filtrar solo los valores que coinciden con los sufijos de ingresos
const sufijosIngresos = [
  "eri_40101",
  "eri_4010201", "eri_4010202", "eri_4010203", "eri_4010204",
  "eri_40103",
  "eri_40104",
  "eri_40105",
  "eri_4010601", "eri_4010602", "eri_4010603",
  "eri_40107",
  "eri_40108",
  "eri_401090101", "eri_401090103", "eri_401090104", "eri_401090105", "eri_401090106",
  "eri_401090201", "eri_401090202", "eri_401090203", "eri_401090204", "eri_401090205", "eri_401090206", "eri_401090207", "eri_401090208",
  "eri_401090301", "eri_401090302", "eri_401090303", "eri_401090304",
  "eri_4011001", "eri_4011002", "eri_4011003", "eri_4011004", "eri_4011005", "eri_4011006",
  "eri_40112",
  "eri_40113",
  "eri_40114",
  "eri_40115",
  "eri_40116",
]

const sufijosCostos = [
  ["eri_5010101", "eri_5010102", "eri_5010103", "eri_5010104", "eri_5010105", "eri_5010106", "eri_5010107", "eri_5010108", "eri_5010109", "eri_5010110", "eri_5010111", "eri_5010112"],
  ["eri_5010201", "eri_5010202"],
  ["eri_5010301", "eri_5010302"],
  ["eri_5010401", "eri_5010402", "eri_5010403", "eri_5010404", "eri_5010405", "eri_5010406", "eri_5010407", "eri_5010408"],
  ["eri_5010501"],
]

const sufijosGastosDeVentas = [
  ["eri_5020101", "eri_5020102", "eri_5020103", "eri_5020104", "eri_5020105", "eri_5020106", "eri_5020107", "eri_5020108", "eri_5020109", "eri_5020110", "eri_5020111", "eri_5020112", "eri_5020113", "eri_5020114", "eri_5020115", "eri_5020116", "eri_5020117", "eri_5020118", "eri_5020119"],
  ["eri_502012001", "eri_502012002", "eri_502012003"],
  ["eri_502012101", "eri_502012102"],
  ["eri_502012201", "eri_502012202", "eri_502012203", "eri_502012204", "eri_502012205", "eri_502012206", "eri_502012207"],
  ["eri_502012301", "eri_502012302", "eri_502012303"],
  ["eri_5020124", "eri_5020125", "eri_5020126", "eri_5020127", "eri_5020128"],
]

const sufijosGastosAdministrativos = [
  "eri_5020201", "eri_5020202", "eri_5020203", "eri_5020204", "eri_5020205", "eri_5020206",
  "eri_5020207", "eri_5020208", "eri_5020209", "eri_5020210", "eri_5020211", "eri_5020212",
  "eri_5020213", "eri_5020214", "eri_5020215", "eri_5020216", "eri_5020217", "eri_5020218",
  "eri_5020219", "eri_5020220", "eri_502022101", "eri_502022102", "eri_502022103",
  "eri_502022201", "eri_502022202",
  "eri_502022301", "eri_502022302", "eri_502022303", "eri_502022304", "eri_502022305", "eri_502022306", "eri_502022307",
  "eri_502022401", "eri_502022402", "eri_502022403",
  "eri_5020225", "eri_5020226", "eri_5020227", "eri_5020228", "eri_5020229",
]

const sufijosGastosFinancieros = [
  ["eri_502030101", "eri_502030102", "eri_502030103", "eri_502030104"],
  ["eri_50203020101", "eri_50203020103", "eri_50203020104", "eri_50203020105", "eri_50203020106"],
  ["eri_502030301", "eri_502030302", "eri_502030303", "eri_502030304", "eri_502030305", "eri_502030306", "eri_502030307", "eri_502030308"],
  ["eri_502030401", "eri_502030402", "eri_502030403", "eri_502030404"],
  ["eri_502030501", "eri_502030502", "eri_502030503", "eri_502030504"],
  ["eri_5020306", "eri_5020307", "eri_5020308", "eri_5020309", "eri_5020310", "eri_5020311", "eri_5020312"],
]

const sufijosOtrosGastos = ["eri_5020401", "eri_5020402"]

const sufijosTotalGastos = ["eri_502"]

const sufijosOtrosIngresos = ["eri_40301", "eri_40302", "eri_40303"]

const sufijosResultados = ["eri_604", "eri_605", "eri_606"]

const sufijosParticipacionTrabajadores = ["eri_601"]

const sufijosImpuestosALaRentaCausados = ["eri_603"]

const sufijosGastoPorImpuestosSugerido = ["eri_605"]

const sufijosIngresoPorImpuestosSugerido = ["eri_606"]

const sufijosResultadoNetoDelEjercicioSegunERI = ["eri_607"]

const sufijosGananciaBruta = [
  "eri_402",
]

const sufijosGananciaPerdidad = ["eri_600"]

const esf_307_resumen = computed(() => {
  const esf_30701 = store.values.esf["esf_30701"]
  const esf_30702 = store.values.esf["esf_30702"]

  return (esf_30701 && esf_30702) ? (Number(esf_30701.valor || 0) + Number(esf_30702.valor || 0)) : 0
})

// diferenciaresultadoperiodoactual = (eri_607) - (eri_30701 + eri_30702)

const sufijosIngresosAnt = [
  "eri_40101_ant",
  "eri_4010201_ant", "eri_4010202_ant", "eri_4010203_ant", "eri_4010204_ant",
  "eri_40103_ant",
  "eri_40104_ant",
  "eri_40105_ant",
  "eri_4010601_ant", "eri_4010602_ant", "eri_4010603_ant",
  "eri_40107_ant",
  "eri_40108_ant",
  "eri_401090101_ant", "eri_401090103_ant", "eri_401090104_ant", "eri_401090105_ant", "eri_401090106_ant",
  "eri_401090201_ant", "eri_401090202_ant", "eri_401090203_ant", "eri_401090204_ant", "eri_401090205_ant", "eri_401090206_ant", "eri_401090207_ant", "eri_401090208_ant",
  "eri_401090301_ant", "eri_401090302_ant", "eri_401090303_ant", "eri_401090304_ant",
  "eri_4011001_ant", "eri_4011002_ant", "eri_4011003_ant", "eri_4011004_ant", "eri_4011005_ant", "eri_4011006_ant",
  "eri_40112_ant",
  "eri_40113_ant",
  "eri_40114_ant",
  "eri_40115_ant",
  "eri_40116_ant",
]

const sufijosCostosAnt = [
  ["eri_5010101_ant", "eri_5010102_ant", "eri_5010103_ant", "eri_5010104_ant", "eri_5010105_ant", "eri_5010106_ant", "eri_5010107_ant", "eri_5010108_ant", "eri_5010109_ant", "eri_5010110_ant", "eri_5010111_ant", "eri_5010112_ant"],
  ["eri_5010201_ant", "eri_5010202_ant"],
  ["eri_5010301_ant", "eri_5010302_ant"],
  ["eri_5010401_ant", "eri_5010402_ant", "eri_5010403_ant", "eri_5010404_ant", "eri_5010405_ant", "eri_5010406_ant", "eri_5010407_ant", "eri_5010408_ant"],
  ["eri_5010501_ant"],
]

const sufijosGastosDeVentasAnt = [
  ["eri_5020101_ant", "eri_5020102_ant", "eri_5020103_ant", "eri_5020104_ant", "eri_5020105_ant", "eri_5020106_ant", "eri_5020107_ant", "eri_5020108_ant", "eri_5020109_ant", "eri_5020110_ant", "eri_5020111_ant", "eri_5020112_ant", "eri_5020113_ant", "eri_5020114_ant", "eri_5020115_ant", "eri_5020116_ant", "eri_5020117_ant", "eri_5020118_ant", "eri_5020119_ant"],
  ["eri_502012001_ant", "eri_502012002_ant", "eri_502012003_ant"],
  ["eri_502012101_ant", "eri_502012102_ant"],
  ["eri_502012201_ant", "eri_502012202_ant", "eri_502012203_ant", "eri_502012204_ant", "eri_502012205_ant", "eri_502012206_ant", "eri_502012207_ant"],
  ["eri_502012301_ant", "eri_502012302_ant", "eri_502012303_ant"],
  ["eri_5020124_ant", "eri_5020125_ant", "eri_5020126_ant", "eri_5020127_ant", "eri_5020128_ant"],
]

const sufijosGastosAdministrativosAnt = [
  "eri_5020201_ant", "eri_5020202_ant", "eri_5020203_ant", "eri_5020204_ant", "eri_5020205_ant", "eri_5020206_ant",
  "eri_5020207_ant", "eri_5020208_ant", "eri_5020209_ant", "eri_5020210_ant", "eri_5020211_ant", "eri_5020212_ant",
  "eri_5020213_ant", "eri_5020214_ant", "eri_5020215_ant", "eri_5020216_ant", "eri_5020217_ant", "eri_5020218_ant",
  "eri_5020219_ant", "eri_5020220_ant", "eri_502022101_ant", "eri_502022102_ant", "eri_502022103_ant",
  "eri_502022201_ant", "eri_502022202_ant",
  "eri_502022301_ant", "eri_502022302_ant", "eri_502022303_ant", "eri_502022304_ant", "eri_502022305_ant", "eri_502022306_ant", "eri_502022307_ant",
  "eri_502022401_ant", "eri_502022402_ant", "eri_502022403_ant",
  "eri_5020225_ant", "eri_5020226_ant", "eri_5020227_ant", "eri_5020228_ant", "eri_5020229_ant",
]

const sufijosGastosFinancierosAnt = [
  ["eri_502030101_ant", "eri_502030102_ant", "eri_502030103_ant", "eri_502030104_ant"],
  ["eri_50203020101_ant", "eri_50203020103_ant", "eri_50203020104_ant", "eri_50203020105_ant", "eri_50203020106_ant"],
  ["eri_502030301_ant", "eri_502030302_ant", "eri_502030303_ant", "eri_502030304_ant", "eri_502030305_ant", "eri_502030306_ant", "eri_502030307_ant", "eri_502030308_ant"],
  ["eri_502030401_ant", "eri_502030402_ant", "eri_502030403_ant", "eri_502030404_ant"],
  ["eri_502030501_ant", "eri_502030502_ant", "eri_502030503_ant", "eri_502030504_ant"],
  ["eri_5020306_ant", "eri_5020307_ant", "eri_5020308_ant", "eri_5020309_ant", "eri_5020310_ant", "eri_5020311_ant", "eri_5020312_ant"],
]

const sufijosOtrosGastosAnt = ["eri_5020401_ant", "eri_5020402_ant"]

const sufijosTotalGastosAnt = ["eri_502_ant"]

const sufijosOtrosIngresosAnt = ["eri_40301_ant", "eri_40302_ant", "eri_40303_ant"]

const sufijosResultadosAnt = ["eri_604_ant", "eri_605_ant", "eri_606_ant"]

const sufijosParticipacionTrabajadoresAnt = ["eri_601_ant"]

const sufijosImpuestosALaRentaCausadosAnt = ["eri_603_ant"]

const sufijosGastoPorImpuestosSugeridoAnt = ["eri_605_ant"]

const sufijosIngresoPorImpuestosSugeridoAnt = ["eri_606_ant"]

const sufijosResultadoNetoDelEjercicioSegunERIAnt = ["eri_607_ant"]

const sufijosGananciaBrutaAnt = ["eri_402_ant"]

const sufijosGananciaPerdidadAnt = ["eri_600_ant"]

const esf_307_ant_resumen = computed(() => {
  const esf_30701_ant = store.values.esf["esf_30701_ant"]
  const esf_30702_ant = store.values.esf["esf_30702_ant"]

  return (esf_30701_ant && esf_30702_ant) ? (Number(esf_30701_ant.valor || 0) + Number(esf_30702_ant.valor || 0)) : 0
})

const eri_402_resumen = computed(() => {
  return store.values.eri["eri_402"]
})

const eri_402_ant_resumen = computed(() => {
  return store.values.eri["eri_402_ant"]
})

const eri_600_resumen = computed(() => {
  return store.values.eri["eri_600"]
})

const eri_600_ant_resumen = computed(() => {
  return store.values.eri["eri_600_ant"]
})

// 🧩 Flatten genérico (sirve para arreglos y arreglos de arreglos)
const flattenCodes = codes => {
  if (!Array.isArray(codes)) return []

  return codes.reduce((acc, item) => {
    if (Array.isArray(item)) acc.push(...item)
    else acc.push(item)

    return acc
  }, [])
}

// Suma cualquier lista de sufijos ERI (actuales o _ant)
// Sumar valores para ERI (Optimizado)
const sumEriBySufijos = codes => {
  const flat = flattenCodes(codes)
  if (!flat.length) return 0

  const list = props.values || []
  let total = 0

  flat.forEach(name => {
    const row = list.find(
      r => String(r.nombrecampo).toLowerCase() === String(name).toLowerCase())

    total += toNumber(row?.valor);
  })

  return round2(total)
}

const closeDialog = () => {
  emit("update:showEriResumen", false)  // Emitimos el cambio al padre
  // Asegúrate de emitir también el cambio en los valores si es necesario
  emit("update:eriCuadre", eriCuadre.value)
}

const eriCuadre = computed(
  () =>
    isZero(eriResumen.value.diferenciaResultadoPeriodoActual) &&
    isZero(eriResumen.value.diferenciaResultadoPeriodoAnterior),
)

// Resumen de ERI (Optimizado para no depender de ESF)
const eriResumen = computed(() => {
  // Solo recalculamos ERI cuando se han detectado cambios directos en ERI
  // PERÍODO ACTUAL
  const ingresos = sumEriBySufijos(sufijosIngresos)
  const costos = sumEriBySufijos(sufijosCostos)
  const gastosVentaActual = sumEriBySufijos(sufijosGastosDeVentas)
  const gastosAdmActual = sumEriBySufijos(sufijosGastosAdministrativos)
  const gastosFinActual = sumEriBySufijos(sufijosGastosFinancieros)
  const otrosGastosActual = sumEriBySufijos(sufijosOtrosGastos)
  const totalGastosActual = sumEriBySufijos(sufijosTotalGastos)
  const otrosIngresosActual = sumEriBySufijos(sufijosOtrosIngresos)
  const participacionTrabActual = sumEriBySufijos(sufijosParticipacionTrabajadores)
  const impRentaCausadoActual = sumEriBySufijos(sufijosImpuestosALaRentaCausados)
  const gastoImpDifActual = sumEriBySufijos(sufijosGastoPorImpuestosSugerido)
  const ingresoImpDifActual = sumEriBySufijos(sufijosIngresoPorImpuestosSugerido)

  const gananciaBrutaActual = sumEriBySufijos(sufijosGananciaBruta)
  const gananciaPerdidadActual = sumEriBySufijos(sufijosGananciaPerdidad)

  const resultadoNetoEriActual = sumEriBySufijos(sufijosResultadoNetoDelEjercicioSegunERI)

  const diferenciaResultadoPeriodoActual = round2(resultadoNetoEriActual - esf_307_resumen.value)

  // PERÍODO ANTERIOR
  const ingresosAnt = sumEriBySufijos(sufijosIngresosAnt)
  const costosAnt = sumEriBySufijos(sufijosCostosAnt)
  const gastosVentaAnt = sumEriBySufijos(sufijosGastosDeVentasAnt)
  const gastosAdmAnt = sumEriBySufijos(sufijosGastosAdministrativosAnt)
  const gastosFinAnt = sumEriBySufijos(sufijosGastosFinancierosAnt)
  const otrosGastosAnt = sumEriBySufijos(sufijosOtrosGastosAnt)
  const totalGastosAnt = sumEriBySufijos(sufijosTotalGastosAnt)
  const otrosIngresosAnt = sumEriBySufijos(sufijosOtrosIngresosAnt)

  const participacionTrabAnt = sumEriBySufijos(sufijosParticipacionTrabajadoresAnt)
  const impRentaCausadoAnt = sumEriBySufijos(sufijosImpuestosALaRentaCausadosAnt)
  const gastoImpDifAnt = sumEriBySufijos(sufijosGastoPorImpuestosSugeridoAnt)
  const ingresoImpDifAnt = sumEriBySufijos(sufijosIngresoPorImpuestosSugeridoAnt)

  const gananciaBrutaAnt = sumEriBySufijos(sufijosGananciaBrutaAnt)
  const gananciaPerdidadAnt = sumEriBySufijos(sufijosGananciaPerdidadAnt)

  const resultadoNetoEriAnt = sumEriBySufijos(sufijosResultadoNetoDelEjercicioSegunERIAnt)

  const diferenciaResultadoPeriodoAnterior = round2(
    resultadoNetoEriAnt - esf_307_ant_resumen.value)

  return {
    // Actual
    ingresos,
    costos,
    gastosVentaActual,
    gastosAdmActual,
    gastosFinActual,
    otrosGastosActual,
    totalGastosActual,
    otrosIngresosActual,
    participacionTrabActual,
    impRentaCausadoActual,
    gastoImpDifActual,
    ingresoImpDifActual,
    gananciaBrutaActual,
    gananciaPerdidadActual,
    resultadoNetoEriActual,
    diferenciaResultadoPeriodoActual,

    // Anterior
    ingresosAnt,
    costosAnt,
    gastosVentaAnt,
    gastosAdmAnt,
    gastosFinAnt,
    otrosGastosAnt,
    totalGastosAnt,
    otrosIngresosAnt,
    participacionTrabAnt,
    impRentaCausadoAnt,
    gastoImpDifAnt,
    ingresoImpDifAnt,
    gananciaBrutaAnt,
    gananciaPerdidadAnt,
    resultadoNetoEriAnt,
    diferenciaResultadoPeriodoAnterior,
  }
})

const eriCuadreOk = computed(() =>
  isZero(eriResumen.value.diferenciaResultadoPeriodoActual) &&
  isZero(eriResumen.value.diferenciaResultadoPeriodoAnterior),
)

// 🔥 En tiempo real (aunque el dialog esté cerrado)
watchEffect(() => {
  emit("update:eriCuadre", eriCuadreOk.value)
})
</script>

<template>
  <!-- Diálogo resumen ERI -->
  <VDialog
    v-model="dialog"
    max-width="960"
    @input="val => {
      emit('update:showEriResumen', val);
    }"
  >
    <VCard>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Resumen ERI</span>
        <VBtn
          icon="tabler-x"
          variant="text"
          density="comfortable"
          @click="showEriResumen = false; $emit('update:showEriResumen', false)"
        />

      </VCardTitle>

      <VCardText>
        <VTable density="compact">
          <thead>
            <tr>
              <th>RESUMEN</th>
              <th>PERÍODO ACTUAL</th>
              <th>PERÍODO ANTERIOR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>INGRESOS</td>
              <td>{{ formatMoney(eriResumen.ingresos) }}</td>
              <td>{{ formatMoney(eriResumen.ingresosAnt) }}</td>
            </tr>
            <tr>
              <td>COSTO DE VENTAS</td>
              <td>{{ formatMoney(eriResumen.costos) }}</td>
              <td>{{ formatMoney(eriResumen.costosAnt) }}</td>
            </tr>
            <tr style="background: #F5F3FF;">
              <td>GANANCIA BRUTA</td>
              <td>{{ formatMoney(eriResumen.gananciaBrutaActual) }}</td>
              <td>{{ formatMoney(eriResumen.gananciaBrutaAnt) }}</td>
            </tr>
            <tr>
              <td>GASTOS DE VENTA</td>
              <td>{{ formatMoney(eriResumen.gastosVentaActual) }}</td>
              <td>{{ formatMoney(eriResumen.gastosVentaAnt) }}</td>
            </tr>
            <tr>
              <td>GASTOS ADMINISTRATIVOS</td>
              <td>{{ formatMoney(eriResumen.gastosAdmActual) }}</td>
              <td>{{ formatMoney(eriResumen.gastosAdmAnt) }}</td>
            </tr>
            <tr>
              <td>GASTOS FINANCIEROS</td>
              <td>{{ formatMoney(eriResumen.gastosFinActual) }}</td>
              <td>{{ formatMoney(eriResumen.gastosFinAnt) }}</td>
            </tr>
            <tr>
              <td>OTROS GASTOS</td>
              <td>{{ formatMoney(eriResumen.otrosGastosActual) }}</td>
              <td>{{ formatMoney(eriResumen.otrosGastosAnt) }}</td>
            </tr>
            <tr style="background: #F5F3FF;">
              <td>TOTAL GASTOS</td>
              <td>{{ formatMoney(eriResumen.totalGastosActual) }}</td>
              <td>{{ formatMoney(eriResumen.totalGastosAnt) }}</td>
            </tr>
            <tr>
              <td>OTROS INGRESOS</td>
              <td>{{ formatMoney(eriResumen.otrosIngresosActual) }}</td>
              <td>{{ formatMoney(eriResumen.otrosIngresosAnt) }}</td>
            </tr>
            <tr style="background: #F5F3FF;">
              <td>GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA DE OPERACIONES CONTINUADAS.</td>
              <td>{{ formatMoney(eriResumen.gananciaPerdidadActual) }}</td>
              <td>{{ formatMoney(eriResumen.gananciaPerdidadAnt) }}</td>
            </tr>
            <tr>
              <td>PARTICIPACIÓN TRABAJADORES</td>
              <td>{{ formatMoney(eriResumen.participacionTrabActual) }}</td>
              <td>{{ formatMoney(eriResumen.participacionTrabAnt) }}</td>
            </tr>
            <tr>
              <td>IMPUESTO A LA RENTA CAUSADO</td>
              <td>{{ formatMoney(eriResumen.impRentaCausadoActual) }}</td>
              <td>{{ formatMoney(eriResumen.impRentaCausadoAnt) }}</td>
            </tr>
            <tr>
              <td>(-) GASTO POR IMPUESTO DIFERIDO</td>
              <td>{{ formatMoney(eriResumen.gastoImpDifActual) }}</td>
              <td>{{ formatMoney(eriResumen.gastoImpDifAnt) }}</td>
            </tr>
            <tr>
              <td>INGRESO POR IMPUESTO DIFERIDO</td>
              <td>{{ formatMoney(eriResumen.ingresoImpDifActual) }}</td>
              <td>{{ formatMoney(eriResumen.ingresoImpDifAnt) }}</td>
            </tr>
            <tr style="background: #F5F3FF;">
              <td>RESULTADO NETO DEL EJERCICIO SEGÚN ERI</td>
              <td>{{ formatMoney(eriResumen.resultadoNetoEriActual) }}</td>
              <td>{{ formatMoney(eriResumen.resultadoNetoEriAnt) }}</td>
            </tr>
            <tr style="background: #F5F3FF;">
              <td>RESULTADO DEL EJERCICIO SEGÚN ESF</td>
              <td>{{ formatMoney(esf_307_resumen) }}</td>
              <td>{{ formatMoney(esf_307_ant_resumen) }}</td>
            </tr>
          </tbody>
        </VTable>

        <VDivider class="my-4" />

        <!-- Diferencia por cuadrar -->
        <div class="text-subtitle-2 mb-2">
          DIFERENCIA POR CUADRAR DEL RESULTADO DEL EJERCICIO
        </div>

        <div class="d-flex flex-wrap gap-4">
          <VSheet
            class="pa-3 flex-grow-1"
            :style="{
              backgroundColor: isZero(eriResumen.diferenciaResultadoPeriodoActual)
                ? '#E3F5E3'
                : '#FDE2E2',
            }"
          >
            <div class="text-caption text-medium-emphasis">
              Diferencia período actual
            </div>
            <div class="text-h6">
              {{ formatMoney(eriResumen.diferenciaResultadoPeriodoActual) }}
            </div>
          </VSheet>

          <VSheet
            class="pa-3 flex-grow-1"
            :style="{
                      backgroundColor: isZero(eriResumen.diferenciaResultadoPeriodoAnterior)
                        ? '#E3F5E3'
                        : '#FDE2E2',
                    }"
          >
            <div class="text-caption text-medium-emphasis">
              Diferencia período anterior
            </div>
            <div class="text-h6">
              {{ formatMoney(eriResumen.diferenciaResultadoPeriodoAnterior) }}
            </div>
          </VSheet>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

