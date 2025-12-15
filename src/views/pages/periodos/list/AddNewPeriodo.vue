<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { requiredValidator } from '@validators'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useReportesListStore } from '@/views/pages/supercias/useReportesListStore'
import { obtenerDatosReporte } from '@core/utils/reportes'
import { onMounted, nextTick, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useIndexedDB } from '@/composables/useIndexedDB'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:isDrawerOpen', 'userData'])

const empresaListStore = useEmpresaListStore()
const reportesListStore = useReportesListStore()

const { getAll } = useIndexedDB()

const isFormValid = ref(false)
const refForm = ref()

const periodo = ref('')
const periodos = ref([]) // todos los periodos activos (todas las empresas)

const empresa = ref(null)
const empresas = ref([])

const aniosPosibles = ref([2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025])
const anios = ref([])

const currentPage = ref(1)
const totalPage = ref(1)

const route = useRoute()
const router = useRouter()

const loadings = ref(false)
const countdown = ref(60)
const intervalId = ref(null)

// 👉 Drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
    periodo.value = ''
    empresa.value = null
    anios.value = [...aniosPosibles.value]
  })
}

let userData = null
try {
  const raw = sessionStorage.getItem('userData')

  userData = raw ? JSON.parse(raw) : null
} catch (err) {
  console.error('No se pudo parsear userData de sessionStorage:', err)
  sessionStorage.removeItem('userData')
  userData = null
}

// sub: NO se parsea, es un string plano
const userId = sessionStorage.getItem('sub') || null

// 👉 Fetch empresas del usuario (Intenta primero IndexedDB)
const fetchEmpresas = async () => {
  if (!userId) return

  try {
    let companies = []

    const storedEmpresas = await getAll('empresasconvertexs', null, 1000)

    if (Array.isArray(storedEmpresas) && storedEmpresas.length > 0) {
      companies = storedEmpresas
    } else {
      const response = await empresaListStore.fetchEmpresas({ user: userId })

      companies = response?.data || response?.data?.data || []
    }

    empresas.value = companies.map(obj => ({
      title: obj.nombre,
      value: obj.ruc, // este RUC se compara con periodo.empresaid
    }))
  } catch (error) {
    console.error('Error al obtener empresas (AddNewPeriodo.vue):', error)
  }
}

// 👉 Fetch periodos desde IndexedDB para calcular años disponibles
const fetchPeriodos = async () => {
  try {
    const storedPeriodos = await getAll('periodosconvertexs', null, 1000)
    const lista = Array.isArray(storedPeriodos) ? storedPeriodos : []

    const activos = lista.filter(p => !p.deletedat)

    periodos.value = activos
    totalPage.value = 1

    // Por defecto, todos los años disponibles.
    // El filtro POR EMPRESA se hace en getEmpresa().
    anios.value = [...aniosPosibles.value]
  } catch (error) {
    console.error('Error leyendo periodos desde IndexedDB (AddNewPeriodo.vue):', error)
    anios.value = [...aniosPosibles.value]
  }
}

// 👉 Ejecutar al montar (una sola vez)
onMounted(() => {
  fetchEmpresas()
  fetchPeriodos()
})

// 👉 Asegurar que currentPage no supere totalPage (por si lo usas luego)
watch([currentPage, totalPage], () => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value
})

// 👉 Manejo del reporte
const reporteManagement = periodoNuevo => {
  if (!periodoNuevo) {
    console.error('Periodo nuevo inválido en reporteManagement')

    return
  }

  guardarReporteTxt(periodoNuevo)
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (!valid) return

    if (!empresa.value || !empresa.value.value || !periodo.value) {
      console.error('Empresa o periodo no seleccionados correctamente')

      return
    }

    loadings.value = true

    localStorage.setItem('empresanueva', JSON.stringify(empresa.value.value))

    emit('userData', {
      periodo: Number(periodo.value),
      empresaid: empresa.value.value,
      userid: userId,
    })
  })
}

const guardarReporte = reporte => {
  console.log("reporte: ", reporte)
  addNewReporte(reporte)
  startCountdown()
  loadings.value = true
}

const guardarReporteTxt = async periodoNuevo => {
  console.log('periodoNuevo: ', periodoNuevo)
  try {
    const datosReporte = await obtenerDatosReporte(userId, periodoNuevo)

    guardarReporte(datosReporte)
  } catch (error) {
    console.error('Error al guardar reporte TXT:', error)
    loadings.value = false
  }
}

const addNewReporte = async reporteData => {
  try {
    console.log('reporteData: ', reporteData)

    const res = await reportesListStore.addReporteConvertex(reporteData)

    console.log('Reporte guardado correctamente: ', res)

    emit('update:isDrawerOpen', false)

    // Si la lista /pages/supercias/list se alimenta desde el store,
    // al navegar ya tendrá el nuevo reporte en memoria.
    await router.replace('/pages/supercias/list')
  } catch (error) {
    console.error('Error al guardar reporte en Supercias:', error)
    loadings.value = false
    stopCountdown()
  }
}

const startCountdown = () => {
  loadings.value = true
  countdown.value = 60

  if (intervalId.value) clearInterval(intervalId.value)

  intervalId.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1
    } else {
      stopCountdown()
    }
  }, 1000)
}

const stopCountdown = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
  }
  loadings.value = false
}

// 👉 Cuando cambia la empresa, recalculamos años disponibles SOLO para esa empresa
const getEmpresa = () => {
  if (!empresa.value) {
    anios.value = [...aniosPosibles.value]

    return
  }

  const empresaRuc = empresa.value.value

  // Tomamos solo los periodos de ESA empresa desde IndexedDB
  const periodosEmpresa = periodos.value.filter(p => p.empresaid === empresaRuc)

  const periodosOcupados = periodosEmpresa.map(obj => obj.periodo)

  anios.value = aniosPosibles.value.filter(anio => !periodosOcupados.includes(anio))
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}

watch(
  () => props.isDrawerOpen,
  async val => {
    if (val) {
      // Al ABRIR el drawer, sincronizamos datos frescos
      empresa.value = null
      periodo.value = ''
      anios.value = [...aniosPosibles.value]

      await fetchPeriodos()
      await fetchEmpresas()

      nextTick(() => {
        refForm.value?.resetValidation()
      })
    }
  },
)

// 👉 Método expuesto para que el PADRE pueda crear el reporte con el periodo recién creado
const crearReporteParaPeriodo = periodoId => {
  console.log('periodoId: ', periodoId)

  if (!periodoId || typeof periodoId !== 'number') {
    console.error('Periodo nuevo inválido:', periodoId)
    loadings.value = false

    return
  }

  reporteManagement(periodoId)
}

defineExpose({
  crearReporteParaPeriodo,
})
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <div class="d-flex align-center pa-6 pb-1">
      <h6 class="text-h6">
        Nuevo Periodo
      </h6>

      <VSpacer />

      <!-- 👉 Close btn -->
      <VBtn
        variant="tonal"
        color="default"
        icon
        size="32"
        class="rounded"
        @click="closeNavigationDrawer"
        :disabled="loadings"
      >
        <VIcon size="18" icon="tabler-x" />
      </VBtn>
    </div>

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12">
                <VSelect
                  v-model="empresa"
                  :hint="empresa ? `${empresa.value}, ${empresa.title}` : ''"
                  :items="empresas"
                  :rules="[requiredValidator]"
                  item-title="title"
                  item-value="value"
                  label="Empresas"
                  persistent-hint
                  return-object
                  single-line
                  placeholder="Seleccione la empresa"
                  @update:modelValue="getEmpresa"
                  :disabled="loadings"
                />
              </VCol>

              <!-- 👉 Periodo -->
              <VCol cols="12">
                <VSelect
                  v-model="periodo"
                  label="Periodo"
                  :rules="[requiredValidator]"
                  :items="anios"
                  placeholder="Seleccione el periodo"
                  :disabled="loadings"
                />
              </VCol>

              <!-- 👉 Submit -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-4"
                  style="font-size: 12px; width: 100%;"
                  :loading="loadings"
                  :disabled="loadings || !empresa || periodo === ''"
                >
                  <template #loader>
                    <span class="custom-loader">
                      <VIcon icon="tabler-refresh" />
                    </span>
                    <span class="pl-2 pr-2">
                      Creando reporte, espere {{ countdown }} ...
                    </span>
                  </template>
                  Crear Periodo
                </VBtn>
              </VCol>

              <!-- 👉 Cancel -->
              <VCol cols="12">
                <VBtn
                  type="reset"
                  variant="tonal"
                  style="font-size: 12px; width: 100%;"
                  color="secondary"
                  @click="closeNavigationDrawer"
                  :loading="loadings"
                  :disabled="loadings"
                >
                  Cancelar
                  <template #loader>
                    <span>Cancelar</span>
                  </template>
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.custom-loader {
  display: flex;
  animation: loader 1s infinite;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
