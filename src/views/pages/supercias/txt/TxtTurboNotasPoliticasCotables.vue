<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { cargarDatos } from "@core/utils/turboNotas"
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const editor = ref(ClassicEditor)

const editorConfig = ref({
  items: [
    'undo', 'redo',
    '|', 'heading',
    '|', 'fontfamily','fontsize', 'fontColor', 'fontBackgroundColor',
    '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
    '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
    '|', 'alignment',
    '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
  ],
  shouldNotGroupWhenFull: true,
})

const entidad = ref({})

const datosGuardados = reportStore.reportData['reporteTurboNotas']
const empresa = reportStore.reportData['empresareporteifluc']
const periodo = reportStore.reportData['periodosreporteifluc']

const politicasContables = computed(() => {
  if (entidad.value.md_policies_accounting) {
    return entidad.value.md_policies_accounting
      .replace('{{ tasaimpuestos }}', entidad.value.tasaimpuesto)
      .replaceAll('{{ periodoanterior }}', (periodo.periodo - 1))
      .replaceAll('{{ nombreempresa }}', empresa.nombre)
      .replaceAll('{{ periodoactual }}', periodo.periodo)
  }

  return ''
})

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('entidad', JSON.stringify(entidad.value))

  reportStore.setReportData({
    ...reportStore.reportData,
    reporteTurboNotas: entidad.value,
  })
}

const handlePoliticasContablesChange = newValue => {
  entidad.value.md_policies_accounting = newValue
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

  console.log('entidad: ', entidad.value)
  setTimeout(() => {
    const editorElements = document.querySelectorAll('.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused)')

    editorElements.forEach(element => {
      element.style.maxHeight = '300px'
    })
  }, 250)
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12" md="12">
        <VLabel>Políticas Contables</VLabel>
        <Ckeditor
          :editor="editor"
          v-model="politicasContables"
          :config="editorConfig"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handlePoliticasContablesChange"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>
/* Aquí puedes agregar estilos específicos para tu componente */
</style>
