<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import {
  emailValidator,
  requiredValidator,
} from '@validators'
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"
import {
  obtenerDatosReporte, obtenerDatosUsuario,
} from "@core/utils/reportes"
import { useReportStore } from "@/@store/reportStore"

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

const empresa =  ref({
  title: 'Tu Empresa',
  value: '1717170110',
  periodosifluc: [],
})

const empresas = ref([])
const aniosposibles = ref([2017,2018,2019,2020,2021,2022,2023,2024,2025])
const anios = ref([])
const searchQuery = ref('')
const currentPage = ref(1)
const totalPage = ref(1)
const rowPerPage = ref(1000)
const route = useRoute()
const router = useRouter()

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const fetchEmpresas = () => {
  empresaListStore.fetchEmpresas({
    q: searchQuery.value,
    status: null,
    plan: null,
    role: null,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: "ifluc",
  }).then(response => {

    const companies = response.data.empresas
    const e = []

    companies.forEach(obj => {
      let compania = { title: obj.nombre, value: obj.ruc, periodos: obj.periodosifluc }
      e.push(compania)
    })
    empresas.value = e

  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresas)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Fetching periodos
const fetchPeriodos = () => {
  periodoListStore.fetchPeriodos({
    q: searchQuery.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: 'ifluc',
  }).then(response => {
    console.log("response periodos: ", response)
    periodos.value = response.data.periodos
    totalPage.value = response.data.totalPage

    // Verifica si la propiedad empresas existe y es un array
    if (Array.isArray(response.data.periodos)) {
      const periodosOcupados = response.data.periodos.map(obj => obj.periodo)

      anios.value = aniosposibles.value.filter(anio => !periodosOcupados.includes(anio))
    } else {
      anios.value = [...aniosposibles.value]
    }
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchPeriodos)

const reporteManagement = reporteId => {
  console.log('reporteId: ', reporteId)
  if (reporteId === 0) {
    setTimeout(() => {
      let periodo = JSON.parse(localStorage.getItem('periodonuevo'))
      reporteManagement(periodo)
    }, 1000)
  } else {
    guardarReporteTxt(reporteId)
  }
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      console.log('empresa: ', empresa.value)
      console.log('empresa: ', empresa.value.value)
      loadings.value = true
      localStorage.setItem('empresanueva', JSON.stringify(empresa.value.value))

      emit('userData', {
        periodo: Number(periodo.value),
        empresaId: empresa.value.value,
        userId: JSON.parse(sessionStorage.getItem('userData')).id,
      })

      nextTick(() => {
        setTimeout(() => {
          console.log(Number(localStorage.getItem('periodonuevo')))
          let periodoNuevo = JSON.parse(localStorage.getItem('periodonuevo'))
          reporteManagement(periodoNuevo)
        }, 2000)

        // refForm.value?.reset()
        // refForm.value?.resetValidation()

        // router.replace(route.query.to ? String(route.query.to) : '/pages/supercias/list')
      })
    }

  })
}

const loadings = ref(false)
const countdown = ref(60)
const intervalId = ref(null)

const guardarReporte = reporte => {
  if (reporte.periodoId > 0) {
    console.log("reporte: ", reporte)
    addNewReporte(reporte)

    startCountdown()
    loadings.value = true
  } else {
    console.error('Error al guardar el reporte: Periodo ID inválido.')
  }
}


const guardarReporteTxt = async periodoNuevo => {
  console.log('guardarReporteTxt: ', periodoNuevo)
  try {
    const user = await obtenerDatosUsuario()
    const datosReporte = await obtenerDatosReporte(user, periodoNuevo)


    guardarReporte(datosReporte)
  } catch (error) {
    console.error('Error al guardar reporte TXT:', error)
  }
}

const addNewReporte = reporteData => {
  // localStorage.clear()
  superciasListStore.addReporteSupercias(reporteData)
    .then(res => {
      console.log(res)
      emit('update:isDrawerOpen', false)
      router.replace('/pages/supercias/list')
    })
}

const startCountdown = () => {
  loadings.value = true
  countdown.value = 60
  intervalId.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1
    } else {
      stopCountdown()
    }
  }, 1000)
}

const stopCountdown = () => {
  clearInterval(intervalId)
  loadings.value = false
}

const getEmpresa = () => {
  let companies = empresas.value
  let periodos = []
  companies.forEach(compania => {
    if (((compania?.value) ? compania?.value : compania) === empresa.value.value) {
      periodos = compania?.periodos

      if (Array.isArray(periodos)) {
        const periodosOcupados = periodos.map(obj => obj.periodo)

        anios.value = aniosposibles.value.filter(anio => !periodosOcupados.includes(anio))
      } else {
        anios.value = [...aniosposibles.value]
      }
    }
  })
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
      </VBTn>
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
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-4"
                  style="font-size:12px;width: 100%;"
                  :loading="loadings"
                  :disabled="loadings || (periodo == '')"

                >
                  <template #loader>
                    <span class="custom-loader">
                      <VIcon icon="tabler-refresh" />
                    </span>
                    <span class="pl-2 pr-2">Creando reporte, espere {{ countdown }} ...</span>
                  </template>
                  Crear Periodo
                </VBtn>
              </VCol>
              <VCol cols="12">
                <VBtn
                  type="reset"
                  variant="tonal"
                  style="font-size:12px;width: 100%;"
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
