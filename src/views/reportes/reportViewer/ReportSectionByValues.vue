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

const updateActivePanel = newPanel => {
  console.log("newPanel", newPanel)
  console.log("currentTab", props.currentTab)
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
    if (newPanel === 9) newPanel = 'Participacion Controladora'
    if (newPanel === 10) newPanel = 'Otros Resultados Integrales'
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
    "eri_5010104",
    "eri_5010108",
    "eri_5010110",

    "eri_40112",
    "eri_40113",
    "eri_40114",
    "eri_40115",

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
    "OTROS RESULTADO INTEGRAL",
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

// ---------------------------------------------
// Agrupar por tablaorigen y calcular totales jerárquicos
// ---------------------------------------------
// longitudes que consideramos como niveles de padre (3,5,7,9,11,13 dígitos)
const PARENT_LENGTHS = [3, 5, 7, 9, 11, 13]

const PARENT_LENGTHS_EFE = [2, 4, 6, 8, 10, 12, 14]

// ---------------------------------------------
// Agrupar por tablaorigen y calcular totales jerárquicos
// ---------------------------------------------
const groups = computed(() => {
  const tPlan = planTipo.value // 'esf' | 'eri' | 'efe' | 'ecp'
  const items = Array.isArray(props.values) ? props.values : []

  const groupedByTabla = {}

  // 1) Construir estructura básica por tablaorigen / código
  for (const row of items) {
    if (!row || !row.nombrecampo) continue

    const parsed = parseNombreCampo(tPlan, row.nombrecampo)
    if (!parsed) continue

    const { codigo, isAnterior } = parsed

    const { key: logicalTablaKey, base } = getLogicalTablaKey(
      row.tablaorigen || "OTROS",
    )

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

  // 2) Crear filas padre "sintéticas" si no existen (para 3,5,7,9 dígitos)
  Object.values(groupedByTabla).forEach(group => {
    const existingCodes = Object.keys(group.rowsByCodigo)
    const extraRows = {}

    for (const code of existingCodes) {
      const codeStr = String(code)

      if (tPlan === 'efe'){
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

  // 3) Calcular totales jerárquicos
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
          r.sumActual = toNumber(r.actual?.valor)
          r.sumAnterior = toNumber(r.anterior?.valor)
        }
      }

      // 3.4 Propagar sumas de abajo hacia arriba
      for (const r of sortedByLengthDesc) {
        const code = String(r.codigo)

        for (let len = code.length - 1; len > 0; len--) {
          const parentCode = code.slice(0, len)
          const parent = group.rowsByCodigo[parentCode]
          if (parent) {
            parent.sumActual += r.sumActual
            parent.sumAnterior += r.sumAnterior
            break
          }
        }
      }

      const sortedRows = rows.sort((a, b) =>
        compareCodigo(a.codigo, b.codigo),
      )

      return {
        key: group.key,
        label: group.label,
        rows: sortedRows,
      }
    })
    .sort((a, b) => {
      const tPlanSort = planTipo.value

      const orderA = getGroupOrderIndex(tPlanSort, a.label)
      const orderB = getGroupOrderIndex(tPlanSort, b.label)

      if (orderA !== orderB) return orderA - orderB

      const aFirst = a.rows[0]?.codigo
      const bFirst = b.rows[0]?.codigo

      return compareCodigo(aFirst, bFirst)
    })

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
  ].map(s => s.toLowerCase()),
)

const READONLY_ERI_ANTERIOR = new Set(
  [
    "eri_5010110_ant",
    "eri_5010104_ant",
    "eri_5010108_ant",
    "eri_5010112_ant",
    "eri_801_ant",
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
  if (hasChildren) return sumValue
  if (!field) return null

  const raw = toNumber(field.valor)

  return normalizeForField(field.nombrecampo, raw)
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

// ---------------------------------------------
// Reglas internas de ERI (fórmulas)
// ---------------------------------------------
const recomputeEriFormulas = () => {
  if (planTipo.value !== "eri") return

  const eriList = eriStoreValues.value

  const findByName = name => eriList.find(r => String(r.nombrecampo).toLowerCase() === name.toLowerCase())

  const get = name => {
    const row = findByName(name)
    return row ? toNumber(row.valor) : 0
  }

  const setIfChanged = (nombrecampo, numericVal) => {
    const targetRow = findByName(nombrecampo)
    const normalized = normalizeForField(nombrecampo, numericVal)
    const current = targetRow ? toNumber(targetRow.valor) : 0
    const tStore = storeTipo.value

    if (current === normalized) return

    emit("change-value", {
      tipo: tStore, // 'esf' | 'eri' | 'ecp' | 'efemd'
      id: nombrecampo,
      valor: String(normalized),
      row: targetRow ?? { nombrecampo },
      meta: {
        autoCalc: true,
        codigo: targetRow?.codigo,
        tablaorigen: targetRow?.tablaorigen,
      },
    })
  }

  // eri_502 = eri_50201 + eri_50202 + eri_50203 + eri_50204
  const v50201 = get("eri_50201")
  const v50202 = get("eri_50202")
  const v50203 = get("eri_50203")
  const v50204 = get("eri_50204")
  const v502 = v50201 + v50202 + v50203 + v50204

  setIfChanged("eri_502", v502)

  // eri_600 = ((eri_401 - eri_501) - (eri_50201 + ...)) + (eri_403)
  const v401 = get("eri_401")
  const v501 = get("eri_501")
  const v403 = get("eri_403")
  const v600 = (v401 - v501 - (v50201 + v50202 + v50203 + v50204)) + v403

  setIfChanged("eri_600", v600)

  // eri_602 = (eri_600 + eri_601)
  const v601 = get("eri_601")
  const v602 = v600 + v601

  setIfChanged("eri_602", v602)

  // eri_604 = (eri_602 + eri_603)
  const v603 = get("eri_603")
  const v604 = v602 + v603

  setIfChanged("eri_604", v604)

  // eri_607 = (eri_604 + eri_605 + eri_606)
  const v605 = get("eri_605")
  const v606 = get("eri_606")
  const v607 = v604 + v605 + v606

  setIfChanged("eri_607", v607)

  // eri_702 = (eri_700) - (eri_701)
  const v700 = get("eri_700")
  const v701 = get("eri_701")
  const v702 = v700 - v701

  setIfChanged("eri_702", v702)

  // eri_704 = (eri_702) - (eri_703)
  const v703 = get("eri_703")
  const v704 = v702 - v703

  setIfChanged("eri_704", v704)

  // eri_706 = (eri_704) - (eri_705)
  const v705 = get("eri_705")
  const v706 = v704 - v705

  setIfChanged("eri_706", v706)

  // eri_707 = (eri_607) + (eri_706)
  const v707 = v607 + v706

  setIfChanged("eri_707", v707)

  // eri_801 = (eri_707 + eri_800)
  const v800 = get("eri_800")
  const v801 = v707 + v800

  setIfChanged("eri_801", v801)

  // eri_801_ant = (eri_707_ant + eri_800_ant)
  const v707_ant = get("eri_707_ant")
  const v800_ant = get("eri_800_ant")
  const v801_ant = v707_ant + v800_ant

  setIfChanged("eri_801_ant", v801_ant)
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
    recomputeEriFormulas()
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
