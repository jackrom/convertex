<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { cargarDatos } from "@core/utils/turboNotas"

const editor = ref(ClassicEditor)

const entidad = ref({})

const gestionDeRiesgos = computed(() => {
  if (entidad.value.md_gestion_riesgos) {
    return entidad.value.md_gestion_riesgos
      .replaceAll('{{ nombreempresa }}', entidad.value.nombre)
  }

  return ''
})

const actualizarValores = () => {
  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('entidad', JSON.stringify(entidad.value))
}

const handleGestionDeRiesgosChange = newValue => {
  entidad.value.md_gestion_riesgos = newValue
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
        <VLabel>Políticas Contables</VLabel>
        <Ckeditor
          v-model="gestionDeRiesgos"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleGestionDeRiesgosChange"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>



<style scoped>
.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
  max-height: 300px;
}
</style>

