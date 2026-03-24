<script setup>
import { ref, computed, nextTick } from "vue"
import * as XLSX from "xlsx"
import Papa from "papaparse"

const props = defineProps({
  esfValues: { type: Array, default: () => [] },
  eriValues: { type: Array, default: () => [] },
  efeValues: { type: Array, default: () => [] },
  ecpValues: { type: Array, default: () => [] },
  periodo: { type: String, default: "" },
  empresa: { type: String, default: "" },
})

const emit = defineEmits(["change-value"])

const sheetsData = ref({})
const importing = ref(false)
const progress = ref({ done: 0, total: 0 })

const PREVIEW_LIMIT = 80       // 👈 evita congelar por render
const BATCH_SIZE = 40          // 👈 30-80 suele ir bien
const YIELD_EVERY_BATCH = true // 👈 ceder el hilo entre lotes

const importSummary = ref({
  total: 0,
  ok: 0,
  skippedSame: 0,
  unknown: 0,
  errors: 0,
  unknownCodes: [],
})

const summaryText = computed(() => {
  const s = importSummary.value
  return `Total: ${s.total} | OK: ${s.ok} | Igual (omitidos): ${s.skippedSame} | Desconocidos: ${s.unknown} | Errores: ${s.errors}`
})

const percent = computed(() => {
  if (!progress.value.total) return 0
  return Math.round((progress.value.done / progress.value.total) * 100)
})

function toSafeString(v) {
  return (v ?? "").toString().trim()
}

function parseNumber(raw) {
  let s = toSafeString(raw)
  if (!s) return 0
  s = s.replace(/\s+/g, "")

  if (s.includes(".") && s.includes(",")) {
    s = s.replace(/\./g, "").replace(/,/g, ".")
  } else {
    s = s.replace(/,/g, ".")
  }

  const n = Number.parseFloat(s)

  return Number.isFinite(n) ? Number(n.toFixed(2)) : 0
}

function resolveTipoFromCodigo(codigoRaw) {
  const codigo = toSafeString(codigoRaw).toLowerCase()
  if (codigo.startsWith("esf_")) return "esf"
  if (codigo.startsWith("eri_")) return "eri"
  if (codigo.startsWith("ecp_")) return "ecp"
  if (codigo.startsWith("efe_md_")) return "efemd"
  if (codigo.startsWith("efe_")) return "efemd" // compat

  return null
}

function emitChangeValue({ tipo, id, valor, meta }) {
  emit("change-value", {
    tipo,
    id,
    valor: String(valor),
    row: { nombrecampo: id },
    meta: meta || {},
  })
}

function extractRowsFromSheets(sheets) {
  const rows = []
  for (const [sheetName, data] of Object.entries(sheets)) {
    for (const row of data.rows) {
      rows.push({
        modulo: sheetName,
        codigo: row?.[0],
        valor: row?.[2],
      })
    }
  }

  return rows
}

// 👇 mapa para saltar emisiones si el valor no cambia
function buildCurrentValueMap() {
  const map = new Map()

  const addList = list => {
    for (const r of (Array.isArray(list) ? list : [])) {
      const key = toSafeString(r?.nombrecampo)
      if (!key) continue
      map.set(key.toLowerCase(), parseNumber(r?.valor))
    }
  }

  addList(props.esfValues)
  addList(props.eriValues)
  addList(props.ecpValues)

  // ojo: EFE te llega como efemdvalues en el store, pero aquí te pasan efeValues
  addList(props.efeValues)

  return map
}

function yieldToUI() {
  return new Promise(resolve => requestAnimationFrame(() => resolve()))
}

// ✅ Importación por lotes + skip iguales
async function applyImport(rows) {
  importing.value = true
  progress.value = { done: 0, total: 0 }

  importSummary.value = {
    total: 0,
    ok: 0,
    skippedSame: 0,
    unknown: 0,
    errors: 0,
    unknownCodes: [],
  }

  const currentMap = buildCurrentValueMap()

  // pre-filtra y normaliza para saber total real
  const updates = []
  for (const r of rows) {
    const codigo = toSafeString(r.codigo)
    if (!codigo) continue

    const tipo = resolveTipoFromCodigo(codigo)
    const valor = parseNumber(r.valor)

    importSummary.value.total++

    if (!tipo) {
      importSummary.value.unknown++
      importSummary.value.unknownCodes.push(codigo)
      continue
    }

    // 👇 si ya es igual, no emito (esto reduce muchísimo el freeze)
    const key = codigo.toLowerCase()
    const currentVal = currentMap.get(key)
    if (currentVal !== undefined && Number(currentVal.toFixed(2)) === Number(valor.toFixed(2))) {
      importSummary.value.skippedSame++
      continue
    }

    updates.push({
      tipo,
      id: codigo,
      valor,
      meta: {
        source: "import",
        moduloOrigen: r.modulo,
        empresa: props.empresa,
        periodo: props.periodo,
      },
    })
  }

  progress.value.total = updates.length
  await nextTick()

  for (let i = 0; i < updates.length; i += BATCH_SIZE) {
    const batch = updates.slice(i, i + BATCH_SIZE)

    for (const u of batch) {
      try {
        emitChangeValue(u)
        importSummary.value.ok++
      } catch (e) {
        importSummary.value.errors++
      } finally {
        progress.value.done++
      }
    }

    // 👇 cede el hilo: evita que la UI se congele
    if (YIELD_EVERY_BATCH) {
      await yieldToUI()
    }
  }

  importing.value = false
}

function buildSheetsFromXlsx(workbook) {
  const sheets = {}

  workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName]
    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

    if (Array.isArray(json) && json.length) {
      const rows = (json.slice(1) ?? []).filter(r => Array.isArray(r) && r.length)

      sheets[sheetName] = {
        headers: json[0] ?? [],
        rows,
        previewRows: rows.slice(0, PREVIEW_LIMIT),
        truncated: rows.length > PREVIEW_LIMIT,
      }
    }
  })

  return sheets
}

function buildSheetsFromCsv(fileName, csvRows) {
  const rows = (csvRows.slice(1) ?? []).filter(r => Array.isArray(r) && r.length)

  return {
    [fileName]: {
      headers: csvRows[0] ?? [],
      rows,
      previewRows: rows.slice(0, PREVIEW_LIMIT),
      truncated: rows.length > PREVIEW_LIMIT,
    },
  }
}

function handleFileUpload(event) {
  const file = event?.target?.files?.[0]
  if (!file) return

  const ext = file.name.split(".").pop().toLowerCase()
  const reader = new FileReader()

  if (ext === "xlsx") {
    reader.onload = async e => {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: "array" })

      const sheets = buildSheetsFromXlsx(workbook)

      sheetsData.value = sheets

      const rows = extractRowsFromSheets(sheets)

      await applyImport(rows)
    }
    reader.readAsArrayBuffer(file)

    return
  }

  if (ext === "csv" || ext === "txt") {
    reader.onload = e => {
      Papa.parse(e.target.result, {
        delimiter: ";",
        header: false,
        skipEmptyLines: true,
        complete: async result => {
          const csvData = Array.isArray(result.data) ? result.data : []
          const sheets = buildSheetsFromCsv(file.name, csvData)

          sheetsData.value = sheets

          const rows = extractRowsFromSheets(sheets)

          await applyImport(rows)
        },
      })
    }
    reader.readAsText(file, "utf-8")
  }
}
</script>

<template>
  <label>
    Descargue en el siguiente enlace el archivo modelo:
    <a
      href="https://www.facilcontabilidad.com/mapeo101"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.facilcontabilidad.com/mapeo101
    </a>
  </label>

  <VContainer>
    <VFileInput
      accept=".xlsx, .csv, .txt"
      :disabled="importing"
      @change="handleFileUpload"
    />

    <div class="text-caption mt-2">
      {{ summaryText }}
    </div>

    <div v-if="importing" class="mt-2">
      <VProgressLinear :model-value="percent" height="8" />
      <div class="text-caption mt-1">
        Importando... {{ progress.done }} / {{ progress.total }} ({{ percent }}%)
      </div>
    </div>

    <div v-if="importSummary.unknownCodes?.length" class="text-caption mt-2">
      Códigos no reconocidos (sin prefijo esf_/eri_/ecp_/efe_md_):
      {{ importSummary.unknownCodes.slice(0, 12).join(", ") }}
      <span v-if="importSummary.unknownCodes.length > 12">…</span>
    </div>

    <div v-for="(data, sheetName) in sheetsData" :key="sheetName" class="mt-6">
      <VListSubheader class="d-flex align-center justify-space-between">
        <span>{{ sheetName }}</span>
        <span v-if="data.truncated" class="text-caption text-medium-emphasis">
          Mostrando {{ PREVIEW_LIMIT }} de {{ data.rows.length }} filas
        </span>
      </VListSubheader>

      <VTable dense>
        <thead>
          <tr>
            <th v-for="(header, index) in data.headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, rowIndex) in data.previewRows" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </div>
  </VContainer>
</template>
