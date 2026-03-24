<!--src/views/reportes/reportViewer/components/ResumenEFE.vue -->
<script setup>
import { computed, watchEffect } from "vue"
import { formatMoney, isZero, toNumber, round2 } from "./functions"

const props = defineProps({
  modelValue: { type: Boolean, default: false }, // v-model
  esfValues: { type: Array, default: () => [] },
  eriValues: { type: Array, default: () => [] },
  efeValues: { type: Array, default: () => [] },
})

const emit = defineEmits([
  "update:modelValue",
  "update:efeCuadre",
])

const cuadreEfe = computed(() => isZero(diferenciaEFEvsESF.value))
const cuadreOperacion = computed(() => isZero(diferenciaOperacion.value))

const dialog = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v),
})

/**
 * Regex tolerante: efe_md_9501010101
 */
const EFE_RE = /^efe(?:_)?md_(\d+)$/i

// -------------------------
// MAPAS REACTIVOS (desde props.*Values)
// -------------------------
const makeMapByNombrecampo = listGetter =>
  computed(() => {
    const m = {}
    for (const r of listGetter() || []) {
      const k = String(r?.nombrecampo ?? "").toLowerCase()
      if (!k) continue
      m[k] = r
    }

    return m
  })

const esfMap = makeMapByNombrecampo(() => props.esfValues)
const eriMap = makeMapByNombrecampo(() => props.eriValues)
const efeMap = makeMapByNombrecampo(() => props.efeValues)

const get = (mapRef, key) => toNumber(mapRef.value?.[String(key).toLowerCase()]?.valor)

// -------------------------
// JERARQUÍA EFE (padre = suma de hijos si existen)
// Regla:
// - Si el nodo tiene hijos con valores != 0 => usa suma de hijos
// - Si NO hay hijos con valores (o no existen) => usa su propio valor
// Esto permite: llenar solo el padre o solo los hijos, y el resumen cuadra.
// -------------------------
function buildEfeHierarchy(values) {
  const nodes = {}

  // 1) crear nodos por código (solo los existentes en data)
  for (const row of values || []) {
    const name = String(row?.nombrecampo ?? "").toLowerCase()
    const m = name.match(EFE_RE)
    if (!m) continue

    const code = m[1] // "9501010101"
    if (!nodes[code]) {
      nodes[code] = {
        code,
        own: 0,
        sum: 0,
        childSum: 0,
        childNonZero: false,
        hasChildren: false,
      }
    }
    nodes[code].own += toNumber(row.valor)
  }

  const codes = Object.keys(nodes)
  if (!codes.length) return nodes

  // 2) marcar padres (misma lógica que tu ESF: startsWith)
  for (const parent of codes) {
    for (const child of codes) {
      if (child.length <= parent.length) continue
      if (child.startsWith(parent)) {
        nodes[parent].hasChildren = true
        break
      }
    }
  }

  // 3) propagar de abajo hacia arriba
  const sorted = [...codes].sort((a, b) => {
    const lenDiff = b.length - a.length
    if (lenDiff !== 0) return lenDiff

    return a.localeCompare(b)
  })

  for (const code of sorted) {
    const node = nodes[code]

    // si tiene hijos con valores => suma hijos; caso contrario => propio
    node.sum = node.hasChildren
      ? (node.childNonZero ? node.childSum : node.own)
      : node.own

    // propagar al padre inmediato existente (mismo patrón que ESF)
    for (let len = code.length - 1; len > 0; len--) {
      const parentCode = code.slice(0, len)
      const parent = nodes[parentCode]
      if (parent) {
        parent.childSum += node.sum
        if (!isZero(node.sum)) parent.childNonZero = true
        break
      }
    }
  }

  return nodes
}

const efeHierarchy = computed(() => buildEfeHierarchy(props.efeValues))
const efeNodeSum = code => round2(efeHierarchy.value?.[String(code)]?.sum ?? 0)

// ✅ Índices reactivos: cuando cambia cualquier .valor en esfValues/ecpValues, se recalcula
const esfByName = computed(() => {
  const m = {}
  for (const r of props.esfValues) {  // ← esto SÍ es reactivo porque accede a props directamente dentro del computed
    if (r?.nombrecampo) m[r.nombrecampo] = r
  }

  return m
})

const getValor = codigo => {
  const row = esfByName.value[codigo]

  return row ? Number(row.valor || 0) : 0
}

// -------------------------
// CÁLCULOS DEL RESUMEN (ya NO necesitas listas gigantes)
// -------------------------
const v9501 = computed(() => efeNodeSum("9501"))
const v9502 = computed(() => efeNodeSum("9502"))
const v9503 = computed(() => efeNodeSum("9503"))
const v9504 = computed(() => efeNodeSum("9504"))
const v9505 = computed(() => round2(v9501.value + v9502.value + v9503.value + v9504.value))

const v9506 = computed(() => get(efeMap, "efe_md_9506"))
const v9507 = computed(() => get(efeMap, "efe_md_9507"))

const v96   = computed(() => get(eriMap, "eri_600"))
const v97v  = computed(() => efeNodeSum("97"))
const v98v  = computed(() => efeNodeSum("98"))

const v9820 = computed(() => round2(v96.value + v97v.value + v98v.value))

// ✅ AJUSTA a tu ESF real (efectivo y equivalentes)
const esfCashInicial = [
  "esf_1010101_ant",
  "esf_1010102_ant",
  "esf_1010103_ant",
]

const esfCashFinal = [
  "esf_10101",
]

const sumEsf = codes => round2((codes || []).reduce((acc, c) => acc + get(esfMap, c), 0))

const esf1010101 = computed(() => getValor("esf_1010101"))
const esf1010102 = computed(() => getValor("esf_1010102"))
const esf1010103 = computed(() => getValor("esf_1010103"))

// const esfSaldoFinal = computed(() => sumEsf(esfCashFinal))

const esfSaldoFinal = computed(() => round2(esf1010101.value + esf1010102.value + esf1010103.value))

const diferenciaEFEvsESF = computed(() => round2(v9507.value - esfSaldoFinal.value))
const diferenciaOperacion = computed(() => round2(v9501.value - v9820.value))

watchEffect(() => {
  emit("update:efeCuadre", cuadreEfe.value)
})

const closeDialog = () => { dialog.value = false }
</script>


<template>
  <VDialog
    v-model="dialog"
    max-width="980"
  >
    <VCard class="efe-card">
      <div class="efe-header">
        <div class="efe-title">
          Resumen EFE
        </div>

        <VBtn
          icon="tabler-x"
          variant="text"
          density="comfortable"
          @click="closeDialog"
        />
      </div>

      <div class="efe-table">
        <!-- HEADER -->
        <div class="efe-row efe-row--head">
          <div class="efe-col efe-col--concepto">CONCEPTO</div>
          <div class="efe-col efe-col--cuenta">CUENTA</div>
          <div class="efe-col efe-col--valor">PERIODO ACTUAL</div>
        </div>

        <!-- FILAS (bloque 9505-9507-ESF) -->
        <div class="efe-row">
          <div class="efe-col efe-col--concepto">(=) Flujo neto del período según EFE</div>
          <div class="efe-col efe-col--cuenta"><span class="efe-account">9505</span></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(v9505)"
            />
          </div>
        </div>

        <div class="efe-row">
          <div class="efe-col efe-col--concepto">(+) Saldo inicial de efectivo y equivalentes según ESF</div>
          <div class="efe-col efe-col--cuenta"><span class="efe-account">9506</span></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(v9506)"
            />
          </div>
        </div>

        <div class="efe-row" style="padding: 5px 10px; background: #F5F3FF;">
          <div class="efe-col efe-col--concepto">Saldo final de efectivo y equivalentes según EFE</div>
          <div class="efe-col efe-col--cuenta"><span class="efe-account">9507</span></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(v9507)"
            />
          </div>
        </div>

        <div class="efe-row" style="padding: 5px 10px; background: #F5F3FF;">
          <div class="efe-col efe-col--concepto">Saldo final de efectivo y equivalentes según ESF</div>
          <div class="efe-col efe-col--cuenta"></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(esfSaldoFinal)"
            />
          </div>
        </div>

        <!-- DIFERENCIA 1 -->
        <div class="efe-row efe-row--divider">
          <div class="efe-col efe-col--concepto efe-diff-label">DIFERENCIA POR CUADRAR</div>
          <div class="efe-col efe-col--cuenta"></div>
          <div class="efe-col efe-col--valor">
            <div
              class="efe-diff-box"
              :class="isZero(diferenciaEFEvsESF) ? 'efe-diff-box--ok' : 'efe-diff-box--bad'"
            >
              <div class="efe-diff-tag">(+) 9507</div>
              <div class="efe-diff-inner">
                {{ formatMoney(diferenciaEFEvsESF) }}
              </div>
            </div>
          </div>
        </div>

        <!-- BLOQUE OPERACION -->
        <div class="efe-row">
          <div class="efe-col efe-col--concepto">Actividades de Operación Método Directo</div>
          <div class="efe-col efe-col--cuenta"><span class="efe-account">9501</span></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(v9501)"
            />
          </div>
        </div>

        <div class="efe-row">
          <div class="efe-col efe-col--concepto">Actividades de Operación Método Indirecto</div>
          <div class="efe-col efe-col--cuenta"><span class="efe-account">9820</span></div>
          <div class="efe-col efe-col--valor">
            <VTextField
              class="efe-input"
              density="compact"
              variant="outlined"
              hide-details
              readonly
              :model-value="formatMoney(v9820)"
            />
          </div>
        </div>

        <!-- DIFERENCIA 2 -->
        <div class="efe-row efe-row--divider">
          <div class="efe-col efe-col--concepto efe-diff-label">DIFERENCIA POR CUADRAR</div>
          <div class="efe-col efe-col--cuenta"></div>
          <div class="efe-col efe-col--valor">
            <div
              class="efe-diff-box"
              :class="isZero(diferenciaOperacion) ? 'efe-diff-box--ok' : 'efe-diff-box--bad'"
            >
              <div class="efe-diff-tag">(+) </div>
              <div class="efe-diff-inner">
                {{ formatMoney(diferenciaOperacion) }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </VCard>
  </VDialog>
</template>

<style scoped>
.efe-card{
  padding: 16px 18px 18px;
}

.efe-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: 10px;
}

.efe-title{
  font-size: 20px;
  font-weight: 500;
}

.efe-close{
  border-radius: 6px;
  letter-spacing: .5px;
}

.efe-table{
  width: 100%;
}

.efe-row{
  display:grid;
  grid-template-columns: 1fr 120px 260px;
  gap: 18px;
  align-items:center;
  padding: 10px 0;
}

.efe-row--head{
  padding-top: 6px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0,0,0,.08);
}

.efe-row--divider{
  padding-top: 14px;
  padding-bottom: 14px;
  border-top: 1px solid rgba(0,0,0,.08);
}

.efe-col{
  min-width: 0;
}

.efe-col--cuenta{
  text-align:right;
  font-weight: 600;
}

.efe-col--valor{
  display:flex;
  justify-content:flex-end;
}

.efe-account{
  color: #D87E3A; /* naranja como la imagen */
  font-weight: 700;
}

.efe-input :deep(input){
  text-align: left; /* en la imagen se ve alineado a la izquierda dentro del input */
}

.efe-input{
  width: 220px;
}

.efe-diff-label{
  font-size: 12px;
  letter-spacing: .8px;
  color: rgba(0,0,0,.55);
}

.efe-diff-box{
  width: 260px;
  padding: 12px 12px 10px;
  position: relative;
}

.efe-diff-box--ok{
  background: #dcead7; /* verde suave */
}

.efe-diff-box--bad{
  background: #fde2e2; /* rojo suave */
}

.efe-diff-tag{
  position:absolute;
  top: 6px;
  left: 12px;
  font-size: 12px;
  color: rgba(0,0,0,.45);
}

.efe-diff-inner{
  margin-top: 10px;
  border: 1px solid rgba(0,0,0,.18);
  border-radius: 6px;
  padding: 10px 12px;
  font-weight: 600;
  color: rgba(0,0,0,.65);
}
</style>
