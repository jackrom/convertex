<script setup>
import { ref } from 'vue'
import { es } from 'vuetify/locale'
import paisesData from '@/assets/jsondata/countries.json'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const editor = ref(ClassicEditor)

import AppDateTimePicker from "@core/components/AppDateTimePicker.vue"
import { obtenerEmpresaActual , cargarDatos } from "@core/utils/turboNotas"

let empresa = ''
const enterprise_name = ref('')

const entidad = ref({})

enterprise_name.value = empresa.nombre

const gerente_name = computed(() => entidad.value.representanteLegal)

// entidad.value.descripcionRepresentanteLegal = `${ gerente_name.value }, quién representa a la Compañía, está facultado para dirigir y administrar los negocios sociales, celebrar y ejecutar a nombre de la Compañía y representar a ésta en toda clase de actos y contratos, mantener el cuidado de los bienes y fondos de la Compañía, suscribir y firmar a nombre de la Compañía todas las escrituras públicas e instrumentos privados en los que consten actos y contratos que celebre la compañía; entre otros. `

const actualizarValores = () => {
  if (entidad.value.representanteLegal !== gerente_name.value) {
    entidad.value.representanteLegal = gerente_name.value
  }

  gerente_name.value = entidad.value.representanteLegal

  actualizarEntidad()
}

const actualizarEntidad = () => {
  localStorage.setItem('entidad', JSON.stringify(entidad.value))
}

const lineadenegocio = computed(() => {
  if (entidad.value.lineanegocio) {
    return entidad.value.lineanegocio.replace('{{ nombreempresa }}', enterprise_name.value)
  }

  return ''
})

const estructuraOrganizacional = computed(() => {
  if (entidad.value.estructuraOrganizacional) {
    return entidad.value.estructuraOrganizacional.replace('{{ nombreempresa }}', enterprise_name.value)
  }

  return ''
})

const descripcionEmpresa = computed(() => {
  if (entidad.value.descripcionEmpresa) {
    return entidad.value.descripcionEmpresa.replace('{{ nombreempresa }}', enterprise_name.value)
      .replace('{{ nombregerente }}', entidad.value.representanteLegal)
  }

  return ''
})

const descripcionRepresentanteLegal = computed(() => {
  if (entidad.value.descripcionRepresentanteLegal) {
    return entidad.value.descripcionRepresentanteLegal.replace('{{ gerente_name }}', entidad.value.representanteLegal)
  }

  return ''
})

const paises = paisesData

const opcionesFormaLegal = [
  'Sociedad Anónima',
  'Compañía de responsabilidad limitada',
  'Sociedad por Acciones simplificadas',
  'Otra',
]

const menu = ref(false)

const agregarAccionista = () => {
  entidad.value.accionistas.push({ nombre: '' })
}

const eliminarAccionista = index => {
  entidad.value.accionistas.splice(index, 1)
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

onMounted( () => {
  empresa = obtenerEmpresaActual()
  if (empresa && empresa.nombre) {
    enterprise_name.value = empresa.nombre
  }
  entidad.value = cargarDatos()
  if (entidad.value['lineanegocio'])
    entidad.value['lineanegocio'].replace('{{ nombreempresa }}', empresa.nombre)

  entidad.value.periodoactual = Number(reportStore.getReportData('periodosreporteifluc')['periodo'])
  entidad.value.periodoanterior = Number(reportStore.getReportData('periodosreporteifluc')['periodo']) - 1
})

const handleDescripcionEmpresaChange = newValue => {
  entidad.value.descripcionEmpresa = newValue
}

const handleDescripcionRepresentanteChange = newValue => {
  entidad.value.descripcionRepresentanteLegal = newValue
}

const handleEstructuraOrganizacionalChange = newValue => {
  entidad.value.estructuraOrganizacional = newValue
}

const handleLineaNegocioChange = newValue => {
  entidad.value.lineanegocio = newValue
}
</script>

<template>
  <VLocaleProvider :current="es">
    <VContainer>
      <VRow>
        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            v-model="entidad.nombre"
            label="Nombre de la entidad"
            disabled
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            v-model="entidad.ruc"
            label="RUC de la entidad"
            disabled
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VSelect
            v-model="entidad.pais"
            :items="paises"
            label="País de incorporación"
            persistent-hint
            return-object
            placeholder="Select State"
            eager
            @update:modelValue="actualizarValores"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            v-model="entidad.domicilio"
            label="Domicilio entidad"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VSelect
            v-model="entidad.formaLegal"
            label="Forma legal de la entidad"
            :items="opcionesFormaLegal"
            placeholder="Seleccione una opción"
            eager
            @update:modelValue="actualizarValores"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            v-model="entidad.representanteLegal"
            label="Nombre del Representante legal"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12">
          <VLabel>Descripción de la Empresa</VLabel>
          <Ckeditor
            v-model="descripcionEmpresa"
            :editor="editor"
            @input="onEditorBlur"
            @blur="onEditorBlur"
            @update:modelValue="handleDescripcionEmpresaChange"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VLabel>Descripción del Representante legal</VLabel>
          <Ckeditor
            v-model="descripcionRepresentanteLegal"
            :editor="editor"
            @input="onEditorBlur"
            @blur="onEditorBlur"
            @update:modelValue="handleDescripcionRepresentanteChange"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VLabel>Estructura organizacional y societaria</VLabel>
          <Ckeditor
            v-model="estructuraOrganizacional"
            :editor="editor"
            @input="onEditorBlur"
            @blur="onEditorBlur"
            @update:modelValue="handleEstructuraOrganizacionalChange"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <AppDateTimePicker
            v-model="entidad.fechaJunta"
            :config="{ dateFormat: 'j F, Y' }"
            :lang="es"
            class="date"
            label="Fecha de Junta General de Accionistas"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol
          cols="12"
          md="6"
        >
          <VTextField
            v-model="entidad.tasaimpuesto"
            label="Tasa de impuesto a la renta"
            @input="actualizarValores"
            @keyup="actualizarValores"
          />
        </VCol>

        <VCol cols="12">
          <VLabel>Línea de negocio</VLabel>
          <Ckeditor
            v-model="lineadenegocio"
            :editor="editor"
            @input="onEditorBlur"
            @blur="onEditorBlur"
            @update:modelValue="handleLineaNegocioChange"
          />
        </VCol>

        <VCol cols="12">
          <label>Composición empresarial</label>
          <VBtn
            variant="plain"
            small
            class="ml-lg-10"
            @click="agregarAccionista"
          >
            Agregar accionista
          </VBtn>
          <VList dense>
            <VListItem
              v-for="(accionista, index) in entidad.accionistas"
              :key="index"
            >
              <VListItemContent>
                <VRow
                  align="center"
                  no-gutters
                >
                  <VCol cols="5">
                    <VTextField
                      v-model="accionista.nombre"
                      label="Accionista"
                      @input="actualizarValores"
                      @keyup="actualizarValores"
                    />
                  </VCol>
                  <VCol
                    cols="5"
                    class="ml-2"
                  >
                    <VTextField
                      v-model="accionista.participacion"
                      label="Participación"
                      @input="actualizarValores"
                      @keyup="actualizarValores"
                    />
                  </VCol>
                  <VCol
                    cols="1"
                    class="ml-2"
                  >
                    <VBtn
                      icon
                      @click="eliminarAccionista(index)"
                    >
                      <VIcon>mdi-delete</VIcon>
                    </VBtn>
                  </VCol>
                </VRow>
              </VListItemContent>
            </VListItem>
          </VList>
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
