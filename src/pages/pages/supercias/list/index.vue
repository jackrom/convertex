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

const userId = sessionStorage.getItem('sub') || null

const fetchEmpresas = () => {
  empresaListStore.fetchEmpresas({ user: userId })
    .then(response => {
      console.log(response)
      empresas.value = response.data.empresas
      totalPage.value = response.data.totalPage
      totalEmpresas.value = response.data.totalEmpresas
    }).catch(error => {
      console.error(error)
    })
}

// watchEffect(fetchEmpresas)

const fetchPeriodos = () => {
  periodoListStore.fetchPeriodos({
    user: userId,
  }).then(response => {
    console.log(response)
    periodos.value = response.data.periodos
    totalPage.value = response.data.totalPage
    totalPeriodos.value = response.data.totalPeriodos
  }).catch(error => {
    console.error(error)
  })
}

// watchEffect(fetchPeriodos)

const fetchReportesSupercias = () => {
  reporteSuperciasListStore.fetchReportesConvertex({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
    user: JSON.parse(sessionStorage.getItem('userData')).id,
    origen: 'convertex',
  }).then(response => {
    reportes.value = response.data.reportes
    totalPage.value = 1
    totalReporteSupercias.value = response.data.reportes.length
  }).catch(error => {
    console.error(error)
  })
}

// watchEffect(fetchReportesSupercias)

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
    reporteSuperciasListStore.fetchReporteConvertexActual(reporte),
    reporteSuperciasListStore.fetchReporteConvertexAnterior(reporte),
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
      reporteSuperciasListStore.fetchReporteConvertexActual(rep),
      reporteSuperciasListStore.fetchReporteConvertexAnterior(rep),
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

onMounted(() => {
  fetchEmpresas()
  fetchPeriodos()
  fetchReportesSupercias()
})

watch(
  () => [searchQuery.value, selectedStatus.value, selectedPlan.value, selectedRole.value, rowPerPage.value, currentPage.value],
  () => fetchReportesSupercias(),
)
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
              style="margin-top:-40px; color:red"
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



<route lang="yaml">
meta:
layout: vertical-nav
public: true    # 👈 TEMPORAL
</route>
