// src/@store/reportViewer.store.js
import { defineStore } from "pinia"
import { useIndexedDBService } from "@/services/indexeddb.service"
import { useLogger } from "@/composables/useLogger"
import { useAudit } from "@/composables/useAudit"
import { useSessionUser } from "@/composables/useSessionUser"
import { normalizeReporte } from "@/utils/reporte-normalizer"
import { useReportViewerService } from "@/services/reporte-viewer.service"

import { useUiSnackbarStore } from "@/@store/uiSnackbar.store"

function buildPlainSnapshot(reporte, values) {
  const base = {
    ...reporte,
    values: {
      esfvalues: Object.values(values.esf || {}),
      erivalues: Object.values(values.eri || {}),
      ecpvalues: Object.values(values.ecp || {}),
      efemdvalues: Object.values(values.efemd || {}),
    },
  }

  return JSON.parse(JSON.stringify(base))
}

function buildIndexByNombrecampo(list = []) {
  const m = Object.create(null)
  for (const r of list) {
    if (r?.nombrecampo) m[r.nombrecampo] = r
  }

  return m
}

function toNum(v) {
  const n = Number(v)

  return Number.isFinite(n) ? n : 0
}

export const roundTo = (n, decimals = 2) => {
  const num = Number(n)
  if (!Number.isFinite(num)) return 0
  const p = 10 ** decimals

  return Math.round((num + Number.EPSILON) * p) / p
}

function sumCodes(index, codes) {
  // dedupe para no sumar 3 veces si el array trae repetidos
  const unique = new Set(codes)
  let acc = 0
  for (const c of unique) acc += toNum(index[c]?.valor)

  return acc
}

function allRowsCuadran(esfIndex, ecpIndex, rowDefs) {
  for (const def of rowDefs) {
    const saldoEsf = sumCodes(esfIndex, def.esfCodigos)
    const saldoEcp = sumCodes(ecpIndex, def.ecpCodigos)
    if (toNum(saldoEsf) - toNum(saldoEcp) !== 0) return false
  }

  return true
}

function cloneBuckets(values) {
  return {
    esf: JSON.parse(JSON.stringify(values?.esf ?? {})),
    eri: JSON.parse(JSON.stringify(values?.eri ?? {})),
    ecp: JSON.parse(JSON.stringify(values?.ecp ?? {})),
    efemd: JSON.parse(JSON.stringify(values?.efemd ?? {})),
  }
}

function getBucketNumber(bucket, name) {
  const row = bucket?.[name]
  const n = Number(row?.valor)

  return Number.isFinite(n) ? roundTo(n, 2) : 0
}

export const useReportViewerStore = defineStore("reportViewer", {
  state: () => ({
    loading: false,
    saving: false,

    // Metadatos del reporte (mezcla de API + normalizeReporte)
    reporte: null,

    // Estructura normalizada adicional (por si la quieres aprovechar luego)
    normalizedMeta: null,

    // Valores normalizados por tipo + nombrecampo
    // values.esf["esf_100101"] = { id, tipo, nombrecampo, tablaorigen, valor, userid }
    values: {
      esf: {},
      eri: {},
      ecp: {},
      efemd: {},
    },

    // Campos sucios (pendientes de enviar al backend)
    dirty: {
      esf: {},
      eri: {},
      ecp: {},
      efemd: {},
    },

    // Mini-log de cambios en memoria
    changeLog: [],

    _saveTimer: null,

    movementCheckpoint: {
      esf: {},
      eri: {},
      ecp: {},
      efemd: {},
    },
  }),

  getters: {
    esfList: state => Object.values(state.values.esf),
    eriList: state => Object.values(state.values.eri),
    ecpList: state => Object.values(state.values.ecp),
    efemdList: state => Object.values(state.values.efemd),

    hasReport: state => !!state.reporte,

    // compat con ReportViewerPage.vue
    current: state => state.reporte,

    // cuántos campos sucios hay en total
    pendingChangesCount: state =>
      Object.keys(state.dirty.esf).length +
      Object.keys(state.dirty.eri).length +
      Object.keys(state.dirty.ecp).length +
      Object.keys(state.dirty.efemd).length,

    // flag simple
    hasPendingChanges: state =>
      Object.keys(state.dirty.esf).length > 0 ||
      Object.keys(state.dirty.eri).length > 0 ||
      Object.keys(state.dirty.ecp).length > 0 ||
      Object.keys(state.dirty.efemd).length > 0,
  },

  actions: {
    // Función para calcular el cuadre de ESF
    calculateEsfCuadre() {
      const canon = s =>
        String(s ?? "")
          .trim()
          .replace(/[\s_-]/g, "")
          .toLowerCase()

      const toNum = v => {
        const n = Number(v)

        return Number.isFinite(n) ? n : 0
      }

      // ✅ usa el diccionario normalizado
      const esfDict = this.values?.esf ?? {}

      const rows = Object.values(esfDict)

      const parseCodigo = nombrecampo => {
        const s = String(nombrecampo ?? "").toLowerCase()
        if (!s.startsWith("esf_")) return null
        const noPrefix = s.slice(4)

        return noPrefix.endsWith("_ant") ? noPrefix.slice(0, -4) : noPrefix
      }

      // 1) construir lista de códigos existentes
      const codes = []
      const byCode = Object.create(null)

      for (const r of rows) {
        const codigo = parseCodigo(r.nombrecampo)
        if (!codigo) continue
        codes.push(codigo)
        byCode[codigo] = true
      }

      // 2) detectar padres por prefijo (cualquier código que sea prefijo de otro más largo)
      const isParent = Object.create(null)
      for (const c of codes) isParent[c] = false

      // O(n^2) pero ESF no suele ser gigante; si lo es, lo optimizamos luego.
      for (const a of codes) {
        for (const b of codes) {
          if (b.length <= a.length) continue
          if (b.startsWith(a)) {
            isParent[a] = true
            break
          }
        }
      }

      // 3) acumular SOLO hojas
      const totals = {
        ac: 0, anc: 0, pc: 0, pnc: 0, pat: 0,
        ac_ant: 0, anc_ant: 0, pc_ant: 0, pnc_ant: 0, pat_ant: 0,
      }

      for (const field of rows) {
        if (!field?.tablaorigen) continue

        const codigo = parseCodigo(field.nombrecampo)
        if (!codigo) continue

        // ✅ ignorar padres (autoCalc)
        if (isParent[codigo]) continue

        const key = canon(field.tablaorigen)
        const isAnt = String(field.nombrecampo ?? "").toLowerCase().endsWith("_ant")
        const v = toNum(field.valor)

        if (key === "activoscorrientes") totals[`ac`] += v
        else if (key === "activosnocorrientes") totals[`anc`] += v
        else if (key === "pasivoscorrientes") totals[`pc`] += v
        else if (key === "pasivosnocorrientes") totals[`pnc`] += v
        else if (key === "patrimonio") totals[`pat`] += v

        if (key === "activoscorrientesant") totals[`ac_ant`] += v
        else if (key === "activosnocorrientesant") totals[`anc_ant`] += v
        else if (key === "pasivoscorrientesant") totals[`pc_ant`] += v
        else if (key === "pasivosnocorrientesant") totals[`pnc_ant`] += v
        else if (key === "patrimonioant") totals[`pat_ant`] += v
      }

      const round2 = n => Math.round((n + Number.EPSILON) * 100) / 100

      const totalActivo     = totals.ac + totals.anc
      const totalPasPat     = totals.pc + totals.pnc + totals.pat
      const totalActivoAnt  = totals.ac_ant + totals.anc_ant
      const totalPasPatAnt  = totals.pc_ant + totals.pnc_ant + totals.pat_ant

      const diffAct = round2(totalActivo - totalPasPat)
      const diffAnt = round2(totalActivoAnt - totalPasPatAnt)

      const ok = (diffAct === 0 && diffAnt === 0)

      return (diffAct === 0 && diffAnt === 0) ? 1 : 0
    },

    // Función para calcular el cuadre de EFE
    calculateEriCuadre() {
      const eriByName = {}
      for (const row of Object.values(this.values?.eri ?? {})) {
        if (row?.nombrecampo) eriByName[row.nombrecampo.toLowerCase()] = row
      }

      const getVal = name => {
        const n = Number(eriByName[name]?.valor)

        return Number.isFinite(n) ? roundTo(n, 2) : 0
      }

      const eri607 = getVal("eri_607")

      const esf307 = roundTo(
        (Number(this.values.esf["esf_30701"]?.valor) || 0) +
        (Number(this.values.esf["esf_30702"]?.valor) || 0),
        2,
      )

      const eri607Ant = getVal("eri_607_ant")

      const esf307Ant = roundTo(
        (Number(this.values.esf["esf_30701_ant"]?.valor) || 0) +
          (Number(this.values.esf["esf_30702_ant"]?.valor) || 0),
        2,
      )

      const okActual   = roundTo(eri607 - esf307, 2) === 0
      const okAnterior = roundTo(eri607Ant - esf307Ant, 2) === 0

      return okActual ? 1 : 0
    },

    // Función para calcular el cuadre de ERI
    calculateEfeCuadre() {
          const efeDict = this.values?.efemd ?? {}
          const esfDict = this.values?.esf ?? {}

          const getEfe = name => {
              const row = efeDict[name]
              const n = Number(row?.valor)
              return Number.isFinite(n) ? roundTo(n, 2) : 0
          }

          const getEsf = name => {
              const row = esfDict[name]
              const n = Number(row?.valor)
              return Number.isFinite(n) ? roundTo(n, 2) : 0
          }

          // ✅ Financiamiento: efe_md_9507 debe coincidir con esf_10101
          const v9507 = getEfe("efe_md_9507")
          const esf10101 = roundTo(
              getEsf("esf_1010101") + getEsf("esf_1010102") + getEsf("esf_1010103"),
              2,
          )
          const financiamientoCuadra = roundTo(v9507 - esf10101, 2) === 0

          // ✅ Conciliación: efe_md_9820 debe ser 0
          const v9820 = getEfe("efe_md_9820")
          const conciliacionCuadra = v9820 === 0

          return (financiamientoCuadra && conciliacionCuadra) ? 1 : 0
      },

    calculateEfeMovimientoCuadre() {
      const dirtyUser = Object.entries(this.dirty.efemd).filter(
        ([, change]) => !change?.meta?.autoCalc,
      )

      if (!dirtyUser.length) return 1

      const current9820 = getBucketNumber(this.values.efemd, "efe_md_9820")
      const base9820 = getBucketNumber(this.movementCheckpoint.efemd, "efe_md_9820")

      return roundTo(current9820 - base9820, 2) === 0 ? 1 : 0
    },

    // Función para calcular el cuadre de ECP
    calculateEcpCuadre() {
      // ✅ usar fuente viva (this.values), no snapshot (this.reporte.values)
      const esfList = Object.values(this.values?.esf ?? {})
      const ecpList = Object.values(this.values?.ecp ?? {})

      const esfIndex = buildIndexByNombrecampo(esfList)
      const ecpIndex = buildIndexByNombrecampo(ecpList)

      // ========= DEFINICIONES (base) =========
      // ESF: saldos iniciales = sufijo _ant, saldos finales = sin sufijo
      // ECP: saldos iniciales = ecp_990101/02/03_XXXX, saldos finales = ecp_99_XXXX

      const rowDefsSI = [
        { codigo: "301", esfCodigos: ["esf_30101_ant","esf_30102_ant","esf_30103_ant","esf_30104_ant","esf_3010501_ant","esf_3010502_ant"], ecpCodigos: ["ecp_990101_301","ecp_990102_301","ecp_990103_301"] },
        { codigo: "302", esfCodigos: ["esf_302_ant"], ecpCodigos: ["ecp_990101_302","ecp_990102_302","ecp_990103_302"] },
        { codigo: "303", esfCodigos: ["esf_303_ant"], ecpCodigos: ["ecp_990101_303","ecp_990102_303","ecp_990103_303"] },
        { codigo: "30401", esfCodigos: ["esf_30401_ant"], ecpCodigos: ["ecp_990101_30401","ecp_990102_30401","ecp_990103_30401"] },
        { codigo: "30402", esfCodigos: ["esf_30402_ant"], ecpCodigos: ["ecp_990101_30402","ecp_990102_30402","ecp_990103_30402"] },
        { codigo: "30501", esfCodigos: ["esf_30501_ant"], ecpCodigos: ["ecp_990101_30501","ecp_990102_30501","ecp_990103_30501"] },
        { codigo: "30502", esfCodigos: ["esf_30502_ant"], ecpCodigos: ["ecp_990101_30502","ecp_990102_30502","ecp_990103_30502"] },
        { codigo: "30503", esfCodigos: ["esf_30503_ant"], ecpCodigos: ["ecp_990101_30503","ecp_990102_30503","ecp_990103_30503"] },
        { codigo: "30504", esfCodigos: ["esf_30504_ant"], ecpCodigos: ["ecp_990101_30504","ecp_990102_30504","ecp_990103_30504"] },
        { codigo: "30601", esfCodigos: ["esf_30601_ant"], ecpCodigos: ["ecp_990101_30601","ecp_990102_30601","ecp_990103_30601"] },
        { codigo: "30602", esfCodigos: ["esf_30602_ant"], ecpCodigos: ["ecp_990101_30602","ecp_990102_30602","ecp_990103_30602"] },
        { codigo: "30603", esfCodigos: ["esf_30603_ant"], ecpCodigos: ["ecp_990101_30603","ecp_990102_30603","ecp_990103_30603"] },
        { codigo: "30604", esfCodigos: ["esf_30604_ant"], ecpCodigos: ["ecp_990101_30604","ecp_990102_30604","ecp_990103_30604"] },
        { codigo: "30605", esfCodigos: ["esf_30605_ant"], ecpCodigos: ["ecp_990101_30605","ecp_990102_30605","ecp_990103_30605"] },
        { codigo: "30606", esfCodigos: ["esf_30606_ant"], ecpCodigos: ["ecp_990101_30606","ecp_990102_30606","ecp_990103_30606"] },
        { codigo: "30607", esfCodigos: ["esf_30607_ant"], ecpCodigos: ["ecp_990101_30607","ecp_990102_30607","ecp_990103_30607"] },
        { codigo: "30701", esfCodigos: ["esf_30701_ant"], ecpCodigos: ["ecp_990101_30701","ecp_990102_30701","ecp_990103_30701"] },
        { codigo: "30702", esfCodigos: ["esf_30702_ant"], ecpCodigos: ["ecp_990101_30702","ecp_990102_30702","ecp_990103_30702"] },
        { codigo: "31", esfCodigos: ["esf_31_ant"], ecpCodigos: ["ecp_990101_31","ecp_990102_31","ecp_990103_31"] },
      ]

      const rowDefsSF = [
        { codigo: "301", esfCodigos: ["esf_30101","esf_30102","esf_30103","esf_30104","esf_3010501","esf_3010502"], ecpCodigos: ["ecp_99_301"] },
        { codigo: "302", esfCodigos: ["esf_302"], ecpCodigos: ["ecp_99_302"] },
        { codigo: "303", esfCodigos: ["esf_303"], ecpCodigos: ["ecp_99_303"] },
        { codigo: "30401", esfCodigos: ["esf_30401"], ecpCodigos: ["ecp_99_30401"] },
        { codigo: "30402", esfCodigos: ["esf_30402"], ecpCodigos: ["ecp_99_30402"] },
        { codigo: "30501", esfCodigos: ["esf_30501"], ecpCodigos: ["ecp_99_30501"] },
        { codigo: "30502", esfCodigos: ["esf_30502"], ecpCodigos: ["ecp_99_30502"] },
        { codigo: "30503", esfCodigos: ["esf_30503"], ecpCodigos: ["ecp_99_30503"] },
        { codigo: "30504", esfCodigos: ["esf_30504"], ecpCodigos: ["ecp_99_30504"] },
        { codigo: "30601", esfCodigos: ["esf_30601"], ecpCodigos: ["ecp_99_30601"] },
        { codigo: "30602", esfCodigos: ["esf_30602"], ecpCodigos: ["ecp_99_30602"] },
        { codigo: "30603", esfCodigos: ["esf_30603"], ecpCodigos: ["ecp_99_30603"] },
        { codigo: "30604", esfCodigos: ["esf_30604"], ecpCodigos: ["ecp_99_30604"] },
        { codigo: "30605", esfCodigos: ["esf_30605"], ecpCodigos: ["ecp_99_30605"] },
        { codigo: "30606", esfCodigos: ["esf_30606"], ecpCodigos: ["ecp_99_30606"] },
        { codigo: "30607", esfCodigos: ["esf_30607"], ecpCodigos: ["ecp_99_30607"] },
        { codigo: "30701", esfCodigos: ["esf_30701"], ecpCodigos: ["ecp_99_30701"] },
        { codigo: "30702", esfCodigos: ["esf_30702"], ecpCodigos: ["ecp_99_30702"] },
        { codigo: "31", esfCodigos: ["esf_31"], ecpCodigos: ["ecp_99_31"] },
      ]

      const siOk = allRowsCuadran(esfIndex, ecpIndex, rowDefsSI)
      const sfOk = allRowsCuadran(esfIndex, ecpIndex, rowDefsSF)

      return (siOk && sfOk) ? 1 : 0
    },

    // Helper interno para mantener this.reporte.values en sync
    _syncReporteValues() {
      if (!this.reporte) return

      this.reporte.values = {
        esfvalues: Object.values(this.values.esf),
        erivalues: Object.values(this.values.eri),
        ecpvalues: Object.values(this.values.ecp),
        efemdvalues: Object.values(this.values.efemd),
      }
    },

    // -------------------------------------------
    // Cargar reporte por ID
    // 1) intenta IndexedDB
    // 2) si no existe, llama a servicio getReporteFull
    // -------------------------------------------
    async load(reporteid) {
      if (!Number.isFinite(Number(reporteid))) {
        throw new Error(`reporteid inválido: ${reporteid}`)
      }

      const logger = useLogger()
      const api = useReportViewerService()

      // 1) Intentar cache local
      const fromCache = await this.loadFromCache(Number(reporteid))
      if (fromCache) {
        logger.info("Reporte cargado desde IndexedDB", { reporteid })

        return
      }

      // 2) Ir al backend vía servicio
      try {
        this.loading = true

        const fullReport = await api.getReporteFull(reporteid)

        await this.initFromFullReport(fullReport)
      } finally {
        this.loading = false
      }
    },

    // -------------------------------------------
    // Inicializar desde un reporte "rico"
    // (ej: /by-user/:userid/values o getReporteFull)
    // -------------------------------------------
    async initFromFullReport(fullReport) {
      if (!fullReport) return

      const idb = useIndexedDBService()
      const logger = useLogger()

      this.loading = true

      try {
        // Normalizamos con tu helper
        const normalized = normalizeReporte(fullReport)

        this.normalizedMeta = normalized

        const {
          reporteid,
          empresaid,
          periodoid,
          userid,
          nombre_reporte,
          values = {},
          ...rest
        } = fullReport

        // Mezclamos datos "raw" + normalizados en this.reporte
        this.reporte = {
          // id interno (si tu tabla lo usa)
          id: normalized.id ?? fullReport.id ?? null,

          // identificadores coherentes (camel y snake)
          reporteid: reporteid ?? normalized.id ?? null,

          empresaId: normalized.empresaId ?? empresaid ?? null,
          periodoId: normalized.periodoId ?? periodoid ?? null,

          empresaid: empresaid ?? normalized.empresaId ?? null,
          periodoid: periodoid ?? normalized.periodoId ?? null,

          userid: userid ?? fullReport.userid ?? null,
          nombre_reporte: nombre_reporte ?? fullReport.nombre_reporte ?? null,

          // otros campos que traiga el API
          ...rest,

          // información extra del normalizer (por si la quieres usar luego)
          sector: normalized.sector ?? rest.sector ?? null,
          origen: normalized.origen ?? rest.origen ?? "api",
          createdAt:
            normalized.createdAt ??
            fullReport.createdAt ??
            fullReport.createdat ??
            null,
          updatedAt:
            normalized.updatedAt ??
            fullReport.updatedAt ??
            fullReport.updatedat ??
            null,
        }

        // Normalizar arrays a diccionarios por nombrecampo
        const normalizeValuesArray = (arr = [], tipo) =>
          arr.reduce((acc, row) => {
            if (!row || !row.nombrecampo) return acc

            acc[row.nombrecampo] = {
              id: row.id,
              tipo,
              nombrecampo: row.nombrecampo,
              tablaorigen: row.tablaorigen ?? row.tablaOrigen ?? null,
              valor: row.valor ?? null,
              userid: row.userid ?? this.reporte.userid,
            }

            return acc
          }, {})

        this.values.esf = normalizeValuesArray(values.esfvalues, "esf")
        this.values.eri = normalizeValuesArray(values.erivalues, "eri")
        this.values.ecp = normalizeValuesArray(values.ecpvalues, "ecp")
        this.values.efemd = normalizeValuesArray(values.efemdvalues, "efemd")

        this.dirty.esf = {}
        this.dirty.eri = {}
        this.dirty.ecp = {}
        this.dirty.efemd = {}
        this.changeLog = []

        // Mantener this.reporte.values sincronizado (para ReportViewerPage)
        this._syncReporteValues()

        this.movementCheckpoint = cloneBuckets(this.values)

        // Cachear snapshot completo en IndexedDB (store: reportesconvertexs)
        const snapshot = buildPlainSnapshot(this.reporte, this.values)

        await idb.put("reportes", snapshot)

        logger.info("Reporte inicializado en visor", {
          reporteid: this.reporte.reporteid,
          empresaid: this.reporte.empresaid,
          periodoid: this.reporte.periodoid,
        })
      } catch (err) {
        console.error("[reportViewer] Error en initFromFullReport", err)
      } finally {
        this.loading = false
      }
    },

    // -------------------------------------------
    // Cargar desde IndexedDB por reporteid (fallback)
    // -------------------------------------------
    async loadFromCache(reporteid) {
      const idb = useIndexedDBService()
      const cached = await idb.getByKey("reportes", reporteid)

      if (!cached) return false

      await this.initFromFullReport(cached)

      return true
    },

    // -------------------------------------------
    // Actualizar un valor de campo (con autosave + mini-log)
    // tipo: 'esf' | 'eri' | 'ecp' | 'efemd'
    // nombrecampo: ej. 'esf_10101'
    // newRawValue: string/number desde el input
    // meta: info adicional (autoCalc, codigo, tablaorigen, periodo, etc.)
    // -------------------------------------------
    updateValue(tipo, nombrecampo, newRawValue, meta = {}) {
      if (!this.reporte) return

      if (tipo === "efe") {
        tipo = "efemd"
      }

      if (!["esf", "eri", "ecp", "efemd"].includes(tipo)) return

      const logger = useLogger()
      const bucket = this.values[tipo]
      const dirtyBucket = this.dirty[tipo]

      const entry = bucket[nombrecampo] || {
        id: undefined,
        tipo,
        nombrecampo,
        tablaorigen: null,
        valor: null,
        userid: this.reporte.userid,
      }

      const oldValue = entry.valor

      let normalizedRaw = newRawValue

      if (typeof normalizedRaw === "string") {
        normalizedRaw = normalizedRaw.trim()
      }

      // Si el input vino vacío por focus/blur, no machacar el valor actual.
      // Solo permitir vaciar explícitamente si algún día mandas meta.allowNull = true
      if ((normalizedRaw === "" || normalizedRaw == null) && !meta?.allowNull) {
        return
      }

      const parsed = Number(
        typeof normalizedRaw === "string"
          ? normalizedRaw.replace(",", ".")
          : normalizedRaw,
      )

      if (!Number.isFinite(parsed)) {
        return
      }

      // Si realmente no cambió, no ensuciar estado ni disparar guardado
      if (roundTo(oldValue ?? 0, 2) === roundTo(parsed, 2)) {
        return
      }

      entry.valor = parsed

      // Guardar en la colección principal
      bucket[nombrecampo] = entry

      // Marcar como dirty (incluyendo meta)
      dirtyBucket[nombrecampo] = {
        oldValue,
        newValue: entry.valor,
        meta,
      }

      // Mini-log (solo las últimas 20 entradas)
      this.changeLog.unshift({
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        tipo,
        nombrecampo,
        oldValue,
        newValue: entry.valor,
        meta,
      })
      if (this.changeLog.length > 20) {
        this.changeLog.pop()
      }

      // Mantener this.reporte.values sincronizado
      this._syncReporteValues()

      // Log local
      logger.info("Campo de reporte modificado", {
        reporteid: this.reporte.reporteid,
        tipo,
        nombrecampo,
        oldValue,
        newValue: entry.valor,
        meta,
      })

      // Programar guardado en background (debounce)
      this._scheduleSave()
    },

    // -------------------------------------------
    // Programar guardado (debounce ~1s)
    // -------------------------------------------
    _scheduleSave() {
      if (this._saveTimer) {
        clearTimeout(this._saveTimer)
      }

      this._saveTimer = window.setTimeout(() => {
        this._flushChanges().catch(err => {
          console.error("[reportViewer] Error en flushChanges", err)
        })
      }, 1000)
    },

    // -------------------------------------------
    // Enviar cambios acumulados a backend + cache local + audit
    // -------------------------------------------
    // -------------------------------------------
    async _flushChanges() {
      if (!this.reporte) return

      const logger= useLogger()
      const { registrar } = useAudit()
      const idb = useIndexedDBService()
      const api = useReportViewerService()
      const { userId } = useSessionUser()
      const uiSnackbar = useUiSnackbarStore()

      const reporteid = this.reporte.reporteid
      const empresaid = this.reporte.empresaId ?? this.reporte.empresaid
      const periodoid = this.reporte.periodoId ?? this.reporte.periodoid
      const userid    = this.reporte.userid ?? userId

      const dirtyCopy = {
        esf:   { ...this.dirty.esf },
        eri:   { ...this.dirty.eri },
        ecp:   { ...this.dirty.ecp },
        efemd: { ...this.dirty.efemd },
      }

      if (
        !Object.keys(dirtyCopy.esf).length   &&
        !Object.keys(dirtyCopy.eri).length   &&
        !Object.keys(dirtyCopy.ecp).length   &&
        !Object.keys(dirtyCopy.efemd).length
      ) {
        return
      }

      this.saving = true

      try {
        const buildBodies = tipo => {
          const bucket    = this.values[tipo]
          const dirtyTipo = dirtyCopy[tipo]

          if (!Object.keys(dirtyTipo).length) return []

          const byTabla = {}

          for (const nombrecampo of Object.keys(dirtyTipo)) {
            const row = bucket[nombrecampo]
            if (!row) continue

            const tabla = row.tablaorigen || row.tablaOrigen || "DEFAULT"

            if (!byTabla[tabla]) byTabla[tabla] = {}

            byTabla[tabla][nombrecampo] = row.valor
          }

          return Object.entries(byTabla).map(([tablaorigen, campos]) => ({
            userid,
            periodoid,
            empresaid,
            reporteid,
            tablaorigen,
            ...campos,
          }))
        }

        const bodiesEsf   = buildBodies("esf")
        const bodiesEri   = buildBodies("eri")
        const bodiesEcp   = buildBodies("ecp")
        const bodiesEfemd = buildBodies("efemd")

        // Enviar al backend
        if (bodiesEsf.length)   await api.bulkSave("esf",   bodiesEsf)
        if (bodiesEri.length)   await api.bulkSave("eri",   bodiesEri)
        if (bodiesEcp.length)   await api.bulkSave("ecp",   bodiesEcp)
        if (bodiesEfemd.length) await api.bulkSave("efemd", bodiesEfemd)

        // 🔹 Registrar en auditoría cambios autocalculados (totales de padres)
        for (const tipo of ["esf", "eri", "ecp", "efemd"]) {
          const dirtyTipo = dirtyCopy[tipo]

          for (const [nombrecampo, change] of Object.entries(dirtyTipo)) {
            if (!change?.meta?.autoCalc) continue

            registrar({
              modulo: "reportViewer-totales",
              accion: "auto-calc",
              targetId: nombrecampo,
              empresaId: empresaid,
              periodoId: periodoid,
              usuario: userid,
              antes: change.oldValue,
              despues: change.newValue,
              meta: {
                tipo,
                ...change.meta, // incluye autoCalc, codigo, tablaorigen, periodo, etc.
              },
            })
          }
        }

        // Sólo si TODO fue bien, limpiamos dirty
        const cleanDirty = tipo => {
          const dirtyTipo = this.dirty[tipo]
          for (const nombrecampo of Object.keys(dirtyCopy[tipo])) {
            delete dirtyTipo[nombrecampo]
          }
        }

        cleanDirty("esf")
        cleanDirty("eri")
        cleanDirty("ecp")
        cleanDirty("efemd")

        logger.info("Cambios de reporte sincronizados con backend", {
          reporteid,
          empresaid,
          periodoid,
          tipos: {
            esf:   Object.keys(dirtyCopy.esf),
            eri:   Object.keys(dirtyCopy.eri),
            ecp:   Object.keys(dirtyCopy.ecp),
            efemd: Object.keys(dirtyCopy.efemd),
          },
        })

        registrar({
          modulo:  "reportViewer",
          accion:  "update",
          targetId: reporteid,
          empresaId: empresaid,
          periodoId: periodoid,
          antes: null,
          despues: null,
          meta: {
            tipos: {
              esf:   Object.keys(dirtyCopy.esf),
              eri:   Object.keys(dirtyCopy.eri),
              ecp:   Object.keys(dirtyCopy.ecp),
              efemd: Object.keys(dirtyCopy.efemd),
            },
          },
        })
      } catch (err) {
        console.error("[reportViewer] Error enviando cambios", err)
        logger.error("Error sincronizando cambios de reporte", {
          reporteid: this.reporte?.reporteid,
          error: String(err),
        })

        // 🔢 calcular cuántos cambios intentamos enviar
        const pendingCount =
          Object.keys(dirtyCopy.esf).length +
          Object.keys(dirtyCopy.eri).length +
          Object.keys(dirtyCopy.ecp).length +
          Object.keys(dirtyCopy.efemd).length

        // 🔔 Mostrar toast al usuario
        uiSnackbar.show({
          message: `No se pudieron sincronizar ${pendingCount} cambio(s). Se guardaron localmente y se reintentarán cuando la conexión se recupere.`,
          color: "warning",
          timeout: 8000,
        })
      } finally {
        // 💾 SIEMPRE guardamos snapshot local del estado ACTUAL
        try {
          const snapshot = buildPlainSnapshot(this.reporte, this.values)

          await idb.put("reportes", snapshot)
        } catch (e) {
          console.error("[reportViewer] Error guardando snapshot en IndexedDB", e)
        }

        this.saving = false
      }
    },



    reset() {
      this.loading = false
      this.saving = false
      this.reporte = null
      this.normalizedMeta = null

      this.values.esf = {}
      this.values.eri = {}
      this.values.ecp = {}
      this.values.efemd = {}

      this.dirty.esf = {}
      this.dirty.eri = {}
      this.dirty.ecp = {}
      this.dirty.efemd = {}

      this.changeLog = []

      if (this._saveTimer) {
        clearTimeout(this._saveTimer)
        this._saveTimer = null
      }

      this.movementCheckpoint = {
        esf: {},
        eri: {},
        ecp: {},
        efemd: {},
      }
    },
  },
})
