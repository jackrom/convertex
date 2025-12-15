<script setup>
import { computed } from "vue"
import { formatMoney, isZero } from "./functions"

const props = defineProps({
  modelValue: { type: Boolean, default: false }, // v-model
  efeCuadre: { type: Boolean, default: false },

  esfValues: { type: Array, default: () => [] },
  eriValues: { type: Array, default: () => [] },
  efeValues: { type: Array, default: () => [] },
})

const emit = defineEmits(["update:modelValue", "update:efeCuadre"])

// -------------------------
// Índices reactivos
// -------------------------
const esfByName = computed(() => {
  const m = {}
  for (const r of props.esfValues) if (r?.nombrecampo) m[r.nombrecampo] = r
  return m
})

const eriByName = computed(() => {
  const m = {}
  for (const r of props.eriValues) if (r?.nombrecampo) m[r.nombrecampo] = r
  return m
})

const efeByName = computed(() => {
  const m = {}
  for (const r of props.efeValues) if (r?.nombrecampo) m[r.nombrecampo] = r
  return m
})

// -------------------------
// v-model proxy (Vuetify VDialog)
// -------------------------
const dialog = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v),
})

// -------------------------
// Arrays de códigos
// -------------------------
const efe9501 = [
  "efe_md_95010105","efe_md_95010104","efe_md_95010103","efe_md_95010102","efe_md_95010101",
  "efe_md_95010202","efe_md_95010201","efe_md_95010203","efe_md_95010204","efe_md_95010205",
  "efe_md_950103","efe_md_950104","efe_md_950105","efe_md_950106","efe_md_950107","efe_md_950108",
]

const efe9502 = [
  "efe_md_950201","efe_md_950202","efe_md_950203","efe_md_950204","efe_md_950205","efe_md_950206",
  "efe_md_950207","efe_md_950208","efe_md_950209","efe_md_950210","efe_md_950211","efe_md_950212",
  "efe_md_950213","efe_md_950214","efe_md_950215","efe_md_950216","efe_md_950217","efe_md_950218",
  "efe_md_950219","efe_md_950220","efe_md_950221",
]

const efe9503 = [
  "efe_md_950301","efe_md_950302","efe_md_950303","efe_md_950304","efe_md_950305",
  "efe_md_950306","efe_md_950307","efe_md_950308","efe_md_950309","efe_md_950310",
]

const efe9504 = ["efe_md_950401"]

const efe97 = [
  "efe_md_9701","efe_md_9702","efe_md_9703","efe_md_9704","efe_md_9705","efe_md_9706",
  "efe_md_9707","efe_md_9708","efe_md_9709","efe_md_9710","efe_md_9711",
]

const efe98 = [
  "efe_md_9801","efe_md_9802","efe_md_9803","efe_md_9804","efe_md_9805",
  "efe_md_9806","efe_md_9807","efe_md_9808","efe_md_9809","efe_md_9810",
]

// ✅ AJUSTA ESTOS CÓDIGOS A TU ESF REAL
// Saldo inicial (ESF periodo anterior) de efectivo y equivalentes
const esfCashInicial = [
  // ejemplo: "esf_10101_ant", "esf_1010101_ant", ...
]

// Saldo final (ESF periodo actual) de efectivo y equivalentes
const esfCashFinal = [
  // ejemplo: "esf_10101", "esf_1010101", ...
]

// -------------------------
// Helpers
// -------------------------
const getValor = (tipo, codigo) => {
  let row
  if (tipo === "esf") row = esfByName.value[codigo]
  else if (tipo === "eri") row = eriByName.value[codigo]
  else if (tipo === "efe") row = efeByName.value[codigo]
  else row = null

  return row ? Number(row.valor || 0) : 0
}

const sumaCodigos = (tipo, codigos) =>
  codigos.reduce((acc, c) => acc + getValor(tipo, c), 0)

// -------------------------
// Cálculos del resumen (reactivos)
// -------------------------
const v9501 = computed(() => sumaCodigos("efe", efe9501))
const v9502 = computed(() => sumaCodigos("efe", efe9502))
const v9503 = computed(() => sumaCodigos("efe", efe9503))
const v9504 = computed(() => sumaCodigos("efe", efe9504))

// 9505 = 9501 + 9502 + 9503 + 9504
const v9505 = computed(() => v9501.value + v9502.value + v9503.value + v9504.value)

// 9506 = saldo inicial según ESF
const v9506 = computed(() => sumaCodigos("esf", esfCashInicial))

// 9507 = 9505 + 9506
const v9507 = computed(() => v9505.value + v9506.value)

// Saldo final según ESF
const esfSaldoFinal = computed(() => sumaCodigos("esf", esfCashFinal))

// Diferencia por cuadrar: EFE vs ESF
const diferencia = computed(() => v9507.value - esfSaldoFinal.value)

// 9820 = 96 + 97 + 98
const v96 = computed(() => getValor("eri", "eri_607"))
const v97 = computed(() => sumaCodigos("efe", efe97))
const v98 = computed(() => sumaCodigos("efe", efe98))
const v9820 = computed(() => v96.value + v97.value + v98.value)

// Emitir cuadre en tiempo real
watchEffect(() => {
  emit("update:efeCuadre", isZero(diferencia.value))
})

const closeDialog = () => {
  dialog.value = false
}
</script>

<template>
  <VDialog v-model="dialog" max-width="960">
    <VCard>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Resumen EFE</span>

        <VBtn icon="tabler-x" variant="text" density="comfortable" @click="closeDialog" />
      </VCardTitle>

      <VCardSubtitle>
        Se actualiza automáticamente según los valores del Estado de Flujos de Efectivo.
      </VCardSubtitle>

      <VCardText>
        <VTable density="comfortable">
          <thead>
            <tr>
              <th>CONCEPTO</th>
              <th class="text-right">CUENTA</th>
              <th class="text-right">VALOR PERÍODO ACTUAL</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>(=) Flujo neto del período según EFE</td>
              <td class="text-right">9505</td>
              <td class="text-right">{{ formatMoney(v9505) }}</td>
            </tr>

            <tr>
              <td>(+) Saldo inicial de efectivo y equivalentes según ESF</td>
              <td class="text-right">9506</td>
              <td class="text-right">{{ formatMoney(v9506) }}</td>
            </tr>

            <tr>
              <td>(=) Saldo final de efectivo y equivalentes según EFE</td>
              <td class="text-right">9507</td>
              <td class="text-right">{{ formatMoney(v9507) }}</td>
            </tr>

            <tr>
              <td>(=) Saldo final de efectivo y equivalentes según ESF</td>
              <td class="text-right">ESF</td>
              <td class="text-right">{{ formatMoney(esfSaldoFinal) }}</td>
            </tr>

            <tr>
              <td>Actividades de Operación Método Directo</td>
              <td class="text-right">9501</td>
              <td class="text-right">{{ formatMoney(v9501) }}</td>
            </tr>

            <tr>
              <td>Actividades de Operación Método Indirecto</td>
              <td class="text-right">9820</td>
              <td class="text-right">{{ formatMoney(v9820) }}</td>
            </tr>
          </tbody>
        </VTable>

        <VDivider class="my-4" />

        <div class="text-subtitle-2 mb-2">DIFERENCIA POR CUADRAR</div>

        <VSheet
          class="pa-3"
          :style="{
            backgroundColor: isZero(diferencia) ? '#E3F5E3' : '#FDE2E2',
            textAlign: 'center',
          }"
        >
          <div class="text-caption text-medium-emphasis">Diferencia (EFE - ESF)</div>
          <div class="text-h6">{{ formatMoney(diferencia) }}</div>
        </VSheet>
      </VCardText>
    </VCard>
  </VDialog>
</template>
