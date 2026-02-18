import { defineStore } from "pinia"
import { useCache } from "@/composables/useCache"
import { usePeriodoService } from "@/services/periodo.service"
import { usePeriodoLogic } from "@/composables/usePeriodoLogic"
import { normalizePeriodo } from "@/utils/periodo-normalizer"
import { useSessionUser } from "@/composables/useSessionUser"
import { useAudit } from "@/composables/useAudit"

import { useReportesService } from "@/services/reportes.service"
import { useReportesStore } from "@/@store/reportes.store"
import { obtenerDatosReporte } from "@core/utils/reportes"

const audit = useAudit()

export const usePeriodoStore = defineStore("periodos", {
  state: () => ({
    periodos: [],
    loaded: false,
    loading: false,
  }),

  getters: {
    activos(state) {
      return state.periodos.filter(p => !p.deletedat)
    },
  },

  actions: {
    async load({ force = false } = {}) {
      const { userId } = useSessionUser()
      const cache = useCache()
      const api = usePeriodoService()
      const logic = usePeriodoLogic()

      // Carga desde IndexedDB o API
      const lista = await cache.getOrFetch(
        "periodos",
        () => api.fetch(userId),
        { force },
      )

      // normalizar
      let periodos = lista.map(normalizePeriodo)

      // filtrar eliminados
      periodos = logic.periodosActivos(periodos)

      // marcar duplicados
      periodos = logic.marcarDuplicados(periodos)

      this.periodos = periodos
      this.loaded = true
    },

    // periodo.store.js
    async add(periodoNuevo) {
      const api = usePeriodoService()
      const cache = useCache()
      const { userId } = useSessionUser()

      console.log("periodoNuevo: ", periodoNuevo)

      // Llamada a la API: asumimos que devuelve un axios response o el objeto directamente
      const res = await api.create(periodoNuevo)

      console.log('res periodo', res)

      // Invalidar cache y recargar lista
      await cache.invalidatePeriodos()
      this.loaded = false
      await this.load()

      const body = res?.data
      const rows = Array.isArray(body?.data) ? body.data : []

      // intenta encontrar el periodo exacto por empresa + periodo (+ userid si aplica)
      let creado =
        rows.find(r =>
          r &&
          r.empresaid === periodoNuevo.empresaid &&
          Number(r.periodo) === Number(periodoNuevo.periodo) &&
          (r.userid ? r.userid === periodoNuevo.userid : true),
        )

      // fallback: el de mayor id (normalmente el recién insertado)
      if (!creado && rows.length) {
        creado = [...rows].sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0))[0]
      }

      console.log("rows devueltos:", rows)
      console.log("creado resuelto:", creado)

      console.log("creado: ", creado)

      // Registrar auditoría con lo que tengamos (opcional, como ya lo tenías)
      audit.registrar({
        modulo: "periodos",
        accion: "create",
        targetId: creado?.id ?? null,
        empresaId: creado?.empresaid,
        periodoId: creado?.id ?? null,
        antes: null,
        despues: creado,
      })

      console.log('audit: ', {
        modulo: "periodos",
        accion: "create",
        targetId: creado?.id ?? null,
        empresaId: creado?.empresaid,
        periodoId: creado?.id ?? null,
        antes: null,
        despues: creado,
      })

      // 👉 Devolver el periodo creado (o null si no pudimos identificarlo)
      return creado
    },


    async remove(id) {
      const api = usePeriodoService()
      const cache = useCache()

      await api.delete(id)

      await cache.invalidatePeriodos()
      this.loaded = false

      await this.load()
    },

    async duplicate(id) {
      const cache = useCache()
      const { userId } = useSessionUser()
      const reportesService = useReportesService()
      const reportesStore = useReportesStore()

      const origen = this.periodos.find(p => p.id === id)
      if (!origen) {
        console.warn("[periodos.store] duplicate: no se encontró el período origen", id)

        return null
      }

      const siguientePeriodo = Number(origen.periodo) + 1

      // Seguridad extra: si ya existe el periodo siguiente, no duplicar
      const origenEsConsolidado = Boolean(origen.esconsolidado)

      const yaExiste = this.periodos.some(
        p =>
          p.empresaid === origen.empresaid &&
          Number(p.periodo) === siguientePeriodo &&
          Boolean(p.esconsolidado) === origenEsConsolidado &&
          !p.deletedat,
      )

      if (yaExiste) {
        console.warn("[periodos.store] duplicate: ya existe el período siguiente para esta empresa")

        return null
      }

      this.loading = true
      try {
        // 1) Crear el nuevo período (igual que desde el drawer)
        const nuevoPeriodo = await this.add({
          periodo: siguientePeriodo,
          empresaid: origen.empresaid,
          userid: userId,
          esconsolidado: origen.esconsolidado,
        })

        if (!nuevoPeriodo || !nuevoPeriodo.id) {
          console.warn("[periodos.store] duplicate: no se pudo crear el nuevo período")

          return null
        }

        // 2) Construir la data base del reporte para el nuevo período
        const periodoData = await obtenerDatosReporte(
          userId,
          nuevoPeriodo.id,
          origen.empresaid,
        )

        periodoData.reporte.esconsolidado = Boolean(origen.esconsolidado)

        // 3) Buscar el reporte del período origen y sus values
        let prevValuesPerTipo = null

        try {
          // 3.1) Lookup del reporte del período origen
          const lookupBody = await reportesService.getByEmpresaPeriodo({
            empresaid: origen.empresaid,
            periodoid: origen.id,
          })

          const reporteAnterior =
            lookupBody?.data ??
            lookupBody?.reporte ??
            lookupBody ??
            null

          const prevReporteId = reporteAnterior?.reporteid

          if (prevReporteId) {
            // 3.2) Traer TODOS los values del reporte anterior
            const valuesBody = await reportesService.getValues(prevReporteId)
            const allValues = valuesBody?.data ?? {}

            prevValuesPerTipo = {
              esf: allValues.esfvalues ?? allValues.esf ?? [],
              eri: allValues.erivalues ?? allValues.eri ?? [],
              ecp: allValues.ecpvalues ?? allValues.ecp ?? [],
              efemd: allValues.efemdvalues ?? allValues.efemd ?? [],
            }
          } else {
            console.warn("[periodos.store] duplicate: el período origen no tiene reporte asociado")
          }
        } catch (err) {
          console.warn("[periodos.store] duplicate: error al leer values del período anterior", err)
        }

        // 4) Copiar los valores del período anterior a los bloques *_ant del nuevo período
        if (prevValuesPerTipo) {
          const mapByNombreCampo = (rows = []) => {
            const dict = {}
            for (const row of rows) {
              if (!row) continue
              const nombre = row.nombrecampo
              if (!nombre) continue
              if (row.valor == null) continue
              dict[nombre] = row.valor
            }

            return dict
          }

          const prevEsf = mapByNombreCampo(prevValuesPerTipo.esf)
          const prevEri = mapByNombreCampo(prevValuesPerTipo.eri)
          const prevEcp = mapByNombreCampo(prevValuesPerTipo.ecp)

          const patchBlock = (block, dict, prefix) => {
            if (!block || typeof block !== "object") return
            Object.keys(block).forEach(key => {
              if (!key.startsWith(prefix)) return
              if (Object.prototype.hasOwnProperty.call(dict, key)) {
                block[key] = dict[key]
              }
            })
          }

          // ESF – período anterior
          patchBlock(periodoData.activoscorrientesconvertex_ant, prevEsf, "esf_")
          patchBlock(periodoData.activosnocorrientesconvertex_ant, prevEsf, "esf_")
          patchBlock(periodoData.pasivoscorrientesconvertex_ant, prevEsf, "esf_")
          patchBlock(periodoData.pasivosnocorrientesconvertex_ant, prevEsf, "esf_")
          patchBlock(periodoData.patrimonioconvertex_ant, prevEsf, "esf_")

          // ERI – período anterior
          patchBlock(periodoData.ingresosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.costosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.otrosingresosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.gastosdeventasconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.gastosadministrativosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.gastosfinancierosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.otrosgastosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.resultadosconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.operacionesdiscontinuadasconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.otrosresultadosintegralconvertex_ant, prevEri, "eri_")
          patchBlock(periodoData.resultadosparticipacioncontroladoraconvertex_ant, prevEri, "eri_")
        }

        // 5) Crear el reporte + values del nuevo período (actual + anteriores ya parcheados)
        await reportesStore.addReporteConvertex(periodoData)

        // El add() ya recargó periodos; reportesStore.addReporteConvertex recarga reportes.
        return nuevoPeriodo
      } finally {
        this.loading = false
      }
    },
  },
})
