<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { obtenerEmpresaActual } from "@core/utils/turboNotas"
import { cargarDatosInformeSocietario } from "@core/utils/informeSocietario"

const editor = ref(ClassicEditor)

const empresa = ref('')
const informesocietario = ref({})

const informeSocietarioComisario = computed(() => {
  return informesocietario.value.md_informe_comisario?.replace('{{ lugaryfechaaprobacioncomisario }}', informesocietario.value.lugaryfechaaprobacioncomisario)
    .replace('{{ nombrecomisario }}', informesocietario.value.nombreapellidoscomisario)
    .replaceAll('{{ nombreempresa }}', informesocietario.value.entidad.nombreempresa)
    .replace('{{ periodoactual }}', informesocietario.value.entidad.periodoactual)
})

const handleInformeSocietarioComisarioChange = newValue => {
  informesocietario.value.md_informe_comisario = newValue
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

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('informesocietario', JSON.stringify(informesocietario.value))
}

onMounted(() => {
  empresa.value = obtenerEmpresaActual()
  informesocietario.value = cargarDatosInformeSocietario()

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
      <VCol cols="12" md="12" class="ckeditor-container">
        <Ckeditor
          v-model="informeSocietarioComisario"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleInformeSocietarioComisarioChange"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>

</style>
