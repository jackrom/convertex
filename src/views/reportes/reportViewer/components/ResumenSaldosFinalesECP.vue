<script setup>
import { computed, defineEmits, defineModel, defineProps } from "vue"

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  esfValues: { type: Array, default: () => [] },
  ecpValues: { type: Array, default: () => [] },
})

const emit = defineEmits([
  "update:showResumenEcpSF",
  "update:modelValue",
  "update:ecpSFCuadre",
])

const dialog = computed({
  get: () => props.modelValue,
  set: v => emit("update:modelValue", v),
})

// ✅ v-model real del componente (Vue 3.4+)
const closeDialog = () => {
  emit("update:showResumenEcpSF", false)
}

// SEGUN ESF
const valores_Pat_301 = [
  "esf_30101",
  "esf_30102",
  "esf_30103",
  "esf_30104",
  "esf_3010501",
  "esf_3010502",
]

const valores_Pat_302 = [
  "esf_302",
]

const valores_Pat_303 = [
  "esf_303",
]

const valores_Pat_30401 = [
  "esf_30401",
]

const valores_Pat_30402 = [
  "esf_30402",
]

const valores_Pat_30501 = [
  "esf_30501",
]

const valores_Pat_30502 = [
  "esf_30502",
]

const valores_Pat_30503 = [
  "esf_30503",
]

const valores_Pat_30504 = [
  "esf_30504",
]

const valores_Pat_30601 = [
  "esf_30601",
]

const valores_Pat_30602 = [
  "esf_30602",
]

const valores_Pat_30603 = [
  "esf_30603",
]

const valores_Pat_30604 = [
  "esf_30604",
]

const valores_Pat_30605 = [
  "esf_30605",
]

const valores_Pat_30606 = [
  "esf_30606",
]

const valores_Pat_30607 = [
  "esf_30607",
]

const valores_Pat_30701 = [
  "esf_30701",
]

const valores_Pat_30702 = [
  "esf_30702",
]

const valores_Pat_31 = [
  "esf_31",
]

// SEGUN ECP
const valores_Pat_99_301 = [
  "ecp_99_301",
]

const valores_Pat_99_302 = [
  "ecp_99_302",
]

const valores_Pat_99_303 = [
  "ecp_99_303",
]

const valores_Pat_99_30401 = [
  "ecp_99_30401",
]

const valores_Pat_99_30402 = [
  "ecp_99_30402",
]

const valores_Pat_99_30501 = [
  "ecp_99_30501",
]

const valores_Pat_99_30502 = [
  "ecp_99_30502",
]

const valores_Pat_99_30503 = [
  "ecp_99_30503",
]

const valores_Pat_99_30504 = [
  "ecp_99_30504",
]

const valores_Pat_99_30601 = [
  "ecp_99_30601",
]

const valores_Pat_99_30602 = [
  "ecp_99_30602",
]

const valores_Pat_99_30603 = [
  "ecp_99_30603",
]

const valores_Pat_99_30604 = [
  "ecp_99_30604",
]

const valores_Pat_99_30605 = [
  "ecp_99_30605",
]

const valores_Pat_99_30606 = [
  "ecp_99_30606",
]

const valores_Pat_99_30607 = [
  "ecp_99_30607",
]

const valores_Pat_99_30701 = [
  "ecp_99_30701",
]

const valores_Pat_99_30702 = [
  "ecp_99_30702",
]

const valores_Pat_99_31 = [
  "ecp_99_31",
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
    esfCodigos: valores_Pat_301,
    ecpCodigos: valores_Pat_99_301,
  },
  {
    codigo: "302",
    descripcion: "APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN",
    esfCodigos: valores_Pat_302,
    ecpCodigos: valores_Pat_99_302,
  },
  {
    codigo: "303",
    descripcion: "PRIMA EMISIÓN PRIMARIA DE ACCIONES",
    esfCodigos: valores_Pat_303,
    ecpCodigos: valores_Pat_99_303,
  },
  {
    codigo: "30401",
    descripcion: "RESERVA LEGAL",
    esfCodigos: valores_Pat_30401,
    ecpCodigos: valores_Pat_99_30401,
  },
  {
    codigo: "30402",
    descripcion: "RESERVAS FACULTATIVA Y ESTATUTARIA",
    esfCodigos: valores_Pat_30402,
    ecpCodigos: valores_Pat_99_30402,
  },
  {
    codigo: "30501",
    descripcion: "ORI-ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA",
    esfCodigos: valores_Pat_30501,
    ecpCodigos: valores_Pat_99_30501,
  },
  {
    codigo: "30502",
    descripcion: "ORI-PROPIEDADES, PLANTA Y EQUIPO",
    esfCodigos: valores_Pat_30502,
    ecpCodigos: valores_Pat_99_30502,
  },
  {
    codigo: "30503",
    descripcion: "ORI-ACTIVOS INTANGIBLES",
    esfCodigos: valores_Pat_30503,
    ecpCodigos: valores_Pat_99_30503,
  },
  {
    codigo: "30504",
    descripcion: "ORI-OTROS SUPERAVIT POR REVALUACION",
    esfCodigos: valores_Pat_30504,
    ecpCodigos: valores_Pat_99_30504,
  },
  {
    codigo: "30601",
    descripcion: "GANANCIAS ACUMULADAS",
    esfCodigos: valores_Pat_30601,
    ecpCodigos: valores_Pat_99_30601,
  },
  {
    codigo: "30602",
    descripcion: "(-) PÉRDIDAS ACUMULADAS",
    esfCodigos: valores_Pat_30602,
    ecpCodigos: valores_Pat_99_30602,
  },
  {
    codigo: "30603",
    descripcion: "RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF",
    esfCodigos: valores_Pat_30603,
    ecpCodigos: valores_Pat_99_30603,
  },
  {
    codigo: "30604",
    descripcion: "RESERVA DE CAPITAL",
    esfCodigos: valores_Pat_30604,
    ecpCodigos: valores_Pat_99_30604,
  },
  {
    codigo: "30605",
    descripcion: "RESERVA POR DONACIONES",
    esfCodigos: valores_Pat_30605,
    ecpCodigos: valores_Pat_99_30605,
  },
  {
    codigo: "30606",
    descripcion: "RESERVA POR VALUACIÓN",
    esfCodigos: valores_Pat_30606,
    ecpCodigos: valores_Pat_99_30606,
  },
  {
    codigo: "30607",
    descripcion: "RESERVA POR REVALUACIÓN DE INVERSIONES",
    esfCodigos: valores_Pat_30607,
    ecpCodigos: valores_Pat_99_30607,
  },
  {
    codigo: "30701",
    descripcion: "GANANCIA NETA DEL PERIODO",
    esfCodigos: valores_Pat_30701,
    ecpCodigos: valores_Pat_99_30701,
  },
  {
    codigo: "30702",
    descripcion: "(-) PÉRDIDA NETA DEL PERIODO",
    esfCodigos: valores_Pat_30702,
    ecpCodigos: valores_Pat_99_30702,
  },
  {
    codigo: "31",
    descripcion: "PARTICIPACION NO CONTROLADORA",
    esfCodigos: valores_Pat_31,
    ecpCodigos: valores_Pat_99_31,
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

const ecpSFCuadreOk = computed(() => rows.value.every(r => Number(r.diferencia) === 0))

watchEffect(() => {
  emit("update:ecpSFCuadre", ecpSFCuadreOk.value)
})
</script>


<template>
  <VDialog
    v-model="dialog"
    max-width="960"
  >
    <VCard>
      <VCardTitle class="d-flex justify-space-between align-center">
        <span>Resumen ECP Saldos Finales</span>
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
              <th>SALDO FINAL SEGÚN ESF</th>
              <th>SALDO FINAL SEGÚN ECP</th>
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
