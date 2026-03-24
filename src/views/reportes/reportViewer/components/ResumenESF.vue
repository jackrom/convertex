<script setup>
import { formatMoney, round2, isZero } from "./functions"
import { computed, ref, defineProps, defineEmits } from "vue"

const props = defineProps({
  // Recibe: 'esf' | 'eri' | 'ecp' | 'efe' desde ReportViewerPage.vue
  esfCuadre: {
    type: Boolean,
    required: true,
  },
  values: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(["update:showResumenEsf", "update:esfCuadre"])

const showResumenEsf = ref(false)

// const showResumenEsf = ref(false)

// --- SUFIJOS ESF PARA RESUMEN ---------------------------------
const sufijosPasivosCorrientes = [
  "esf_20101",
  "esf_20102",
  "esf_20103",
  "esf_20104",
  "esf_20105",
  "esf_20106",
  "esf_20107",
  "esf_20108",
  "esf_20109",
  "esf_20110",
  "esf_20111",
  "esf_20112",
  "esf_20113",
  "esf_20114",
]

const sufijosPasivosNoCorrientes = [
  "esf_20201",
  "esf_20202",
  "esf_20203",
  "esf_20204",
  "esf_20205",
  "esf_20206",
  "esf_20207",
  "esf_20208",
  "esf_20209",
  "esf_20210",
]

const sufijosPatrimonio = [
  "esf_301",
  "esf_302",
  "esf_303",
  "esf_304",
  "esf_305",
  "esf_306",
  "esf_307",
  "esf_31",
]

const sufijosActivosCorrientes = [
  "esf_10101",
  "esf_10102",
  "esf_10103",
  "esf_10104",
  "esf_10105",
  "esf_10106",
  "esf_10107",
  "esf_10108",
]

const sufijosActivosNoCorrientes = [
  "esf_10201",
  "esf_10202",
  "esf_10203",
  "esf_10204",
  "esf_10205",
  "esf_10206",
  "esf_10207",
  "esf_10208",
  "esf_10209",
  "esf_10210",
]

const sufijosPasivosCorrientesAnt = [
  "esf_20101_ant",
  "esf_20102_ant",
  "esf_20103_ant",
  "esf_20104_ant",
  "esf_20105_ant",
  "esf_20106_ant",
  "esf_20107_ant",
  "esf_20108_ant",
  "esf_20109_ant",
  "esf_20110_ant",
  "esf_20111_ant",
  "esf_20112_ant",
  "esf_20113_ant",
  "esf_20114_ant",
]

const sufijosPasivosNoCorrientesAnt = [
  "esf_20201_ant",
  "esf_20202_ant",
  "esf_20203_ant",
  "esf_20204_ant",
  "esf_20205_ant",
  "esf_20206_ant",
  "esf_20207_ant",
  "esf_20208_ant",
  "esf_20209_ant",
  "esf_20210_ant",
]

const sufijosPatrimonioAnt = [
  "esf_301_ant",
  "esf_302_ant",
  "esf_303_ant",
  "esf_304_ant",
  "esf_305_ant",
  "esf_306_ant",
  "esf_307_ant",
  "esf_31_ant",
]

const sufijosActivosCorrientesAnt = [
  "esf_10101_ant",
  "esf_10102_ant",
  "esf_10103_ant",
  "esf_10104_ant",
  "esf_10105_ant",
  "esf_10106_ant",
  "esf_10107_ant",
  "esf_10108_ant",
]

const sufijosActivosNoCorrientesAnt = [
  "esf_10201_ant",
  "esf_10202_ant",
  "esf_10203_ant",
  "esf_10204_ant",
  "esf_10205_ant",
  "esf_10206_ant",
  "esf_10207_ant",
  "esf_10208_ant",
  "esf_10209_ant",
  "esf_10210_ant",
]

// 🔹 Construye el árbol ESF para un periodo (actual o anterior)
const buildEsfHierarchyForPeriod = (values, anterior = false) => {
  const nodes = {}

  // 1) Crear nodos por código
  for (const row of values || []) {
    if (!row?.nombrecampo) continue

    const m = String(row.nombrecampo).toLowerCase().match(/^esf_(\d+)(_ant)?$/)
    if (!m) continue

    const code = m[1]
    const isAntRow = !!m[2]

    // Filtrar por periodo
    if (anterior !== isAntRow) continue

    if (!nodes[code]) {
      nodes[code] = {
        code,
        own: 0,
        sum: 0,
        hasChildren: false,
      }
    }

    nodes[code].own += Number(row.valor) || 0
  }

  const codes = Object.keys(nodes)
  if (!codes.length) return nodes

  // 2) Marcar quién es padre
  for (const parent of codes) {
    for (const child of codes) {
      if (child.length <= parent.length) continue
      if (child.startsWith(parent)) {
        nodes[parent].hasChildren = true
        break
      }
    }
  }

  // 3) Propagar de abajo hacia arriba
  const sorted = [...codes].sort((a, b) => {
    const lenDiff = b.length - a.length
    if (lenDiff !== 0) return lenDiff

    return a.localeCompare(b)
  })

  for (const code of sorted) {
    const node = nodes[code]
    const base = node.hasChildren ? 0 : node.own

    node.sum += base

    // Propagar a padre inmediato
    for (let len = code.length - 1; len > 0; len--) {
      const parentCode = code.slice(0, len)
      const parent = nodes[parentCode]
      if (parent) {
        parent.sum += node.sum
        break
      }
    }
  }

  return nodes
}

// 🔹 Jerarquía ESF completa (actual + anterior)
const esfHierarchy = computed(() => {
  const list = props.values || []

  return {
    actual: buildEsfHierarchyForPeriod(list, false),
    anterior: buildEsfHierarchyForPeriod(list, true),
  }
})

// Suma usando SOLO el total agregado de cada código padre, sin recorrer hijos otra vez
const sumEsfBySufijos = (sufijos, anterior = false) => {
  const map = anterior ? esfHierarchy.value.anterior : esfHierarchy.value.actual
  if (!map) return 0

  let total = 0

  for (const suf of sufijos || []) {
    // sufijos vienen como "esf_10101", "esf_20101_ant", etc.
    const m = String(suf).toLowerCase().match(/^esf_(\d+)/)
    if (!m) continue

    const code = m[1] // p.ej. "10101"
    const node = map[code]
    if (!node) continue

    total += node.sum
  }

  return round2(total)
}

const esfResumen = computed(() => {
  // --------- PERÍODO ACTUAL ----------
  const activosCorrientesActual = sumEsfBySufijos(sufijosActivosCorrientes, false)
  const activosNoCorrientesActual = sumEsfBySufijos(sufijosActivosNoCorrientes, false)

  const activosActual = round2(
    activosCorrientesActual + activosNoCorrientesActual,
  )

  const pasivosCorrientesActual = sumEsfBySufijos(sufijosPasivosCorrientes, false)
  const pasivosNoCorrientesActual = sumEsfBySufijos(sufijosPasivosNoCorrientes, false)
  const patrimonioActual = sumEsfBySufijos(sufijosPatrimonio, false)

  const totalPasivosPatrimonioActual = round2(
    pasivosCorrientesActual + pasivosNoCorrientesActual + patrimonioActual,
  )

  const diferenciaActual = round2(
    activosActual - totalPasivosPatrimonioActual,
  )

  // --------- PERÍODO ANTERIOR ----------
  const activosCorrientesAnterior = sumEsfBySufijos(
    sufijosActivosCorrientesAnt,
    true,
  )

  const activosNoCorrientesAnterior = sumEsfBySufijos(
    sufijosActivosNoCorrientesAnt,
    true,
  )

  const activosAnterior = round2(
    activosCorrientesAnterior + activosNoCorrientesAnterior,
  )

  const pasivosCorrientesAnterior = sumEsfBySufijos(
    sufijosPasivosCorrientesAnt,
    true,
  )

  const pasivosNoCorrientesAnterior = sumEsfBySufijos(
    sufijosPasivosNoCorrientesAnt,
    true,
  )

  const patrimonioAnterior = sumEsfBySufijos(sufijosPatrimonioAnt, true)

  const totalPasivosPatrimonioAnterior = round2(
    pasivosCorrientesAnterior +
    pasivosNoCorrientesAnterior +
    patrimonioAnterior,
  )

  const diferenciaAnterior = round2(
    activosAnterior - totalPasivosPatrimonioAnterior,
  )

  return {
    // activos
    activosCorrientesActual,
    activosNoCorrientesActual,
    activosActual,
    activosCorrientesAnterior,
    activosNoCorrientesAnterior,
    activosAnterior,

    // pasivos + patrimonio
    pasivosCorrientesActual,
    pasivosNoCorrientesActual,
    patrimonioActual,
    totalPasivosPatrimonioActual,
    pasivosCorrientesAnterior,
    pasivosNoCorrientesAnterior,
    patrimonioAnterior,
    totalPasivosPatrimonioAnterior,

    // diferencias
    diferenciaActual,
    diferenciaAnterior,
  }
})

// Icono de “cuadre” en la pestaña ESF
const esfCuadre = computed(
  () =>
    isZero(esfResumen.value.diferenciaActual) &&
    isZero(esfResumen.value.diferenciaAnterior),
)

const closeDialog = () => {

  emit("update:showResumenEsf", false)  // Emitimos el cambio al padre
  // Asegúrate de emitir también el cambio en los valores si es necesario
  emit("update:esfCuadre", esfCuadre.value)
}

const updateEsfCuadre = () => {
  const esfCuadre = isZero(esfResumen.value.diferenciaActual - esfResumen.value.diferenciaAnterior)

  emit("update:esfCuadre", esfCuadre)
}
</script>

<template>
  <!-- DIALOGO RESUMEN ESF -->
  <VDialog
    v-model="showResumenEsf"
    max-width="960"
    @input="val => {
      console.log('El diálogo ha cambiado a:', val);
      emit('update:showResumenEsf', val);
    }"
  >
    <VCard>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Resumen ESF</span>

        <VBtn
          icon="tabler-x"
          variant="text"
          density="comfortable"
          @click="closeDialog"
        />
      </VCardTitle>

      <VCardSubtitle>
        Se actualiza automáticamente según los valores del Estado de Situación Financiera.
      </VCardSubtitle>

      <VCardText>
        <VTable density="comfortable">
          <thead>
            <tr>
              <th>RESUMEN</th>
              <th class="text-right">
                PERÍODO ACTUAL
              </th>
              <th class="text-right">
                PERÍODO ANTERIOR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACTIVOS CORRIENTES</td>
              <td class="text-right">
                {{ formatMoney(esfResumen.activosCorrientesActual) }}
              </td>
              <td class="text-right">
                {{ formatMoney(esfResumen.activosCorrientesAnterior) }}
              </td>
            </tr>

            <tr>
              <td>ACTIVOS NO CORRIENTES</td>
              <td class="text-right">
                {{ formatMoney(esfResumen.activosNoCorrientesActual) }}
              </td>
              <td class="text-right">
                {{ formatMoney(esfResumen.activosNoCorrientesAnterior) }}
              </td>
            </tr>

            <tr>
              <td><strong>ACTIVOS</strong></td>
              <td class="text-right">
                <strong>{{ formatMoney(esfResumen.activosActual) }}</strong>
              </td>
              <td class="text-right">
                <strong>{{ formatMoney(esfResumen.activosAnterior) }}</strong>
              </td>
            </tr>

            <tr>
              <td>PASIVOS CORRIENTES</td>
              <td class="text-right">
                {{ formatMoney(esfResumen.pasivosCorrientesActual) }}
              </td>
              <td class="text-right">
                {{ formatMoney(esfResumen.pasivosCorrientesAnterior) }}
              </td>
            </tr>

            <tr>
              <td>PASIVOS NO CORRIENTES</td>
              <td class="text-right">
                {{ formatMoney(esfResumen.pasivosNoCorrientesActual) }}
              </td>
              <td class="text-right">
                {{ formatMoney(esfResumen.pasivosNoCorrientesAnterior) }}
              </td>
            </tr>

            <tr>
              <td>PATRIMONIO</td>
              <td class="text-right">
                {{ formatMoney(esfResumen.patrimonioActual) }}
              </td>
              <td class="text-right">
                {{ formatMoney(esfResumen.patrimonioAnterior) }}
              </td>
            </tr>

            <tr>
              <td><strong>TOTAL PASIVOS Y PATRIMONIO</strong></td>
              <td class="text-right">
                <strong>
                  {{ formatMoney(esfResumen.totalPasivosPatrimonioActual) }}
                </strong>
              </td>
              <td class="text-right">
                <strong>
                  {{ formatMoney(esfResumen.totalPasivosPatrimonioAnterior) }}
                </strong>
              </td>
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
              backgroundColor: isZero(esfResumen.diferenciaActual)
                ? '#E3F5E3'
                : '#FDE2E2',
            }"
          >
            <div class="text-caption text-medium-emphasis">
              Diferencia período actual
            </div>
            <div class="text-h6">
              {{ formatMoney(esfResumen.diferenciaActual) }}
            </div>
          </VSheet>

          <VSheet
            class="pa-3 flex-grow-1"
            :style="{
              backgroundColor: isZero(esfResumen.diferenciaAnterior)
                ? '#E3F5E3'
                : '#FDE2E2',
            }"
          >
            <div class="text-caption text-medium-emphasis">
              Diferencia período anterior
            </div>
            <div class="text-h6">
              {{ formatMoney(esfResumen.diferenciaAnterior) }}
            </div>
          </VSheet>
        </div>

      </VCardText>
    </VCard>
  </VDialog>
</template>
