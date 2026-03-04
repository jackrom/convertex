<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { cargarDatos } from "@core/utils/turboNotas"
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const editor = ref(ClassicEditor)

const entidad = ref({})

const datosGuardados = reportStore.reportData['reporteTurboNotas']
const empresa = reportStore.reportData['empresareporteifluc']
const periodo = reportStore.reportData['periodosreporteifluc']

const estimacionesDeLaAdministracion = computed(() => {
  if (entidad.value.md_estimaciones_juicios_administracion) {
    return entidad.value.md_estimaciones_juicios_administracion
  }

  return ''
})

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('entidad', JSON.stringify(entidad.value))
}

const handleEstimacionesDeLaAdministracionChange = newValue => {
  entidad.value.md_estimaciones_juicios_administracion = newValue
}

const onEditorBlur = () => {
  const notebookElements = document.querySelectorAll('.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable, .ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners')
  const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')

  notebookElements.forEach(element => {
    element.style.maxHeight = '300px'
  })

  editorElements.forEach(element => {
    element.style.maxHeight = '300px'
  })

  actualizarValores()
}

onMounted(() => {
  entidad.value = cargarDatos()
  setTimeout(() => {
    const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')

    editorElements.forEach(element => {
      element.style.maxHeight = '300px'
    })
  }, 300)
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12" md="12">
        <VLabel>Estimaciones y juicios de la administración</VLabel>
        <Ckeditor
          v-model="estimacionesDeLaAdministracion"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleEstimacionesDeLaAdministracionChange"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>
/* Aquí puedes agregar estilos específicos para tu componente */
</style>

