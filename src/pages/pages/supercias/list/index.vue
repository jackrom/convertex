<script setup>
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"
import { ref, watchEffect, computed } from 'vue'
import ConfirmDialogReporte from "@core/components/ConfirmDialogReporte.vue"
import { useReportStore } from "@/@store/reportStore"
import { borrarDataDeOtrosPeriodos } from "@core/utils/formatters"
import { descargarPDF, descargarExcel, generarEsfTxt, generarEriTxt, generarEfeTxt, generarEcpTxt } from "@core/utils/Export2Excel"

const reportStore = useReportStore()

import { saveAs } from 'file-saver'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Footer,
  Header,
  AlignmentType,
  UnderlineType,
  PageNumber,
  NumberFormat, TableOfContents, StyleLevel,
} from 'docx'
import {
  activosfinancierosTN,
  buscarValoresEnCuentas,
  crearTabla,
  efectivoyequivalentedeefectivo,
  perdAcumCuentasIncobrablesAndDeterioroTN,
  perdAcumValorNetoRealizAndOtrasPerdEnInvTN,
  activosPorImpuestosCorrientesTN,
  activosCorrientesMantVentaAndOperDiscontinuasTN,
  construccionesEnProcesoTN,
  otrosActivosCorrientesTN,
  propiedadesPlantasAndEquiposTN,
  propiedadesDeInversionTN,
  activosBiologicosTN,
  activoIntagibleTN,
  activosPorImpuestosDiferidosTN,
  activosFinancierosNoCorrientesTN,
  derechosDeUsoPorAccionesArrendadosTN,
  otrosActivosNoCorrientesTN,
  docAndCuentasPorCobrarNoRelTN,
  docAndCuentasPorCobrarRelTN,
  pasivosFinancierToValorRazonableTN,
  pasivosPorContratosDeArrendamientoTN,
  cuentasAndDocumentosPorPagarTN,
  obligacionesConInstitucionesFinancierasTN,
  provisionesTN,
  porcionCorrienteValoresEmitidosTN,
  otrasObligacionesCorrientesTN,
  cuentasPorPagarRelacionadasTN,
  otrosPasivosFinancierosTN,
  anticiposTN,
  pasivosDirectamenteAsociadosConActivosNoCorrientesTN,
  porcionCorrienteDeProvisionesConActivosNoCorrientesTN,
  otrosPasivosCorrientesTN,
  pasivosFinancierosAlCostoAmortizadoTN,
  pasivosPorContratosDeArrendamientoEnPasNoCorrTN,
  otrosPassivosNoCorrientesEnPasNoCorrTN,
  cuentasAndDocumetosPorPagarTN,
  obligacionesConInstitucionesFinancierasEnPasNoCorrTN,
  cuentasPorPagarToRelacionadasEnPasNoCorrTN,
  porcionNoCorrienteValoresEmitidosEnPasNoCorrTN,
  anticiposEnPasNoCorrTN,
  provisionesPorBeneficiosToEmpleadosEnPasNoCorrTN,
  otrasProvisionesEnPasNoCorrTN,
  pasivosDifeidosEnPasNoCorrTN,
  capitalTN,
  aportesDeSociosOrAccionistasTN,
  primaPorEmisionPrimariaDeAccionesTN,
  reservasTN,
  otrosResultadosIntegralesTN,
  resultadosAcumuladosTN,
  resultadosDelEjecicioTN,
  crearTablaPropiedadesPlantasEquiposTN,
  crearTablaPerdAcumValorNetRealizOtrasPerdInvTN,
  crearTablaPropiedadesPlantasEquiposAntTN,
  crearTablaPerdAcumCuentasIncobrablesDeterioroTN,
  crearTablaIntangiblesTN,
  crearTablaImpuestosDiferidosActivosTN,
  crearTablaImpuestosDiferidosPasivosTN,
  crearTablapropiedadesDeInversionActualTN,
  crearTablapropiedadesDeInversionAnteriorTN,
  crearTablaJubilacionPatronalTN,
  crearTablaDesahucioTN,
  crearTablaActivosFinancierosLargoPlazoTN,
  crearTablaOtrosISLRTN,
  crearTablaOtrosParticipacionTrabajadoresTN,
  crearTablaOtrosDividendosTN,
  crearTablaActivosBiologicosActualTN,
  crearTablaActivosBiologicosAnteriorTN,
  ingresoDeActividadesOrdinariasTN,
  otrosIngresoTN,
  costosDeVentasProduccionTN,
  gastosDeVentasTN, gastosAdministrativosTN, gastosFinancierosTN, otrosGastosTN, buscarValoresEnCuentasEri,
} from "@core/utils/turboNotas"

const defaultFont = {
  name: "Arial",
  family: 2,
}

const router = useRouter()
const route = useRoute()

const reporteSuperciasListStore = useSuperciasListStore()
const periodoListStore = usePeriodoListStore()
const empresaListStore = useEmpresaListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalReporteSupercias = ref(0)
const totalPeriodos = ref(0)
const totalEmpresas = ref(0)
const reportes = ref([])
const empresas = ref([])
const periodos = ref([])
const loadings = ref([])
const counter = ref([])
const indice = ref([])
const loadingsXls = ref([])
const loadingsPdf = ref([])
const loadingsTxt = ref([])
const loadingsTurboNotas = ref([])
const loadingsInformeSocietario = ref([])

let message = ref(false)
let messageText = ref('')

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
    empresas.value = response.data.empresas
    totalPage.value = response.data.totalPage
    totalEmpresas.value = response.data.totalEmpresas
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresas)

const fetchPeriodos = () => {
  periodoListStore.fetchPeriodos({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: 'txtsupercias',
  }).then(response => {
    periodos.value = response.data.periodos
    totalPage.value = response.data.totalPage
    totalPeriodos.value = response.data.totalPeriodos
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchPeriodos)

const fetchReportesSupercias = () => {
  reporteSuperciasListStore.fetchReportesIfluc({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: 'txtsupercias',
  }).then(response => {
    reportes.value = response.data.reportes
    totalPage.value = 1
    totalReporteSupercias.value = response.data.reportes.length
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchReportesSupercias)

watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

const paginationData = computed(() => {
  const firstIndex = reportes.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = reportes.value.length + (currentPage.value - 1) * rowPerPage.value

  return `Mostrando ${ firstIndex } a ${ lastIndex } de ${ totalReporteSupercias.value } registros`
})

const buscarReporte = async reporte => {
  message.value = true
  messageText.value = "Buscando y Cargando reporte solicitado"

  await Promise.all([
    reporteSuperciasListStore.fetchReporteIflucActual(reporte),
    reporteSuperciasListStore.fetchReporteIflucAnterior(reporte),
  ])
  messageText.value = "Carga de reporte completada"
  await router.replace('/pages/supercias/txt')
}

const cargarReporteSeleccionado = async reporte => {
  await Promise.all([
    reporteSuperciasListStore.fetchReporteIflucActual(reporte),
    reporteSuperciasListStore.fetchReporteIflucAnterior(reporte),
  ])
}

const downloadReporteXls = async (rep, index) => {
  try {
    loadingsXls.value[index] = true
    indice.value[index] = 60
    counter.value[index] = setInterval(() => {
      indice.value[index] --
    }, 1000)
    borrarDatosOtrosPeriodos()

    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
    ])

    const activos = reportStore.getReportData('activoscorrientesifluc')
    if (activos) {
      await descargarExcel()
    } else {
      console.error('No se encontraron datos de activoscorrientes.')
    }
  } catch (error) {
    console.error('Error al descargar el reporte Excel:', error)
  } finally {
    loadingsXls.value[index] = false
    clearInterval(counter.value[index])
  }
}

const htmlToDocxParagraphs = html => {
  const paragraphs = []

  if (html.includes('<p>') || html.includes('<ul>')) {
    const regex = /<p>[\s\S]*?<\/p>|<ul>[\s\S]*?<\/ul>/g
    const matches = html.match(regex) || []

    matches.forEach(match => {
      if (match.startsWith('<p>')) {
        const content = match.replace(/<\/?p>/g, '').trim()
        const textRuns = content.split('\n').map(line => new TextRun({ text: line, break: 1 }))

        paragraphs.push(new Paragraph({
          children: textRuns,
          spacing: {
            line: 276,
          },
        }))
      } else if (match.startsWith('<ul>')) {
        // Procesar como lista
        const items = match.match(/<li>[\s\S]*?<\/li>/g) || []

        items.forEach(item => {
          const content = item.replace(/<\/?li>/g, '').trim()
          const textRun = new TextRun({ text: content, break: 1 })

          paragraphs.push(new Paragraph({
            children: [textRun],
            spacing: {
              line: 276,
            },
          }))
        })
      }
    })
  } else {
    const textRun = new TextRun({ text: html.replace(/<br>/g, '').replace(/&nbsp;/g, ' '), break: 1 })

    paragraphs.push(new Paragraph({
      children: [textRun],
      spacing: {
        line: 276,
      },
    }))
  }

  return paragraphs
}

const processHtmlContent = htmlString => {
  console.log('htmlString: ', htmlString)

  const paragraphs = []
  if (htmlString) {
    if (htmlString.includes('<p>') || htmlString.includes('<ul>')) {
      const regex = /<p>[\s\S]*?<\/p>|<ul>[\s\S]*?<\/ul>/g
      const matches = htmlString.match(regex) || []

      matches.forEach(match => {
        if (match.startsWith('<p>')) {
          const content = match.replace(/<\/?p>/g, '').trim()

          paragraphs.push(new Paragraph({ children: [new TextRun(content)] }))
        } else if (match.startsWith('<ul>')) {
          const items = match.match(/<li>[\s\S]*?<\/li>/g) || []

          items.forEach(item => {
            const content = item.replace(/<\/?li>/g, '').trim()

            paragraphs.push(new Paragraph({ children: [new TextRun(content)] }))
          })
        }
      })
    } else {
      paragraphs.push(new Paragraph({ children: [new TextRun(htmlString)] }))
    }
  }

  return paragraphs
}

const generateEntityInfoParagraphs = (entityInfo, composition) => {
  const paragraphs = []

  for (const [key, value] of Object.entries(entityInfo)) {
    paragraphs.push(new Paragraph({
      children: [new TextRun({ text: key, bold: true })],
    }))

    const contentParagraphs = processHtmlContent(value)

    paragraphs.push(...contentParagraphs)

    paragraphs.push(new Paragraph({
      text: " ",
      spacing: {
        line: 360,
      },
    }))
  }

  paragraphs.push(new Paragraph({
    text: "Composición empresarial",
    bold: true,
  }))

  composition.forEach(item => {
    paragraphs.push(new Paragraph({
      children: [
        new TextRun({ text: item.nombre + ": ", bold: true }),
        new TextRun(item.participacion + "%"),
      ],
    }))

    paragraphs.push(new Paragraph({
      text: " ",
      spacing: {
        line: 360,
      },
    }))
  })

  return paragraphs
}

const downloadReporteTurboNotas = async (rep, index) => {
  console.log('id', rep['reporteId'])

  const reportStore = useReportStore()

  loadingsTurboNotas.value[index] = true
  indice.value[index] = 60
  counter.value[index] = setInterval(() => {
    indice.value[index] --
  }, 1000)

  await cargarReporteSeleccionado(rep)

  const reporte = await reportStore.reportData
  const reporte_ant = await reportStore.reportDataAnt

  // Usando el método getReportData para datos actuales
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")
  const pasivoscorrientes = reportStore.getReportData("pasivoscorrientesifluc")
  const pasivosnocorrientes = reportStore.getReportData("pasivosnocorrientesifluc")
  const patrimonio = reportStore.getReportData("patrimonioifluc")
  const ingresos = reportStore.getReportData("ingresosifluc")
  const otrosingresos = reportStore.getReportData("otroingresosifluc")
  const costos = reportStore.getReportData("costosifluc")
  const gastosdeventas = reportStore.getReportData("gastosdeventasifluc")
  const gastosadministrativos = reportStore.getReportData("gastosadministrativosifluc")
  const gastosfinancieros = reportStore.getReportData("gastosfinancierosifluc")
  const otrosgastos = reportStore.getReportData("otrosgastosifluc")

// Usando el método getReportData para datos anteriores
  const activoscorrientes_ant = reportStore.getReportData("activoscorrientesifluc_ant", true)
  const activosnocorrientes_ant = reportStore.getReportData("activosnocorrientesifluc_ant", true)
  const pasivoscorrientes_ant = reportStore.getReportData("pasivoscorrientesifluc_ant", true)
  const pasivosnocorrientes_ant = reportStore.getReportData("pasivosnocorrientesifluc_ant", true)
  const patrimonio_ant = reportStore.getReportData("patrimonioifluc_ant", true)
  const ingresos_ant = reportStore.getReportData("ingresosifluc_ant", true)
  const otrosingresos_ant = reportStore.getReportData("otroingresosifluc_ant", true)
  const costos_ant = reportStore.getReportData("costosifluc_ant", true)
  const gastosdeventas_ant = reportStore.getReportData("gastosdeventasifluc_ant", true)
  const gastosadministrativos_ant = reportStore.getReportData("gastosadministrativosifluc_ant", true)
  const gastosfinancieros_ant = reportStore.getReportData("gastosfinancierosifluc_ant", true)
  const otrosgastos_ant = reportStore.getReportData("otrosgastosifluc_ant", true)

  /************** ACTIVOS CORRIENTES **************/
  const efectivo = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, efectivoyequivalentedeefectivo())
  const tablaEfectivo = crearTabla(efectivo)

  console.log('tablaEfectivo: ', tablaEfectivo)

  const activosfinancieros = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant,  activosfinancierosTN())
  const tablaActivosfinancieros = crearTabla(activosfinancieros)

  const perdAcumCuentasIncobrablesAndDeterioro = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, perdAcumCuentasIncobrablesAndDeterioroTN())
  const tablaPerdAcumCuentasIncobrablesAndDeterioro = crearTabla(perdAcumCuentasIncobrablesAndDeterioro)

  const perdAcumValorNetoRealizAndOtrasPerdEnInv = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, perdAcumValorNetoRealizAndOtrasPerdEnInvTN())
  const tablaPerdAcumValorNetoRealizAndOtrasPerdEnInv = crearTabla(perdAcumValorNetoRealizAndOtrasPerdEnInv)

  const activosPorImpuestosCorrientes = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant,activosPorImpuestosCorrientesTN())
  const tablaActivosPorImpuestosCorrientes = crearTabla(activosPorImpuestosCorrientes)

  const activosCorrientesMantVentaAndOperDiscontinuas = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, activosCorrientesMantVentaAndOperDiscontinuasTN())
  const tablaActivosCorrientesMantVentaAndOperDiscontinuas = crearTabla(activosCorrientesMantVentaAndOperDiscontinuas)

  const construccionesEnProceso = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, construccionesEnProcesoTN())
  const tablaConstruccionesEnProceso = crearTabla(construccionesEnProceso)

  const otrosActivosCorrientes = buscarValoresEnCuentas(activoscorrientes, activoscorrientes_ant, otrosActivosCorrientesTN())
  const tablaOtrosActivosCorrientes = crearTabla(otrosActivosCorrientes)

  /************** ACTIVOS NO CORRIENTES **************/
  const propiedadesPlantasAndEquipos = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, propiedadesPlantasAndEquiposTN())
  const tablaPropiedadesPlantasAndEquipos = crearTabla(propiedadesPlantasAndEquipos)

  const propiedadesDeInversion = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, propiedadesDeInversionTN())
  const tablaPropiedadesDeInversion = crearTabla(propiedadesDeInversion)

  const activosBiologicos = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, activosBiologicosTN())
  const tablaActivosBiologicos = crearTabla(activosBiologicos)

  const activoIntagible = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, activoIntagibleTN())
  const tablaActivoIntagible = crearTabla(activoIntagible)

  const activosPorImpuestosDiferidos = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, activosPorImpuestosDiferidosTN())
  const tablaActivosPorImpuestosDiferidos = crearTabla(activosPorImpuestosDiferidos)

  const activosFinancierosNoCorrientes = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, activosFinancierosNoCorrientesTN())
  const tablaActivosFinancierosNoCorrientes = crearTabla(activosFinancierosNoCorrientes)

  const derechosDeUsoPorAccionesArrendados = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, derechosDeUsoPorAccionesArrendadosTN())
  const tablaDerechosDeUsoPorAccionesArrendados = crearTabla(derechosDeUsoPorAccionesArrendados)

  const otrosActivosNoCorrientes = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, otrosActivosNoCorrientesTN())
  const tablaOtrosActivosNoCorrientes = crearTabla(otrosActivosNoCorrientes)

  const docAndCuentasPorCobrarNoRel = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, docAndCuentasPorCobrarNoRelTN())
  const tablaDocAndCuentasPorCobrarNoRel = crearTabla(docAndCuentasPorCobrarNoRel)

  const docAndCuentasPorCobrarRel = buscarValoresEnCuentas(activosnocorrientes, activosnocorrientes_ant, docAndCuentasPorCobrarRelTN())
  const tablaDocAndCuentasPorCobrarRel = crearTabla(docAndCuentasPorCobrarRel)

  /************** PASIVOS CORRIENTES **************/

  const pasivosFinancierToValorRazonable = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, pasivosFinancierToValorRazonableTN())
  const tablaPasivosFinancierToValorRazonable = crearTabla(pasivosFinancierToValorRazonable)

  const pasivosPorContratosDeArrendamiento = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, pasivosPorContratosDeArrendamientoTN())
  const tablaPasivosPorContratosDeArrendamiento = crearTabla(pasivosPorContratosDeArrendamiento)

  const cuentasAndDocumentosPorPagar = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, cuentasAndDocumentosPorPagarTN())
  const tablaCuentasAndDocumentosPorPagar = crearTabla(cuentasAndDocumentosPorPagar)

  const obligacionesConInstitucionesFinancieras = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, obligacionesConInstitucionesFinancierasTN())
  const tablaObligacionesConInstitucionesFinancieras = crearTabla(obligacionesConInstitucionesFinancieras)

  const provisiones = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, provisionesTN())
  const tablaProvisiones = crearTabla(provisiones)

  const porcionCorrienteValoresEmitidos = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, porcionCorrienteValoresEmitidosTN())
  const tablaPorcionCorrienteValoresEmitidos = crearTabla(porcionCorrienteValoresEmitidos)

  const otrasObligacionesCorrientes = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, otrasObligacionesCorrientesTN())
  const tablaOtrasObligacionesCorrientes = crearTabla(otrasObligacionesCorrientes)

  const cuentasPorPagarRelacionadas = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, cuentasPorPagarRelacionadasTN())
  const tablaCuentasPorPagarRelacionadas = crearTabla(cuentasPorPagarRelacionadas)

  const otrosPasivosFinancieros = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, otrosPasivosFinancierosTN())
  const tablaOtrosPasivosFinancieros = crearTabla(otrosPasivosFinancieros)

  const anticipos = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, anticiposTN())
  const tablaAnticipos = crearTabla(anticipos)

  const pasivosDirectamenteAsociadosConActivosNoCorrientes = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, pasivosDirectamenteAsociadosConActivosNoCorrientesTN())
  const tablaPasivosDirectamenteAsociadosConActivosNoCorrientes = crearTabla(pasivosDirectamenteAsociadosConActivosNoCorrientes)

  const porcionCorrienteDeProvisionesConActivosNoCorrientes = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, porcionCorrienteDeProvisionesConActivosNoCorrientesTN())
  const tablaPorcionCorrienteDeProvisionesConActivosNoCorrientes = crearTabla(porcionCorrienteDeProvisionesConActivosNoCorrientes)

  const otrosPasivosCorrientes = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, otrosPasivosCorrientesTN())
  const tablaOtrosPasivosCorrientes = crearTabla(otrosPasivosCorrientes)

  const pasivosFinancierosAlCostoAmortizado = buscarValoresEnCuentas(pasivoscorrientes,pasivoscorrientes_ant, pasivosFinancierosAlCostoAmortizadoTN())
  const tablaPasivosFinancierosAlCostoAmortizado = crearTabla(pasivosFinancierosAlCostoAmortizado)

  /************** PASIVOS NO CORRIENTES **************/
  const pasivosPorContratosDeArrendamientoEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant,pasivosPorContratosDeArrendamientoEnPasNoCorrTN())
  const tablaPasivosPorContratosDeArrendamientoEnPasNoCorr = crearTabla(pasivosPorContratosDeArrendamientoEnPasNoCorr)

  const otrosPassivosNoCorrientesEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, otrosPassivosNoCorrientesEnPasNoCorrTN())
  const tablaOtrosPassivosNoCorrientesEnPasNoCorr = crearTabla(otrosPassivosNoCorrientesEnPasNoCorr)

  const cuentasAndDocumetosPorPagar = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, cuentasAndDocumetosPorPagarTN())
  const tablaCuentasAndDocumetosPorPagar = crearTabla(cuentasAndDocumetosPorPagar)

  const obligacionesConInstitucionesFinancierasEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, obligacionesConInstitucionesFinancierasEnPasNoCorrTN())
  const tablaObligacionesConInstitucionesFinancierasEnPasNoCorr = crearTabla(obligacionesConInstitucionesFinancierasEnPasNoCorr)

  const cuentasPorPagarToRelacionadasEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, cuentasPorPagarToRelacionadasEnPasNoCorrTN())
  const tablaCuentasPorPagarToRelacionadasEnPasNoCorr = crearTabla(cuentasPorPagarToRelacionadasEnPasNoCorr)

  const porcionNoCorrienteValoresEmitidosEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, porcionNoCorrienteValoresEmitidosEnPasNoCorrTN())
  const tablaPorcionNoCorrienteValoresEmitidosEnPasNoCorr = crearTabla(porcionNoCorrienteValoresEmitidosEnPasNoCorr)

  const anticiposEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, anticiposEnPasNoCorrTN())
  const tablaAnticiposEnPasNoCorr = crearTabla(anticiposEnPasNoCorr)

  const provisionesPorBeneficiosToEmpleadosEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, provisionesPorBeneficiosToEmpleadosEnPasNoCorrTN())
  const tablaProvisionesPorBeneficiosToEmpleadosEnPasNoCorr = crearTabla(provisionesPorBeneficiosToEmpleadosEnPasNoCorr)

  const otrasProvisionesEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, otrasProvisionesEnPasNoCorrTN())
  const tablaOtrasProvisionesEnPasNoCorr = crearTabla(otrasProvisionesEnPasNoCorr)

  const pasivosDifeidosEnPasNoCorr = buscarValoresEnCuentas(pasivosnocorrientes,pasivosnocorrientes_ant, pasivosDifeidosEnPasNoCorrTN())
  const tablaPasivosDifeidosEnPasNoCorr = crearTabla(pasivosDifeidosEnPasNoCorr)

  /************** PATRIMONIO **************/
  const capital = buscarValoresEnCuentas(patrimonio, patrimonio_ant, capitalTN())
  const tablaCapital = crearTabla(capital)

  const aportesDeSociosOrAccionistas = buscarValoresEnCuentas(patrimonio, patrimonio_ant, aportesDeSociosOrAccionistasTN())
  const tablaAportesDeSociosOrAccionistas = crearTabla(aportesDeSociosOrAccionistas)

  const primaPorEmisionPrimariaDeAcciones = buscarValoresEnCuentas(patrimonio, patrimonio_ant, primaPorEmisionPrimariaDeAccionesTN())
  const tablaPrimaPorEmisionPrimariaDeAcciones = crearTabla(primaPorEmisionPrimariaDeAcciones)

  const reservas = buscarValoresEnCuentas(patrimonio, patrimonio_ant, reservasTN())
  const tablaReservas = crearTabla(reservas)

  const otrosResultadosIntegrales = buscarValoresEnCuentas(patrimonio, patrimonio_ant, otrosResultadosIntegralesTN())
  const tablaOtrosResultadosIntegrales = crearTabla(otrosResultadosIntegrales)

  const resultadosAcumulados = buscarValoresEnCuentas(patrimonio, patrimonio_ant, resultadosAcumuladosTN())
  const tablaResultadosAcumulados = crearTabla(resultadosAcumulados)

  const resultadosDelEjecicio = buscarValoresEnCuentas(patrimonio, patrimonio_ant, resultadosDelEjecicioTN())
  const tablaResultadosDelEjecicio = crearTabla(resultadosDelEjecicio)

  const movPropiedadesPlantasEquipos = crearTablaPropiedadesPlantasEquiposTN(reporte.movpropiedadesplantasyequipos)
  const movPropiedadesPlantasEquipos_ant = crearTablaPropiedadesPlantasEquiposAntTN(reporte_ant.movpropiedadesplantasyequipos_ant)

  /************** MOV **************/
  const movPerdAcumPerdInv = crearTablaPerdAcumValorNetRealizOtrasPerdInvTN(reporte.movperdidasacumuladasvalornetorealizacion, reporte_ant.movperdidasacumuladasvalornetorealizacion_ant)
  const movPerdAcumIncDet = crearTablaPerdAcumCuentasIncobrablesDeterioroTN(reporte.movperdidasacumuladascuentasincobrablesydeterioro, reporte_ant.movperdidasacumuladascuentasincobrablesydeterioro_ant)
  const movIntangibles = crearTablaIntangiblesTN(reporte.movintangibles, reporte_ant.movintangibles_ant)
  const movImpuestosDiferidosActivos = crearTablaImpuestosDiferidosActivosTN(reporte.movimpuestosdiferidos, reporte_ant.movimpuestosdiferidos_ant)
  const movImpuestosDiferidosPasivos = crearTablaImpuestosDiferidosPasivosTN(reporte.movimpuestosdiferidos, reporte_ant.movimpuestosdiferidos_ant)
  const movPropiedadesDeInversionActual = crearTablapropiedadesDeInversionActualTN(reporte.movpropiedadesdeinversion)
  const movPropiedadesDeInversionAnterior = crearTablapropiedadesDeInversionAnteriorTN(reporte_ant.movpropiedadesdeinversion_ant)
  const movJubilacionPatronal = crearTablaJubilacionPatronalTN(reporte.movjubilacionpatronal, reporte_ant.movjubilacionpatronal_ant)
  const movDesahucio = crearTablaDesahucioTN(reporte.deshaucio, reporte_ant.deshaucio_ant)
  const movActivosFinancierosLP = crearTablaActivosFinancierosLargoPlazoTN(reporte.activosfinancieroslargoplazo, reporte_ant.activosfinancieroslargoplazo_ant)
  const movOtros_islr = crearTablaOtrosISLRTN(reporte.otros, reporte_ant.otros_ant)
  const movOtros_pt = crearTablaOtrosParticipacionTrabajadoresTN(reporte.otros, reporte_ant.otros_ant)
  const movOtros_dividendos = crearTablaOtrosDividendosTN(reporte.otros, reporte_ant.otros_ant)

  const movActivosBiologicosActual = crearTablaActivosBiologicosActualTN(reporte.movactivosbiologicos)
  const movActivosBiologicosAnterior = crearTablaActivosBiologicosAnteriorTN(reporte_ant.movactivosbiologicos_ant)

  /************** ERI **************/
  const eriIngresos = buscarValoresEnCuentasEri(ingresos, ingresos_ant, ingresoDeActividadesOrdinariasTN())

  console.log('eriIngresos: ', eriIngresos)
  const tablaEriIngresos = crearTabla(eriIngresos)

  const eriOtrosIngresos = buscarValoresEnCuentasEri(otrosingresos, otrosingresos_ant, otrosIngresoTN())
  console.log('eriOtrosIngresos: ', eriOtrosIngresos)
  const tablaEriOtrosIngresos = crearTabla(eriOtrosIngresos)

  const eriCostos = buscarValoresEnCuentasEri(costos, costos_ant, costosDeVentasProduccionTN())
  console.log('eriCostos: ', eriCostos)
  const tablaEriCostos = crearTabla(eriCostos)

  const eriGastosDeVentas = buscarValoresEnCuentasEri(gastosdeventas, gastosdeventas_ant, gastosDeVentasTN())
  console.log('eriGastosDeVentas: ', eriGastosDeVentas)
  const tablaEriGastosDeVentas = crearTabla(eriGastosDeVentas)

  const eriGastosAdministrativos = buscarValoresEnCuentasEri(gastosadministrativos, gastosadministrativos_ant, gastosAdministrativosTN())
  console.log('eriGastosAdministrativos: ', eriGastosAdministrativos)
  const tablaEriGastosAdministrativos = crearTabla(eriGastosAdministrativos)

  const eriGastosFinancieros = buscarValoresEnCuentasEri(gastosfinancieros, gastosfinancieros_ant, gastosFinancierosTN())
  console.log('eriGastosFinancieros: ', eriGastosFinancieros)
  const tablaEriGastosFinancieros = crearTabla(eriGastosFinancieros)

  const eriOtrosGastos = buscarValoresEnCuentasEri(otrosgastos, otrosgastos_ant, otrosGastosTN())
  console.log('eriOtrosGastos: ', eriOtrosGastos)
  const tablaEriOtrosGastos = crearTabla(eriOtrosGastos)

  const datosTN = reportStore.reportData['reporteTurboNotas']
  const empresa = reportStore.reportData['empresareporteifluc']

  console.log('datosTN: ', datosTN)

  const entityInfo = {
    "Nombre de la entidad": empresa.nombre,
    "RUC de la entidad": empresa.ruc,
    "Domicilio de la entidad": datosTN.domicilio,
    "Forma legal de la entidad": datosTN.formaLegal,
    "País de incorporación": JSON.parse(datosTN.pais).title,
    "Descripción": datosTN.descripcionEmpresa,
    "Estructura organizacional y societaria": datosTN.estructuraOrganizacional,
    "Representante legal": datosTN.representanteLegal,
    "Línea de negocio": datosTN.lineanegocio,
  }

  console.log('entityInfo: ', entityInfo)

  const accionistas = JSON.parse(datosTN.accionistas)

  const doc = new Document({
    creator: "IFluc 6.0",
    title: "Notas a los Estados Financieros al 31 de Diciembre de " + datosTN.periodoactual,
    description: "Notas a los Estados Financieros",
    styles: {
      default: {
        document: {
          run: {
            font: defaultFont.name,
          },
        },
        paragraph: {
          run: {
            font: defaultFont.name,
          },
        },
        paragraphStyles: [
          {
            id: "MySpectacularStyle",
            name: "My Spectacular Style",
            basedOn: "Heading1",
            next: "Heading1",
            quickFormat: true,
            run: {
              italics: true,
              color: "990000",
            },
          },
        ],
      },
    },
    numbering: {
      config: [
        {
          reference: "my-crazy-numbering",
          levels: [
            {
              level: 0,
              format: "decimal",
              text: "%1.",
              alignment: AlignmentType.LEFT,
            },
          ],
        },
      ],
    },
    sections: [
      {
        children: [
          new Paragraph({
            text: "",
            spacing: {
              before: 6000,
              after: 0,
            },
          }),
          new Paragraph({
            text: "Notas a los Estados Financieros al 31 de Diciembre de " + datosTN.periodoactual,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 200,
            },
          }),
        ],
        properties: {
          pageBreakBefore: true,
        },
      },
      {
        children: [
          new Paragraph({
            text: "",
            spacing: {
              before: 2000,
              after: 0,
            },
          }),
          new Paragraph({
            text: "Contenido",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: {
              after: 200,
            },
          }),
          new TableOfContents("Summary", {
            hyperlink: true,
            headingStyleRange: "1-5",
            stylesWithLevels: [new StyleLevel("MySpectacularStyle", 1)],
          }),
        ],
        properties: {
          pageBreakBefore: true,
        },
      },
      {
        properties: {
          page: {
            pageNumbers: {
              start: 1,
              formatType: NumberFormat.DECIMAL,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: datosTN.nombre,
                    allCaps: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "Notas a los Estados Financieros",
                    alignment: AlignmentType.RIGHT,
                    smallCaps: true,
                  }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: "Expresado en dólares EUA",
                    alignment: AlignmentType.RIGHT,
                    smallCaps: true,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    children: [PageNumber.CURRENT],
                  }),
                  new TextRun({
                    children: [" de ", PageNumber.TOTAL_PAGES],
                  }),
                ],
              }),
            ],
          }),
        },
        children: [
          new Paragraph({
            text: "IDENTIFICACIÓN DE LA EMPRESA Y ACTIVIDAD ECONÓMICA.",
            heading: HeadingLevel.HEADING_1,
            spacing: {
              before: 260,
              after: 260,
            },
            numbering: {
              reference: "my-crazy-numbering",
              level: 0,
            },
          }),
          ...generateEntityInfoParagraphs(entityInfo, accionistas),
          new Paragraph({
            text: "RESUMEN DE LAS PRINCIPALES POLÍTICAS CONTABLES",
            heading: HeadingLevel.HEADING_1,
            spacing: {
              before: 260,
              after: 260,
            },
            numbering: {
              reference: "my-crazy-numbering",
              level: 0,
            },
          }),
          ...htmlToDocxParagraphs(datosTN.md_policies_accounting),
          new Paragraph({
            text: "POLÍTICA DE GESTIÓN DE RIESGOS",
            heading: HeadingLevel.HEADING_1,
            spacing: {
              before: 260,
              after: 260,
            },
            numbering: {
              reference: "my-crazy-numbering",
              level: 0,
            },
          }),
          ...htmlToDocxParagraphs(datosTN.md_gestion_riesgos),
          new Paragraph({
            text: "ESTIMACIONES Y JUICIOS O CRITERIOS CRÍTICOS DE LA ADMINISTRACIÓN",
            heading: HeadingLevel.HEADING_1,
            spacing: {
              before: 260,
              after: 260,
            },
            numbering: {
              reference: "my-crazy-numbering",
              level: 0,
            },
          }),
          ...htmlToDocxParagraphs(datosTN.md_estimaciones_juicios_administracion),
          ...(efectivo.length > 0 ? [
            new Paragraph({
              text: "EFECTIVOS Y EQUIVALENTES DE EFECTIVO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEfectivo,
          ] : []),
          ...(activosfinancieros.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS FINANCIEROS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosfinancieros,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE PÉRDIDA ACUM. CUENTAS INCOBRABLES Y DETERIORO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movPerdAcumIncDet,

          ...(perdAcumCuentasIncobrablesAndDeterioro.length > 0 ? [
            new Paragraph({
              text: "INVENTARIOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPerdAcumCuentasIncobrablesAndDeterioro,
          ] : []),

          new Paragraph({
            text: "PÉDIDAS ACUMULADAS, VALOR NETO DE REALIZACIÓN Y OTRAS PÉRDIDAS EN INVENTARIO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movPerdAcumPerdInv,

          ...(perdAcumValorNetoRealizAndOtrasPerdEnInv.length > 0 ? [
            new Paragraph({
              text: "SERVICIOS Y OTROS PAGOS ANTICIPADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPerdAcumValorNetoRealizAndOtrasPerdEnInv,
          ] : []),
          ...(activosPorImpuestosCorrientes.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS POR IMPUESTOS CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosPorImpuestosCorrientes,
          ] : []),
          ...(activosCorrientesMantVentaAndOperDiscontinuas.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS CORRIENTES MANTENIDOS PARA LA VENTA Y OPERACIONES DISCONTINUADAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosCorrientesMantVentaAndOperDiscontinuas,
          ] : []),
          ...(construccionesEnProceso.length > 0 ? [
            new Paragraph({
              text: "CONSTRUCCIONES EN PROCESO (NIC 11 Y SECC.23 PYMES)",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaConstruccionesEnProceso,
          ] : []),
          ...(otrosActivosCorrientes.length > 0 ? [
            new Paragraph({
              text: "OTROS ACTIVOS CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosActivosCorrientes,
          ] : []),
          ...(propiedadesPlantasAndEquipos.length > 0 ? [
            new Paragraph({
              text: "PROPIEDAD, PLANTA Y EQUIPO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPropiedadesPlantasAndEquipos,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE PROPIEDADES, PLANTAS Y EQUIPOS PERIODO ACTUAL",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),
          movPropiedadesPlantasEquipos,

          new Paragraph({
            text: "MOVIMIENTO DE PROPIEDADES, PLANTAS Y EQUIPOS PERIODO ANTERIOR",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movPropiedadesPlantasEquipos_ant,

          ...(propiedadesDeInversion.length > 0 ? [
            new Paragraph({
              text: "PROPIEDADES DE INVERSIÓN",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPropiedadesDeInversion,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE PROPIEDADES DE INVERSIÓN PERIODO ACTUAL",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movPropiedadesDeInversionActual,

          new Paragraph({
            text: "MOVIMIENTO DE PROPIEDADES DE INVERSIÓN PERIODO ANTERIOR",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movPropiedadesDeInversionAnterior,

          ...(activosBiologicos.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS BIOLOGICOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosBiologicos,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE ACTIVOS BIOLÓGICOS PERIODO ACTUAL",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movActivosBiologicosActual,

          new Paragraph({
            text: "MOVIMIENTO DE ACTIVOS BIOLÓGICOS PERIODO ANTERIOR",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movActivosBiologicosAnterior,

          ...(activoIntagible.length > 0 ? [
            new Paragraph({
              text: "ACTIVO INTANGIBLE",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivoIntagible,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE INTANGIBLES",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),
          movIntangibles,

          ...(activosPorImpuestosDiferidos.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS POR IMPUESTOS DIFERIDOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosPorImpuestosDiferidos,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE ACTIVO POR IMPUESTO DIFERIDO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movImpuestosDiferidosActivos,

          ...(activosFinancierosNoCorrientes.length > 0 ? [
            new Paragraph({
              text: "ACTIVOS FINANCIEROS NO CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaActivosFinancierosNoCorrientes,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE ACTIVOS FINANCIEROS LARGO PLAZO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movActivosFinancierosLP,

          ...(derechosDeUsoPorAccionesArrendados.length > 0 ? [
            new Paragraph({
              text: "DERECHO DE USO POR ACTIVOS ARRENDADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaDerechosDeUsoPorAccionesArrendados,
          ] : []),
          ...(otrosActivosNoCorrientes.length > 0 ? [
            new Paragraph({
              text: "OTROS ACTIVOS NO CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosActivosNoCorrientes,
          ] : []),
          ...(docAndCuentasPorCobrarNoRel.length > 0 ? [
            new Paragraph({
              text: "DOCUMENTOS Y CUENTAS POR COBRAR NO RELACIONADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaDocAndCuentasPorCobrarNoRel,
          ] : []),
          ...(docAndCuentasPorCobrarRel.length > 0 ? [
            new Paragraph({
              text: "DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaDocAndCuentasPorCobrarRel,
          ] : []),
          ...(pasivosFinancierToValorRazonable.length > 0 ? [
            new Paragraph({
              text: "PASIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosFinancierToValorRazonable,
          ] : []),
          ...(pasivosPorContratosDeArrendamiento.length > 0 ? [
            new Paragraph({
              text: "PASIVOS POR CONTRATOS DE ARRENDAMIENTO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosPorContratosDeArrendamiento,
          ] : []),
          ...(cuentasAndDocumentosPorPagar.length > 0 ? [
            new Paragraph({
              text: "CUENTAS Y DOCUMENTOS POR PAGAR",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaCuentasAndDocumentosPorPagar,
          ] : []),
          ...(obligacionesConInstitucionesFinancieras.length > 0 ? [
            new Paragraph({
              text: "OBLIGACIONES CON INSTITUCIONES FINANCIERAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaObligacionesConInstitucionesFinancieras,
          ] : []),
          ...(provisiones.length > 0 ? [
            new Paragraph({
              text: "PROVISIONES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaProvisiones,
          ] : []),
          ...(porcionCorrienteValoresEmitidos.length > 0 ? [
            new Paragraph({
              text: "PORCIÓN CORRIENTE DE VALORES EMITIDOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPorcionCorrienteValoresEmitidos,
          ] : []),
          ...(otrasObligacionesCorrientes.length > 0 ? [
            new Paragraph({
              text: "OTRAS OBLIGACIONES CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrasObligacionesCorrientes,
          ] : []),
          ...(cuentasPorPagarRelacionadas.length > 0 ? [
            new Paragraph({
              text: "CUENTAS POR PAGAR A RELACIONADAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaCuentasPorPagarRelacionadas,
          ] : []),
          ...(otrosPasivosFinancieros.length > 0 ? [
            new Paragraph({
              text: "OTROS PASIVOS FINANCIEROS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosPasivosFinancieros,
          ] : []),
          ...(anticipos.length > 0 ? [
            new Paragraph({
              text: "ANTICIPOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaAnticipos,
          ] : []),
          ...(pasivosDirectamenteAsociadosConActivosNoCorrientes.length > 0 ? [
            new Paragraph({
              text: "PASIVOS DIRECTAMENTE ASOCIADOS CON LOS ACTIVOS NO CORRIENTES Y OPERACIONES DISCONTINUADAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosDirectamenteAsociadosConActivosNoCorrientes,
          ] : []),
          ...(porcionCorrienteDeProvisionesConActivosNoCorrientes.length > 0 ? [
            new Paragraph({
              text: "PORCION CORRIENTE DE PROVISIONES POR BENEFICIOS A EMPLEADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPorcionCorrienteDeProvisionesConActivosNoCorrientes,
          ] : []),
          ...(otrosPasivosCorrientes.length > 0 ? [
            new Paragraph({
              text: "OTROS PASIVOS CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosPasivosCorrientes,
          ] : []),
          ...(pasivosFinancierosAlCostoAmortizado.length > 0 ? [
            new Paragraph({
              text: "PASIVOS FINANCIEROS AL COSTO AMORTIZADO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosFinancierosAlCostoAmortizado,
          ] : []),
          ...(pasivosPorContratosDeArrendamientoEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "PASIVOS POR CONTRATOS DE ARRENDAMIENTO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosPorContratosDeArrendamientoEnPasNoCorr,
          ] : []),
          ...(otrosPassivosNoCorrientesEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "OTROS PASIVOS NO CORRIENTES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosPassivosNoCorrientesEnPasNoCorr,
          ] : []),
          ...(cuentasAndDocumetosPorPagar.length > 0 ? [
            new Paragraph({
              text: "CUENTAS Y DOCUMENTOS POR PAGAR",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaCuentasAndDocumetosPorPagar,
          ] : []),
          ...(obligacionesConInstitucionesFinancierasEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "OBLIGACIONES CON INSTITUCIONES FINANCIERAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaObligacionesConInstitucionesFinancierasEnPasNoCorr,
          ] : []),
          ...(cuentasPorPagarToRelacionadasEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "CUENTAS POR PAGAR A RELACIONADAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaCuentasPorPagarToRelacionadasEnPasNoCorr,
          ] : []),
          ...(porcionNoCorrienteValoresEmitidosEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "PORCIÓN NO CORRIENTE DE VALORES EMITIDOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPorcionNoCorrienteValoresEmitidosEnPasNoCorr,
          ] : []),
          ...(anticiposEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "ANTICIPOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaAnticiposEnPasNoCorr,
          ] : []),
          ...(provisionesPorBeneficiosToEmpleadosEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "PROVISIONES POR BENEFICIOS A EMPLEADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaProvisionesPorBeneficiosToEmpleadosEnPasNoCorr,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE JUBILACIÓN PATRONAL",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movJubilacionPatronal,

          new Paragraph({
            text: "MOVIMIENTO DE DESAHUCIO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movDesahucio,

          ...(otrasProvisionesEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "OTRAS PROVISIONES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrasProvisionesEnPasNoCorr,
          ] : []),
          ...(pasivosDifeidosEnPasNoCorr.length > 0 ? [
            new Paragraph({
              text: "PASIVO DIFERIDO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPasivosDifeidosEnPasNoCorr,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE PASIVO POR IMPUESTO DIFERIDO",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movImpuestosDiferidosPasivos,

          ...(capital.length > 0 ? [
            new Paragraph({
              text: "CAPITAL",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaCapital,
          ] : []),
          ...(aportesDeSociosOrAccionistas.length > 0 ? [
            new Paragraph({
              text: "APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaAportesDeSociosOrAccionistas,
          ] : []),
          ...(primaPorEmisionPrimariaDeAcciones.length > 0 ? [
            new Paragraph({
              text: "PRIMA POR EMISIÓN PRIMARIA DE ACCIONES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaPrimaPorEmisionPrimariaDeAcciones,
          ] : []),
          ...(reservas.length > 0 ? [
            new Paragraph({
              text: "RESERVAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaReservas,
          ] : []),
          ...(otrosResultadosIntegrales.length > 0 ? [
            new Paragraph({
              text: "OTROS RESULTADOS INTEGRALES",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaOtrosResultadosIntegrales,
          ] : []),
          ...(resultadosAcumulados.length > 0 ? [
            new Paragraph({
              text: "RESULTADOS ACUMULADOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaResultadosAcumulados,
          ] : []),
          ...(resultadosDelEjecicio.length > 0 ? [
            new Paragraph({
              text: "RESULTADOS DEL EJERCICIO",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaResultadosDelEjecicio,
          ] : []),

          new Paragraph({
            text: "MOVIMIENTO DE OTROS (IMPUESTOS SOBRE LA RENTA)",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movOtros_islr,

          new Paragraph({
            text: "MOVIMIENTO DE OTROS (PARTICIPACIÓN TRABAJADORES)",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movOtros_pt,

          new Paragraph({
            text: "MOVIMIENTO DE OTROS (DIVIDENDOS)",
            heading: HeadingLevel.HEADING_3,
            spacing: {
              before: 260,
              after: 260,
            },
          }),

          movOtros_dividendos,

          ...(eriIngresos.length > 0 ? [
            new Paragraph({
              text: "INGRESOS DE ACTIVIDADES ORDINARIAS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriIngresos,
          ] : []),

          ...(eriOtrosIngresos && eriOtrosIngresos.length > 0 ? [
            new Paragraph({
              text: "OTROS INGRESOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriOtrosIngresos,
          ] : []),

          ...(eriCostos && eriCostos.length > 0 ? [
            new Paragraph({
              text: "COSTO DE VENTAS Y PRODUCCIÓN",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriCostos,
          ] : []),

          ...(eriGastosDeVentas && eriGastosDeVentas.length > 0 ? [
            new Paragraph({
              text: "GASTOS DE VENTA",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriGastosDeVentas,
          ] : []),

          ...(eriGastosAdministrativos && eriGastosAdministrativos.length > 0 ? [
            new Paragraph({
              text: "GASTOS ADMINISTRATIVOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriGastosAdministrativos,
          ] : []),

          ...(eriGastosFinancieros && eriGastosFinancieros.length > 0 ? [
            new Paragraph({
              text: "GASTOS FINANCIEROS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriGastosFinancieros,
          ] : []),

          ...(eriOtrosGastos && eriOtrosGastos.length > 0 ? [
            new Paragraph({
              text: "OTROS GASTOS",
              heading: HeadingLevel.HEADING_3,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            tablaEriOtrosGastos,
          ] : []),

          new Paragraph({
            text: "SANCIONES",
            heading: HeadingLevel.HEADING_1,
            spacing: {
              before: 260,
              after: 260,
            },
          }),
          ...htmlToDocxParagraphs(datosTN.md_sanciones),
        ],
      },
    ],
  })

  loadingsTurboNotas.value[index] = false

  clearInterval(counter.value[index])

  // eslint-disable-next-line promise/no-nesting
  Packer.toBlob(doc).then(blob => {
    saveAs(blob, "Notas_Estado_Financiero_" + datosTN.nombre + "_" + datosTN.ruc + "_" + datosTN.periodoactual + ".docx")
  })
}

function construirParrafosDesdeArray(items) {
  let parrafos = []

  items.forEach(({ item }) => {
    const parrafosDeItem = htmlToDocxParagraphs(item)

    parrafosDeItem.forEach(parrafo => {

      parrafo.spacing = { before: 260, after: 260 }
      parrafo.heading = HeadingLevel.HEADING_1
    })

    parrafos = [...parrafos, ...parrafosDeItem]
  })

  return parrafos
}

// TODO: corregir este metodo para trabajar con reportStore
const downloadReporteInformeSocietario = async (rep, index) => {
  loadingsInformeSocietario.value[index] = true
  indice.value[index] = 60
  counter.value[index] = setInterval(() => {
    indice.value[index] --
  }, 1000)

  await cargarReporteSeleccionado(rep)

  const reporte = await reportStore.reportData

  reporteSuperciasListStore.getReporteInformeSocietario(rep.reporteId).then(res => {
    const datos = res.data

    const ordenDelDia = construirParrafosDesdeArray(JSON.parse(datos.md_orden_del_dia))
    const parrafosOrdenDelDia = construirParrafosDesdeArray(JSON.parse(datos.md_acta_junta_general_bloque2))

    // INFORME DEL GERENTE
    const docGerente = new Document({
      creator: "IFluc 6.0",
      title: "INFORME DEL GERENTE " + reportStore.getReportData("periodosreporteifluc")['periodo'],
      description: "Informe societario - Informe del gerente",
      styles: {
        default: {
          document: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraph: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraphStyles: [
            {
              id: "MySpectacularStyle",
              name: "My Spectacular Style",
              basedOn: "Heading1",
              next: "Heading1",
              quickFormat: true,
              run: {
                italics: true,
                color: "990000",
              },
            },
          ],
        },
      },
      sections: [
        {
          children: [
            new Paragraph({
              text: "",
              spacing: {
                before: 6000,
                after: 0,
              },
            }),
            new Paragraph({
              text: "INFORME DE GERENTE " + reportStore.getReportData("periodosreporteifluc")['periodo'],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 200,
              },
            }),
          ],
          properties: {
            pageBreakBefore: true,
          },
        },
        {
          properties: {
            page: {
              pageNumbers: {
                start: 1,
                formatType: NumberFormat.DECIMAL,
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: reportStore.getReportData("empresareporteifluc").nombre,
                      allCaps: true,
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: "Informe del Gerente",
                      alignment: AlignmentType.RIGHT,
                      smallCaps: true,
                    }),
                  ],
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      children: [PageNumber.CURRENT],
                    }),
                    new TextRun({
                      children: [" de ", PageNumber.TOTAL_PAGES],
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            ...htmlToDocxParagraphs(datos.md_informe_gerente),
          ],
        },
      ],
    })

    // INFORME DEL COMISARIO
    const docComisario = new Document({
      creator: "IFluc 5.0",
      title: "INFORME DEL COMISARIO " + reportStore.getReportData("periodosreporteifluc")['periodo'],
      description: "Informe societario - Informe del comisario",
      styles: {
        default: {
          document: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraph: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraphStyles: [
            {
              id: "MySpectacularStyle",
              name: "My Spectacular Style",
              basedOn: "Heading1",
              next: "Heading1",
              quickFormat: true,
              run: {
                italics: true,
                color: "990000",
              },
            },
          ],
        },
      },
      sections: [
        {
          children: [
            new Paragraph({
              text: "",
              spacing: {
                before: 6000,
                after: 0,
              },
            }),
            new Paragraph({
              text: "INFORME DE COMISARIO " + reportStore.getReportData("periodosreporteifluc")['periodo'],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 200,
              },
            }),
          ],
          properties: {
            pageBreakBefore: true,
          },
        },
        {
          properties: {
            page: {
              pageNumbers: {
                start: 1,
                formatType: NumberFormat.DECIMAL,
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: reportStore.getReportData("empresareporteifluc").nombre,
                      allCaps: true,
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: "Informe del Comisario",
                      alignment: AlignmentType.RIGHT,
                      smallCaps: true,
                    }),
                  ],
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      children: [PageNumber.CURRENT],
                    }),
                    new TextRun({
                      children: [" de ", PageNumber.TOTAL_PAGES],
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            ...htmlToDocxParagraphs(datos.md_informe_comisario),
          ],
        },
      ],
    })

    // ACTA DE JUNTA GENERAL
    const docJuntaGeneral = new Document({
      creator: "IFluc 5.0",
      title: "ACTA DE JUNTA GENERAL " + reportStore.getReportData("periodosreporteifluc")['periodo'],
      description: "Informe societario - Acta de junta general",
      styles: {
        default: {
          document: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraph: {
            run: {
              font: defaultFont.name,
            },
          },
          paragraphStyles: [
            {
              id: "MySpectacularStyle",
              name: "My Spectacular Style",
              basedOn: "Heading1",
              next: "Heading1",
              quickFormat: true,
              run: {
                italics: true,
                color: "990000",
              },
            },
          ],
        },
      },
      sections: [
        {
          children: [
            new Paragraph({
              text: "",
              spacing: {
                before: 6000,
                after: 0,
              },
            }),
            new Paragraph({
              text: "ACTA DE JUNTA GENERAL DE ACCIONISTAS " + reportStore.getReportData("periodosreporteifluc")['periodo'],
              heading: HeadingLevel.HEADING_1,
              alignment: AlignmentType.CENTER,
              spacing: {
                after: 200,
              },
            }),
          ],
          properties: {
            pageBreakBefore: true,
          },
        },
        {
          properties: {
            page: {
              pageNumbers: {
                start: 1,
                formatType: NumberFormat.DECIMAL,
              },
            },
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: reportStore.getReportData("empresareporteifluc").nombre,
                      allCaps: true,
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  children: [
                    new TextRun({
                      text: "Acta de Junta General",
                      alignment: AlignmentType.RIGHT,
                      smallCaps: true,
                    }),
                  ],
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      children: [PageNumber.CURRENT],
                    }),
                    new TextRun({
                      children: [" de ", PageNumber.TOTAL_PAGES],
                    }),
                  ],
                }),
              ],
            }),
          },
          children: [
            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            ...htmlToDocxParagraphs(datos.md_acta_junta_general_bloque1),

            ...ordenDelDia,

            ...parrafosOrdenDelDia,

            new Paragraph({
              heading: HeadingLevel.HEADING_1,
              spacing: {
                before: 260,
                after: 260,
              },
            }),
            ...htmlToDocxParagraphs((datos.md_acta_junta_general_bloque3).replace(/<br>/g, '').replace(/&nbsp;/g, ' ')),
          ],
        },
      ],
    })

    loadingsInformeSocietario.value[index] = false

    clearInterval(counter.value[index])

    Packer.toBlob(docGerente).then(blob => {
      saveAs(blob, "InformeGerente_" + reportStore.getReportData("empresareporteifluc")?.nombre + "_" + reportStore.getReportData("empresareporteifluc").ruc + "_" + reportStore.getReportData("periodosreporteifluc")['periodo'] + ".docx")
    })

    Packer.toBlob(docComisario).then(blob => {
      saveAs(blob, "InformeComisario_" + reportStore.getReportData("empresareporteifluc")?.nombre + "_" + reportStore.getReportData("empresareporteifluc").ruc + "_" + reportStore.getReportData("periodosreporteifluc")['periodo'] + ".docx")
    })

    Packer.toBlob(docJuntaGeneral).then(blob => {
      saveAs(blob, "ActaJuntaGeneral_" + reportStore.getReportData("empresareporteifluc")?.nombre + "_" + reportStore.getReportData("empresareporteifluc").ruc + "_" + reportStore.getReportData("periodosreporteifluc")['periodo'] + ".docx")
    })
  })
}

const downloadReporteTxt = async (rep, index) => {
  try {
    loadingsTxt.value[index] = true
    indice.value[index] = 60
    counter.value[index] = setInterval(() => {
      indice.value[index] --
    }, 1000)
    borrarDatosOtrosPeriodos()

    message.value = true
    messageText.value = "Buscando y Cargando reporte solicitado"

    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
    ])
    messageText.value = "Carga de reporte completada"

    const generarReportes = () => {
      generarEcpTxt()
      generarEsfTxt()
      generarEriTxt()
      generarEfeTxt()
    }

    // Esperar y generar reportes
    setTimeout(() => {
      generarReportes()
      loadingsTxt.value[index] = false
    }, 300)

  } catch (error) {
    console.error('Error al descargar los reportes:', error)
  } finally {
    loadingsTxt.value[index] = false
    clearInterval(counter.value[index])
  }
}

const loadReporteTxt = (reporte, index) => {
  console.log(reporte)

  loadings.value[index] = true
  indice.value[index] = 60
  counter.value[index] = setInterval(() => {
    indice.value[index] --
  }, 1000)

  message.value = true
  messageText.value = "Iniciando carga de reporte solicitado"

  borrarDatosOtrosPeriodos()

  buscarReporte(reporte)
}

const downloadReportePdf = async (rep, index) => {
  try {
    loadingsPdf.value[index] = true
    indice.value[index] = 60
    counter.value[index] = setInterval(() => {
      indice.value[index] --
    }, 1000)

    // borrarDatosOtrosPeriodos()

    // Cargar reportes actual y anterior en paralelo
    await Promise.all([
      reporteSuperciasListStore.fetchReporteIflucActual(rep),
      reporteSuperciasListStore.fetchReporteIflucAnterior(rep),
    ])

    await descargarPDF()
  } catch (error) {
    console.error('Error al descargar el reporte PDF:', error)
  } finally {
    loadingsPdf.value[index] = false
    clearInterval(counter.value[index])
  }
}

const borrarDatosOtrosPeriodos = () => {
  borrarDataDeOtrosPeriodos()
}

const isConfirmDialogOpen = ref(false)
const idReporte = ref(0)
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCardText>
          <VAlert
            v-if="message"
            border="start"
            border-color="error"
          >
            {{messageText}}
          </VAlert>
        </VCardText>

        <VCard title="Reportes">
          <VCardText class="d-flex flex-wrap py-4 gap-4">
            <span
              v-if="totalEmpresas < 1"
              class="position-absolute text-sm"
              style="margin-top:-40pxcolor:red"
            >DEBE CREAR UNA EMPRESA Y UN PERIODO COMO MINIMO PARA GENERAR UN REPORTE</span>
            <div
              class="me-3"
              style="width: 80px"
            >
              <VSelect
                v-model="rowPerPage"
                density="compact"
                variant="outlined"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
              <!-- 👉 Search  -->
              <div style="width: 10rem">
                <VTextField
                  v-model="searchQuery"
                  placeholder="Search"
                  density="compact"
                />

                <!--
                  👉 Nuevo Reporte
                  <VBtn
                  variant="tonal"
                  color="primary"
                  prepend-icon="tabler-screen-share"
                  :to="{ name: 'pages-supercias-txt', params: { } }"
                  style="top: 93px position: absolute right: 20px"
                  @click="borrarDatosOtrosPeriodos"
                  >
                  Nuevo Reporte
                  </VBtn>
                -->

              </div>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  EMPRESA
                </th>
                <th scope="col">
                  PERIODO
                </th>
                <th scope="col">
                  NOMBRE
                </th>
                <th scope="col">
                  FECHA
                </th>
                <th scope="col">
                  ACCIONES
                </th>
              </tr>
            </thead>
            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="(reporte, index) in reportes"
                :key="reporte.reporteId"
                style="height: 3.75rem"
              >
                <!-- 👉 Role -->
                <td>
                  <span class="text-capitalize text-base">{{ reporte.empresareporteifluc?.nombre }}</span>
                </td>

                <!-- 👉 Plan -->
                <td>
                  <span class="text-capitalize text-base font-weight-semibold">{{ reporte.periodosreporteifluc?.periodo }}</span>
                </td>

                <!-- 👉 Billing -->
                <td>
                  <span class="text-base">{{ reporte?.nombre_reporte }}</span>
                </td>

                <!-- 👉 Status -->
                <td>
                  {{ reporte?.createdAt }}
                </td>

                <!-- 👉 Actions -->
                <td
                  class="text-center"
                  style="width: 5rem"
                >
                  <span v-if="loadings[index] || loadingsXls[index] || loadingsTxt[index] || loadingsPdf[index] || loadingsTurboNotas[index] || loadingsInformeSocietario[index]" class="text-error" style="margin-right: 10px;">Espere ... {{ indice[index] }}</span>
                  <VBtn
                    icon
                    :loading="loadings[index]"
                    :disabled="loadings[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="loadReporteTxt(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-edit"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsXls[index]"
                    :disabled="loadingsXls[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteXls(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-xls"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsTxt[index]"
                    :disabled="loadingsTxt[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteTxt(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-txt"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    :loading="loadingsPdf[index]"
                    :disabled="loadingsPdf[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReportePdf(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      icon="tabler-file-type-pdf"
                    />
                  </VBtn>
                  <!--
                  <VBtn
                    v-if="reporte.hasTurboNotas"
                    icon
                    :loading="loadingsTurboNotas[index]"
                    :disabled="loadingsTurboNotas[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteTurboNotas(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      style="color: blue"
                      icon="tabler-clipboard-typography"
                    />
                  </VBtn>

                  <VBtn
                    v-if="reporte.hasInformeSocietario"
                    icon
                    :loading="loadingsInformeSocietario[index]"
                    :disabled="loadingsInformeSocietario[index]"
                    size="x-small"
                    color="default"
                    variant="text"
                    @click="downloadReporteInformeSocietario(reporte, index)"
                  >
                    <VIcon
                      size="22"
                      style="color: green"
                      icon="tabler-list-details"
                    />
                  </VBtn>

                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  >
                    <VIcon
                      size="22"
                      style="color: dodgerblue"
                      icon="tabler-drag-drop"
                    />
                  </VBtn>
                  -->
                  <VBtn
                    icon
                    size="x-small"
                    color="default"
                    variant="text"
                  >
                    <VIcon
                      v-if="reporte.efe_cuadre"
                      icon="tabler-check"
                      color="success"
                    />
                    <VIcon
                      v-else
                      icon="tabler-alert-circle"
                      color="error"
                    />
                  </VBtn>

                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!reportes.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center"
                >
                  No existen reportes creados
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDivider />

          <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
            <span class="text-sm text-disabled">
              {{ paginationData }}
            </span>

            <VPagination
              v-model="currentPage"
              size="small"
              :total-visible="5"
              :length="totalPage"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialogReporte
      v-model:isDialogVisible="isConfirmDialogOpen"
      confirmation-msg="Estas seguro de que lo que deseas es eliminar este reporte?. ESTA ACCIÓN NO ES REVERSIBLE"
      :id-reporte="idReporte"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 31.6rem
}

.text-capitalize {
  text-transform: capitalize
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity))
}
</style>
