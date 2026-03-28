<!-- src/views/periodos/PeriodoList.vue -->
<script setup>
import { onMounted, ref, computed, watch } from "vue"
import { usePeriodoStore } from "@/@store/periodo.store"
import { useEmpresaStore } from "@/@store/empresa.store"
import { useReportesStore } from "@/@store/reportes.store"
import AddPeriodoDrawer from "./AddPeriodoDrawer.vue"

const periodoStore = usePeriodoStore()
const empresaStore = useEmpresaStore()
const reportStore = useReportesStore()

const isDrawerOpen = ref(false)

// Search, filter & pagination
const searchQuery = ref("")
const filterEmpresa = ref(null)
const filterTipo = ref(null)
const currentPage = ref(1)
const rowsPerPage = ref(10)

// Dialogs
const deleteDialogOpen = ref(false)
const duplicateDialogOpen = ref(false)
const targetPeriodo = ref(null)
const deleting = ref(false)
const duplicating = ref(false)

const TIPOS_NO_DUPLICABLES = new Set(["inicial"])

// ── Helpers ───────────────────────────────────────────────
const derivarTipo = (p) => {
  if (p.tiporeporte) return p.tiporeporte
  if (p.esconsolidado) return "consolidado"
  return "individual"
}

const tipoLabel = (p) => {
  const t = derivarTipo(p)
  if (t === "inicial") return "Inicial"
  if (t === "consolidado") return "Consolidado"
  return "Individual"
}

const tipoColor = (p) => {
  const t = derivarTipo(p)
  if (t === "inicial") return "info"
  if (t === "consolidado") return "warning"
  return "success"
}

const tipoIcon = (p) => {
  const t = derivarTipo(p)
  if (t === "inicial") return "tabler-calendar-check"
  if (t === "consolidado") return "tabler-building-bank"
  return "tabler-user"
}

const formatDate = (raw) => {
  if (!raw) return "—"
  try {
    const d = new Date(raw)
    return d.toLocaleDateString("es-EC", {
      day: "2-digit", month: "2-digit", year: "numeric",
    })
  } catch {
    return String(raw).substring(0, 10)
  }
}

const empresaNombre = (p) => p.empresa?.nombre || p.empresaid || "—"

// ── Computed ──────────────────────────────────────────────
const periodos = computed(() => periodoStore.periodos ?? [])
const isLoading = computed(() => periodoStore.loading ?? !periodoStore.loaded)

const empresasOptions = computed(() => {
  const map = new Map()
  for (const p of periodos.value) {
    const name = empresaNombre(p)
    const id = p.empresaid
    if (id && !map.has(id)) map.set(id, { title: name, value: id })
  }
  return Array.from(map.values())
})

const tipoOptions = [
  { title: "Todos", value: null },
  { title: "Individual", value: "individual" },
  { title: "Consolidado", value: "consolidado" },
  { title: "Inicial", value: "inicial" },
]

const filteredPeriodos = computed(() => {
  let items = periodos.value

  if (filterEmpresa.value)
    items = items.filter(p => p.empresaid === filterEmpresa.value)

  if (filterTipo.value)
    items = items.filter(p => derivarTipo(p) === filterTipo.value)

  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    items = items.filter(p =>
      empresaNombre(p).toLowerCase().includes(q) ||
      String(p.periodo).includes(q),
    )
  }

  return items
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPeriodos.value.length / rowsPerPage.value)),
)

const paginatedPeriodos = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value
  return filteredPeriodos.value.slice(start, start + rowsPerPage.value)
})

const paginationText = computed(() => {
  const total = filteredPeriodos.value.length
  if (!total) return "Sin periodos"
  const first = (currentPage.value - 1) * rowsPerPage.value + 1
  const last = Math.min(currentPage.value * rowsPerPage.value, total)
  return `${first}–${last} de ${total}`
})

watch([searchQuery, filterEmpresa, filterTipo], () => {
  currentPage.value = 1
})

const stats = computed(() => {
  const all = periodos.value
  return {
    total: all.length,
    individual: all.filter(p => derivarTipo(p) === "individual").length,
    consolidado: all.filter(p => derivarTipo(p) === "consolidado").length,
    inicial: all.filter(p => derivarTipo(p) === "inicial").length,
  }
})

// ── Duplicar ──────────────────────────────────────────────
const puedeDuplicar = (p) => {
  const tipo = derivarTipo(p)
  if (TIPOS_NO_DUPLICABLES.has(tipo)) return false
  return !p.isDuplicated
}

const duplicarTooltip = (p) => {
  const tipo = derivarTipo(p)
  if (tipo === "inicial") return "Los periodos iniciales no se pueden duplicar"
  if (p.isDuplicated) return `Ya existe el periodo ${Number(p.periodo) + 1}`
  return `Duplicar a ${Number(p.periodo) + 1}`
}

const pedirDuplicar = (p) => {
  targetPeriodo.value = p
  duplicateDialogOpen.value = true
}

const confirmarDuplicar = async () => {
  if (!targetPeriodo.value) return
  duplicating.value = true
  try {
    await periodoStore.duplicate(targetPeriodo.value.id)
    await reportStore.load({ force: true })
  } finally {
    duplicating.value = false
    duplicateDialogOpen.value = false
    targetPeriodo.value = null
  }
}

// ── Eliminar ──────────────────────────────────────────────
const pedirEliminar = (p) => {
  targetPeriodo.value = p
  deleteDialogOpen.value = true
}

const confirmarEliminar = async () => {
  if (!targetPeriodo.value) return
  deleting.value = true
  try {
    await periodoStore.remove(targetPeriodo.value.id)
    await reportStore.load({ force: true })
  } finally {
    deleting.value = false
    deleteDialogOpen.value = false
    targetPeriodo.value = null
  }
}

// ── Mount ─────────────────────────────────────────────────
onMounted(async () => {
  if (!empresaStore.loaded) await empresaStore.load({ force: true })
  if (!periodoStore.loaded) await periodoStore.load({ force: true })
})
</script>

<template>
  <section class="pl">
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- HEADER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="pl-header">
      <div class="pl-header__bg" />
      <div class="pl-header__content">
        <div class="pl-header__left">
          <h1 class="pl-header__title">Periodos</h1>
          <p class="pl-header__sub">Gestiona los periodos contables de tus empresas</p>
        </div>
        <div class="pl-header__right">
          <VBtn
            color="#D4884A" variant="flat"
            prepend-icon="tabler-plus"
            :disabled="!empresaStore.empresas?.length"
            @click="isDrawerOpen = true"
          >
            Nuevo Periodo
          </VBtn>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- STATS -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="pl-stats">
      <div class="pl-stat" @click="filterTipo = null">
        <div class="pl-stat__icon pl-stat__icon--navy"><VIcon size="18" color="#2C3555">tabler-calendar</VIcon></div>
        <div class="pl-stat__value">{{ stats.total }}</div>
        <div class="pl-stat__label">Total</div>
      </div>
      <div class="pl-stat" @click="filterTipo = 'individual'">
        <div class="pl-stat__icon pl-stat__icon--green"><VIcon size="18" color="#477130">tabler-user</VIcon></div>
        <div class="pl-stat__value">{{ stats.individual }}</div>
        <div class="pl-stat__label">Individual</div>
      </div>
      <div class="pl-stat" @click="filterTipo = 'consolidado'">
        <div class="pl-stat__icon pl-stat__icon--amber"><VIcon size="18" color="#D4884A">tabler-building-bank</VIcon></div>
        <div class="pl-stat__value">{{ stats.consolidado }}</div>
        <div class="pl-stat__label">Consolidado</div>
      </div>
      <div class="pl-stat" @click="filterTipo = 'inicial'">
        <div class="pl-stat__icon pl-stat__icon--blue"><VIcon size="18" color="#1976D2">tabler-calendar-check</VIcon></div>
        <div class="pl-stat__value">{{ stats.inicial }}</div>
        <div class="pl-stat__label">Inicial</div>
      </div>
    </div>

    <!-- Alert: no empresas -->
    <div v-if="!empresaStore.empresas?.length && empresaStore.loaded" class="pl-alert">
      <VIcon size="18" color="warning">tabler-alert-triangle</VIcon>
      <span>Debes <strong>crear una empresa</strong> antes de crear periodos.</span>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- TABLE -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="pl-section">
      <!-- Toolbar -->
      <div class="pl-toolbar">
        <VTextField
          v-model="searchQuery"
          placeholder="Buscar empresa o año..."
          variant="outlined" density="compact" hide-details
          prepend-inner-icon="tabler-search"
          clearable class="pl-search"
        />

        <VSelect
          v-model="filterEmpresa"
          :items="empresasOptions"
          label="Empresa"
          variant="outlined" density="compact" hide-details
          clearable class="pl-filter"
          prepend-inner-icon="tabler-building"
        />

        <VSelect
          v-model="filterTipo"
          :items="tipoOptions"
          label="Tipo"
          variant="outlined" density="compact" hide-details
          clearable class="pl-filter pl-filter--sm"
          prepend-inner-icon="tabler-filter"
        />
      </div>

      <!-- Table -->
      <div class="pl-table-wrap">
        <VTable class="pl-table" density="compact">
          <thead>
          <tr>
            <th>Empresa</th>
            <th>Periodo</th>
            <th>Tipo</th>
            <th>Creado</th>
            <th style="width:100px" />
          </tr>
          </thead>
          <tbody>
          <!-- Loading -->
          <tr v-if="isLoading">
            <td colspan="5" class="pl-table__loading">
              <VProgressCircular indeterminate size="24" color="primary" />
              <span>Cargando periodos...</span>
            </td>
          </tr>

          <!-- Data -->
          <template v-else-if="paginatedPeriodos.length">
            <tr v-for="p in paginatedPeriodos" :key="p.id">
              <td class="pl-table__empresa">
                <VIcon icon="tabler-building" size="15" color="#D4884A" class="mr-2" />
                {{ empresaNombre(p) }}
              </td>
              <td class="pl-table__periodo">
                <strong>{{ p.periodo }}</strong>
              </td>
              <td>
                <VChip size="x-small" :color="tipoColor(p)" variant="flat">
                  <VIcon :icon="tipoIcon(p)" start size="13" />
                  {{ tipoLabel(p) }}
                </VChip>
              </td>
              <td class="pl-table__date">{{ formatDate(p.createdat) }}</td>
              <td class="pl-table__actions">
                <!-- Duplicar -->
                <VTooltip location="top">
                  <template #activator="{ props: tp }">
                      <span v-bind="tp">
                        <VBtn
                          icon variant="text" size="small"
                          :color="puedeDuplicar(p) ? 'primary' : 'default'"
                          :disabled="!puedeDuplicar(p)"
                          @click="pedirDuplicar(p)"
                        >
                          <VIcon icon="tabler-copy" size="18" />
                        </VBtn>
                      </span>
                  </template>
                  <span>{{ duplicarTooltip(p) }}</span>
                </VTooltip>

                <!-- Eliminar -->
                <VTooltip location="top">
                  <template #activator="{ props: tp }">
                    <VBtn v-bind="tp" icon variant="text" size="small" @click="pedirEliminar(p)">
                      <VIcon icon="tabler-trash" size="18" color="error" />
                    </VBtn>
                  </template>
                  <span>Eliminar periodo {{ p.periodo }}</span>
                </VTooltip>
              </td>
            </tr>
          </template>

          <!-- Empty -->
          <tr v-else>
            <td colspan="5" class="pl-table__empty">
              <VIcon size="36" color="grey-lighten-1" class="mb-2">tabler-calendar-off</VIcon>
              <div>{{ searchQuery || filterEmpresa || filterTipo ? 'Sin resultados para estos filtros' : 'No hay periodos creados' }}</div>
            </td>
          </tr>
          </tbody>
        </VTable>
      </div>

      <!-- Pagination -->
      <div class="pl-pagination">
        <span class="pl-pagination__text">{{ paginationText }}</span>
        <VPagination
          v-model="currentPage" size="small"
          :total-visible="5" :length="totalPages"
        />
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DRAWER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <AddPeriodoDrawer
      v-model:isDrawerOpen="isDrawerOpen"
      @periodo-creado="periodoStore.load"
    />

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DELETE DIALOG -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <VDialog v-model="deleteDialogOpen" max-width="460" persistent>
      <VCard class="pl-dialog">
        <VCardText class="pt-6 pb-2 text-center">
          <div class="pl-dialog__icon pl-dialog__icon--error">
            <VIcon icon="tabler-alert-triangle" size="32" color="error" />
          </div>
          <h3 class="pl-dialog__title">Eliminar periodo</h3>
          <template v-if="targetPeriodo">
            <p class="pl-dialog__text">
              ¿Seguro que deseas eliminar el periodo
              <strong>{{ targetPeriodo.periodo }}</strong>
              ({{ tipoLabel(targetPeriodo) }}) de la empresa
              <strong>{{ empresaNombre(targetPeriodo) }}</strong>?
            </p>
            <div class="pl-dialog__warn">
              <VIcon size="16" color="warning" class="mr-2">tabler-alert-triangle</VIcon>
              Se eliminarán también los reportes y valores financieros asociados a este periodo.
            </div>
          </template>
        </VCardText>
        <VCardActions class="justify-center pb-5 pt-2">
          <VBtn variant="outlined" color="default" :disabled="deleting" @click="deleteDialogOpen = false">Cancelar</VBtn>
          <VBtn color="error" variant="flat" :loading="deleting" @click="confirmarEliminar">Sí, eliminar</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DUPLICATE DIALOG -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <VDialog v-model="duplicateDialogOpen" max-width="480" persistent>
      <VCard class="pl-dialog">
        <VCardText class="pt-6 pb-2 text-center">
          <div class="pl-dialog__icon pl-dialog__icon--primary">
            <VIcon icon="tabler-copy" size="32" color="primary" />
          </div>
          <h3 class="pl-dialog__title">Duplicar periodo</h3>
          <template v-if="targetPeriodo">
            <p class="pl-dialog__text">
              Se creará un nuevo periodo <strong>{{ tipoLabel(targetPeriodo) }}</strong>
              para el año <strong>{{ Number(targetPeriodo.periodo) + 1 }}</strong>
              de la empresa <strong>{{ empresaNombre(targetPeriodo) }}</strong>.
            </p>
            <div class="pl-dialog__info">
              <VIcon size="16" color="primary" class="mr-2">tabler-info-circle</VIcon>
              Los valores del reporte actual se copiarán como periodo anterior del nuevo periodo.
            </div>
          </template>
        </VCardText>
        <VCardActions class="justify-center pb-5 pt-2">
          <VBtn variant="outlined" color="default" :disabled="duplicating" @click="duplicateDialogOpen = false">Cancelar</VBtn>
          <VBtn color="primary" variant="flat" :loading="duplicating" @click="confirmarDuplicar">Duplicar</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>

<style scoped>
.pl {
  --pl-navy: #2C3555;
  --pl-amber: #D4884A;
  --pl-r: 10px;
  --pl-ff: "DM Sans", "Outfit", -apple-system, sans-serif;
  --pl-fd: "Instrument Serif", "DM Serif Display", Georgia, serif;
  font-family: var(--pl-ff);
  color: var(--pl-navy);
  /* ✅ FIX: permitir que la sección crezca con el contenido */
  height: auto;
  min-height: 0;
}

/* HEADER */
.pl-header {
  position: relative; padding: 32px 28px 24px;
  background: var(--pl-navy); border-radius: 0 0 14px 14px;
  overflow: hidden; margin-bottom: 20px;
}
.pl-header__bg {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse at 20% 80%, rgba(212,136,74,.1) 0%, transparent 50%),
  radial-gradient(ellipse at 85% 20%, rgba(212,136,74,.06) 0%, transparent 40%);
}
.pl-header__content {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}
.pl-header__title {
  font-family: var(--pl-fd); font-size: 26px; font-weight: 400;
  color: rgba(255,255,255,.92); margin: 0 0 4px;
}
.pl-header__sub { font-size: 13px; color: rgba(255,255,255,.4); margin: 0; }

/* STATS */
.pl-stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  padding: 0 16px; margin-bottom: 16px;
}
.pl-stat {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; background: white;
  border: 1px solid rgba(44,53,85,.05); border-radius: var(--pl-r);
  cursor: pointer; transition: all .15s;
}
.pl-stat:hover { border-color: rgba(212,136,74,.2); }
.pl-stat__icon {
  width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  border-radius: 8px; flex-shrink: 0;
}
.pl-stat__icon--navy { background: rgba(44,53,85,.06); }
.pl-stat__icon--green { background: rgba(71,113,48,.06); }
.pl-stat__icon--amber { background: rgba(212,136,74,.06); }
.pl-stat__icon--blue { background: rgba(25,118,210,.06); }
.pl-stat__value { font-size: 20px; font-weight: 700; color: var(--pl-navy); }
.pl-stat__label { font-size: 11px; color: rgba(44,53,85,.4); }

/* ALERT */
.pl-alert {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 18px; margin: 0 16px 12px;
  border-radius: 8px; font-size: 13px;
  background: rgba(255,183,77,.08); border: 1px solid rgba(255,183,77,.2); color: #8D6E33;
}

/* TABLE SECTION */
.pl-section {
  background: white; border: 1px solid rgba(44,53,85,.05);
  border-radius: 12px; padding: 20px 24px; margin: 0 16px 20px;
  /* ✅ FIX: sin altura fija, crece con el contenido */
  min-height: 0;
  height: auto;
}

.pl-toolbar {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 16px; flex-wrap: wrap;
}
.pl-search { max-width: 260px; }
.pl-filter { max-width: 200px; }
.pl-filter--sm { max-width: 160px; }
.pl-search :deep(.v-field),
.pl-filter :deep(.v-field) { border-radius: 8px !important; font-size: 13px; }

.pl-table-wrap {
  border: 1px solid rgba(44,53,85,.05); border-radius: 8px;
  /* ✅ FIX: overflow-x para scroll horizontal en móvil,
     pero NO overflow-y hidden que cortaba las filas */
  overflow-x: auto;
  overflow-y: visible;
}

.pl-table thead th {
  font-size: 11px !important; font-weight: 600 !important;
  text-transform: uppercase; letter-spacing: .04em;
  color: rgba(44,53,85,.45) !important; background: rgba(44,53,85,.02);
  border-bottom: 1px solid rgba(44,53,85,.06) !important;
  padding: 12px 16px !important; white-space: nowrap;
}
.pl-table tbody tr { transition: background .1s; }
.pl-table tbody tr:hover { background: rgba(44,53,85,.015); }
.pl-table tbody td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(44,53,85,.03) !important;
  font-size: 13px; color: rgba(44,53,85,.7);
}
.pl-table__empresa {
  font-weight: 600 !important; color: var(--pl-navy) !important;
  display: flex; align-items: center;
}
.pl-table__periodo { font-size: 15px; color: var(--pl-navy) !important; }
.pl-table__date { font-size: 12px; color: rgba(44,53,85,.4) !important; }
.pl-table__actions { display: flex; gap: 2px; justify-content: flex-end; }
.pl-table__loading {
  text-align: center; padding: 48px 16px !important;
  color: rgba(44,53,85,.4); font-size: 13px;
}
.pl-table__empty {
  text-align: center; padding: 48px 16px !important;
  color: rgba(44,53,85,.3); font-size: 13px;
}

/* PAGINATION */
.pl-pagination {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 4px 0; flex-wrap: wrap; gap: 12px;
}
.pl-pagination__text { font-size: 12px; color: rgba(44,53,85,.4); }

/* DIALOGS */
.pl-dialog { border-radius: 14px !important; }
.pl-dialog__icon {
  width: 56px; height: 56px; margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center; border-radius: 50%;
}
.pl-dialog__icon--error { background: rgba(229,57,53,.08); }
.pl-dialog__icon--primary { background: rgba(25,118,210,.08); }
.pl-dialog__title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.pl-dialog__text { font-size: 14px; color: rgba(44,53,85,.6); line-height: 1.6; margin-bottom: 16px; }
.pl-dialog__text strong { color: var(--pl-navy); }
.pl-dialog__warn {
  display: flex; align-items: flex-start; gap: 6px; text-align: left;
  padding: 10px 14px; background: rgba(255,183,77,.06);
  border: 1px solid rgba(255,183,77,.15); border-radius: 8px;
  font-size: 12.5px; color: #8D6E33; line-height: 1.5;
}
.pl-dialog__info {
  display: flex; align-items: flex-start; gap: 6px; text-align: left;
  padding: 10px 14px; background: rgba(25,118,210,.04);
  border: 1px solid rgba(25,118,210,.1); border-radius: 8px;
  font-size: 12.5px; color: rgba(44,53,85,.6); line-height: 1.5;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .pl-header { padding: 24px 16px; }
  .pl-header__content { flex-direction: column; align-items: flex-start; }
  .pl-header__title { font-size: 22px; }
  .pl-stats { grid-template-columns: repeat(2, 1fr); padding: 0 8px; }
  .pl-section { margin: 0 8px 16px; padding: 16px; }
  .pl-toolbar { flex-direction: column; }
  .pl-search, .pl-filter, .pl-filter--sm { max-width: 100%; width: 100%; }
  .pl-alert { margin: 0 8px 8px; }
}
</style>
