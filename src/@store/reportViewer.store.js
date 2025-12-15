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

      const parsed =
        newRawValue === "" || newRawValue == null
          ? null
          : Number(
            typeof newRawValue === "string"
              ? newRawValue.replace(",", ".")
              : newRawValue,
          )

      entry.valor = Number.isNaN(parsed) ? null : parsed

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
    },
  },
})
