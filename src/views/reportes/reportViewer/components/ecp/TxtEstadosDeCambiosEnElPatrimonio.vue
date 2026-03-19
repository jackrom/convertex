<script setup>
import { computed, reactive, ref, watch } from "vue"
import { useDebounceFn } from "@vueuse/core"
import $ from "jquery"
import { useAudit } from "@/composables/useAudit"
import { useLogger } from "@/composables/useLogger"
import { usePerformanceStore } from "@/@store/performance.store"
import { toNumber } from "@/views/reportes/reportViewer/components/functions"
import { roundTo, useReportViewerStore } from "@/@store/reportViewer.store"

const props = defineProps({
  // Recibe: 'esf' | 'eri' | 'ecp' | 'efe' desde ReportViewerPage.vue
  tipo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
  empresa: {
    type: String,
    required: true,
  },

  values: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: () => ({}),
  },
  currentTab: {
    type: String,
    required: true,
  },
  activePanel: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(["update:activePanel", "change-value"])

const store = useReportViewerStore()

const resolveEcpBucket = storeSource => {
  // Caso 1: no mandan nada
  if (!storeSource) return store.values.ecp

  // Caso 2: mandan directamente el bucket store.values.ecp
  if (typeof storeSource === "object" && !storeSource.values && !storeSource.$id) {
    return storeSource
  }

  // Caso 3: mandan el store completo de Pinia
  if (storeSource?.values?.ecp) {
    return storeSource.values.ecp
  }

  // Fallback seguro
  return store.values.ecp
}

const parseInputNumber = raw => {
  // No convertir vacío en 0
  if (raw === "" || raw == null) return null

  // Soporte para string con coma decimal
  let normalized = raw
  if (typeof normalized === "string") {
    normalized = normalized.trim()

    if (normalized === "") return null

    normalized = normalized.replace(",", ".")
  }

  const n = Number(normalized)

  return Number.isFinite(n) ? n : null
}

const parseEcpKey = codigo => {
  const text = String(codigo ?? "").trim()
  const match = text.match(/^ecp_([^_]+)_([^_]+)$/)

  if (!match) return null

  return {
    grupo: match[1],
    col: match[2],
  }
}

const updateActivePanel = val => {
  // console.log("currentTab", props.currentTab)

  emit("update:activePanel", 'Estados En El Cambio de Patrimonio')
}

const normalizeSignedValue = (nombrecampo, value) => {
  const n = toNumber(value)
  if (!Number.isFinite(n)) return 0

  if (NEGATIVE_FIELDS.has(nombrecampo)) {
    return n === 0 ? 0 : -Math.abs(n)
  }

  return n
}

const isLocalEditing = ref(false)
let localEditTimer = null

const markLocalEditing = () => {
  isLocalEditing.value = true

  if (localEditTimer) clearTimeout(localEditTimer)

  localEditTimer = setTimeout(() => {
    isLocalEditing.value = false
  }, 500)
}

// -----------------------------------------------------
// Flags de mostrar/ocultar columnas (las mantengo como las tenías)
// -----------------------------------------------------
let show_301 = ref(true)
let show_302 = ref(true)
let show_303 = ref(true)
let show_30401 = ref(true)
let show_30402 = ref(true)
let show_30501 = ref(true)
let show_30502 = ref(true)
let show_30503 = ref(true)
let show_30504 = ref(true)
let show_30601 = ref(true)
let show_30602 = ref(true)
let show_30603 = ref(true)
let show_30604 = ref(true)
let show_30605 = ref(true)
let show_30606 = ref(true)
let show_30607 = ref(true)
let show_30701 = ref(true)
let show_30702 = ref(true)
let show_30 = ref(true)
let show_31 = ref(true)

// ======================================================
// 1. Configuración: campos negativos, grupos hoja, readonly
// ======================================================

// Campos que SIEMPRE deben ser negativos
const NEGATIVE_FIELDS = new Set([
  "ecp_990204_301",
  "ecp_990204_302",
  "ecp_990204_303",
  "ecp_990204_30401",
  "ecp_990204_30402",
  "ecp_990204_30501",
  "ecp_990204_30502",
  "ecp_990204_30503",
  "ecp_990204_30504",
  "ecp_990204_30601",
  "ecp_990204_30602",
  "ecp_990204_30603",
  "ecp_990204_30604",
  "ecp_990204_30605",
  "ecp_990204_30606",
  "ecp_990204_30607",
  "ecp_990204_30701",
  "ecp_990204_30702",
  "ecp_990204_30",
  "ecp_990204_31",
  "ecp_990101_30702",
  "ecp_990101_30602",
])

// Grupos que son "hoja" (vienen de base, no son sumatorias de otros grupos)
const LEAF_GROUPS = new Set([
  "990101",
  "990102",
  "990103",
  "990201",
  "990202",
  "990203",
  "990204",
  "990205",
  "990206",
  "990207",
  "990208",
  "990209",
  "990210",
])

// Grupos agregados que deben ser readonly
const READONLY_GROUPS = new Set([])

// Columnas readonly en TODOS los grupos
const READONLY_COLS = new Set([])

// Columnas que entran en la suma del campo 30
const COLS_FOR_30 = [
  "301",
  "302",
  "303",
  "30401",
  "30402",
  "30501",
  "30502",
  "30503",
  "30504",
  "30601",
  "30602",
  "30603",
  "30604",
  "30605",
  "30606",
  "30607",
  "30701",
  "30702",
]

// Grupos que forman 9901 y 9902
const GRUPOS_9901 = ["990101", "990102", "990103"]

const GRUPOS_9902 = [
  "990201",
  "990202",
  "990203",
  "990204",
  "990205",
  "990206",
  "990207",
  "990208",
  "990209",
  "990210",
]

// 🔹 Todos los grupos que existen en tu tabla (hojas + agregados)
const ALL_GROUPS = new Set([
  ...LEAF_GROUPS,
  "9901",
  "9902",
  "99",
])

// 🔹 Todas las columnas que usas en la tabla
const ALL_COLS = [
  ...COLS_FOR_30,
  "30",
  "31",
  "Total",
]

// ======================================================
// 2. Base: props.values -> diccionario numérico con signo
// ======================================================

const ecpBaseData = computed(() => {
  const out = {}

  for (const row of props.values) {
    const key = row.nombrecampo
    if (!key || !key.startsWith("ecp_")) continue

    let val = Number(row.valor) || 0

    // Forzar negativos donde aplica
    if (NEGATIVE_FIELDS.has(key)) {
      val = val === 0 ? 0 : -Math.abs(val)
    }

    out[key] = val
  }

  return out
})

// ======================================================
// 3. Matriz ecp[grupo][col] = { readonly, value: number }
// ======================================================

const ecp = reactive({})

const ensureCell = (grupo, col) => {
  const gKey = String(grupo)
  const cKey = String(col)

  if (!ecp[gKey]) ecp[gKey] = {}

  if (!ecp[gKey][cKey]) {
    const readonly =
      READONLY_GROUPS.has(gKey) || READONLY_COLS.has(cKey)

    ecp[gKey][cKey] = {
      readonly,
      value: 0,
    }
  }

  return ecp[gKey][cKey]
}

// ======================================================
// 4. Recalcular modelo completo (hojas, 30, agregados, Total)
// ======================================================

// 4.1 Volcar datos base a grupos hoja y asegurar TODAS las celdas
const recalcHojaFromBase = () => {
  const base = ecpBaseData.value

  // 0) Asegurar que existen todas las celdas para todos los grupos/columnas de la tabla
  ALL_GROUPS.forEach(grupo => {
    ALL_COLS.forEach(col => {
      ensureCell(grupo, col)
    })
  })

  // 1) Resetear valores de grupos hoja (excepto columnas readonly: 30 y Total)
  LEAF_GROUPS.forEach(grupo => {
    ALL_COLS.forEach(col => {
      if (READONLY_COLS.has(col)) return

      const cell = ensureCell(grupo, col)

      // No sobrescribir los valores ya ingresados por el usuario.
      // Comentar la línea de reseteo a 0
      // cell.value = 0
    })
  })

  // 2) Volcar valores base en grupos hoja (excepto 30 y Total, que se calculan)
  Object.entries(base).forEach(([key, num]) => {
    const [, grupo, col] = key.split("_")

    if (!LEAF_GROUPS.has(grupo)) return
    if (col === "30" || col === "Total") return

    const cell = ensureCell(grupo, col)

    // Solo asignar el valor base si la celda aún no tiene un valor asignado por el usuario.
    // Comentar la línea de asignación directa de base a la celda si ya tiene un valor
    if (cell.value === null || cell.value === undefined) {
      cell.value = num
    }
  })

  updateActivePanel(props.currentTab)
}

// 4.2 Recalcular columna 30 (suma de 301…30702) en grupos hoja
const recalc30 = () => {
  LEAF_GROUPS.forEach(grupo => {
    const g = String(grupo)

    const sum = COLS_FOR_30.reduce((acc, col) => {
      const cell = ecp[g]?.[col]
      const n = cell ? Number(cell.value) || 0 : 0

      return acc + n
    }, 0)

    ensureCell(g, "30").value = sum
  })

}

// 4.3 Recalcular columnas agregadas 9901, 9902 y 99 para TODAS las columnas
const recalcAggregatedColumns = () => {
  ALL_COLS.forEach(col => {
    const c = String(col)

    // 9901 = sumatoria de GRUPOS_9901
    const sum9901 = GRUPOS_9901.reduce((acc, grupo) => {
      const cell = ecp[grupo]?.[c]

      return acc + (cell ? Number(cell.value) || 0 : 0)
    }, 0)

    ensureCell("9901", c).value = sum9901

    // 9902 = sumatoria de GRUPOS_9902
    const sum9902 = GRUPOS_9902.reduce((acc, grupo) => {
      const cell = ecp[grupo]?.[c]

      return acc + (cell ? Number(cell.value) || 0 : 0)
    }, 0)

    ensureCell("9902", c).value = sum9902

    // 99 = 9901 + 9902
    ensureCell("99", c).value = sum9901 + sum9902
  })
}

// 4.4 Recalcular Total = 30 + 31 en TODOS los grupos
const recalcTotals = () => {
  ALL_GROUPS.forEach(grupo => {
    const g = String(grupo)
    const v30 = Number(ecp[g]?.["30"]?.value ?? 0)
    const v31 = Number(ecp[g]?.["31"]?.value ?? 0)

    ensureCell(g, "Total").value = v30 + v31
  })
}

// ======================================================
// 4.5 Sincronizar campos DERIVADOS (30, Total, etc.) al store
// ======================================================
const syncDerivedToStore = () => {
  const base = ecpBaseData.value

  const emitIfChanged = (g, col) => {
    const cell = ecp[g]?.[col]
    if (!cell) return

    const key = `ecp_${g}_${col}`
    const newVal = Number(cell.value) || 0
    const oldVal = Number(base[key] ?? 0)

    if (newVal === oldVal) return

    emit("change-value", {
      tipo: "ecp",
      id: key,
      valor: String(newVal),
      row: { nombrecampo: key, valor: newVal, tablaorigen: "Ecp" },
      meta: { autoCalc: true, grupo: g, col },
    })
  }

  // 1) Grupos hoja: sincronizar solo derivados
  for (const g of LEAF_GROUPS) {
    emitIfChanged(g, "30")
    emitIfChanged(g, "Total")
  }

  // 2) Grupos agregados: sincronizar todo
  for (const g of ["9901", "9902", "99"]) {
    for (const col of ALL_COLS) {
      emitIfChanged(g, col)
    }
  }
}

const buildDerivedBatch = storeSource => {
  const bucket = resolveEcpBucket(storeSource)
  const batch = []

  const groupsToSync = [...ALL_GROUPS]

  for (const g of groupsToSync) {
    const colsToSync =
      g === "9901" || g === "9902" || g === "99"
        ? [...COLS_FOR_30, "30", "31", "Total"]
        : ["30", "Total"]

    for (const col of colsToSync) {
      const cell = ecp[g]?.[col]
      if (!cell) continue

      const key = `ecp_${g}_${col}`
      const newVal = Number(cell.value) || 0
      const oldVal = Number(bucket?.[key]?.valor ?? 0)

      if (newVal === oldVal) continue

      batch.push({
        tipo: "ecp",
        id: key,
        valor: String(newVal),
        row: { nombrecampo: key, valor: newVal, tablaorigen: "Ecp" },
        meta: { autoCalc: true, grupo: g, col },
      })
    }
  }

  return batch
}


// Orquestador: recalcula el modelo interno y orquestador con sincronización al store
const recalcAll = () => {
  recalcHojaFromBase()
  recalc30()
  recalcAggregatedColumns()
  recalcTotals()
  syncDerivedToStore()
}

const recalcDerivedOnly = () => {
  recalc30()
  recalcAggregatedColumns()
  recalcTotals()
  syncDerivedToStore()
}

const parseCellCode = codigo => {
  const m = String(codigo ?? "").match(/^ecp_([^_]+)_([^_]+)$/)
  if (!m) return null

  return {
    grupo: String(m[1]),
    col: String(m[2]),
  }
}


const hydrateFromBase = () => {
  // Construye/asegura todas las celdas relevantes
  for (const g of ALL_GROUPS) {
    for (const c of ALL_COLS) {
      const cell = ensureCell(g, c)
      const key = `ecp_${g}_${c}`
      const baseNum = toNumber(ecpBaseData.value?.[key] ?? 0)

      // Solo hidratar grupos NO calculados
      if (!READONLY_GROUPS.has(String(g)) && !READONLY_COLS.has(String(c))) {
        cell.value = baseNum
      }
    }
  }
}

watch(
  () => props.values,
  () => {
    if (isLocalEditing.value) return

    hydrateFromBase()
    recalcAll()
  },
  { immediate: true },
)


const esfValues = computed(() => store.values?.esf ?? {})

const draft = reactive({})

const emitBatchSync = useDebounceFn((codigo, tipoStore, storeSource) => {
  const bucket = resolveEcpBucket(storeSource)
  const row = bucket?.[codigo]

  const parsed = parseInputNumber(draft[codigo])

  if (parsed == null) return

  const valorNum = normalizeSignedValue(codigo, parsed)

  const batch = [
    {
      tipo: tipoStore,
      id: codigo,
      valor: String(valorNum),
      row: row ?? { nombrecampo: codigo },
      meta: { from: "typing" },
    },
    ...buildDerivedBatch(storeSource),
  ]

  if (batch.length) {
    emit("change-value", { batch })
  }
}, 350)

const onType = (codigo, val, tipoStore, storeSource) => {
  markLocalEditing()
  draft[codigo] = val

  const parsed = parseInputNumber(val)
  const info = parseEcpKey(codigo)

  // UI local inmediata
  if (parsed != null && info) {
    ensureCell(info.grupo, info.col).value = normalizeSignedValue(codigo, parsed)

    recalc30()
    recalcAggregatedColumns()
    recalcTotals()
  }

  // sync al store con debounce
  emitBatchSync(codigo, tipoStore, storeSource)
}

const commitNow = (codigo, tipoStore, storeSource) => {
  emitBatchSync.cancel?.()

  const bucket = resolveEcpBucket(storeSource)
  const row = bucket?.[codigo]

  const hasDraft = Object.prototype.hasOwnProperty.call(draft, codigo)
  const raw = hasDraft ? draft[codigo] : row?.valor
  const parsed = parseInputNumber(raw)

  if (parsed == null) {
    delete draft[codigo]
    isLocalEditing.value = false

    return
  }

  const valorNum = normalizeSignedValue(codigo, parsed)

  const batch = [
    {
      tipo: tipoStore,
      id: codigo,
      valor: String(valorNum),
      row: row ?? { nombrecampo: codigo },
      meta: { from: "blur" },
    },
    ...buildDerivedBatch(storeSource),
  ]

  if (batch.length) {
    emit("change-value", { batch })
  }

  delete draft[codigo]
  isLocalEditing.value = false
}

watch(
  () => [
    toNumber(esfValues.value["esf_30701"]?.valor),
    toNumber(esfValues.value["esf_30702"]?.valor),
  ],
  ([new30701, new30702]) => {
    const current30701 = toNumber(
      draft["ecp_990210_30701"]
      ?? store.values.ecp["ecp_990210_30701"]?.valor
      ?? 0,
    )
    const current30702 = toNumber(
      draft["ecp_990210_30702"]
      ?? store.values.ecp["ecp_990210_30702"]?.valor
      ?? 0,
    )

    const batch = []

    if (roundTo(current30701, 2) !== roundTo(new30701, 2)) {
      // Actualizar celda local
      ensureCell("990210", "30701").value = new30701

      batch.push({
        tipo: "ecp",
        id: "ecp_990210_30701",
        valor: String(new30701),
        row: { nombrecampo: "ecp_990210_30701", valor: new30701, tablaorigen: "Ecp" },
        meta: { autoCalc: true, linkedFrom: "esf_30701" },
      })
    }

    if (roundTo(current30702, 2) !== roundTo(new30702, 2)) {
      ensureCell("990210", "30702").value = new30702

      batch.push({
        tipo: "ecp",
        id: "ecp_990210_30702",
        valor: String(new30702),
        row: { nombrecampo: "ecp_990210_30702", valor: new30702, tablaorigen: "Ecp" },
        meta: { autoCalc: true, linkedFrom: "esf_30702" },
      })
    }

    if (batch.length) {
      // Recalcular derivados (30, agregados, totales)
      recalc30()
      recalcAggregatedColumns()
      recalcTotals()

      // Agregar derivados al batch
      batch.push(...buildDerivedBatch(store))

      emit("change-value", { batch })
    }
  },
  { immediate: true },
)

// ======================================================
// 8. Mostrar/ocultar columnas (tu lógica original con jQuery)
// ======================================================

const showColumn = prefix => {
  $('[id^="th"]').fadeIn()
  $("#th2_0").css("display", "none")
}

const hideColumn = prefix => {
  for (let i = 1; i <= 23; i++) {
    $(`#th${prefix}_${i}`).fadeOut()
  }
  $("#th2_0").css("display", "block")
}
</script>


<template>
  <VCard id="invoice-list">
    <!-- SECTION Table -->
    <VTable class="text-no-wrap invoice-list-table">
      <!-- 👉 Table head -->
      <thead class="text-uppercase sticky-header">
        <tr>
          <th
            id="th1_1"
            scope="col"
            width="400"
          >
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              @click="showColumn"
            >
              <VIcon
                :size="22"
                icon="tabler-arrow-big-left-line"
                class="text-primary"
              />
            </VBtn>
            Restaurar columnas
          </th>
          <th
            id="th2_1"
            scope="col"
            width="100"
          />
          <th
            id="th3_1"
            scope="col"
            class="text-center"
            width="150"
          >
            <VBtn
              icon
              variant="text"
              size="x-small"
              :style="{ backgroundColor: show_301 ? '#DB7E3A' : '' }"
              @click="hideColumn(3)"
            >
              <VIcon
                :size="22"
                icon="tabler-arrow-big-left-line"
                :class="{ 'text-white': show_302, 'text-primary': !show_302 }"
              />
            </VBtn>
          </th>
          <th
            id="th4_1"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              :style="{ backgroundColor: show_302 ? '#DB7E3A' : '' }"
              @click="hideColumn(4)"
            >
              <VIcon
                :size="22"
                icon="tabler-arrow-big-left-line"
                :class="{ 'text-white': show_302, 'text-primary': !show_302 }"
              />
            </VBtn>
          </th>
          <th
            id="th5_1"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VBtn
              icon
              variant="text"
              color="default"
              size="x-small"
              :style="{ backgroundColor: show_303 ? '#DB7E3A' : '' }"
              @click="hideColumn(5)"
            >
              <VIcon
                :size="22"
                icon="tabler-arrow-big-left-line"
                :class="{ 'text-white': show_303, 'text-primary': !show_303 }"
              />
            </VBtn>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th6_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30401 ? '#DB7E3A' : '' }"
                    @click="hideColumn(6)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30401, 'text-primary': !show_30401 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th7_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30402 ? '#DB7E3A' : '' }"
                    @click="hideColumn(7)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30402, 'text-primary': !show_30402 }"
                    />
                  </VBtn>
                </div>
              </th>
            </tr>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th8_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30501 ? '#DB7E3A' : '' }"
                    @click="hideColumn(8)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30501, 'text-primary': !show_30501 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th9_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30502 ? '#DB7E3A' : '' }"
                    @click="hideColumn(9)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30502, 'text-primary': !show_30502 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th10_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30503 ? '#DB7E3A' : '' }"
                    @click="hideColumn(10)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30503, 'text-primary': !show_30503 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th11_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30504 ? '#DB7E3A' : '' }"
                    @click="hideColumn(11)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30504, 'text-primary': !show_30504 }"
                    />
                  </VBtn>
                </div>
              </th>
            </tr>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th12_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30601 ? '#DB7E3A' : '' }"
                    @click="hideColumn(12)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30601, 'text-primary': !show_30601 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th13_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30602 ? '#DB7E3A' : '' }"
                    @click="hideColumn(13)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30602, 'text-primary': !show_30602 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th14_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30603 ? '#DB7E3A' : '' }"
                    @click="hideColumn(14)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30603, 'text-primary': !show_30603 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th15_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30604 ? '#DB7E3A' : '' }"
                    @click="hideColumn(15)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30604, 'text-primary': !show_30604 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th16_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30605 ? '#DB7E3A' : '' }"
                    @click="hideColumn(16)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30605, 'text-primary': !show_30605 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th17_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30606 ? '#DB7E3A' : '' }"
                    @click="hideColumn(17)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30606, 'text-primary': !show_30606 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th18_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30607 ? '#DB7E3A' : '' }"
                    @click="hideColumn(18)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30607, 'text-primary': !show_30607 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th19_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30701 ? '#DB7E3A' : '' }"
                    @click="hideColumn(19)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30701, 'text-primary': !show_30701 }"
                    />
                  </VBtn>
                </div>
              </th>
              <th
                id="th20_1"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    size="x-small"
                    :style="{ backgroundColor: show_30702 ? '#DB7E3A' : '' }"
                    @click="hideColumn(20)"
                  >
                    <VIcon
                      :size="22"
                      icon="tabler-arrow-big-left-line"
                      :class="{ 'text-white': show_30702, 'text-primary': !show_30702 }"
                    />
                  </VBtn>
                </div>
              </th>
            </tr>
          </th>
          <th
            id="th21_1"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VBtn
                icon
                variant="text"
                color="default"
                size="x-small"
                :style="{ backgroundColor: show_30 ? '#DB7E3A' : '' }"
                @click="hideColumn(21)"
              >
                <VIcon
                  :size="22"
                  icon="tabler-arrow-big-left-line"
                  :class="{ 'text-white': show_30, 'text-primary': !show_30 }"
                />
              </VBtn>
            </div>
          </th>
          <th
            id="th22_1"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VBtn
                icon
                variant="text"
                color="default"
                size="x-small"
                :style="{ backgroundColor: show_31 ? '#DB7E3A' : '' }"
                @click="hideColumn(22)"
              >
                <VIcon
                  :size="22"
                  icon="tabler-arrow-big-left-line"
                  :class="{ 'text-white': show_31, 'text-primary': !show_31 }"
                />
              </VBtn>
            </div>
          </th>
          <th
            id="th23_1"
            scope="col"
          />
        </tr>
        <!-- CABECERA 1 -->
        <tr>
          <th
            scope="col"
            width="400"
          >
            EN CIFRAS COMPLETAS US$
          </th>
          <th
            id="th2_2"
            scope="col"
            width="100"
          />
          <th
            id="th3_2"
            scope="col"
            class="text-center"
            width="150"
          >
            CAPITAL SOCIAL
          </th>
          <th
            id="th4_2"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <div style="max-width:300px; height:100px;white-space: initial;align-text:center;">
              APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN
            </div>
          </th>
          <th
            id="th5_2"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <div style="width:120px; height:100px;white-space: initial;align-text:center;">
              PRIMA EMISIÓN PRIMARIA DE ACCIONES
            </div>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th6_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVA LEGAL
                </div>
              </th>
              <th
                id="th7_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVAS FACULTATIVA Y ESTATUTARIA
                </div>
              </th>
            </tr>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th8_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA
                </div>
              </th>
              <th
                id="th9_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  PROPIEDADES,PLANTA Y EQUIPO
                </div>
              </th>
              <th
                id="th10_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  ACTIVOS INTANGIBLES
                </div>
              </th>
              <th
                id="th11_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  OTROS SUPERAVIT POR REVALUACION
                </div>
              </th>
            </tr>
          </th>

          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th12_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  GANANCIAS ACUMULADAS
                </div>
              </th>
              <th
                id="th13_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  (-) PÉRDIDAS ACUMULADAS
                </div>
              </th>
              <th
                id="th14_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF
                </div>
              </th>
              <th
                id="th15_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVA DE CAPITAL
                </div>
              </th>
              <th
                id="th16_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVA POR DONACIONES
                </div>
              </th>
              <th
                id="th17_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVA POR VALUACIÓN
                </div>
              </th>
              <th
                id="th18_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  RESERVA POR REVALUACIÓN DE INVERSIONES
                </div>
              </th>
              <th
                id="th19_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  GANANCIA NETA DEL PERIODO
                </div>
              </th>
              <th
                id="th20_2"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  (-) PÉRDIDA NETA DEL PERIODO
                </div>
              </th>
            </tr>
          </th>
          <th
            id="th21_2"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              TOTAL PATRIMONIO NETO ATRIBUIBLE A LOS PROPIETARIOS CONTROLADORA
            </div>
          </th>
          <th
            id="th22_2"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              PARTICIPACIONES NO CONTROLADORA
            </div>
          </th>
          <th
            id="th23_2"
            scope="col"
          >
            TOTAL PATRIMONIO
          </th>
        </tr>
        <!-- CABECERA 2 -->
        <tr>
          <th
            scope="col"
            width="400"
          />
          <th
            id="th2_3"
            scope="col"
            width="100"
          >
            GRUPO
          </th>
          <th
            id="th3_3"
            scope="col"
            class="text-center"
            width="150"
          >
            301
          </th>
          <th
            id="th4_3"
            scope="col"
            style="width:300px;text-align:center;"
          >
            302
          </th>
          <th
            id="th5_3"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            303
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th6_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30401
                </div>
              </th>
              <th
                id="th7_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30402
                </div>
              </th>
            </tr>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th8_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30501
                </div>
              </th>
              <th
                id="th9_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30502
                </div>
              </th>
              <th
                id="th10_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30503
                </div>
              </th>
              <th
                id="th11_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30504
                </div>
              </th>
            </tr>
          </th>
          <th
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <th
                id="th12_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30601
                </div>
              </th>
              <th
                id="th13_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30602
                </div>
              </th>
              <th
                id="th14_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30603
                </div>
              </th>
              <th
                id="th15_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30604
                </div>
              </th>
              <th
                id="th16_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30605
                </div>
              </th>
              <th
                id="th17_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30606
                </div>
              </th>
              <th
                id="th18_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30607
                </div>
              </th>
              <th
                id="th19_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30701
                </div>
              </th>
              <th
                id="th20_3"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  30702
                </div>
              </th>
            </tr>
          </th>
          <th
            id="th21_3"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              30
            </div>
          </th>
          <th
            id="th22_3"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              31
            </div>
          </th>
          <th
            id="th23_3"
            scope="col"
          />
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody
        class="sticky-row"
        @update:modelValue="val => updateActivePanel(val)"
      >
        <!-- 9901 | SALDO REEXPRESADO DEL PERIODO INMEDIATO ANTERIOR ANTERIOR | 4 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            SALDO REEXPRESADO DEL PERIODO <br>INMEDIATO ANTERIOR ANTERIOR
          </td>
          <td
            id="th2_4"
            scope="col"
            width="100"
          >
            9901
          </td>
          <td
            id="th3_4"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_9901_301"
              v-model="ecp[9901][301].value"
              label="9901_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            id="th4_4"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_9901_302"
              v-model="ecp[9901][302].value"
              label="9901_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            id="th5_4"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_9901_303"
              v-model="ecp[9901][303].value"
              label="9901_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30401"
                    v-model="ecp[9901][30401].value"
                    label="9901_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th7_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30402"
                    v-model="ecp[9901][30402].value"
                    label="9901_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30501"
                    v-model="ecp[9901][30501].value"
                    label="9901_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th9_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30502"
                    v-model="ecp[9901][30502].value"
                    label="9901_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th10_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30503"
                    v-model="ecp[9901][30503].value"
                    label="9901_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th11_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30504"
                    v-model="ecp[9901][30504].value"
                    label="9901_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30601"
                    v-model="ecp[9901][30601].value"
                    label="9901_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th13_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30602"
                    v-model="ecp[9901][30602].value"
                    label="9901_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th14_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30603"
                    v-model="ecp[9901][30603].value"
                    label="9901_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th15_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30604"
                    v-model="ecp[9901][30604].value"
                    label="9901_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th16_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30605"
                    v-model="ecp[9901][30605].value"
                    label="9901_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th17_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30606"
                    v-model="ecp[9901][30606].value"
                    label="9901_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th18_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30607"
                    v-model="ecp[9901][30607].value"
                    label="9901_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th19_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30701"
                    v-model="ecp[9901][30701].value"
                    label="9901_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th20_4"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9901_30702"
                    v-model="ecp[9901][30702].value"
                    label="9901_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_4"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_9901_30"
                v-model="ecp[9901][30].value"
                label="9901_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th22_4"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_9901_31"
                v-model="ecp[9901][31].value"
                label="9901_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th23_4"
            scope="col"
          >
            <VTextField
              id="ecp_9901_Total"
              v-model="ecp[9901]['Total'].value"
              label="9901_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
        </tr>
        <!-- 990101 | SALDO DEL PERÍODO INMEDIATO ANTERIOR | 5 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            SALDO DEL PERÍODO INMEDIATO ANTERIOR
          </td>
          <td
            id="th2_5"
            scope="col"
            width="100"
          >
            990101
          </td>
          <td
            id="th3_5"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990101_301"
              label="990101_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990101_301'] ?? (store.values.ecp['ecp_990101_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990101_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990101_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990101_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_5"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990101_302"
              label="990101_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990101_302'] ?? (store.values.ecp['ecp_990101_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990101_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990101_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990101_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_5"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990101_303"
              label="990101_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990101_303'] ?? (store.values.ecp['ecp_990101_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990101_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990101_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990101_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30401"
                    label="990101_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30401'] ?? (store.values.ecp['ecp_990101_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30402"
                    label="990101_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30402'] ?? (store.values.ecp['ecp_990101_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30501"
                    label="990101_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30501'] ?? (store.values.ecp['ecp_990101_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30502"
                    label="990101_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30502'] ?? (store.values.ecp['ecp_990101_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30503"
                    label="990101_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30503'] ?? (store.values.ecp['ecp_990101_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30504"
                    label="990101_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30504'] ?? (store.values.ecp['ecp_990101_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30601"
                    label="990101_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30601'] ?? (store.values.ecp['ecp_990101_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30602"
                    label="990101_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30602'] ?? (store.values.ecp['ecp_990101_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30603"
                    label="990101_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30603'] ?? (store.values.ecp['ecp_990101_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30604"
                    label="990101_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30604'] ?? (store.values.ecp['ecp_990101_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30605"
                    label="990101_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30605'] ?? (store.values.ecp['ecp_990101_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30606"
                    label="990101_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30606'] ?? (store.values.ecp['ecp_990101_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30607"
                    label="990101_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30607'] ?? (store.values.ecp['ecp_990101_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30701"
                    label="990101_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30701'] ?? (store.values.ecp['ecp_990101_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_5"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990101_30702"
                    label="990101_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990101_30702'] ?? (store.values.ecp['ecp_990101_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990101_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990101_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990101_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_5"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990101_30"
                label="990101_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990101_30'] ?? (store.values.ecp['ecp_990101_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990101_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990101_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990101_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_5"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990101_31"
                label="990101_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990101_31'] ?? (store.values.ecp['ecp_990101_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990101_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990101_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990101_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_5"
            scope="col"
          >
            <VTextField
              id="ecp_990101_Total"
              label="990101_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990101_Total'] ?? (store.values.ecp['ecp_990101_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990101_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990101_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990101_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990102 | CAMBIOS EN POLITICAS CONTABLES |6 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            CAMBIOS EN POLITICAS CONTABLES
          </td>
          <td
            id="th2_6"
            scope="col"
            width="100"
          >
            990102
          </td>
          <td
            id="th3_6"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990102_301"
              label="990102_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990102_301'] ?? (store.values.ecp['ecp_990102_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990102_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990102_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990102_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_6"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990102_302"
              label="990102_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990102_302'] ?? (store.values.ecp['ecp_990102_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990102_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990102_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990102_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_6"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990102_303"
              label="990102_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990102_303'] ?? (store.values.ecp['ecp_990102_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990102_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990102_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990102_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30401"
                    label="990102_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30401'] ?? (store.values.ecp['ecp_990102_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30402"
                    label="990102_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30402'] ?? (store.values.ecp['ecp_990102_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30501"
                    label="990102_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30501'] ?? (store.values.ecp['ecp_990102_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30502"
                    label="990102_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30502'] ?? (store.values.ecp['ecp_990102_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30503"
                    label="990102_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30503'] ?? (store.values.ecp['ecp_990102_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30504"
                    label="990102_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30504'] ?? (store.values.ecp['ecp_990102_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30601"
                    label="990102_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30601'] ?? (store.values.ecp['ecp_990102_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30602"
                    label="990102_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30602'] ?? (store.values.ecp['ecp_990102_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30603"
                    label="990102_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30603'] ?? (store.values.ecp['ecp_990102_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30604"
                    label="990102_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30604'] ?? (store.values.ecp['ecp_990102_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30605"
                    label="990102_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30605'] ?? (store.values.ecp['ecp_990102_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30606"
                    label="990102_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30606'] ?? (store.values.ecp['ecp_990102_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30607"
                    label="990102_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30607'] ?? (store.values.ecp['ecp_990102_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30701"
                    label="990102_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30701'] ?? (store.values.ecp['ecp_990102_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_6"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990102_30702"
                    label="990102_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990102_30702'] ?? (store.values.ecp['ecp_990102_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990102_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990102_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990102_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_6"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990102_30"
                label="990102_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990102_30'] ?? (store.values.ecp['ecp_990102_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990102_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990102_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990102_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_6"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990102_31"
                label="990102_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990102_31'] ?? (store.values.ecp['ecp_990102_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990102_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990102_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990102_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_6"
            scope="col"
          >
            <VTextField
              id="ecp_990102_Total"
              label="990102_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990102_Total'] ?? (store.values.ecp['ecp_990102_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990102_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990102_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990102_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990103 | CORRECCIÓN DE ERRORES | 7 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            CORRECCIÓN DE ERRORES:
          </td>
          <td
            id="th2_7"
            scope="col"
            width="100"
          >
            990103
          </td>
          <td
            id="th3_7"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990103_301"
              label="990103_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990103_301'] ?? (store.values.ecp['ecp_990103_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990103_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990103_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990103_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_7"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990103_302"
              label="990103_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990103_302'] ?? (store.values.ecp['ecp_990103_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990103_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990103_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990103_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_7"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990103_303"
              label="990103_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990103_303'] ?? (store.values.ecp['ecp_990103_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990103_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990103_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990103_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30401"
                    label="990103_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30401'] ?? (store.values.ecp['ecp_990103_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30402"
                    label="990103_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30402'] ?? (store.values.ecp['ecp_990103_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30501"
                    label="990103_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30501'] ?? (store.values.ecp['ecp_990103_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30502"
                    label="990103_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30502'] ?? (store.values.ecp['ecp_990103_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30503"
                    label="990103_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30503'] ?? (store.values.ecp['ecp_990103_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30504"
                    label="990103_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30504'] ?? (store.values.ecp['ecp_990103_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30601"
                    label="990103_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30601'] ?? (store.values.ecp['ecp_990103_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30602"
                    label="990103_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30602'] ?? (store.values.ecp['ecp_990103_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30603"
                    label="990103_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30603'] ?? (store.values.ecp['ecp_990103_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30604"
                    label="990103_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30604'] ?? (store.values.ecp['ecp_990103_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30605"
                    label="990103_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30605'] ?? (store.values.ecp['ecp_990103_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30606"
                    label="990103_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30606'] ?? (store.values.ecp['ecp_990103_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30607"
                    label="990103_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30607'] ?? (store.values.ecp['ecp_990103_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30701"
                    label="990103_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30701'] ?? (store.values.ecp['ecp_990103_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_7"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990103_30702"
                    label="990103_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990103_30702'] ?? (store.values.ecp['ecp_990103_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990103_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990103_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990103_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_7"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990103_30"
                label="990103_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990103_30'] ?? (store.values.ecp['ecp_990103_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990103_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990103_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990103_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_7"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990103_31"
                label="990103_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990103_31'] ?? (store.values.ecp['ecp_990103_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990103_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990103_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990103_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_7"
            scope="col"
          >
            <VTextField
              id="ecp_990103_Total"
              label="990103_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990103_Total'] ?? (store.values.ecp['ecp_990103_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990103_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990103_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990103_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 9902 | CAMBIOS DEL AÑO EN EL PATRIMONIO | 8 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            CAMBIOS DEL AÑO EN EL PATRIMONIO
          </td>
          <td
            id="th2_8"
            scope="col"
            width="100"
          >
            9902
          </td>
          <td
            id="th3_8"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_9902_301"
              v-model="ecp[9902][301].value"
              label="9902_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            id="th4_8"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_9902_302"
              v-model="ecp[9902][302].value"
              label="9902_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            id="th5_8"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_9902_303"
              v-model="ecp[9902][303].value"
              label="9902_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30401"
                    v-model="ecp[9902][30401].value"
                    label="9902_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th7_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30402"
                    v-model="ecp[9902][30402].value"
                    label="9902_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30501"
                    v-model="ecp[9902][30501].value"
                    label="9902_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th9_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30502"
                    v-model="ecp[9902][30502].value"
                    label="9902_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th10_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30503"
                    v-model="ecp[9902][30503].value"
                    label="9902_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th11_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30504"
                    v-model="ecp[9902][30504].value"
                    label="9902_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30601"
                    v-model="ecp[9902][30601].value"
                    label="9902_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th13_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30602"
                    v-model="ecp[9902][30602].value"
                    label="9902_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th14_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30603"
                    v-model="ecp[9902][30603].value"
                    label="9902_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th15_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30604"
                    v-model="ecp[9902][30604].value"
                    label="9902_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th16_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30605"
                    v-model="ecp[9902][30605].value"
                    label="9902_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th17_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30606"
                    v-model="ecp[9902][30606].value"
                    label="9902_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th18_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30607"
                    v-model="ecp[9902][30607].value"
                    label="9902_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th19_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30701"
                    v-model="ecp[9902][30701].value"
                    label="9902_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th20_8"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_9902_30702"
                    v-model="ecp[9902][30702].value"
                    label="9902_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_8"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_9902_30"
                v-model="ecp[9902][30].value"
                label="9902_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th22_8"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_9902_31"
                v-model="ecp[9902][31].value"
                label="9902_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th23_8"
            scope="col"
          >
            <VTextField
              id="ecp_9902_Total"
              v-model="ecp[9902]['Total'].value"
              label="9902_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
        </tr>
        <!-- 990201 | AUMENTO (DISMINUCIÓN) DE CAPITAL SOCIAL | 9 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            AUMENTO (DISMINUCIÓN) DE CAPITAL SOCIAL
          </td>
          <td
            id="th2_9"
            scope="col"
            width="100"
          >
            990201
          </td>
          <td
            id="th3_9"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990201_301"
              label="990201_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990201_301'] ?? (store.values.ecp['ecp_990201_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990201_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990201_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990201_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_9"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990201_302"
              label="990201_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990201_302'] ?? (store.values.ecp['ecp_990201_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990201_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990201_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990201_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_9"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990201_303"
              label="990201_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990201_303'] ?? (store.values.ecp['ecp_990201_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990201_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990201_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990201_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30401"
                    label="990201_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30401'] ?? (store.values.ecp['ecp_990201_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30402"
                    label="990201_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30402'] ?? (store.values.ecp['ecp_990201_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30501"
                    label="990201_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30501'] ?? (store.values.ecp['ecp_990201_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30502"
                    label="990201_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30502'] ?? (store.values.ecp['ecp_990201_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30503"
                    label="990201_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30503'] ?? (store.values.ecp['ecp_990201_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30504"
                    label="990201_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30504'] ?? (store.values.ecp['ecp_990201_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30601"
                    label="990201_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30601'] ?? (store.values.ecp['ecp_990201_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30602"
                    label="990201_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30602'] ?? (store.values.ecp['ecp_990201_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30603"
                    label="990201_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30603'] ?? (store.values.ecp['ecp_990201_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30604"
                    label="990201_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30604'] ?? (store.values.ecp['ecp_990201_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30605"
                    label="990201_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30605'] ?? (store.values.ecp['ecp_990201_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30606"
                    label="990201_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30606'] ?? (store.values.ecp['ecp_990201_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30607"
                    label="990201_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30607'] ?? (store.values.ecp['ecp_990201_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30701"
                    label="990201_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30701'] ?? (store.values.ecp['ecp_990201_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_9"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990201_30702"
                    label="990201_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990201_30702'] ?? (store.values.ecp['ecp_990201_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990201_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990201_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990201_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_9"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990201_30"
                label="990201_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990201_30'] ?? (store.values.ecp['ecp_990201_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990201_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990201_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990201_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_9"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990201_31"
                label="990201_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990201_31'] ?? (store.values.ecp['ecp_990201_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990201_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990201_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990201_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_9"
            scope="col"
          >
            <VTextField
              id="ecp_990201_Total"
              label="990201_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990201_Total'] ?? (store.values.ecp['ecp_990201_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990201_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990201_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990201_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990202 | APORTES PARA FUTURAS CAPITALIZACIONES | 10 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            APORTES PARA FUTURAS CAPITALIZACIONES
          </td>
          <td
            id="th2_10"
            scope="col"
            width="100"
          >
            990202
          </td>
          <td
            id="th3_10"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990202_301"
              label="990202_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990202_301'] ?? (store.values.ecp['ecp_990202_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990202_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990202_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990202_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_10"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990202_302"
              label="990202_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990202_302'] ?? (store.values.ecp['ecp_990202_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990202_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990202_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990202_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_10"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990202_303"
              label="990202_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990202_303'] ?? (store.values.ecp['ecp_990202_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990202_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990202_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990202_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30401"
                    label="990202_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30401'] ?? (store.values.ecp['ecp_990202_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30402"
                    label="990202_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30402'] ?? (store.values.ecp['ecp_990202_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30501"
                    label="990202_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30501'] ?? (store.values.ecp['ecp_990202_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30502"
                    label="990202_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30502'] ?? (store.values.ecp['ecp_990202_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30503"
                    label="990202_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30503'] ?? (store.values.ecp['ecp_990202_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30504"
                    label="990202_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30504'] ?? (store.values.ecp['ecp_990202_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30601"
                    label="990202_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30601'] ?? (store.values.ecp['ecp_990202_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30602"
                    label="990202_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30602'] ?? (store.values.ecp['ecp_990202_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30603"
                    label="990202_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30603'] ?? (store.values.ecp['ecp_990202_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30604"
                    label="990202_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30604'] ?? (store.values.ecp['ecp_990202_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30605"
                    label="990202_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30605'] ?? (store.values.ecp['ecp_990202_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30606"
                    label="990202_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30606'] ?? (store.values.ecp['ecp_990202_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30607"
                    label="990202_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30607'] ?? (store.values.ecp['ecp_990202_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30701"
                    label="990202_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30701'] ?? (store.values.ecp['ecp_990202_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_10"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990202_30702"
                    label="990202_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990202_30702'] ?? (store.values.ecp['ecp_990202_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990202_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990202_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990202_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_10"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990202_30"
                label="990202_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990202_30'] ?? (store.values.ecp['ecp_990202_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990202_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990202_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990202_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_10"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990202_31"
                label="990202_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990202_31'] ?? (store.values.ecp['ecp_990202_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990202_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990202_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990202_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_10"
            scope="col"
          >
            <VTextField
              id="ecp_990202_Total"
              label="990202_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990202_Total'] ?? (store.values.ecp['ecp_990202_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990202_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990202_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990202_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990203 | PRIMA POR EMISIÓN PRIMARIA DE ACCIONES | 11 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            PRIMA POR EMISIÓN PRIMARIA DE ACCIONES
          </td>
          <td
            id="th2_11"
            scope="col"
            width="100"
          >
            990203
          </td>
          <td
            id="th3_11"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990203_301"
              label="990203_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990203_301'] ?? (store.values.ecp['ecp_990203_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990203_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990203_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990203_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_11"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990203_302"
              label="990203_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990203_302'] ?? (store.values.ecp['ecp_990203_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990203_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990203_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990203_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_11"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990203_303"
              label="990203_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990203_303'] ?? (store.values.ecp['ecp_990203_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990203_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990203_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990203_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30401"
                    label="990203_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30401'] ?? (store.values.ecp['ecp_990203_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30402"
                    label="990203_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30402'] ?? (store.values.ecp['ecp_990203_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30501"
                    label="990203_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30501'] ?? (store.values.ecp['ecp_990203_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30502"
                    label="990203_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30502'] ?? (store.values.ecp['ecp_990203_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30503"
                    label="990203_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30503'] ?? (store.values.ecp['ecp_990203_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30504"
                    label="990203_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30504'] ?? (store.values.ecp['ecp_990203_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30601"
                    label="990203_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30601'] ?? (store.values.ecp['ecp_990203_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30602"
                    label="990203_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30602'] ?? (store.values.ecp['ecp_990203_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30603"
                    label="990203_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30603'] ?? (store.values.ecp['ecp_990203_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30604"
                    label="990203_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30604'] ?? (store.values.ecp['ecp_990203_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30605"
                    label="990203_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30605'] ?? (store.values.ecp['ecp_990203_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30606"
                    label="990203_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30606'] ?? (store.values.ecp['ecp_990203_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30607"
                    label="990203_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30607'] ?? (store.values.ecp['ecp_990203_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30701"
                    label="990203_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30701'] ?? (store.values.ecp['ecp_990203_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_11"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990203_30702"
                    label="990203_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990203_30702'] ?? (store.values.ecp['ecp_990203_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990203_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990203_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990203_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_11"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990203_30"
                label="990203_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990203_30'] ?? (store.values.ecp['ecp_990203_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990203_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990203_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990203_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_11"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990203_31"
                label="990203_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990203_31'] ?? (store.values.ecp['ecp_990203_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990203_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990203_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990203_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_11"
            scope="col"
          >
            <VTextField
              id="ecp_990203_Total"
              label="990203_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990203_Total'] ?? (store.values.ecp['ecp_990203_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990203_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990203_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990203_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990204 | DIVIDENDOS | 12 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            DIVIDENDOS
          </td>
          <td
            id="th2_12"
            scope="col"
            width="100"
          >
            990204
          </td>
          <td
            id="th3_12"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990204_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990204_301'] ?? (store.values.ecp['ecp_990204_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990204_301', val, 'ecp', store.values.ecp)"
              @blur="() => commitNow('ecp_990204_301', 'ecp', store.values.ecp)"
              @keydown.enter.prevent="() => commitNow('ecp_990204_301', 'ecp', store.values.ecp)"
            />
          </td>
          <td
            id="th4_12"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990204_302"
              label="990204_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990204_302'] ?? (store.values.ecp['ecp_990204_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990204_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990204_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990204_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_12"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990204_303"
              label="990204_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990204_303'] ?? (store.values.ecp['ecp_990204_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990204_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990204_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990204_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30401"
                    label="990204_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30401'] ?? (store.values.ecp['ecp_990204_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30402"
                    label="990204_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30402'] ?? (store.values.ecp['ecp_990204_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30501"
                    label="990204_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30501'] ?? (store.values.ecp['ecp_990204_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30502"
                    label="990204_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30502'] ?? (store.values.ecp['ecp_990204_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30503"
                    label="990204_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30503'] ?? (store.values.ecp['ecp_990204_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30504"
                    label="990204_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30504'] ?? (store.values.ecp['ecp_990204_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30601"
                    label="990204_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30601'] ?? (store.values.ecp['ecp_990204_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30602"
                    label="990204_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30602'] ?? (store.values.ecp['ecp_990204_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30603"
                    label="990204_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30603'] ?? (store.values.ecp['ecp_990204_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30604"
                    label="990204_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30604'] ?? (store.values.ecp['ecp_990204_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30605"
                    label="990204_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30605'] ?? (store.values.ecp['ecp_990204_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30606"
                    label="990204_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30606'] ?? (store.values.ecp['ecp_990204_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30607"
                    label="990204_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30607'] ?? (store.values.ecp['ecp_990204_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30701"
                    label="990204_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30701'] ?? (store.values.ecp['ecp_990204_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_12"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990204_30702"
                    label="990204_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990204_30702'] ?? (store.values.ecp['ecp_990204_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990204_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990204_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990204_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_12"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990204_30"
                label="990204_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990204_30'] ?? (store.values.ecp['ecp_990204_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990204_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990204_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990204_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_12"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990204_31"
                label="990204_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990204_31'] ?? (store.values.ecp['ecp_990204_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990204_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990204_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990204_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_12"
            scope="col"
          >
            <VTextField
              id="ecp_990204_Total"
              label="990204_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990204_Total'] ?? (store.values.ecp['ecp_990204_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990204_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990204_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990204_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990205 | TRANSFERENCIA DE RESULTADOS <br/>A OTRAS CUENTAS PATRIMONIALES | 13 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            TRANSFERENCIA DE RESULTADOS <br>A OTRAS CUENTAS PATRIMONIALES
          </td>
          <td
            id="th2_13"
            scope="col"
            width="100"
          >
            990205
          </td>
          <td
            id="th3_13"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990205_301"
              label="990205_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990205_301'] ?? (store.values.ecp['ecp_990205_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990205_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990205_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990205_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_13"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990205_302"
              label="990205_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990205_302'] ?? (store.values.ecp['ecp_990205_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990205_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990205_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990205_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_13"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990205_303"
              label="990205_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990205_303'] ?? (store.values.ecp['ecp_990205_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990205_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990205_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990205_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30401"
                    label="990205_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30401'] ?? (store.values.ecp['ecp_990205_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30402"
                    label="990205_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30402'] ?? (store.values.ecp['ecp_990205_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30501"
                    label="990205_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30501'] ?? (store.values.ecp['ecp_990205_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30502"
                    label="990205_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30502'] ?? (store.values.ecp['ecp_990205_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30503"
                    label="990205_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30503'] ?? (store.values.ecp['ecp_990205_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30504"
                    label="990205_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30504'] ?? (store.values.ecp['ecp_990205_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30601"
                    label="990205_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30601'] ?? (store.values.ecp['ecp_990205_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30602"
                    label="990205_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30602'] ?? (store.values.ecp['ecp_990205_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30603"
                    label="990205_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30603'] ?? (store.values.ecp['ecp_990205_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30604"
                    label="990205_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30604'] ?? (store.values.ecp['ecp_990205_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30605"
                    label="990205_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30605'] ?? (store.values.ecp['ecp_990205_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30606"
                    label="990205_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30606'] ?? (store.values.ecp['ecp_990205_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30607"
                    label="990205_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30607'] ?? (store.values.ecp['ecp_990205_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30701"
                    label="990205_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30701'] ?? (store.values.ecp['ecp_990205_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_13"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990205_30702"
                    label="990205_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990205_30702'] ?? (store.values.ecp['ecp_990205_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990205_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990205_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990205_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_13"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990205_30"
                label="990205_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990205_30'] ?? (store.values.ecp['ecp_990205_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990205_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990205_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990205_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_13"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990205_31"
                label="990205_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990205_31'] ?? (store.values.ecp['ecp_990205_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990205_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990205_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990205_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_13"
            scope="col"
          >
            <VTextField
              id="ecp_990205_Total"
              label="990205_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990205_Total'] ?? (store.values.ecp['ecp_990205_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990205_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990205_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990205_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990206 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA | 14 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            REALIZACIÓN DE LA RESERVA POR <br>VALUACIÓN DE ACTIVOS FINANCIEROS <br>DISPONIBLES PARA LA VENTA
          </td>
          <td
            id="th2_14"
            scope="col"
            width="100"
          >
            990206
          </td>
          <td
            id="th3_14"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990206_301"
              label="990206_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990206_301'] ?? (store.values.ecp['ecp_990206_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990206_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990206_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990206_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_14"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990206_302"
              label="990206_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990206_302'] ?? (store.values.ecp['ecp_990206_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990206_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990206_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990206_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_14"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990206_303"
              label="990206_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990206_303'] ?? (store.values.ecp['ecp_990206_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990206_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990206_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990206_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30401"
                    label="990206_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30401'] ?? (store.values.ecp['ecp_990206_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30402"
                    label="990206_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30402'] ?? (store.values.ecp['ecp_990206_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30501"
                    label="990206_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30501'] ?? (store.values.ecp['ecp_990206_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30502"
                    label="990206_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30502'] ?? (store.values.ecp['ecp_990206_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30503"
                    label="990206_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30503'] ?? (store.values.ecp['ecp_990206_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30504"
                    label="990206_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30504'] ?? (store.values.ecp['ecp_990206_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30601"
                    label="990206_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30601'] ?? (store.values.ecp['ecp_990206_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30602"
                    label="990206_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30602'] ?? (store.values.ecp['ecp_990206_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30603"
                    label="990206_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30603'] ?? (store.values.ecp['ecp_990206_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30604"
                    label="990206_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30604'] ?? (store.values.ecp['ecp_990206_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30605"
                    label="990206_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30605'] ?? (store.values.ecp['ecp_990206_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30606"
                    label="990206_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30606'] ?? (store.values.ecp['ecp_990206_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30607"
                    label="990206_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30607'] ?? (store.values.ecp['ecp_990206_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30701"
                    label="990206_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30701'] ?? (store.values.ecp['ecp_990206_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_14"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990206_30702"
                    label="990206_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990206_30702'] ?? (store.values.ecp['ecp_990206_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990206_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990206_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990206_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_14"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990206_30"
                label="990206_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990206_30'] ?? (store.values.ecp['ecp_990206_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990206_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990206_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990206_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_14"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990206_31"
                label="990206_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990206_31'] ?? (store.values.ecp['ecp_990206_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990206_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990206_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990206_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_14"
            scope="col"
          >
            <VTextField
              id="ecp_990206_Total"
              label="990206_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990206_Total'] ?? (store.values.ecp['ecp_990206_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990206_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990206_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990206_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990207 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO | 15 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            REALIZACIÓN DE LA RESERVA POR <br>VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO
          </td>
          <td
            id="th2_15"
            scope="col"
            width="100"
          >
            990207
          </td>
          <td
            id="th3_15"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990207_301"
              label="990207_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990207_301'] ?? (store.values.ecp['ecp_990207_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990207_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990207_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990207_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_15"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990207_302"
              label="990207_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990207_302'] ?? (store.values.ecp['ecp_990207_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990207_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990207_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990207_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_15"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990207_303"
              label="990207_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990207_303'] ?? (store.values.ecp['ecp_990207_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990207_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990207_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990207_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30401"
                    label="990207_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30401'] ?? (store.values.ecp['ecp_990207_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30402"
                    label="990207_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30402'] ?? (store.values.ecp['ecp_990207_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30501"
                    label="990207_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30501'] ?? (store.values.ecp['ecp_990207_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30502"
                    label="990207_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30502'] ?? (store.values.ecp['ecp_990207_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30503"
                    label="990207_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30503'] ?? (store.values.ecp['ecp_990207_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30504"
                    label="990207_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30504'] ?? (store.values.ecp['ecp_990207_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30601"
                    label="990207_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30601'] ?? (store.values.ecp['ecp_990207_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30602"
                    label="990207_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30602'] ?? (store.values.ecp['ecp_990207_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30603"
                    label="990207_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30603'] ?? (store.values.ecp['ecp_990207_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30604"
                    label="990207_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30604'] ?? (store.values.ecp['ecp_990207_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30605"
                    label="990207_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30605'] ?? (store.values.ecp['ecp_990207_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30606"
                    label="990207_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30606'] ?? (store.values.ecp['ecp_990207_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30607"
                    label="990207_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30607'] ?? (store.values.ecp['ecp_990207_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30701"
                    label="990207_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30701'] ?? (store.values.ecp['ecp_990207_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_15"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990207_30702"
                    label="990207_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990207_30702'] ?? (store.values.ecp['ecp_990207_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990207_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990207_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990207_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_15"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990207_30"
                label="990207_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990207_30'] ?? (store.values.ecp['ecp_990207_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990207_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990207_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990207_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_15"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990207_31"
                label="990207_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990207_31'] ?? (store.values.ecp['ecp_990207_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990207_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990207_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990207_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_15"
            scope="col"
          >
            <VTextField
              id="ecp_990207_Total"
              label="990207_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990207_Total'] ?? (store.values.ecp['ecp_990207_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990207_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990207_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990207_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990208 | REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS INTANGIBLES | 16 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            REALIZACIÓN DE LA RESERVA POR <br>VALUACIÓN DE ACTIVOS INTANGIBLES
          </td>
          <td
            id="th2_16"
            scope="col"
            width="100"
          >
            990208
          </td>
          <td
            id="th3_16"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990208_301"
              label="990208_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990208_301'] ?? (store.values.ecp['ecp_990208_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990208_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990208_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990208_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_16"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990208_302"
              label="990208_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990208_302'] ?? (store.values.ecp['ecp_990208_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990208_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990208_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990208_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_16"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990208_303"
              label="990208_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990208_303'] ?? (store.values.ecp['ecp_990208_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990208_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990208_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990208_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30401"
                    label="990208_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30401'] ?? (store.values.ecp['ecp_990208_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30402"
                    label="990208_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30402'] ?? (store.values.ecp['ecp_990208_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30501"
                    label="990208_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30501'] ?? (store.values.ecp['ecp_990208_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30502"
                    label="990208_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30502'] ?? (store.values.ecp['ecp_990208_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30503"
                    label="990208_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30503'] ?? (store.values.ecp['ecp_990208_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30504"
                    label="990208_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30504'] ?? (store.values.ecp['ecp_990208_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30601"
                    label="990208_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30601'] ?? (store.values.ecp['ecp_990208_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30602"
                    label="990208_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30602'] ?? (store.values.ecp['ecp_990208_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30603"
                    label="990208_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30603'] ?? (store.values.ecp['ecp_990208_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30604"
                    label="990208_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30604'] ?? (store.values.ecp['ecp_990208_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30605"
                    label="990208_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30605'] ?? (store.values.ecp['ecp_990208_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30606"
                    label="990208_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30606'] ?? (store.values.ecp['ecp_990208_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30607"
                    label="990208_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30607'] ?? (store.values.ecp['ecp_990208_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30701"
                    label="990208_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30701'] ?? (store.values.ecp['ecp_990208_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_16"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990208_30702"
                    label="990208_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990208_30702'] ?? (store.values.ecp['ecp_990208_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990208_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990208_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990208_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_16"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990208_30"
                label="990208_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990208_30'] ?? (store.values.ecp['ecp_990208_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990208_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990208_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990208_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_16"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990208_31"
                label="990208_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990208_31'] ?? (store.values.ecp['ecp_990208_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990208_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990208_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990208_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_16"
            scope="col"
          >
            <VTextField
              id="ecp_990208_Total"
              label="990208_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990208_Total'] ?? (store.values.ecp['ecp_990208_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990208_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990208_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990208_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990209 | OTROS CAMBIOS (DETALLAR) | 17 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            OTROS CAMBIOS (DETALLAR)
          </td>
          <td
            id="th2_17"
            scope="col"
            width="100"
          >
            990209
          </td>
          <td
            id="th3_17"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990209_301"
              label="990209_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990209_301'] ?? (store.values.ecp['ecp_990209_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990209_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990209_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990209_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_17"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990209_302"
              label="990209_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990209_302'] ?? (store.values.ecp['ecp_990209_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990209_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990209_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990209_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_17"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990209_303"
              label="990209_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990209_303'] ?? (store.values.ecp['ecp_990209_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990209_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990209_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990209_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30401"
                    label="990209_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30401'] ?? (store.values.ecp['ecp_990209_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30402"
                    label="990209_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30402'] ?? (store.values.ecp['ecp_990209_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30501"
                    label="990209_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30501'] ?? (store.values.ecp['ecp_990209_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30502"
                    label="990209_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30502'] ?? (store.values.ecp['ecp_990209_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30503"
                    label="990209_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30503'] ?? (store.values.ecp['ecp_990209_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30504"
                    label="990209_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30504'] ?? (store.values.ecp['ecp_990209_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30601"
                    label="990209_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30601'] ?? (store.values.ecp['ecp_990209_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30602"
                    label="990209_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30602'] ?? (store.values.ecp['ecp_990209_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30603"
                    label="990209_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30603'] ?? (store.values.ecp['ecp_990209_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30604"
                    label="990209_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30604'] ?? (store.values.ecp['ecp_990209_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30605"
                    label="990209_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30605'] ?? (store.values.ecp['ecp_990209_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30606"
                    label="990209_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30606'] ?? (store.values.ecp['ecp_990209_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30607"
                    label="990209_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30607'] ?? (store.values.ecp['ecp_990209_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30701"
                    label="990209_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30701'] ?? (store.values.ecp['ecp_990209_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_17"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990209_30702"
                    label="990209_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990209_30702'] ?? (store.values.ecp['ecp_990209_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990209_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990209_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990209_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_17"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990209_30"
                label="990209_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990209_30'] ?? (store.values.ecp['ecp_990209_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990209_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990209_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990209_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_17"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990209_31"
                label="990209_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990209_31'] ?? (store.values.ecp['ecp_990209_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990209_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990209_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990209_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_17"
            scope="col"
          >
            <VTextField
              id="ecp_990209_Total"
              label="990209_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990209_Total'] ?? (store.values.ecp['ecp_990209_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990209_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990209_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990209_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 990210 | RESULTADO INTEGRAL TOTAL DEL AÑO<br/> (GANANCIA O PÉRDIDA DEL EJERCICIO) | 20 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            RESULTADO INTEGRAL TOTAL DEL AÑO<br> (GANANCIA O PÉRDIDA DEL EJERCICIO)
          </td>
          <td
            id="th2_18"
            scope="col"
            width="100"
          >
            990210
          </td>
          <td
            id="th3_18"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_990210_301"
              label="990210_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990210_301'] ?? (store.values.ecp['ecp_990210_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990210_301', val, 'ecp')"
              @blur="() => commitNow('ecp_990210_301', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990210_301', 'ecp', store)"
            />
          </td>
          <td
            id="th4_18"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990210_302"
              label="990210_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990210_302'] ?? (store.values.ecp['ecp_990210_302']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990210_302', val, 'ecp')"
              @blur="() => commitNow('ecp_990210_302', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990210_302', 'ecp', store)"
            />
          </td>
          <td
            id="th5_18"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_990210_303"
              label="990210_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990210_303'] ?? (store.values.ecp['ecp_990210_303']?.valor ?? '')"
              @update:model-value="val => onType('ecp_990210_303', val, 'ecp')"
              @blur="() => commitNow('ecp_990210_303', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990210_303', 'ecp', store)"
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30401"
                    label="990210_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30401'] ?? (store.values.ecp['ecp_990210_30401']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30401', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30401', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30401', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th7_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30402"
                    label="990210_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30402'] ?? (store.values.ecp['ecp_990210_30402']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30402', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30402', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30402', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30501"
                    label="990210_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30501'] ?? (store.values.ecp['ecp_990210_30501']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30501', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30501', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30501', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th9_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30502"
                    label="990210_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30502'] ?? (store.values.ecp['ecp_990210_30502']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30502', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30502', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30502', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th10_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30503"
                    label="990210_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30503'] ?? (store.values.ecp['ecp_990210_30503']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30503', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30503', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30503', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th11_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30504"
                    label="990210_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30504'] ?? (store.values.ecp['ecp_990210_30504']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30504', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30504', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30504', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30601"
                    label="990210_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30601'] ?? (store.values.ecp['ecp_990210_30601']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30601', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30601', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30601', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th13_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30602"
                    label="990210_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30602'] ?? (store.values.ecp['ecp_990210_30602']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30602', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30602', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30602', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th14_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30603"
                    label="990210_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30603'] ?? (store.values.ecp['ecp_990210_30603']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30603', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30603', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30603', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th15_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30604"
                    label="990210_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30604'] ?? (store.values.ecp['ecp_990210_30604']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30604', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30604', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30604', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th16_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30605"
                    label="990210_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30605'] ?? (store.values.ecp['ecp_990210_30605']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30605', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30605', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30605', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th17_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30606"
                    label="990210_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30606'] ?? (store.values.ecp['ecp_990210_30606']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30606', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30606', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30606', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th18_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30607"
                    label="990210_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    :model-value="draft['ecp_990210_30607'] ?? (store.values.ecp['ecp_990210_30607']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30607', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30607', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30607', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th19_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30701"
                    label="990210_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    disabled
                    hide-details
                    :model-value="draft['ecp_990210_30701'] ?? (store.values.ecp['ecp_990210_30701']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30701', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30701', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30701', 'ecp', store)"
                  />
                </div>
              </td>
              <td
                id="th20_18"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_990210_30702"
                    label="990210_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    disabled
                    hide-details
                    :model-value="draft['ecp_990210_30702'] ?? (store.values.ecp['ecp_990210_30702']?.valor ?? '')"
                    @update:model-value="val => onType('ecp_990210_30702', val, 'ecp')"
                    @blur="() => commitNow('ecp_990210_30702', 'ecp', store)"
                    @keydown.enter.prevent="() => commitNow('ecp_990210_30702', 'ecp', store)"
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_18"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990210_30"
                label="990210_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
                :model-value="draft['ecp_990210_30'] ?? (store.values.ecp['ecp_990210_30']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990210_30', val, 'ecp')"
                @blur="() => commitNow('ecp_990210_30', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990210_30', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th22_18"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_990210_31"
                label="990210_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                :model-value="draft['ecp_990210_31'] ?? (store.values.ecp['ecp_990210_31']?.valor ?? '')"
                @update:model-value="val => onType('ecp_990210_31', val, 'ecp')"
                @blur="() => commitNow('ecp_990210_31', 'ecp', store)"
                @keydown.enter.prevent="() => commitNow('ecp_990210_31', 'ecp', store)"
              />
            </div>
          </td>
          <td
            id="th23_18"
            scope="col"
          >
            <VTextField
              id="ecp_990210_Total"
              label="990210_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              :model-value="draft['ecp_990210_Total'] ?? (store.values.ecp['ecp_990210_Total']?.valor ?? '')"
              disabled
              @update:model-value="val => onType('ecp_990210_Total', val, 'ecp')"
              @blur="() => commitNow('ecp_990210_Total', 'ecp', store)"
              @keydown.enter.prevent="() => commitNow('ecp_990210_Total', 'ecp', store)"
            />
          </td>
        </tr>
        <!-- 99 | SALDO AL FINAL DEL PERIODO | 21 -->
        <tr
          style="height: 3.75rem;"
          class="sticky-row"
        >
          <td
            scope="col"
            width="400"
          >
            SALDO AL FINAL DEL PERIODO
          </td>
          <td
            id="th2_20"
            scope="col"
            width="100"
          >
            99
          </td>
          <td
            id="th3_19"
            scope="col"
            class="text-center"
            width="150"
          >
            <VTextField
              id="ecp_99_301"
              v-model="ecp[99][301].value"
              label="99_301"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
              :model-value="draft['ecp_99_301'] ?? (store.values.ecp['ecp_99_301']?.valor ?? '')"
              @update:model-value="val => onType('ecp_99_301', val, 'ecp')"
            />
          </td>
          <td
            id="th4_19"
            scope="col"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_99_302"
              v-model="ecp[99][302].value"
              label="99_302"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            id="th5_19"
            scope="col"
            class="text-center"
            style="width:300px;text-align:center;"
          >
            <VTextField
              id="ecp_99_303"
              v-model="ecp[99][303].value"
              label="99_303"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th6_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30401"
                    v-model="ecp[99][30401].value"
                    label="99_30401"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th7_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30402"
                    v-model="ecp[99][30402].value"
                    label="99_30402"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th8_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30501"
                    v-model="ecp[99][30501].value"
                    label="99_30501"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th9_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30502"
                    v-model="ecp[99][30502].value"
                    label="99_30502"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th10_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30503"
                    v-model="ecp[99][30503].value"
                    label="99_30503"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th11_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30504"
                    v-model="ecp[99][30504].value"
                    label="99_30504"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            scope="col"
            class="text-center"
            style="text-align:center;"
          >
            <tr>
              <td
                id="th12_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30601"
                    v-model="ecp[99][30601].value"
                    label="99_30601"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th13_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30602"
                    v-model="ecp[99][30602].value"
                    label="99_30602"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th14_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30603"
                    v-model="ecp[99][30603].value"
                    label="99_30603"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th15_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30604"
                    v-model="ecp[99][30604].value"
                    label="99_30604"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th16_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30605"
                    v-model="ecp[99][30605].value"
                    label="99_30605"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th17_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30606"
                    v-model="ecp[99][30606].value"
                    label="99_30606"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th18_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30607"
                    v-model="ecp[99][30607].value"
                    label="99_30607"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th19_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30701"
                    v-model="ecp[99][30701].value"
                    label="99_30701"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
              <td
                id="th20_19"
                style="min-width:150px;"
              >
                <div
                  scope="col"
                  class="text-center"
                  style="max-width:140px; white-space: initial;align-text:center;"
                >
                  <VTextField
                    id="ecp_99_30702"
                    v-model="ecp[99][30702].value"
                    label="99_30702"
                    type="text"
                    inputmode="numeric"
                    density="compact"
                    variant="outlined"
                    hide-details
                    disabled
                  />
                </div>
              </td>
            </tr>
          </td>
          <td
            id="th21_19"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_99_30"
                v-model="ecp[99][30].value"
                label="99_30"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th22_19"
            style="min-width:150px;"
          >
            <div
              scope="col"
              class="text-center"
              style="max-width:140px; white-space: initial;align-text:center;"
            >
              <VTextField
                id="ecp_99_31"
                v-model="ecp[99][31].value"
                label="99_31"
                type="text"
                inputmode="numeric"
                density="compact"
                variant="outlined"
                hide-details
                disabled
              />
            </div>
          </td>
          <td
            id="th23_19"
            scope="col"
          >
            <VTextField
              id="ecp_99_Total"
              v-model="ecp[99]['Total'].value"
              label="99_Total"
              type="text"
              inputmode="numeric"
              density="compact"
              variant="outlined"
              hide-details
              disabled
            />
          </td>
        </tr>
      </tbody>
    </VTable>
    <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-filter {
    inline-size: 12rem;
  }

  .sticky-header {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 10;
  }

  .sticky-row {
    position: sticky;
    top: 4.5rem;
    background-color: white;
    z-index: 9;
  }

  .table-body-container {
    max-height: 300px; /* Altura fija de 300px */
    overflow-y: auto; /* Habilita el scroll vertical */
    width: auto;
  }

}
</style>
