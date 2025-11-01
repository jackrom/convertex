<script setup>
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import { useEmpresaListStore } from "@/views/pages/empresas/useEmpresaListStore"
import TxtActivosCorrientes from "@/views/pages/supercias/txt/TxtActivosCorrientes.vue"
import TxtPasivosCorrientes from "@/views/pages/supercias/txt/TxtPasivosCorrientes.vue"
import TxtActivosNoCorrientes from "@/views/pages/supercias/txt/TxtActivosNoCorrientes.vue"
import TxtPasivosNoCorrientes from "@/views/pages/supercias/txt/TxtPasivosNoCorrientes.vue"
import TxtPatrimonio from "@/views/pages/supercias/txt/TxtPatrimonio.vue"
import TxtIngresos from "@/views/pages/supercias/txt/TxtIngresos.vue"
import TxtResultados from "@/views/pages/supercias/txt/TxtResultados.vue"
import TxtEstadosDeCambiosEnElPatrimonio from "@/views/pages/supercias/txt/TxtEstadosDeCambiosEnElPatrimonio.vue"
import TxtCostos from "@/views/pages/supercias/txt/TxtCostos.vue"
import TxtGastosDeVentas from "@/views/pages/supercias/txt/TxtGastosDeVentas.vue"
import TxtGastosAdministrativos from "@/views/pages/supercias/txt/TxtGastosAdministrativos.vue"
import TxtGastosFinancieros from "@/views/pages/supercias/txt/TxtGastosFinancieros.vue"
import TxtOtrosGastos from "@/views/pages/supercias/txt/TxtOtrosGastos.vue"
import TxtResultadosOperacionesDiscontinuadas from "@/views/pages/supercias/txt/TxtResultadosOperacionesDiscontinuadas.vue"
import TxtEfeMdActividadesDeOperacion from "@/views/pages/supercias/txt/TxtEfeMdActividadesDeOperacion.vue"
import TxtEfeMdActividadesDeInversion from "@/views/pages/supercias/txt/TxtEfeMdActividadesDeInversion.vue"
import TxtEfeMdActividadesDeFinanciamiento from "@/views/pages/supercias/txt/TxtEfeMdActividadesDeFinanciamiento.vue"
import TxtEfeMdConciliacionEntreGananciaNeta from "@/views/pages/supercias/txt/TxtEfeMdConciliacionEntreGananciaNeta.vue"
import TxtOtrosIngresos from "@/views/pages/supercias/txt/TxtOtrosIngresos.vue"
import TxtResultadosOtrosResultadoIntegral from "@/views/pages/supercias/txt/TxtResultadosOtrosResultadoIntegral.vue"
import TxtResultadosParticipacionControladora from "@/views/pages/supercias/txt/TxtResultadosParticipacionControladora.vue"
import TxtMovPerdAcumCuenIncYDet from "@/views/pages/supercias/txt/TxtMovPerdAcumCuenIncYDet.vue"
import TxtMovPerdAcumValNetReal from "@/views/pages/supercias/txt/TxtMovPerdAcumValNetReal.vue"
import TxtMovPropiedadesPlantasEquipos from "@/views/pages/supercias/txt/TxtMovPropiedadesPlantasEquipos.vue"
import TxtMovPropiedadesDeInversion from "@/views/pages/supercias/txt/TxtMovPropiedadesDeInversion.vue"
import TxtMovIntangibles from "@/views/pages/supercias/txt/TxtMovIntangibles.vue"
import TxtMovActivosBiologicos from "@/views/pages/supercias/txt/TxtMovActivosBiologicos.vue"
import TxtMovImpuestosDiferidos from "@/views/pages/supercias/txt/TxtMovImpuestosDiferidos.vue"
import TxtMovJubilacionPatronal from "@/views/pages/supercias/txt/TxtMovJubilacionPatronal.vue"
import TxtMovDeshaucio from "@/views/pages/supercias/txt/TxtMovDeshaucio.vue"
import TxtMovActivosFinancierosLargoPlazo from "@/views/pages/supercias/txt/TxtMovActivosFinancierosLargoPlazo.vue"
import TxtMovOtros from "@/views/pages/supercias/txt/TxtMovOtros.vue"
import DynamicFlow from "@/views/pages/supercias/txt/DynamicFlow.vue"
import {
  calcular_9501,
  calcular_9505,
  calcular_9507,
  calcular_9507_ant,
  calcular_9820,
  calcular_9820_ant,
  calcularEfeCuadre,
} from "@core/utils/formulas"
import TxtTurboNotasIdentificacioYActividad from "@/views/pages/supercias/txt/TxtTurboNotasIdentificacioYActividad.vue"
import TxtTurboNotasPoliticasCotables from "@/views/pages/supercias/txt/TxtTurboNotasPoliticasCotables.vue"
import TxtTurboNNotasGestionDeRiesgos from "@/views/pages/supercias/txt/TxtTurboNNotasGestionDeRiesgos.vue"
import TxtTurboNotasEstimacionesJuiciosAdministracion
  from "@/views/pages/supercias/txt/TxtTurboNotasEstimacionesJuiciosAdministracion.vue"
import TxtTurboNotasSanciones from "@/views/pages/supercias/txt/TxtTurboNotasSanciones.vue"
import TxtTurboNotasInformeGerente from "@/views/pages/supercias/txt/TxtTurboNotasInformeGerente.vue"
import TxtTurboNotasInformeComisario from "@/views/pages/supercias/txt/TxtTurboNotasInformeComisario.vue"
import TxtTurboNotasActaDeJuntaGeneral from "@/views/pages/supercias/txt/TxtTurboNotasActaDeJuntaGeneral.vue"
import TxtTurboNotasConfiguracionesInformes from "@/views/pages/supercias/txt/TxtTurboNotasConfiguracionesInformes.vue"
import TxtMapeo1 from "@/views/pages/supercias/txt/TxtMapeo1.vue"
import TxtMapeo101PA from "@/views/pages/supercias/txt/TxtMapeo101PA.vue"
import { computed } from "vue"
import { useReportStore } from "@/@store/reportStore"
import DynamicFlowOld from "@/views/pages/supercias/txt/DynamicFlowOld.vue"
import DynamicFlowActividadesOperacion from "@/views/pages/supercias/txt/DynamicFlowActividadesOperacion.vue"
import DynamicFlowInversionFinanciamiento from "@/views/pages/supercias/txt/DynamicFlowInversionFinanciamiento.vue"
import DynamicFlowConciliacion from "@/views/pages/supercias/txt/DynamicFlowConciliacion.vue"

const emit = defineEmits([
  'diferenciaPorCuadrarPeriodoAnterior',
  'diferenciaPorCuadrarPeriodoActual',
  'totalPasivosPatrimonioActual',
  'totalPasivosPatrimonioAnterior',
  'totalActivosActual',
  'totalActivosAnterior',
  'totalPasivosActual',
  'totalIngresosActual',
  'totalResultadosEriActual',
  'totalResultadosEriAnterior',
  'diferenciaPorCuadrarResultadosPeriodoAnterior',
  'diferenciaPorCuadrarResultadosPeriodoActual',
  'diferencia301_SI',
  'diferencia302_SI',
  'diferencia303_SI',
  'diferencia30401_SI',
  'diferencia30402_SI',
  'diferencia30501_SI',
  'diferencia30502_SI',
  'diferencia30503_SI',
  'diferencia30504_SI',
  'diferencia30601_SI',
  'diferencia30602_SI',
  'diferencia30603_SI',
  'diferencia30604_SI',
  'diferencia30605_SI',
  'diferencia30606_SI',
  'diferencia30607_SI',
  'diferencia30701_SI',
  'diferencia30702_SI',
  'diferencia31_SI',
  'diferencia301_SF',
  'diferencia302_SF',
  'diferencia303_SF',
  'diferencia30401_SF',
  'diferencia30402_SF',
  'diferencia30501_SF',
  'diferencia30502_SF',
  'diferencia30503_SF',
  'diferencia30504_SF',
  'diferencia30601_SF',
  'diferencia30602_SF',
  'diferencia30603_SF',
  'diferencia30604_SF',
  'diferencia30605_SF',
  'diferencia30606_SF',
  'diferencia30607_SF',
  'diferencia30701_SF',
  'diferencia30702_SF',
  'diferencia31_SF',
  'totaldiferenciaefeporcuadrar_actual',
  'totaldiferenciaefeporcuadrar_anterior',
  'habilitarBotonDescargaTxt',
  'reporteData',
  'activosCorrientes',
  'activosNoCorrientes',

  'diferenciaPerdidaAcumuladaCuentasIncobrablesYDet',
  'total_esf1010302ant_valor',
  'pat_307_esf',
  'pat_307_esf_ant',
  'efecuadre',
  'total_esf1010302_valor',
])

const reportStore = useReportStore()

const diferenciaPerdidaAcumuladaCuentasIncobrablesYDet = ref(0)

const dif_mov_1 = computed(() => {
  return (diferenciaPerdidaAcumuladaCuentasIncobrablesYDet.value).toFixed(2)
})

const turbonotas = localStorage.getItem('entidad') ? JSON.parse(localStorage.getItem('entidad')) : {}

watch(dif_mov_1, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferenciaPerdidaAcumuladaCuentasIncobrablesYDet', dif_mov_1.value)
}, { immediate: true })

const loadings = ref(false)
const countdown = ref(30)

const loadingstn = ref(false)
const countdowntn = ref(60)

const loadingsis = ref(false)
const countdownis = ref(30)

const loadingsfd = ref(false)
const countdownfd = ref(30)

const intervalId = ref(null)
const router = useRouter()
const superciasListStore = useSuperciasListStore()
const empresaListStore = useEmpresaListStore()
const empresa = ref(reportStore.reportData["empresareporteifluc"]["nombre"])
const periodo = ref(reportStore.getReportData('periodosreporteifluc')["periodo"])
const empresareportecargado = ref()
const periodoreportecargado = ref()
let companies = ref([])
let periodos = ref([])

const panel = ref(0)
const panel2 = ref(19)
const panel3 = ref(19)
const panel4 = ref(19)
const panel5 = ref(19)
const panel6 = ref(0)
const panel7 = ref(0)

// VENTANA FLOTANTE RESUMEN ESF
const mostrarResumenEsf = ref(false)

const openResumenEsfPanel = () => {
  calcularResumenesESF()
  mostrarResumenEsf.value = true
  verResultadosEsfTrece()
  calcularEsfCuadre()

  closePanels()
}

// VENTANA FLOTANTE RESUMEN SALDOSINICIALES ECP
const mostrarECP_SaldosIniciales = ref(false)

const openECP_SaldosInicialesPanel = () => {
  closePanels()
  mostrarECP_SaldosIniciales.value = true
  calcularEcpCuadre()
}

// VENTANA FLOTANTE RESUMEN SALDOSFINALES ECP
const mostrarECP_SaldosFinales = ref(false)

const openECP_SaldosFinalesPanel = () => {
  closePanels()
  mostrarECP_SaldosFinales.value = true
  calcularEcpCuadre()
}

// VENTANA FLOTANTE RESUMEN ERI
const mostrarResumenEri = ref(false)
const mostrarResumenEfe = ref(false)
const mostrarResumenEfeDynamicFlow = ref(false)

const openResumenEriPanel = () => {
  closePanels()
  mostrarResumenEri.value = true
  calcularEriCuadre()
  calcular607()
}

const openResumenEfePanel = () => {
  closePanels()
  mostrarResumenEfe.value = true

  efe_9507.value = calcular_9507()
  efe_9820.value = calcular_9820()
  console.log("9820: ", efe_9820.value)
  resumen_diferenciaporcuadrar_efe_af.value = (Number(efe_9507.value) - Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101"))).toFixed(2)
  efe_9501.value = calcular_9501()

  efeCuadre.value = calcularEfeCuadre()
}

const openResumenEfeDFPanel = () => {
  mostrarResumenEfeDynamicFlow.value = true

  efe_9507.value = calcular_9507()
  efe_9507_ant.value = calcular_9507_ant()
  resumen_diferenciaporcuadrar_efe_af.value = (Number(efe_9507.value) - Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101"))).toFixed(2)
  efe_9501.value = calcular_9501()

  efeCuadre.value = calcularEfeCuadre()
}

const tab = ref('reportes-supercias')
const empresas = ref([])

let activos = ref('0')
let activoscorrientes = ref({})
let activosnocorrientes = ref({})

let pasivos = ref('0')
let pasivoscorrientes = ref({})
let pasivosnocorrientes = ref({})

let patrimonio = ref('0')

let ingresos = ref('0')
let costos = ref('0')
let gastos = ref('0')
let otrosingresos = ref('0')
let impuestosganancias = ref('0')
let resultadosefe = ref('0')

activos.value = {
  corrientes: Number(reportStore.getSingleReportValue("activoscorrientesifluc", 'esf_101')).toFixed(2),
  nocorrientes: Number(reportStore.getSingleReportValue("activosnocorrientesifluc", 'esf_102')).toFixed(2),
  corrientes_ant: Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", 'esf_101_ant', true)).toFixed(2),
  nocorrientes_ant: Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", 'esf_102_ant', true)).toFixed(2),
  ac_10101: Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101")).toFixed(2),
  ac_10101_ant: Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10101_ant", true)).toFixed(2),
  esf_1010302_ant: Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010302_ant", true)).toFixed(2),
  esf_1010302: Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010302")).toFixed(2),
}
pasivos.value = {
  corrientes: Number(reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201")).toFixed(2),
  nocorrientes: Number(reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_202")).toFixed(2),
  corrientes_ant: Number(reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201_ant", true)).toFixed(2),
  nocorrientes_ant: Number(reportStore.getSingleReportValue("pasivosnocorrientesifluc_ant", "esf_202_ant", true)).toFixed(2),
  pasivoscorrientes: {},
  pasivosnocorrientes: {},
}
patrimonio.value = {
  pat: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_3")).toFixed(2),
  pat_301: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_301")).toFixed(2),
  pat_31: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_31")).toFixed(2),

  pat_302: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_302")).toFixed(2),
  pat_303: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_303")).toFixed(2),
  pat_30401: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30401")).toFixed(2),
  pat_30402: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30402")).toFixed(2),
  pat_30501: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30501")).toFixed(2),
  pat_30502: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30502")).toFixed(2),
  pat_30503: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30503")).toFixed(2),
  pat_30504: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30504")).toFixed(2),
  pat_30601: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30601")).toFixed(2),
  pat_30602: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30602")).toFixed(2),
  pat_30603: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30603")).toFixed(2),
  pat_30604: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30604")).toFixed(2),
  pat_30605: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30605")).toFixed(2),
  pat_30606: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30606")).toFixed(2),
  pat_30607: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30607")).toFixed(2),
  pat_307: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_307")).toFixed(2),
  pat_30701: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30701")).toFixed(2),
  pat_30702: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_30702")).toFixed(2),
  pat_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_3_ant", true)).toFixed(2),

  pat_31_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_31_ant", true)).toFixed(2),
  pat_301_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_301_ant", true)).toFixed(2),
  pat_302_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_302_ant", true)).toFixed(2),
  pat_303_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_303_ant", true)).toFixed(2),
  pat_30401_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30401_ant", true)).toFixed(2),
  pat_30402_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30402_ant", true)).toFixed(2),
  pat_30501_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30501_ant", true)).toFixed(2),
  pat_30502_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30502_ant", true)).toFixed(2),
  pat_30503_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30503_ant", true)).toFixed(2),
  pat_30504_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30504_ant", true)).toFixed(2),
  pat_30601_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30601_ant", true)).toFixed(2),
  pat_30602_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30602_ant", true)).toFixed(2),
  pat_30603_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30603_ant", true)).toFixed(2),
  pat_30604_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30604_ant", true)).toFixed(2),
  pat_30605_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30605_ant", true)).toFixed(2),
  pat_30606_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30606_ant", true)).toFixed(2),
  pat_30607_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30607_ant", true)).toFixed(2),
  pat_307_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_307_ant", true)).toFixed(2),
  pat_30701_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30701_ant", true)).toFixed(2),
  pat_30702_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_30702_ant", true)).toFixed(2),
  pat_99_31: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_31")).toFixed(2),
  pat_99_301: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_301")).toFixed(2),
  pat_99_302: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_302")).toFixed(2),
  pat_99_303: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_303")).toFixed(2),
  pat_99_30401:Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30401")).toFixed(2),
  pat_99_30402: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30402")).toFixed(2),
  pat_99_30501: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30501")).toFixed(2),
  pat_99_30502: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30502")).toFixed(2),
  pat_99_30503:Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30503")).toFixed(2),
  pat_99_30504: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30504")).toFixed(2),
  pat_99_30601: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30601")).toFixed(2),
  pat_99_30602: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30602")).toFixed(2),
  pat_99_30603: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30603")).toFixed(2),
  pat_99_30604: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30604")).toFixed(2),
  pat_99_30605: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30605")).toFixed(2),
  pat_99_30606: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30606")).toFixed(2),
  pat_99_30607: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30607")).toFixed(2),
  pat_99_30701: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30701")).toFixed(2),
  pat_99_30702: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_99_30702")).toFixed(2),
  pat_9901_301: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_301")).toFixed(2),
  pat_9901_302: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_302")).toFixed(2),
  pat_9901_303: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_303")).toFixed(2),
  pat_9901_30401: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30401")).toFixed(2),
  pat_9901_30402: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30402")).toFixed(2),
  pat_9901_30501: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30501")).toFixed(2),
  pat_9901_30502: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30502")).toFixed(2),
  pat_9901_30503: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30503")).toFixed(2),
  pat_9901_30504: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30504")).toFixed(2),
  pat_9901_30601: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30601")).toFixed(2),
  pat_9901_30602: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30602")).toFixed(2),
  pat_9901_30603: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30603")).toFixed(2),
  pat_9901_30604: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30604")).toFixed(2),
  pat_9901_30605: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30605")).toFixed(2),
  pat_9901_30606: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30606")).toFixed(2),
  pat_9901_30607: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30607")).toFixed(2),
  pat_9901_30701: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30701")).toFixed(2),
  pat_9901_30702: Number(reportStore.getSingleReportValue("ecpifluc", "ecp_9901_30702")).toFixed(2),
}
ingresos.value = {
  ing_401: Number(reportStore.getSingleReportValue("ingresosifluc", "eri_401")).toFixed(2),
  ing_401_ant: Number(reportStore.getSingleReportValue("ingresosifluc_ant", "eri_401_ant", true)).toFixed(2),
}
costos.value = {
  cos_501: Number(reportStore.getSingleReportValue("costosifluc", "eri_501")).toFixed(2),
  cos_501_ant: Number(reportStore.getSingleReportValue("costosifluc_ant", "eri_501_at", true)).toFixed(2),
  esf_1010302_ant: Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", 'esf_1010302_ant', true)).toFixed(2),
  esf_1010302: Number(reportStore.getSingleReportValue("activoscorrientesifluc", 'esf_1010302')).toFixed(2),
}
gastos.value = {
  gas_50201: Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")).toFixed(2),
  gas_50202: Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2),
  gas_50203: Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2),
  gas_50204: Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")).toFixed(2),
  gas_50201_ant: Number(reportStore.getSingleReportValue("gastosdeventasifluc_ant", "eri_50201_ant", true)).toFixed(2),
  gas_50202_ant: Number(reportStore.getSingleReportValue("gastosadministrativosifluc_ant", "eri_50202_at", true)).toFixed(2),
  gas_50203_ant: Number(reportStore.getSingleReportValue("gastosfinancierosifluc_ant", "eri_50203_ant", true)).toFixed(2),
  gas_50204_ant: Number(reportStore.getSingleReportValue("otrosgastosifluc_ant", "eri_50204_ant", true)).toFixed(2),
}
otrosingresos.value = {
  otro_403: Number(reportStore.getSingleReportValue("ingresosifluc", "eri_403")).toFixed(2),
  otro_403_ant: Number(reportStore.getSingleReportValue("ingresosifluc_ant", "eri_403_ant", true)).toFixed(2),
}
resultadosefe.value = {
  esf_307: Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_307")).toFixed(2),
  esf_307_ant: Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_307_ant", true)).toFixed(2),
  res_diferenciaporcuadrar_af: 0,
  res_diferenciaporcuadrar_af_ant: 0,
  res_diferenciaporcuadrar_conciliacion: 0,
  res_diferenciaporcuadrar_conciliacion_ant: 0,
}
resultadosefe.value = {
  esf_1010302: Number(reportStore.getSingleReportValue("activoscorrientesifluc", 'esf_1010302')).toFixed(2),
}
impuestosganancias.value = {
  participacion_600: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_600")).toFixed(2),
  participacion_600_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_600_ant", true)).toFixed(2),
  participacion_601: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2),
  participacion_601_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_601_ant", true)).toFixed(2),
  impuestos_603: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2),
  impuestos_605: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_605")).toFixed(2),
  impuestos_606: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_606")).toFixed(2),
  impuestos_607: Number(reportStore.getSingleReportValue("resultadosifluc", "eri_607")).toFixed(2),
  impuestos_603_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_603_ant", true)).toFixed(2),
  impuestos_605_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_605_ant", true)).toFixed(2),
  impuestos_606_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_606_ant", true)).toFixed(2),
  impuestos_607_ant: Number(reportStore.getSingleReportValue("resultadosifluc_ant", "eri_607_ant", true)).toFixed(2),
}

// const eri_607 = ref(0)
const eri_607_ant = ref(0)
const esfCuadre = ref(false)
const eriCuadre = ref(false)
const ecpCuadre = ref(false)
const efeCuadre = ref(false)

const diferenciaperiodoactual = ref(0)
const diferenciaperiodoanterior = ref(0)

const resumen_diferenciaporcuadrar_efe_af = ref(Number(calcular_9507).toFixed(2) - Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101")).toFixed(2))

const resumen_diferenciaporcuadrar_efe_celgnylfo = computed(() => (Number(reportStore.diferenciaporcuadrar_efe_celgnylfo).toFixed((2))))
console.log("resumen_diferenciaporcuadrar_efe_celgnylfo", resumen_diferenciaporcuadrar_efe_celgnylfo.value)

const efe_9501 = ref(calcular_9501())
const efe_9505 = ref(calcular_9505())
const efe_9506 = ref(Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10101")).toFixed(2))
let efe_9507 = ref(calcular_9507())
const efe_9820 = ref(calcular_9820())
const efe_9507_ant = ref(calcular_9507_ant())
const efe_9820_ant = ref(calcular_9820_ant())

const eri_607 = ref(0)

const calcularEcpCuadre = () => {
  const diferencia = Number(dif_301_sf.value) + Number(dif_302_sf.value) + Number(dif_303_sf.value) + Number(dif_30401_sf.value) + Number(dif_30402_sf.value) + Number(dif_30501_sf.value) + Number(dif_30502_sf.value) + Number(dif_30503_sf.value) + Number(dif_30504_sf.value) + Number(dif_30601_sf.value) + Number(dif_30602_sf.value) + Number(dif_30603_sf.value) + Number(dif_30604_sf.value) + Number(dif_30605_sf.value) + Number(dif_30606_sf.value) + Number(dif_30607_sf.value) + Number(dif_30701_sf.value) + Number(dif_30702_sf.value) + Number(dif_301_si.value) + Number(dif_302_si.value) + Number(dif_303_si.value) + Number(dif_30401_si.value) + Number(dif_30402_si.value) + Number(dif_30501_si.value) + Number(dif_30502_si.value) + Number(dif_30503_si.value) + Number(dif_30504_si.value) + Number(dif_30601_si.value) + Number(dif_30602_si.value) + Number(dif_30603_si.value) + Number(dif_30604_si.value) + Number(dif_30605_si.value) + Number(dif_30606_si.value) + Number(dif_30607_si.value) + Number(dif_30701_si.value) + Number(dif_30702_si.value)

  ecpCuadre.value = diferencia === 0
  reportStore.updateEcpCuadre(ecpCuadre.value)
}

reportStore.updateEfeCuadre(calcularEfeCuadre())

watch(efeCuadre, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('efecuadre', calcularEfeCuadre())
}, { immediate: true })

const calcularEsfCuadre = () => {
  verResultadosEsfTrece()

  const diferencia = Number(diferenciaperiodoactual.value) - Number(diferenciaperiodoanterior.value)
  const hayDiferencia = ref(false)

  hayDiferencia.value = Number(diferencia) === 0
  esfCuadre.value = hayDiferencia.value

  // reportStore.updateEsfCuadre(esfCuadre.value)
}

// PROPIEDADES REACTIVAS

const esf_1010302_ant_valor = computed(() => Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010302_ant", true)).toFixed(2) || 0)

watch(esf_1010302_ant_valor, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('total_esf1010302ant_valor', esf_1010302_ant_valor.value)
}, { immediate: true })

const esf_1010302_valor = computed(() => reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010302"))

watch(esf_1010302_valor, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('total_esf1010302_valor', esf_1010302_valor.value)
}, { immediate: true })

// FIN PROPIEDADES REACTIVAS

const totaldiferenciaefeporcuadrar = computed(() => resultadosefe.value.res_diferenciaporcuadrar_af + resultadosefe.value.res_diferenciaporcuadrar_conciliacion)

watch(totaldiferenciaefeporcuadrar, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('totaldiferenciaefeporcuadrar_actual', totaldiferenciaefeporcuadrar.value)
}, { immediate: true })

const totaldiferenciaefeporcuadrar_ant = computed(() => resultadosefe.value.res_diferenciaporcuadrar_af_ant + resultadosefe.value.res_diferenciaporcuadrar_conciliacion_ant)

watch(totaldiferenciaefeporcuadrar_ant, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('totaldiferenciaefeporcuadrar_anterior', totaldiferenciaefeporcuadrar_ant.value)
}, { immediate: true })

/*
GENERAR UN ARCHIVO EXCEL CON TODOS LOS DATOS
 */


const startCountdown = () => {
  loadings.value = true
  countdown.value = 30
  intervalId.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1
    } else {
      stopCountdown()
    }
  }, 1000)
}

const stopCountdown = () => {
  clearInterval(intervalId)
  loadingstn.value = false
}

const startCountdowntn = () => {
  loadingstn.value = true
  countdowntn.value = 30
  intervalId.value = setInterval(() => {
    if (countdowntn.value > 0) {
      countdowntn.value -= 1
    } else {
      stopCountdowntn()
    }
  }, 1000)
}

const stopCountdowntn = () => {
  clearInterval(intervalId)
  loadingstn.value = false
}

const startCountdownis = () => {
  loadingsis.value = true
  countdownis.value = 30
  intervalId.value = setInterval(() => {
    if (countdownis.value > 0) {
      countdownis.value -= 1
    } else {
      stopCountdownis()
    }
  }, 1000)
}

const stopCountdownis = () => {
  clearInterval(intervalId)
  loadingsis.value = false
}

const startCountdownfd = () => {
  loadingsfd.value = true
  countdownfd.value = 30
  intervalId.value = setInterval(() => {
    if (countdownfd.value > 0) {
      countdownfd.value -= 1
    } else {
      stopCountdownfd()
    }
  }, 1000)
}

const stopCountdownfd = () => {
  clearInterval(intervalId)
  loadingsfd.value = false
}

const addNewReporte = reporteData => {
  superciasListStore.addReporteSupercias(reporteData)
    .then(res => {
      // localStorage.clear()
      router.replace('/pages/supercias/list')
    })
}

const guardarReporteTxt = () => {
  loadings.value = true
  startCountdown()

  setTimeout(() => {
    try {
      const user = JSON.parse(sessionStorage.getItem('userData'))

      const periodoId = reportStore.reportData?.periodoId

      const baseIds = {
        userId: user?.id,
        periodoId: (typeof periodoId === 'string') ? Number(periodoId) : periodoId,
        empresaId: reportStore.reportData?.empresaId,
        reporteId: JSON.parse(localStorage.getItem('reporteId')),
      }

      const getProcessedData = key => {
        const data = reportStore.getReportData(key)

        return { ...data, ...baseIds }
      }

      const getProcessedDataAnt = key => {
        const data = reportStore.getReportData(key, true)

        return { ...data, ...baseIds }
      }

      const getProcessedDataBatch = (keys, isAnt = false) => {
        return keys.reduce((acc, key) => {
          acc[key] = (!isAnt) ? getProcessedData(key) : getProcessedDataAnt(key)

          return acc
        }, {})
      }

      const sectionKeys = [
        'activoscorrientesifluc',
        'activosnocorrientesifluc',
        'pasivoscorrientesifluc',
        'pasivosnocorrientesifluc',
        'patrimonioifluc',
        'costosifluc',
        'ingresosifluc',
        'otrosingresosifluc',
        'gastosdeventasifluc',
        'gastosadministrativosifluc',
        'gastosfinancierosifluc',
        'otrosgastosifluc',
        'resultadosifluc',
        'operacionesdiscontinuadasifluc',
        'otrosresultadosintegralifluc',
        'resultadosparticipacioncontroladoraifluc',
        'actividadesdeoperacionifluc',
        'actividadesdeinversionifluc',
        'actividadesdefinanciamientoifluc',
        'conciliacionganancianetaifluc',
        'ecpifluc',
        'movperdidasacumuladascuentasincobrablesydeterioro',
        'movperdidasacumuladasvalornetorealizacion',
        'movpropiedadesplantasyequipos',
        'movpropiedadesdeinversion',
        'movintangibles',
        'movactivosbiologicos',
        'movimpuestosdiferidos',
        'movjubilacionpatronal',
        'deshaucio',
        'activosfinancieroslargoplazo',
        'otros',
      ]

      console.log('sectionKeys["ecpifluc"]', sectionKeys['ecpifluc'])

      const sections = getProcessedDataBatch(sectionKeys)

      const antSectionKeys = sectionKeys.map(key => `${key}_ant`)

      const antSections = getProcessedDataBatch(antSectionKeys, true)

      const reporte = {
        userId: user?.id,
        periodoId: reportStore.reportData?.periodoId,
        empresaId: reportStore.reportData?.empresaId,
        nombre_reporte: 'ifluc',
        esf_cuadre: reportStore.reportData?.esf_cuadre,
        eri_cuadre: reportStore.reportData?.eri_cuadre,
        mov_cuadre: reportStore.reportData?.mov_cuadre,
        ecp_cuadre: reportStore.reportData?.ecp_cuadre,
        efe_cuadre: reportStore.reportData?.efe_cuadre,
      }

      const reportData = {
        reporte,
        ...sections,
        ...antSections,
      }

      addNewReporte(reportData)
    } catch (error) {
      console.error('Error al guardar el reporte:', error)
    }
  }, 1000)


}

const guardarTurboNotas = () => {
  loadingstn.value = true

  startCountdowntn()
  let turboNotas = JSON.parse(localStorage.getItem('entidad'))

  const reporte = reportStore.reportData

  turboNotas.userId = reporte['userId']
  turboNotas.periodoId = reporte['periodoId']
  turboNotas.empresaId = reporte['empresaId']
  turboNotas.reporteId = JSON.parse(localStorage.getItem('reporteId'))

  turboNotas.accionistas = JSON.stringify(turboNotas.accionistas)
  turboNotas.pais = JSON.stringify(turboNotas.pais)

  const updateReporte = {
    reporteId: JSON.parse(localStorage.getItem('reporteId')),
    hasTurboNotas: true,
  }

  superciasListStore.addReporteTurboNotas(turboNotas)
    .then( res => {
      superciasListStore.updateReporteIfluc(updateReporte)
        .then( response => {
          localStorage.clear()
          router.replace('/pages/supercias/list')
        })

    })
}

const guardarInformeSocietario = () => {
  loadingsis.value = true

  startCountdownis()

  let informeSocietario = JSON.parse(localStorage.getItem('informesocietario'))

  const reporte = reportStore.reportData

  informeSocietario.userId = reporte?.userId
  informeSocietario.periodoId = reporte?.periodoId
  informeSocietario.empresaId = reporte?.empresaId
  informeSocietario.reporteId = JSON.parse(localStorage.getItem('reporteId'))

  informeSocietario.md_acta_junta_general_bloque2 = JSON.stringify(informeSocietario.md_acta_junta_general_bloque2)
  informeSocietario.md_orden_del_dia = JSON.stringify(informeSocietario.md_orden_del_dia)

  const updateReporte = {
    reporteId: reporte?.reporteId,
    hasInformeSocietario: true,
  }

  superciasListStore.addReporteInformeSocietario(informeSocietario)
    .then( res => {
      superciasListStore.updateReporteIfluc(updateReporte)
        .then( response => {
          localStorage.clear()
          router.replace('/pages/supercias/list')
        })

    })
}

const guardarFlujoDinamico = () => {
  loadingsfd.value = true

  startCountdownfd()



  let operaciones = reportStore.getReportData("actividadesdeoperacion_df_ifluc")
  let financiamiento = reportStore.getReportData("actividadesdefinanciamiento_df_ifluc")
  let inversion = reportStore.getReportData("actividadesdeinversion_df_ifluc")
  let conciliaciones = reportStore.getReportData("conciliacion_df_ifluc")

  console.log('operaciones: ', operaciones)
  console.log('financiamiento: ', financiamiento)
  console.log('inversion: ', inversion)
  console.log('conciliaciones: ', conciliaciones)

  if (operaciones)
    superciasListStore.addReporteDynamicFlowActividadesDeOperacion(operaciones)
  if (inversion)
    superciasListStore.addReporteDynamicFlowActividadesDeInversion(inversion)
  if (conciliaciones)
    superciasListStore.addReporteDynamicFlowConciliacion(conciliaciones)
  if (financiamiento)
    superciasListStore.addReporteDynamicFlowActividadesDeFinanciamiento(financiamiento)
      .then( res => {
        router.replace('/pages/supercias/list')
      })
}

const searchQuery = ref('')
const rowPerPage = ref(1000)
const currentPage = ref(1)

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
    companies.value = response.data.empresas
    let empresaseleccionada = reportStore.reportData['empresaId']
    let periodoseleccionado = reportStore.reportData['periodoId']
    let reporteseleccionado = reportStore.reportData['reporteId']

    const e = []

    response.data.empresas.forEach(obj => {
      let empresa = {
        title: obj.nombre,
        value: obj.ruc,
      }
      e.push(empresa)
    })
    empresas.value = e

  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchEmpresas)

// Seleccionar empresa a trabajar
watch(empresa, empresaSelected => {
  companies.value.forEach(obj => {
    if (empresaSelected.value === obj.ruc) {
      sessionStorage.setItem('empresaselected', JSON.stringify(obj))
      periodos.value = obj

      const v = []

      obj.periodosifluc.forEach(per => {
        let p = {
          title: per.periodo,
          value: per.id,
        }
        v.push(p)
      })
      periodos.value = v
    }
  })
})

// Seleccionar periodo para crear txt
watch(periodo, async periodoSelected => {
  periodoSelected.periodo = periodoSelected?.title
  periodoSelected.id = periodoSelected?.value

  const empresadetail = await reportStore.getReportData("empresareporteifluc")

  await sessionStorage.setItem('periodoSelected', reportStore.getReportData("periodosreporteifluc")['periodo'])
  await localStorage.setItem('empresadetail', reportStore.getReportData("empresareporteifluc"))
  await localStorage.setItem('periododetail', reportStore.getReportData("periodosreporteifluc"))
  setTimeout(() => {
    sellarencabezado()
  }, 2000)
})

// ACTUALIZACIONES DE TOTALES RESUMENES
let pasivosCorrientesParaResumen, pasivosCorrientesParaResumenAt
let pasivosNoCorrientesParaResumen, pasivosNoCorrientesParaResumenAt
let patrimonioParaResumen, patrimonioParaResumenAt
let activosCorrientesParaResumen, activosCorrientesParaResumenAt
let activosNoCorrientesParaResumen, activosNoCorrientesParaResumenAt
let  totalactivosactual, totalactivosanterior, totalpasivosactual, tpyp, tpyp_ant

const calcularResumenesESF = () => {
  const sufijos = [
    "20101",
    "20102",
    "20103",
    "20104",
    "20105",
    "20106",
    "20107",
    "20108",
    "20109",
    "20110",
    "20111",
    "20112",
    "20113",
    "20114",
  ]

  pasivosCorrientesParaResumen = sufijos
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("pasivoscorrientesifluc")[`esf_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  pasivosCorrientesParaResumenAt = sufijos
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("pasivoscorrientesifluc_ant", true)[`esf_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  const sufijosPasivosNoCorrientes = [
    "20201",
    "20202",
    "20203",
    "20204",
    "20205",
    "20206",
    "20207",
    "20208",
    "20209",
    "20210",
  ]

  pasivosNoCorrientesParaResumen = sufijosPasivosNoCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("pasivosnocorrientesifluc")[`esf_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  pasivosNoCorrientesParaResumenAt = sufijosPasivosNoCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("pasivosnocorrientesifluc_ant", true)[`esf_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  const sufijosPatrimonio = [
    "301",
    "302",
    "303",
    "304",
    "305",
    "306",
    "307",
    "31",
  ]

  patrimonioParaResumen = sufijosPatrimonio
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("patrimonioifluc")[`esf_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  patrimonioParaResumenAt = sufijosPatrimonio
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("patrimonioifluc_ant", true)[`esf_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  const sufijosActivosCorrientes = [
    "10101",
    "10102",
    "10103",
    "10104",
    "10105",
    "10106",
    "10107",
    "10108",
  ]

  activosCorrientesParaResumen = sufijosActivosCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("activoscorrientesifluc")[`esf_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  activosCorrientesParaResumenAt = sufijosActivosCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("activoscorrientesifluc_ant", true)[`esf_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  const sufijosActivosNoCorrientes = [
    "10201",
    "10202",
    "10203",
    "10204",
    "10205",
    "10206",
    "10207",
    "10208",
    "10209",
    "10210",
  ]

  activosNoCorrientesParaResumen = sufijosActivosNoCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("activosnocorrientesifluc")[`esf_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  activosNoCorrientesParaResumenAt = sufijosActivosNoCorrientes
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("activosnocorrientesifluc_ant", true)[`esf_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  totalactivosactual = computed(() => (Number(activosCorrientesParaResumen) + Number(activosNoCorrientesParaResumen)).toFixed(2))
  totalactivosanterior = computed(() => (Number(activosCorrientesParaResumenAt) + Number(activosNoCorrientesParaResumenAt)).toFixed(2))
  totalpasivosactual = computed(() => (Number(pasivosCorrientesParaResumen) + Number(pasivosNoCorrientesParaResumen)).toFixed(2))

  tpyp = computed(() => (Number(pasivosCorrientesParaResumen) + Number(pasivosNoCorrientesParaResumen) + Number(patrimonioParaResumen)).toFixed(2))
  tpyp_ant = computed(() => (Number(pasivosCorrientesParaResumenAt) + Number(pasivosNoCorrientesParaResumenAt) + Number(patrimonioParaResumenAt)).toFixed(2))


  console.log('activosCorrientesParaResumen: ', activosCorrientesParaResumen)
  console.log('activosNoCorrientesParaResumen: ', activosNoCorrientesParaResumen)
}

calcularResumenesESF()

// RESUMEN ESF
tpyp_ant = computed(() => (Number(pasivosCorrientesParaResumenAt) + Number(pasivosNoCorrientesParaResumenAt) + Number(patrimonioParaResumenAt)).toFixed(2))

tpyp = computed(() => (Number(pasivosCorrientesParaResumen) + Number(pasivosNoCorrientesParaResumen) + Number(patrimonioParaResumen)).toFixed(2))

totalactivosactual = computed(() => (Number(activosCorrientesParaResumen) + Number(activosNoCorrientesParaResumen)).toFixed(2))

totalactivosanterior = computed(() => (Number(activosCorrientesParaResumenAt) + Number(activosNoCorrientesParaResumenAt)).toFixed(2))

totalpasivosactual = computed(() => (Number(pasivosCorrientesParaResumen) + Number(pasivosNoCorrientesParaResumen)).toFixed(2))

let movCuadre = ref(true)

let diferenciaporcuadrar_paciyd = 0
let diferenciaporcuadrar_pavndryopei = 0
let diferenciaporcuadrar_desahucio = 0
let diferenciaporcuadrar_aflp = 0
let diferenciaporcuadrar_jp = 0
let diferenciaporcuadrar_id = 0
let diferenciaporcuadrar_ab = 0
let diferenciaporcuadrar_intangibles = 0
let diferenciaporcuadrar_pdi = 0
let diferenciaporcuadrar_ppye = 0

const verResultadosMovUno = () => {
  let saldoinicial = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", 'saldoinicial')
  let provisionesanio = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", 'provisionesanio')
  let bajasoreversiones = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", 'bajasoreversiones')
  let ajustes = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", 'ajustes')
  let saldoinicial_ant = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro_ant", 'saldoinicial_ant', true)
  let provisionesanio_ant = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro_ant", 'provisionesanio_ant', true)
  let bajasoreversiones_ant = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro_ant", 'bajasoreversiones_ant', true)
  let ajustes_ant = reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro_ant", 'ajustes_ant', true)

  const saldofinalsegunesf = computed(() => {
    const value1 = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
    const value2 = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")

    return value1 && value2 ? (Number(value1) + Number(value2)).toFixed(2) : "0.00"
  })

  const saldofinalsegunesf_ant = computed(() => {
    const value1 = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)
    const value2 = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

    return value1 && value2 ? (Number(value1) + Number(value2)).toFixed(2) : "0.00"
  })

  const saldofinalsegunmovimiento = computed(() => {
    return (Number(saldoinicial) + Number(provisionesanio) + Number(bajasoreversiones) + Number(ajustes)).toFixed(2)
  })

  const saldofinalsegunmovimiento_ant = computed(() => {
    return (Number(saldoinicial_ant) + Number(provisionesanio_ant) + Number(bajasoreversiones_ant) + Number(ajustes_ant)).toFixed(2)
  })

  let resta1 = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf.value))
  let resta2 = (Number(saldofinalsegunmovimiento_ant.value) - Number(saldofinalsegunesf_ant.value))
  diferenciaporcuadrar_paciyd = computed(() => ((resta1 === 0) && (resta2 === 0)))
}

const verResultadosMovDos = () => {
  let saldoinicial = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", 'saldoinicial')
  let provisionesdelanio = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", 'provisionesdelanio')
  let bajasoreversiones = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", 'bajasoreversiones')
  let ajustes = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", 'ajustes')

  let saldoinicial_ant = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion_ant", 'saldoinicial_ant', true)
  let provisionesdelanio_ant = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion_ant", 'provisionesdelanio_ant', true)
  let bajasoreversiones_ant = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion_ant", 'bajasoreversiones_ant', true)
  let ajustes_ant = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion_ant", 'ajustes_ant', true)

  const saldofinalsegunesf_ant = computed(() => {
    return Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010313_ant", true)).toFixed(2)
  })

  const saldofinalsegunesf = computed(() => {
    return Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010313")).toFixed(2)
  })

  const saldofinalsegunmovimiento = computed(() => {
    return (Number(saldoinicial) + Number(provisionesdelanio) + Number(bajasoreversiones) + Number(ajustes)).toFixed(2)
  })

  const saldofinalsegunmovimiento_ant = computed(() => {
    return (Number(saldoinicial_ant) + Number(provisionesdelanio_ant) + Number(bajasoreversiones_ant) + Number(ajustes_ant)).toFixed(2)
  })

  let resta1 = (Number(saldofinalsegunmovimiento.value) - Number(saldofinalsegunesf.value))
  let resta2 = (Number(saldofinalsegunmovimiento_ant.value) - Number(saldofinalsegunesf_ant.value))

  console.log('resta1: ', resta1)
  console.log('resta2: ', resta2)

  console.log(Number(saldofinalsegunmovimiento_ant.value))
  console.log(Number(saldofinalsegunesf_ant.value))

  diferenciaporcuadrar_pavndryopei = computed(() => ((resta1 === 0) && (resta2 === 0)))
}

const mov_total_sf = computed(() => {
  return Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sf"))
})

const mov_saldofinalsegunesf_ppye = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10201")).toFixed(2)
})

const mov_total_sf_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos_ant", "mov_total_sf_ant"))
})

const mov_saldofinalsegunesf_ppye_ant = computed(() => {
  return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10201_ant")).toFixed(2)
})

reportStore.updateDiferenciaporcuadrar_ppye(mov_total_sf.value - mov_saldofinalsegunesf_ppye.value)

const verResultadosMovTres = () => {
  diferenciaporcuadrar_ppye = computed(() => (Number(reportStore.diferenciaporcuadrar_ppye) === 0) && (Number(reportStore.diferenciaporcuadrar_ppye_ant) === 0))
}

const verResultadosMovCuatro = () => {
  let mov_saldoinicial_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_saldoinicial_terrenos')
  let mov_compras_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_compras_terrenos')
  let mov_bajasincluida_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_bajasincluida_terrenos')
  let mov_valorrazonable_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_valorrazonable_terrenos')
  let mov_transferencia_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_transferencia_terrenos')
  let mov_otros_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_otros_terrenos')
  let mov_gastosdedepreciacion_terrenos = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_gastosdedepreciacion_terrenos')

  let mov_saldoinicial_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_saldoinicial_edificios')
  let mov_compras_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_compras_edificios')
  let mov_bajasincluida_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_bajasincluida_edificios')
  let mov_valorrazonable_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_valorrazonable_edificios')
  let mov_transferencia_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_transferencia_edificios')
  let mov_otros_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_otros_edificios')
  let mov_gastosdedepreciacion_edificios = reportStore.getSingleReportValue("movpropiedadesdeinversion", 'mov_gastosdedepreciacion_edificios')

  let mov_saldoinicial_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_saldoinicial_terrenos_ant', true)
  let mov_compras_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_compras_terrenos_ant', true)
  let mov_bajasincluida_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_bajasincluida_terrenos_ant', true)
  let mov_valorrazonable_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_valorrazonable_terrenos_ant', true)
  let mov_transferencia_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_transferencia_terrenos_ant', true)
  let mov_otros_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_otros_terrenos_ant', true)
  let mov_gastosdedepreciacion_terrenos_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_gastosdedepreciacion_terrenos_ant', true)

  let mov_saldoinicial_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_saldoinicial_edificios_ant', true)
  let mov_compras_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_compras_edificios_ant', true)
  let mov_bajasincluida_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_bajasincluida_edificios_ant', true)
  let mov_valorrazonable_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_valorrazonable_edificios_ant', true)
  let mov_transferencia_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_transferencia_edificios_ant', true)
  let mov_otros_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_otros_edificios_ant', true)
  let mov_gastosdedepreciacion_edificios_ant = reportStore.getSingleReportValue("movpropiedadesdeinversion_ant", 'mov_gastosdedepreciacion_edificios_ant', true)

  const mov_saldo_edificios_ant = (Number(mov_saldoinicial_edificios_ant) + Number(mov_compras_edificios_ant) + Number(mov_bajasincluida_edificios_ant) + Number(mov_valorrazonable_edificios_ant) + Number(mov_transferencia_edificios_ant) + Number(mov_otros_edificios_ant) + Number(mov_gastosdedepreciacion_edificios_ant)).toFixed(2)
  const mov_saldo_terrenos_ant = (Number(mov_saldoinicial_terrenos_ant) + Number(mov_compras_terrenos_ant) + Number(mov_bajasincluida_terrenos_ant) + Number(mov_valorrazonable_terrenos_ant) + Number(mov_transferencia_terrenos_ant) + Number(mov_otros_terrenos_ant) + Number(mov_gastosdedepreciacion_terrenos_ant)).toFixed(2)

  mov_saldoinicial_edificios = Number(mov_saldo_edificios_ant).toFixed(2)

  const mov_saldo_edificios = (Number(mov_saldoinicial_edificios) + Number(mov_compras_edificios) + Number(mov_bajasincluida_edificios) + Number(mov_valorrazonable_edificios) + Number(mov_transferencia_edificios) + Number(mov_otros_edificios) + Number(mov_gastosdedepreciacion_edificios)).toFixed(2)
  const mov_saldo_terrenos = (Number(mov_saldoinicial_terrenos) + Number(mov_compras_terrenos) + Number(mov_bajasincluida_terrenos) + Number(mov_valorrazonable_terrenos) + Number(mov_transferencia_terrenos) + Number(mov_otros_terrenos) + Number(mov_gastosdedepreciacion_terrenos)).toFixed(2)

  const mov_saldofinalsegunmovimiento = computed(() => {
    return (Number(mov_saldo_edificios) + Number(mov_saldo_terrenos)).toFixed(2)
  })

  const mov_saldofinalsegunmovimiento_ant = computed(() => {
    return (Number(mov_saldo_edificios_ant) + Number(mov_saldo_terrenos_ant)).toFixed(2)
  })

  const mov_saldofinalsegunesf = computed(() => {
    return Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10202")).toFixed(2)
  })

  const mov_saldofinalsegunesf_ant = computed(() => {
    return Number(reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10202_ant", true)).toFixed(2)
  })

  let resta1 = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value))
  let resta2 = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value))

  diferenciaporcuadrar_pdi = computed(() => ((resta1 === 0) && (resta2 === 0)))
}

const verResultadosMovCinco = () => {
  let mov_saldoinicialcosto = reportStore.getSingleReportValue("movintangibles", 'mov_saldoinicialcosto')
  let mov_saldoinicialamortizacionacumulada = reportStore.getSingleReportValue("movintangibles", 'mov_saldoinicialamortizacionacumulada')
  let mov_compras = reportStore.getSingleReportValue("movintangibles", 'mov_compras')
  let mov_bajasincluida = reportStore.getSingleReportValue("movintangibles", 'mov_bajasincluida')
  let mov_otros = reportStore.getSingleReportValue("movintangibles", 'mov_otros')
  let mov_gastosdeamortizacion = reportStore.getSingleReportValue("movintangibles", 'mov_gastosdeamortizacion')

  let mov_saldoinicialcosto_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_saldoinicialcosto_ant', true)
  let mov_saldoinicialamortizacionacumulada_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_saldoinicialamortizacionacumulada_ant', true)
  let mov_compras_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_compras_ant', true)
  let mov_bajasincluida_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_bajasincluida_ant', true)
  let mov_otros_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_otros_ant', true)
  let mov_gastosdeamortizacion_ant = reportStore.getSingleReportValue("movintangibles_ant", 'mov_gastosdeamortizacion_ant', true)

  const mov_saldofinalsegunesf_ant = computed(() => {
    return reportStore.getSingleReportValue("activosnocorrientesifluc_ant", "esf_10204_ant", true)
  })

  const mov_saldofinalsegunesf = computed(() => {
    return reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_10204")
  })

  const mov_saldofinalsegunmovimiento_ant = computed(() => {
    return (Number(mov_saldoinicialcosto_ant) + Number(mov_saldoinicialamortizacionacumulada_ant) + Number(mov_compras_ant) + Number(mov_bajasincluida_ant) + Number(mov_otros_ant) + Number(mov_gastosdeamortizacion_ant)).toFixed(2)
  })

  mov_saldoinicialcosto = Number(mov_saldofinalsegunmovimiento_ant.value)

  const mov_saldofinalsegunmovimiento = computed(() => {
    return (Number(mov_saldofinalsegunmovimiento_ant.value) + Number(mov_saldoinicialamortizacionacumulada) + Number(mov_compras) + Number(mov_bajasincluida) + Number(mov_otros) + Number(mov_gastosdeamortizacion)).toFixed(2)
  })

  let resta1 = (Number(mov_saldofinalsegunmovimiento.value) - Number(mov_saldofinalsegunesf.value))
  let resta2 = (Number(mov_saldofinalsegunmovimiento_ant.value) - Number(mov_saldofinalsegunesf_ant.value))

  diferenciaporcuadrar_intangibles = computed(() => ((resta1 === 0) && (resta2 === 0)))

}

const verResultadosMovSeis = () => {
  diferenciaporcuadrar_ab = computed(() => (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_diferenciaporcuadrar")) === 0) && (Number(reportStore.getSingleReportValue("movactivosbiologicos_ant", "mov_diferenciaporcuadrar_ant", true)) === 0))
}

const verResultadosMovSiete = () => {
  let apid = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_diferenciaporcuadrar"))
  })

  let apid_ant = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal_ant", "mov_apid_diferenciaporcuadrar_ant", true))
  })

  let ppid = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_diferenciaporcuadrar"))
  })

  let ppid_ant = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal_ant", "mov_ppid_diferenciaporcuadrar_ant", true))
  })

  diferenciaporcuadrar_id = computed(() => {
    return ((Number(apid.value) === 0 && Number(apid_ant.value) === 0) && (Number(ppid.value) === 0 && Number(ppid_ant.value) === 0))
  })
}

const verResultadosMovOcho = () => {
  diferenciaporcuadrar_jp = computed(() => (Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_diferenciaporcuadrar")) === 0) && (Number(reportStore.getSingleReportValue("movjubilacionpatronal_ant", "mov_diferenciaporcuadrar_ant", true)) === 0))
}

const verResultadosMovNueve = () => {
  diferenciaporcuadrar_desahucio = computed(() => (Number(reportStore.getSingleReportValue("deshaucio", "mov_diferenciaporcuadrar")) === 0) && (Number(reportStore.getSingleReportValue("deshaucio_ant", "mov_diferenciaporcuadrar_ant", true)) === 0))
}

const verResultadosMovDiez = () => {
  diferenciaporcuadrar_aflp = computed(() => (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_diferenciaporcuadrar")) === 0) && (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo_ant", "mov_diferenciaporcuadrar_ant", true)) === 0))
}


const verResultadosEsfTrece = () => {
  diferenciaperiodoactual.value = ((Number(activosCorrientesParaResumen) + Number(activosNoCorrientesParaResumen)) - (Number(pasivosCorrientesParaResumen) + Number(pasivosNoCorrientesParaResumen) + Number(patrimonioParaResumen))).toFixed(2)

  diferenciaperiodoanterior.value = ((Number(activosCorrientesParaResumenAt) + Number(activosNoCorrientesParaResumenAt)) - (Number(pasivosCorrientesParaResumenAt) + Number(pasivosNoCorrientesParaResumenAt) + Number(patrimonioParaResumenAt))).toFixed(2)
}

const calcularMovCuadre = async () => {
  await verResultadosMovUno()
  await verResultadosMovDos()
  await verResultadosMovTres()
  await verResultadosMovCuatro()
  await verResultadosMovCinco()
  await verResultadosMovSeis()
  await verResultadosMovSiete()
  await verResultadosMovOcho()
  await verResultadosMovNueve()
  await verResultadosMovDiez()
}

const calcularMov = async () => {
  await calcularMovCuadre()
  movCuadre = computed(() => {
    return diferenciaporcuadrar_desahucio.value &&
      diferenciaporcuadrar_aflp.value &&
      diferenciaporcuadrar_jp.value &&
      diferenciaporcuadrar_id.value &&
      diferenciaporcuadrar_ab.value &&
      diferenciaporcuadrar_intangibles.value &&
      diferenciaporcuadrar_pdi.value &&
      diferenciaporcuadrar_ppye.value &&
      diferenciaporcuadrar_paciyd.value &&
      diferenciaporcuadrar_pavndryopei.value
  })
}

// RESUMEN ERI
const calcularSumaGrupo = (grupo, reportData, prefix = "eri_", periodoAnterior = false) => {
  return grupo.reduce((total, sufijo) => {
    const valor = Number(reportData[`${prefix}${sufijo}${periodoAnterior ? "_ant" : ""}`]) || 0

    return total + valor
  }, 0).toFixed(2)
}

let resultadoseri = ref(0)
let resultadoseri_ant = ref(0)
let resultadosParaResumen, resultadosParaResumenAt
let ingresosParaResumen, ingresosParaResumenAt
let costosParaResumen, costosParaResumenAt
let gastosDeVentasParaResumen, gastosDeVentasParaResumenAt
let gastosAdministrativosParaResumen, gastosAdministrativosParaResumenAt
let gastosFinancierosParaResumen, gastosFinancierosParaResumenAt
let otrosGastosParaResumen, otrosGastosParaResumenAt
let otrosIngresosParaResumen, otrosIngresosParaResumenAt
let resultadosSegunESFParaResumen, resultadosSegunESFParaResumenAt
let gastoscalculados, gastoscalculados_ant
let totalimpuestos, totalimpuestos_ant
let diferenciaresultadoperiodoactual = ref(0)
const diferenciaresultadoperiodoanterior = ref(0)

const calcular607 = () => {
  gastoscalculados = (Number(costosParaResumen) + Number(gastosDeVentasParaResumen) + Number(gastosAdministrativosParaResumen.value) + Number(gastosFinancierosParaResumen) + Number(otrosGastosParaResumen))
  totalimpuestos = Number(impuestosganancias.value.participacion_601) + Number(impuestosganancias.value.impuestos_603) + Number(impuestosganancias.value.impuestos_605) + Number(impuestosganancias.value.impuestos_606)

  eri_607.value = ((Number(ingresosParaResumen) - Number(gastoscalculados)) + (Number(otrosIngresosParaResumen) + Number(totalimpuestos))).toFixed(2)

  gastoscalculados_ant = (Number(costosParaResumenAt) + Number(gastosDeVentasParaResumenAt) + Number(gastosAdministrativosParaResumenAt.value) + Number(gastosFinancierosParaResumenAt) + Number(otrosGastosParaResumenAt))
  totalimpuestos_ant = Number(impuestosganancias.value.participacion_601_ant) + Number(impuestosganancias.value.impuestos_603_ant) + Number(impuestosganancias.value.impuestos_605_ant) + Number(impuestosganancias.value.impuestos_606_ant)

  eri_607_ant.value = ((Number(ingresosParaResumenAt) - Number(gastoscalculados_ant)) + (Number(otrosIngresosParaResumenAt) + Number(totalimpuestos_ant))).toFixed(2)
}

const calcularResumenesERI = () => {
  // RESULTADOS
  const sufijosResultados = ["604", "605", "606"]

  resultadosParaResumen = sufijosResultados
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("resultadosifluc")[`eri_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  resultadosParaResumenAt = sufijosResultados
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("resultadosifluc_ant", true)[`eri_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  // INGRESOS
  const sufijosIngresos = [
    "40101",
    "40102",
    "40103",
    "40104",
    "40105",
    "40106",
    "40107",
    "40108",
    "40109",
    "40110",
    "40112",
    "40113",
    "40114",
    "40115",
    "40116",
  ]

  ingresosParaResumen = sufijosIngresos
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("ingresosifluc")[`eri_${sufijo}`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  ingresosParaResumenAt = sufijosIngresos
    .reduce((total, sufijo) => {
      const valor = Number(reportStore.getReportData("ingresosifluc_ant", true)[`eri_${sufijo}_ant`]) || 0

      return total + valor
    }, 0)
    .toFixed(2)

  resultadoseri.value = computed(() => resultadosParaResumen)
  resultadoseri_ant.value = computed(() => resultadosParaResumenAt)

  // COSTOS
  const sufijosCostosGrupos = [
    ["5010101", "5010102", "5010103", "5010104", "5010105", "5010106", "5010107", "5010108", "5010109", "5010110", "5010111", "5010112"],
    ["5010201", "5010202"],
    ["5010301", "5010302"],
    ["5010401", "5010402", "5010403", "5010404", "5010405", "5010406", "5010407", "5010408"],
    ["5010501"],
  ]

  costosParaResumen = sufijosCostosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("costosifluc")))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  costosParaResumenAt = sufijosCostosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("costosifluc_ant", true), "eri_", true))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  // GASTOS DE VENTAS
  const sufijosGastosDeVentasGrupos = [
    ["5020101", "5020102", "5020103", "5020104", "5020105", "5020106", "5020107", "5020108", "5020109", "5020110", "5020111", "5020112", "5020113", "5020114", "5020115", "5020116", "5020117", "5020118", "5020119"],
    ["502012001", "502012002", "502012003"],
    ["502012101", "502012102"],
    ["502012201", "502012202", "502012203", "502012204", "502012205", "502012206", "502012207"],
    ["502012301", "502012302", "502012303"],
    ["5020124", "5020125", "5020126", "5020127", "5020128"],
  ]

  gastosDeVentasParaResumen = sufijosGastosDeVentasGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosdeventasifluc")))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  gastosDeVentasParaResumenAt = sufijosGastosDeVentasGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosdeventasifluc_ant", true), "eri_", true))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  // GASTOS ADMINISTRATIVOS
  const sufijosGastosAdministrativosGrupos = [
    [
      "5020201",
      "5020202",
      "5020203",
      "5020204",
      "5020205",
      "5020206",
      "5020207",
      "5020208",
      "5020209",
      "5020210",
      "5020211",
      "5020212",
      "5020213",
      "5020214",
      "5020215",
      "5020216",
      "5020217",
      "5020218",
      "5020219",
      "5020220",
      "5020221",
      "5020222",
      "5020223",
      "5020224",
      "5020225",
      "5020226",
      "5020227",
      "5020228",
      "5020229",
    ],
    ["502022101", "502022102", "502022103"],
    ["502022201", "502022202"],
    ["502022301", "502022302", "502022303", "502022304", "502022305", "502022306", "502022307"],
    ["502022401", "502022402", "502022403"],
    ["5020225", "5020226", "5020227", "5020228", "5020229"],
  ]

  gastosAdministrativosParaResumen = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2)
  })

  gastosAdministrativosParaResumenAt = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosadministrativosifluc_ant", "eri_50202_ant", true)).toFixed(2)
  })

  /*
  gastosAdministrativosParaResumen = sufijosGastosAdministrativosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosadministrativosifluc")))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  gastosAdministrativosParaResumenAt = sufijosGastosAdministrativosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosadministrativosifluc_ant", true), "eri_", true))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)
  */
  // GASTOS FINANCIEROS
  const sufijosGastosFinancierosGrupos = [
    ["502030101", "502030102", "502030103", "502030104"],
    ["50203020101", "50203020103", "50203020104", "50203020105", "50203020106"],
    ["502030301", "502030302", "502030303", "502030304", "502030305", "502030306", "502030307", "502030308"],
    ["502030401", "502030402", "502030403", "502030404"],
    ["502030501", "502030502", "502030503", "502030504"],
    ["5020306", "5020307", "5020308", "5020309", "5020310", "5020311", "5020312"],
  ]

  gastosFinancierosParaResumen = sufijosGastosFinancierosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosfinancierosifluc")))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  gastosFinancierosParaResumenAt = sufijosGastosFinancierosGrupos
    .map(grupo => calcularSumaGrupo(grupo, reportStore.getReportData("gastosfinancierosifluc_ant", true), "eri_", true))
    .reduce((total, sumaGrupo) => total + Number(sumaGrupo), 0)
    .toFixed(2)

  // OTROS GASTOS
  const sufijosOtrosGastos = ["5020401", "5020402"]

  otrosGastosParaResumen = calcularSumaGrupo(
    sufijosOtrosGastos,
    reportStore.getReportData("otrosgastosifluc"),
  )

  otrosGastosParaResumenAt = calcularSumaGrupo(
    sufijosOtrosGastos,
    reportStore.getReportData("otrosgastosifluc_ant", true),
    "eri_",
    true,
  )

  // OTROS INGRESOS
  const sufijosOtrosIngresos = ["40301", "40302", "40303"]

  otrosIngresosParaResumen = calcularSumaGrupo(
    sufijosOtrosIngresos,
    reportStore.getReportData("otrosingresosifluc"),
  )

  otrosIngresosParaResumenAt = calcularSumaGrupo(
    sufijosOtrosIngresos,
    reportStore.getReportData("otrosingresosifluc_ant", true),
    "eri_",
    true,
  )

  const sufijosResultadosSegunESF = ["30701", "30702"]

  resultadosSegunESFParaResumen = calcularSumaGrupo(
    sufijosResultadosSegunESF,
    reportStore.getReportData("patrimonioifluc"),
    "esf_",
  )

  resultadosSegunESFParaResumenAt = calcularSumaGrupo(
    sufijosResultadosSegunESF,
    reportStore.getReportData("patrimonioifluc_ant", true),
    "esf_",
    true,
  )

  gastoscalculados = (Number(costosParaResumen) + Number(gastosDeVentasParaResumen) + Number(gastosAdministrativosParaResumen.value) + Number(gastosFinancierosParaResumen) + Number(otrosGastosParaResumen))
  totalimpuestos = Number(impuestosganancias.value.participacion_601) + Number(impuestosganancias.value.impuestos_603) + Number(impuestosganancias.value.impuestos_605) + Number(impuestosganancias.value.impuestos_606)

  eri_607.value = ((Number(ingresosParaResumen) - Number(gastoscalculados)) + (Number(otrosIngresosParaResumen) + Number(totalimpuestos))).toFixed(2)

  gastoscalculados_ant = (Number(costosParaResumenAt) + Number(gastosDeVentasParaResumenAt) + Number(gastosAdministrativosParaResumenAt.value) + Number(gastosFinancierosParaResumenAt) + Number(otrosGastosParaResumenAt))
  totalimpuestos_ant = Number(impuestosganancias.value.participacion_601_ant) + Number(impuestosganancias.value.impuestos_603_ant) + Number(impuestosganancias.value.impuestos_605_ant) + Number(impuestosganancias.value.impuestos_606_ant)

  eri_607_ant.value = ((Number(ingresosParaResumenAt) - Number(gastoscalculados_ant)) + (Number(otrosIngresosParaResumenAt) + Number(totalimpuestos_ant))).toFixed(2)

  diferenciaresultadoperiodoactual.value = (Number(eri_607.value) - Number(resultadosSegunESFParaResumen)).toFixed(2)

  diferenciaresultadoperiodoanterior.value = (Number(eri_607_ant.value) - Number(resultadosSegunESFParaResumenAt)).toFixed(2)
}

calcularResumenesERI()

const calcularEriCuadre = () => {
  calcular607()
  calcularResumenesERI()
  eriCuadre.value = (Number(diferenciaresultadoperiodoactual.value) === 0)
  reportStore.updateEriCuadre(eriCuadre.value)
}

const pat_307 = ref(0)
const pat_307_ant =  ref(0)

gastos.value.otro_403 = computed(() => reportStore.getReportData("otrosingresosifluc").eri_403)
gastos.value.otro_403_ant = computed(() => reportStore.getReportData("otrosingresosifluc_ant", true).eri_403_ant)

pat_307.value = computed(() => {
  return Number(patrimonioParaResumenAt).toFixed(2) || 0
})

pat_307_ant.value = computed(() => {
  return Number(patrimonioParaResumen).toFixed(2) || 0
})

watch(resultadoseri, () => {
  emit('totalResultadosEriActual', resultadoseri.value)
}, { immediate: true })

watch(resultadoseri_ant, () => {
  emit('totalResultadosEriAnterior', resultadoseri_ant.value)
}, { immediate: true })

watch(pat_307, () => {
  emit('pat_307_esf', pat_307.value)
}, { immediate: true })

watch(pat_307_ant, () => {
  emit('pat_307_esf_ant', pat_307_ant.value)
}, { immediate: true })

// RESUMEN ECP

const esf_31 = computed(() => Number(reportStore.getSingleReportValue("patrimonioifluc", "esf_31")).toFixed(2))
const esf_31_ant = computed(() => Number(reportStore.getSingleReportValue("patrimonioifluc_ant", "esf_31_ant", true)).toFixed(2))

/* saldos iniciales */
const dif_301_si = computed(() => ((patrimonio.value.pat_301) - (patrimonio.value.pat_99_301)).toFixed(2))
const dif_302_si = computed(() => ((patrimonio.value.pat_302) - (patrimonio.value.pat_99_302)).toFixed(2))
const dif_303_si = computed(() => ((patrimonio.value.pat_303) - (patrimonio.value.pat_99_303)).toFixed(2))
const dif_30401_si = computed(() => ((patrimonio.value.pat_30401) - (patrimonio.value.pat_99_30401)).toFixed(2))
const dif_30402_si = computed(() => ((patrimonio.value.pat_30402) - (patrimonio.value.pat_99_30402)).toFixed(2))
const dif_30501_si = computed(() => ((patrimonio.value.pat_30501) - (patrimonio.value.pat_99_30501)).toFixed(2))
const dif_30502_si = computed(() => ((patrimonio.value.pat_30502) - (patrimonio.value.pat_99_30502)).toFixed(2))
const dif_30503_si = computed(() => ((patrimonio.value.pat_30503) - (patrimonio.value.pat_99_30503)).toFixed(2))
const dif_30504_si = computed(() => ((patrimonio.value.pat_30504) - (patrimonio.value.pat_99_30504)).toFixed(2))
const dif_30601_si = computed(() => ((patrimonio.value.pat_30601) - (patrimonio.value.pat_99_30601)).toFixed(2))
const dif_30602_si = computed(() => ((patrimonio.value.pat_30602) - (patrimonio.value.pat_99_30602)).toFixed(2))
const dif_30603_si = computed(() => ((patrimonio.value.pat_30603) - (patrimonio.value.pat_99_30603)).toFixed(2))
const dif_30604_si = computed(() => ((patrimonio.value.pat_30604) - (patrimonio.value.pat_99_30604)).toFixed(2))
const dif_30605_si = computed(() => ((patrimonio.value.pat_30605) - (patrimonio.value.pat_99_30605)).toFixed(2))
const dif_30606_si = computed(() => ((patrimonio.value.pat_30606) - (patrimonio.value.pat_99_30606)).toFixed(2))
const dif_30607_si = computed(() => ((patrimonio.value.pat_30607) - (patrimonio.value.pat_99_30607)).toFixed(2))
const dif_30701_si = computed(() => ((patrimonio.value.pat_30701) - (patrimonio.value.pat_99_30701)).toFixed(2))
const dif_30702_si = computed(() => ((patrimonio.value.pat_30702) - (patrimonio.value.pat_99_30702)).toFixed(2))
const dif_31_si = computed(() => ((esf_31.value) - (patrimonio.value.pat_99_31)).toFixed(2))

/* saldos finales */
const dif_301_sf = computed(() => ((patrimonio.value.pat_301_ant) - (patrimonio.value.pat_9901_301)).toFixed(2))
const dif_302_sf = computed(() => ((patrimonio.value.pat_302_ant) - (patrimonio.value.pat_9901_302)).toFixed(2))
const dif_303_sf = computed(() => ((patrimonio.value.pat_303_ant) - (patrimonio.value.pat_9901_303)).toFixed(2))
const dif_30401_sf = computed(() => ((patrimonio.value.pat_30401_ant) - (patrimonio.value.pat_9901_30401)).toFixed(2))
const dif_30402_sf = computed(() => ((patrimonio.value.pat_30402_ant) - (patrimonio.value.pat_9901_30402)).toFixed(2))
const dif_30501_sf = computed(() => ((patrimonio.value.pat_30501_ant) - (patrimonio.value.pat_9901_30501)).toFixed(2))
const dif_30502_sf = computed(() => ((patrimonio.value.pat_30502_ant) - (patrimonio.value.pat_9901_30502)).toFixed(2))
const dif_30503_sf = computed(() => ((patrimonio.value.pat_30503_ant) - (patrimonio.value.pat_9901_30503)).toFixed(2))
const dif_30504_sf = computed(() => ((patrimonio.value.pat_30504_ant) - (patrimonio.value.pat_9901_30504)).toFixed(2))
const dif_30601_sf = computed(() => ((patrimonio.value.pat_30601_ant) - (patrimonio.value.pat_9901_30601)).toFixed(2))
const dif_30602_sf = computed(() => ((patrimonio.value.pat_30602_ant) - (patrimonio.value.pat_9901_30602)).toFixed(2))
const dif_30603_sf = computed(() => ((patrimonio.value.pat_30603_ant) - (patrimonio.value.pat_9901_30603)).toFixed(2))
const dif_30604_sf = computed(() => ((patrimonio.value.pat_30604_ant) - (patrimonio.value.pat_9901_30604)).toFixed(2))
const dif_30605_sf = computed(() => ((patrimonio.value.pat_30605_ant) - (patrimonio.value.pat_9901_30605)).toFixed(2))
const dif_30606_sf = computed(() => ((patrimonio.value.pat_30606_ant) - (patrimonio.value.pat_9901_30606)).toFixed(2))
const dif_30607_sf = computed(() => ((patrimonio.value.pat_30607_ant) - (patrimonio.value.pat_9901_30607)).toFixed(2))
const dif_30701_sf = computed(() => ((patrimonio.value.pat_30701_ant) - (patrimonio.value.pat_9901_30701)).toFixed(2))
const dif_30702_sf = computed(() => ((patrimonio.value.pat_30702_ant) - (patrimonio.value.pat_9901_30702)).toFixed(2))
const dif_31_sf = computed(() => ((esf_31_ant.value) - (patrimonio.value.pat_9901_31)).toFixed(2))

watch(dif_301_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia301_SI', dif_301_si.value)
}, { immediate: true })

watch(dif_302_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia302_SI', dif_302_si.value)
}, { immediate: true })

watch(dif_303_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia303_SI', dif_303_si.value)
}, { immediate: true })

watch(dif_30401_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30401_SI', dif_30401_si.value)
}, { immediate: true })

watch(dif_30402_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30402_SI', dif_30402_si.value)
}, { immediate: true })

watch(dif_30501_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30501_SI', dif_30501_si.value)
}, { immediate: true })

watch(dif_30502_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30502_SI', dif_30502_si.value)
}, { immediate: true })

watch(dif_30503_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30503_SI', dif_30503_si.value)
}, { immediate: true })

watch(dif_30504_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30504_SI', dif_30504_si.value)
}, { immediate: true })

watch(dif_30601_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30601_SI', dif_30601_si.value)
}, { immediate: true })

watch(dif_30602_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30602_SI', dif_30602_si.value)
}, { immediate: true })

watch(dif_30603_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30603_SI', dif_30603_si.value)
}, { immediate: true })

watch(dif_30604_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30604_SI', dif_30604_si.value)
}, { immediate: true })

watch(dif_30605_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30605_SI', dif_30605_si.value)
}, { immediate: true })

watch(dif_30606_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30606_SI', dif_30606_si.value)
}, { immediate: true })

watch(dif_30607_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30607_SI', dif_30607_si.value)
}, { immediate: true })

watch(dif_30701_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30701_SI', dif_30701_si.value)
}, { immediate: true })

watch(dif_30702_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30702_SI', dif_30702_si.value)
}, { immediate: true })

watch(dif_31_si, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia31_SI', dif_31_si.value)
}, { immediate: true })

watch(dif_301_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia301_SF', dif_301_sf.value)
}, { immediate: true })

watch(dif_302_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia302_SF', dif_302_sf.value)
}, { immediate: true })

watch(dif_303_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia303_SF', dif_303_sf.value)
}, { immediate: true })

watch(dif_30401_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30401_SF', dif_30401_sf.value)
}, { immediate: true })

watch(dif_30402_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30402_SF', dif_30402_sf.value)
}, { immediate: true })

watch(dif_30501_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30501_SF', dif_30501_sf.value)
}, { immediate: true })

watch(dif_30502_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30502_SF', dif_30502_sf.value)
}, { immediate: true })

watch(dif_30503_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30503_SF', dif_30503_sf.value)
}, { immediate: true })

watch(dif_30504_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30504_SF', dif_30504_sf.value)
}, { immediate: true })

watch(dif_30601_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30601_SF', dif_30601_sf.value)
}, { immediate: true })

watch(dif_30602_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30602_SF', dif_30602_sf.value)
}, { immediate: true })

watch(dif_30603_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30603_SF', dif_30603_sf.value)
}, { immediate: true })

watch(dif_30604_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30604_SF', dif_30604_sf.value)
}, { immediate: true })

watch(dif_30605_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30605_SF', dif_30605_sf.value)
}, { immediate: true })

watch(dif_30606_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30606_SF', dif_30606_sf.value)
}, { immediate: true })

watch(dif_30607_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30607_SF', dif_30607_sf.value)
}, { immediate: true })

watch(dif_30701_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30701_SF', dif_30701_sf.value)
}, { immediate: true })

watch(dif_30702_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia30702_SF', dif_30702_sf.value)
}, { immediate: true })

watch(dif_31_sf, () => {
  // eslint-disable-next-line vue/custom-event-name-casing
  emit('diferencia31_SF', dif_31_sf.value)
}, { immediate: true })

const reporte = ref(false)

const sellarencabezado = () => {
  empresareportecargado.value = (reportStore.getReportData("empresareporteifluc").nombre)
  periodoreportecargado.value = (reportStore.getReportData("periodosreporteifluc").periodo)
  if (empresareportecargado.value !== null && periodoreportecargado.value !== null) {
    reporte.value = true
  }
}

const esfEventClick = () => {
  calcularEsfCuadre()
}

const eriEventClick = () => {
  calcularEriCuadre()
  efeCuadre.value = calcularEfeCuadre()
}

const ecpEventClick = () => {
  calcularEcpCuadre()
}

const movEventClick = () => {
  calcularMov()
  efeCuadre.value = calcularEfeCuadre()
}

let efeConciliacionValid = true
let efeActividadesFinanciamiento = true

const efeEventClick = () => {
  efeCuadre.value = calcularEfeCuadre()

  efe_9820.value = Number(calcular_9820()).toFixed(2)
  efe_9501.value = Number(calcular_9501()).toFixed(2)

  efeConciliacionValid = computed(() => {
    return ((Number(efe_9820.value) - Number(efe_9501.value)) == 0)
  })

  efe_9505.value = Number(calcular_9505()).toFixed(2)
  efe_9506.value = Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10101_ant", true)).toFixed(2)
  efe_9507.value = Number(calcular_9507())

  const esf_10101 = Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101")).toFixed(2)

  efeActividadesFinanciamiento = computed(() => {
    return ((Number(efe_9507.value) - Number(esf_10101)) == 0)
  })
}

const efeDFEventClick = () => {

}


function openAC() {
  panel.value = ['ac', 'anc', 'pc', 'pnc', 'pat']
}
function closePanels() {
  panel.value = null
  panel2.value = null
  panel3.value = null
  panel4.value = null
  panel5.value = null
}


const turboNotasEventClick = () => {
  console.log('se ha hecho click en TurboNotas tab')
}

const efeDinamicEventClick = () => {
  efeCuadre.value = calcularEfeCuadre()
}

onMounted(() => {
  const reportStore = useReportStore()

  const pat = reportStore.getReportData('patrimonioifluc')

  resultadosefe.value.esf_307 = pat?.esf_307 || 0

  const pat_ant = reportStore.getReportData('patrimonioifluc_ant', true)

  patrimonio.value.pat_ant = pat_ant?.esf_3_ant || 0
  patrimonio.value.pat_301_ant = pat_ant?.esf_301_ant || 0
  patrimonio.value.pat_302_ant = pat_ant?.esf_302_ant || 0
  patrimonio.value.pat_303_ant = pat_ant?.esf_303_ant || 0
  patrimonio.value.pat_30401_ant = pat_ant?.esf_30401_ant || 0
  patrimonio.value.pat_30402_ant = pat_ant?.esf_30402_ant || 0
  patrimonio.value.pat_30501_ant = pat_ant?.esf_30501_ant || 0
  patrimonio.value.pat_30502_ant = pat_ant?.esf_30502_ant || 0
  patrimonio.value.pat_30503_ant = pat_ant?.esf_30503_ant || 0
  patrimonio.value.pat_30504_ant = pat_ant?.esf_30504_ant || 0
  patrimonio.value.pat_30601_ant = pat_ant?.esf_30601_ant || 0
  patrimonio.value.pat_30602_ant = pat_ant?.esf_30602_ant || 0
  patrimonio.value.pat_30603_ant = pat_ant?.esf_30603_ant || 0
  patrimonio.value.pat_30604_ant = pat_ant?.esf_30604_ant || 0
  patrimonio.value.pat_30605_ant = pat_ant?.esf_30605_ant || 0
  patrimonio.value.pat_30606_ant = pat_ant?.esf_30606_ant || 0
  patrimonio.value.pat_30607_ant = pat_ant?.esf_30607_ant || 0
  patrimonio.value.pat_307_ant = pat_ant?.esf_307_ant || 0
  resultadosefe.value.esf_307_ant = pat_ant?.esf_307_ant || 0

  const costosData = reportStore.getReportData('costosifluc')

  costos.value.cos_501 = costosData?.eri_501 || 0

  const costosDataAnt = reportStore.getReportData('costosifluc_ant', true)

  costos.value.cos_501_ant = costosDataAnt?.eri_501_ant || 0

  const ingresosData = reportStore.getReportData('ingresosifluc')

  ingresos.value.ing_401 = ingresosData?.eri_401 || 0

  const ingresosDataAnt = reportStore.getReportData('ingresosifluc_ant', true)

  ingresos.value.ing_401_ant = ingresosDataAnt?.eri_401_ant || 0

  const gastosDeVentas = reportStore.getReportData('gastosdeventasifluc')

  gastos.value.gas_50201 = gastosDeVentas?.eri_50201 || 0

  const gastosDeVentasAnt = reportStore.getReportData('gastosdeventasifluc_ant', true)

  gastos.value.gas_50201_ant = gastosDeVentasAnt?.eri_50201_ant || 0

  const otrosIngresos = reportStore.getReportData('otrosingresosifluc')

  otrosingresos.value.otro_403 = otrosIngresos?.eri_403 || 0

  const otrosIngresosAnt = reportStore.getReportData('otrosingresosifluc_ant', true)

  otrosingresos.value.otro_403_ant = otrosIngresosAnt?.eri_403_ant || 0

  efe_9501.value = calcular_9501()
  efe_9506.value = Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10101"))
  efe_9507.value = Number(calcular_9507()).toFixed(2)
  efe_9820.value = calcular_9820()
  efe_9507_ant.value = calcular_9507_ant()
  efe_9820_ant.value = calcular_9820_ant()


  esfEventClick()
  eriEventClick()
  ecpEventClick()
  movEventClick()
  efeEventClick()
  calcular607()
  calcularEcpCuadre()
  calcularEsfCuadre()
  calcularEriCuadre()
  calcularMov()
})
</script>

<template>
  <div>
    <!-- OLD - EN CASO DE CREAR REPORTES O CAMBIAR EMPRESA Y PERIODO DESDE EL HEADER DEL REPORTE -->
    <VRow
      v-if="!reporte"
      class="mb-5 bg-primary ml-1 mr-1"
    >
      <VCol
        cols="12"
        md="2"
      >
        <VCardTitle
          class="text-secondary"
          style="font-size:.800em"
        >
          CLIENTE:
        </VCardTitle>
      </VCol>
      <VCol
        cols="12"
        md="5"
      >
        <VRow>
          <!-- 👉 Empresa -->
          <VCol cols="12">
            <VSelect
              v-model="empresa"
              hint="Selecciona la empresa"
              persistent-hint
              class="mt-3"
              label="Empresa"
              :items="empresas"
              return-object
              readonly
              loading
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol
        cols="12"
        md="2"
      >
        <VCardTitle
          class="text-secondary"
          style="font-size:.800em"
        >
          PERIODO
        </VCardTitle>
      </VCol>
      <VCol
        cols="12"
        md="3"
      >
        <!-- 👉 Periodo -->
        <VCol cols="12">
          <VSelect
            v-model="periodo"
            hint="el periodo"
            persistent-hint
            label="Periodo"
            :items="periodos"
            return-object
            readonly
            loading
          />
        </VCol>
      </VCol>
    </VRow>
    <!-- EMPRESA Y PERIODO DEL REPORTE -->
    <VRow
      v-else
      class="mb-5 bg-primary ml-1 mr-1"
    >
      <VCol
        cols="12"
        md="2"
      >
        <VCardTitle
          class="text-secondary"
          style="font-size:.800em"
        >
          CLIENTE:
        </VCardTitle>
      </VCol>
      <VCol
        cols="12"
        md="5"
      >
        <VRow>
          <!-- 👉 Empresa -->
          <VCol cols="12">
            <VTextField
              v-model="empresareportecargado"
              class="mt-3"
              label="empresa"
              disabled
            />
          </VCol>
        </VRow>
      </VCol>
      <VCol
        cols="12"
        md="2"
      >
        <VCardTitle
          class="text-secondary"
          style="font-size:.800em"
        >
          PERIODO
        </VCardTitle>
      </VCol>
      <VCol
        cols="12"
        md="3"
      >
        <!-- 👉 Periodo -->
        <VCol cols="12">
          <VTextField
            v-model="periodoreportecargado"
            label="periodo"
            disabled
          />
        </VCol>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <!-- 👉 Form with Tabs -->
        <VTabs v-model="tab">
          <!-- ESF TAB MAIN -->
          <!-- MAPEO 1 -->
          <VTab
            value="mapeo1"
            @click="turboNotasEventClick"
          >
            MAPEO 101
          </VTab>
          <!-- ESF TAB MAIN -->
          <VTab
            value="esf"
            @click="esfEventClick"
          >
            ESF
            <VIcon
              v-if="esfCuadre"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <!-- ERI TAB MAIN -->
          <VTab
            value="eri"
            @click="eriEventClick"
          >
            ERI
            <VIcon
              v-if="eriCuadre"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <!--
            MOV TAB MAIN
            <VTab
            value="mov"
            @click="movEventClick"
            >
            MOV
            <VIcon
            v-if="movCuadre"
            icon="tabler-check"
            color="success"
            />
            <VIcon
            v-else
            icon="tabler-alert-circle"
            color="error"
            />
            </VTab>
          -->
          <!-- ECP TAB MAIN -->
          <VTab
            value="ecp"
            @click="ecpEventClick"
          >
            ECP
            <VIcon
              v-if="ecpCuadre"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <!-- EFE TAB MAIN -->
          <VTab
            value="efe-md"
            @click="efeEventClick"
          >
            EFE
            <VIcon
              v-if="efeCuadre"
              icon="tabler-check"
              color="success"
            />
            <VIcon
              v-else
              icon="tabler-alert-circle"
              color="error"
            />
          </VTab>
          <!--
            TURBO NOTAS
            <VTab
            value="turbonotas"
            @click="turboNotasEventClick"
            >
            TURBO NOTAS
            </VTab>

            <VTab
            v-if="turbonotas.id"
            value="informessocietarios"
            @click="turboNotasEventClick"
            >
            INFORMES SOCIETARIOS
            </VTab>
          -->
          <!--
            EFE DYNAMIC FLOW TAB MAIN
            <VTab
            value="dynamic-flow"
            @click="efeDinamicEventClick"
            v-if="efeCuadre"
            >
            DYNAMIC-FLOW
            <VIcon
            v-if="efeCuadre"
            icon="tabler-check"
            color="success"
            />
            <VIcon
            v-else
            icon="tabler-alert-circle"
            color="error"
            />
            </VTab>
          -->
        </VTabs>

        <VDivider />

        <VCard flat>
          <VCardText>
            <VWindow v-model="tab">
              <!-- MAPEO 1 -->
              <VWindowItem value="mapeo1">
                <h3
                  class="ml-4"
                  style="color:#477130"
                >
                  Si deseas IMPORTAR mediante EXCEL la información del Estado de Situación Financiera (ESF) y Estado de Resultado Integral (ERI) utilice esta opción. Caso contrario, puede ingresar el ESF y ERI la información manualmente.
                </h3>
                <VDivider />
                <VExpansionPanels
                  v-model="panel7"
                  eager
                >
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      DATOS PERIODO ACTUAL
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMapeo1 />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      DATOS PERIODO ANTERIOR
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMapeo101PA />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                </VExpansionPanels>
              </VWindowItem>
              <!-- ESF TAB MAIN -->
              <VWindowItem value="esf">
                <VExpansionPanels
                  v-model="panel"
                  eager
                  @change="onPanelChange"
                >
                  <!-- SECTION Activos Corrientes -->
                  <VExpansionPanel
                    id="activoscorrientes"
                    :key="0"
                    :value="ac"
                    eager
                  >
                    <VExpansionPanelTitle
                      disable-icon-rotate
                      @click="esfEventClick"
                    >
                      ACTIVOS CORRIENTES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtActivosCorrientes
                        :data="activos"
                        :activoscorrientes="activoscorrientes"
                      />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Activos Corrientes -->

                  <!-- SECTION Activos No Corrientes -->
                  <VExpansionPanel
                    id="activosnocorrientes"
                    :key="1"
                    :value="anc"
                    eager
                  >
                    <VExpansionPanelTitle
                      @click="esfEventClick"
                    >
                      ACTIVOS NO CORRIENTES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtActivosNoCorrientes
                        :data="activos"
                        :activosnocorrientes="activosnocorrientes"
                      />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Activos No Corrientes -->

                  <!-- SECTION PASIVOS CORRIENTES -->
                  <VExpansionPanel
                    :key="2"
                    :value="pc"
                    eager
                  >
                    <VExpansionPanelTitle
                      id="pasivoscorrientes"
                      @click="esfEventClick"
                    >
                      PASIVOS CORRIENTES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtPasivosCorrientes
                        :data="pasivos"
                        :pasivoscorrientes="pasivoscorrientes"
                      />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PASIVOS CORRIENTES -->

                  <!-- SECTION PASIVOS NO CORRIENTES -->
                  <VExpansionPanel
                    :key="3"
                    :value="pnc"
                    eager
                  >
                    <VExpansionPanelTitle
                      id="pasivosnocorrientes"
                      @click="esfEventClick"
                    >
                      PASIVOS NO CORRIENTES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtPasivosNoCorrientes
                        :data="pasivos"
                        :pasivosnocorrientes="pasivosnocorrientes"
                      />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PASIVOS NO CORRIENTES -->

                  <!-- SECTION Patrimonio -->
                  <VExpansionPanel
                    :key="4"
                    :value="pat"
                    eager
                  >
                    <VExpansionPanelTitle
                      id="patrimonio"
                      @click="esfEventClick"
                    >
                      PATRIMONIO
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtPatrimonio :data="patrimonio" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Patrimonio -->

                  <!-- Diálogo para Resumen ESF -->
                  <VDialog
                    v-model="mostrarResumenEsf"
                    max-width="1000px"
                  >
                    <VCard>
                      <VCardTitle class="headline">
                        Resumen ESF
                      </VCardTitle>
                      <VCardActions style="position: absoluteright: 10px">
                        <VSpacer />
                        <VBtn
                          color="primary"
                          text
                          @click="mostrarResumenEsf = false"
                        >
                          Cerrar
                        </VBtn>
                      </VCardActions>
                      <VCardText>
                        <VCardText class="add-products-form">
                          <div
                            class="ma-sm-4 mt-10"
                          >
                            <h3 class="pb-5 pt-5 text-primary text-center">
                              RESUMEN
                            </h3>
                            <!-- eslint-disable vue/no-mutating-props -->
                            <div class="add-products-header mb-2 d-none d-md-flex">
                              <VRow>
                                <VCol
                                  cols="12"
                                  md="12"
                                  style="font-size:8px"
                                >
                                  <VRow class="font-weight-medium px-4 mb-2">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span
                                        class="text-sm text-primary"
                                        style="font-size:0.900rem"
                                      >RESUMEN</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <span
                                        class="text-sm text-primary"
                                        style="font-size:0.900rem"
                                      >PERÍODO ACTUAL</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <span
                                        class="text-sm text-primary"
                                        style="font-size:0.900rem"
                                      >PERIODO ANTERIOR</span>
                                    </VCol>
                                  </VRow>

                                  <VDivider />

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">ACTIVOS CORRIENTES</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="activosCorrientesParaResumen"
                                        label="Activos Corrientes Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="activosCorrientesParaResumenAt"
                                        label="Activos Corrientes Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">ACTIVOS NO CORRIENTES</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="activosNoCorrientesParaResumen"
                                        label="Activos No Corrientes Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="activosNoCorrientesParaResumenAt"
                                        label="Activos No Corrientes Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">ACTIVOS</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="totalactivosactual"
                                        label="Activos Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="totalactivosanterior"
                                        label="Activos Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">PASIVOS CORRIENTES</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="pasivosCorrientesParaResumen"
                                        label="Pasivos Corrientes Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="pasivosCorrientesParaResumenAt"
                                        label="Pasivos Corrientes Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">PASIVOS NO CORRIENTES</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="pasivosNoCorrientesParaResumen"
                                        label="Pasivos No Corrientes Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="pasivosNoCorrientesParaResumenAt"
                                        label="Pasivos No Corrientes Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">PATRIMONIO</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="patrimonioParaResumen"
                                        label="Patrimonio Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="patrimonioParaResumenAt"
                                        label="Patrimonio Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10 mb-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">TOTAL PASIVOS Y PATRIMONIO</span>
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="tpyp"
                                        label="Total Pasivos y Pat. Actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="tpyp_ant"
                                        label="Total Pasivos y Pat. Anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>

                                  <VDivider class="mt-10" />

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    />
                                  </VRow>

                                  <VRow class="font-weight-medium px-4 mt-10">
                                    <VCol
                                      cols="12"
                                      md="6"
                                    >
                                      <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                                    </VCol>
                                    <VCol
                                      :style="(diferenciaperiodoactual != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                      cols="12"
                                      md="3"
                                    >
                                      <VTextField
                                        v-model="diferenciaperiodoactual"
                                        label="Diferencia periodo actual"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                    <VCol
                                      cols="12"
                                      md="3"
                                      :style="(diferenciaperiodoanterior != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                    >
                                      <VTextField

                                        v-model="diferenciaperiodoanterior"
                                        label="Diferencia periodo anterior"
                                        type="number"
                                        disabled
                                      />
                                    </VCol>
                                  </VRow>
                                </VCol>
                              </VRow>
                            </div>
                          </div>
                        </VCardText>
                      </VCardText>
                    </VCard>
                  </VDialog>
                </VExpansionPanels>
              </VWindowItem>
              <!-- ERI TAB MAIN -->
              <VWindowItem value="eri">
                <VExpansionPanels
                  v-model="panel2"
                  eager
                >
                  <!-- SECTION Ingresos -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      INGRESOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtIngresos :data="ingresos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Ingresos -->

                  <!-- SECTION Costos -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      COSTOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtCostos
                        :data="costos"
                        @accion="esf_1010302_ant_valor"
                      />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Costos -->

                  <!-- SECTION Otros Ingresos -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      OTROS INGRESOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtOtrosIngresos :data="otrosingresos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Otros Ingresos -->

                  <!-- SECTION Gastos de ventas -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      GASTOS DE VENTAS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtGastosDeVentas :data="gastos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Gastos de ventas -->

                  <!-- SECTION Gastos Administrativos -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      GASTOS ADMINISTRATIVOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtGastosAdministrativos :data="gastos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Gastos Administrativos -->

                  <!-- SECTION Gastos Financieros -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      GASTOS FINANCIEROS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtGastosFinancieros :data="gastos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Gastos Financieros -->

                  <!-- SECTION Otros Gastos -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      OTROS GASTOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtOtrosGastos :data="gastos" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Otros Gastos -->

                  <!-- SECTION Resultados -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      (=) RESULTADOS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtResultados :data="impuestosganancias" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Resultados -->

                  <!-- SECTION Operaciones Discontinuadas -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      (=) OPERACIONES DISCONTINUADAS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtResultadosOperacionesDiscontinuadas :data="impuestosganancias" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Operaciones Discontinuadas -->

                  <!-- SECTION Otros Resultados Integrales -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      OTROS RESULTADO INTEGRAL
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtResultadosOtrosResultadoIntegral :data="impuestosganancias" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Otros Resultados Integrales -->

                  <!-- SECTION Participación Controladora -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="eriEventClick"
                    >
                      (=) PARTICIPACIÓN CONTROLADORA/NO CONTROLADORA
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtResultadosParticipacionControladora :data="impuestosganancias" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Participación Controladora -->

                  <!-- Diálogo para Resumen ERI -->
                  <VDialog
                    v-model="mostrarResumenEri"
                    max-width="1000px"
                    eager
                  >
                    <VCard>
                      <VCardActions style="position: absoluteright: 10px">
                        <VSpacer />
                        <VBtn
                          color="primary"
                          text
                          @click="mostrarResumenEri = false"
                        >
                          Cerrar
                        </VBtn>
                      </VCardActions>
                      <VCardTitle class="headline">
                        Resumen ERI
                      </VCardTitle>
                      <VCardText class="add-products-form">
                        <div
                          class="ma-sm-4 mt-10"
                        >
                          <!-- eslint-disable vue/no-mutating-props -->
                          <div class="add-products-header mb-2 d-none d-md-flex">
                            <VRow>
                              <VCol
                                cols="12"
                                md="12"
                                style="font-size:8px"
                              >
                                <VRow class="font-weight-medium px-4 mb-2">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >RESUMEN</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >PERÍODO ACTUAL</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >PERIODO ANTERIOR</span>
                                  </VCol>
                                </VRow>

                                <VDivider />
                                <!-- INGRESOS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">INGRESOS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="ingresosParaResumen"
                                      label="Ingresos Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="ingresosParaResumenAt"
                                      label="Ingresos Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!--  COSTO DE VENTAS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">COSTO DE VENTAS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="costosParaResumen"
                                      label="Costo de ventas Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="costosParaResumenAt"
                                      label="Costo de ventas Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- GASTOS DE VENTAS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">GASTOS DE VENTA</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosDeVentasParaResumen"
                                      label="Gastos Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosDeVentasParaResumenAt"
                                      label="Gastos Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- GASTOS ADMINISTRATIVOS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">GASTOS ADMINISTRATIVOS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosAdministrativosParaResumen"
                                      label="Gastos Adm Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosAdministrativosParaResumenAt"
                                      label="Gastos Adm Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- GASTOS FINANCIEROS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">GASTOS FINANCIEROS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosFinancierosParaResumen"
                                      label="Gastos Fin Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="gastosFinancierosParaResumenAt"
                                      label="Gastos Fin Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- OTROS GASTOS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">OTROS GASTOS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="otrosGastosParaResumen"
                                      label="Otros Gastos Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="otrosGastosParaResumenAt"
                                      label="Otros Gastos Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- OTROS INGRESOS -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">OTROS INGRESOS</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="otrosIngresosParaResumen"
                                      label="Otros ingresos Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="otrosIngresosParaResumenAt"
                                      label="Otros ingresos Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- PARTICIPACIÓN TRABAJADORES -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">PARTICIPACIÓN TRABAJADORES</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.participacion_601"
                                      label="Participación trabajadores Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.participacion_601_ant"
                                      label="Participación trabajadores Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- IMPUESTO A LA RENTA CAUSADO -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">IMPUESTO A LA RENTA CAUSADO</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_603"
                                      label="Imp Renta Causado Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_603_ant"
                                      label="Imp Renta Causado Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- (-) GASTO POR IMPUESTO DIFERIDO -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">(-) GASTO POR IMPUESTO DIFERIDO</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_605"
                                      label="Gasto x Imp Diferido Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_605_ant"
                                      label="Gasto x Imp Diferido Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- INGRESO POR IMPUESTO DIFERIDO -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">INGRESO POR IMPUESTO DIFERIDO</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_606"
                                      label="Ing x Imp Diferido Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="impuestosganancias.impuestos_606_ant"
                                      label="Ing x Imp Diferido Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- RESULTADO NETO DEL EJERCICIO SEGÚN ERI -->
                                <VRow class="font-weight-medium px-4 mt-10 mb-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">RESULTADO NETO DEL EJERCICIO SEGÚN ERI</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="eri_607"
                                      label="Resultados ERI Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="eri_607_ant"
                                      label="Resultados ERI Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <!-- RESULTADO DEL EJERCICIO SEGÚN ESF -->
                                <VRow class="font-weight-medium px-4 mt-10 mb-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">RESULTADO DEL EJERCICIO SEGÚN ESF</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="resultadosSegunESFParaResumen"
                                      label="Resultados ESF Actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="resultadosSegunESFParaResumenAt"
                                      label="Resultados ESF Anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>

                                <VDivider class="mt-10" />
                                <!-- DIFERENCIA POR CUADRAR DEL RESULTADO DEL EJERCICIO -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  />
                                </VRow>
                                <!-- DIFERENCIA POR CUADRAR DEL RESULTADO DEL EJERCICIO -->
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="6"
                                  >
                                    <span class="text-sm">DIFERENCIA POR CUADRAR DEL RESULTADO DEL EJERCICIO</span>
                                  </VCol>
                                  <VCol
                                    :style="(diferenciaresultadoperiodoactual != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="diferenciaresultadoperiodoactual"
                                      label="Diferencia periodo actual"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    :style="(diferenciaresultadoperiodoanterior != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                  >
                                    <VTextField

                                      v-model="diferenciaresultadoperiodoanterior"
                                      label="Diferencia periodo anterior"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>
                            </VRow>
                          </div>
                        </div>
                      </VCardText>
                    </VCard>
                  </VDialog>
                </VExpansionPanels>
              </VWindowItem>
              <!-- MOV TAB MAIN -->
              <VWindowItem value="mov">
                <VExpansionPanels
                  v-model="panel3"
                  eager
                >
                  <!-- SECTION PÉRDIDA ACUM. CUENTAS INCOBRABLES Y DETERIORO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="movEventClick"
                    >
                      PÉRDIDA ACUM. CUENTAS INCOBRABLES Y DETERIORO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_paciyd"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovPerdAcumCuenIncYDet />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PÉRDIDA ACUM. CUENTAS INCOBRABLES Y DETERIORO -->

                  <!-- SECTION PÉRDIDA ACUM. VALOR NETO DE REALIZACIÓN Y OTRAS PÉRDIDAS EN INVENTARIO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="movEventClick"
                    >
                      PÉRDIDA ACUM. VALOR NETO DE REALIZACIÓN Y OTRAS PÉRDIDAS EN INVENTARIO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_pavndryopei"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovPerdAcumValNetReal />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PÉRDIDA ACUM. VALOR NETO DE REALIZACIÓN Y OTRAS PÉRDIDAS EN INVENTARIO -->

                  <!-- SECTION PROPIEDADES, PLANTA Y EQUIPO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      PROPIEDADES, PLANTA Y EQUIPO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_ppye"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovPropiedadesPlantasEquipos />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PROPIEDADES, PLANTA Y EQUIPO -->

                  <!-- SECTION PROPIEDADES DE INVERSIÓN -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      PROPIEDADES DE INVERSIÓN
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_pdi"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovPropiedadesDeInversion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION PROPIEDADES DE INVERSIÓN -->

                  <!-- SECTION INTANGIBLES -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      INTANGIBLES
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_intangibles"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovIntangibles />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION INTANGIBLES -->

                  <!-- SECTION ACTIVOS BIOLOGICOS -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      ACTIVOS BIOLOGICOS
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_ab"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovActivosBiologicos />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION ACTIVOS BIOLOGICOS -->

                  <!-- SECTION IMPUESTO DIFERIDO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      IMPUESTO DIFERIDO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_id"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovImpuestosDiferidos />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION IMPUESTO DIFERIDO -->

                  <!-- SECTION JUBILACIÓN PATRONAL -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      JUBILACIÓN PATRONAL
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_jp"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovJubilacionPatronal />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION JUBILACIÓN PATRONAL -->

                  <!-- SECTION DESAHUCIO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      DESAHUCIO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_desahucio"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovDeshaucio />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION DESAHUCIO -->

                  <!-- SECTION ACTIVOS FINANCIEROS LARGO PLAZO -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="movEventClick">
                      ACTIVOS FINANCIEROS LARGO PLAZO
                      <template #actions>
                        <VIcon
                          v-if="diferenciaporcuadrar_aflp"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovActivosFinancierosLargoPlazo />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION ACTIVOS FINANCIEROS LARGO PLAZO -->

                  <!-- SECTION OTROS -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      OTROS
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtMovOtros />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION OTROS -->
                </VExpansionPanels>
              </VWindowItem>
              <!-- ECP TAB MAIN -->
              <VWindowItem value="ecp">
                <VExpansionPanels
                  v-model="panel4"
                  eager
                >
                  <!-- SECTION Estados en el cambio en el patrimonio -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle @click="ecpEventClick">
                      ESTADOS EN EL CAMBIO EN EL PATRIMONIO
                      <!--
                        <template #actions>
                        <VIcon
                        v-if="ecpCuadre == 0"
                        icon="tabler-check"
                        color="success"
                        />
                        <VIcon
                        v-else
                        icon="tabler-alert-circle"
                        color="error"
                        />
                        </template>
                      -->
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtEstadosDeCambiosEnElPatrimonio :data="patrimonio" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Estados en el cambio en el patrimonio -->
                </VExpansionPanels>
                <!-- Diálogo para Resumen Saldos Iniciales ECP -->
                <VDialog
                  v-model="mostrarECP_SaldosIniciales"
                  max-width="1000px"
                >
                  <VCard>
                    <VCardActions style="position: absoluteright: 10px">
                      <VSpacer />
                      <VBtn
                        color="primary"
                        text
                        @click="mostrarECP_SaldosIniciales = false"
                      >
                        Cerrar
                      </VBtn>
                    </VCardActions>
                    <VCardTitle class="headline">
                      Resumen Saldos Iniciales ECP
                    </VCardTitle>
                    <VCardText class="add-products-form">
                      <div
                        class="ma-sm-4 mt-10"
                      >
                        <VRow>
                          <VCol
                            cols="12"
                            md="12"
                            style="font-size:8px"
                            class="mt-10 mb-10"
                          >
                            <h2>
                              <span
                                class="text-sm text-primary"
                                style="font-size:0.900rem"
                              >SALDOS INICIALES</span>
                            </h2>
                          </VCol>
                        </VRow>

                        <!-- eslint-disable vue/no-mutating-props -->
                        <div class="add-products-header mb-2 d-none d-md-flex">
                          <VRow>
                            <VCol
                              cols="12"
                              md="12"
                              style="font-size:8px"
                            >
                              <VRow class="font-weight-medium px-4 mb-2">
                                <VCol
                                  cols="12"
                                  md="4"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >SALDOS INICIALES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900remtext-align: center !important"
                                  >CÓDIGO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >SALDO INICIAL<br>SEGÚN ESF</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >SALDO INICIAL<br>SEGÚN ECP</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >DIFERENCIA POR CUADRAR</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >CONTROL</span>
                                </VCol>
                              </VRow>

                              <VDivider />

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">CAPITAL SOCIAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >301</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_301_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_301"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_301_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_301_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >302</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_302_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_302"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_302_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_302_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">PRIMA EMISIÓN PRIMARIA DE ACCIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >303</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_303_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_303"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_303_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_303_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA LEGAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30401</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30401_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_30401"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30401_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30401_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVAS FACULTATIVA Y ESTATUTARIA</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30402</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30402_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_30402"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30402_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30402_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA </span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30501</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30501_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_30501"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30501_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30501_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-PROPIEDADES, PLANTA Y EQUIPO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30502</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30502_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_9901_30502"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30502_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30502_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-ACTIVOS INTANGIBLES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30503</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30503_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30503"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30503_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30503_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-OTROS SUPERAVIT POR REVALUACION</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30504</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30504_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30504"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30504_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30504_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">GANANCIAS ACUMULADAS</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30601</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30601_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30601"
                                    label="r"
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30601_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30601_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">(-) PÉRDIDAS ACUMULADAS</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30602</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30602_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30602"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30602_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30602_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30603</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30603_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30603"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30603_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30603_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA DE CAPITAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30604</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30604_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30604"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30604_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30604_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR DONACIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30605</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30605_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30605"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30605_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30605_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR VALUACIÓN</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30606</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30606_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30606"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30606_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30606_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR REVALUACIÓN DE INVERSIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30607</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30607_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30607"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30607_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30607_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">GANANCIA NETA DEL PERIODO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30701</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30701_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30701"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30701_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30701_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">(-) PÉRDIDA NETA DEL PERIODO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30702</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30702_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_30702"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30702_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30702_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>


                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">PARTICIPACION NO CONTROLADORA</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >31</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="esf_31_ant"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_9901_31"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_31_sf"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_31_sf == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>
                            </VCol>
                          </VRow>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </VDialog>
                <!-- Diálogo para Resumen Saldos Finales ECP -->
                <VDialog
                  v-model="mostrarECP_SaldosFinales"
                  max-width="1000px"
                >
                  <VCard>
                    <VCardActions style="position: absoluteright: 10px">
                      <VSpacer />
                      <VBtn
                        color="primary"
                        text
                        @click="mostrarECP_SaldosFinales = false"
                      >
                        Cerrar
                      </VBtn>
                    </VCardActions>
                    <VCardTitle class="headline">
                      Resumen Saldos Finales ECP
                    </VCardTitle>
                    <VCardText class="add-products-form">
                      <div
                        class="ma-sm-4 mt-10"
                      >
                        <div class="add-products-header mb-2 d-none d-md-flex">
                          <VRow>
                            <VCol
                              cols="12"
                              md="12"
                              style="font-size:8px"
                            >
                              <VRow class="font-weight-medium px-4 mb-2">
                                <VCol
                                  cols="12"
                                  md="4"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >SALDOS FINALES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900remtext-align: center !important"
                                  >CÓDIGO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >SALDO FINAL<br>SEGÚN ESF</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >SALDO FINAL<br>SEGÚN ECP</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >DIFERENCIA POR CUADRAR</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem text-align: center !important"
                                  >CONTROL</span>
                                </VCol>
                              </VRow>

                              <VDivider />

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">CAPITAL SOCIAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >301</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_301"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_301"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_301_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_301_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >302</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_302"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_302"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_302_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_302_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">PRIMA EMISIÓN PRIMARIA DE ACCIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >303</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_303"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_303"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_303_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_303_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA LEGAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30401</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30401"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_30401"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30401_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30401_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVAS FACULTATIVA Y ESTATUTARIA</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30402</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30402"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_30402"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30402_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30402_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA </span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30501</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30501"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_30501"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30501_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30501_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-PROPIEDADES, PLANTA Y EQUIPO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30502</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30502"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_99_30502"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30502_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30502_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-ACTIVOS INTANGIBLES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30503</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30503"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30503"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30503_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30503_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">ORI-OTROS SUPERAVIT POR REVALUACION</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30504</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30504"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30504"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30504_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30504_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">GANANCIAS ACUMULADAS</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30601</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30601"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30601"
                                    label="r"
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30601_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30601_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">(-) PÉRDIDAS ACUMULADAS</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30602</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30602"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30602"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30602_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30602_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30603</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30603"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30603"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30603_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30603_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA DE CAPITAL</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30604</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30604"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30604"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30604_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30604_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR DONACIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30605</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30605"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30605"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30605_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30605_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR VALUACIÓN</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30606</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30606"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30606"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30606_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30606_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">RESERVA POR REVALUACIÓN DE INVERSIONES</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30607</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30607"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30607"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30607_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30607_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">GANANCIA NETA DEL PERIODO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30701</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30701"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30701"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30701_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30701_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">(-) PÉRDIDA NETA DEL PERIODO</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >30702</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="patrimonio.pat_30702"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_30702"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_30702_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_30702_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>

                              <VRow class="font-weight-medium px-4 mt-10">
                                <VCol
                                  cols="12"
                                  md="4"
                                >
                                  <span class="text-sm">PARTICIPACION NO CONTROLADORA</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                >
                                  <span
                                    class="text-sm text-primary"
                                    style="font-size:0.900rem"
                                  >31</span>
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField
                                    v-model="esf_31"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="patrimonio.pat_99_31"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="2"
                                >
                                  <VTextField

                                    v-model="dif_31_si"
                                    label=""
                                    type="number"
                                    disabled
                                  />
                                </VCol>
                                <VCol
                                  cols="12"
                                  md="1"
                                  style="text-align: center !important"
                                >
                                  <VIcon
                                    v-if="dif_31_si == 0"
                                    icon="tabler-check"
                                    color="success"
                                  />
                                  <VIcon
                                    v-else
                                    icon="tabler-alert-circle"
                                    color="error"
                                  />
                                </VCol>
                              </VRow>
                            </VCol>
                          </VRow>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </VDialog>
              </VWindowItem>
              <!-- EFE TAB MAIN -->
              <VWindowItem value="efe-md">
                <VExpansionPanels
                  v-model="panel5"
                  eager
                >
                  <!-- SECTION Actividades de operación -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="efeEventClick"
                    >
                      ACTIVIDADES DE OPERACIÓN
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtEfeMdActividadesDeOperacion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Actividades de operación -->

                  <!-- SECTION Actividades de inversión -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="efeEventClick"
                    >
                      ACTIVIDADES DE INVERSIÓN
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtEfeMdActividadesDeInversion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Actividades de inversión -->

                  <!-- SECTION Actividades de financiamiento -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="efeEventClick"
                    >
                      ACTIVIDADES DE FINANCIAMIENTO
                      <template #actions>
                        <VIcon
                          v-if="efeActividadesFinanciamiento"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtEfeMdActividadesDeFinanciamiento :data="resultadosefe" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION Actividades de financiamiento -->

                  <!-- SECTION CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN -->
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="efeEventClick"
                    >
                      CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN
                      <template #actions>
                        <VIcon
                          v-if="efeConciliacionValid"
                          icon="tabler-check"
                          color="success"
                        />
                        <VIcon
                          v-else
                          icon="tabler-alert-circle"
                          color="error"
                        />
                      </template>
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtEfeMdConciliacionEntreGananciaNeta :data="resultadosefe" />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- !SECTION CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN -->

                  <!-- Diálogo para Resumen EFE -->
                  <VDialog
                    v-model="mostrarResumenEfe"
                    max-width="1000px"
                  >
                    <VCard>
                      <VCardActions style="position: absoluteright: 10px">
                        <VSpacer />
                        <VBtn
                          color="primary"
                          text
                          @click="mostrarResumenEfe = false"
                        >
                          Cerrar
                        </VBtn>
                      </VCardActions>
                      <VCardTitle class="headline">
                        Resumen EFE
                      </VCardTitle>
                      <VCardText class="add-products-form">
                        <div
                          class="ma-sm-4 mt-10"
                        >
                          <div class="add-products-header mb-2 d-none d-md-flex">
                            <VRow>
                              <VCol
                                cols="12"
                                md="12"
                                style="font-size:8px"
                              >
                                <VRow class="font-weight-medium px-4 mb-2">
                                  <VCol
                                    cols="12"
                                    md="8"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >CONCEPTO</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900remtext-align: center !important"
                                    >CUENTA</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem text-align: center !important"
                                    >PERIODO ACTUAL</span>
                                  </VCol>
                                </VRow>

                                <VDivider />

                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">(=) Flujo neto del período según EFE</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9505</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9505"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>

                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">(+) Saldo inicial de efectivo y equivalentes según ESF</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9506</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9506"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>

                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Saldo final de efectivo y equivalentes según EFE</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9507</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9507"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>

                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Saldo final de efectivo y equivalentes según ESF</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="activos.ac_10101"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>

                              <VDivider />

                              <VCol>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span class="text-sm" />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_af != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                  >
                                    <VTextField
                                      id="efe_md_9507"
                                      v-model="resumen_diferenciaporcuadrar_efe_af"
                                      label="(+) 9507"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>


                              <VCol
                                cols="12"
                                md="12"
                                style="font-size:8px margin-top: 30px"
                              >
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Actividades de Operación Método Directo</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9501</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9501"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <!--
                                    <VCol
                                    cols="12"
                                    md="3"
                                    >
                                    <VTextField
                                    v-model="efe_9501_ant"
                                    label=""
                                    type="number"
                                    disabled
                                    />
                                    </VCol>
                                  -->
                                </VRow>

                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Actividades de Operación Método Indirecto</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9820</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9820"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <!--
                                    <VCol
                                    cols="12"
                                    md="3"
                                    >
                                    <VTextField
                                    v-model="efe_9820_ant"
                                    label=""
                                    type="number"
                                    disabled
                                    />
                                    </VCol>
                                  -->
                                </VRow>
                              </VCol>

                              <VDivider />

                              <VCol>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span class="text-sm" />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_celgnylfo != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                  >
                                    <VTextField
                                      id="efe_md_9507"
                                      v-model="resumen_diferenciaporcuadrar_efe_celgnylfo"
                                      label="(+)"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <!--
                                    <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_celgnylfo_ant != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                    >
                                    <VTextField
                                    id="efe_md_9507"
                                    v-model="resumen_diferenciaporcuadrar_efe_celgnylfo_ant"
                                    label="(+)"
                                    type="number"
                                    disabled
                                    />
                                    </VCol>
                                  -->
                                </VRow>
                              </VCol>
                            </VRow>
                          </div>
                        </div>
                      </VCardText>
                    </VCard>
                  </VDialog>
                </VExpansionPanels>
              </VWindowItem>
              <!-- TURBO NOTAS -->
              <VWindowItem value="turbonotas">
                <VExpansionPanels
                  v-model="panel7"
                  eager
                >
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      IDENTIFICACIÓN DE LA EMPRESA Y ACTIVIDAD ECONOMICA
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasIdentificacioYActividad />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      RESUMEN DE POLÍTICAS CONTABLES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasPoliticasCotables />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      POLÍTICA DE GESTIÓN DE RIESGO
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNNotasGestionDeRiesgos />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      ESTIMACIONES Y JUICIOS DE LA ADMINISTRACIÓN
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasEstimacionesJuiciosAdministracion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      SANCIONES
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasSanciones />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                </VExpansionPanels>
              </VWindowItem>
              <!-- INFORMES SOCIETARIOS -->
              <VWindowItem value="informessocietarios">
                <VExpansionPanels
                  v-model="panel7"
                  eager
                >
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      CONFIGURACION
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasConfiguracionesInformes />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      INFORME DEL GERENTE
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasInformeGerente />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      INFORME DEL COMISARIO
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasInformeComisario />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      ACTA DE JUNTA GENERAL
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <TxtTurboNotasActaDeJuntaGeneral />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                </VExpansionPanels>
              </VWindowItem>
              <!-- EFE DYNAMIC FLOW TAB MAIN   -->
              <VWindowItem value="dynamic-flow">
                <VExpansionPanels
                  v-model="panel6"
                  eager
                >
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle
                      @click="efeDFEventClick"
                    >
                      ACTIVIDADES DE OPERACIÓN
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <DynamicFlowActividadesOperacion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      ACTIVIDADES DE INVERSION y ACTIVIDADES DE FINANCIAMIENTO
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <DynamicFlowInversionFinanciamiento />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <VExpansionPanel eager>
                    <VExpansionPanelTitle>
                      CONCILIACIÓN ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN
                    </VExpansionPanelTitle>
                    <VExpansionPanelText>
                      <DynamicFlowConciliacion />
                    </VExpansionPanelText>
                  </VExpansionPanel>
                  <!-- Diálogo para Resumen EFE -->
                  <VDialog
                    v-model="mostrarResumenEfeDynamicFlow"
                    max-width="1000px"
                  >
                    <VCard>
                      <VCardActions style="position: absolute; right: 10px">
                        <VSpacer />
                        <VBtn
                          color="primary"
                          text
                          @click="mostrarResumenEfeDynamicFlow = false"
                        >
                          Cerrar
                        </VBtn>
                      </VCardActions>
                      <VCardTitle class="headline">
                        Resumen EFE Dymanic Flow
                      </VCardTitle>
                      <VCardText class="add-products-form">
                        <div
                          class="ma-sm-4 mt-10"
                        >
                          <div class="add-products-header mb-2 d-none d-md-flex">
                            <VRow>
                              <VCol
                                cols="12"
                                md="12"
                                style="font-size:8px"
                              >
                                <VRow class="font-weight-medium px-4 mb-2">
                                  <VCol
                                    cols="12"
                                    md="8"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >CONCEPTO</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900remtext-align: center !important"
                                    >CUENTA</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    style="text-align: center !important"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem text-align: center !important"
                                    >PERIODO ACTUAL</span>
                                  </VCol>
                                </VRow>
                                <VDivider />
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">(=) Flujo neto del período según EFE</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9505</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9505"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">(+) Saldo inicial de efectivo y equivalentes según ESF</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9506</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9506"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Saldo final de efectivo y equivalentes según EFE</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9507</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9507"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Saldo final de efectivo y equivalentes según ESF</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="activos.ac_10101"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>

                              <VDivider />

                              <VCol>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span class="text-sm" />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_af != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                  >
                                    <VTextField
                                      id="efe_md_9507"
                                      v-model="resumen_diferenciaporcuadrar_efe_af"
                                      label="(+) 9507"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>


                              <VCol
                                cols="12"
                                md="12"
                                style="font-size:8px margin-top: 30px"
                              >
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Actividades de Operación Método Directo</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9501</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9501"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">Actividades de Operación Método Indirecto</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span
                                      class="text-sm text-primary"
                                      style="font-size:0.900rem"
                                    >9820</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                  >
                                    <VTextField
                                      v-model="efe_9820"
                                      label=""
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                </VRow>
                              </VCol>

                              <VDivider />

                              <VCol>
                                <VRow class="font-weight-medium px-4 mt-10">
                                  <VCol
                                    cols="12"
                                    md="8"
                                  >
                                    <span class="text-sm">DIFERENCIA POR CUADRAR</span>
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="1"
                                  >
                                    <span class="text-sm" />
                                  </VCol>
                                  <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_celgnylfo != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                  >
                                    <VTextField
                                      id="efe_md_9507"
                                      v-model="resumen_diferenciaporcuadrar_efe_celgnylfo"
                                      label="(+)"
                                      type="number"
                                      disabled
                                    />
                                  </VCol>
                                  <!--
                                    <VCol
                                    cols="12"
                                    md="3"
                                    :style="(resumen_diferenciaporcuadrar_efe_celgnylfo_ant != 0) ? 'background: rgba(255,0,0,.2)' : 'background: rgba(0,128,0,.2)'"
                                    >
                                    <VTextField
                                    id="efe_md_9507"
                                    v-model="resumen_diferenciaporcuadrar_efe_celgnylfo_ant"
                                    label="(+)"
                                    type="number"
                                    disabled
                                    />
                                    </VCol>
                                  -->
                                </VRow>
                              </VCol>
                            </VRow>
                          </div>
                        </div>
                      </VCardText>
                    </VCard>
                  </VDialog>
                </VExpansionPanels>
              </VWindowItem>

              <!-- Botón flotante para Resumen ESF -->
              <VBtn
                v-if="tab === 'esf'"
                id="openResumeEsf"
                fixed
                right
                top
                fab
                class="resumen-esf-btn"
                @click="openResumenEsfPanel"
              >
                RESUMEN ESF
              </VBtn>

              <!-- Botón flotante para Resumen ECP Saldos Iniciales -->
              <VBtn
                v-if="tab === 'ecp'"
                id="openResumenECP_SI"
                fixed
                right
                top
                fab
                class="resumen-ecpsi-btn"
                @click="openECP_SaldosInicialesPanel"
              >
                Saldos Iniciales
              </VBtn>

              <!-- Botón flotante para Resumen ECP Saldos Finales -->
              <VBtn
                v-if="tab === 'ecp'"
                id="openResumenECP_SF"
                fixed
                right
                top
                fab
                class="resumen-ecpsf-btn"
                @click="openECP_SaldosFinalesPanel"
              >
                Saldos Finales
              </VBtn>

              <!-- Botón flotante para Resumen ERI -->
              <VBtn
                v-if="tab === 'eri'"
                id="openResumeEri"
                fixed
                right
                top
                fab
                class="resumen-esf-btn"
                @click="openResumenEriPanel"
              >
                RESUMEN ERI
              </VBtn>

              <!-- Botón flotante para Resumen EFE -->
              <VBtn
                v-if="tab === 'efe-md'"
                id="openResumeEfe"
                fixed
                right
                top
                fab
                class="resumen-esf-btn"
                @click="openResumenEfePanel"
              >
                RESUMEN EFE
              </VBtn>
            </VWindow>
          </VCardText>

          <VDivider />

          <VCardText
            class="d-flex gap-4"
            style="max-width: 400px"
          >
            <VBtn
              v-if="tab === 'efe-md' || tab === 'eri' || tab === 'esf' || tab === 'ecp' || tab === 'mov' || tab === 'mapeo1'"
              :loading="loadings"
              :disabled="loadings"
              block
              @click="guardarReporteTxt"
            >
              <span class="pl-2 pr-2">Guardar Flujo</span>
              <template #loader>
                <span class="custom-loader">
                  <VIcon icon="tabler-refresh" />
                </span>
                <span class="pl-2 pr-2">Guardando datos {{ countdown }} ...</span>
              </template>
            </VBtn>

            <VBtn
              v-if="tab === 'turbonotas'"
              :loading="loadingstn"
              :disabled="loadingstn"
              block
              @click="guardarTurboNotas"
            >
              <span class="pl-2 pr-2">Guardar TurboNotas</span>
              <template #loader>
                <span class="custom-loader">
                  <VIcon icon="tabler-refresh" />
                </span>
                <span class="pl-2 pr-2">Guardando notas {{ countdowntn }} ...</span>
              </template>
            </VBtn>

            <VBtn
              v-if="tab === 'informessocietarios'"
              :loading="loadingsis"
              :disabled="loadingsis"
              block
              @click="guardarInformeSocietario"
            >
              <span class="pl-2 pr-2">Guardar Informe Societario</span>
              <template #loader>
                <span class="custom-loader">
                  <VIcon icon="tabler-refresh" />
                </span>
                <span class="pl-2 pr-2">Guardando informe {{ countdownis }} ...</span>
              </template>
            </VBtn>

            <VBtn
              v-if="tab === 'dynamic-flow'"
              :loading="loadingsfd"
              :disabled="loadingsfd"
              block
              @click="guardarFlujoDinamico"
            >
              <span class="pl-2 pr-2">Guardar Flujo Dinámico</span>
              <template #loader>
                <span class="custom-loader">
                  <VIcon icon="tabler-refresh" />
                </span>
                <span class="pl-2 pr-2">Guardando flijo dinámico {{ countdownfd }} ...</span>
              </template>
            </VBtn>
            <!--
              <VBtn
              color="secondary"
              variant="tonal"
              :loading="loadings"
              :disabled="loadings"
              >
              Cancelar
              <template #loader>
              <span>Cancelar</span>
              </template>
              </VBtn>
            -->
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>


<style lang="scss">
.delivery-options {
  .v-selection-control-group {
    inline-size: 100%
  }
}

.delivery-option {
  padding: 1rem;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &.active {
    border-color: rgb(var(--v-theme-primary))
  }
}

.text-sm {
  font-size: 0.700rem
}
.v-label {
  font-size: 0.7rem
}
.v-card-text {
  padding-left: 5px
}

.mt-10 {
  margin-top: 5px !important
}

@keyframes loader {
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
}

.resumen-esf-btn {
  position: fixed;
  right: -60px; /* Ajusta la distancia desde la derecha */
  top: 50%; /* Centra el botón verticalmente */
  transform: translateY(-150%) rotate(-90deg); /* Alineación vertical precisa */
  z-index: 1000; /* Asegura que el botón esté por encima de otros elementos */
}

.resumen-ecpsi-btn {
  position: fixed;
  right: -82px; /* Ajusta la distancia desde la derecha */
  top: 45%; /* Centra el botón verticalmente */
  transform: translateY(-150%) rotate(-90deg); /* Alineación vertical precisa */
  z-index: 1000; /* Asegura que el botón esté por encima de otros elementos */
}

.resumen-ecpsf-btn {
  position: fixed;
  right: -78px; /* Ajusta la distancia desde la derecha */
  top: 78%; /* Centra el botón verticalmente */
  transform: translateY(-150%) rotate(-90deg); /* Alineación vertical precisa */
  z-index: 1000; /* Asegura que el botón esté por encima de otros elementos */
}
</style>

<style lang="scss" scoped>
.custom-loader {
  display: flex;
  animation: loader 1s infinite;
}

@keyframes loader {
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
}
</style>
