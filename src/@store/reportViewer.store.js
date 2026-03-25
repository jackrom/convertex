// src/@store/reportViewer.store.js (CONVERTEX)
// ══════════════════════════════════════════════════════════════
// CORRECCIONES APLICADAS:
//
// 🔴 FIX CRÍTICO #1 — Nuevo action: flushNow()
//    Cancela el debounce timer y ejecuta _flushChanges()
//    inmediatamente. Se usa desde onBeforeUnmount y antes
//    de descargas TXT/PDF/Excel en ReportList.
//
// 🔴 FIX CRÍTICO #2 — _flushChanges(): añadido _savingLock
//    para evitar que múltiples flush concurrentes corrompan
//    el estado dirty.
//
// 🟡 FIX LÓGICA #1 — updateValue(): el early return cuando
//    oldValue es null y parsed es 0 impedía que se persistan
//    valores iniciales de totales calculados (autoCalc).
//    → Se permite pasar cuando meta.autoCalc === true.
//
// 🟡 FIX LÓGICA #2 — updateValue(): el early return en
//    string vacío ahora permite valores "0" y valores
//    provenientes de autoCalc.
//
// 🟡 FIX — load(): limpia _saveTimer antes de cargar un
//    reporte nuevo para evitar flush del reporte anterior.
// ══════════════════════════════════════════════════════════════

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

    reporte: null,
    normalizedMeta: null,

    values: {
      esf: {},
      eri: {},
      ecp: {},
      efemd: {},
    },

    dirty: {
      esf: {},
      eri: {},
      ecp: {},
      efemd: {},
    },

    changeLog: [],

    _saveTimer: null,
    _savingLock: false,

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

    current: state => state.reporte,

    pendingChangesCount: state =>
      Object.keys(state.dirty.esf).length +
      Object.keys(state.dirty.eri).length +
      Object.keys(state.dirty.ecp).length +
      Object.keys(state.dirty.efemd).length,

    hasPendingChanges: state =>
      Object.keys(state.dirty.esf).length > 0 ||
      Object.keys(state.dirty.eri).length > 0 ||
      Object.keys(state.dirty.ecp).length > 0 ||
      Object.keys(state.dirty.efemd).length > 0,
  },

  actions: {
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

      const esfDict = this.values?.esf ?? {}
      const rows = Object.values(esfDict)

      const parseCodigo = nombrecampo => {
        const s = String(nombrecampo ?? "").toLowerCase()
        if (!s.startsWith("esf_")) return null
        const noPrefix = s.slice(4)

        return noPrefix.endsWith("_ant") ? noPrefix.slice(0, -4) : noPrefix
      }

      const codes = []
      const byCode = Object.create(null)

      for (const r of rows) {
        const codigo = parseCodigo(r.nombrecampo)
        if (!codigo) continue
        codes.push(codigo)
        byCode[codigo] = true
      }

      const isParent = Object.create(null)
      for (const c of codes) isParent[c] = false

      for (const a of codes) {
        for (const b of codes) {
          if (b.length <= a.length) continue
          if (b.startsWith(a)) {
            isParent[a] = true
            break
          }
        }
      }

      const totals = {
        ac: 0, anc: 0, pc: 0, pnc: 0, pat: 0,
        ac_ant: 0, anc_ant: 0, pc_ant: 0, pnc_ant: 0, pat_ant: 0,
      }

      for (const field of rows) {
        if (!field?.tablaorigen) continue

        const codigo = parseCodigo(field.nombrecampo)
        if (!codigo) continue

        if (isParent[codigo]) continue

        const key = canon(field.tablaorigen)
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

      return (diffAct === 0 && diffAnt === 0) ? 1 : 0
    },

    calculateEriCuadre() {
      const eriList = Object.values(this.values?.eri ?? [])
      const esfList = Object.values(this.values?.esf ?? [])

      const eq = (a, b) => roundTo((Number(a) || 0) - (Number(b) || 0), 2) === 0

      const parseEriName = nombrecampo => {
        const m = String(nombrecampo ?? "")
          .trim()
          .toLowerCase()
          .match(/^eri_(\d+)(?:(_ant))?$/)

        if (!m) return null

        return {
          codigo: m[1],
          isAnterior: Boolean(m[2]),
        }
      }

      const buildIndex = rows => {
        const byName = Object.create(null)

        for (const row of rows) {
          if (!row?.nombrecampo) continue
          byName[String(row.nombrecampo).toLowerCase()] = row
        }

        return byName
      }

      const buildHierTotalsByCodigo = rows => {
        const PARENT_LENGTHS = [3, 5, 7, 9, 11, 13]
        const rowsByCodigo = Object.create(null)

        for (const row of rows) {
          if (!row?.nombrecampo) continue

          const parsed = parseEriName(row.nombrecampo)
          if (!parsed) continue

          const { codigo, isAnterior } = parsed

          if (!rowsByCodigo[codigo]) {
            rowsByCodigo[codigo] = {
              codigo,
              actualVal: 0,
              anteriorVal: 0,
              sumActual: 0,
              sumAnterior: 0,
              hasChildren: false,
            }
          }

          const v = Number(row.valor)
          const safeValue = Number.isFinite(v) ? v : 0

          if (isAnterior) rowsByCodigo[codigo].anteriorVal = roundTo(safeValue, 2)
          else rowsByCodigo[codigo].actualVal = roundTo(safeValue, 2)
        }

        const existingCodes = Object.keys(rowsByCodigo)
        const extra = Object.create(null)

        for (const code of existingCodes) {
          for (const len of PARENT_LENGTHS) {
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

        const rows2 = Object.values(rowsByCodigo)

        for (const r of rows2) {
          r.hasChildren = false
        }

        const sortedByLengthDesc = [...rows2].sort((a, b) => {
          const lenDiff = String(b.codigo).length - String(a.codigo).length
          if (lenDiff !== 0) return lenDiff

          return String(a.codigo).localeCompare(String(b.codigo))
        })

        for (const r of sortedByLengthDesc) {
          const code = String(r.codigo)

          for (let len = code.length - 1; len > 0; len--) {
            const parentCode = code.slice(0, len)
            const parent = rowsByCodigo[parentCode]

            if (parent) {
              parent.hasChildren = true
              break
            }
          }
        }

        for (const r of rows2) {
          if (r.hasChildren) {
            r.sumActual = 0
            r.sumAnterior = 0
          } else {
            r.sumActual = roundTo(r.actualVal, 2)
            r.sumAnterior = roundTo(r.anteriorVal, 2)
          }
        }

        for (const r of sortedByLengthDesc) {
          const code = String(r.codigo)

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

      const eriByName = buildIndex(eriList)
      const esfByName = buildIndex(esfList)
      const totals = buildHierTotalsByCodigo(eriList)

      const getEriValue = name => {
        const row = eriByName[String(name).toLowerCase()]
        const n = Number(row?.valor)

        return Number.isFinite(n) ? roundTo(n, 2) : 0
      }

      const getEsfValue = name => {
        const row = esfByName[String(name).toLowerCase()]
        const n = Number(row?.valor)

        return Number.isFinite(n) ? roundTo(n, 2) : 0
      }

      const existsEri = name => !!eriByName[String(name).toLowerCase()]

      const sumActual = codigo => roundTo(totals[String(codigo)]?.sumActual ?? 0, 2)
      const sumAnterior = codigo => roundTo(totals[String(codigo)]?.sumAnterior ?? 0, 2)

      const checks = []

      const addCheck = (fieldName, expectedValue) => {
        if (!existsEri(fieldName)) return
        checks.push(eq(getEriValue(fieldName), expectedValue))
      }

      const eri401 = sumActual("401")
      const eri501 = sumActual("501")
      const eri402 = roundTo(eri401 - eri501, 2)

      const eri502 = roundTo(
        sumActual("50201") +
        sumActual("50202") +
        sumActual("50203") +
        sumActual("50204"),
        2,
      )

      const eri403 = sumActual("403")
      const eri600 = roundTo((eri401 - eri501 - eri502) + eri403, 2)
      const eri601 = sumActual("601")
      const eri602 = roundTo(eri600 + eri601, 2)
      const eri603 = sumActual("603")
      const eri604 = roundTo(eri602 + eri603, 2)
      const eri605 = sumActual("605")
      const eri606 = sumActual("606")
      const eri607 = roundTo(eri604 + eri605 + eri606, 2)

      const eri700 = sumActual("700")
      const eri701 = sumActual("701")
      const eri702 = roundTo(eri700 - eri701, 2)
      const eri703 = sumActual("703")
      const eri704 = roundTo(eri702 - eri703, 2)
      const eri705 = sumActual("705")
      const eri706 = roundTo(eri704 - eri705, 2)
      const eri707 = roundTo(eri607 + eri706, 2)

      const eri800 = sumActual("800")
      const eri801 = roundTo(eri707 + eri800, 2)

      addCheck("eri_401", eri401)
      addCheck("eri_501", eri501)
      addCheck("eri_402", eri402)
      addCheck("eri_502", eri502)
      addCheck("eri_403", eri403)
      addCheck("eri_600", eri600)
      addCheck("eri_601", eri601)
      addCheck("eri_602", eri602)
      addCheck("eri_603", eri603)
      addCheck("eri_604", eri604)
      addCheck("eri_605", eri605)
      addCheck("eri_606", eri606)
      addCheck("eri_607", eri607)
      addCheck("eri_700", eri700)
      addCheck("eri_701", eri701)
      addCheck("eri_702", eri702)
      addCheck("eri_703", eri703)
      addCheck("eri_704", eri704)
      addCheck("eri_705", eri705)
      addCheck("eri_706", eri706)
      addCheck("eri_707", eri707)
      addCheck("eri_800", eri800)
      addCheck("eri_801", eri801)

      const eri401Ant = sumAnterior("401")
      const eri501Ant = sumAnterior("501")
      const eri502Ant = roundTo(
        sumAnterior("50201") +
        sumAnterior("50202") +
        sumAnterior("50203") +
        sumAnterior("50204"),
        2,
      )

      const eri403Ant = sumAnterior("403")
      const eri600Ant = roundTo((eri401Ant - eri501Ant - eri502Ant) + eri403Ant, 2)
      const eri601Ant = sumAnterior("601")
      const eri602Ant = roundTo(eri600Ant + eri601Ant, 2)
      const eri603Ant = sumAnterior("603")
      const eri604Ant = roundTo(eri602Ant + eri603Ant, 2)
      const eri605Ant = sumAnterior("605")
      const eri606Ant = sumAnterior("606")
      const eri607Ant = roundTo(eri604Ant + eri605Ant + eri606Ant, 2)

      const resultadoEsfActual = getEsfValue("esf_30701") + getEsfValue("esf_30702")

      const diferenciaActual = roundTo(eri607 - resultadoEsfActual, 2)

      return (diferenciaActual === 0) ? 1 : 0
    },

    calculateEfeCuadre() {
      const efemd = this.values?.efemd ?? {}
      const eri = this.values?.eri ?? {}
      const esf = this.values?.esf ?? {}

      const g = (bucket, name) => {
        const n = Number(bucket[String(name).toLowerCase()]?.valor)

        return Number.isFinite(n) ? roundTo(n, 2) : 0
      }

      const sum = (bucket, names) =>
        roundTo(names.reduce((a, n) => a + g(bucket, n), 0), 2)

      const expected9501 = sum(efemd, [
        "efe_md_95010101","efe_md_95010102","efe_md_95010103","efe_md_95010104","efe_md_95010105",
        "efe_md_95010201","efe_md_95010202","efe_md_95010203","efe_md_95010204","efe_md_95010205",
        "efe_md_950103","efe_md_950104","efe_md_950105","efe_md_950106","efe_md_950107","efe_md_950108",
      ])

      const expected9502 = sum(efemd, [
        "efe_md_950201","efe_md_950202","efe_md_950203","efe_md_950204","efe_md_950205",
        "efe_md_950206","efe_md_950207","efe_md_950208","efe_md_950209","efe_md_950210",
        "efe_md_950211","efe_md_950212","efe_md_950213","efe_md_950214","efe_md_950215",
        "efe_md_950216","efe_md_950217","efe_md_950218","efe_md_950219","efe_md_950220","efe_md_950221",
      ])

      const expected9503 = sum(efemd, [
        "efe_md_950301","efe_md_950302","efe_md_950303","efe_md_950304","efe_md_950305",
        "efe_md_950306","efe_md_950307","efe_md_950308","efe_md_950309","efe_md_950310",
      ])

      const expected95 = roundTo(expected9501 + expected9502 + expected9503, 2)
      const expected9505 = roundTo(expected95 + g(efemd, "efe_md_950401"), 2)

      const expected9506 = roundTo(
        g(esf, "esf_1010101_ant") + g(esf, "esf_1010102_ant") + g(esf, "esf_1010103_ant"), 2,
      )

      const expected9507 = roundTo(expected9505 + expected9506, 2)

      const expected96 = g(eri, "eri_600")

      const sum97 = sum(efemd, [
        "efe_md_9701","efe_md_9702","efe_md_9703","efe_md_9704","efe_md_9705",
        "efe_md_9706","efe_md_9707","efe_md_9708","efe_md_9709","efe_md_9710","efe_md_9711",
      ])

      const sum98 = sum(efemd, [
        "efe_md_9801","efe_md_9802","efe_md_9803","efe_md_9804","efe_md_9805",
        "efe_md_9806","efe_md_9807","efe_md_9808","efe_md_9809","efe_md_9810",
      ])

      const expected9820 = roundTo(expected96 + sum97 + sum98, 2)

      const esfCash = roundTo(
        g(esf, "esf_1010101") + g(esf, "esf_1010102") + g(esf, "esf_1010103"), 2,
      )

      const cuadre1 = roundTo(expected9507 - esfCash, 2) === 0
      const cuadre2 = roundTo(expected9501 - expected9820, 2) === 0

      return (cuadre1 && cuadre2) ? 1 : 0
    },

    calculateEcpCuadre() {
      const esfList = Object.values(this.values?.esf ?? {})
      const ecpList = Object.values(this.values?.ecp ?? {})

      const esfIndex = buildIndexByNombrecampo(esfList)
      const ecpIndex = buildIndexByNombrecampo(ecpList)

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
    // -------------------------------------------
    async load(reporteid) {
      if (!Number.isFinite(Number(reporteid))) {
        throw new Error(`reporteid inválido: ${reporteid}`)
      }

      const logger = useLogger()
      const api = useReportViewerService()

      // ══════════════════════════════════════════════════════════
      // 🟡 FIX: limpiar timer de autosave del reporte anterior
      // ══════════════════════════════════════════════════════════
      if (this._saveTimer) {
        clearTimeout(this._saveTimer)
        this._saveTimer = null
      }

      const fromCache = await this.loadFromCache(Number(reporteid))
      if (fromCache) {
        logger.info("Reporte cargado desde IndexedDB", { reporteid })

        return
      }

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
    // -------------------------------------------
    async initFromFullReport(fullReport) {
      if (!fullReport) return

      const idb = useIndexedDBService()
      const logger = useLogger()

      this.loading = true

      try {
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

        this.reporte = {
          id: normalized.id ?? fullReport.id ?? null,
          reporteid: reporteid ?? normalized.id ?? null,

          empresaId: normalized.empresaId ?? empresaid ?? null,
          periodoId: normalized.periodoId ?? periodoid ?? null,

          empresaid: empresaid ?? normalized.empresaId ?? null,
          periodoid: periodoid ?? normalized.periodoId ?? null,

          userid: userid ?? fullReport.userid ?? null,
          nombre_reporte: nombre_reporte ?? fullReport.nombre_reporte ?? null,

          ...rest,

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

        this._syncReporteValues()

        this.movementCheckpoint = cloneBuckets(this.values)

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
    // Cargar desde IndexedDB (fallback)
    // -------------------------------------------
    async loadFromCache(reporteid) {
      const idb = useIndexedDBService()
      const cached = await idb.getByKey("reportes", reporteid)

      if (!cached) return false

      await this.initFromFullReport(cached)

      return true
    },

    // -------------------------------------------
    // Actualizar un valor de campo
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

      // ══════════════════════════════════════════════════════════
      // 🟡 FIX: Actualizar tablaorigen desde meta si viene
      // ══════════════════════════════════════════════════════════
      if (meta?.tablaorigen) {
        entry.tablaorigen = meta.tablaorigen
      } else if (meta?.row?.tablaorigen && !entry.tablaorigen) {
        entry.tablaorigen = meta.row.tablaorigen
      }

      const oldValue = entry.valor

      let normalizedRaw = newRawValue

      if (typeof normalizedRaw === "string") {
        normalizedRaw = normalizedRaw.trim()
      }

      // ══════════════════════════════════════════════════════════
      // 🟡 FIX LÓGICA #2: Permitir valores "0" y autoCalc.
      //    ANTES: hacía return si normalizedRaw era "" o null
      //    sin distinguir si venía de autoCalc (donde "" = "0").
      //    AHORA: solo hace return si NO es autoCalc y no tiene
      //    allowNull.
      // ══════════════════════════════════════════════════════════
      if ((normalizedRaw === "" || normalizedRaw == null) && !meta?.allowNull && !meta?.autoCalc) {
        return
      }

      const parsed = Number(
        typeof normalizedRaw === "string"
          ? normalizedRaw.replace(",", ".")
          : normalizedRaw,
      )

      if (!Number.isFinite(parsed)) {
        // ══════════════════════════════════════════════════════════
        // 🟡 FIX: Si es autoCalc y el valor es NaN (por ""),
        //    tratarlo como 0 en vez de retornar silenciosamente.
        // ══════════════════════════════════════════════════════════
        if (meta?.autoCalc) {
          entry.valor = 0
          bucket[nombrecampo] = entry
          dirtyBucket[nombrecampo] = { oldValue, newValue: 0, meta }
          this._syncReporteValues()
          this._scheduleSave()

          return
        }

        return
      }

      // ══════════════════════════════════════════════════════════
      // 🟡 FIX LÓGICA #1: El early return cuando oldValue es null
      //    y parsed es 0 impedía persistir valores iniciales.
      //    ANTES: roundTo(null ?? 0, 2) === roundTo(0, 2) → true
      //           → retornaba sin marcar dirty.
      //    AHORA: si es autoCalc, siempre continúa (los totales
      //    calculados deben llegar al backend aunque sean 0).
      // ══════════════════════════════════════════════════════════
      if (roundTo(oldValue ?? 0, 2) === roundTo(parsed, 2) && !meta?.autoCalc) {
        return
      }

      entry.valor = parsed

      bucket[nombrecampo] = entry

      dirtyBucket[nombrecampo] = {
        oldValue,
        newValue: entry.valor,
        meta,
      }

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

      this._syncReporteValues()

      logger.info("Campo de reporte modificado", {
        reporteid: this.reporte.reporteid,
        tipo,
        nombrecampo,
        oldValue,
        newValue: entry.valor,
        meta,
      })

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

    // ══════════════════════════════════════════════════════════
    // 🔴 NUEVO ACTION: flushNow()
    //
    //    Cancela el debounce timer y ejecuta _flushChanges()
    //    de forma inmediata. Se usa:
    //      - En onBeforeUnmount de ReportViewerPage
    //      - Antes de descargas TXT/PDF/Excel en ReportList
    // ══════════════════════════════════════════════════════════
    async flushNow() {
      // 1) Cancelar debounce pendiente
      if (this._saveTimer) {
        clearTimeout(this._saveTimer)
        this._saveTimer = null
      }

      // 2) Si hay un flush en curso, esperar a que termine
      if (this._savingLock) {
        let waited = 0
        while (this._savingLock && waited < 5000) {
          await new Promise(r => setTimeout(r, 100))
          waited += 100
        }
      }

      // 3) Si aún hay cambios pendientes, flush
      if (this.hasPendingChanges) {
        await this._flushChanges()
      }
    },

    // -------------------------------------------
    // Enviar cambios acumulados al backend
    // -------------------------------------------
    async _flushChanges() {
      if (!this.reporte) return
      if (this._savingLock) return

      this._savingLock = true

      const logger = useLogger()
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
        esf: { ...this.dirty.esf },
        eri: { ...this.dirty.eri },
        ecp: { ...this.dirty.ecp },
        efemd: { ...this.dirty.efemd },
      }

      if (
        !Object.keys(dirtyCopy.esf).length   &&
        !Object.keys(dirtyCopy.eri).length   &&
        !Object.keys(dirtyCopy.ecp).length   &&
        !Object.keys(dirtyCopy.efemd).length
      ) {
        this._savingLock = false

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

        if (bodiesEsf.length)   await api.bulkSave("esf",   bodiesEsf)
        if (bodiesEri.length)   await api.bulkSave("eri",   bodiesEri)
        if (bodiesEcp.length)   await api.bulkSave("ecp",   bodiesEcp)
        if (bodiesEfemd.length) await api.bulkSave("efemd", bodiesEfemd)

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
                ...change.meta,
              },
            })
          }
        }

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
            esf: Object.keys(dirtyCopy.esf),
            eri: Object.keys(dirtyCopy.eri),
            ecp: Object.keys(dirtyCopy.ecp),
            efemd: Object.keys(dirtyCopy.efemd),
          },
        })

        registrar({
          modulo: "reportViewer",
          accion: "update",
          targetId: reporteid,
          empresaId: empresaid,
          periodoId: periodoid,
          antes: null,
          despues: null,
          meta: {
            tipos: {
              esf: Object.keys(dirtyCopy.esf),
              eri: Object.keys(dirtyCopy.eri),
              ecp: Object.keys(dirtyCopy.ecp),
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

        const pendingCount =
          Object.keys(dirtyCopy.esf).length +
          Object.keys(dirtyCopy.eri).length +
          Object.keys(dirtyCopy.ecp).length +
          Object.keys(dirtyCopy.efemd).length

        uiSnackbar.show({
          message: `No se pudieron sincronizar ${pendingCount} cambio(s). Se guardaron localmente y se reintentarán cuando la conexión se recupere.`,
          color: "warning",
          timeout: 8000,
        })
      } finally {
        // ══════════════════════════════════════════════════════════
        // 🟡 FIX: _savingLock se libera en UN SOLO finally
        // ══════════════════════════════════════════════════════════
        this._savingLock = false

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
