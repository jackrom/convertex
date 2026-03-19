<!-- src/views/periodos/PeriodoList.vue -->
<script setup>
import { onMounted, ref, computed } from "vue"
import { usePeriodoStore } from "@/@store/periodo.store"
import { useEmpresaStore } from "@/@store/empresa.store"
import AddPeriodoDrawer from "./AddPeriodoDrawer.vue"
import { useReportesStore } from "@/@store/reportes.store"

const periodoStore = usePeriodoStore()
const empresaStore = useEmpresaStore()
const reportStore = useReportesStore()

const isDrawerOpen = ref(false)

// ══════════════════════════════════════════════
// Tipos que NO se pueden duplicar
// ══════════════════════════════════════════════
const TIPOS_NO_DUPLICABLES = new Set(["inicial", "individual"])

// ══════════════════════════════════════════════
// Derivar tiporeporte (compatibilidad legacy)
// ══════════════════════════════════════════════
const derivarTipo = periodo => {
  if (periodo.tiporeporte) return periodo.tiporeporte
  if (periodo.esconsolidado) return "consolidado"

  return "individual"
}

// ══════════════════════════════════════════════
// Diálogos
// ══════════════════════════════════════════════
const deleteDialogOpen = ref(false)
const duplicateDialogOpen = ref(false)
const targetPeriodo = ref(null)
const deleting = ref(false)
const duplicating = ref(false)

onMounted(async () => {
  if (!empresaStore.loaded) await empresaStore.load({ force: true })
  if (!periodoStore.loaded) await periodoStore.load({ force: true })
})

const periodos = computed(() => periodoStore.periodos)
const isLoading = computed(() => !periodoStore.loaded)

// ══════════════════════════════════════════════
// Reglas de duplicación
// ══════════════════════════════════════════════
const puedeDuplicar = periodo => {
  const tipo = derivarTipo(periodo)

  // Inicial e Individual NUNCA se duplican
  if (TIPOS_NO_DUPLICABLES.has(tipo)) return false

  // Consolidado: respetar la lógica original de isDuplicated
  return !periodo.isDuplicated


}

const duplicarTooltipText = periodo => {
  const tipo = derivarTipo(periodo)

  if (tipo === "inicial") {
    return "Los periodos iniciales no se pueden duplicar"
  }

  if (tipo === "individual") {
    return "Los periodos individuales no se pueden duplicar"
  }

  if (periodo.isDuplicated) {
    return `Ya existe el periodo ${Number(periodo.periodo) + 1} (${tipoLabel(periodo)})`
  }

  return `Duplicar periodo ${periodo.periodo} (${tipoLabel(periodo)})`
}

// ══════════════════════════════════════════════
// Helpers de presentación
// ══════════════════════════════════════════════
const tipoLabel = periodo => {
  const tipo = derivarTipo(periodo)

  if (tipo === "inicial") return "Inicial"
  if (tipo === "consolidado") return "Consolidado"

  return "Individual"
}

const tipoColor = periodo => {
  const tipo = derivarTipo(periodo)

  if (tipo === "inicial") return "info"
  if (tipo === "consolidado") return "primary"

  return "secondary"
}

const tipoIcon = periodo => {
  const tipo = derivarTipo(periodo)

  if (tipo === "inicial") return "tabler-calendar-check"
  if (tipo === "consolidado") return "tabler-building-bank"

  return "tabler-user"
}

// ══════════════════════════════════════════════
// Eliminar
// ══════════════════════════════════════════════
const pedirEliminar = periodo => {
  targetPeriodo.value = periodo
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

// ══════════════════════════════════════════════
// Duplicar
// ══════════════════════════════════════════════
const pedirDuplicar = periodo => {
  targetPeriodo.value = periodo
  duplicateDialogOpen.value = true
}

const confirmarDuplicar = async () => {
  if (!targetPeriodo.value) return

  duplicating.value = true
  try {
    await periodoStore.duplicate(targetPeriodo.value.id)
  } finally {
    duplicating.value = false
    duplicateDialogOpen.value = false
    targetPeriodo.value = null
  }
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard>
          <template #title>
            Periodos
          </template>

          <VCardText>
            <VBtn
              prepend-icon="tabler-plus"
              :disabled="empresaStore.empresas.length === 0"
              @click="isDrawerOpen = true"
            >
              Nuevo Periodo
            </VBtn>

            <VAlert
              v-if="empresaStore.empresas.length === 0"
              type="warning"
              variant="tonal"
              density="compact"
              class="mt-4"
            >
              Debe crear una empresa antes de crear periodos.
            </VAlert>
          </VCardText>

          <VTable>
            <thead>
            <tr>
              <th>Empresa</th>
              <th>Periodo</th>
              <th>Tipo</th>
              <th>Creado</th>
              <th class="text-center">
                Acciones
              </th>
            </tr>
            </thead>

            <tbody>
            <tr v-if="isLoading">
              <td
                colspan="5"
                class="text-center py-6"
              >
                <VProgressCircular
                  indeterminate
                  size="24"
                  class="me-2"
                />
                Cargando periodos...
              </td>
            </tr>

            <tr v-else-if="!periodos.length">
              <td
                colspan="5"
                class="text-center py-6 text-medium-emphasis"
              >
                No hay periodos creados. Use el botón "Nuevo Periodo" para comenzar.
              </td>
            </tr>

            <tr
              v-else
              v-for="p in periodos"
              :key="p.id"
            >
              <td>{{ p.empresa?.nombre || p.empresaid }}</td>
              <td>{{ p.periodo }}</td>
              <td>
                <VChip
                  size="x-small"
                  :color="tipoColor(p)"
                  variant="flat"
                >
                  <VIcon
                    :icon="tipoIcon(p)"
                    start
                    size="14"
                  />
                  {{ tipoLabel(p) }}
                </VChip>
              </td>
              <td>{{ p.createdat }}</td>
              <td class="text-center">
                <div class="d-flex justify-center gap-1">
                  <!-- Duplicar -->
                  <VTooltip location="top">
                    <template #activator="{ props: tp }">
                      <!--
                        Wrap en span para que tooltip funcione
                        incluso con el botón disabled
                      -->
                      <span v-bind="tp">
                          <VBtn
                            icon
                            variant="text"
                            size="small"
                            :color="puedeDuplicar(p) ? 'primary' : 'default'"
                            :disabled="!puedeDuplicar(p)"
                            @click="pedirDuplicar(p)"
                          >
                            <VIcon icon="tabler-copy" />
                          </VBtn>
                        </span>
                    </template>
                    <span>{{ duplicarTooltipText(p) }}</span>
                  </VTooltip>

                  <!-- Eliminar -->
                  <VTooltip location="top">
                    <template #activator="{ props: tp }">
                      <VBtn
                        v-bind="tp"
                        icon
                        variant="text"
                        size="small"
                        color="error"
                        @click="pedirEliminar(p)"
                      >
                        <VIcon icon="tabler-trash" />
                      </VBtn>
                    </template>
                    <span>Eliminar periodo {{ p.periodo }}</span>
                  </VTooltip>
                </div>
              </td>
            </tr>
            </tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>

    <AddPeriodoDrawer
      v-model:isDrawerOpen="isDrawerOpen"
      @periodo-creado="periodoStore.load"
    />

    <!-- Diálogo: eliminar -->
    <VDialog
      v-model="deleteDialogOpen"
      max-width="420"
    >
      <VCard>
        <VCardTitle class="text-h6">
          Eliminar periodo
        </VCardTitle>
        <VCardText>
          <div v-if="targetPeriodo">
            ¿Seguro que deseas eliminar el periodo
            <strong>{{ targetPeriodo.periodo }}</strong>
            ({{ tipoLabel(targetPeriodo) }})
            de la empresa
            <strong>{{ targetPeriodo.empresa?.nombre || targetPeriodo.empresaid }}</strong>?
            <br><br>
            <span class="text-medium-emphasis">
              Esta acción también eliminará los reportes asociados.
            </span>
          </div>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            variant="text"
            :disabled="deleting"
            @click="deleteDialogOpen = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="error"
            :loading="deleting"
            :disabled="deleting"
            @click="confirmarEliminar"
          >
            Eliminar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Diálogo: duplicar -->
    <VDialog
      v-model="duplicateDialogOpen"
      max-width="480"
    >
      <VCard>
        <VCardTitle class="text-h6">
          Duplicar periodo
        </VCardTitle>
        <VCardText>
          <div v-if="targetPeriodo">
            Se creará un nuevo periodo <strong>{{ tipoLabel(targetPeriodo) }}</strong>
            para el año <strong>{{ Number(targetPeriodo.periodo) + 1 }}</strong>
            de la empresa
            <strong>{{ targetPeriodo.empresa?.nombre || targetPeriodo.empresaid }}</strong>.
            <br><br>
            Los valores del reporte actual se copiarán al nuevo periodo.
            ¿Deseas continuar?
          </div>
        </VCardText>
        <VCardActions>
          <VSpacer />
          <VBtn
            variant="text"
            :disabled="duplicating"
            @click="duplicateDialogOpen = false"
          >
            Cancelar
          </VBtn>
          <VBtn
            color="primary"
            :loading="duplicating"
            :disabled="duplicating"
            @click="confirmarDuplicar"
          >
            Duplicar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </section>
</template>
