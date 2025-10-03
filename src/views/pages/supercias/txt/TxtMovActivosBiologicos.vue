<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializeMovActivosBiologicos, initializeMovActivosBiologicosAnt } from "@core/utils/initializers"
import { ref } from "vue"

const reportStore = useReportStore()

const values_ant = ref([])

const movActivosBiologicos = initializeMovActivosBiologicos()
const movActivosBiologicosAnt = initializeMovActivosBiologicosAnt()

/* PERIODO NUEVO */
let mov_saldoinicial_aec = movActivosBiologicos['mov_saldoinicial_aec']
let mov_compras_aec = movActivosBiologicos['mov_compras_aec']
let mov_bajasoventas_aec = movActivosBiologicos['mov_bajasoventas_aec']
let mov_incrementodisminuciondevalor_aec = movActivosBiologicos['mov_incrementodisminuciondevalor_aec']
let mov_reclasificacion_aec = movActivosBiologicos['mov_reclasificacion_aec']
let mov_saldofinal_aec = movActivosBiologicos['mov_saldofinal_aec']

let mov_saldoinicial_aep = movActivosBiologicos['mov_saldoinicial_aep']
let mov_compras_aep = movActivosBiologicos['mov_compras_aep']
let mov_bajasoventas_aep = movActivosBiologicos['mov_bajasoventas_aep']
let mov_incrementodisminuciondevalor_aep = movActivosBiologicos['mov_incrementodisminuciondevalor_aep']
let mov_reclasificacion_aep = movActivosBiologicos['mov_reclasificacion_aep']
let mov_saldofinal_aep = movActivosBiologicos['mov_saldofinal_aep']

let mov_saldoinicial_pec = movActivosBiologicos['mov_saldoinicial_pec']
let mov_compras_pec = movActivosBiologicos['mov_compras_pec']
let mov_bajasoventas_pec = movActivosBiologicos['mov_bajasoventas_pec']
let mov_incrementodisminuciondevalor_pec = movActivosBiologicos['mov_incrementodisminuciondevalor_pec']
let mov_reclasificacion_pec = movActivosBiologicos['mov_reclasificacion_pec']
let mov_saldofinal_pec = movActivosBiologicos['mov_saldofinal_pec']

let mov_saldoinicial_pep = movActivosBiologicos['mov_saldoinicial_pep']
let mov_compras_pep = movActivosBiologicos['mov_compras_pep']
let mov_bajasoventas_pep = movActivosBiologicos['mov_bajasoventas_pep']
let mov_incrementodisminuciondevalor_pep = movActivosBiologicos['mov_incrementodisminuciondevalor_pep']
let mov_reclasificacion_pep = movActivosBiologicos['mov_reclasificacion_pep']
let mov_saldofinal_pep = movActivosBiologicos['mov_saldofinal_pep']

let mov_saldoinicial_otros = movActivosBiologicos['mov_saldoinicial_otros']
let mov_compras_otros = movActivosBiologicos['mov_compras_otros']
let mov_bajasoventas_otros = movActivosBiologicos['mov_bajasoventas_otros']
let mov_incrementodisminuciondevalor_otros = movActivosBiologicos['mov_incrementodisminuciondevalor_otros']
let mov_reclasificacion_otros = movActivosBiologicos['mov_reclasificacion_otros']
let mov_saldofinal_otros = movActivosBiologicos['mov_saldofinal_otros']

let mov_saldoinicial_total = movActivosBiologicos['mov_saldoinicial_total']
let mov_compras_total = movActivosBiologicos['mov_compras_total']
let mov_bajasoventas_total = movActivosBiologicos['mov_bajasoventas_total']
let mov_incrementodisminuciondevalor_total = movActivosBiologicos['mov_incrementodisminuciondevalor_total']
let mov_reclasificacion_total = movActivosBiologicos['mov_reclasificacion_total']
let mov_saldofinal_total = movActivosBiologicos['mov_saldofinal_total']

let mov_animalesenccrecimiento_total = movActivosBiologicos['mov_animalesenccrecimiento_total']
let mov_animalesenproduccion_total = movActivosBiologicos['mov_animalesenproduccion_total']
let mov_plantasencrecimiento_total = movActivosBiologicos['mov_plantasencrecimiento_total']
let mov_plantasenproduccion_total = movActivosBiologicos['mov_plantasenproduccion_total']
let mov_otros_total = movActivosBiologicos['mov_otros_total']
let mov_total_total = movActivosBiologicos['mov_total_total']

let mov_saldofinalsegunmovimiento = ref(reportStore.getReportData("movactivosbiologicos")?.['mov_saldofinalsegunmovimiento'] || "0")
let mov_diferenciaporcuadrar = ref(reportStore.getReportData("movactivosbiologicos")?.['mov_diferenciaporcuadrar'] || "0")

/* PERIODO ANTERIOR */
let mov_saldoinicial_aec_ant = movActivosBiologicosAnt['mov_saldoinicial_aec_ant']
let mov_compras_aec_ant = movActivosBiologicosAnt['mov_compras_aec_ant']
let mov_bajasoventas_aec_ant = movActivosBiologicosAnt['mov_bajasoventas_aec_ant']
let mov_incrementodisminuciondevalor_aec_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_aec_ant']
let mov_reclasificacion_aec_ant = movActivosBiologicosAnt['mov_reclasificacion_aec_ant']
let mov_saldofinal_aec_ant = movActivosBiologicosAnt['mov_saldofinal_aec_ant']

let mov_saldoinicial_aep_ant = movActivosBiologicosAnt['mov_saldoinicial_aep_ant']
let mov_compras_aep_ant = movActivosBiologicosAnt['mov_compras_aep_ant']
let mov_bajasoventas_aep_ant = movActivosBiologicosAnt['mov_bajasoventas_aep_ant']
let mov_incrementodisminuciondevalor_aep_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_aep_ant']
let mov_reclasificacion_aep_ant = movActivosBiologicosAnt['mov_reclasificacion_aep_ant']
let mov_saldofinal_aep_ant = movActivosBiologicosAnt['mov_saldofinal_aep_ant']

let mov_saldoinicial_pec_ant = movActivosBiologicosAnt['mov_saldoinicial_pec_ant']
let mov_compras_pec_ant = movActivosBiologicosAnt['mov_compras_pec_ant']
let mov_bajasoventas_pec_ant = movActivosBiologicosAnt['mov_bajasoventas_pec_ant']
let mov_incrementodisminuciondevalor_pec_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_pec_ant']
let mov_reclasificacion_pec_ant = movActivosBiologicosAnt['mov_reclasificacion_pec_ant']
let mov_saldofinal_pec_ant = movActivosBiologicosAnt['mov_saldofinal_pec_ant']

let mov_saldoinicial_pep_ant = movActivosBiologicosAnt['mov_saldoinicial_pep_ant']
let mov_compras_pep_ant = movActivosBiologicosAnt['mov_compras_pep_ant']
let mov_bajasoventas_pep_ant = movActivosBiologicosAnt['mov_bajasoventas_pep_ant']
let mov_incrementodisminuciondevalor_pep_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_pep_ant']
let mov_reclasificacion_pep_ant = movActivosBiologicosAnt['mov_reclasificacion_pep_ant']
let mov_saldofinal_pep_ant = movActivosBiologicosAnt['mov_saldofinal_pep_ant']

let mov_saldoinicial_otros_ant = movActivosBiologicosAnt['mov_saldoinicial_otros_ant']
let mov_compras_otros_ant = movActivosBiologicosAnt['mov_compras_otros_ant']
let mov_bajasoventas_otros_ant = movActivosBiologicosAnt['mov_bajasoventas_otros_ant']
let mov_incrementodisminuciondevalor_otros_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_otros_ant']
let mov_reclasificacion_otros_ant = movActivosBiologicosAnt['mov_reclasificacion_otros_ant']
let mov_saldofinal_otros_ant = movActivosBiologicosAnt['mov_saldofinal_otros_ant']

let mov_saldoinicial_total_ant = movActivosBiologicosAnt['mov_saldoinicial_total_ant']
let mov_compras_total_ant = movActivosBiologicosAnt['mov_compras_total_ant']
let mov_bajasoventas_total_ant = movActivosBiologicosAnt['mov_bajasoventas_total_ant']
let mov_incrementodisminuciondevalor_total_ant = movActivosBiologicosAnt['mov_incrementodisminuciondevalor_total_ant']
let mov_reclasificacion_total_ant = movActivosBiologicosAnt['mov_reclasificacion_total_ant']
let mov_saldofinal_total_ant = movActivosBiologicosAnt['mov_saldofinal_total_ant']

let mov_animalesenccrecimiento_total_ant = movActivosBiologicosAnt['mov_animalesenccrecimiento_total_ant']
let mov_animalesenproduccion_total_ant = movActivosBiologicosAnt['mov_animalesenproduccion_total_ant']
let mov_plantasencrecimiento_total_ant = movActivosBiologicosAnt['mov_plantasencrecimiento_total_ant']
let mov_plantasenproduccion_total_ant = movActivosBiologicosAnt['mov_plantasenproduccion_total_ant']
let mov_otros_total_ant = movActivosBiologicosAnt['mov_otros_total_ant']
let mov_total_total_ant = movActivosBiologicosAnt['mov_total_total_ant']

let mov_saldofinalsegunmovimiento_ant = ref(reportStore.getReportData("movactivosbiologicos_ant", true)?.['mov_saldofinalsegunmovimiento_ant'] || "0")
let mov_diferenciaporcuadrar_ant = ref(reportStore.getReportData("movactivosbiologicos_ant", true)?.['mov_diferenciaporcuadrar_ant'] || "0")

let convertirNegativo_bajasoventas_aec = async id => {
  mov_bajasoventas_aec.value = (Number(mov_bajasoventas_aec.value) != 0 && Number(mov_bajasoventas_aec.value) > 0) ? Number(mov_bajasoventas_aec.value) * -1 : Number(mov_bajasoventas_aec.value)
}
let convertirNegativo_bajasoventas_aep = async id => {
  mov_bajasoventas_aep.value = (Number(mov_bajasoventas_aep.value) != 0 && Number(mov_bajasoventas_aep.value) > 0) ? Number(mov_bajasoventas_aep.value) * -1 : Number(mov_bajasoventas_aep.value)
}
let convertirNegativo_bajasoventas_pep = async id => {
  mov_bajasoventas_pep.value = (Number(mov_bajasoventas_pep.value) != 0 && Number(mov_bajasoventas_pep.value) > 0) ? Number(mov_bajasoventas_pep.value) * -1 : Number(mov_bajasoventas_pep.value)
}
let convertirNegativo_bajasoventas_pec = async id => {
  mov_bajasoventas_pec.value = (Number(mov_bajasoventas_pec.value) != 0 && Number(mov_bajasoventas_pec.value) > 0) ? Number(mov_bajasoventas_pec.value) * -1 : Number(mov_bajasoventas_pec.value)
}
let convertirNegativo_bajasoventas_otros = async id => {
  mov_bajasoventas_otros.value = (Number(mov_bajasoventas_otros.value) != 0 && Number(mov_bajasoventas_otros.value) > 0) ? Number(mov_bajasoventas_otros.value) * -1 : Number(mov_bajasoventas_otros.value)
}

let convertirNegativo_bajasoventas_aep_ant = async id => {
  mov_bajasoventas_aep_ant.value = (Number(mov_bajasoventas_aep_ant.value) != 0 && Number(mov_bajasoventas_aep_ant.value) > 0) ? Number(mov_bajasoventas_aep_ant.value) * -1 : Number(mov_bajasoventas_aep_ant.value)
}
let convertirNegativo_bajasoventas_pep_ant = async id => {
  mov_bajasoventas_pep_ant.value = (Number(mov_bajasoventas_pep_ant.value) != 0 && Number(mov_bajasoventas_pep_ant.value) > 0) ? Number(mov_bajasoventas_pep_ant.value) * -1 : Number(mov_bajasoventas_pep_ant.value)
}
let convertirNegativo_bajasoventas_aec_ant = async id => {
  mov_bajasoventas_aec_ant.value = (Number(mov_bajasoventas_aec_ant.value) != 0 && Number(mov_bajasoventas_aec_ant.value) > 0) ? Number(mov_bajasoventas_aec_ant.value) * -1 : Number(mov_bajasoventas_aec_ant.value)
}
let convertirNegativo_bajasoventas_pec_ant = async id => {
  mov_bajasoventas_pec_ant.value = (Number(mov_bajasoventas_pec_ant.value) != 0 && Number(mov_bajasoventas_pec_ant.value) > 0) ? Number(mov_bajasoventas_pec_ant.value) * -1 : Number(mov_bajasoventas_pec_ant.value)
}
let convertirNegativo_bajasoventas_otros_ant = async id => {
  mov_bajasoventas_otros_ant.value = (Number(mov_bajasoventas_otros_ant.value) != 0 && Number(mov_bajasoventas_otros_ant.value) != 0) ? Number(mov_bajasoventas_otros_ant.value) * -1 : Number(mov_bajasoventas_otros_ant.value)
}

const mov_saldofinalsegunesf = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10203")).toFixed(2)
})

const mov_saldofinalsegunesf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10203_ant", true)).toFixed(2)
})

const handleActionClick = async id => {
  mov_saldofinal_otros.value = (Number(mov_saldoinicial_otros.value) + Number(mov_compras_otros.value) + Number(mov_bajasoventas_otros.value) + Number(mov_incrementodisminuciondevalor_otros.value) + Number(mov_reclasificacion_otros.value)).toFixed(2)
  mov_saldofinal_pep.value = (Number(mov_saldoinicial_pep.value) + Number(mov_compras_pep.value) + Number(mov_bajasoventas_pep.value) + Number(mov_incrementodisminuciondevalor_pep.value) + Number(mov_reclasificacion_pep.value)).toFixed(2)
  mov_saldofinal_pec.value = (Number(mov_saldoinicial_pec.value) + Number(mov_compras_pec.value) + Number(mov_bajasoventas_pec.value) + Number(mov_incrementodisminuciondevalor_pec.value) + Number(mov_reclasificacion_pec.value)).toFixed(2)

  mov_saldofinal_aep.value = (Number(mov_saldoinicial_aep.value) + Number(mov_compras_aep.value) + Number(mov_bajasoventas_aep.value) + Number(mov_incrementodisminuciondevalor_aep.value) + Number(mov_reclasificacion_aep.value)).toFixed(2)
  mov_saldofinal_aec.value = (Number(mov_saldoinicial_aec.value) + Number(mov_compras_aec.value) + Number(mov_bajasoventas_aec.value) + Number(mov_incrementodisminuciondevalor_aec.value) + Number(mov_reclasificacion_aec.value)).toFixed(2)

  mov_saldoinicial_total.value = (Number(mov_saldoinicial_aec.value) + Number(mov_saldoinicial_aep.value) + Number(mov_saldoinicial_pec.value) + Number(mov_saldoinicial_pep.value) + Number(mov_saldoinicial_otros.value)).toFixed(2)
  mov_compras_total.value = (Number(mov_compras_aec.value) + Number(mov_compras_aep.value) + Number(mov_compras_pec.value) + Number(mov_compras_pep.value) + Number(mov_compras_otros.value)).toFixed(2)
  mov_bajasoventas_total.value = (Number(mov_bajasoventas_aec.value) + Number(mov_bajasoventas_aep.value) + Number(mov_bajasoventas_pec.value) + Number(mov_bajasoventas_pep.value) + Number(mov_bajasoventas_otros.value)).toFixed(2)
  mov_incrementodisminuciondevalor_total.value = (Number(mov_incrementodisminuciondevalor_aec.value) + Number(mov_incrementodisminuciondevalor_aep.value) + Number(mov_incrementodisminuciondevalor_pec.value) + Number(mov_incrementodisminuciondevalor_pep.value) + Number(mov_incrementodisminuciondevalor_otros.value)).toFixed(2)
  mov_reclasificacion_total.value = (Number(mov_reclasificacion_aec.value) + Number(mov_reclasificacion_aep.value) + Number(mov_reclasificacion_pec.value) + Number(mov_reclasificacion_pep.value) + Number(mov_reclasificacion_otros.value)).toFixed(2)
  mov_saldofinal_total.value = (Number(mov_saldoinicial_total.value) + Number(mov_compras_total.value) + Number(mov_bajasoventas_total.value) + Number(mov_incrementodisminuciondevalor_total.value) + Number(mov_reclasificacion_total.value)).toFixed(2)

  mov_saldoinicial_aec.value = Number(mov_saldofinal_aec_ant.value).toFixed(2)
  mov_saldoinicial_aep.value = Number(mov_saldofinal_aep_ant.value).toFixed(2)
  mov_saldoinicial_pec.value = Number(mov_saldofinal_pec_ant.value).toFixed(2)
  mov_saldoinicial_pep.value = Number(mov_saldofinal_pep_ant.value).toFixed(2)
  mov_saldoinicial_otros.value = Number(mov_saldofinal_otros_ant.value).toFixed(2)

  mov_saldofinalsegunmovimiento.value = Number(mov_saldofinal_total.value).toFixed(2)
  mov_diferenciaporcuadrar.value = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_ab(mov_diferenciaporcuadrar.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_ab", mov_diferenciaporcuadrar.value)

  const movactivosbiologicos = {
    mov_saldoinicial_aec: mov_saldoinicial_aec.value,
    mov_compras_aec: mov_compras_aec.value,
    mov_bajasoventas_aec: mov_bajasoventas_aec.value,
    mov_incrementodisminuciondevalor_aec: mov_incrementodisminuciondevalor_aec.value,
    mov_reclasificacion_aec: mov_reclasificacion_aec.value,
    mov_saldofinal_aec: mov_saldofinal_aec.value,

    mov_saldoinicial_aep: mov_saldoinicial_aep.value,
    mov_compras_aep: mov_compras_aep.value,
    mov_bajasoventas_aep: mov_bajasoventas_aep.value,
    mov_incrementodisminuciondevalor_aep: mov_incrementodisminuciondevalor_aep.value,
    mov_reclasificacion_aep: mov_reclasificacion_aep.value,
    mov_saldofinal_aep: mov_saldofinal_aep.value,

    mov_saldoinicial_pec: mov_saldoinicial_pec.value,
    mov_compras_pec: mov_compras_pec.value,
    mov_bajasoventas_pec: mov_bajasoventas_pec.value,
    mov_incrementodisminuciondevalor_pec: mov_incrementodisminuciondevalor_pec.value,
    mov_reclasificacion_pec: mov_reclasificacion_pec.value,
    mov_saldofinal_pec: mov_saldofinal_pec.value,

    mov_saldoinicial_pep: mov_saldoinicial_pep.value,
    mov_compras_pep: mov_compras_pep.value,
    mov_bajasoventas_pep: mov_bajasoventas_pep.value,
    mov_incrementodisminuciondevalor_pep: mov_incrementodisminuciondevalor_pep.value,
    mov_reclasificacion_pep: mov_reclasificacion_pep.value,
    mov_saldofinal_pep: mov_saldofinal_pep.value,

    mov_saldoinicial_otros: mov_saldoinicial_otros.value,
    mov_compras_otros: mov_compras_otros.value,
    mov_bajasoventas_otros: mov_bajasoventas_otros.value,
    mov_incrementodisminuciondevalor_otros: mov_incrementodisminuciondevalor_otros.value,
    mov_reclasificacion_otros: mov_reclasificacion_otros.value,
    mov_saldofinal_otros: mov_saldofinal_otros.value,

    mov_saldoinicial_total: mov_saldoinicial_total.value,
    mov_compras_total: mov_compras_total.value,
    mov_bajasoventas_total: mov_bajasoventas_total.value,
    mov_incrementodisminuciondevalor_total: mov_incrementodisminuciondevalor_total.value,
    mov_reclasificacion_total: mov_reclasificacion_total.value,
    mov_saldofinal_total: mov_saldofinal_total.value,

    mov_saldofinalsegunmovimiento: mov_saldofinalsegunmovimiento.value,
    mov_saldofinalsegunesf: mov_saldofinalsegunesf.value,
    mov_diferenciaporcuadrar: mov_diferenciaporcuadrar.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    movactivosbiologicos: movactivosbiologicos,
  })
}

const handleActionClick_ant = async id => {
  mov_saldofinal_otros_ant.value = (Number(mov_saldoinicial_otros_ant.value) + Number(mov_compras_otros_ant.value) + Number(mov_bajasoventas_otros_ant.value) + Number(mov_incrementodisminuciondevalor_otros_ant.value) + Number(mov_reclasificacion_otros_ant.value)).toFixed(2)
  mov_saldofinal_pep_ant.value = (Number(mov_saldoinicial_pep_ant.value) + Number(mov_compras_pep_ant.value) + Number(mov_bajasoventas_pep_ant.value) + Number(mov_incrementodisminuciondevalor_pep_ant.value) + Number(mov_reclasificacion_pep_ant.value)).toFixed(2)
  mov_saldofinal_pec_ant.value = (Number(mov_saldoinicial_pec_ant.value) + Number(mov_compras_pec_ant.value) + Number(mov_bajasoventas_pec_ant.value) + Number(mov_incrementodisminuciondevalor_pec_ant.value) + Number(mov_reclasificacion_pec_ant.value)).toFixed(2)
  mov_saldofinal_aep_ant.value = (Number(mov_saldoinicial_aep_ant.value) + Number(mov_compras_aep_ant.value) + Number(mov_bajasoventas_aep_ant.value) + Number(mov_incrementodisminuciondevalor_aep_ant.value) + Number(mov_reclasificacion_aep_ant.value)).toFixed(2)
  mov_saldofinal_aec_ant.value = (Number(mov_saldoinicial_aec_ant.value) + Number(mov_compras_aec_ant.value) + Number(mov_bajasoventas_aec_ant.value) + Number(mov_incrementodisminuciondevalor_aec_ant.value) + Number(mov_reclasificacion_aec_ant.value)).toFixed(2)

  mov_saldoinicial_total_ant.value = (Number(mov_saldoinicial_aec_ant.value) + Number(mov_saldoinicial_aep_ant.value) + Number(mov_saldoinicial_pec_ant.value) + Number(mov_saldoinicial_pep_ant.value) + Number(mov_saldoinicial_otros_ant.value)).toFixed(2)
  mov_compras_total_ant.value = (Number(mov_compras_aec_ant.value) + Number(mov_compras_aep_ant.value) + Number(mov_compras_pec_ant.value) + Number(mov_compras_pep_ant.value) + Number(mov_compras_otros_ant.value)).toFixed(2)
  mov_bajasoventas_total_ant.value = (Number(mov_bajasoventas_aec_ant.value) + Number(mov_bajasoventas_aep_ant.value) + Number(mov_bajasoventas_pec_ant.value) + Number(mov_bajasoventas_pep_ant.value) + Number(mov_bajasoventas_otros_ant.value)).toFixed(2)
  mov_incrementodisminuciondevalor_total_ant.value = (Number(mov_incrementodisminuciondevalor_aec_ant.value) + Number(mov_incrementodisminuciondevalor_aep_ant.value) + Number(mov_incrementodisminuciondevalor_pec_ant.value) + Number(mov_incrementodisminuciondevalor_pep_ant.value) + Number(mov_incrementodisminuciondevalor_otros_ant.value)).toFixed(2)
  mov_reclasificacion_total_ant.value = (Number(mov_reclasificacion_aec_ant.value) + Number(mov_reclasificacion_aep_ant.value) + Number(mov_reclasificacion_pec_ant.value) + Number(mov_reclasificacion_pep_ant.value) + Number(mov_reclasificacion_otros_ant.value)).toFixed(2)
  mov_saldofinal_total_ant.value = (Number(mov_saldoinicial_total_ant.value) + Number(mov_compras_total_ant.value) + Number(mov_bajasoventas_total_ant.value) + Number(mov_incrementodisminuciondevalor_total_ant.value) + Number(mov_reclasificacion_total_ant.value)).toFixed(2)

  mov_saldofinalsegunmovimiento_ant.value = Number(mov_saldofinal_total_ant.value).toFixed(2)
  mov_diferenciaporcuadrar_ant.value = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value)).toFixed(2)

  reportStore.updateDiferenciaporcuadrar_abAnt(mov_diferenciaporcuadrar_ant.value)
  reportStore.saveToLocalStorage("diferenciaporcuadrar_ab_ant", mov_diferenciaporcuadrar_ant.value)

  const movactivosbiologicos_ant = {
    mov_saldoinicial_aec_ant: mov_saldoinicial_aec_ant.value,
    mov_compras_aec_ant: mov_compras_aec_ant.value,
    mov_bajasoventas_aec_ant: mov_bajasoventas_aec_ant.value,
    mov_incrementodisminuciondevalor_aec_ant: mov_incrementodisminuciondevalor_aec_ant.value,
    mov_reclasificacion_aec_ant: mov_reclasificacion_aec_ant.value,
    mov_saldofinal_aec_ant: mov_saldofinal_aec_ant.value,

    mov_saldoinicial_aep_ant: mov_saldoinicial_aep_ant.value,
    mov_compras_aep_ant: mov_compras_aep_ant.value,
    mov_bajasoventas_aep_ant: mov_bajasoventas_aep_ant.value,
    mov_incrementodisminuciondevalor_aep_ant: mov_incrementodisminuciondevalor_aep_ant.value,
    mov_reclasificacion_aep_ant: mov_reclasificacion_aep_ant.value,
    mov_saldofinal_aep_ant: mov_saldofinal_aep_ant.value,

    mov_saldoinicial_pec_ant: mov_saldoinicial_pec_ant.value,
    mov_compras_pec_ant: mov_compras_pec_ant.value,
    mov_bajasoventas_pec_ant: mov_bajasoventas_pec_ant.value,
    mov_incrementodisminuciondevalor_pec_ant: mov_incrementodisminuciondevalor_pec_ant.value,
    mov_reclasificacion_pec_ant: mov_reclasificacion_pec_ant.value,
    mov_saldofinal_pec_ant: mov_saldofinal_pec_ant.value,

    mov_saldoinicial_pep_ant: mov_saldoinicial_pep_ant.value,
    mov_compras_pep_ant: mov_compras_pep_ant.value,
    mov_bajasoventas_pep_ant: mov_bajasoventas_pep_ant.value,
    mov_incrementodisminuciondevalor_pep_ant: mov_incrementodisminuciondevalor_pep_ant.value,
    mov_reclasificacion_pep_ant: mov_reclasificacion_pep_ant.value,
    mov_saldofinal_pep_ant: mov_saldofinal_pep_ant.value,

    mov_saldoinicial_otros_ant: mov_saldoinicial_otros_ant.value,
    mov_compras_otros_ant: mov_compras_otros_ant.value,
    mov_bajasoventas_otros_ant: mov_bajasoventas_otros_ant.value,
    mov_incrementodisminuciondevalor_otros_ant: mov_incrementodisminuciondevalor_otros_ant.value,
    mov_reclasificacion_otros_ant: mov_reclasificacion_otros_ant.value,
    mov_saldofinal_otros_ant: mov_saldofinal_otros_ant.value,

    mov_saldoinicial_total_ant: mov_saldoinicial_total_ant.value,
    mov_compras_total_ant: mov_compras_total_ant.value,
    mov_bajasoventas_total_ant: mov_bajasoventas_total_ant.value,
    mov_incrementodisminuciondevalor_total_ant: mov_incrementodisminuciondevalor_total_ant.value,
    mov_reclasificacion_total_ant: mov_reclasificacion_total_ant.value,
    mov_saldofinal_total_ant: mov_saldofinal_total_ant.value,

    mov_saldofinalsegunmovimiento_ant: mov_saldofinalsegunmovimiento_ant.value,
    mov_saldofinalsegunesf_ant: mov_saldofinalsegunesf_ant.value,
    mov_diferenciaporcuadrar_ant: mov_diferenciaporcuadrar_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    movactivosbiologicos_ant: movactivosbiologicos_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
onUnmounted(() => handleActionClick(1))
onUnmounted(() => handleActionClick_ant(1))
</script>

<template>
  <VCard
    id="invoice-list"
  >
    <VRow
      style="width:100%;"
      class="mb-5 mt-lg-10"
    >
      <VCol
        cols="12"
        md="12"
      >
        <VCardTitle>PERIODO ANTERIOR</VCardTitle>
      </VCol>
    </VRow>

    <!-- SECTION Table -->
    <VTable class="">
      <!-- 👉 Table head -->
      <thead>
      <tr>
        <th style="width:600px !important;">CONCEPTO</th>
        <th className="center;" style="width : 800px !important;">
          <div style="width:100%;text-align: center;">(+) ANIMALES EN CRECIMIENTO <br/></div>
        </th>
        <th style="width : 800px !important;">
          <div style="width:100%;text-align: center;">(-) ANIMALES EN PRODUCCION</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+) PLANTAS EN CRECIMIENTO</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(-) PLANTAS EN PRODUCCIÓN</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+/-) OTROS</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+/-) TOTAL</div>
        </th>
      </tr>
      </thead>


      <tbody>
      <tr style="height: 3.75rem;">
        <td>(+) SALDO INICIAL</td>

        <td>
          <VTextField label="si_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_aec_ant"/>
        </td>

        <td>
          <VTextField label="si_aep" type="number" id="mov_compras_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_aep_ant"/>
        </td>

        <td>
          <VTextField label="si_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_pec_ant"/>
        </td>

        <td>
          <VTextField label="si_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_pep_ant"/>
        </td>

        <td>
          <VTextField label="si_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_otros_ant"/>
        </td>

        <td>
          <VTextField label="si_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_saldoinicial_total_ant" disabled />
        </td>
      </tr>

      <tr style="height: 3.75rem;">
        <td>(+) COMPRAS</td>

        <td>
          <VTextField label="compras_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_aec_ant"/>
        </td>

        <td>
          <VTextField label="compras_aep" type="number" id="mov_compras_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_aep_ant"/>
        </td>

        <td>
          <VTextField label="compras_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_pec_ant"/>
        </td>

        <td>
          <VTextField label="compras_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_pep_ant"/>
        </td>

        <td>
          <VTextField label="compras_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_otros_ant"/>
        </td>

        <td>
          <VTextField label="compras_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_compras_total_ant" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(-) BAJAS O VENTAS</td>

        <td>
          <VTextField label="bajas_aec" type="number" id="mov_saldoinicial_aec" @blur="convertirNegativo_bajasoventas_aec_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_aec_ant"/>
        </td>

        <td>
          <VTextField label="bajas_aep" type="number" id="mov_compras_aec" @blur="convertirNegativo_bajasoventas_aep_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_aep_ant"/>
        </td>

        <td>
          <VTextField label="bajas_pec" type="number" id="mov_bajasoventas_aec" @blur="convertirNegativo_bajasoventas_pec_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_pec_ant"/>
        </td>

        <td>
          <VTextField label="bajas_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="convertirNegativo_bajasoventas_pep_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_pep_ant"/>
        </td>

        <td>
          <VTextField label="bajas_otros" type="number" id="mov_reclasificacion_aec" @blur="convertirNegativo_bajasoventas_otros_ant(this); handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_otros_ant"/>
        </td>

        <td>
          <VTextField label="bajas_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_bajasoventas_total_ant" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(+/-) INCREMENTO O DISMINUCIÓN DEL VALOR RAZONABLE</td>

        <td>
          <VTextField label="increment_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_aec_ant"/>
        </td>

        <td>
          <VTextField label="increment_aep" type="number" id="mov_compras_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_aep_ant"/>
        </td>

        <td>
          <VTextField label="increment_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_pec_ant"/>
        </td>

        <td>
          <VTextField label="increment_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_pep_ant"/>
        </td>

        <td>
          <VTextField label="increment_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_otros_ant"/>
        </td>

        <td>
          <VTextField label="increment_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_incrementodisminuciondevalor_total_ant" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(+/-) RECLASIFICACIÓN</td>

        <td>
          <VTextField label="reclas_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_aec_ant"/>
        </td>

        <td>
          <VTextField label="reclas_aep" type="number" id="mov_compras_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_aep_ant"/>
        </td>

        <td>
          <VTextField label="reclas_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_pec_ant"/>
        </td>

        <td>
          <VTextField label="reclas_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_pep_ant"/>
        </td>

        <td>
          <VTextField label="reclas_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_otros_ant"/>
        </td>

        <td>
          <VTextField label="reclas_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick_ant(this)" @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" v-model="mov_reclasificacion_total_ant" disabled />
        </td>

      </tr>


      <tr style="height: 3.75rem;">
        <td>SALDO FINAL</td>

        <td>
          <VTextField label="sf_aec" type="number" id="mov_animalesenccrecimiento_total" v-model="mov_saldofinal_aec_ant" disabled />
        </td>

        <td>
          <VTextField label="sf_aep" type="number" id="mov_animalesenproduccion_total" v-model="mov_saldofinal_aep_ant" disabled />
        </td>

        <td>
          <VTextField label="sf_pec" type="number" id="mov_plantasencrecimiento_total" v-model="mov_saldofinal_pec_ant" disabled />
        </td>

        <td>
          <VTextField label="sf_pep" type="number" id="mov_plantasenproduccion_total" v-model="mov_saldofinal_pep_ant" disabled />
        </td>

        <td>
          <VTextField label="sf_otros" type="number" id="mov_otros_total" v-model="mov_saldofinal_otros_ant" disabled />
        </td>

        <td>
          <VTextField label="sf_total" type="number" id="mov_total_total" v-model="mov_saldofinal_total_ant" disabled />
        </td>

      </tr>

      </tbody>
    </VTable>
    <!-- !SECTION -->

    <VRow
      style="width:100%;"
      class="mb-5"
    >
      <VCol
        cols="12"
        md="12"
      >
        <VCardTitle>PERIODO ACTUAL</VCardTitle>
      </VCol>
    </VRow>

    <!-- SECTION Table -->
    <VTable class="">
      <!-- 👉 Table head -->
      <thead>
      <tr>
        <th style="width:600px !important;">CONCEPTO</th>
        <th className="center;" style="width : 800px !important;">
          <div style="width:100%;text-align: center;">(+) ANIMALES EN CRECIMIENTO <br/></div>
        </th>
        <th style="width : 800px !important;">
          <div style="width:100%;text-align: center;">(-) ANIMALES EN PRODUCCION</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+) PLANTAS EN CRECIMIENTO</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(-) PLANTAS EN PRODUCCIÓN</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+/-) OTROS</div>
        </th>
        <th style="width : 600px !important;">
          <div style="width:100%;text-align: center;">(+/-) TOTAL</div>
        </th>
      </tr>
      </thead>


      <tbody>
      <tr style="height: 3.75rem;">
        <td>(+) SALDO INICIAL</td>

        <td>
          <VTextField label="si_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_aec" disabled />
        </td>

        <td>
          <VTextField label="si_aep" type="number" id="mov_compras_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_aep" disabled />
        </td>

        <td>
          <VTextField label="si_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_pec" disabled />
        </td>

        <td>
          <VTextField label="si_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_pep" disabled />
        </td>

        <td>
          <VTextField label="si_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_otros" disabled />
        </td>

        <td>
          <VTextField label="si_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldoinicial_total" disabled />
        </td>
      </tr>

      <tr style="height: 3.75rem;">
        <td>(+) COMPRAS</td>

        <td>
          <VTextField label="compras_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_aec"/>
        </td>

        <td>
          <VTextField label="compras_aep" type="number" id="mov_compras_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_aep"/>
        </td>

        <td>
          <VTextField label="compras_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_pec"/>
        </td>

        <td>
          <VTextField label="compras_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_pep"/>
        </td>

        <td>
          <VTextField label="compras_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_otros"/>
        </td>

        <td>
          <VTextField label="compras_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_compras_total" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(-) BAJAS O VENTAS</td>

        <td>
          <VTextField label="bajas_aec" type="number" id="mov_saldoinicial_aec" @blur="convertirNegativo_bajasoventas_aec(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_aec"/>
        </td>

        <td>
          <VTextField label="bajas_aep" type="number" id="mov_compras_aec" @blur="convertirNegativo_bajasoventas_aep(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_aep"/>
        </td>

        <td>
          <VTextField label="bajas_pec" type="number" id="mov_bajasoventas_aec" @blur="convertirNegativo_bajasoventas_pec(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_pec"/>
        </td>

        <td>
          <VTextField label="bajas_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="convertirNegativo_bajasoventas_pep(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_pep"/>
        </td>

        <td>
          <VTextField label="bajas_otros" type="number" id="mov_reclasificacion_aec" @blur="convertirNegativo_bajasoventas_otros(this); handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_otros"/>
        </td>

        <td>
          <VTextField label="bajas_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_bajasoventas_total" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(+/-) INCREMENTO O DISMINUCIÓN DEL VALOR RAZONABLE</td>

        <td>
          <VTextField label="increment_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_aec"/>
        </td>

        <td>
          <VTextField label="increment_aep" type="number" id="mov_compras_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_aep"/>
        </td>

        <td>
          <VTextField label="increment_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_pec"/>
        </td>

        <td>
          <VTextField label="increment_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_pep"/>
        </td>

        <td>
          <VTextField label="increment_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_otros"/>
        </td>

        <td>
          <VTextField label="increment_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_incrementodisminuciondevalor_total" disabled />
        </td>

      </tr>

      <tr style="height: 3.75rem;">
        <td>(+/-) RECLASIFICACIÓN</td>

        <td>
          <VTextField label="reclas_aec" type="number" id="mov_saldoinicial_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_aec"/>
        </td>

        <td>
          <VTextField label="reclas_aep" type="number" id="mov_compras_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_aep"/>
        </td>

        <td>
          <VTextField label="reclas_pec" type="number" id="mov_bajasoventas_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_pec"/>
        </td>

        <td>
          <VTextField label="reclas_pep" type="number" id="mov_incrementodisminuciondevalor_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_pep"/>
        </td>

        <td>
          <VTextField label="reclas_otros" type="number" id="mov_reclasificacion_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_otros"/>
        </td>

        <td>
          <VTextField label="reclas_total" type="number" id="mov_saldofinal_aec" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_reclasificacion_total" disabled />
        </td>

      </tr>


      <tr style="height: 3.75rem;">
        <td>SALDO FINAL</td>

        <td>
          <VTextField label="sf_aec" type="number" id="mov_animalesenccrecimiento_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_aec" disabled />
        </td>

        <td>
          <VTextField label="sf_aep" type="number" id="mov_animalesenproduccion_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_aep" disabled />
        </td>

        <td>
          <VTextField label="sf_pec" type="number" id="mov_plantasencrecimiento_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_pec" disabled />
        </td>

        <td>
          <VTextField label="sf_pep" type="number" id="mov_plantasenproduccion_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_pep" disabled />
        </td>

        <td>
          <VTextField label="sf_otros" type="number" id="mov_otros_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_otros" disabled />
        </td>

        <td>
          <VTextField label="sf_total" type="number" id="mov_total_total" @blur="handleActionClick(this)" @input="handleActionClick(this)" @keyup="handleActionClick(this)" v-model="mov_saldofinal_total" disabled />
        </td>

      </tr>

      </tbody>
    </VTable>
    <!-- !SECTION -->

    <VDivider class="mt-10 mb-10"></VDivider>

    <VRow
      style="width:100%;"
      class="mb-5 mt-lg-10"
    >
      <VCol
        cols="1"
        md="1"
      ></VCol>
      <VCol
        cols="10"
        md="10"
      >
        <!-- SECTION Table -->
        <VTable class="mt-10">
          <!-- 👉 Table head -->
          <thead>
          <tr>
            <th style="width:600px !important;">CONCEPTO</th>
            <th className="center;" style="width : 800px !important;">
              <div style="width:100%;text-align: center;">PERIODO ACTUAL</div>
            </th>
            <th style="width : 800px !important;">
              <div style="width:100%;text-align: center;">PERIODO ANTERIOR</div>
            </th>
          </tr>
          </thead>


          <tbody>
          <tr style="height: 3.75rem;">
            <td>(-) SALDO FINAL SEGÚN MOVIMIENTO</td>

            <td>
              <VTextField label="saldo final según mov actual" type="number" id="mov_saldoinicial_pec" v-model="mov_saldofinalsegunmovimiento" disabled />
            </td>

            <td>
              <VTextField label="saldo final según mov anterior" type="number" id="mov_compras_pec" v-model="mov_saldofinalsegunmovimiento_ant" disabled />
            </td>

          </tr>

          <tr style="height: 3.75rem;">
            <td>SALDO FINAL SEGÚN ESF</td>

            <td>
              <VTextField label="saldo final según esf actual" type="number" id="mov_saldoinicial_otros" v-model="mov_saldofinalsegunesf" disabled />
            </td>

            <td>
              <VTextField label="saldo final según esf anterior" type="number" id="mov_compras_otros" v-model="mov_saldofinalsegunesf_ant" disabled />
            </td>

          </tr>

          <tr style="height: 3.75rem;">
            <td>DIFERENCIA POR CUADRAR</td>

            <td>
              <VTextField label="diferencia por cuadrar actual" type="number" id="mov_saldoinicial_total" v-model="mov_diferenciaporcuadrar" disabled />
            </td>

            <td>
              <VTextField label="diferencia por cuadrar anterior" type="number" id="mov_compras_total" v-model="mov_diferenciaporcuadrar_ant" disabled />
            </td>

          </tr>

          </tbody>
        </VTable>
        <!-- !SECTION -->
      </VCol>
      <VCol
        cols="1"
        md="1"
      ></VCol>
    </VRow>


  </VCard>
</template>

<style lang="scss">
</style>
