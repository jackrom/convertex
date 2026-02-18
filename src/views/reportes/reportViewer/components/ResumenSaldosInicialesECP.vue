<script setup>
import { computed, defineEmits, defineModel, defineProps, watchEffect } from "vue"

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  esfValues: { type: Array, default: () => [] },
  ecpValues: { type: Array, default: () => [] },
})

const emit = defineEmits([
  "update:showResumenEcpSI",
  "update:modelValue",
  "update:ecpSICuadre",
])

const dialog = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v),
})

// ✅ v-model real del componente (Vue 3.4+)
const closeDialog = () => {
  emit("update:showResumenEcpSI", false)
}

// SEGUN ESF
const valores_Pat_301_Ant = [
  "esf_30101_ant",
  "esf_30102_ant",
  "esf_30103_ant",
  "esf_30104_ant",
  "esf_3010501_ant",
  "esf_3010502_ant",
]
const valores_Pat_302_Ant = [
  "esf_302_ant",
]
const valores_Pat_303_Ant = [
  "esf_303_ant",
]
const valores_Pat_30401_Ant = [
  "esf_30401_ant",
]
const valores_Pat_30402_Ant = [
  "esf_30402_ant",
]
const valores_Pat_30501_Ant = [
  "esf_30501_ant",
]
const valores_Pat_30502_Ant = [
  "esf_30502_ant",
]
const valores_Pat_30503_Ant = [
  "esf_30503_ant",
]
const valores_Pat_30504_Ant = [
  "esf_30504_ant",
]
const valores_Pat_30601_Ant = [
  "esf_30601_ant",
]
const valores_Pat_30602_Ant = [
  "esf_30602_ant",
]
const valores_Pat_30603_Ant = [
  "esf_30603_ant",
]
const valores_Pat_30604_Ant = [
  "esf_30604_ant",
]
const valores_Pat_30605_Ant = [
  "esf_30605_ant",
]
const valores_Pat_30606_Ant = [
  "esf_30606_ant",
]
const valores_Pat_30607_Ant = [
  "esf_30607_ant",
]
const valores_Pat_30701_Ant = [
  "esf_30701_ant",
]
const valores_Pat_30702_Ant = [
  "esf_30702_ant",
]
const valores_Pat_31_Ant = [
  "esf_31_ant",
]

// SEGUN ECP
const valores_Pat_9901_301 = [
  "ecp_990101_301",
  "ecp_990102_301",
  "ecp_990103_301",
]
const valores_Pat_9901_302 = [
  "ecp_990101_302",
  "ecp_990102_302",
  "ecp_990103_302",
]
const valores_Pat_9901_303 = [
  "ecp_990101_303",
  "ecp_990102_303",
  "ecp_990103_303",
]
const valores_Pat_9901_30401 = [
  "ecp_990101_30401",
  "ecp_990102_30401",
  "ecp_990103_30401",
]
const valores_Pat_9901_30402 = [
  "ecp_990101_30402",
  "ecp_990102_30402",
  "ecp_990103_30402",
]
const valores_Pat_9901_30501 = [
  "ecp_990101_30501",
  "ecp_990102_30501",
  "ecp_990103_30501",
]
const valores_Pat_9901_30502 = [
  "ecp_990101_30502",
  "ecp_990102_30502",
  "ecp_990103_30502",
]
const valores_Pat_9901_30503 = [
  "ecp_990101_30503",
  "ecp_990102_30503",
  "ecp_990103_30503",
]
const valores_Pat_9901_30504 = [
  "ecp_990101_30504",
  "ecp_990102_30504",
  "ecp_990103_30504",
]
const valores_Pat_9901_30601 = [
  "ecp_990101_30601",
  "ecp_990102_30601",
  "ecp_990103_30601",
]
const valores_Pat_9901_30602 = [
  "ecp_990101_30602",
  "ecp_990102_30602",
  "ecp_990103_30602",
]
const valores_Pat_9901_30603 = [
  "ecp_990101_30603",
  "ecp_990102_30603",
  "ecp_990103_30603",
]
const valores_Pat_9901_30604 = [
  "ecp_990101_30604",
  "ecp_990102_30604",
  "ecp_990103_30604",
]
const valores_Pat_9901_30605 = [
  "ecp_990101_30605",
  "ecp_990102_30605",
  "ecp_990103_30605",
]
const valores_Pat_9901_30606 = [
  "ecp_990101_30606",
  "ecp_990102_30606",
  "ecp_990103_30606",
]
const valores_Pat_9901_30607 = [
  "ecp_990101_30607",
  "ecp_990102_30607",
  "ecp_990103_30607",
]
const valores_Pat_9901_30701 = [
  "ecp_990101_30701",
  "ecp_990102_30701",
  "ecp_990103_30701",
]
const valores_Pat_9901_30702 = [
  "ecp_990101_30702",
  "ecp_990102_30702",
  "ecp_990103_30702",
]
const valores_Pat_9901_31 = [
  "ecp_990101_31",
  "ecp_990102_31",
  "ecp_990103_31",
]


// ✅ Índices reactivos: cuando cambia cualquier .valor en esfValues/ecpValues, se recalcula
const esfByName = computed(() => {
  const m = {}
  for (const r of props.esfValues) {
    if (r?.nombrecampo) m[r.nombrecampo] = r
  }

  return m
})

const ecpByName = computed(() => {
  const m = {}
  for (const r of props.ecpValues) {
    if (r?.nombrecampo) m[r.nombrecampo] = r
  }

  return m
})

// ✅ getter unificado (si no existe, 0) + Number seguro
const getValor = (tipo, codigo) => {
  const row = (tipo === "esf" ? esfByName.value : ecpByName.value)[codigo]

  return row ? Number(row.valor || 0) : 0
}

// ✅ Suma reactiva (depende de getters que leen valores reactivos)
const sumaCodigos = (tipo, codigos) => {
  return codigos.reduce((acc, c) => acc + getValor(tipo, c), 0)
}

// ✅ Definición “base” de filas (estáticas)
const rowDefs = [
  {
    codigo: "301",
    descripcion: "CAPITAL SOCIAL",
    esfCodigos: valores_Pat_301_Ant,
    ecpCodigos: valores_Pat_9901_301,
  },
  {
    codigo: "302",
    descripcion: "APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN",
    esfCodigos: valores_Pat_302_Ant,
    ecpCodigos: valores_Pat_9901_302,
  },
  {
    codigo: "303",
    descripcion: "PRIMA EMISIÓN PRIMARIA DE ACCIONES",
    esfCodigos: valores_Pat_303_Ant,
    ecpCodigos: valores_Pat_9901_303,
  },
  {
    codigo: "30401",
    descripcion: "RESERVA LEGAL",
    esfCodigos: valores_Pat_30401_Ant,
    ecpCodigos: valores_Pat_9901_30401,
  },
  {
    codigo: "30402",
    descripcion: "RESERVAS FACULTATIVA Y ESTATUTARIA",
    esfCodigos: valores_Pat_30402_Ant,
    ecpCodigos: valores_Pat_9901_30402,
  },
  {
    codigo: "30501",
    descripcion: "ORI-ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA",
    esfCodigos: valores_Pat_30501_Ant,
    ecpCodigos: valores_Pat_9901_30501,
  },
  {
    codigo: "30502",
    descripcion: "ORI-PROPIEDADES, PLANTA Y EQUIPO",
    esfCodigos: valores_Pat_30502_Ant,
    ecpCodigos: valores_Pat_9901_30502,
  },
  {
    codigo: "30503",
    descripcion: "ORI-ACTIVOS INTANGIBLES",
    esfCodigos: valores_Pat_30503_Ant,
    ecpCodigos: valores_Pat_9901_30503,
  },
  {
    codigo: "30504",
    descripcion: "ORI-OTROS SUPERAVIT POR REVALUACION",
    esfCodigos: valores_Pat_30504_Ant,
    ecpCodigos: valores_Pat_9901_30504,
  },
  {
    codigo: "30601",
    descripcion: "GANANCIAS ACUMULADAS",
    esfCodigos: valores_Pat_30601_Ant,
    ecpCodigos: valores_Pat_9901_30601,
  },
  {
    codigo: "30602",
    descripcion: "(-) PÉRDIDAS ACUMULADAS",
    esfCodigos: valores_Pat_30602_Ant,
    ecpCodigos: valores_Pat_9901_30602,
  },
  {
    codigo: "30603",
    descripcion: "RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF",
    esfCodigos: valores_Pat_30603_Ant,
    ecpCodigos: valores_Pat_9901_30603,
  },
  {
    codigo: "30604",
    descripcion: "RESERVA DE CAPITAL",
    esfCodigos: valores_Pat_30604_Ant,
    ecpCodigos: valores_Pat_9901_30604,
  },
  {
    codigo: "30605",
    descripcion: "RESERVA POR DONACIONES",
    esfCodigos: valores_Pat_30605_Ant,
    ecpCodigos: valores_Pat_9901_30605,
  },
  {
    codigo: "30606",
    descripcion: "RESERVA POR VALUACIÓN",
    esfCodigos: valores_Pat_30606_Ant,
    ecpCodigos: valores_Pat_9901_30606,
  },
  {
    codigo: "30607",
    descripcion: "RESERVA POR REVALUACIÓN DE INVERSIONES",
    esfCodigos: valores_Pat_30607_Ant,
    ecpCodigos: valores_Pat_9901_30607,
  },
  {
    codigo: "30701",
    descripcion: "GANANCIA NETA DEL PERIODO",
    esfCodigos: valores_Pat_30701_Ant,
    ecpCodigos: valores_Pat_9901_30701,
  },
  {
    codigo: "30702",
    descripcion: "(-) PÉRDIDA NETA DEL PERIODO",
    esfCodigos: valores_Pat_30702_Ant,
    ecpCodigos: valores_Pat_9901_30702,
  },
  {
    codigo: "31",
    descripcion: "PARTICIPACION NO CONTROLADORA",
    esfCodigos: valores_Pat_31_Ant,
    ecpCodigos: valores_Pat_9901_31,
  },
]

// ✅ rows FINAL: computed → SIEMPRE actualizado en tiempo real
const rows = computed(() => {
  return rowDefs.map(def => {
    const saldoEsf = sumaCodigos("esf", def.esfCodigos)
    const saldoEcp = sumaCodigos("ecp", def.ecpCodigos)
    const diferencia = saldoEsf - saldoEcp

    return { ...def, saldoEsf, saldoEcp, diferencia }
  })
})

const ecpSICuadreOk = computed(() => rows.value.every(r => Number(r.diferencia) === 0))

watchEffect(() => {
  emit("update:ecpSICuadre", ecpSICuadreOk.value)
})
</script>


<template>
  <VDialog
    v-model="dialog"
    max-width="960"
  >
    <VCard>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Resumen ECP Saldos Iniciales</span>
        <VBtn
          icon="tabler-x"
          variant="text"
          density="comfortable"
          @click="closeDialog"
        />
      </VCardTitle>

      <VCardSubtitle>
        Se actualiza automáticamente según los valores del Estado de Cambios en el Patrimonio.
      </VCardSubtitle>

      <VCardText>
        <VTable density="comfortable">
          <thead>
            <tr>
              <th>SALDOS INICIALES</th>
              <th>CÓDIGO</th>
              <th>SALDO INICIAL SEGÚN ESF</th>
              <th>SALDO INICIAL SEGÚN ECP</th>
              <th>DIFERENCIA POR CUADRAR</th>
              <th>CONTROL</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="row in rows"
              :key="row.codigo"
            >
              <td>{{ row.descripcion }}</td>
              <td>{{ row.codigo }}</td>
              <td>{{ row.saldoEsf }}</td>
              <td>{{ row.saldoEcp }}</td>
              <td>{{ row.diferencia }}</td>
              <td>
                <VIcon
                  v-if="row.diferencia === 0"
                  icon="tabler-check"
                  color="success"
                />
                <VIcon
                  v-else
                  icon="tabler-alert-circle"
                  color="error"
                />
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCardText>
    </VCard>
  </VDialog>
</template>


<style scoped>
.resumen-ecp {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-btn {
  background-color: #f56c6c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.resumen-table {
  width: 100%;
  border-collapse: collapse;
}

.resumen-table th, .resumen-table td {
  padding: 8px 12px;
  text-align: left;
}

.input-field {
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
}

.control-icon {
  font-size: 16px;
}

.control-icon.valid {
  color: green;
}

.control-icon.invalid {
  color: red;
}
</style>
