<!-- src/views/reportes/ReportList.vue -->
<script setup>
import { computed, onMounted, ref, watch } from "vue"
import { storeToRefs } from "pinia"
import { useReportesStore } from "@/@store/reportes.store"
import { useRouter } from "vue-router"
import { useReportesService } from "@/services/reportes.service"
import { useReportViewerStore } from "@/@store/reportViewer.store"

const router = useRouter()
const reportStore = useReportesStore()
const reportesService = useReportesService()

const { reportes, loaded } = storeToRefs(reportStore)
const isLoading = computed(() => !reportStore.loaded)

// ── Loading states indexados por reporteid (no por posición de array) ──
const loadingsXls = ref({})
const loadingsPdf = ref({})
const loadingsTxt = ref({})

onMounted(async () => {
  if (!loaded.value) await reportStore.load({ force: true })
})

// ══════════════════════════════════════════════
// Flush cambios pendientes antes de descargar
// ══════════════════════════════════════════════
const ensureFlush = async reporteid => {
  const viewerStore = useReportViewerStore()
  if (
    viewerStore.reporte?.reporteid === reporteid &&
    viewerStore.hasPendingChanges
  ) {
    console.log(`[ReportList] Flushing pending changes for reporte ${reporteid}...`)
    await viewerStore.flushNow()
    await new Promise(r => setTimeout(r, 500))
    console.log("[ReportList] Flush completado, procediendo con descarga")
  }
}

// ── Acciones de descarga ──────────────────────
const exportarPdf = async rep => {
  loadingsPdf.value[rep.reporteid] = true
  try {
    await ensureFlush(rep.reporteid)
    await reportesService.downloadPdf(rep.reporteid, { forceRefresh: true })
  } catch (err) {
    console.error("Error descargando PDF:", err)
  } finally {
    loadingsPdf.value[rep.reporteid] = false
  }
}

const exportarXls = async rep => {
  loadingsXls.value[rep.reporteid] = true
  try {
    await ensureFlush(rep.reporteid)
    await reportesService.downloadExcel(rep.reporteid, { forceRefresh: true })
  } catch (err) {
    console.error("Error descargando Excel:", err)
  } finally {
    loadingsXls.value[rep.reporteid] = false
  }
}

const exportarTxt = async rep => {
  loadingsTxt.value[rep.reporteid] = true
  try {
    await ensureFlush(rep.reporteid)
    const tipos = ["esf", "eri", "efe", "ecp"]
    await Promise.all(
      tipos.map(tipo =>
        reportesService.downloadTxt(rep.reporteid, { tipo, forceRefresh: true }),
      ),
    )
  } catch (err) {
    console.error("Error descargando TXT SRI:", err)
  } finally {
    loadingsTxt.value[rep.reporteid] = false
  }
}

const editarReporte = rep => {
  router.push(`/reportes/reportviewer/ReportViewerPage?action=editar&reporteid=${rep.reporteid}`)
}

// ══════════════════════════════════════════════
// Helpers de tipo (mismo patrón que PeriodoList)
// ══════════════════════════════════════════════
const derivarTipo = r => {
  if (r.tiporeporte) return r.tiporeporte
  if (r.periodo?.tiporeporte) return r.periodo.tiporeporte
  if (r.esconsolidado) return "consolidado"
  return "individual"
}

const tipoLabel = r => {
  const t = derivarTipo(r)
  if (t === "inicial") return "Inicial"
  if (t === "consolidado") return "Consolidado"
  return "Individual"
}

const tipoColor = r => {
  const t = derivarTipo(r)
  if (t === "inicial") return "info"
  if (t === "consolidado") return "warning"
  return "success"
}

const tipoIcon = r => {
  const t = derivarTipo(r)
  if (t === "inicial") return "tabler-calendar-check"
  if (t === "consolidado") return "tabler-building-bank"
  return "tabler-user"
}

const formatDate = raw => {
  if (!raw) return "—"
  try {
    return new Date(raw).toLocaleDateString("es-EC", {
      day: "2-digit", month: "2-digit", year: "numeric",
    })
  } catch {
    return String(raw).substring(0, 10)
  }
}

// ══════════════════════════════════════════════
// Búsqueda, filtros y paginación
// ══════════════════════════════════════════════
const searchQuery   = ref("")
const filterEmpresa = ref(null)
const filterTipo    = ref(null)
const currentPage   = ref(1)
const rowsPerPage   = ref(10)

// Stat cards ↔ filtro tipo sincronizados (igual que PeriodoList)
const activeStatFilter = ref(null)
watch(activeStatFilter, val => { filterTipo.value = val })
watch(filterTipo, val => { if (val !== activeStatFilter.value) activeStatFilter.value = null })

// Reset página al cambiar filtros
watch([searchQuery, filterEmpresa, filterTipo], () => { currentPage.value = 1 })

// Opciones de empresa para el selector
const empresasOptions = computed(() => {
  const map = new Map()
  for (const r of reportes.value) {
    const nombre = r.empresa?.nombre
    const id = r.empresa?.id ?? r.empresaid
    if (nombre && id && !map.has(id)) map.set(id, { title: nombre, value: id })
  }
  return Array.from(map.values())
})

const tipoOptions = [
  { title: "Todos",       value: null          },
  { title: "Individual",  value: "individual"  },
  { title: "Consolidado", value: "consolidado" },
  { title: "Inicial",     value: "inicial"     },
]

const filteredReportes = computed(() => {
  let items = reportes.value

  if (filterEmpresa.value)
    items = items.filter(r => (r.empresa?.id ?? r.empresaid) === filterEmpresa.value)

  if (filterTipo.value)
    items = items.filter(r => derivarTipo(r) === filterTipo.value)

  const q = searchQuery.value.trim().toLowerCase()
  if (q)
    items = items.filter(r =>
      (r.empresa?.nombre ?? "").toLowerCase().includes(q) ||
      String(r.periodo?.periodo ?? "").includes(q) ||
      tipoLabel(r).toLowerCase().includes(q),
    )

  return items
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredReportes.value.length / rowsPerPage.value)),
)

const paginatedReportes = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value
  return filteredReportes.value.slice(start, start + rowsPerPage.value)
})

const paginationText = computed(() => {
  const total = filteredReportes.value.length
  if (!total) return "Sin reportes"
  const first = (currentPage.value - 1) * rowsPerPage.value + 1
  const last  = Math.min(currentPage.value * rowsPerPage.value, total)
  return `${first}–${last} de ${total}`
})

// Stats para las cards
const stats = computed(() => ({
  total:       reportes.value.length,
  individual:  reportes.value.filter(r => derivarTipo(r) === "individual").length,
  consolidado: reportes.value.filter(r => derivarTipo(r) === "consolidado").length,
  inicial:     reportes.value.filter(r => derivarTipo(r) === "inicial").length,
}))
</script>

<template>
  <section class="rl">

    <!-- ═══════════════════════════════════════════════════════════════
         HEADER — idéntico a EmpresaList y PeriodoList
    ═══════════════════════════════════════════════════════════════ -->
    <div class="rl-header">
      <div class="rl-header__bg" />
      <div class="rl-header__content">
        <div class="rl-header__left">
          <h1 class="rl-header__title">Reportes</h1>
          <p class="rl-header__sub">Descarga y gestiona los reportes financieros de tus empresas</p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════
         STATS — idéntico a PeriodoList
    ═══════════════════════════════════════════════════════════════ -->
    <div class="rl-stats">
      <div
        class="rl-stat"
        :class="{ 'rl-stat--active': activeStatFilter === null }"
        @click="activeStatFilter = null; filterTipo = null"
      >
        <div class="rl-stat__icon rl-stat__icon--navy">
          <VIcon size="18" color="#2C3555">tabler-files</VIcon>
        </div>
        <div class="rl-stat__value">{{ stats.total }}</div>
        <div class="rl-stat__label">Total</div>
      </div>

      <div
        class="rl-stat"
        :class="{ 'rl-stat--active': activeStatFilter === 'individual' }"
        @click="activeStatFilter = activeStatFilter === 'individual' ? null : 'individual'"
      >
        <div class="rl-stat__icon rl-stat__icon--green">
          <VIcon size="18" color="#477130">tabler-user</VIcon>
        </div>
        <div class="rl-stat__value">{{ stats.individual }}</div>
        <div class="rl-stat__label">Individual</div>
      </div>

      <div
        class="rl-stat"
        :class="{ 'rl-stat--active': activeStatFilter === 'consolidado' }"
        @click="activeStatFilter = activeStatFilter === 'consolidado' ? null : 'consolidado'"
      >
        <div class="rl-stat__icon rl-stat__icon--amber">
          <VIcon size="18" color="#D4884A">tabler-building-bank</VIcon>
        </div>
        <div class="rl-stat__value">{{ stats.consolidado }}</div>
        <div class="rl-stat__label">Consolidado</div>
      </div>

      <div
        class="rl-stat"
        :class="{ 'rl-stat--active': activeStatFilter === 'inicial' }"
        @click="activeStatFilter = activeStatFilter === 'inicial' ? null : 'inicial'"
      >
        <div class="rl-stat__icon rl-stat__icon--blue">
          <VIcon size="18" color="#1976D2">tabler-calendar-check</VIcon>
        </div>
        <div class="rl-stat__value">{{ stats.inicial }}</div>
        <div class="rl-stat__label">Inicial</div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════
         TABLE SECTION — idéntico a PeriodoList
    ═══════════════════════════════════════════════════════════════ -->
    <div class="rl-section">

      <!-- Toolbar -->
      <div class="rl-toolbar">
        <VTextField
          v-model="searchQuery"
          placeholder="Buscar por empresa, año o tipo..."
          variant="outlined"
          density="compact"
          hide-details
          prepend-inner-icon="tabler-search"
          clearable
          class="rl-search"
        />

        <VSelect
          v-model="filterEmpresa"
          :items="empresasOptions"
          label="Empresa"
          variant="outlined"
          density="compact"
          hide-details
          clearable
          class="rl-filter"
          prepend-inner-icon="tabler-building"
        />

        <VSelect
          v-model="filterTipo"
          :items="tipoOptions"
          label="Tipo"
          variant="outlined"
          density="compact"
          hide-details
          clearable
          class="rl-filter rl-filter--sm"
          prepend-inner-icon="tabler-filter"
        />
      </div>

      <!-- Tabla -->
      <div class="rl-table-wrap">
        <VTable class="rl-table" density="compact">
          <thead>
          <tr>
            <th>Empresa</th>
            <th>Periodo</th>
            <th>Tipo EEFF</th>
            <th>Fecha</th>
            <th style="width: 200px;">Acciones</th>
          </tr>
          </thead>

          <tbody>
          <!-- Cargando -->
          <tr v-if="isLoading">
            <td colspan="5" class="rl-table__loading">
              <VProgressCircular indeterminate size="24" color="primary" />
              <span>Cargando reportes...</span>
            </td>
          </tr>

          <!-- Datos -->
          <template v-else-if="paginatedReportes.length">
            <tr
              v-for="rep in paginatedReportes"
              :key="rep.reporteid"
              class="rl-table__row"
            >
              <!-- Empresa -->
              <td class="rl-table__empresa">
                <VIcon icon="tabler-building" size="15" color="#D4884A" class="mr-2" />
                <div>
                  <div class="rl-table__empresa-nombre">{{ rep.empresa?.nombre ?? '—' }}</div>
                  <div class="rl-table__empresa-ruc">{{ rep.empresa?.ruc ?? '' }}</div>
                </div>
              </td>

              <!-- Periodo -->
              <td class="rl-table__periodo">
                <strong>{{ rep.periodo?.periodo ?? '—' }}</strong>
              </td>

              <!-- Tipo -->
              <td>
                <VChip size="x-small" :color="tipoColor(rep)" variant="flat">
                  <VIcon :icon="tipoIcon(rep)" start size="13" />
                  {{ tipoLabel(rep) }}
                </VChip>
              </td>

              <!-- Fecha -->
              <td class="rl-table__date">{{ formatDate(rep.createdat) }}</td>

              <!-- Descargas + Editar en una sola celda -->
              <td class="rl-table__actions">
                <VTooltip text="Descargar Excel" location="top">
                  <template #activator="{ props: tp }">
                    <VBtn
                      v-bind="tp"
                      icon size="x-small" color="default" variant="text"
                      :loading="loadingsXls[rep.reporteid]"
                      :disabled="loadingsXls[rep.reporteid]"
                      @click="exportarXls(rep)"
                    >
                      <VIcon size="20" icon="tabler-file-type-xls" />
                    </VBtn>
                  </template>
                </VTooltip>

                <VTooltip text="Descargar TXT (SRI)" location="top">
                  <template #activator="{ props: tp }">
                    <VBtn
                      v-bind="tp"
                      icon size="x-small" color="default" variant="text"
                      :loading="loadingsTxt[rep.reporteid]"
                      :disabled="loadingsTxt[rep.reporteid]"
                      @click="exportarTxt(rep)"
                    >
                      <VIcon size="20" icon="tabler-file-type-txt" />
                    </VBtn>
                  </template>
                </VTooltip>

                <VTooltip text="Descargar PDF" location="top">
                  <template #activator="{ props: tp }">
                    <VBtn
                      v-bind="tp"
                      icon size="x-small" color="default" variant="text"
                      :loading="loadingsPdf[rep.reporteid]"
                      :disabled="loadingsPdf[rep.reporteid]"
                      @click="exportarPdf(rep)"
                    >
                      <VIcon size="20" icon="tabler-file-type-pdf" />
                    </VBtn>
                  </template>
                </VTooltip>

                <!-- Separador visual -->
                <span class="rl-table__divider" />

                <VTooltip text="Abrir reporte" location="top">
                  <template #activator="{ props: tp }">
                    <VBtn
                      v-bind="tp"
                      icon variant="text" size="x-small"
                      @click="editarReporte(rep)"
                    >
                      <VIcon icon="tabler-edit" size="18" color="primary" />
                    </VBtn>
                  </template>
                </VTooltip>
              </td>
            </tr>
          </template>

          <!-- Sin resultados -->
          <tr v-else>
            <td colspan="5" class="rl-table__empty">
              <VIcon size="36" color="grey-lighten-1" class="mb-2">
                {{ searchQuery || filterEmpresa || filterTipo ? 'tabler-search-off' : 'tabler-report-off' }}
              </VIcon>
              <div>
                {{ searchQuery || filterEmpresa || filterTipo
                ? 'Sin resultados para estos filtros'
                : 'No hay reportes creados' }}
              </div>
            </td>
          </tr>
          </tbody>
        </VTable>
      </div>

      <!-- Paginación — mismo patrón que EmpresaList y PeriodoList -->
      <div class="rl-pagination">
        <span class="rl-pagination__text">{{ paginationText }}</span>
        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPages"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.rl {
  --rl-navy:  #2C3555;
  --rl-amber: #D4884A;
  --rl-r:     10px;
  --rl-ff:    "DM Sans", "Outfit", -apple-system, sans-serif;
  --rl-fd:    "Instrument Serif", "DM Serif Display", Georgia, serif;
  font-family: var(--rl-ff);
  color: var(--rl-navy);
}

/* ═══════════════════════════════════════════════════════════════
   HEADER — pixel-perfect igual a EmpresaList / PeriodoList
   ═══════════════════════════════════════════════════════════════ */
.rl-header {
  position: relative;
  padding: 32px 28px 24px;
  background: var(--rl-navy);
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  margin-bottom: 20px;
}

.rl-header__bg {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(ellipse at 20% 80%, rgba(212,136,74,.1) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 20%, rgba(212,136,74,.06) 0%, transparent 40%);
}

.rl-header__content {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}

.rl-header__title {
  font-family: var(--rl-fd);
  font-size: 26px; font-weight: 400;
  color: rgba(255,255,255,.92);
  margin: 0 0 4px;
}

.rl-header__sub {
  font-size: 13px;
  color: rgba(255,255,255,.4);
  margin: 0;
}

/* ═══════════════════════════════════════════════════════════════
   STATS — pixel-perfect igual a PeriodoList
   ═══════════════════════════════════════════════════════════════ */
.rl-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0 16px;
  margin-bottom: 16px;
}

.rl-stat {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px;
  background: white;
  border: 1px solid rgba(44,53,85,.05);
  border-radius: var(--rl-r);
  cursor: pointer;
  transition: all .15s;
}

.rl-stat:hover {
  border-color: rgba(212,136,74,.2);
}

.rl-stat--active {
  border-color: rgba(212,136,74,.35) !important;
  background: rgba(212,136,74,.04) !important;
}

.rl-stat__icon {
  width: 36px; height: 36px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 8px; flex-shrink: 0;
}

.rl-stat__icon--navy  { background: rgba(44,53,85,.06);   }
.rl-stat__icon--green { background: rgba(71,113,48,.06);  }
.rl-stat__icon--amber { background: rgba(212,136,74,.06); }
.rl-stat__icon--blue  { background: rgba(25,118,210,.06); }

.rl-stat__value { font-size: 20px; font-weight: 700; color: var(--rl-navy); }
.rl-stat__label { font-size: 11px; color: rgba(44,53,85,.4); }

/* ═══════════════════════════════════════════════════════════════
   TABLE SECTION — pixel-perfect igual a PeriodoList
   ═══════════════════════════════════════════════════════════════ */
.rl-section {
  background: white;
  border: 1px solid rgba(44,53,85,.05);
  border-radius: 12px;
  padding: 20px 24px;
  margin: 0 16px 20px;
}

.rl-toolbar {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px; flex-wrap: wrap;
}

.rl-search     { max-width: 280px; }
.rl-filter     { max-width: 200px; }
.rl-filter--sm { max-width: 160px; }

.rl-search :deep(.v-field),
.rl-filter :deep(.v-field) {
  border-radius: 8px !important;
  font-size: 13px;
}

.rl-table-wrap {
  border: 1px solid rgba(44,53,85,.05);
  border-radius: 8px;
  overflow: hidden;
}

.rl-table thead th {
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase;
  letter-spacing: .04em;
  color: rgba(44,53,85,.45) !important;
  background: rgba(44,53,85,.02);
  border-bottom: 1px solid rgba(44,53,85,.06) !important;
  padding: 12px 16px !important;
  white-space: nowrap;
}

.rl-table tbody tr { transition: background .1s; }
.rl-table__row:hover { background: rgba(44,53,85,.015); }

.rl-table tbody td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(44,53,85,.03) !important;
  font-size: 13px;
  color: rgba(44,53,85,.7);
}

.rl-table__empresa {
  display: flex !important;
  align-items: center;
}

.rl-table__empresa-nombre {
  font-size: 13px; font-weight: 600;
  color: var(--rl-navy); line-height: 1.2;
}

.rl-table__empresa-ruc {
  font-size: 11px; color: rgba(44,53,85,.4);
  font-family: "SF Mono", "Fira Code", monospace;
}

.rl-table__periodo {
  font-size: 15px; color: var(--rl-navy) !important;
}

.rl-table__date {
  font-size: 12px; color: rgba(44,53,85,.4) !important;
}

.rl-table__actions {
  display: flex;
  align-items: center;
  gap: 2px;
  vertical-align: middle !important;
}

.rl-table__divider {
  display: inline-block;
  width: 1px;
  height: 16px;
  background: rgba(44,53,85,.12);
  margin: 0 4px;
  vertical-align: middle;
  flex-shrink: 0;
}

.rl-table__loading {
  text-align: center !important;
  padding: 48px 16px !important;
  color: rgba(44,53,85,.4); font-size: 13px;
}

.rl-table__empty {
  text-align: center;
  padding: 48px 16px !important;
  color: rgba(44,53,85,.3); font-size: 13px;
}

/* ═══════════════════════════════════════════════════════════════
   PAGINACIÓN — pixel-perfect igual a EmpresaList y PeriodoList
   ═══════════════════════════════════════════════════════════════ */
.rl-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px 0;
  flex-wrap: wrap;
  gap: 12px;
}

.rl-pagination__text {
  font-size: 12px; color: rgba(44,53,85,.4);
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .rl-header          { padding: 24px 16px; }
  .rl-header__content { flex-direction: column; align-items: flex-start; }
  .rl-header__title   { font-size: 22px; }
  .rl-stats           { grid-template-columns: repeat(2, 1fr); padding: 0 8px; }
  .rl-section         { margin: 0 8px 16px; padding: 16px; }
  .rl-toolbar         { flex-direction: column; }
  .rl-search,
  .rl-filter,
  .rl-filter--sm      { max-width: 100%; width: 100%; }
}
</style>
