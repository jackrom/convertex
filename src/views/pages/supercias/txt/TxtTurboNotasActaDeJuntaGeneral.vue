<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { obtenerEmpresaActual } from "@core/utils/turboNotas"
import { cargarDatosInformeSocietario } from "@core/utils/informeSocietario"

const editor = ref(ClassicEditor)

const empresa = ref('')
const informesocietario = ref({})

let ejemplosDefinicionOrdenDelDia = [
  "1. Conocer y resolver respecto del Informe presentado por el Gerente relativo al ejercicio económico {{ periodoactual }}, y dictar la resolución correspondiente.",
  "2. Conocer y resolver sobre el Informe presentado por el Comisario, relativo al ejercicio económico {{ periodoactual }}, y dictar resolución correspondiente.",
  "3. Conocer y resolver sobre las cuentas, balances y estados financieros correspondientes al ejercicio económico {{ periodoactual }}.",
  "4. Conocer y resolver sobre el destino de las Utilidades Líquidas del ejercicio económico. correspondiente al {{ periodoactual }}.",
  "5. Conocer y resolver sobre la designación de Comisario de la compañía para el ejercicio económico {{ periodoactual }}",
]

const caso1 = `<p>El Orden del día propuesto, es aprobado de manera unánime por los accionistas de la Compañía presentes, enseguida, la Presidenta Ad Hoc ordena que se pase a tratar el Orden del día:</p>
  <p>1. Conocer y resolver respecto del Informe presentado por el Gerente relativo al ejercicio económico {{ periodoactual }}, y dictar la resolución correspondiente.</p>
  <p>Sobre el numeral 1. del Orden del Día, hace uso de la palabra la señorita Presidenta Ad Hoc que solicita a la Secretaria Ad Hoc  de lectura al Informe Presentado por el Gerente, señor {{ nombregerente }} correspondiente a su administración durante el ejercicio económico {{ periodoactual }}, el cual es propuesto para su aprobación.</p>
  <p>Una vez que se ha dado lectura al Informe de Gerente por parte de la Secretaria Ad Hoc, la {{ nombrepresidente }}, representante del accionista accionista1 propone y mociona que se apruebe el contenido del informe presentado por el señor Gerente de la compañía, la propuesta y moción es respaldada por la Ing. Adriana Ruano, representante de la accionista accionista2, por tanto, la propuesta es elevada a moción, moción que es puesta a consideración de los accionistas y, la misma es aprobada de manera totalitaria y unánime, en consecuencia esta junta RESUELVE:</p>
  <p> Aprobar el contenido del informe presentado por el señor Gerente, correspondiente a su administración durante el ejercicio económico {{ periodoactual }}.</p>`

const caso2 = `<p>2. Conocer y resolver sobre el Informe presentado por el Comisario, relativo al ejercicio económico {{ periodoactual }} y dictar resolución correspondiente.</p>
    <p>Sobre el segundo punto del orden del día, la Presidenta Ad Hoc solicita a la señorita Secretaria Ad Hoc de lectura al Informe Presentado por el Comisario de la compañía, correspondiente al ejercicio económico {{ periodoactual }}, el cual es propuesto para su aprobación.</p>
    <p>Una vez que se ha dado lectura al Informe de Comisario por parte de la Secretaria Ad Hoc; la {{ nombreapresidente }} representante del accionista {{ nombreaccionista1 }} propone y mociona que se apruebe el contenido del informe presentado por el Comisario de la compañía, lo cual es respaldado por la {{ nombresecretario }}, representante de la accionista accionista2, por tanto, la propuesta es elevada a moción, moción que es puesta a consideración de los accionistas y, la misma es aprobada de
    manera totalitaria y unánime en consecuencia esta junta RESUELVE:</p>
    <p>• Aprobar el contenido del informe presentado por el Comisario de la compañía, correspondiente al ejercicio económico {{ periodoactual }}.</p>`

const caso3 = `<p>3. Conocer y resolver sobre las cuentas, balances y estados financieros correspondientes al ejercicio económico {{ periodoactual }}.</p>
    <p>En el tercer punto del orden del día la Presidenta Ah Hoc, somete a consideración de los accionistas de la compañía las cuentas, balances y estados financieros correspondientes al ejercicio económico {{ periodoactual }}, el cual es propuesto para su aprobación.</p>
    <p>La representante del accionista eaccionista1 propone y mociona que se aprueben las cuentas, balances y estados financieros correspondientes al ejercicio económico {{ periodoactual }} lo cual es respaldado por la Ing. Adriana Ruano, representante de la accionista accionista2, por tanto, la propuesta y moción es puesta a consideración de los accionistas y, la misma es aprobada de manera totalitaria y unánime, en consecuencia esta junta RESUELVE:</p>
    <p> Aprobar de forma unánime las cuentas, balances y estados financieros correspondientes al ejercicio económico {{ periodoactual }}, de la compañía {{ nombreempresa }}</p>`

const caso4 = `<p>4. Conocer y resolver sobre el destino de las Utilidades Líquidas del ejercicio económico.</p>
    <p>Sobre el cuarto punto del orden del día, la Presidenta Ad Hoc, toma la palabra y expone que la  compañía {{ nombreempresa }}, presenta pérdidas, por lo tanto no hay ningún punto que resolver.</p>
    <p>La moción y propuesta realizada por la representante del accionista accionista1, es respaldada por la Ing. Adriana Ruano, representante de la accionista accionista2, por tanto, la propuesta es elevada a moción, moción que es puesta a consideración de los accionistas y, la misma es aprobada de manera totalitaria y unánime en consecuencia esta junta RESUELVE:</p>
    <p> Aprobar el cuarto punto del orden del día, en el sentido de que no cabe ninguna resolución al respecto, toda vez que el ejercicio económico {{ periodoactual }} genero pérdida.</p>`

const caso5 = `<p>5. Conocer y resolver sobre la designación de Comisario de la compañía para el ejercicio económico {{ periodoactual }}. En el último punto del orden del día la representante del accionista accionista1 propone y mociona para el cargo de Comisario de la compañía para el ejercicio económico {{ periodoactual }} al señor {{ nombrecomisario }}, la propuesta y moción es respaldada por la representante de la accionista accionista1 por tanto, la propuesta es elevada a moción, moción que es puesta a consideración de los accionistas
    y, la misma es aprobada de manera totalitaria y unánime en consecuencia esta junta RESUELVE:</p>
    <p>• Designar como Comisario de {{ nombreempresa }}, para el ejercicio económico {{ periodoactual }}, al señor {{ nombrecomisario }}.</p>`

let ejemplosExposicionOrdenDelDia = [
  caso1,
  caso2,
  caso3,
  caso4,
  caso5,
]

let numeralOrdenDelDia = (!Array.isArray(informesocietario.value.md_orden_del_dia)) ? 1 : informesocietario.value.md_orden_del_dia.length

const informeSocietarioActaBloque1 = computed(() => {
  let firmasAccionistas = ''
  let accionistas = informesocietario.value?.entidad?.accionistas

  if (accionistas && accionistas.length > 0) {
    accionistas = (typeof accionistas === 'object') ? accionistas : JSON.parse(accionistas)
    accionistas.forEach((accionista, index) => {
      firmasAccionistas += `<p>${accionista.nombre}<br>ACCIONISTA</p>`
      if (index < accionistas.length - 1) {
        firmasAccionistas += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      }
    })
  }

  console.log('informesocietario.value.lugaryfechaaprobacionacta: ', informesocietario.value.lugaryfechaaprobacionacta)

  return informesocietario.value.md_acta_junta_general_bloque1?.replace('{{ lugaryfechaaprobacionacta }}', informesocietario.value.lugaryfechaaprobacionacta)
    .replace('{{ nombrecomisario }}', informesocietario.value.nombreapellidoscomisario)
    .replace('{{ direccion }}', informesocietario.value.direccion)
    .replace('{{ horaaprobacionacta }}', informesocietario.value.horaaprobacionacta)
    .replace('{{ horainicioacta }}', informesocietario.value.horainicioacta)
    .replaceAll('{{ nombreempresa }}', informesocietario.value.entidad.nombre)
    .replaceAll('{{ nombresecretario }}', informesocietario.value.nombreapellidossecretario)
    .replaceAll('{{ nombrepresidente }}', informesocietario.value.nombreapellidospresidente)
    .replaceAll('{{ nombreaccionista1 }}', informesocietario.value.nombreaccionista1)
    .replaceAll('{{ nombreaccionista2 }}', informesocietario.value.nombreaccionista2)
    .replaceAll('{{ periodoactual }}', informesocietario.value.entidad.periodoactual)
    .replaceAll('{{ nombregerente }}', informesocietario.value.nombreapellidosgerente)
    .replaceAll('{{ firmasAccionistas }}', firmasAccionistas)
})

const informeSocietarioActaBloque2 = computed(() => {
  let firmasAccionistas = ''
  let accionistas = informesocietario.value?.entidad?.accionistas

  if (accionistas && accionistas.length > 0) {
    accionistas = (typeof accionistas === 'object') ? accionistas : JSON.parse(accionistas)
    accionistas.forEach((accionista, index) => {
      firmasAccionistas += `<p>${accionista.nombre}<br>ACCIONISTA</p>`
      if (index < accionistas.length - 1) {
        firmasAccionistas += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      }
    })
  }

  return informesocietario.value.md_acta_junta_general_bloque2?.replace('{{ lugaryfechaaprobacionacta }}', informesocietario.value.lugaryfechaaprobacionacta)
    .replace('{{ nombrecomisario }}', informesocietario.value.nombreapellidoscomisario)
    .replace('{{ direccion }}', informesocietario.value.direccion)
    .replace('{{ horaaprobacionacta }}', informesocietario.value.horaaprobacionacta)
    .replaceAll('{{ nombreempresa }}', informesocietario.value.entidad.nombre)
    .replaceAll('{{ nombresecretario }}', informesocietario.value.nombreapellidossecretario)
    .replaceAll('{{ nombrepresidente }}', informesocietario.value.nombreapellidospresidente)
    .replaceAll('{{ nombreaccionista1 }}', informesocietario.value.nombreaccionista1)
    .replaceAll('{{ nombreaccionista2 }}', informesocietario.value.nombreaccionista2)
    .replaceAll('{{ periodoactual }}', informesocietario.value.entidad.periodoactual)
    .replaceAll('{{ nombregerente }}', informesocietario.value.nombreapellidosgerente)
    .replaceAll('{{ firmasAccionistas }}', firmasAccionistas)
})

const informeSocietarioActaBloque3 = computed(() => {
  let firmasAccionistas = ''
  let accionistas = informesocietario.value?.entidad?.accionistas

  if (accionistas && accionistas.length > 0) {
    accionistas = (typeof accionistas === 'object') ? accionistas : JSON.parse(accionistas)
    accionistas.forEach((accionista, index) => {
      firmasAccionistas += `<p>${accionista.nombre}<br>ACCIONISTA</p>`
      if (index < accionistas.length - 1) {
        firmasAccionistas += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      }
    })
  }

  return informesocietario.value.md_acta_junta_general_bloque3?.replace('{{ lugaryfechaaprobacionacta }}', informesocietario.value.lugaryfechaaprobacionacta)
    .replace('{{ nombrecomisario }}', informesocietario.value.nombreapellidoscomisario)
    .replace('{{ direccion }}', informesocietario.value.direccion)
    .replace('{{ horaaprobacionacta }}', informesocietario.value.horaaprobacionacta)
    .replace('{{ horainicioacta }}', informesocietario.value.horainicioacta)
    .replaceAll('{{ nombreempresa }}', informesocietario.value.entidad.nombre)
    .replaceAll('{{ nombresecretario }}', informesocietario.value.nombreapellidossecretario)
    .replaceAll('{{ nombrepresidente }}', informesocietario.value.nombreapellidospresidente)
    .replaceAll('{{ nombreaccionista1 }}', informesocietario.value.nombreaccionista1)
    .replaceAll('{{ nombreaccionista2 }}', informesocietario.value.nombreaccionista2)
    .replaceAll('{{ periodoactual }}', informesocietario.value.entidad.periodoactual)
    .replaceAll('{{ nombregerente }}', informesocietario.value.nombreapellidosgerente)
    .replaceAll('{{ firmasAccionistas }}', firmasAccionistas)
})

const handleInformeSocietarioActaBloque1Change = newValue => {
  informesocietario.value.md_acta_junta_general_bloque1 = newValue
}

const sustituirMarcadores = (texto, valores) => {
  let textoSustituido = texto
  Object.keys(valores).forEach(clave => {
    const regex = new RegExp(`{{\\s*${clave}\\s*}}`, 'g')

    textoSustituido = textoSustituido.replace(regex, valores[clave])
  })

  return textoSustituido
}


const handleInformeSocietarioActaOrdenDiaBloque2Change = (newValue, index) => {
  const valoresParaSustituir = {
    periodoactual: informesocietario.value.entidad.periodoactual,
    nombreempresa: informesocietario.value.entidad.nombre,
    nombrepresidente: informesocietario.value.nombreapellidospresidente,
    nombregerente: informesocietario.value.nombreapellidosgerente,
    nombresecretario: informesocietario.value.nombreapellidossecretario,
    nombrecomisario: informesocietario.value.nombreapellidoscomisario,
  }

  if (index !== undefined && informesocietario.value.md_orden_del_dia[index]) {
    informesocietario.value.md_orden_del_dia[index].item = sustituirMarcadores(newValue, valoresParaSustituir)
  }
}

const handleInformeSocietarioActaBloque2Change = (newValue, index) => {
  const valoresParaSustituir = {
    periodoactual: informesocietario.value.entidad.periodoactual,
    nombreempresa: informesocietario.value.entidad.nombre,
    nombrepresidente: informesocietario.value.nombreapellidospresidente,
    nombregerente: informesocietario.value.nombreapellidosgerente,
    nombresecretario: informesocietario.value.nombreapellidossecretario,
    nombrecomisario: informesocietario.value.nombreapellidoscomisario,
  }

  if (index !== undefined && informesocietario.value.md_acta_junta_general_bloque2[index]) {
    informesocietario.value.md_acta_junta_general_bloque2[index].item = sustituirMarcadores(newValue, valoresParaSustituir)
  }
}


const handleInformeSocietarioActaBloque3Change = newValue => {
  informesocietario.value.md_acta_junta_general_bloque3 = newValue
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

const agregarOrdenDelDia = () => {
  if (!Array.isArray(informesocietario.value.md_orden_del_dia)) {
    informesocietario.value.md_orden_del_dia = []
  }
  informesocietario.value.md_orden_del_dia.push({ item: ejemplosDefinicionOrdenDelDia[numeralOrdenDelDia - 1] })

  if (!Array.isArray(informesocietario.value.md_acta_junta_general_bloque2)) {
    informesocietario.value.md_acta_junta_general_bloque2 = []
  }
  informesocietario.value.md_acta_junta_general_bloque2.push({ item: ejemplosExposicionOrdenDelDia[numeralOrdenDelDia - 1] })

  numeralOrdenDelDia++
}


const eliminarOrdenDelDia = index => {
  informesocietario.value.md_orden_del_dia.splice(index, 1)
}

onMounted(() => {
  empresa.value = obtenerEmpresaActual()
  informesocietario.value = cargarDatosInformeSocietario()

  return informesocietario.value.md_acta_junta_general_bloque1.replace('{{ lugaryfechaaprobacionacta }}', informesocietario.value.lugaryfechaaprobacionacta)
    .replace('{{ nombrecomisario }}', informesocietario.value.nombreapellidoscomisario)
    .replace('{{ direccion }}', informesocietario.value.direccion)
    .replace('{{ horaaprobacionacta }}', informesocietario.value.horaaprobacionacta)
    .replace('{{ horainicioacta }}', informesocietario.value.horainicioacta)
    .replaceAll('{{ nombreempresa }}', informesocietario.value.entidad.nombre)
    .replaceAll('{{ nombresecretario }}', informesocietario.value.nombreapellidossecretario)
    .replaceAll('{{ nombrepresidente }}', informesocietario.value.nombreapellidospresidente)
    .replaceAll('{{ nombreaccionista1 }}', informesocietario.value.nombreaccionista1)
    .replaceAll('{{ nombreaccionista2 }}', informesocietario.value.nombreaccionista2)
    .replaceAll('{{ periodoactual }}', informesocietario.value.entidad.periodoactual)
    .replaceAll('{{ nombregerente }}', informesocietario.value.nombreapellidosgerente)

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
        <label>Generalidades</label>
        <Ckeditor
          v-model="informeSocietarioActaBloque1"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleInformeSocietarioActaBloque1Change"
        />
      </VCol>

      <VCol cols="12">
        <label>ORDEN DEL DIA</label>
        <VBtn
          variant="plain"
          small
          class="ml-lg-10"
          @click="agregarOrdenDelDia"
        >
          Agregar items
        </VBtn>
        <VList dense>
          <VLabel>DEFINICIÓN PUNTOS ORDEN DEL DÍA</VLabel>
          <VDivider />
          <VListItem
            v-for="(orden, index) in informesocietario.md_orden_del_dia"
            :key="index"
          >
            <VListItemContent>
              <VRow
                align="center"
                no-gutters
              >
                <VCol
                  cols="10"
                  class="ml-2"
                >
                  <label>Definición Orden del dia  {{ index + 1}}</label>
                  <Ckeditor
                    v-model="orden.item"
                    :editor="editor"
                    @input="onEditorBlur"
                    @blur="onEditorBlur"
                    @update:modelValue="newValue => handleInformeSocietarioActaOrdenDiaBloque2Change(newValue, index)"
                  />
                </VCol>
                <VCol
                  cols="1"
                  class="ml-2"
                >
                  <VBtn
                    icon
                    @click="eliminarOrdenDelDia(index)"
                    style="position:absolute;"
                  >
                    <VIcon>mdi-delete</VIcon>
                  </VBtn>
                </VCol>
              </VRow>
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>



      <VCol
        cols="12"
        md="12"
        class="ckeditor-container"
      >
        <VLabel>EXPOSICIÓN PUNTOS ORDEN DEL DÍA</VLabel>
        <VDivider />
        <VList dense>
          <VListItem
            v-for="(orden, index) in informesocietario.md_acta_junta_general_bloque2"
            :key="index"
          >
            <VListItemContent>
              <VRow
                align="center"
                no-gutters
              >
                <VCol
                  cols="10"
                  class="ml-2"
                >
                  <label>Desarrollo y exposición Orden del dia {{ index + 1}}</label>
                  <Ckeditor
                    v-model="orden.item"
                    :editor="editor"
                    @input="onEditorBlur"
                    @blur="onEditorBlur"
                    @update:modelValue="newValue => handleInformeSocietarioActaBloque2Change(newValue, index)"
                  />
                </VCol>
                <VCol
                  cols="1"
                  class="ml-2"
                />
              </VRow>
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>

      <VCol cols="12" md="12" class="ckeditor-container">
        <label>Ejemplares</label>
        <Ckeditor
          v-model="informeSocietarioActaBloque3"
          :editor="editor"
          @input="onEditorBlur"
          @blur="onEditorBlur"
          @update:modelValue="handleInformeSocietarioActaBloque3Change"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<style scoped>

</style>
