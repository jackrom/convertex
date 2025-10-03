<script setup>
import { ref } from 'vue'

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { cargarDatos } from "@core/utils/turboNotas"

const editor = ref(ClassicEditor)

const entidad = ref({})

const gestionSanciones = computed(() => {
  console.log('entidad.value.periodoactual: ', entidad.value.periodoactual)
  if (entidad.value.md_sanciones) {
    return entidad.value.md_sanciones
      .replaceAll('{{ nombreempresa }}', entidad.value.nombre)
      .replaceAll('{{ periodoactual }}', entidad.value.periodoactual)
  }

  return ''
})

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('entidad', JSON.stringify(entidad.value))
}

const handleSancionesChange = newValue => {
  entidad.value.md_sanciones = newValue
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

    entidad.value.md_sanciones
      .replaceAll('{{ nombreempresa }}', entidad.value.nombre)
      .replaceAll('{{ periodoactual }}', entidad.value.periodoactual)
  }, 300)
})
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12" md="12">
        <VLabel>Sanciones</VLabel>
        <Ckeditor
          v-model="gestionSanciones"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleSancionesChange"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>
/* Aquí puedes agregar estilos específicos para tu componente */
</style>


