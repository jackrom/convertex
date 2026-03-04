<script setup>
import { ref } from 'vue'
import { es } from 'vuetify/locale'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { obtenerEmpresaActual } from "@core/utils/turboNotas"
import { cargarDatosInformeSocietario } from "@core/utils/informeSocietario"
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const editor = ref(ClassicEditor)

const empresa = ref('')
const informesocietario = ref({})

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  console.log('informesocietario', informesocietario.value)
  localStorage.setItem('informesocietario', JSON.stringify(informesocietario.value))
}

onMounted(() => {
  empresa.value = obtenerEmpresaActual()
  informesocietario.value = cargarDatosInformeSocietario()

  informesocietario.value.periodoactual = Number(reportStore.getReportData('periodosreporteifluc')['periodo'])
  informesocietario.value.periodoanterior = Number(reportStore.getReportData('periodosreporteifluc')['periodo']) - 1

  informesocietario.value.reporteId = JSON.parse(localStorage.getItem('reporteId'))

})
</script>

<template>
  <VLocaleProvider :current="es">
    <VContainer>
      <VRow>
        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.lugaryfechaaprobaciongerente"
            label="Lugar y fecha de aprobación de informe de gerente"
            hint="Ejemplo: Quito, 10 de mayo del 2024"
            persistent-hint
            placeholder="Quito, 10 de mayo del 2024"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.lugaryfechaaprobacioncomisario"
            label="Lugar y fecha de aprobación de informe de comisario"
            hint="Ejemplo: Quito, 10 de mayo del 2024"
            persistent-hint
            placeholder="Quito, 10 de mayo del 2024"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.lugaryfechaaprobacionacta"
            label="Lugar y fecha de aprobación de informe de Acta Junta General"
            hint="Ejemplo: Quito, 10 de mayo del 2024"
            persistent-hint
            placeholder="Quito, 10 de mayo del 2024"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.horainicioacta"
            label="Hora de inicio de Junta General"
            hint="Ejemplo: 12:30:00 AM"
            persistent-hint
            placeholder="Ejemplo: 12:30:00 AM"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.horaaprobacionacta"
            label="Hora de aprobación de informe de Acta Junta General"
            hint="Ejemplo: 10:30:00 AM"
            persistent-hint
            placeholder="Ejemplo: 10:30:00 AM"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.nombreapellidoscomisario"
            label="Nombres y Apellidos del comisario"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.nombreapellidosgerente"
            label="Nombres y Apellidos del Gerente"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.nombreapellidospresidente"
            label="Nombres y Apellidos del Presidente"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.nombreapellidossecretario"
            label="Nombres y Apellidos del Secretario(a)"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12" md="6">
          <VTextField
            v-model="informesocietario.direccion"
            label="Dirección de la empresa"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

      </VRow>
    </VContainer>
  </VLocaleProvider>
</template>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>
