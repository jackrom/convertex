<script setup lang="ts">
import { useEcpModule } from "@/composables/useEcpModule"
import { t } from "vite/dist/node/chunks/moduleRunnerTransport";}

const { ecp } = useEcpModule()
</script>

<template>
  <VCard flat class="pa-4">
    <h3 class="text-subtitle-1 mb-4">
      {{ $t('supercias.reports.ecpTitle') }}
    </h3>

    <!-- Aquí empiezas a pegar la vieja tabla de ECP y solo cambias el v-model -->

    <VTable density="compact" class="text-caption">
      <thead>
        <tr>
          <th class="text-left">Concepto</th>
          <th class="text-right">Valor</th>
        </tr>
      </thead>

      <tbody>
        <!-- Ejemplo 1: antes usabas v-model="ecp_990101_301" -->
        <tr>
          <td>SALDO REEXPRESADO AL 1 DE ENERO</td>
          <td>
            <VTextField
              v-model.number="ecp['990101_301']"
              type="number"
              variant="outlined"
              density="compact"
              hide-details
              class="ma-0 pa-0"
            />
          </td>
        </tr>

        <!-- Ejemplo 2 -->
        <tr>
          <td>AUMENTO (DISMINUCIÓN) POR CORRECCIÓN MONETARIA</td>
          <td>
            <VTextField
              v-model.number="ecp['990101_302']"
              type="number"
              variant="outlined"
              density="compact"
              hide-details
              class="ma-0 pa-0"
            />
          </td>
        </tr>

      <!-- ... y así con todos los códigos que ya tienes en el Ecp.txt -->
      </tbody>
    </VTable>
  </VCard>
</template>
