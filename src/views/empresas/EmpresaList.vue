<!-- src/views/empresas/EmpresaList.vue -->
<script setup>
import { onMounted, ref, computed } from "vue"
import { useEmpresaStore } from "@/@store/empresa.store"
import { useEmpresasDeletedStore } from "@/@store/empresasDeleted.store"
import AddEmpresaDrawer from "./AddEmpresaDrawer.vue"

const store = useEmpresaStore()
const deletedStore = useEmpresasDeletedStore()
const isDrawerOpen = ref(false)

// Delete dialog
const deleteDialog = ref(false)
const empresaToDelete = ref(null)
const deleting = ref(false)

// Search & pagination
const searchQuery = ref("")
const currentPage = ref(1)
const rowsPerPage = ref(10)

// Edit state
const empresaToEdit = ref(null)

const openEdit = empresa => {
  empresaToEdit.value = empresa
  isDrawerOpen.value = true
}

const abrirDrawer = () => {
  empresaToEdit.value = null
  isDrawerOpen.value = true
}

const onEmpresaCreada = () => {
  store.load({ force: true })
}

const onEmpresaActualizada = () => {
  store.load({ force: true })
}

// ── License info from sessionStorage ──────────────────────
const CONVERTEX_APP_ID = 8 // app_key: "convertex"

const licenseInfo = computed(() => {
  try {
    const raw = sessionStorage.getItem("userData")
    if (!raw) return null
    const userData = JSON.parse(raw)
    const apps = userData?.applications ?? []

    const convertexApp = apps.find(a =>
      a.application_id === CONVERTEX_APP_ID ||
      a.application?.app_key === "convertex",
    )

    if (!convertexApp) return null

    const fechaPago = convertexApp.fechapago ? new Date(convertexApp.fechapago) : null
    const storage = convertexApp.storage ?? 1
    const now = new Date()

    const diasRestantes = fechaPago
      ? Math.max(0, Math.ceil((fechaPago - now) / (1000 * 60 * 60 * 24)))
      : 0

    const vencido = fechaPago ? now > fechaPago : false

    const fechaFormateada = fechaPago
      ? fechaPago.toLocaleDateString("es-EC", { day: "2-digit", month: "2-digit", year: "numeric" })
      : "—"

    return {
      storage,
      fechaPago: fechaFormateada,
      diasRestantes,
      vencido,
      modoPago: convertexApp.modopago ?? "—",
    }
  } catch {
    return null
  }
})

const maxEmpresas = computed(() => licenseInfo.value?.storage ?? store.storage ?? 1)
const empresasActivas = computed(() => store.empresasActivas ?? [])
const empresasEliminadas = computed(() => deletedStore.empresas ?? [])
const totalActivas = computed(() => empresasActivas.value.length)
const totalEliminadas = computed(() => empresasEliminadas.value.length)

const MAX_ELIMINACIONES = 50

// ── Limits ────────────────────────────────────────────────
const limiteEmpresasAlcanzado = computed(() => totalActivas.value >= maxEmpresas.value)
const limiteEliminacionesAlcanzado = computed(() => totalEliminadas.value >= MAX_ELIMINACIONES)
const licenciaVencida = computed(() => licenseInfo.value?.vencido ?? false)

const bloqueado = computed(() =>
  limiteEmpresasAlcanzado.value ||
  limiteEliminacionesAlcanzado.value ||
  licenciaVencida.value,
)

const puedeCrear = computed(() => !limiteEmpresasAlcanzado.value && !licenciaVencida.value)
const puedeEliminar = computed(() => !limiteEliminacionesAlcanzado.value && !licenciaVencida.value)

// ── Filtered + paginated ──────────────────────────────────
const filteredEmpresas = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return empresasActivas.value
  return empresasActivas.value.filter(e =>
    (e.nombre ?? "").toLowerCase().includes(q) ||
    (e.ruc ?? "").toLowerCase().includes(q) ||
    (e.ciudad ?? "").toLowerCase().includes(q) ||
    (e.gerente ?? "").toLowerCase().includes(q),
  )
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredEmpresas.value.length / rowsPerPage.value)),
)

const paginatedEmpresas = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage.value
  return filteredEmpresas.value.slice(start, start + rowsPerPage.value)
})

const paginationText = computed(() => {
  const total = filteredEmpresas.value.length
  if (!total) return "Sin empresas"
  const first = (currentPage.value - 1) * rowsPerPage.value + 1
  const last = Math.min(currentPage.value * rowsPerPage.value, total)
  return `${first}–${last} de ${total}`
})

// ── Actions ───────────────────────────────────────────────
onMounted(async () => {
  if (!store.loaded) store.load({ force: true })
  if (!deletedStore.loaded) {
    try { await deletedStore.load() } catch {}
  }
})

const confirmDelete = (empresa) => {
  empresaToDelete.value = empresa
  deleteDialog.value = true
}

const cancelDelete = () => {
  deleteDialog.value = false
  empresaToDelete.value = null
}

const executeDelete = async () => {
  if (!empresaToDelete.value) return
  deleting.value = true
  try {
    await store.remove(empresaToDelete.value.id)
    await deletedStore.load()
  } finally {
    deleting.value = false
    deleteDialog.value = false
    empresaToDelete.value = null
  }
}

// License status helpers
const licenseColor = computed(() => {
  if (licenciaVencida.value) return "error"
  if ((licenseInfo.value?.diasRestantes ?? 999) <= 30) return "warning"
  return "success"
})

const licenseIcon = computed(() => {
  if (licenciaVencida.value) return "tabler-alert-circle"
  if ((licenseInfo.value?.diasRestantes ?? 999) <= 30) return "tabler-alert-triangle"
  return "tabler-shield-check"
})
</script>

<template>
  <section class="el">
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- HEADER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="el-header">
      <div class="el-header__bg" />

      <div class="el-header__content">
        <div class="el-header__left">
          <h1 class="el-header__title">Empresas</h1>
          <p class="el-header__sub">Gestiona las empresas de tu cuenta Convertex</p>
        </div>

        <div class="el-header__right">
          <!-- License card -->
          <div v-if="licenseInfo" class="el-license">
            <div class="el-license__row">
              <VIcon :icon="licenseIcon" :color="licenseColor" size="18" />
              <span class="el-license__label">
                {{ licenciaVencida ? 'Licencia vencida' : `Acceso hasta: ${licenseInfo.fechaPago}` }}
              </span>
            </div>
            <div class="el-license__row">
              <VIcon icon="tabler-clock" size="14" color="grey" />
              <span class="el-license__days" :class="{ 'el-license__days--warn': licenseInfo.diasRestantes <= 30 }">
                {{ licenciaVencida ? 'Renueve su licencia' : `${licenseInfo.diasRestantes} días restantes` }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- STATS BAR -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="el-stats">
      <div class="el-stat">
        <div class="el-stat__icon el-stat__icon--blue">
          <VIcon size="20" color="#2C3555">tabler-building</VIcon>
        </div>
        <div class="el-stat__info">
          <div class="el-stat__value">{{ totalActivas }} / {{ maxEmpresas }}</div>
          <div class="el-stat__label">Empresas activas</div>
        </div>
        <VProgressLinear
          :model-value="(totalActivas / maxEmpresas) * 100"
          :color="limiteEmpresasAlcanzado ? 'error' : 'primary'"
          height="4"
          rounded
          class="el-stat__bar"
        />
      </div>

      <div class="el-stat">
        <div class="el-stat__icon el-stat__icon--red">
          <VIcon size="20" color="#E53935">tabler-trash</VIcon>
        </div>
        <div class="el-stat__info">
          <div class="el-stat__value">{{ totalEliminadas }} / {{ MAX_ELIMINACIONES }}</div>
          <div class="el-stat__label">Eliminaciones usadas</div>
        </div>
        <VProgressLinear
          :model-value="(totalEliminadas / MAX_ELIMINACIONES) * 100"
          :color="limiteEliminacionesAlcanzado ? 'error' : 'warning'"
          height="4"
          rounded
          class="el-stat__bar"
        />
      </div>

      <div class="el-stat">
        <div class="el-stat__icon el-stat__icon--green">
          <VIcon size="20" color="#477130">tabler-calendar-check</VIcon>
        </div>
        <div class="el-stat__info">
          <div class="el-stat__value">{{ licenseInfo?.modoPago ?? '—' }}</div>
          <div class="el-stat__label">Tipo de plan</div>
        </div>
      </div>
    </div>

    <!-- Alerts -->
    <div v-if="limiteEmpresasAlcanzado && !licenciaVencida" class="el-alert el-alert--warn">
      <VIcon size="18" color="warning">tabler-alert-triangle</VIcon>
      <span>Has alcanzado el límite de <strong>{{ maxEmpresas }}</strong> empresas. Para crear más, actualiza tu plan.</span>
    </div>

    <div v-if="limiteEliminacionesAlcanzado" class="el-alert el-alert--error">
      <VIcon size="18" color="error">tabler-alert-circle</VIcon>
      <span>Has alcanzado el límite de <strong>{{ MAX_ELIMINACIONES }}</strong> eliminaciones. No puedes crear ni eliminar más empresas.</span>
    </div>

    <div v-if="licenciaVencida" class="el-alert el-alert--error">
      <VIcon size="18" color="error">tabler-alert-circle</VIcon>
      <span>Tu licencia ha <strong>vencido</strong>. Renueva tu suscripción para continuar.</span>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- TABLE SECTION -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="el-section">
      <div class="el-section__toolbar">
        <VTextField
          v-model="searchQuery"
          placeholder="Buscar por nombre, RUC, ciudad o gerente..."
          variant="outlined"
          density="compact"
          hide-details
          prepend-inner-icon="tabler-search"
          clearable
          class="el-search"
        />

        <VBtn
          color="#D4884A"
          variant="flat"
          prepend-icon="tabler-plus"
          :disabled="!puedeCrear || bloqueado"
          @click="abrirDrawer"
        >
          Nueva Empresa
        </VBtn>
      </div>

      <div class="el-table-wrap">
        <VTable class="el-table" density="compact">
          <thead>
          <tr>
            <th>Empresa</th>
            <th>RUC</th>
            <th>Ciudad</th>
            <th>Gerente</th>
            <th style="width:100px" />
          </tr>
          </thead>
          <tbody>
          <tr v-for="e in paginatedEmpresas" :key="e.id">
            <td class="el-table__name">
              <VIcon icon="tabler-building" size="16" color="#D4884A" class="mr-2" />
              {{ e.nombre }}
            </td>
            <td class="el-table__ruc">{{ e.ruc }}</td>
            <td>{{ e.ciudad }}</td>
            <td>{{ e.gerente }}</td>
            <td class="el-table__actions">
              <VBtn
                icon variant="text" size="small"
                @click="openEdit(e)"
                title="Editar"
              >
                <VIcon icon="tabler-pencil" size="18" color="primary" />
              </VBtn>
              <VBtn
                icon variant="text" size="small"
                :disabled="!puedeEliminar || bloqueado"
                @click="confirmDelete(e)"
                title="Eliminar"
              >
                <VIcon icon="tabler-trash" size="18" :color="puedeEliminar ? 'error' : 'grey'" />
              </VBtn>
            </td>
          </tr>
          </tbody>
          <tfoot v-if="!filteredEmpresas.length">
          <tr>
            <td colspan="5" class="el-table__empty">
              <VIcon size="36" color="grey-lighten-1" class="mb-2">tabler-building-off</VIcon>
              <div>{{ searchQuery ? 'Sin resultados' : 'No hay empresas registradas' }}</div>
            </td>
          </tr>
          </tfoot>
        </VTable>
      </div>

      <!-- Pagination -->
      <div class="el-pagination">
        <span class="el-pagination__text">{{ paginationText }}</span>
        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPages"
        />
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DRAWER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <AddEmpresaDrawer
      v-model:isDrawerOpen="isDrawerOpen"
      :empresa="empresaToEdit"
      @empresa-creada="onEmpresaCreada"
      @empresa-actualizada="onEmpresaActualizada"
    />

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- DELETE DIALOG -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <VDialog v-model="deleteDialog" max-width="460" persistent>
      <VCard class="el-dialog">
        <VCardText class="pt-6 pb-2 text-center">
          <div class="el-dialog__icon">
            <VIcon icon="tabler-alert-triangle" size="32" color="warning" />
          </div>

          <h3 class="el-dialog__title">Eliminar empresa</h3>

          <p class="el-dialog__text">
            Está a punto de eliminar:
          </p>
          <p class="el-dialog__empresa">
            {{ empresaToDelete?.nombre }}
          </p>
          <p class="el-dialog__ruc">
            RUC: {{ empresaToDelete?.ruc }}
          </p>

          <div class="el-dialog__warn">
            <VIcon size="16" color="warning" class="mr-2">tabler-alert-triangle</VIcon>
            Esta acción eliminará la empresa con todos sus periodos, reportes y valores financieros.
          </div>

          <div class="el-dialog__counter">
            Eliminaciones usadas: <strong>{{ totalEliminadas }} / {{ MAX_ELIMINACIONES }}</strong>
          </div>
        </VCardText>

        <VCardActions class="justify-center pb-5 pt-2">
          <VBtn variant="outlined" color="default" @click="cancelDelete" :disabled="deleting">
            Cancelar
          </VBtn>
          <VBtn color="error" variant="flat" @click="executeDelete" :loading="deleting">
            Sí, eliminar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>

<style scoped>
.el {
  --el-navy: #2C3555;
  --el-amber: #D4884A;
  --el-r: 10px;
  --el-ff: "DM Sans", "Outfit", -apple-system, sans-serif;
  --el-fd: "Instrument Serif", "DM Serif Display", Georgia, serif;
  font-family: var(--el-ff);
  color: var(--el-navy);
}

/* ═══════════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════════ */
.el-header {
  position: relative;
  padding: 32px 28px 24px;
  background: var(--el-navy);
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  margin-bottom: 20px;
}

.el-header__bg {
  position: absolute; inset: 0; pointer-events: none;
  background: radial-gradient(ellipse at 20% 80%, rgba(212,136,74,.1) 0%, transparent 50%),
  radial-gradient(ellipse at 85% 20%, rgba(212,136,74,.06) 0%, transparent 40%);
}

.el-header__content {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}

.el-header__title {
  font-family: var(--el-fd);
  font-size: 26px; font-weight: 400; color: rgba(255,255,255,.92); margin: 0 0 4px;
}

.el-header__sub {
  font-size: 13px; color: rgba(255,255,255,.4); margin: 0;
}

/* License */
.el-license {
  display: flex; flex-direction: column; gap: 6px;
  padding: 12px 16px;
  background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.06);
  border-radius: 8px; backdrop-filter: blur(6px);
}

.el-license__row { display: flex; align-items: center; gap: 8px; }

.el-license__label {
  font-size: 12.5px; font-weight: 500; color: rgba(255,255,255,.7);
}

.el-license__days {
  font-size: 11.5px; color: rgba(255,255,255,.4);
}

.el-license__days--warn {
  color: #FFB74D; font-weight: 600;
}

/* ═══════════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════════ */
.el-stats {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
  padding: 0 16px; margin-bottom: 16px;
}

.el-stat {
  display: flex; align-items: center; gap: 12px;
  padding: 16px 18px; background: white;
  border: 1px solid rgba(44,53,85,.05); border-radius: var(--el-r);
  position: relative;
}

.el-stat__icon {
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
  border-radius: 9px; flex-shrink: 0;
}

.el-stat__icon--blue { background: rgba(44,53,85,.06); }
.el-stat__icon--red { background: rgba(229,57,53,.06); }
.el-stat__icon--green { background: rgba(71,113,48,.06); }

.el-stat__info { flex: 1; }
.el-stat__value { font-size: 18px; font-weight: 700; color: var(--el-navy); }
.el-stat__label { font-size: 11px; color: rgba(44,53,85,.4); margin-top: 1px; }

.el-stat__bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  border-radius: 0 0 var(--el-r) var(--el-r) !important;
}

/* ═══════════════════════════════════════════════════════════════
   ALERTS
   ═══════════════════════════════════════════════════════════════ */
.el-alert {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 18px; margin: 0 16px 12px;
  border-radius: 8px; font-size: 13px;
}

.el-alert--warn {
  background: rgba(255,183,77,.08); border: 1px solid rgba(255,183,77,.2); color: #8D6E33;
}

.el-alert--error {
  background: rgba(229,57,53,.06); border: 1px solid rgba(229,57,53,.15); color: #C62828;
}

.el-alert strong { font-weight: 700; }

/* ═══════════════════════════════════════════════════════════════
   TABLE SECTION
   ═══════════════════════════════════════════════════════════════ */
.el-section {
  background: white; border: 1px solid rgba(44,53,85,.05);
  border-radius: 12px; padding: 20px 24px; margin: 0 16px 20px;
}

.el-section__toolbar {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px; margin-bottom: 16px; flex-wrap: wrap;
}

.el-search { max-width: 340px; }
.el-search :deep(.v-field) { border-radius: 8px !important; font-size: 13px; }

.el-table-wrap {
  border: 1px solid rgba(44,53,85,.05); border-radius: 8px; overflow: hidden;
}

.el-table thead th {
  font-size: 11px !important; font-weight: 600 !important;
  text-transform: uppercase; letter-spacing: .04em;
  color: rgba(44,53,85,.45) !important; background: rgba(44,53,85,.02);
  border-bottom: 1px solid rgba(44,53,85,.06) !important;
  padding: 12px 16px !important; white-space: nowrap;
}

.el-table tbody tr { transition: background .1s; }
.el-table tbody tr:hover { background: rgba(44,53,85,.015); }

.el-table tbody td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(44,53,85,.03) !important;
  font-size: 13px; color: rgba(44,53,85,.7);
}

.el-table__name {
  font-weight: 600 !important; color: var(--el-navy) !important;
  display: flex; align-items: center;
}

.el-table__ruc {
  font-family: "SF Mono", "Fira Code", monospace;
  font-size: 12px; color: rgba(44,53,85,.45) !important;
}

.el-table__actions {
  display: flex; gap: 2px; justify-content: flex-end;
}

.el-table__empty {
  text-align: center; padding: 48px 16px !important;
  color: rgba(44,53,85,.3); font-size: 13px;
}

/* ═══════════════════════════════════════════════════════════════
   PAGINATION
   ═══════════════════════════════════════════════════════════════ */
.el-pagination {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 4px 0; flex-wrap: wrap; gap: 12px;
}

.el-pagination__text { font-size: 12px; color: rgba(44,53,85,.4); }

/* ═══════════════════════════════════════════════════════════════
   DELETE DIALOG
   ═══════════════════════════════════════════════════════════════ */
.el-dialog { border-radius: 14px !important; }

.el-dialog__icon {
  width: 56px; height: 56px; margin: 0 auto 16px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,183,77,.1); border-radius: 50%;
}

.el-dialog__title { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.el-dialog__text { font-size: 14px; color: rgba(44,53,85,.6); margin-bottom: 4px; }
.el-dialog__empresa { font-size: 16px; font-weight: 700; color: var(--el-navy); margin-bottom: 2px; }
.el-dialog__ruc { font-size: 13px; color: rgba(44,53,85,.45); margin-bottom: 16px; }

.el-dialog__warn {
  display: flex; align-items: flex-start; gap: 6px;
  padding: 10px 14px; background: rgba(255,183,77,.06);
  border: 1px solid rgba(255,183,77,.15); border-radius: 8px;
  font-size: 12.5px; color: #8D6E33; line-height: 1.5; text-align: left;
  margin-bottom: 12px;
}

.el-dialog__counter {
  font-size: 12px; color: rgba(44,53,85,.45);
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 960px) {
  .el-header { padding: 24px 16px; }
  .el-header__content { flex-direction: column; align-items: flex-start; }
  .el-header__title { font-size: 22px; }
  .el-stats { grid-template-columns: 1fr; padding: 0 8px; }
  .el-section { margin: 0 8px 16px; padding: 16px; }
  .el-section__toolbar { flex-direction: column; }
  .el-search { max-width: 100%; width: 100%; }
  .el-alert { margin: 0 8px 8px; }
}
</style>
