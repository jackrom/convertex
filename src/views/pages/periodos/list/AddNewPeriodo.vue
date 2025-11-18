<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { requiredValidator } from '@validators'
import { useEmpresaListStore } from '@/views/pages/empresas/useEmpresaListStore'
import { useSuperciasListStore } from '@/views/pages/supercias/useSuperciasListStore'
import { usePeriodoListStore } from '@/views/pages/periodos/usePeriodoListStore'
import { obtenerDatosReporte, obtenerDatosUsuario } from '@core/utils/reportes'
import { onMounted, nextTick, ref, watch } from 'vue'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'userData',
])

const empresaListStore = useEmpresaListStore()
const superciasListStore = useSuperciasListStore()
const periodoListStore = usePeriodoListStore()

const isFormValid = ref(false)
const refForm = ref()

const periodo = ref('')
const periodos = ref([])

const empresa = ref({
  title: 'Tu Empresa',
  value: '1717170110',
  periodosifluc: [],
})

const empresas = ref([])

const aniosPosibles = ref([2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025])
const anios = ref([])

const currentPage = ref(1)
const totalPage = ref(1)

const route = useRoute()
const router = useRouter()

const userId = sessionStorage.getItem('sub') || null

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
  })
}

// 👉 Fetch empresas del usuario
const fetchEmpresas = async () => {
  if (!userId) return

  try {
    const response = await empresaListStore.fetchEmpresas({ user: userId })
    const companies = response?.data?.data || []

    empresas.value = companies.map(obj => ({
      title: obj.nombre,
      value: obj.ruc,
      periodos: obj.periodosifluc || [],
    }))
  } catch (error) {
    console.error('Error al obtener empresas (AddNewPeriodo.vue):', error)
  }
}

// 👉 Fetch periodos globales del usuario (para filtrar años)
const fetchPeriodos = async () => {
  if (!userId) return

  try {
    const response = await periodoListStore.fetchPeriodos({ user: userId })

    // Solo para verificar una vez la forma de la respuesta
    console.log('periodos API (AddNewPeriodo):', response)

    // Soportar ambos casos: que el store devuelva {data: {...}} o directamente {...}
    const data = response?.data ?? response

    if (!data) {
      console.error('Respuesta vacía en fetchPeriodos (AddNewPeriodo.vue)')
      anios.value = [...aniosPosibles.value]

      return
    }

    const {
      periodos: lista = [],
      totalPage: tp = 1,
      totalPeriodos: tot = 0,
    } = data

    // array de periodos
    periodos.value = Array.isArray(lista) ? lista : []

    // paginación
    totalPage.value = tp || 1

    // calcular años disponibles
    if (Array.isArray(periodos.value)) {
      const periodosOcupados = periodos.value.map(obj => obj.periodo)

      anios.value = aniosPosibles.value.filter(anio => !periodosOcupados.includes(anio))
    } else {
      anios.value = [...aniosPosibles.value]
    }
  } catch (error) {
    console.error('Error fetchPeriodos (AddNewPeriodo.vue):', error)

    // en caso de error, por lo menos deja todos los años disponibles
    anios.value = [...aniosPosibles.value]
  }
}


// 👉 Ejecutar al montar
watchEffect(() => {
  fetchEmpresas()
  fetchPeriodos()
})

// 👉 Asegurar que currentPage no supere totalPage
watchEffect([currentPage, totalPage], () => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
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

    if (!empresa.value?.value || !periodo.value) return

    loadings.value = true
    localStorage.setItem('empresanueva', JSON.stringify(empresa.value.value))

    const userDataStr = sessionStorage.getItem('userData')
    const userData = userDataStr ? JSON.parse(userDataStr) : null

    emit('userData', {
      periodo: Number(periodo.value),
      empresaId: empresa.value.value,
      userId: userData?.id ?? null,
    })

    nextTick(() => {
      setTimeout(() => {
        const periodoNuevo = JSON.parse(localStorage.getItem('periodonuevo'))

        reporteManagement(periodoNuevo)
      }, 2000)
    })
  })
}

const guardarReporte = reporte => {
  if (reporte.periodoId > 0) {
    addNewReporte(reporte)
    startCountdown()
    loadings.value = true
  } else {
    console.error('Error al guardar el reporte: Periodo ID inválido.')
    loadings.value = false
  }
}

const guardarReporteTxt = async periodoNuevo => {
  try {
    const user = await obtenerDatosUsuario()
    const datosReporte = await obtenerDatosReporte(user, periodoNuevo)

    guardarReporte(datosReporte)
  } catch (error) {
    console.error('Error al guardar reporte TXT:', error)
    loadings.value = false
  }
}

const addNewReporte = reporteData => {
  superciasListStore.addReporteSupercias(reporteData)
    .then(res => {
      console.log('Reporte guardado correctamente: ', res)
      emit('update:isDrawerOpen', false)
      router.replace('/pages/supercias/list')
    })
    .catch(error => {
      console.error('Error al guardar reporte en Supercias:', error)
      loadings.value = false
      stopCountdown()
    })
}

const startCountdown = () => {
  loadings.value = true
  countdown.value = 60

  if (intervalId.value)
    clearInterval(intervalId.value)

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

// 👉 Cuando cambia la empresa, recalculamos años disponibles
const getEmpresa = () => {
  const companies = empresas.value
  let periodosEmpresa = []

  companies.forEach(compania => {
    const valueCompania = compania?.value ?? compania
    if (valueCompania === empresa.value.value) {
      periodosEmpresa = compania?.periodos ?? []
    }
  })

  if (Array.isArray(periodosEmpresa)) {
    const periodosOcupados = periodosEmpresa.map(obj => obj.periodo)

    anios.value = aniosPosibles.value.filter(anio => !periodosOcupados.includes(anio))
  } else {
    anios.value = [...aniosPosibles.value]
  }
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
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
      >
        <VIcon
          size="18"
          icon="tabler-x"
        />
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
                  :hint="`${empresa.value}, ${empresa.title}`"
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
                />
              </VCol>

              <!-- 👉 Submit -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-4"
                  style="font-size: 12px; width: 100%;"
                  :loading="loadings"
                  :disabled="loadings || periodo === ''"
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
