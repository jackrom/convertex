<script setup>
import { onMounted } from "vue"
import LogFilters from "./LogFilters.vue"
import LogTable from "./LogTable.vue"
import LogDetailDrawer from "./LogDetailDrawer.vue"
import LogChart from "./LogChart.vue"
import { useLogsDashboard } from "@/composables/useLogsDashboard"
import { useLogStore } from "@/@store/log.store"

const { exportCSV } = useLogsDashboard()
const logStore = useLogStore()

onMounted(() => {
  // Carga inicial de logs desde IndexedDB
  logStore.load()
})
</script>

<template>
  <section>
    <VCard class="pa-4">
      <VCardTitle>
        Dashboard de Logs
        <VSpacer />
        <VBtn color="primary" @click="exportCSV">
          Exportar CSV
        </VBtn>
      </VCardTitle>

      <VCardText>
        <LogFilters />
        <LogTable />
        <LogChart />
      </VCardText>
    </VCard>

    <LogDetailDrawer />
  </section>
</template>
