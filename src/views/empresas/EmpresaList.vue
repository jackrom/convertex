<script setup>
import { onMounted } from "vue"
import { useEmpresaStore } from "@/@store/empresa.store"
import AddEmpresaDrawer from "./AddEmpresaDrawer.vue"

const store = useEmpresaStore()
const isDrawerOpen = ref(false)


onMounted(() => {
  if (!store.loaded) store.load({ force: true })
})

const abrirDrawer = () => {
  isDrawerOpen.value = true
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
                  <VBtn icon variant="text" color="default" @click="store.remove(e.id)">
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
  </section>
</template>

<style scoped>
.text-red { color: red; }
</style>
