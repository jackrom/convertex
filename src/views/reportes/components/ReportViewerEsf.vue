<!-- src/views/pages/supercias/components/ReportViewerEsf.vue -->
<script setup>
import { computed } from "vue"

const props = defineProps({
  // { [tablaorigen]: [ { id, tablaorigen, nombrecampo, valor, userid }, ... ] }
  dataByTabla: {
    type: Object,
    default: () => ({}),
  },
  // arreglo plano por si lo necesitas
  raw: {
    type: Array,
    default: () => [],
  },
})

const tablas = computed(() =>
  Object.entries(props.dataByTabla).map(([tabla, filas]) => ({
    tabla,
    filas,
  })),
)
</script>

<template>
  <div>
    <VAlert
      type="info"
      variant="tonal"
      class="mb-4"
    >
      <div class="text-subtitle-1 font-weight-bold">
        ESF - Estado de Situación Financiera
      </div>
      <div class="text-body-2">
        Los datos se muestran agrupados por
        <code>tablaorigen</code>. Cada fila corresponde a un
        <code>nombrecampo</code> con su valor.
      </div>
    </VAlert>

    <div v-if="!tablas.length">
      <p class="text-body-2">
        No hay datos ESF para este reporte.
      </p>
    </div>

    <div
      v-else
      class="d-flex flex-column gap-4"
    >
      <VExpansionPanels multiple>
        <VExpansionPanel
          v-for="bloque in tablas"
          :key="bloque.tabla"
        >
          <VExpansionPanelTitle>
            <span class="font-weight-medium">
              {{ bloque.tabla }}
            </span>
            <span class="text-caption text-disabled ms-2">
              ({{ bloque.filas.length }} campos)
            </span>
          </VExpansionPanelTitle>

          <VExpansionPanelText>
            <VTable density="compact">
              <thead>
                <tr>
                  <th style="width: 40%">
                    Campo
                  </th>
                  <th style="width: 40%">
                    Código
                  </th>
                  <th style="width: 20%; text-align: right;">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="fila in bloque.filas"
                  :key="fila.id ?? fila.nombrecampo"
                >
                  <td>
                    <!-- si más adelante quieres un mapa nombrecampo → etiqueta legible, aquí va -->
                    {{ fila.nombrecampo }}
                  </td>
                  <td>
                    {{ fila.tablaorigen }}
                  </td>
                  <td class="text-right">
                    {{ fila.valor }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
    </div>
  </div>
</template>
