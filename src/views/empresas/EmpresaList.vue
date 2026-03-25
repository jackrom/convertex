<script setup>
import { onMounted, ref } from "vue"
import { useEmpresaStore } from "@/@store/empresa.store"
import AddEmpresaDrawer from "./AddEmpresaDrawer.vue"

const store = useEmpresaStore()
const isDrawerOpen = ref(false)

// Estado del diálogo de confirmación
const deleteDialog = ref(false)
const empresaToDelete = ref(null)
const deleting = ref(false)

onMounted(() => {
  console.log("EmpresaList mounted", store)
  if (!store.loaded) store.load({ force: true })
})

const abrirDrawer = () => {
  isDrawerOpen.value = true
}

const confirmDelete = empresa => {
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
  } finally {
    deleting.value = false
    deleteDialog.value = false
    empresaToDelete.value = null
  }
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard>
          <template #title>Empresas</template>

          <template #subtitle>
            <span style="color:#477130;">
              Puede crear hasta {{ store.storage }} empresas.
            </span>
          </template>

          <VCardText>
            <VBtn
              prepend-icon="tabler-plus"
              @click="abrirDrawer"
              :disabled="store.limiteExcedido"
            >
              Nueva Empresa
            </VBtn>

            <div v-if="store.limiteExcedido" class="mt-2 text-red">
              <strong>Límite excedido.</strong> Actualice su cuenta.
            </div>
          </VCardText>

          <VTable>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>RUC</th>
                <th>Ciudad</th>
                <th>Gerente</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="e in store.empresasActivas" :key="e.id">
                <td>{{ e.nombre }}</td>
                <td>{{ e.ruc }}</td>
                <td>{{ e.ciudad }}</td>
                <td>{{ e.gerente }}</td>
                <td>
                  <VBtn icon variant="text" color="default" @click="confirmDelete(e)">
                    <VIcon icon="tabler-trash" />
                  </VBtn>
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>

    <AddEmpresaDrawer
      v-model:isDrawerOpen="isDrawerOpen"
      @empresa-creada="store.load"
    />

    <!-- Diálogo de confirmación -->
    <VDialog v-model="deleteDialog" max-width="460" persistent>
      <VCard>
        <VCardText class="pt-6 pb-2 text-center">
          <VIcon icon="tabler-alert-triangle" size="52" color="warning" class="mb-4" />

          <h3 class="text-h6 mb-2">Eliminar empresa</h3>

          <p class="text-body-1 mb-1">
            Está a punto de eliminar la empresa:
          </p>
          <p class="text-body-1 font-weight-bold mb-1">
            {{ empresaToDelete?.nombre }}
          </p>
          <p class="text-body-2 text-medium-emphasis">
            RUC: {{ empresaToDelete?.ruc }}
          </p>

          <VAlert type="warning" variant="tonal" density="compact" class="mt-4 text-start">
            Esta acción eliminará la empresa junto con todos sus periodos, reportes y valores financieros asociados.
          </VAlert>
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
.text-red { color: red; }
</style>
