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

// ────────────────────────────────
// Diálogos de confirmación
// ────────────────────────────────
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

const abrirDrawer = () => {
  isDrawerOpen.value = true
}

// ────────────────────────────────
// Eliminar periodo (con confirmación)
// ────────────────────────────────
const pedirEliminar = periodo => {
  targetPeriodo.value = periodo
  deleteDialogOpen.value = true
}

const confirmarEliminar = async () => {
  if (!targetPeriodo.value) return

  deleting.value = true
  try {
    // Eliminar el periodo
    await periodoStore.remove(targetPeriodo.value.id)

    // Refrescar la lista de reportes
    await reportStore.load({ force: true })
  } finally {
    deleting.value = false
    deleteDialogOpen.value = false
    targetPeriodo.value = null
  }
}

// ────────────────────────────────
// Duplicar periodo (con confirmación)
// ────────────────────────────────
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
              @click="abrirDrawer"
              :disabled="empresaStore.empresas.length === 0"
            >
              Nuevo Periodo
            </VBtn>

            <p
              v-if="empresaStore.empresas.length === 0"
              class="text-red mt-2"
            >
              Debe crear una empresa antes de crear periodos.
            </p>
          </VCardText>

          <VTable>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Periodo</th>
                <th>Tipo EEFF</th>
                <th>Creado</th>
                <th class="text-center">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-if="isLoading">
                <td
                  colspan="4"
                  class="text-center py-6"
                >
                  Cargando reportes...
                </td>
              </tr>
              <tr
                v-else
                v-for="p in periodos"
                :key="p.id"
              >
                <td>
                  {{ p.empresa?.nombre || p.empresaid }}
                </td>

                <td>
                  {{ p.periodo }}
                </td>

                <td>
                  <VChip
                    v-if="p.esconsolidado"
                    size="x-small"
                    color="primary"
                    variant="flat"
                  >
                    Consolidado
                  </VChip>
                  <VChip
                    v-else
                    size="x-small"
                    color="secondary"
                    variant="flat"
                  >
                    Individual
                  </VChip>
                </td>

                <td>{{ p.createdat }}</td>

                <td class="text-center">
                  <!-- 🔁 Duplicar periodo -->
                  <VBtn
                    icon
                    variant="text"
                    color="primary"
                    class="mr-1"
                    :disabled="p.isDuplicated"
                    :title="p.isDuplicated
                      ? `Ya existe el periodo ${Number(p.periodo) + 1} (${p.esconsolidado ? 'Consolidado' : 'Individual'})`
                      : `Duplicar periodo ${p.periodo} (${p.esconsolidado ? 'Consolidado' : 'Individual'})`"
                    @click="pedirDuplicar(p)"
                  >
                    <VIcon icon="tabler-copy" />
                  </VBtn>

                  <!-- 🗑️ Eliminar periodo -->
                  <VBtn
                    icon
                    variant="text"
                    color="default"
                    :title="`Eliminar periodo ${p.periodo}`"
                    @click="pedirEliminar(p)"
                  >
                    <VIcon icon="tabler-trash" />
                  </VBtn>
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

    <!-- Diálogo: confirmar eliminación -->
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
            de la empresa
            <strong>{{ targetPeriodo.empresa?.nombre || targetPeriodo.empresaid }}</strong>?
            <br>
            Esta acción también debería eliminar los reportes asociados a este periodo
            (según como tengas configurada la API / cascade).
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

    <!-- Diálogo: confirmar duplicado -->
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
            Se creará un nuevo periodo para el año
            <strong>{{ Number(targetPeriodo.periodo) + 1 }}</strong>
            de la empresa
            <strong>{{ targetPeriodo.empresa?.nombre || targetPeriodo.empresaid }}</strong>.
            <br>
            <br>
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

<style scoped>
.text-red {
  color: red;
}
</style>
