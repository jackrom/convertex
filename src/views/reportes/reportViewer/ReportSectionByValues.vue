<script setup>
import { computed, ref, watch } from "vue"
import { getNombreCuenta, parseNombreCampo } from "@/utils/plan-cuentas"
import { useReportViewerStore } from "@/@store/reportViewer.store"

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
  // Array de registros de valores (esfvalues, erivalues, etc.)
  values: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  currentTab: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(["update:activePanel", "change-value"])

const store = useReportViewerStore()

const activePanel = ref(null)

const roundTo = (n, decimals = 2) => {
  const num = Number(n)
  if (!Number.isFinite(num)) return 0

  const p = 10 ** decimals

  return Math.round((num + Number.EPSILON) * p) / p
}

const updateActivePanel = newPanel => {
  if (props.currentTab === 'esf') {
    if (newPanel === 0) newPanel = 'Activos Corrientes'
    if (newPanel === 1) newPanel = 'Activos No Corrientes'
    if (newPanel === 2) newPanel = 'Pasivos Corrientes'
    if (newPanel === 3) newPanel = 'Pasivos No Corrientes'
    if (newPanel === 4) newPanel = 'Patrimonio'
  }

  if (props.currentTab === 'eri') {
    if (newPanel === 0) newPanel = 'Ingresos'
    if (newPanel === 1) newPanel = 'Costos'
    if (newPanel === 2) newPanel = 'Otros Ingresos'
    if (newPanel === 3) newPanel = 'Gastos De Ventas'
    if (newPanel === 4) newPanel = 'Gastos Administrativos'
    if (newPanel === 5) newPanel = 'Gastos Financieros'
    if (newPanel === 6) newPanel = 'Otros Gastos'
    if (newPanel === 7) newPanel = 'Resultados'
    if (newPanel === 8) newPanel = 'Operaciones Discontinuadas'
    if (newPanel === 9) newPanel = 'Otros Resultados Integrales'
    if (newPanel === 10) newPanel = 'Participacion Controladora'
  }

  if (props.currentTab === 'ecp') {
    newPanel = 'Estados En El Cambio de Patrimonio'
  }

  if (props.currentTab === 'efe') {
    if (newPanel === 0) newPanel = 'Actividades de Operacion'
    if (newPanel === 1) newPanel = 'Actividades de Inversion'
    if (newPanel === 2) newPanel = 'Actividades de Financiamiento'
    if (newPanel === 3) newPanel = 'Conciliacion'
  }

  emit("update:activePanel", newPanel) // Emitimos el valor actualizado
}


// ---------------------------------------------
// Tipo lógico de plan y de store
// ---------------------------------------------
const planTipo = computed(() => (props.tipo === "efe" ? "efe" : props.tipo))
const storeTipo = computed(() => (props.tipo === "efe" ? "efemd" : props.tipo))

// Solo ESF y ERI muestran "Periodo anterior"
const hasPeriodoAnterior = computed(() => props.tipo === "esf" || props.tipo === "eri")

// Panel activo (accordion)
// const activePanel = ref(null)

// ---------------------------------------------
// Acceso directo a valores del store (para reglas cruzadas)
// ---------------------------------------------
const esfStoreValues = computed(
  () => store.current?.values?.esfvalues ?? [],
)

const eriStoreValues = computed(
  () => store.current?.values?.erivalues ?? [],
)

const efeStoreValues = computed(
  () => store.current?.values?.efemdvalues ?? [],
)

// ---------------------------------------------
// Helpers básicos
// ---------------------------------------------
const toNumber = value => {
  const n = Number(value)

  return Number.isFinite(n) ? n : 0
}

const compareCodigo = (a, b) => {
  const sa = String(a ?? "")
  const sb = String(b ?? "")

  return sa.localeCompare(sb)
}

// ---------------------------------------------
// Campos que siempre deben ser negativos
// ---------------------------------------------
const NEGATIVE_FIELDS = new Set(
  [
    // ESF
    "esf_1010313_ant",
    "esf_101020401_ant",
    "esf_101020402_ant",
    "esf_101020403_ant",
    "esf_1010207_ant",
    "esf_1020112_ant",
    "esf_1020113_ant",
    "esf_102011402_ant",
    "esf_102011403_ant",
    "esf_1020203_ant",
    "esf_1020204_ant",
    "esf_1020305_ant",
    "esf_1020306_ant",
    "esf_1020405_ant",
    "esf_1020406_ant",
    "esf_1020602_ant",
    "esf_1020604_ant",
    "esf_1020606_ant",
    "esf_1020701_ant",
    "esf_1020702_ant",
    "esf_1020810_ant",

    "esf_1010313",
    "esf_101020401",
    "esf_101020402",
    "esf_101020403",
    "esf_1010207",
    "esf_1020112",
    "esf_1020113",
    "esf_102011402",
    "esf_102011403",
    "esf_1020203",
    "esf_1020204",
    "esf_1020305",
    "esf_1020306",
    "esf_1020405",
    "esf_1020406",
    "esf_1020602",
    "esf_1020604",
    "esf_1020606",
    "esf_1020701",
    "esf_1020702",
    "esf_1020810",

    "esf_30102_ant",
    "esf_30602_ant",
    "esf_30702_ant",
    "esf_30102",
    "esf_30602",
    "esf_30702",

    // ERI
    "eri_5010104_ant",
    "eri_5010108_ant",
    "eri_5010110_ant",
    "eri_5010112_ant",
    "eri_5010112",
    "eri_5010104",
    "eri_5010108",
    "eri_5010110",

    "eri_40112",
    "eri_40113",
    "eri_40114",
    "eri_40115",
    "eri_40116",

    "eri_40112_ant",
    "eri_40113_ant",
    "eri_40114_ant",
    "eri_40115_ant",
    "eri_40116_ant",

    "eri_601_ant",
    "eri_603_ant",
    "eri_605_ant",
    "eri_601",
    "eri_603",
    "eri_605",

    "eri_703_ant",
    "eri_705_ant",
    "eri_703",
    "eri_705",

    "eri_80006_ant",
    "eri_80006",

    // EFE (efemd)
    "efe_md_950303",
    "efe_md_950305",
    "efe_md_950306",
    "efe_md_950308",
    "efe_md_950202",
    "efe_md_950203",
    "efe_md_950205",
    "efe_md_950207",
    "efe_md_950209",
    "efe_md_950211",
    "efe_md_950213",
    "efe_md_950215",
    "efe_md_950217",
    "efe_md_95010201",
    "efe_md_95010202",
    "efe_md_95010203",
    "efe_md_95010204",
    "efe_md_95010205",
    "efe_md_950103",
    "efe_md_950105",
    "efe_md_950107",
  ].map(s => s.toLowerCase()),
)

const mustBeNegative = nombrecampo =>
  NEGATIVE_FIELDS.has(String(nombrecampo).toLowerCase())

const normalizeForField = (nombrecampo, numericVal) => {
  if (!mustBeNegative(nombrecampo)) return numericVal
  if (!numericVal) return 0

  return numericVal < 0 ? numericVal : -Math.abs(numericVal)
}

// ---------------------------------------------
// Grupos (orden de etiquetas por tipo)
// ---------------------------------------------
const GROUP_LABEL_ORDER = {
  esf: [
    "ACTIVOS CORRIENTES",
    "ACTIVOS NO CORRIENTES",
    "PASIVOS CORRIENTES",
    "PASIVOS NO CORRIENTES",
    "PATRIMONIO",
  ],
  eri: [
    "INGRESOS",
    "COSTOS",
    "OTROS INGRESOS",
    "GASTOS DE VENTAS",
    "GASTOS ADMINISTRATIVOS",
    "GASTOS FINANCIEROS",
    "OTROS GASTOS",
    "RESULTADOS",
    "OPERACIONES DISCONTINUADAS",
    "OTROS RESULTADOS INTEGRALES",
    "PARTICIPACION CONTROLADORA",
  ],
  efe: [
    "ACTIVIDADES DE OPERACION",
    "ACTIVIDADES DE INVERSION",
    "ACTIVIDADES DE FINANCIAMIENTO",
    "CONCILIACION",
  ],
}

const getGroupOrderIndex = (tipoPlan, label) => {
  const list = GROUP_LABEL_ORDER[tipoPlan] || []
  const upperLabel = String(label).toUpperCase()

  for (let i = 0; i < list.length; i += 1) {
    if (upperLabel.startsWith(list[i])) return i
  }

  return Number.MAX_SAFE_INTEGER
}

const normalizeTablaLabel = raw => {
  if (!raw) return ""

  if (raw === "ACTIVOSCORRIENTES") raw = "ACTIVOS CORRIENTES"
  if (raw === "ACTIVOSNOCORRIENTES") raw = "ACTIVOS NO CORRIENTES"
  if (raw === "PASIVOSCORRIENTES") raw = "PASIVOS CORRIENTES"
  if (raw === "PASIVOSNOCORRIENTES") raw = "PASIVOS NO CORRIENTES"
  if (raw === "OTROSGASTOS") raw = "OTROS GASTOS"
  if (raw === "GASTOSADMINISTRATIVOS") raw = "GASTOS ADMINISTRATIVOS"
  if (raw === "GASTOSDEVENTAS") raw = "GASTOS DE VENTAS"
  if (raw === "GASTOSFINANCIEROS") raw = "GASTOS FINANCIEROS"
  if (raw === "OPERACIONESDISCONTINUADAS") raw = "OPERACIONES DISCONTINUADAS"
  if (raw === "OTROSINGRESOS") raw = "OTROS INGRESOS"
  if (raw === "OTROSRESULTADOSINTEGRALES") raw = "OTROS RESULTADOS INTEGRALES"
  if (raw === "PARTICIPACIONCONTROLADORA") raw = "PARTICIPACION CONTROLADORA"
  if (raw === "ACTIVIDADESDEINVERSION") raw = "ACTIVIDADES DE INVERSION"
  if (raw === "ACTIVIDADESDEOPERACION") raw = "ACTIVIDADES DE OPERACION"
  if (raw === "ACTIVIDADESDEFINANCIAMIENTO") raw = "ACTIVIDADES DE FINANCIAMIENTO"

  return String(raw)
    .replace(/_/g, " ")
    .trim()
    .toUpperCase()
}

// 🔑 Fusionar p.ej. "ACTIVOSCORRIENTES" y "ACTIVOSCORRIENTESANT"
const getLogicalTablaKey = rawTabla => {
  if (!rawTabla) {
    return { key: "OTROS", base: "OTROS" }
  }

  const upper = String(rawTabla).toUpperCase().trim()

  if (upper.endsWith("_ANT")) {
    const base = upper.slice(0, -4)

    return { key: base, base }
  }

  if (upper.endsWith("ANT")) {
    const base = upper.slice(0, -3)

    return { key: base, base }
  }

  return { key: upper, base: upper }
}

const safeParseNombreCampo = (tPlan, nombrecampo) => {
  // 1) intenta el parser actual
  const parsed = parseNombreCampo(tPlan, nombrecampo)
  if (parsed) return parsed

  // 2) fallback robusto: <plan>_<digits>[_ant]
  // soporta eri_600, eri_601, eri_5020401_ant, etc.
  const raw = String(nombrecampo ?? "").trim()
  const lower = raw.toLowerCase()

  const isAnterior = lower.endsWith("_ant")
  const withoutAnt = isAnterior ? raw.slice(0, -4) : raw

  const m = withoutAnt.match(/^([a-z]+)_([0-9]+)$/i)
  if (!m) return null

  const plan = m[1].toLowerCase()
  const codigo = m[2]

  // validación: que coincida con el plan que estamos procesando
  // (efe_md_... no entra aquí porque tu tPlan para efe es "efe" y nombrecampo viene como "efe_md_...")
  if (plan !== String(tPlan).toLowerCase()) return null

  return { codigo, isAnterior }
}

// ---------------------------------------------
// Agrupar por tablaorigen y calcular totales jerárquicos
// ---------------------------------------------
// longitudes que consideramos como niveles de padre (3,5,7,9,11,13 dígitos)
const PARENT_LENGTHS = [5, 7, 9, 11, 13]

const PARENT_LENGTHS_EFE = [4, 6, 8, 10, 12, 14]

// ---------------------------------------------
// Agrupar por tablaorigen y calcular totales jerárquicos
// ---------------------------------------------
const groups = computed(() => {
  const tPlan = planTipo.value // 'esf' | 'eri' | 'efe' | 'ecp'
  const items = Array.isArray(props.values) ? props.values : []

  const groupedByTabla = {}

  // Paso 1: Construir la estructura básica por tablaorigen / código
  for (const row of items) {
    if (!row || !row.nombrecampo) continue
    const parsed = safeParseNombreCampo(tPlan, row.nombrecampo)
    if (!parsed) continue
    const { codigo, isAnterior } = parsed

    const { key: logicalTablaKey, base } = getLogicalTablaKey(row.tablaorigen || "OTROS")

    if (!groupedByTabla[logicalTablaKey]) {
      groupedByTabla[logicalTablaKey] = {
        key: logicalTablaKey,
        label: normalizeTablaLabel(base),
        rowsByCodigo: {},
      }
    }

    const group = groupedByTabla[logicalTablaKey]
    if (!group.rowsByCodigo[codigo]) {
      group.rowsByCodigo[codigo] = {
        tipo: storeTipo.value,
        codigo,
        nombreCuenta: getNombreCuenta(tPlan, codigo) || codigo,
        tablaorigen: base,
        actual: null,
        anterior: null,
        sumActual: 0,
        sumAnterior: 0,
        hasChildren: false,
      }
    }

    const logicalRow = group.rowsByCodigo[codigo]

    if (isAnterior) {
      if (tPlan !== "ecp") logicalRow.anterior = row
    } else {
      logicalRow.actual = row
    }
  }

  // Paso 2: Crear filas padre "sintéticas" si no existen (para 3,5,7,9 dígitos)
  Object.values(groupedByTabla).forEach(group => {
    const existingCodes = Object.keys(group.rowsByCodigo)
    const extraRows = {}

    for (const code of existingCodes) {
      const codeStr = String(code)

      if (tPlan === "efe") {
        for (const len of PARENT_LENGTHS_EFE) {
          if (len >= codeStr.length) continue

          const parentCode = codeStr.slice(0, len)

          if (group.rowsByCodigo[parentCode] || extraRows[parentCode]) continue

          extraRows[parentCode] = {
            tipo: storeTipo.value,
            codigo: parentCode,
            nombreCuenta: getNombreCuenta(tPlan, parentCode) || parentCode,
            tablaorigen: group.rowsByCodigo[code].tablaorigen,
            actual: null,
            anterior: null,
            sumActual: 0,
            sumAnterior: 0,
            hasChildren: false,
          }
        }
      } else {
        for (const len of PARENT_LENGTHS) {
          if (len >= codeStr.length) continue

          const parentCode = codeStr.slice(0, len)

          if (group.rowsByCodigo[parentCode] || extraRows[parentCode]) continue

          extraRows[parentCode] = {
            tipo: storeTipo.value,
            codigo: parentCode,
            nombreCuenta: getNombreCuenta(tPlan, parentCode) || parentCode,
            tablaorigen: group.rowsByCodigo[code].tablaorigen,
            actual: null,
            anterior: null,
            sumActual: 0,
            sumAnterior: 0,
            hasChildren: false,
          }
        }
      }
    }

    Object.assign(group.rowsByCodigo, extraRows)
  })

  // Paso 3: Calcular totales jerárquicos y ordenar
  const result = Object.values(groupedByTabla)
    .map(group => {
      const rows = Object.values(group.rowsByCodigo)

      // 3.1 Resetear flags de hijos
      for (const r of rows) {
        r.hasChildren = false
      }

      const sortedByLengthDesc = [...rows].sort((a, b) => {
        const lenDiff = String(b.codigo).length - String(a.codigo).length
        if (lenDiff !== 0) return lenDiff

        return compareCodigo(a.codigo, b.codigo)
      })

      // 3.2 Detectar quién es padre (tiene hijos por prefijo)
      for (const r of sortedByLengthDesc) {
        const code = String(r.codigo)

        for (let len = code.length - 1; len > 0; len--) {
          const parentCode = code.slice(0, len)
          const parent = group.rowsByCodigo[parentCode]
          if (parent) {
            parent.hasChildren = true
            break
          }
        }
      }

      // 3.3 Inicializar totales:
      //     - Si tiene hijos → 0 (solo sumará hijos)
      //     - Si no tiene hijos → usa su valor propio
      for (const r of rows) {
        if (r.hasChildren) {
          r.sumActual = 0
          r.sumAnterior = 0
        } else {
          r.sumActual = roundTo(toNumber(r.actual?.valor), 2)
          r.sumAnterior = roundTo(toNumber(r.anterior?.valor), 2)
        }
      }

      // 3.4 Propagar sumas de abajo hacia arriba
      for (const r of sortedByLengthDesc) {
        const code = String(r.codigo)

        for (let len = code.length - 1; len > 0; len--) {
          const parentCode = code.slice(0, len)
          const parent = group.rowsByCodigo[parentCode]
          if (parent) {
            parent.sumActual = roundTo(parent.sumActual + r.sumActual, 2)
            parent.sumAnterior = roundTo(parent.sumAnterior + r.sumAnterior, 2)
            break
          }
        }
      }

      // 3.5 Ordenar los grupos según `GROUP_LABEL_ORDER`
      const orderIndex = getGroupOrderIndex(tPlan, group.label)

      group.orderIndex = orderIndex  // Añadimos el índice de orden a cada grupo

      const sortedRows = rows.sort((a, b) =>
        compareCodigo(a.codigo, b.codigo),
      )

      return {
        key: group.key,
        label: group.label,
        orderIndex: group.orderIndex, // Usamos el índice de orden aquí
        rows: sortedRows,
      }
    })
    .sort((a, b) => a.orderIndex - b.orderIndex) // Ordenamos los grupos por el `orderIndex`

  return result
})


// ---------------------------------------------
// Campos ERI que deben ser solo lectura
// ---------------------------------------------
const READONLY_ERI_ACTUAL = new Set(
  [
    // mapeos ESF -> ERI
    "eri_5010110",
    "eri_5010101",
    "eri_5010104",
    "eri_5010105",
    "eri_5010108",
    "eri_5010109",
    "eri_5010111",
    "eri_5010112",

    // fórmulas internas
    "eri_502",
    "eri_600",
    "eri_602",
    "eri_604",
    "eri_607",
    "eri_702",
    "eri_704",
    "eri_706",
    "eri_707",
    "eri_801",
    "eri_402",
  ].map(s => s.toLowerCase()),
)

const READONLY_ERI_ANTERIOR = new Set(
  [
    "eri_5010110_ant",
    "eri_5010104_ant",
    "eri_5010108_ant",
    "eri_5010112_ant",
    "eri_801_ant",
    "eri_402_ant",
    "eri_600_ant",
    "eri_602_ant",
    "eri_604_ant",
    "eri_607_ant",
  ].map(s => s.toLowerCase()),
)

const FORCE_FIELD_VALUE = new Set(
  [
    "eri_501",
    "eri_501_ant",
    "eri_502",
    "eri_502_ant",
    "eri_401",
    "eri_401_ant",
    "eri_402",
    "eri_402_ant",
    "eri_403",
    "eri_403_ant",
    "eri_600",
    "eri_602",
    "eri_604",
    "eri_607",
    "eri_600_ant",
    "eri_602_ant",
    "eri_604_ant",
    "eri_607_ant",
  ].map(s => s.toLowerCase()),
)

const isReadOnlyField = (row, which) => {
  if (row.hasChildren) return true
  if (planTipo.value !== "eri") return row.hasChildren

  let nombrecampo = null

  if (which === "actual") {
    nombrecampo = row.actual?.nombrecampo
  } else {
    nombrecampo = row.anterior?.nombrecampo
  }

  if (!nombrecampo) return row.hasChildren

  if (which === "actual") {
    return READONLY_ERI_ACTUAL.has(nombrecampo.toLowerCase())
  }

  return READONLY_ERI_ANTERIOR.has(nombrecampo.toLowerCase())
}

// ---------------------------------------------
// Helpers de visualización de valor
// ---------------------------------------------
const getDisplayValue = (field, sumValue, hasChildren) => {
  // ✅ si el campo existe y es uno de los calculados, mostrar SIEMPRE el valor del campo
  if (field?.nombrecampo && FORCE_FIELD_VALUE.has(String(field.nombrecampo).toLowerCase())) {
    const raw = toNumber(field.valor)

    return roundTo(normalizeForField(field.nombrecampo, raw), 2)
  }

  // comportamiento normal
  if (hasChildren) return roundTo(sumValue, 2)
  if (!field) return null

  const raw = toNumber(field.valor)

  return roundTo(normalizeForField(field.nombrecampo, raw), 2)
}


// ---------------------------------------------
// Sincronizar ESF -> ERI (mapeos directos)
// ---------------------------------------------
const ESF_TO_ERI_MAPPINGS = [
  { from: "esf_1010302_ant", to: "eri_5010110_ant" },
  { from: "esf_1010302", to: "eri_5010110" },

  { from: "esf_1010306_ant", to: "eri_5010101" },

  { from: "esf_1010306_ant", to: "eri_5010104_ant" },
  { from: "esf_1010306", to: "eri_5010104" },

  { from: "esf_1010301_ant", to: "eri_5010105" },

  { from: "esf_1010301", to: "eri_5010108" },
  { from: "esf_1010301_ant", to: "eri_5010108_ant" },

  { from: "esf_1010302_ant", to: "eri_5010109" },

  { from: "esf_1010305_ant", to: "eri_5010111" },
  { from: "esf_1010305_ant", to: "eri_5010112_ant" },
  { from: "esf_1010305", to: "eri_5010112" },
]

// 👇 Importante: esta función ya no depende de planTipo,
// siempre escribe en ERI.
const syncEsfToEri = () => {
  const esfList = esfStoreValues.value
  const eriList = eriStoreValues.value

  const findByName = (list, name) =>
    list.find(r => String(r.nombrecampo).toLowerCase() === name.toLowerCase())

  for (const { from, to } of ESF_TO_ERI_MAPPINGS) {
    const fromRow = findByName(esfList, from)
    if (!fromRow) continue

    const sourceNum = toNumber(fromRow.valor)
    const normalized = normalizeForField(to, sourceNum)

    const targetRow = findByName(eriList, to)
    const currentNum = targetRow ? toNumber(targetRow.valor) : 0

    if (currentNum === normalized) continue

    emit("change-value", {
      tipo: "eri",
      id: to,
      valor: String(normalized),
      row: targetRow ?? { nombrecampo: to },
      meta: { linkedFrom: from },
    })
  }
}


// =============================================
// Totales jerárquicos ERI por código (padres)
// =============================================
const ERI_PARENT_LENGTHS = [3, 5, 7, 9, 11, 13]

const buildHierTotalsByCodigo = (tPlan, list) => {
  const rowsByCodigo = {}

  // 1) cargar valores reales desde store
  for (const row of (Array.isArray(list) ? list : [])) {
    if (!row?.nombrecampo) continue
    const parsed = safeParseNombreCampo(tPlan, row.nombrecampo)
    if (!parsed) continue

    const { codigo, isAnterior } = parsed
    const codeStr = String(codigo)

    if (!rowsByCodigo[codeStr]) {
      rowsByCodigo[codeStr] = {
        codigo: codeStr,
        actualVal: 0,
        anteriorVal: 0,
        sumActual: 0,
        sumAnterior: 0,
        hasChildren: false,
      }
    }

    const node = rowsByCodigo[codeStr]
    const v = roundTo(toNumber(row.valor), 2)

    if (isAnterior) node.anteriorVal = v
    else node.actualVal = v
  }

  // 2) crear padres sintéticos si faltan
  const existingCodes = Object.keys(rowsByCodigo)
  const extra = {}

  for (const code of existingCodes) {
    for (const len of ERI_PARENT_LENGTHS) {
      if (len >= code.length) continue
      const parentCode = code.slice(0, len)
      if (rowsByCodigo[parentCode] || extra[parentCode]) continue

      extra[parentCode] = {
        codigo: parentCode,
        actualVal: 0,
        anteriorVal: 0,
        sumActual: 0,
        sumAnterior: 0,
        hasChildren: false,
      }
    }
  }

  Object.assign(rowsByCodigo, extra)

  const rows = Object.values(rowsByCodigo)

  // 3) marcar padres por prefijo
  for (const r of rows) r.hasChildren = false

  const sortedByLengthDesc = [...rows].sort((a, b) => {
    const lenDiff = b.codigo.length - a.codigo.length
    if (lenDiff !== 0) return lenDiff

    return a.codigo.localeCompare(b.codigo)
  })

  for (const r of sortedByLengthDesc) {
    const code = r.codigo
    for (let len = code.length - 1; len > 0; len--) {
      const parentCode = code.slice(0, len)
      const parent = rowsByCodigo[parentCode]
      if (parent) {
        parent.hasChildren = true
        break
      }
    }
  }

  // 4) inicializar sumas: hojas = valor propio, padres = 0
  for (const r of rows) {
    if (r.hasChildren) {
      r.sumActual = 0
      r.sumAnterior = 0
    } else {
      r.sumActual = roundTo(r.actualVal, 2)
      r.sumAnterior = roundTo(r.anteriorVal, 2)
    }
  }

  // 5) propagar sumas hacia arriba
  for (const r of sortedByLengthDesc) {
    const code = r.codigo
    for (let len = code.length - 1; len > 0; len--) {
      const parentCode = code.slice(0, len)
      const parent = rowsByCodigo[parentCode]
      if (parent) {
        parent.sumActual = roundTo(parent.sumActual + r.sumActual, 2)
        parent.sumAnterior = roundTo(parent.sumAnterior + r.sumAnterior, 2)
        break
      }
    }
  }

  return rowsByCodigo
}

// ---------------------------------------------
// Reglas internas de ERI (fórmulas)
// ---------------------------------------------
const recomputeFormulas = planTipo => {
  // =============================================
  // Sumar por prefijo (ERI) separando actual/ant
  // sin depender de parseNombreCampo
  // =============================================
  const sumLeavesByPrefix = (list, prefix, which /* 'actual' | 'anterior' */) => {
    const p = String(prefix)
    let sum = 0

    for (const r of (Array.isArray(list) ? list : [])) {
      const name = String(r?.nombrecampo ?? "").toLowerCase()
      if (!name.startsWith(`eri_${p}`)) continue

      const isAnt = name.endsWith("_ant")
      if (which === "anterior" && !isAnt) continue
      if (which === "actual" && isAnt) continue

      // Evitar sumar el propio padre si existe (eri_50201, eri_50202...)
      // Queremos sumar solo hojas: algo más largo que el prefijo
      // Ej: para 50201 sumamos 5020101..., no 50201
      const codePart = name
        .replace(/^eri_/, "")
        .replace(/_ant$/, "") // quita _ant
        .split("_")[0]

      if (codePart === p) continue // excluye el padre exacto

      sum += Number(r?.valor) || 0
    }

    // redondeo opcional si ya usas roundTo
    return roundTo(sum, 2)
  }


  // Si el tipo de plan no es "eri" ni "efe", no hacemos nada
  if (planTipo !== "eri" && planTipo !== "efe") return;

  const list = planTipo === "efe" ? efeStoreValues.value : eriStoreValues.value;

  const totalsByCodigo = buildHierTotalsByCodigo(planTipo, list);

  const getSumActual = (codigo) => totalsByCodigo[String(codigo)]?.sumActual ?? 0;
  const getSumAnterior = (codigo) => totalsByCodigo[String(codigo)]?.sumAnterior ?? 0;

  const findByName = (name) => list.find((r) => String(r.nombrecampo).toLowerCase() === name.toLowerCase());

  const get = (name) => {
    const row = findByName(name);
    return row ? toNumber(row.valor) : 0;
  };

  const setIfChanged = (nombrecampo, numericVal) => {
    const targetRow = findByName(nombrecampo);
    const normalized = normalizeForField(nombrecampo, numericVal);
    const current = targetRow ? toNumber(targetRow.valor) : 0;
    const tStore = storeTipo.value;

    if (current === normalized) return;

    emit("change-value", {
      tipo: tStore, // 'esf' | 'eri' | 'efe' | 'efemd'
      id: nombrecampo,
      valor: String(normalized),
      row: targetRow ?? { nombrecampo },
      meta: {
        autoCalc: true,
        codigo: targetRow?.codigo,
        tablaorigen: targetRow?.tablaorigen,
      },
    });
  };

  const v402 = getSumActual("401") - getSumActual("501")

  setIfChanged("eri_402", v402)

  const v402_ant = getSumAnterior("401") - getSumAnterior("501")

  setIfChanged("eri_402_ant", v402_ant)

  console.log('v402_ant', v402_ant)

  // eri_502 = eri_50201 + eri_50202 + eri_50203 + eri_50204
  const v50201 =
    get("eri_5020101") +
    get("eri_5020102") +
    get("eri_5020103") +
    get("eri_5020104") +
    get("eri_5020105") +
    get("eri_5020106") +
    get("eri_5020107") +
    get("eri_5020108") +
    get("eri_5020109") +
    get("eri_5020110") +
    get("eri_5020111") +
    get("eri_5020112") +
    get("eri_5020113") +
    get("eri_5020114") +
    get("eri_5020115") +
    get("eri_5020116") +
    get("eri_5020117") +
    get("eri_5020118") +
    get("eri_5020119") +
    get("eri_502012001") + get("eri_502012002") + get("eri_502012003") +
    get("eri_502012101") + get("eri_502012102") +
    get("eri_502012201") + get("eri_502012202") + get("eri_502012203") + get("eri_502012204") + get("eri_502012205") + get("eri_502012206") + get("eri_502012207") +
    get("eri_502012301") + get("eri_502012302") + get("eri_502012303") +
    get("eri_5020124") +
    get("eri_5020125") +
    get("eri_5020126") +
    get("eri_5020127") +
    get("eri_5020128")


  const v50202 =
    get("eri_5020201") +
    get("eri_5020202") +
    get("eri_5020203") +
    get("eri_5020204") +
    get("eri_5020205") +
    get("eri_5020206") +
    get("eri_5020207") +
    get("eri_5020208") +
    get("eri_5020209") +
    get("eri_5020210") +
    get("eri_5020211") +
    get("eri_5020212") +
    get("eri_5020213") +
    get("eri_5020214") +
    get("eri_5020215") +
    get("eri_5020216") +
    get("eri_5020217") +
    get("eri_5020218") +
    get("eri_5020219") +
    get("eri_5020220") +
    get("eri_502022101") + get("eri_502022102") + get("eri_502022103") +
    get("eri_502022201") + get("eri_502022202") +
    get("eri_502022301") + get("eri_502022302") + get("eri_502022303") + get("eri_502022304") + get("eri_502022305") + get("eri_502022306") + get("eri_502022307") +
    get("eri_502022401") + get("eri_502022402") + get("eri_502022403") +
    get("eri_5020225") +
    get("eri_5020226") +
    get("eri_5020227") +
    get("eri_5020228") +
    get("eri_5020229")


  const v50203 =
    get("eri_502030101") + get("eri_502030102") + get("eri_502030103") + get("eri_502030104") +
    get("eri_50203020101") +
    get("eri_50203020105") +
    get("eri_50203020103") +
    get("eri_50203020104") +
    get("eri_50203020106") +
    get("eri_502030301") + get("eri_502030302") + get("eri_502030303") + get("eri_502030304") + get("eri_502030305") + get("eri_502030306") + get("eri_502030307") + get("eri_502030308") +
    get("eri_502030401") + get("eri_502030402") + get("eri_502030403") + get("eri_502030404") +
    get("eri_502030501") + get("eri_502030502") + get("eri_502030503") + get("eri_502030504") +
    get("eri_5020306") +
    get("eri_5020307") +
    get("eri_5020308") +
    get("eri_5020309") +
    get("eri_5020310") +
    get("eri_5020311") +
    get("eri_5020312")


  const v50204 = get("eri_5020401") + get("eri_5020402")

  // ✅ eri_502 = suma de los 4 bloques (usando hojas)
  const v502 =
    sumLeavesByPrefix(eriList, "50201", "actual") +
    sumLeavesByPrefix(eriList, "50202", "actual") +
    sumLeavesByPrefix(eriList, "50203", "actual") +
    sumLeavesByPrefix(eriList, "50204", "actual")

  setIfChanged("eri_502", v502)

  console.log("v502", v502)

  // ✅ eri_502_ant = igual pero anterior
  const v502_ant =
    sumLeavesByPrefix(eriList, "50201", "anterior") +
    sumLeavesByPrefix(eriList, "50202", "anterior") +
    sumLeavesByPrefix(eriList, "50203", "anterior") +
    sumLeavesByPrefix(eriList, "50204", "anterior")

  setIfChanged("eri_502_ant", v502_ant)

  console.log("v502_ant", v502_ant)


  // eri_600 = ((eri_401 - eri_501) - (eri_50201 + ...)) + (eri_403)
  const v401 =
    get("eri_40101") +
    sumLeavesByPrefix(eriList, "40102", "actual") +
    get("eri_40103") +
    get("eri_40104") +
    get("eri_40105") +
    sumLeavesByPrefix(eriList, "40106", "actual") +
    get("eri_40107") +
    get("eri_40108") +
    sumLeavesByPrefix(eriList, "40109", "actual") +
    sumLeavesByPrefix(eriList, "40110", "actual") +
    get("eri_40112") +
    get("eri_40113") +
    get("eri_40114") +
    get("eri_40115") +
    get("eri_40116")

  setIfChanged("eri_401", v401)

  const v501 =
    sumLeavesByPrefix(eriList, "50101", "actual") +
    sumLeavesByPrefix(eriList, "50102", "actual") +
    sumLeavesByPrefix(eriList, "50103", "actual") +
    sumLeavesByPrefix(eriList, "50104", "actual") +
    sumLeavesByPrefix(eriList, "50105", "actual")

  setIfChanged("eri_501", v501)

  const v403 = get("eri_40301") + get("eri_40302") + get("eri_40303")

  setIfChanged("eri_403", v403)

  const v600 = (((v401 - v501) - (v50201 + v50202 + v50203 + v50204)) + v403)

  setIfChanged("eri_600", v600)

  const v401_ant =
    get("eri_40101_ant") +
    sumLeavesByPrefix(eriList, "40102", "anterior") +
    get("eri_40103_ant") +
    get("eri_40104_ant") +
    get("eri_40105_ant") +
    sumLeavesByPrefix(eriList, "40106", "anterior") +
    get("eri_40107_ant") +
    get("eri_40108_ant") +
    sumLeavesByPrefix(eriList, "40109", "anterior") +
    sumLeavesByPrefix(eriList, "40110", "anterior") +
    get("eri_40112_ant") +
    get("eri_40113_ant") +
    get("eri_40114_ant") +
    get("eri_40115_ant") +
    get("eri_40116_ant")

  setIfChanged("eri_401_ant", v401_ant)

  const v501_ant =
    sumLeavesByPrefix(eriList, "50101", "anterior") +
    sumLeavesByPrefix(eriList, "50102", "anterior") +
    sumLeavesByPrefix(eriList, "50103", "anterior") +
    sumLeavesByPrefix(eriList, "50104", "anterior") +
    sumLeavesByPrefix(eriList, "50105", "anterior")

  setIfChanged("eri_501_ant", v501_ant)

  const v403_ant = get("eri_40301_ant") + get("eri_40302_ant") + get("eri_40303_ant")

  setIfChanged("eri_403_ant", v403_ant)

  const v50201_ant =
    get("eri_5020101_ant") +
    get("eri_5020102_ant") +
    get("eri_5020103_ant") +
    get("eri_5020104_ant") +
    get("eri_5020105_ant") +
    get("eri_5020106_ant") +
    get("eri_5020107_ant") +
    get("eri_5020108_ant") +
    get("eri_5020109_ant") +
    get("eri_5020110_ant") +
    get("eri_5020111_ant") +
    get("eri_5020112_ant") +
    get("eri_5020113_ant") +
    get("eri_5020114_ant") +
    get("eri_5020115_ant") +
    get("eri_5020116_ant") +
    get("eri_5020117_ant") +
    get("eri_5020118_ant") +
    get("eri_5020119_ant") +
    get("eri_502012001_ant") + get("eri_502012002_ant") + get("eri_502012003_ant") +
    get("eri_502012101_ant") + get("eri_502012102_ant") +
    get("eri_502012201_ant") + get("eri_502012202_ant") + get("eri_502012203_ant") + get("eri_502012204_ant") + get("eri_502012205_ant") + get("eri_502012206_ant") + get("eri_502012207_ant") +
    get("eri_502012301_ant") + get("eri_502012302_ant") + get("eri_502012303_ant") +
    get("eri_5020124_ant") +
    get("eri_5020125_ant") +
    get("eri_5020126_ant") +
    get("eri_5020127_ant") +
    get("eri_5020128_ant")


  const v50202_ant =
    get("eri_5020201_ant") +
    get("eri_5020202_ant") +
    get("eri_5020203_ant") +
    get("eri_5020204_ant") +
    get("eri_5020205_ant") +
    get("eri_5020206_ant") +
    get("eri_5020207_ant") +
    get("eri_5020208_ant") +
    get("eri_5020209_ant") +
    get("eri_5020210_ant") +
    get("eri_5020211_ant") +
    get("eri_5020212_ant") +
    get("eri_5020213_ant") +
    get("eri_5020214_ant") +
    get("eri_5020215_ant") +
    get("eri_5020216_ant") +
    get("eri_5020217_ant") +
    get("eri_5020218_ant") +
    get("eri_5020219_ant") +
    get("eri_5020220_ant") +
    get("eri_502022101_ant") + get("eri_502022102_ant") + get("eri_502022103_ant") +
    get("eri_502022201_ant") + get("eri_502022202_ant") +
    get("eri_502022301_ant") + get("eri_502022302_ant") + get("eri_502022303_ant") + get("eri_502022304_ant") + get("eri_502022305_ant") + get("eri_502022306_ant") + get("eri_502022307_ant") +
    get("eri_502022401_ant") + get("eri_502022402_ant") + get("eri_502022403_ant") +
    get("eri_5020225_ant") +
    get("eri_5020226_ant") +
    get("eri_5020227_ant") +
    get("eri_5020228_ant") +
    get("eri_5020229_ant")

  const v50203_ant =
    get("eri_502030101_ant") + get("eri_502030102_ant") + get("eri_502030103_ant") + get("eri_502030104_ant") +
    get("eri_50203020101_ant") +
    get("eri_50203020105_ant") +
    get("eri_50203020103_ant") +
    get("eri_50203020104_ant") +
    get("eri_50203020106_ant") +
    get("eri_502030301_ant") + get("eri_502030302_ant") + get("eri_502030303_ant") + get("eri_502030304_ant") + get("eri_502030305_ant") + get("eri_502030306_ant") + get("eri_502030307_ant") + get("eri_502030308_ant") +
    get("eri_502030401_ant") + get("eri_502030402_ant") + get("eri_502030403_ant") + get("eri_502030404_ant") +
    get("eri_502030501_ant") + get("eri_502030502_ant") + get("eri_502030503_ant") + get("eri_502030504_ant") +
    get("eri_5020306_ant") +
    get("eri_5020307_ant") +
    get("eri_5020308_ant") +
    get("eri_5020309_ant") +
    get("eri_5020310_ant") +
    get("eri_5020311_ant") +
    get("eri_5020312_ant")

  const v50204_ant = get("eri_5020401_ant") + get("eri_5020402_ant")

  const v600_ant = (((v401_ant - v501_ant) - (v50201_ant + v50202_ant + v50203_ant + v50204_ant)) + v403_ant)

  // (((31 - 17) - (39 + 40 + 32 + 2)) + 3)
  setIfChanged("eri_600_ant", v600_ant)

  // eri_602 = (eri_600 + eri_601)
  const v601 = get("eri_601")
  const v602 = v600 + v601

  setIfChanged("eri_602", v602)

  // eri_602_ant = (eri_600_ant + eri_601_ant)
  const v601_ant = get("eri_601_ant")
  const v602_ant = v600_ant + v601_ant

  setIfChanged("eri_602_ant", v602_ant)

  // eri_604 = (eri_602 + eri_603)
  const v603 = get("eri_603")
  const v604 = v602 + v603

  setIfChanged("eri_604", v604)

  // eri_604_ant = (eri_602_ant + eri_603_ant)
  const v603_ant = get("eri_603_ant")
  const v604_ant = v602_ant + v603_ant

  setIfChanged("eri_604_ant", v604_ant)

  // eri_607 = (eri_604 + eri_605 + eri_606)
  const v605 = get("eri_605")
  const v606 = get("eri_606")
  const v607 = v604 + v605 + v606

  setIfChanged("eri_607", v607)

  // eri_607_ant = (eri_604_ant + eri_605_ant + eri_606_ant)
  const v605_ant = get("eri_605_ant")
  const v606_ant = get("eri_606_ant")
  const v607_ant = v604_ant + v605_ant + v606_ant

  setIfChanged("eri_607_ant", v607_ant)

  // eri_702 = (eri_700) - (eri_701)
  const v700 = get("eri_700")
  const v701 = get("eri_701")
  const v702 = v700 - v701

  setIfChanged("eri_702", v702)

  // eri_702_ant = (eri_700_ant) - (eri_701_ant)
  const v700_ant = get("eri_700_ant")
  const v701_ant = get("eri_701_ant")
  const v702_ant = v700_ant - v701_ant

  setIfChanged("eri_702_ant", v702_ant)

  // eri_704 = (eri_702) - (eri_703)
  const v703 = get("eri_703")
  const v704 = v702 - v703

  setIfChanged("eri_704", v704)

  // eri_704_ant = (eri_702_ant) - (eri_703_ant)
  const v703_ant = get("eri_703_ant")
  const v704_ant = v702_ant - v703_ant

  setIfChanged("eri_704_ant", v704_ant)

  // eri_706 = (eri_704) - (eri_705)
  const v705 = get("eri_705")
  const v706 = v704 - v705

  setIfChanged("eri_706", v706)

  // eri_706_ant = (eri_704_ant) - (eri_705_ant)
  const v705_ant = get("eri_705_ant")
  const v706_ant = v704_ant - v705_ant

  setIfChanged("eri_706_ant", v706_ant)

  // eri_707 = (eri_607) + (eri_706)
  const v707 = v607 + v706

  setIfChanged("eri_707", v707)

  // eri_707_ant = (eri_607_ant) + (eri_706_ant)
  const v707_ant = v607_ant + v706_ant

  setIfChanged("eri_707_ant", v707_ant)

  // eri_801 = (eri_707 + eri_800)
  const v800 =
    get("eri_80001") +
    get("eri_80002") +
    get("eri_80003") +
    get("eri_80004") +
    get("eri_80005") +
    get("eri_80006") +
    get("eri_80007") +
    get("eri_80008") +
    get("eri_80009")

  const v801 = v707 + v800

  setIfChanged("eri_801", v801)

  // eri_801_ant = (eri_707_ant + eri_800_ant)
  const v800_ant =
    get("eri_80001_ant") +
    get("eri_80002_ant") +
    get("eri_80003_ant") +
    get("eri_80004_ant") +
    get("eri_80005_ant") +
    get("eri_80006_ant") +
    get("eri_80007_ant") +
    get("eri_80008_ant") +
    get("eri_80009_ant")

  const v801_ant = v707_ant + v800_ant

  setIfChanged("eri_801_ant", v801_ant)

  const v96 = v600 // Suponiendo que v600 se utiliza aquí (puedes ajustarlo según las fórmulas reales)
  console.log("v96 (EFE):", v96)

  setIfChanged("efe_md_96", v96)
}

// ===================================================
// WATCH LIGERO SOLO PARA LA CARGA INICIAL EN ERI
// ===================================================
let initialEriSetupDone = false

if (props.tipo === "eri") {
  watch(
    () => ({
      esfLen: esfStoreValues.value.length,
      eriLen: eriStoreValues.value.length,
    }),
    ({ esfLen, eriLen }) => {
      // Hasta que no haya datos no hacemos nada
      if (initialEriSetupDone) return
      if (!esfLen && !eriLen) return

      initialEriSetupDone = true

      // 1 sola pasada inicial: mapeos ESF->ERI + fórmulas ERI
      syncEsfToEri()
      recomputeEriFormulas()
    },
    { immediate: true },
  )
}

if (props.tipo === "eri") {
  const pick = name => {
    const row = (eriStoreValues.value ?? []).find(
      r => String(r?.nombrecampo).toLowerCase() === name.toLowerCase(),
    )

    return row ? Number(row.valor) : 0
  }

  watch(
    () => [
      pick("eri_401"),
      pick("eri_501"),
      pick("eri_401_ant"),
      pick("eri_501_ant"),
    ],
    () => {
      // ✅ cada vez que cambie cualquiera de estos, recalculamos fórmulas (incluye eri_402)
      recomputeEriFormulas()
    },
    { immediate: true },
  )
}

if (props.tipo === "eri") {
  const eriSignature = computed(() => {
    const list = eriStoreValues.value ?? []

    // firma simple: nombrecampo+valor (si cambia cualquier hijo, cambia la firma)
    return list.map(r => `${String(r?.nombrecampo)}=${String(r?.valor)}`).join("|")
  })

  watch(
    () => eriSignature.value,
    () => {
      recomputeEriFormulas()
    },
    { immediate: true },
  )
}

// ---------------------------------------------
// Manejo de inputs del usuario
// ---------------------------------------------
const onInput = (group, row, which, rawValue) => {
  const tStore = storeTipo.value

  if (which === "anterior" && !hasPeriodoAnterior.value) return

  // Si es cuenta padre (tiene hijos) o campo calculado, NO permitimos edición
  if (isReadOnlyField(row, which)) return

  const field = which === "actual" ? row.actual : row.anterior
  if (!field) return

  let numericVal = toNumber(rawValue)
  numericVal = normalizeForField(field.nombrecampo, numericVal)
  numericVal = roundTo(numericVal, 2)

  emit("change-value", {
    tipo: tStore, // 'esf' | 'eri' | 'ecp' | 'efemd'
    id: field.nombrecampo,
    valor: String(numericVal),
    row: field,
    meta: {
      codigo: row.codigo,
      tablaorigen: row.tablaorigen,
      grupo: group.label,
      periodo: which === "actual" ? "actual" : "anterior",
    },
  })

  // 🔁 Lógica dependiente:
  // - Si se cambia ESF → actualizar mapeos ESF->ERI
  // - Si se cambia ERI → recalcular fórmulas internas
  if (planTipo.value === "esf") {
    syncEsfToEri()
  } else if (planTipo.value === "eri") {
    recomputeFormulas("eri")
  } else {
    recomputeFormulas("efe")
  }
}
</script>

<template>
  <section>
    <div class="d-flex align-center mb-2">
      <VProgressCircular
        v-if="loading"
        indeterminate
        size="20"
      />
    </div>

    <VExpansionPanels
      :value="activePanel"
      variant="accordion"
      :mandatory="false"
      @update:model-value="updateActivePanel"
    >
      <VExpansionPanel
        v-for="(group, index) in groups"
        :key="group.key"
        :value="index"
      >
        <VExpansionPanelTitle>
          {{ group.label }}
        </VExpansionPanelTitle>

        <VExpansionPanelText>
          <VTable density="compact">
            <thead>
              <tr>
                <th :style="hasPeriodoAnterior ? 'width: 45%' : 'width: 67%'">CONCEPTO</th>
                <th style="width: 10%">CUENTA</th>
                <th style="width: 22%">
                  PERIODO ACTUAL
                </th>
                <th
                  v-if="hasPeriodoAnterior"
                  style="width: 23%"
                >
                  PERIODO ANTERIOR
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="row in group.rows"
                :key="row.codigo"
              >
                <td>
                  {{ row.nombreCuenta || row.codigo }}
                </td>

                <td>
                  {{ row.codigo }}
                </td>

                <td>
                  <VTextField
                    type="number"
                    density="compact"
                    variant="outlined"
                    hide-details
                    class="ma-0 pa-0"
                    :class="{ 'rv-readonly': isReadOnlyField(row, 'actual') }"
                    :readonly="isReadOnlyField(row, 'actual')"
                    :model-value="getDisplayValue(row.actual, row.sumActual, row.hasChildren)"
                    @update:modelValue="val => onInput(group, row, 'actual', val)"
                  />
                </td>

                <td v-if="hasPeriodoAnterior">
                  <VTextField
                    type="number"
                    density="compact"
                    variant="outlined"
                    hide-details
                    class="ma-0 pa-0"
                    :class="{ 'rv-readonly': isReadOnlyField(row, 'actual') }"
                    :readonly="isReadOnlyField(row, 'anterior')"
                    :model-value="getDisplayValue(row.anterior, row.sumAnterior, row.hasChildren)"
                    @update:modelValue="val => onInput(group, row, 'anterior', val)"
                  />
                </td>
              </tr>

              <tr v-if="!group.rows.length">
                <td
                  :colspan="hasPeriodoAnterior ? 4 : 3"
                  class="text-center text-medium-emphasis py-4"
                >
                  Sin cuentas en este grupo
                </td>
              </tr>
            </tbody>
          </VTable>
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </section>
</template>
