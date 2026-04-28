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

// Helper: derivar tiporeporte desde datos legacy
const derivarTipo = periodo => {
  if (periodo.tiporeporte) return periodo.tiporeporte
  if (periodo.esconsolidado) return "consolidado"

  return "individual"
}

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

      const lista = await cache.getOrFetch(
        "periodos",
        () => api.fetch(userId),
        { force },
      )

      let periodos = lista.map(normalizePeriodo)

      periodos = logic.periodosActivos(periodos)
      periodos = logic.marcarDuplicados(periodos)

      this.periodos = periodos
      this.loaded = true
    },

    async add(periodoNuevo) {
      const api = usePeriodoService()
      const cache = useCache()
      const { userId } = useSessionUser()

      console.log("periodoNuevo: ", periodoNuevo)

      const res = await api.create(periodoNuevo)

      console.log("res periodo", res)

      await cache.invalidatePeriodos()
      this.loaded = false
      await this.load()

      const body = res?.data
      const rows = Array.isArray(body?.data) ? body.data : []

      // Si el backend devuelve el objeto creado directamente
      if (body?.data && !Array.isArray(body.data) && body.data.id) {
        const creado = body.data

        audit.registrar({
          modulo: "periodos",
          accion: "create",
          targetId: creado.id,
          empresaId: creado.empresaid,
          periodoId: creado.id,
          antes: null,
          despues: creado,
        })

        return creado
      }

      // Fallback: buscar en array de rows
      let creado =
        rows.find(r =>
          r &&
          r.empresaid === periodoNuevo.empresaid &&
          Number(r.periodo) === Number(periodoNuevo.periodo) &&
          derivarTipo(r) === (periodoNuevo.tiporeporte || "individual") &&
          (r.userid ? r.userid === periodoNuevo.userid : true),
        )

      if (!creado && rows.length) {
        creado = [...rows].sort((a, b) => (Number(b.id) || 0) - (Number(a.id) || 0))[0]
      }

      console.log("creado resuelto:", creado)

      audit.registrar({
        modulo: "periodos",
        accion: "create",
        targetId: creado?.id ?? null,
        empresaId: creado?.empresaid,
        periodoId: creado?.id ?? null,
        antes: null,
        despues: creado,
      })

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

      const origenTipo = derivarTipo(origen)

      // "inicial" nunca se puede duplicar (alineado con PeriodoList.vue)
      if (origenTipo === "inicial") {
        console.warn("[periodos.store] duplicate: tipo no duplicable:", origenTipo)

        return null
      }

      const siguientePeriodo = Number(origen.periodo) + 1

      // Verificar si ya existe el periodo siguiente con el mismo tipo
      const yaExiste = this.periodos.some(
        p =>
          p.empresaid === origen.empresaid &&
          Number(p.periodo) === siguientePeriodo &&
          derivarTipo(p) === origenTipo &&
          !p.deletedat,
      )

      if (yaExiste) {
        console.warn("[periodos.store] duplicate: ya existe el período siguiente para esta empresa")

        return null
      }

      this.loading = true
      try {
        // 1) Crear el nuevo período con tiporeporte
        const nuevoPeriodo = await this.add({
          periodo: siguientePeriodo,
          empresaid: origen.empresaid,
          userid: userId,
          tiporeporte: origenTipo,
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

        periodoData.reporte.tiporeporte = origenTipo

        // 3) Obtener los values del período origen para copiarlos como _ant
        //    Usamos getValuesByEmpresaPeriodo (by-period) en lugar de getValues(reporteid)
        //    para evitar el 412 que lanza el endpoint /:reporteid/values cuando el reporte
        //    origen no tiene todos los campos de modelo requeridos por esa validación.
        let prevValuesPerTipo = null

        try {
          const valuesBody = await reportesService.getValuesByEmpresaPeriodo(
            origen.empresaid,
            origen.id,
          )

          const allValues = valuesBody?.data ?? {}

          prevValuesPerTipo = {
            esf:   allValues.esfvalues   ?? allValues.esf   ?? [],
            eri:   allValues.erivalues   ?? allValues.eri   ?? [],
            ecp:   allValues.ecpvalues   ?? allValues.ecp   ?? [],
            efemd: allValues.efemdvalues ?? allValues.efemd ?? [],
          }

          console.log("[periodos.store] duplicate: values del período origen obtenidos", {
            esf:   prevValuesPerTipo.esf.length,
            eri:   prevValuesPerTipo.eri.length,
            ecp:   prevValuesPerTipo.ecp.length,
            efemd: prevValuesPerTipo.efemd.length,
          })
        } catch (err) {
          console.warn("[periodos.store] duplicate: error al leer values del período anterior (by-period)", err)

          // Fallback: intentar por reporteid (puede fallar en algunos casos legacy)
          try {
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
              const valuesBody = await reportesService.getValues(prevReporteId)
              const allValues  = valuesBody?.data ?? {}

              prevValuesPerTipo = {
                esf:   allValues.esfvalues   ?? allValues.esf   ?? [],
                eri:   allValues.erivalues   ?? allValues.eri   ?? [],
                ecp:   allValues.ecpvalues   ?? allValues.ecp   ?? [],
                efemd: allValues.efemdvalues ?? allValues.efemd ?? [],
              }

              console.log("[periodos.store] duplicate: values obtenidos por fallback (reporteid)", prevReporteId)
            } else {
              console.warn("[periodos.store] duplicate: el período origen no tiene reporte asociado")
            }
          } catch (err2) {
            console.warn("[periodos.store] duplicate: fallback por reporteid también falló", err2)
          }
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
              // Los bloques _ant tienen sufijo '_ant' en cada clave (ej. esf_1_ant),
              // pero el dict del periodo origen usa las claves sin sufijo (ej. esf_1).
              // Quitamos '_ant' para hacer el lookup correcto.
              const baseKey = key.endsWith("_ant") ? key.slice(0, -4) : key
              if (Object.prototype.hasOwnProperty.call(dict, baseKey)) {
                block[key] = dict[baseKey]
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

        // 5) Crear el reporte + values del nuevo período
        await reportesStore.addReporteConvertex(periodoData)

        return nuevoPeriodo
      } finally {
        this.loading = false
      }
    },
  },
})
