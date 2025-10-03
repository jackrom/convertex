<script setup>
import { usePeriodoListStore } from "@/views/pages/periodos/usePeriodoListStore"
import { useSuperciasListStore } from "@/views/pages/supercias/useSuperciasListStore"
import { ref } from "vue"

const props = defineProps({
  confirmationMsg: {
    type: String,
    required: true,
  },
  idPeriodo: {
    type: Object,
    required: true,
  },
  indiceDuplicarPeriodo: {
    type: Number,
    required: true,
  },
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDialogVisible',
  'confirm',
])

const route = useRoute()
const router = useRouter()
const periodoListStore = usePeriodoListStore()
const superciasListStore = useSuperciasListStore()
const loading = ref([])
const reporteActualDelPeriodoAnteriorADuplicar = ref()

const updateModelValue = val => {
  emit('update:isDialogVisible', val)
}

const onConfirmation = () => {
  console.log('props.idPeriodo', props.idPeriodo)
  emit('confirm', true)
  updateModelValue(false)
  duplicarPeriodoDB(props.idPeriodo, props.indiceDuplicarPeriodo)
}

const onCancel = () => {
  // emit('confirm', false)
  emit('update:isDialogVisible', false)
}

const buscarReporteConDataParaDuplicar = (periodo, index) => {
  superciasListStore.fetchReporteIflucByPeriodoActual(periodo.id).then(async res => {
    console.log('res.data', res.data)
    await duplicarReporteTxt(res.data, periodo, index)
  })
}

const duplicarReporteTxt = async (res, periodo, index) => {
  console.log('res: ', res)
  let user, activoscorrientesifluc, activosnocorrientesifluc, pasivoscorrientesifluc, pasivosnocorrientesifluc, patrimonioifluc, costosifluc, ingresosifluc, otrosingresosifluc, gastosdeventasifluc, gastosadministrativosifluc, gastosfinancierosifluc, otrosgastosifluc, resultadosifluc, operacionesdiscontinuadasifluc, otrosresultadosintegralifluc, resultadosparticipacioncontroladoraifluc, actividadesdeoperacionifluc, actividadesdeinversionifluc, actividadesdefinanciamientoifluc, conciliacionganancianetaifluc, ecpifluc, reporteid
  let activoscorrientesifluc_ant, activosnocorrientesifluc_ant, pasivoscorrientesifluc_ant, pasivosnocorrientesifluc_ant, patrimonioifluc_ant, costosifluc_ant, ingresosifluc_ant, otrosingresosifluc_ant, gastosdeventasifluc_ant, gastosadministrativosifluc_ant, gastosfinancierosifluc_ant, otrosgastosifluc_ant, resultadosifluc_ant, operacionesdiscontinuadasifluc_ant, otrosresultadosintegralifluc_ant, resultadosparticipacioncontroladoraifluc_ant, actividadesdeoperacionifluc_ant, actividadesdeinversionifluc_ant, actividadesdefinanciamientoifluc_ant, conciliacionganancianetaifluc_ant
  let movperdidasacumuladascuentasincobrablesydeterioro, movperdidasacumuladasvalornetorealizacion, movpropiedadesplantasyequipos, movpropiedadesdeinversion, movintangibles, movactivosbiologicos, movimpuestosdiferidos, movjubilacionpatronal, deshaucio, activosfinancieroslargoplazo, otros
  let movperdidasacumuladascuentasincobrablesydeterioro_ant, movperdidasacumuladasvalornetorealizacion_ant, movpropiedadesplantasyequipos_ant, movpropiedadesdeinversion_ant, movintangibles_ant, movactivosbiologicos_ant, movimpuestosdiferidos_ant, movjubilacionpatronal_ant, deshaucio_ant, activosfinancieroslargoplazo_ant, otros_ant

  user = await JSON.parse(sessionStorage.getItem('userData'))

  const reporte = {
    userId: user.id,
    periodoId: periodo.nuevoPeriodoId,
    empresaId: periodo.empresaId,
    nombre_reporte: 'ifluc',
  }

  // PERIODO ACTUAL

  // ACTIVOS CORRIENTES
  activoscorrientesifluc = {
    esf_1: 0.00,
    esf_101: 0.00,
    esf_10101: 0.00,
    esf_1010101: 0.00,
    esf_1010102: 0.00,
    esf_1010103: 0.00,
    esf_10102: 0.00,
    esf_1010201: 0.00,
    esf_101020101: 0.00,
    esf_10102010101: 0.00,
    esf_10102010102: 0.00,
    esf_10102010103: 0.00,
    esf_10102010104: 0.00,
    esf_10102010105: 0.00,
    esf_10102010106: 0.00,
    esf_101020102: 0.00,
    esf_10102010201: 0.00,
    esf_10102010202: 0.00,
    esf_10102010203: 0.00,
    esf_10102010204: 0.00,
    esf_10102010205: 0.00,
    esf_10102010206: 0.00,
    esf_10102010207: 0.00,
    esf_10102010208: 0.00,
    esf_10102010209: 0.00,
    esf_10102010210: 0.00,
    esf_10102010211: 0.00,
    esf_10102010212: 0.00,
    esf_10102010213: 0.00,
    esf_10102010214: 0.00,
    esf_10102010215: 0.00,
    esf_10102010216: 0.00,
    esf_10102010217: 0.00,
    esf_10102010218: 0.00,
    esf_10102010219: 0.00,
    esf_10102010220: 0.00,
    esf_10102010221: 0.00,
    esf_10102010222: 0.00,
    esf_10102010223: 0.00,
    esf_101020103: 0.00,
    esf_10102010301: 0.00,
    esf_10102010302: 0.00,
    esf_10102010303: 0.00,
    esf_10102010304: 0.00,
    esf_1010202: 0.00,
    esf_101020201: 0.00,
    esf_10102020101: 0.00,
    esf_10102020102: 0.00,
    esf_10102020103: 0.00,
    esf_10102020104: 0.00,
    esf_10102020105: 0.00,
    esf_10102020106: 0.00,
    esf_101020202: 0.00,
    esf_10102020201: 0.00,
    esf_10102020202: 0.00,
    esf_10102020203: 0.00,
    esf_10102020204: 0.00,
    esf_10102020205: 0.00,
    esf_10102020206: 0.00,
    esf_10102020207: 0.00,
    esf_10102020208: 0.00,
    esf_10102020209: 0.00,
    esf_10102020210: 0.00,
    esf_10102020211: 0.00,
    esf_10102020212: 0.00,
    esf_10102020213: 0.00,
    esf_10102020214: 0.00,
    esf_10102020215: 0.00,
    esf_10102020216: 0.00,
    esf_10102020217: 0.00,
    esf_10102020218: 0.00,
    esf_10102020219: 0.00,
    esf_10102020220: 0.00,
    esf_10102020221: 0.00,
    esf_10102020222: 0.00,
    esf_10102020223: 0.00,
    esf_1010203: 0.00,
    esf_101020302: 0.00,
    esf_10102030201: 0.00,
    esf_10102030202: 0.00,
    esf_10102030203: 0.00,
    esf_10102030204: 0.00,
    esf_10102030205: 0.00,
    esf_10102030206: 0.00,
    esf_10102030207: 0.00,
    esf_10102030208: 0.00,
    esf_10102030209: 0.00,
    esf_10102030210: 0.00,
    esf_10102030211: 0.00,
    esf_10102030212: 0.00,
    esf_10102030213: 0.00,
    esf_10102030214: 0.00,
    esf_10102030215: 0.00,
    esf_10102030216: 0.00,
    esf_10102030217: 0.00,
    esf_10102030218: 0.00,
    esf_10102030219: 0.00,
    esf_10102030220: 0.00,
    esf_10102030221: 0.00,
    esf_10102030222: 0.00,
    esf_10102030223: 0.00,
    esf_1010204: 0.00,
    esf_101020401: 0.00,
    esf_101020402: 0.00,
    esf_101020403: 0.00,
    esf_1010205: 0.00,
    esf_101020501: 0.00,
    esf_10102050101: 0.00,
    esf_10102050102: 0.00,
    esf_101020502: 0.00,
    esf_10102050201: 0.00,
    esf_10102050202: 0.00,
    esf_10102050203: 0.00,
    esf_10102050204: 0.00,
    esf_10102050207: 0.00,
    esf_10102050208: 0.00,
    esf_10102050209: 0.00,
    esf_10102050210: 0.00,
    esf_10102050211: 0.00,
    esf_10102050212: 0.00,
    esf_10102050213: 0.00,
    esf_10102050214: 0.00,
    esf_10102050215: 0.00,
    esf_10102050216: 0.00,
    esf_10102050217: 0.00,
    esf_10102050218: 0.00,
    esf_10102050219: 0.00,
    esf_10102050220: 0.00,
    esf_10102050221: 0.00,
    esf_1010206: 0.00,
    esf_101020601: 0.00,
    esf_101020602: 0.00,
    esf_101020603: 0.00,
    esf_101020604: 0.00,
    esf_1010207: 0.00,
    esf_10103: 0.00,
    esf_1010301: 0.00,
    esf_1010302: 0.00,
    esf_1010303: 0.00,
    esf_1010304: 0.00,
    esf_1010305: 0.00,
    esf_1010306: 0.00,
    esf_1010307: 0.00,
    esf_1010308: 0.00,
    esf_1010309: 0.00,
    esf_1010310: 0.00,
    esf_1010311: 0.00,
    esf_1010312: 0.00,
    esf_1010313: 0.00,
    esf_10104: 0.00,
    esf_1010401: 0.00,
    esf_1010402: 0.00,
    esf_1010403: 0.00,
    esf_1010404: 0.00,
    esf_10105: 0.00,
    esf_1010501: 0.00,
    esf_1010502: 0.00,
    esf_1010503: 0.00,
    esf_10106: 0.00,
    esf_10107: 0.00,
    esf_10108: 0.00,
  }
  activoscorrientesifluc.userId = user.id
  activoscorrientesifluc.periodoId = reporte.periodoId
  activoscorrientesifluc.empresaId = reporte.empresaId
  activoscorrientesifluc.reporteId = ''

  // ACTIVOS NO CORRIENTES
  activosnocorrientesifluc = {
    esf_102:	0.00,
    esf_10201:	0.00,
    esf_1020101:	0.00,
    esf_1020102:	0.00,
    esf_1020103:	0.00,
    esf_1020104:	0.00,
    esf_1020105:	0.00,
    esf_1020106:	0.00,
    esf_1020107:	0.00,
    esf_1020108:	0.00,
    esf_1020109:	0.00,
    esf_1020110:	0.00,
    esf_1020111:	0.00,
    esf_1020112:	0.00,
    esf_1020113:	0.00,
    esf_1020114:	0.00,
    esf_102011401:	0.00,
    esf_102011402:	0.00,
    esf_102011403:	0.00,
    esf_10202:	0.00,
    esf_1020201:	0.00,
    esf_102020101:	0.00,
    esf_102020102:	0.00,
    esf_1020202:	0.00,
    esf_102020201:	0.00,
    esf_102020202:	0.00,
    esf_1020203:	0.00,
    esf_1020204:	0.00,
    esf_10203:	0.00,
    esf_1020301:	0.00,
    esf_1020302:	0.00,
    esf_1020303:	0.00,
    esf_1020304:	0.00,
    esf_1020305:	0.00,
    esf_1020306:	0.00,
    esf_10204:	0.00,
    esf_1020401:	0.00,
    esf_1020402:	0.00,
    esf_1020403:	0.00,
    esf_1020404:	0.00,
    esf_1020405:	0.00,
    esf_1020406:	0.00,
    esf_1020407:	0.00,
    esf_10205:	0.00,
    esf_10206:	0.00,
    esf_1020601:	0.00,
    esf_1020602:	0.00,
    esf_1020603:	0.00,
    esf_1020604:	0.00,
    esf_1020605:	0.00,
    esf_1020606:	0.00,
    esf_10207:	0.00,
    esf_1020701:	0.00,
    esf_1020702:	0.00,
    esf_1020703:	0.00,
    esf_10208:	0.00,
    esf_1020801:	0.00,
    esf_1020802:	0.00,
    esf_1020803:	0.00,
    esf_1020805:	0.00,
    esf_1020806:	0.00,
    esf_1020807:	0.00,
    esf_1020808:	0.00,
    esf_1020809:	0.00,
    esf_1020810:	0.00,
    esf_1020811:	0.00,
    esf_10209:	0.00,
    esf_1020901:	0.00,
    esf_1020902:	0.00,
    esf_1020903:	0.00,
    esf_10210:	0.00,
    esf_1021001:	0.00,
    esf_1021002:	0.00,
    esf_1021003:	0.00,
    esf_1021004:	0.00,
  }
  activosnocorrientesifluc.userId = user.id
  activosnocorrientesifluc.periodoId = reporte.periodoId
  activosnocorrientesifluc.empresaId = reporte.empresaId
  activosnocorrientesifluc.reporteId = ''

  // PASIVOS CORRIENTES
  pasivoscorrientesifluc = {
    esf_2:	0.00,
    esf_201:	0.00,
    esf_20101:	0.00,
    esf_20102:	0.00,
    esf_20103:	0.00,
    esf_2010301:	0.00,
    esf_201030101:	0.00,
    esf_201030102:	0.00,
    esf_201030103:	0.00,
    esf_2010302:	0.00,
    esf_201030201:	0.00,
    esf_201030202:	0.00,
    esf_201030203:	0.00,
    esf_20104:	0.00,
    esf_2010401:	0.00,
    esf_2010402:	0.00,
    esf_20105:	0.00,
    esf_2010501:	0.00,
    esf_2010502:	0.00,
    esf_20106:	0.00,
    esf_2010601:	0.00,
    esf_2010602:	0.00,
    esf_2010603:	0.00,
    esf_2010604:	0.00,
    esf_2010605:	0.00,
    esf_20107:	0.00,
    esf_2010701:	0.00,
    esf_2010702:	0.00,
    esf_2010703:	0.00,
    esf_2010704:	0.00,
    esf_2010705:	0.00,
    esf_2010706:	0.00,
    esf_2010707:	0.00,
    esf_20108:	0.00,
    esf_2010801:	0.00,
    esf_201080101:	0.00,
    esf_201080102:	0.00,
    esf_201080103:	0.00,
    esf_201080104:	0.00,
    esf_2010802:	0.00,
    esf_201080201:	0.00,
    esf_201080202:	0.00,
    esf_201080203:	0.00,
    esf_201080204:	0.00,
    esf_20109:	0.00,
    esf_20110:	0.00,
    esf_2011001:	0.00,
    esf_2011002:	0.00,
    esf_20111:	0.00,
    esf_20112:	0.00,
    esf_2011201:	0.00,
    esf_2011202:	0.00,
    esf_201120201:	0.00,
    esf_201120202:	0.00,
    esf_20113:	0.00,
    esf_2011301:	0.00,
    esf_2011302:	0.00,
    esf_2011303:	0.00,
    esf_2011304:	0.00,
    esf_2011305:	0.00,
    esf_2011306:	0.00,
    esf_2011307:	0.00,
    esf_2011308:	0.00,
    esf_2011309:	0.00,
    esf_2011310:	0.00,
    esf_2011311:	0.00,
    esf_2011312:	0.00,
    esf_20114:	0.00,
  }
  pasivoscorrientesifluc.userId = user.id
  pasivoscorrientesifluc.periodoId = reporte.periodoId
  pasivoscorrientesifluc.empresaId = reporte.empresaId
  pasivoscorrientesifluc.reporteId = ''

  // PASIVOS NO CORRIENTES
  pasivosnocorrientesifluc = {
    esf_202:	0.00,
    esf_20201:	0.00,
    esf_20202:	0.00,
    esf_2020201:	0.00,
    esf_202020101:	0.00,
    esf_202020102:	0.00,
    esf_202020103:	0.00,
    esf_2020202:	0.00,
    esf_202020201:	0.00,
    esf_202020202:	0.00,
    esf_202020203:	0.00,
    esf_20203:	0.00,
    esf_2020301:	0.00,
    esf_2020302:	0.00,
    esf_20204:	0.00,
    esf_2020401:	0.00,
    esf_202040101:	0.00,
    esf_202040102:	0.00,
    esf_202040103:	0.00,
    esf_202040104:	0.00,
    esf_2020402:	0.00,
    esf_202040201:	0.00,
    esf_202040202:	0.00,
    esf_202040203:	0.00,
    esf_202040204:	0.00,
    esf_20205:	0.00,
    esf_2020501:	0.00,
    esf_2020502:	0.00,
    esf_2020503:	0.00,
    esf_2020504:	0.00,
    esf_2020505:	0.00,
    esf_20206:	0.00,
    esf_2020601:	0.00,
    esf_2020602:	0.00,
    esf_20207:	0.00,
    esf_2020701:	0.00,
    esf_2020702:	0.00,
    esf_202070201:	0.00,
    esf_202070202:	0.00,
    esf_20208:	0.00,
    esf_20209:	0.00,
    esf_2020901:	0.00,
    esf_2020902:	0.00,
    esf_20210:	0.00,
  }
  pasivosnocorrientesifluc.userId = user.id
  pasivosnocorrientesifluc.periodoId = reporte.periodoId
  pasivosnocorrientesifluc.empresaId = reporte.empresaId
  pasivosnocorrientesifluc.reporteId = ''

  // PATRIMONIO
  patrimonioifluc = {
    esf_3:	0.00,
    esf_30:	0.00,
    esf_301:	0.00,
    esf_30101:	0.00,
    esf_30102:	0.00,
    esf_30103:	0.00,
    esf_30104:	0.00,
    esf_30105:	0.00,
    esf_3010501:	0.00,
    esf_3010502:	0.00,
    esf_302:	0.00,
    esf_303:	0.00,
    esf_304:	0.00,
    esf_30401:	0.00,
    esf_30402:	0.00,
    esf_305:	0.00,
    esf_30501:	0.00,
    esf_30502:	0.00,
    esf_30503:	0.00,
    esf_30504:	0.00,
    esf_306:	0.00,
    esf_30601:	0.00,
    esf_30602:	0.00,
    esf_30603:	0.00,
    esf_30604:	0.00,
    esf_30605:	0.00,
    esf_30606:	0.00,
    esf_30607:	0.00,
    esf_307:	0.00,
    esf_30701:	0.00,
    esf_30702:	0.00,
    esf_31:	0.00,
  }
  patrimonioifluc.userId = user.id
  patrimonioifluc.periodoId = reporte.periodoId
  patrimonioifluc.empresaId = reporte.empresaId
  patrimonioifluc.reporteId = ''

  // COSTOS
  costosifluc = {
    eri_501:	0.00,
    eri_50101:	0.00,
    eri_5010101:	0.00,
    eri_5010102:	0.00,
    eri_5010103:	0.00,
    eri_5010104:	0.00,
    eri_5010105:	0.00,
    eri_5010106:	0.00,
    eri_5010107:	0.00,
    eri_5010108:	0.00,
    eri_5010109:	0.00,
    eri_5010110:	0.00,
    eri_5010111:	0.00,
    eri_5010112:	0.00,
    eri_50102:	0.00,
    eri_5010201:	0.00,
    eri_5010202:	0.00,
    eri_50103:	0.00,
    eri_5010301:	0.00,
    eri_5010302:	0.00,
    eri_50104:	0.00,
    eri_5010401:	0.00,
    eri_5010402:	0.00,
    eri_5010403:	0.00,
    eri_5010404:	0.00,
    eri_5010405:	0.00,
    eri_5010406:	0.00,
    eri_5010407:	0.00,
    eri_5010408:	0.00,
    eri_50105:	0.00,
    eri_5010501:	0.00,
    eri_402:	0.00,
  }
  costosifluc.userId = user.id
  costosifluc.periodoId = reporte.periodoId
  costosifluc.empresaId = reporte.empresaId
  costosifluc.reporteId = ''

  // INGRESOS
  ingresosifluc = {
    eri_401:	0.00,
    eri_40101:	0.00,
    eri_40102:	0.00,
    eri_4010201:	0.00,
    eri_4010202:	0.00,
    eri_4010203:	0.00,
    eri_4010204:	0.00,
    eri_40103:	0.00,
    eri_40104:	0.00,
    eri_40105:	0.00,
    eri_40106:	0.00,
    eri_4010601:	0.00,
    eri_4010602:	0.00,
    eri_4010603:	0.00,
    eri_40107:	0.00,
    eri_40108:	0.00,
    eri_40109:	0.00,
    eri_4010901:	0.00,
    eri_401090101:	0.00,
    eri_401090103:	0.00,
    eri_401090104:	0.00,
    eri_401090105:	0.00,
    eri_401090106:	0.00,
    eri_4010902:	0.00,
    eri_401090201:	0.00,
    eri_401090202:	0.00,
    eri_401090203:	0.00,
    eri_401090204:	0.00,
    eri_401090205:	0.00,
    eri_401090206:	0.00,
    eri_401090207:	0.00,
    eri_401090208:	0.00,
    eri_4010903:	0.00,
    eri_401090301:	0.00,
    eri_401090302:	0.00,
    eri_401090303:	0.00,
    eri_401090304:	0.00,
    eri_40110:	0.00,
    eri_4011001:	0.00,
    eri_4011002:	0.00,
    eri_4011003:	0.00,
    eri_4011004:	0.00,
    eri_4011005:	0.00,
    eri_4011006:	0.00,
    eri_40112:	0.00,
    eri_40113:	0.00,
    eri_40114:	0.00,
    eri_40115:	0.00,
    eri_40116:	0.00,
  }
  ingresosifluc.userId = user.id
  ingresosifluc.periodoId = reporte.periodoId
  ingresosifluc.empresaId = reporte.empresaId
  ingresosifluc.reporteId = ''

  // OTROS INGRESOS
  otrosingresosifluc = {
    eri_403:	0.00,
    eri_40301:	0.00,
    eri_40302:	0.00,
    eri_40303:	0.00,
  }
  otrosingresosifluc.userId = user.id
  otrosingresosifluc.periodoId = reporte.periodoId
  otrosingresosifluc.empresaId = reporte.empresaId
  otrosingresosifluc.reporteId = ''

  // GASTOS DE VENTAS
  gastosdeventasifluc = {
    eri_50201:	0.00,
    eri_5020101:	0.00,
    eri_5020102:	0.00,
    eri_5020103:	0.00,
    eri_5020104:	0.00,
    eri_5020105:	0.00,
    eri_5020106:	0.00,
    eri_5020107:	0.00,
    eri_5020108:	0.00,
    eri_5020109:	0.00,
    eri_5020110:	0.00,
    eri_5020111:	0.00,
    eri_5020112:	0.00,
    eri_5020113:	0.00,
    eri_5020114:	0.00,
    eri_5020115:	0.00,
    eri_5020116:	0.00,
    eri_5020117:	0.00,
    eri_5020118:	0.00,
    eri_5020119:	0.00,
    eri_5020120:	0.00,
    eri_502012001:	0.00,
    eri_502012002:	0.00,
    eri_502012003:	0.00,
    eri_5020121:	0.00,
    eri_502012101:	0.00,
    eri_502012102:	0.00,
    eri_5020122:	0.00,
    eri_502012201:	0.00,
    eri_502012202:	0.00,
    eri_502012203:	0.00,
    eri_502012204:	0.00,
    eri_502012205:	0.00,
    eri_502012206:	0.00,
    eri_502012207:	0.00,
    eri_5020123:	0.00,
    eri_502012301:	0.00,
    eri_502012302:	0.00,
    eri_502012303:	0.00,
    eri_5020124:	0.00,
    eri_5020125:	0.00,
    eri_5020126:	0.00,
    eri_5020127:	0.00,
    eri_5020128:	0.00,
  }
  gastosdeventasifluc.userId = user.id
  gastosdeventasifluc.periodoId = reporte.periodoId
  gastosdeventasifluc.empresaId = reporte.empresaId
  gastosdeventasifluc.reporteId = ''

  // GASTOS ADMINISTRATIVOS
  gastosadministrativosifluc = {
    eri_50202:	0.00,
    eri_5020201:	0.00,
    eri_5020202:	0.00,
    eri_5020203:	0.00,
    eri_5020204:	0.00,
    eri_5020205:	0.00,
    eri_5020206:	0.00,
    eri_5020207:	0.00,
    eri_5020208:	0.00,
    eri_5020209:	0.00,
    eri_5020210:	0.00,
    eri_5020211:	0.00,
    eri_5020212:	0.00,
    eri_5020213:	0.00,
    eri_5020214:	0.00,
    eri_5020215:	0.00,
    eri_5020216:	0.00,
    eri_5020217:	0.00,
    eri_5020218:	0.00,
    eri_5020219:	0.00,
    eri_5020220:	0.00,
    eri_5020221:	0.00,
    eri_502022101:	0.00,
    eri_502022102:	0.00,
    eri_502022103:	0.00,
    eri_5020222:	0.00,
    eri_502022201:	0.00,
    eri_502022202:	0.00,
    eri_5020223:	0.00,
    eri_502022301:	0.00,
    eri_502022302:	0.00,
    eri_502022303:	0.00,
    eri_502022304:	0.00,
    eri_502022305:	0.00,
    eri_502022306:	0.00,
    eri_502022307:	0.00,
    eri_5020224:	0.00,
    eri_502022401:	0.00,
    eri_502022402:	0.00,
    eri_502022403:	0.00,
    eri_5020225:	0.00,
    eri_5020226:	0.00,
    eri_5020227:	0.00,
    eri_5020228:	0.00,
    eri_5020229:	0.00,
  }
  gastosadministrativosifluc.userId = user.id
  gastosadministrativosifluc.periodoId = reporte.periodoId
  gastosadministrativosifluc.empresaId = reporte.empresaId
  gastosadministrativosifluc.reporteId = ''

  // GASTOS FINANCIEROS
  gastosfinancierosifluc = {
    eri_50203:	0.00,
    eri_5020301:	0.00,
    eri_502030101:	0.00,
    eri_502030102:	0.00,
    eri_502030103:	0.00,
    eri_502030104:	0.00,
    eri_5020302:	0.00,
    eri_502030201:	0.00,
    eri_50203020101:	0.00,
    eri_50203020103:	0.00,
    eri_50203020104:	0.00,
    eri_50203020105:	0.00,
    eri_50203020106:	0.00,
    eri_5020303:	0.00,
    eri_502030301:	0.00,
    eri_502030302:	0.00,
    eri_502030303:	0.00,
    eri_502030304:	0.00,
    eri_502030305:	0.00,
    eri_502030306:	0.00,
    eri_502030307:	0.00,
    eri_502030308:	0.00,
    eri_5020304:	0.00,
    eri_502030401:	0.00,
    eri_502030402:	0.00,
    eri_502030403:	0.00,
    eri_502030404:	0.00,
    eri_5020305:	0.00,
    eri_502030501:	0.00,
    eri_502030502:	0.00,
    eri_502030503:	0.00,
    eri_502030504:	0.00,
    eri_5020306:	0.00,
    eri_5020307:	0.00,
    eri_5020308:	0.00,
    eri_5020309:	0.00,
    eri_5020310:	0.00,
    eri_5020311:	0.00,
    eri_5020312:	0.00,
  }
  gastosfinancierosifluc.userId = user.id
  gastosfinancierosifluc.periodoId = reporte.periodoId
  gastosfinancierosifluc.empresaId = reporte.empresaId
  gastosfinancierosifluc.reporteId = ''

  // OTROS GASTOS
  otrosgastosifluc = {
    eri_502:	0.00,
    eri_50201:	0.00,
    eri_50202:	0.00,
    eri_50203:	0.00,
    eri_50204:	0.00,
    eri_5020401:	0.00,
    eri_5020402:	0.00,
  }
  otrosgastosifluc.userId = user.id
  otrosgastosifluc.periodoId = reporte.periodoId
  otrosgastosifluc.empresaId = reporte.empresaId
  otrosgastosifluc.reporteId = ''

  // RESULTADOS
  resultadosifluc = {
    eri_600:	0.00,
    eri_601:	0.00,
    eri_602:	0.00,
    eri_603:	0.00,
    eri_604:	0.00,
    eri_605:	0.00,
    eri_606:	0.00,
    eri_607:	0.00,

  }
  resultadosifluc.userId = user.id
  resultadosifluc.periodoId = reporte.periodoId
  resultadosifluc.empresaId = reporte.empresaId
  resultadosifluc.reporteId = ''

  // RESULTADOS OPERACIONES DISCONTINUAS
  operacionesdiscontinuadasifluc = {
    eri_700:	0.00,
    eri_701:	0.00,
    eri_702:	0.00,
    eri_703:	0.00,
    eri_704:	0.00,
    eri_705:	0.00,
    eri_706:	0.00,
    eri_707:	0.00,
  }
  operacionesdiscontinuadasifluc.userId = user.id
  operacionesdiscontinuadasifluc.periodoId = reporte.periodoId
  operacionesdiscontinuadasifluc.empresaId = reporte.empresaId
  operacionesdiscontinuadasifluc.reporteId = ''

  // OTROS RESULTADOS INTEGRAL
  otrosresultadosintegralifluc = {
    eri_800:	0.00,
    eri_80001:	0.00,
    eri_80002:	0.00,
    eri_80003:	0.00,
    eri_80004:	0.00,
    eri_80005:	0.00,
    eri_80006:	0.00,
    eri_80007:	0.00,
    eri_80008:	0.00,
    eri_80009:	0.00,
    eri_801:	0.00,
  }
  otrosresultadosintegralifluc.userId = user.id
  otrosresultadosintegralifluc.periodoId = reporte.periodoId
  otrosresultadosintegralifluc.empresaId = reporte.empresaId
  otrosresultadosintegralifluc.reporteId = ''

  // RESULTADOS PARTICIPACION CONTROLADORA
  resultadosparticipacioncontroladoraifluc = {
    eri_80101:	0.00,
    eri_80102:	0.00,
  }
  resultadosparticipacioncontroladoraifluc.userId = user.id
  resultadosparticipacioncontroladoraifluc.periodoId = reporte.periodoId
  resultadosparticipacioncontroladoraifluc.empresaId = reporte.empresaId
  resultadosparticipacioncontroladoraifluc.reporteId = ''

  // ACTIVIDADES DE OPERACION
  actividadesdeoperacionifluc = {
    efe_md_950101:	0.00,
    efe_md_95010101:	0.00,
    efe_md_9501010101:	0.00,
    efe_md_9501010102:	0.00,
    efe_md_9501010103:	0.00,
    efe_md_9501010104:	0.00,
    efe_md_9501010105:	0.00,
    efe_md_9501010106:	0.00,
    efe_md_9501010107:	0.00,
    efe_md_9501010108:	0.00,
    efe_md_9501010109:	0.00,
    efe_md_9501010110:	0.00,
    efe_md_9501010111:	0.00,
    efe_md_9501010112:	0.00,
    efe_md_9501010113:	0.00,
    efe_md_9501010114:	0.00,
    efe_md_9501010115:	0.00,
    efe_md_9501010116:	0.00,
    efe_md_9501010117:	0.00,
    efe_md_9501010118:	0.00,
    efe_md_9501010119:	0.00,
    efe_md_9501010120:	0.00,
    efe_md_9501010121:	0.00,
    efe_md_95010102:	0.00,
    efe_md_9501010201: 0.00,
    efe_md_9501010202: 0.00,
    efe_md_9501010203: 0.00,
    efe_md_9501010204: 0.00,
    efe_md_9501010205: 0.00,
    efe_md_9501010206: 0.00,
    efe_md_9501010207: 0.00,
    efe_md_95010103:	0.00,
    efe_md_95010104:	0.00,
    efe_md_95010105:	0.00,
    efe_md_950102:	0.00,
    efe_md_95010201:	0.00,
    efe_md_9501020101:	0.00,
    efe_md_9501020102:	0.00,
    efe_md_9501020103:	0.00,
    efe_md_9501020104:	0.00,
    efe_md_9501020105:	0.00,
    efe_md_9501020106:	0.00,
    efe_md_9501020107:	0.00,
    efe_md_9501020108:	0.00,
    efe_md_9501020109:	0.00,
    efe_md_9501020110:	0.00,
    efe_md_9501020111:	0.00,
    efe_md_9501020112:	0.00,
    efe_md_9501020113:	0.00,
    efe_md_9501020114:	0.00,
    efe_md_9501020115:	0.00,
    efe_md_9501020116:	0.00,
    efe_md_9501020117:	0.00,
    efe_md_9501020118:	0.00,
    efe_md_9501020119:	0.00,
    efe_md_9501020120:	0.00,
    efe_md_9501020121:	0.00,
    efe_md_9501020122:	0.00,
    efe_md_9501020123:	0.00,
    efe_md_9501020124:	0.00,
    efe_md_9501020125:	0.00,
    efe_md_9501020126:	0.00,
    efe_md_9501020127:	0.00,
    efe_md_9501020128:	0.00,
    efe_md_9501020129:	0.00,
    efe_md_9501020130:	0.00,
    efe_md_9501020131:	0.00,
    efe_md_9501020132:	0.00,
    efe_md_9501020133:	0.00,
    efe_md_9501020134:	0.00,
    efe_md_9501020135:	0.00,
    efe_md_9501020136:	0.00,
    efe_md_9501020137:	0.00,
    efe_md_9501020138:	0.00,
    efe_md_9501020139:	0.00,
    efe_md_9501020140:	0.00,
    efe_md_9501020141:	0.00,
    efe_md_9501020142:	0.00,
    efe_md_9501020143:	0.00,
    efe_md_9501020144:	0.00,
    efe_md_9501020145:	0.00,
    efe_md_9501020146:	0.00,
    efe_md_9501020147:	0.00,
    efe_md_9501020148:	0.00,
    efe_md_9501020149:	0.00,
    efe_md_9501020150:	0.00,
    efe_md_9501020151:	0.00,
    efe_md_9501020152:	0.00,
    efe_md_9501020153:	0.00,
    efe_md_9501020154:	0.00,
    efe_md_9501020155:	0.00,
    efe_md_9501020156:	0.00,
    efe_md_95010202:	0.00,
    efe_md_95010203:	0.00,
    efe_md_9501020301:	0.00,
    efe_md_9501020302:	0.00,
    efe_md_9501020303:	0.00,
    efe_md_95010204:	0.00,
    efe_md_95010205:	0.00,
    efe_md_950103:	0.00,
    efe_md_950104:	0.00,
    efe_md_95010401:	0.00,
    efe_md_950105:	0.00,
    efe_md_95010501:	0.00,
    efe_md_95010502:	0.00,
    efe_md_95010503:	0.00,
    efe_md_950106:	0.00,
    efe_md_950107:	0.00,
    efe_md_95010701:	0.00,
    efe_md_95010702:	0.00,
    efe_md_95010703:	0.00,
    efe_md_950108:	0.00,
    efe_md_95010801:	0.00,
    efe_md_95010802:	0.00,
    efe_md_95010803:	0.00,
    efe_md_95010804:	0.00,
    efe_md_95010805:	0.00,
    efe_md_95010806:	0.00,
    efe_md_95010807:	0.00,
    efe_md_95010808:	0.00,
    efe_md_95010809:	0.00,
    efe_md_95010810:	0.00,
    efe_md_95010811:	0.00,
    efe_md_95010812:	0.00,
    efe_md_95010813:	0.00,
  }
  actividadesdeoperacionifluc.userId = user.id
  actividadesdeoperacionifluc.periodoId = reporte.periodoId
  actividadesdeoperacionifluc.empresaId = reporte.empresaId
  actividadesdeoperacionifluc.reporteId = ''

  // ACTIVIDADES DE INVERSION
  actividadesdeinversionifluc = {
    efe_md_9502:	0.00,
    efe_md_950201:	0.00,
    efe_md_950202:	0.00,
    efe_md_950203:	0.00,
    efe_md_950204:	0.00,
    efe_md_950205:	0.00,
    efe_md_95020501:	0.00,
    efe_md_950206:	0.00,
    efe_md_950207:	0.00,
    efe_md_950208:	0.00,
    efe_md_950209:	0.00,
    efe_md_95020901:	0.00,
    efe_md_950210:	0.00,
    efe_md_950211:	0.00,
    efe_md_95021101:	0.00,
    efe_md_950212:	0.00,
    efe_md_950213:	0.00,
    efe_md_95021301:	0.00,
    efe_md_95021302:	0.00,
    efe_md_95021303:	0.00,
    efe_md_950214:	0.00,
    efe_md_950215:	0.00,
    efe_md_950216:	0.00,
    efe_md_950217:	0.00,
    efe_md_950218:	0.00,
    efe_md_950219:	0.00,
    efe_md_950220:	0.00,
    efe_md_950221:	0.00,
    efe_md_95022101:	0.00,
    efe_md_95022102:	0.00,
    efe_md_95022103:	0.00,
    efe_md_95022104:	0.00,
    efe_md_95022105:	0.00,
    efe_md_95022106:	0.00,
    efe_md_95022107:	0.00,
    efe_md_95022108:	0.00,
    efe_md_95022109:	0.00,
    efe_md_95022110:	0.00,
  }
  actividadesdeinversionifluc.userId = user.id
  actividadesdeinversionifluc.periodoId = reporte.periodoId
  actividadesdeinversionifluc.empresaId = reporte.empresaId
  actividadesdeinversionifluc.reporteId = ''

  // ACTIVIDADES DE FINANCIAMIENTO
  actividadesdefinanciamientoifluc = {
    efe_md_95:	0.00,
    efe_md_9501:	0.00,
    efe_md_9503:	0.00,
    efe_md_950301:	0.00,
    efe_md_95030101:	0.00,
    efe_md_95030102:	0.00,
    efe_md_95030103:	0.00,
    efe_md_95030104:	0.00,
    efe_md_950302:	0.00,
    efe_md_950303:	0.00,
    efe_md_950304:	0.00,
    efe_md_950305:	0.00,
    efe_md_950306:	0.00,
    efe_md_950307:	0.00,
    efe_md_950308:	0.00,
    efe_md_95030801:	0.00,
    efe_md_950309:	0.00,
    efe_md_950310:	0.00,
    efe_md_95031001:	0.00,
    efe_md_95031002:	0.00,
    efe_md_95031003:	0.00,
    efe_md_95031004:	0.00,
    efe_md_95031005:	0.00,
    efe_md_95031006:	0.00,
    efe_md_95031007:	0.00,
    efe_md_95031008:	0.00,
    efe_md_9504:	0.00,
    efe_md_950401:	0.00,
    efe_md_9505:	0.00,
    efe_md_9506:	0.00,
    efe_md_9507:	0.00,

  }
  actividadesdefinanciamientoifluc.userId = user.id
  actividadesdefinanciamientoifluc.periodoId = reporte.periodoId
  actividadesdefinanciamientoifluc.empresaId = reporte.empresaId
  actividadesdefinanciamientoifluc.reporteId = ''

  // CONCILIACION GANANCIA NETA
  conciliacionganancianetaifluc = {
    efe_md_96:	0.00,
    efe_md_97:	0.00,
    efe_md_9701:	0.00,
    efe_md_970101:	0.00,
    efe_md_970102:	0.00,
    efe_md_970103:	0.00,
    efe_md_9702:	0.00,
    efe_md_970201:	0.00,
    efe_md_970202:	0.00,
    efe_md_970203:	0.00,
    efe_md_970204:	0.00,
    efe_md_970205:	0.00,
    efe_md_970206:	0.00,
    efe_md_970207:	0.00,
    efe_md_9703:	0.00,
    efe_md_9704:	0.00,
    efe_md_9705:	0.00,
    efe_md_9706:	0.00,
    efe_md_9707:	0.00,
    efe_md_9708:	0.00,
    efe_md_970801:	0.00,
    efe_md_970802:	0.00,
    efe_md_9709:	0.00,
    efe_md_970901:	0.00,
    efe_md_9710:	0.00,
    efe_md_971001:	0.00,
    efe_md_9711:	0.00,
    efe_md_971101:	0.00,
    efe_md_971102:	0.00,
    efe_md_971103:	0.00,
    efe_md_971104:	0.00,
    efe_md_971105:	0.00,
    efe_md_971106:	0.00,
    efe_md_971107:	0.00,
    efe_md_971108:	0.00,
    efe_md_971109:	0.00,
    efe_md_971110:	0.00,
    efe_md_971111:	0.00,
    efe_md_971112:	0.00,
    efe_md_971113:	0.00,
    efe_md_971114:	0.00,
    efe_md_971115:	0.00,
    efe_md_971116:	0.00,
    efe_md_971117:	0.00,
    efe_md_971118:	0.00,
    efe_md_971119:	0.00,
    efe_md_971120:	0.00,
    efe_md_971121:	0.00,
    efe_md_971122:	0.00,
    efe_md_971123:	0.00,
    efe_md_971124:	0.00,
    efe_md_98:	0.00,
    efe_md_9801:	0.00,
    efe_md_980101: 0.00,
    efe_md_980102: 0.00,
    efe_md_980103: 0.00,
    efe_md_980104: 0.00,
    efe_md_980105: 0.00,
    efe_md_980106: 0.00,
    efe_md_9802:	0.00,
    efe_md_980201:	0.00,
    efe_md_9803:	0.00,
    efe_md_980301:	0.00,
    efe_md_9804:	0.00,
    efe_md_980401:	0.00,
    efe_md_980402:	0.00,
    efe_md_980403:	0.00,
    efe_md_980404:	0.00,
    efe_md_9805:	0.00,
    efe_md_980501:	0.00,
    efe_md_980502:	0.00,
    efe_md_980503:	0.00,
    efe_md_980504:	0.00,
    efe_md_980505:	0.00,
    efe_md_980506:	0.00,
    efe_md_980507:	0.00,
    efe_md_9806:	0.00,
    efe_md_980601:	0.00,
    efe_md_9807:	0.00,
    efe_md_9808:	0.00,
    efe_md_980801:	0.00,
    efe_md_9809:	0.00,
    efe_md_9810:	0.00,
    efe_md_981001:	0.00,
    efe_md_981002:	0.00,
    efe_md_981003:	0.00,
    efe_md_981004:	0.00,
    efe_md_981005:	0.00,
    efe_md_981006:	0.00,
    efe_md_981007:	0.00,
    efe_md_981008:	0.00,
    efe_md_981009:	0.00,
    efe_md_981010:	0.00,
    efe_md_981011:	0.00,
    efe_md_981012:	0.00,
    efe_md_981013:	0.00,
    efe_md_981014:	0.00,
    efe_md_9820:	0.00,
  }
  conciliacionganancianetaifluc.userId = user.id
  conciliacionganancianetaifluc.periodoId = reporte.periodoId
  conciliacionganancianetaifluc.empresaId = reporte.empresaId
  conciliacionganancianetaifluc.reporteId = ''

  // ECP
  ecpifluc = {
    ecp_99_301:	0.00,
    ecp_99_302:	0.00,
    ecp_99_303:	0.00,
    ecp_99_30401:	0.00,
    ecp_99_30402:	0.00,
    ecp_99_30501:	0.00,
    ecp_99_30502:	0.00,
    ecp_99_30503:	0.00,
    ecp_99_30504:	0.00,
    ecp_99_30601:	0.00,
    ecp_99_30602:	0.00,
    ecp_99_30603:	0.00,
    ecp_99_30604:	0.00,
    ecp_99_30605:	0.00,
    ecp_99_30606:	0.00,
    ecp_99_30607:	0.00,
    ecp_99_30701:	0.00,
    ecp_99_30702:	0.00,
    ecp_9901_301:	0.00,
    ecp_9901_302:	0.00,
    ecp_9901_303:	0.00,
    ecp_9901_30401:	0.00,
    ecp_9901_30402:	0.00,
    ecp_9901_30501:	0.00,
    ecp_9901_30502:	0.00,
    ecp_9901_30503:	0.00,
    ecp_9901_30504:	0.00,
    ecp_9901_30601:	0.00,
    ecp_9901_30602:	0.00,
    ecp_9901_30603:	0.00,
    ecp_9901_30604:	0.00,
    ecp_9901_30605:	0.00,
    ecp_9901_30606:	0.00,
    ecp_9901_30607:	0.00,
    ecp_9901_30701:	0.00,
    ecp_9901_30702:	0.00,
    ecp_990101_301:	0.00,
    ecp_990101_302:	0.00,
    ecp_990101_303:	0.00,
    ecp_990101_30401:	0.00,
    ecp_990101_30402:	0.00,
    ecp_990101_30501:	0.00,
    ecp_990101_30502:	0.00,
    ecp_990101_30503:	0.00,
    ecp_990101_30504:	0.00,
    ecp_990101_30601:	0.00,
    ecp_990101_30602:	0.00,
    ecp_990101_30603:	0.00,
    ecp_990101_30604:	0.00,
    ecp_990101_30605:	0.00,
    ecp_990101_30606:	0.00,
    ecp_990101_30607:	0.00,
    ecp_990101_30701:	0.00,
    ecp_990101_30702:	0.00,
    ecp_990102_301:	0.00,
    ecp_990102_302:	0.00,
    ecp_990102_303:	0.00,
    ecp_990102_30401:	0.00,
    ecp_990102_30402:	0.00,
    ecp_990102_30501:	0.00,
    ecp_990102_30502:	0.00,
    ecp_990102_30503:	0.00,
    ecp_990102_30504:	0.00,
    ecp_990102_30601:	0.00,
    ecp_990102_30602:	0.00,
    ecp_990102_30603:	0.00,
    ecp_990102_30604:	0.00,
    ecp_990102_30605:	0.00,
    ecp_990102_30606:	0.00,
    ecp_990102_30607:	0.00,
    ecp_990102_30701:	0.00,
    ecp_990102_30702:	0.00,
    ecp_990103_301:	0.00,
    ecp_990103_302:	0.00,
    ecp_990103_303:	0.00,
    ecp_990103_30401:	0.00,
    ecp_990103_30402:	0.00,
    ecp_990103_30501:	0.00,
    ecp_990103_30502:	0.00,
    ecp_990103_30503:	0.00,
    ecp_990103_30504:	0.00,
    ecp_990103_30601:	0.00,
    ecp_990103_30602:	0.00,
    ecp_990103_30603:	0.00,
    ecp_990103_30604:	0.00,
    ecp_990103_30605:	0.00,
    ecp_990103_30606:	0.00,
    ecp_990103_30607:	0.00,
    ecp_990103_30701:	0.00,
    ecp_990103_30702:	0.00,
    ecp_9902_301:	0.00,
    ecp_9902_302:	0.00,
    ecp_9902_303:	0.00,
    ecp_9902_30401:	0.00,
    ecp_9902_30402:	0.00,
    ecp_9902_30501:	0.00,
    ecp_9902_30502:	0.00,
    ecp_9902_30503:	0.00,
    ecp_9902_30504:	0.00,
    ecp_9902_30601:	0.00,
    ecp_9902_30602:	0.00,
    ecp_9902_30603:	0.00,
    ecp_9902_30604:	0.00,
    ecp_9902_30605:	0.00,
    ecp_9902_30606:	0.00,
    ecp_9902_30607:	0.00,
    ecp_9902_30701:	0.00,
    ecp_9902_30702:	0.00,
    ecp_990201_301:	0.00,
    ecp_990201_302:	0.00,
    ecp_990201_303:	0.00,
    ecp_990201_30401:	0.00,
    ecp_990201_30402:	0.00,
    ecp_990201_30501:	0.00,
    ecp_990201_30502:	0.00,
    ecp_990201_30503:	0.00,
    ecp_990201_30504:	0.00,
    ecp_990201_30601:	0.00,
    ecp_990201_30602:	0.00,
    ecp_990201_30603:	0.00,
    ecp_990201_30604:	0.00,
    ecp_990201_30605:	0.00,
    ecp_990201_30606:	0.00,
    ecp_990201_30607:	0.00,
    ecp_990201_30701:	0.00,
    ecp_990201_30702:	0.00,
    ecp_990202_301:	0.00,
    ecp_990202_302:	0.00,
    ecp_990202_303:	0.00,
    ecp_990202_30401:	0.00,
    ecp_990202_30402:	0.00,
    ecp_990202_30501:	0.00,
    ecp_990202_30502:	0.00,
    ecp_990202_30503:	0.00,
    ecp_990202_30504:	0.00,
    ecp_990202_30601:	0.00,
    ecp_990202_30602:	0.00,
    ecp_990202_30603:	0.00,
    ecp_990202_30604:	0.00,
    ecp_990202_30605:	0.00,
    ecp_990202_30606:	0.00,
    ecp_990202_30607:	0.00,
    ecp_990202_30701:	0.00,
    ecp_990202_30702:	0.00,
    ecp_990203_301:	0.00,
    ecp_990203_302:	0.00,
    ecp_990203_303:	0.00,
    ecp_990203_30401:	0.00,
    ecp_990203_30402:	0.00,
    ecp_990203_30501:	0.00,
    ecp_990203_30502:	0.00,
    ecp_990203_30503:	0.00,
    ecp_990203_30504:	0.00,
    ecp_990203_30601:	0.00,
    ecp_990203_30602:	0.00,
    ecp_990203_30603:	0.00,
    ecp_990203_30604:	0.00,
    ecp_990203_30605:	0.00,
    ecp_990203_30606:	0.00,
    ecp_990203_30607:	0.00,
    ecp_990203_30701:	0.00,
    ecp_990203_30702:	0.00,
    ecp_990204_301:	0.00,
    ecp_990204_302:	0.00,
    ecp_990204_303:	0.00,
    ecp_990204_30401:	0.00,
    ecp_990204_30402:	0.00,
    ecp_990204_30501:	0.00,
    ecp_990204_30502:	0.00,
    ecp_990204_30503:	0.00,
    ecp_990204_30504:	0.00,
    ecp_990204_30601:	0.00,
    ecp_990204_30602:	0.00,
    ecp_990204_30603:	0.00,
    ecp_990204_30604:	0.00,
    ecp_990204_30605:	0.00,
    ecp_990204_30606:	0.00,
    ecp_990204_30607:	0.00,
    ecp_990204_30701:	0.00,
    ecp_990204_30702:	0.00,
    ecp_990205_301:	0.00,
    ecp_990205_302:	0.00,
    ecp_990205_303:	0.00,
    ecp_990205_30401:	0.00,
    ecp_990205_30402:	0.00,
    ecp_990205_30501:	0.00,
    ecp_990205_30502:	0.00,
    ecp_990205_30503:	0.00,
    ecp_990205_30504:	0.00,
    ecp_990205_30601:	0.00,
    ecp_990205_30602:	0.00,
    ecp_990205_30603:	0.00,
    ecp_990205_30604:	0.00,
    ecp_990205_30605:	0.00,
    ecp_990205_30606:	0.00,
    ecp_990205_30607:	0.00,
    ecp_990205_30701:	0.00,
    ecp_990205_30702:	0.00,
    ecp_990206_301:	0.00,
    ecp_990206_302:	0.00,
    ecp_990206_303:	0.00,
    ecp_990206_30401:	0.00,
    ecp_990206_30402:	0.00,
    ecp_990206_30501:	0.00,
    ecp_990206_30502:	0.00,
    ecp_990206_30503:	0.00,
    ecp_990206_30504:	0.00,
    ecp_990206_30601:	0.00,
    ecp_990206_30602:	0.00,
    ecp_990206_30603:	0.00,
    ecp_990206_30604:	0.00,
    ecp_990206_30605:	0.00,
    ecp_990206_30606:	0.00,
    ecp_990206_30607:	0.00,
    ecp_990206_30701:	0.00,
    ecp_990206_30702:	0.00,
    ecp_990207_301:	0.00,
    ecp_990207_302:	0.00,
    ecp_990207_303:	0.00,
    ecp_990207_30401:	0.00,
    ecp_990207_30402:	0.00,
    ecp_990207_30501:	0.00,
    ecp_990207_30502:	0.00,
    ecp_990207_30503:	0.00,
    ecp_990207_30504:	0.00,
    ecp_990207_30601:	0.00,
    ecp_990207_30602:	0.00,
    ecp_990207_30603:	0.00,
    ecp_990207_30604:	0.00,
    ecp_990207_30605:	0.00,
    ecp_990207_30606:	0.00,
    ecp_990207_30607:	0.00,
    ecp_990207_30701:	0.00,
    ecp_990207_30702:	0.00,
    ecp_990208_301:	0.00,
    ecp_990208_302:	0.00,
    ecp_990208_303:	0.00,
    ecp_990208_30401:	0.00,
    ecp_990208_30402:	0.00,
    ecp_990208_30501:	0.00,
    ecp_990208_30502:	0.00,
    ecp_990208_30503:	0.00,
    ecp_990208_30504:	0.00,
    ecp_990208_30601:	0.00,
    ecp_990208_30602:	0.00,
    ecp_990208_30603:	0.00,
    ecp_990208_30604:	0.00,
    ecp_990208_30605:	0.00,
    ecp_990208_30606:	0.00,
    ecp_990208_30607:	0.00,
    ecp_990208_30701:	0.00,
    ecp_990208_30702:	0.00,
    ecp_990209_301:	0.00,
    ecp_990209_302:	0.00,
    ecp_990209_303:	0.00,
    ecp_990209_30401:	0.00,
    ecp_990209_30402:	0.00,
    ecp_990209_30501:	0.00,
    ecp_990209_30502:	0.00,
    ecp_990209_30503:	0.00,
    ecp_990209_30504:	0.00,
    ecp_990209_30601:	0.00,
    ecp_990209_30602:	0.00,
    ecp_990209_30603:	0.00,
    ecp_990209_30604:	0.00,
    ecp_990209_30605:	0.00,
    ecp_990209_30606:	0.00,
    ecp_990209_30607:	0.00,
    ecp_990209_30701:	0.00,
    ecp_990209_30702:	0.00,
    ecp_99020901_301:	0.00,
    ecp_99020901_302:	0.00,
    ecp_99020901_303:	0.00,
    ecp_99020901_30401:	0.00,
    ecp_99020901_30402:	0.00,
    ecp_99020901_30501:	0.00,
    ecp_99020901_30502:	0.00,
    ecp_99020901_30503:	0.00,
    ecp_99020901_30504:	0.00,
    ecp_99020901_30601:	0.00,
    ecp_99020901_30602:	0.00,
    ecp_99020901_30603:	0.00,
    ecp_99020901_30604:	0.00,
    ecp_99020901_30605:	0.00,
    ecp_99020901_30606:	0.00,
    ecp_99020901_30607:	0.00,
    ecp_99020901_30701:	0.00,
    ecp_99020901_30702:	0.00,
    ecp_99020902_301:	0.00,
    ecp_99020902_302:	0.00,
    ecp_99020902_303:	0.00,
    ecp_99020902_30401:	0.00,
    ecp_99020902_30402:	0.00,
    ecp_99020902_30501:	0.00,
    ecp_99020902_30502:	0.00,
    ecp_99020902_30503:	0.00,
    ecp_99020902_30504:	0.00,
    ecp_99020902_30601:	0.00,
    ecp_99020902_30602:	0.00,
    ecp_99020902_30603:	0.00,
    ecp_99020902_30604:	0.00,
    ecp_99020902_30605:	0.00,
    ecp_99020902_30606:	0.00,
    ecp_99020902_30607:	0.00,
    ecp_99020902_30701:	0.00,
    ecp_99020902_30702:	0.00,
    ecp_990210_301:	0.00,
    ecp_990210_302:	0.00,
    ecp_990210_303:	0.00,
    ecp_990210_30401:	0.00,
    ecp_990210_30402:	0.00,
    ecp_990210_30501:	0.00,
    ecp_990210_30502:	0.00,
    ecp_990210_30503:	0.00,
    ecp_990210_30504:	0.00,
    ecp_990210_30601:	0.00,
    ecp_990210_30602:	0.00,
    ecp_990210_30603:	0.00,
    ecp_990210_30604:	0.00,
    ecp_990210_30605:	0.00,
    ecp_990210_30606:	0.00,
    ecp_990210_30607:	0.00,
    ecp_990210_30701:	0.00,
    ecp_990210_30702:	0.00,
    ecp_99_30:	0.00,
    ecp_99_31:	0.00,
    ecp_9901_30:	0.00,
    ecp_9901_31:	0.00,
    ecp_9902_30:	0.00,
    ecp_9902_31:	0.00,
    ecp_990101_30:	0.00,
    ecp_990101_31:	0.00,
    ecp_990102_30:	0.00,
    ecp_990102_31:	0.00,
    ecp_990103_30:	0.00,
    ecp_990103_31:	0.00,
    ecp_990201_30:	0.00,
    ecp_990201_31:	0.00,
    ecp_990202_30:	0.00,
    ecp_990202_31:	0.00,
    ecp_990203_30:	0.00,
    ecp_990203_31:	0.00,
    ecp_990204_30:	0.00,
    ecp_990204_31:	0.00,
    ecp_990205_30:	0.00,
    ecp_990205_31:	0.00,
    ecp_990206_30:	0.00,
    ecp_990206_31:	0.00,
    ecp_990207_30:	0.00,
    ecp_990207_31:	0.00,
    ecp_990208_30:	0.00,
    ecp_990208_31:	0.00,
    ecp_990209_30:	0.00,
    ecp_990209_31:	0.00,
    ecp_990210_30:	0.00,
    ecp_990210_31:	0.00,
    ecp_9901_Total: 0.00,
    ecp_990101_Total: 0.00,
    ecp_990102_Total: 0.00,
    ecp_990103_Total: 0.00,
    ecp_9902_Total: 0.00,
    ecp_990201_Total: 0.00,
    ecp_990202_Total: 0.00,
    ecp_990203_Total: 0.00,
    ecp_990204_Total: 0.00,
    ecp_990205_Total: 0.00,
    ecp_990206_Total: 0.00,
    ecp_990207_Total: 0.00,
    ecp_990208_Total: 0.00,
    ecp_990209_Total: 0.00,
    ecp_99020901_Total: 0.00,
    ecp_99020902_Total: 0.00,
    ecp_990210_Total: 0.00,
  }
  ecpifluc.userId = user.id
  ecpifluc.periodoId = reporte.periodoId
  ecpifluc.empresaId = reporte.empresaId
  ecpifluc.reporteId = ''

  // MOV PERDIDAS ACUMULADAS CUENTAS INCOBRABLES Y DETERIORO
  movperdidasacumuladascuentasincobrablesydeterioro = {
    ajustes: 0.00,
    bajasoreversiones: 0.00,
    diferenciaporcuadrar: 0.00,
    provisionesanio:  0.00,
    saldofinalsegunesf: 0.00,
    saldofinalsegunmovimiento: 0.00,
    saldoinicial: 0.00,
  }
  movperdidasacumuladascuentasincobrablesydeterioro.userId = user.id
  movperdidasacumuladascuentasincobrablesydeterioro.periodoId = reporte.periodoId
  movperdidasacumuladascuentasincobrablesydeterioro.empresaId = reporte.empresaId
  movperdidasacumuladascuentasincobrablesydeterioro.reporteId = ''

  // MOV PERDIDAS ACUMULADAS VALOR NETO DE REALIZACION
  movperdidasacumuladasvalornetorealizacion = {
    provisionesdelanio:  0.00,
    ajustes: 0.00,
    bajasoreversiones: 0.00,
    diferenciaporcuadrar: 0.00,
    saldofinalsegunesf: 0.00,
    saldofinalsegunmovimiento: 0.00,
    saldoinicial: 0.00,
  }
  movperdidasacumuladasvalornetorealizacion.userId = user.id
  movperdidasacumuladasvalornetorealizacion.periodoId = reporte.periodoId
  movperdidasacumuladasvalornetorealizacion.empresaId = reporte.empresaId
  movperdidasacumuladasvalornetorealizacion.reporteId = ''

  // MOV PROPIEDADES PLANTAS Y EQUIPOS
  movpropiedadesplantasyequipos = {
    mov_construccionesencurso_bilddb: 0.00,
    mov_construccionesencurso_compras: 0.00,
    mov_construccionesencurso_gdd: 0.00,
    mov_construccionesencurso_od: 0.00,
    mov_construccionesencurso_si: 0.00,
    mov_construccionesencurso_sida: 0.00,
    mov_construccionesencurso_total: 0.00,
    mov_construccionesencurso_transf: 0.00,
    mov_edificios_bilddb: 0.00,
    mov_edificios_compras: 0.00,
    mov_edificios_gdd: 0.00,
    mov_edificios_od: 0.00,
    mov_edificios_si: 0.00,
    mov_edificios_sida: 0.00,
    mov_edificios_total: 0.00,
    mov_edificios_transf: 0.00,
    mov_equipodecomputacion_bilddb: 0.00,
    mov_equipodecomputacion_compras: 0.00,
    mov_equipodecomputacion_gdd: 0.00,
    mov_equipodecomputacion_od: 0.00,
    mov_equipodecomputacion_si: 0.00,
    mov_equipodecomputacion_sida: 0.00,
    mov_equipodecomputacion_total: 0.00,
    mov_equipodecomputacion_transf: 0.00,
    mov_instalaciones_bilddb: 0.00,
    mov_instalaciones_compras: 0.00,
    mov_instalaciones_gdd: 0.00,
    mov_instalaciones_od: 0.00,
    mov_instalaciones_si: 0.00,
    mov_instalaciones_sida: 0.00,
    mov_instalaciones_total: 0.00,
    mov_instalaciones_transf: 0.00,
    mov_maquinariayequipo_bilddb: 0.00,
    mov_maquinariayequipo_compras: 0.00,
    mov_maquinariayequipo_gdd: 0.00,
    mov_maquinariayequipo_od: 0.00,
    mov_maquinariayequipo_si: 0.00,
    mov_maquinariayequipo_sida: 0.00,
    mov_maquinariayequipo_total: 0.00,
    mov_maquinariayequipo_transf: 0.00,
    mov_mueblesyenseres_bilddb: 0.00,
    mov_mueblesyenseres_compras: 0.00,
    mov_mueblesyenseres_gdd: 0.00,
    mov_mueblesyenseres_od: 0.00,
    mov_mueblesyenseres_si: 0.00,
    mov_mueblesyenseres_sida: 0.00,
    mov_mueblesyenseres_total: 0.00,
    mov_mueblesyenseres_transf: 0.00,
    mov_otrospropiedadesplantasyequipos_bilddb: 0.00,
    mov_otrospropiedadesplantasyequipos_compras: 0.00,
    mov_otrospropiedadesplantasyequipos_gdd: 0.00,
    mov_otrospropiedadesplantasyequipos_od: 0.00,
    mov_otrospropiedadesplantasyequipos_si: 0.00,
    mov_otrospropiedadesplantasyequipos_sida: 0.00,
    mov_otrospropiedadesplantasyequipos_total: 0.00,
    mov_otrospropiedadesplantasyequipos_transf: 0.00,
    mov_terreno_bilddb: 0.00,
    mov_terreno_compras: 0.00,
    mov_terreno_gdd: 0.00,
    mov_terreno_od: 0.00,
    mov_terreno_si: 0.00,
    mov_terreno_sida: 0.00,
    mov_terreno_total: 0.00,
    mov_terreno_transf: 0.00,
    mov_vehiculo_bilddb: 0.00,
    mov_vehiculo_compras: 0.00,
    mov_vehiculo_gdd: 0.00,
    mov_vehiculo_od: 0.00,
    mov_vehiculo_si: 0.00,
    mov_vehiculo_sida: 0.00,
    mov_vehiculo_total: 0.00,
    mov_vehiculo_transf: 0.00,
    mov_total_si: 0.00,
    mov_total_sida: 0.00,
    mov_total_compras: 0.00,
    mov_total_bilddb: 0.00,
    mov_total_transf: 0.00,
    mov_total_od: 0.00,
    mov_total_gdd: 0.00,
    mov_total_sf: 0.00,
  }
  movpropiedadesplantasyequipos.userId = user.id
  movpropiedadesplantasyequipos.periodoId = reporte.periodoId
  movpropiedadesplantasyequipos.empresaId = reporte.empresaId
  movpropiedadesplantasyequipos.reporteId = ''

  // MOV PROPIEDADES DE INVERSION
  movpropiedadesdeinversion = {
    mov_bajasincluida_edificios: 0.00,
    mov_bajasincluida_terrenos: 0.00,
    mov_compras_edificios: 0.00,
    mov_compras_terrenos: 0.00,
    mov_gastosdedepreciacion_edificios: 0.00,
    mov_gastosdedepreciacion_terrenos: 0.00,
    mov_otros_edificios: 0.00,
    mov_otros_terrenos: 0.00,
    mov_saldo_edificios: 0.00,
    mov_saldo_terrenos: 0.00,
    mov_saldoinicial_edificios: 0.00,
    mov_saldoinicial_terrenos: 0.00,
    mov_transferencia_edificios: 0.00,
    mov_transferencia_terrenos: 0.00,
    mov_valorrazonable_edificios: 0.00,
    mov_valorrazonable_terrenos: 0.00,
  }
  movpropiedadesdeinversion.userId = user.id
  movpropiedadesdeinversion.periodoId = reporte.periodoId
  movpropiedadesdeinversion.empresaId = reporte.empresaId
  movpropiedadesdeinversion.reporteId = ''

  // MOV INTANGIBLES
  movintangibles = {
    mov_bajasincluida: 0.00,
    mov_compras: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_gastosdeamortizacion: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicialamortizacionacumulada: 0.00,
    mov_saldoinicialcosto: 0.00,
  }
  movintangibles.userId = user.id
  movintangibles.periodoId = reporte.periodoId
  movintangibles.empresaId = reporte.empresaId
  movintangibles.reporteId = ''

  // MOV ACTIVOS BIOLOGICOS
  movactivosbiologicos = {
    mov_bajasoventas_aec: 0.00,
    mov_bajasoventas_aep: 0.00,
    mov_bajasoventas_otros: 0.00,
    mov_bajasoventas_pec: 0.00,
    mov_bajasoventas_total: 0.00,
    mov_compras_aec: 0.00,
    mov_compras_aep: 0.00,
    mov_compras_otros: 0.00,
    mov_compras_pec: 0.00,
    mov_compras_total: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_incrementodisminuciondevalor_aec: 0.00,
    mov_incrementodisminuciondevalor_aep: 0.00,
    mov_incrementodisminuciondevalor_otros: 0.00,
    mov_incrementodisminuciondevalor_pec: 0.00,
    mov_incrementodisminuciondevalor_total: 0.00,
    mov_reclasificacion_aec: 0.00,
    mov_reclasificacion_aep: 0.00,
    mov_reclasificacion_otros: 0.00,
    mov_reclasificacion_pec: 0.00,
    mov_reclasificacion_total: 0.00,
    mov_saldofinal_aec: 0.00,
    mov_saldofinal_aep: 0.00,
    mov_saldofinal_otros: 0.00,
    mov_saldofinal_pec: 0.00,
    mov_saldofinal_total: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial_aec: 0.00,
    mov_saldoinicial_aep: 0.00,
    mov_saldoinicial_otros: 0.00,
    mov_saldoinicial_pec: 0.00,
    mov_saldoinicial_total: 0.00,
    mov_plantasencrecimiento_total: 0.00,
    mov_plantasenproduccion_total: 0.00,
    mov_otros_total: 0.00,
    mov_total_total: 0.00,
    mov_animalesenccrecimiento_total: 0.00,
    mov_animalesenproduccion_total: 0.00,
    mov_saldoinicial_pep: 0.00,
    mov_compras_pep: 0.00,
    mov_bajasoventas_pep: 0.00,
    mov_incrementodisminuciondevalor_pep: 0.00,
    mov_reclasificacion_pep: 0.00,
    mov_saldofinal_pep: 0.00,
  }
  movactivosbiologicos.userId = user.id
  movactivosbiologicos.periodoId = reporte.periodoId
  movactivosbiologicos.empresaId = reporte.empresaId
  movactivosbiologicos.reporteId = ''

  // MOV IMPUESTOS DIFERIDOS
  movimpuestosdiferidos = {
    mov_apid_afectacionaresultadosintegrales: 0.00,
    mov_apid_ajustesresultadosacumulados: 0.00,
    mov_apid_ajustesresultadospyg: 0.00,
    mov_apid_diferenciaporcuadrar: 0.00,
    mov_apid_generacionenrevision: 0.00,
    mov_apid_saldofinalsegunesf: 0.00,
    mov_apid_saldofinalsegunmovimiento: 0.00,
    mov_apid_saldoinicial: 0.00,
    mov_ppid_afectacionaresultadosintegrales: 0.00,
    mov_ppid_ajustesresultadosacumulados: 0.00,
    mov_ppid_ajustesresultadospyg: 0.00,
    mov_ppid_diferenciaporcuadrar: 0.00,
    mov_ppid_generacionenrevision: 0.00,
    mov_ppid_saldofinalsegunesf: 0.00,
    mov_ppid_saldofinalsegunmovimiento: 0.00,
    mov_ppid_saldoinicial: 0.00,
  }
  movimpuestosdiferidos.userId = user.id
  movimpuestosdiferidos.periodoId = reporte.periodoId
  movimpuestosdiferidos.empresaId = reporte.empresaId
  movimpuestosdiferidos.reporteId = ''

  // MOV JUBILACION PATRONAL
  movjubilacionpatronal = {
    mov_beneficiospagados: 0.00,
    mov_costofinanciero: 0.00,
    mov_costosporservicios: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_efectodeliquidaciones: 0.00,
    mov_gananciaoperdidaactuarial: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }
  movjubilacionpatronal.userId = user.id
  movjubilacionpatronal.periodoId = reporte.periodoId
  movjubilacionpatronal.empresaId = reporte.empresaId
  movjubilacionpatronal.reporteId = ''

  // DESHAUCIO
  deshaucio = {
    mov_beneficiospagados: 0.00,
    mov_costofinanciero: 0.00,
    mov_costosporservicios: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_efectodeliquidaciones: 0.00,
    mov_gananciaoperdidaactuarial: 0.00,
    mov_otros: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }
  deshaucio.userId = user.id
  deshaucio.periodoId = reporte.periodoId
  deshaucio.empresaId = reporte.empresaId
  deshaucio.reporteId = ''

  // MOV ACTIVOS FINANCIEROS A CORTO PLAZO
  activosfinancieroslargoplazo = {
    mov_provisionpordeterioro: 0.00,
    mov_ajustes: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_interesactualizacionantiguasinv: 0.00,
    mov_nuevasinversiones: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
  }
  activosfinancieroslargoplazo.userId = user.id
  activosfinancieroslargoplazo.periodoId = reporte.periodoId
  activosfinancieroslargoplazo.empresaId = reporte.empresaId
  activosfinancieroslargoplazo.reporteId = ''

  // MOV OTROS
  otros = {
    mov_ajuste: 0.00,
    mov_diferenciaporcuadrar: 0.00,
    mov_interesactualizacionantiguasinv: 0.00,
    mov_nuevasinversiones: 0.00,
    mov_saldofinalsegunesf: 0.00,
    mov_saldofinalsegunmovimiento: 0.00,
    mov_saldoinicial: 0.00,
    mov_dividendos_dividendospagados: 0.00,
    mov_islr_pagos: 0.00,
    mov_islr_provisiondelanio:  0.00,
    mov_pt_pagos:  0.00,
    mov_pt_provisiondelanio: 0.00,
  }
  otros.userId = user.id
  otros.periodoId = reporte.periodoId
  otros.empresaId = reporte.empresaId
  otros.reporteId = ''

  // PERIODO ANTERIOR
  // ES EL PERIODO ACTUAL DEL PERIODO ANTERIOR AL QUE SE INTENTA DUPLICAR

  const fechaActual = new Date()
  const fechaFormatoISO = fechaActual.toISOString()

  // ACTIVOS CORRIENTES ANT
  res.activoscorrientesifluc.id = ''
  res.activoscorrientesifluc.createdAt = fechaFormatoISO
  res.activoscorrientesifluc.updatedAt = fechaFormatoISO
  activoscorrientesifluc_ant = convertirAFlotantes(res.activoscorrientesifluc)
  activoscorrientesifluc_ant.userId = user.id
  activoscorrientesifluc_ant.periodoId = reporte.periodoId
  activoscorrientesifluc_ant.empresaId = reporte.empresaId
  activoscorrientesifluc_ant.reporteId = ''

  // ACTIVOS NO CORRIENTES ANT
  res.activosnocorrientesifluc.id = ''
  res.activosnocorrientesifluc.createdAt = fechaFormatoISO
  res.activosnocorrientesifluc.updatedAt = fechaFormatoISO
  activosnocorrientesifluc_ant = convertirAFlotantes(res.activosnocorrientesifluc)
  activosnocorrientesifluc_ant.userId = user.id
  activosnocorrientesifluc_ant.periodoId = reporte.periodoId
  activosnocorrientesifluc_ant.empresaId = reporte.empresaId
  activosnocorrientesifluc_ant.reporteId = ''

  // PASIVOS CORRIENTES ANT
  res.pasivoscorrientesifluc.id = ''
  res.pasivoscorrientesifluc.createdAt = fechaFormatoISO
  res.pasivoscorrientesifluc.updatedAt = fechaFormatoISO
  pasivoscorrientesifluc_ant = convertirAFlotantes(res.pasivoscorrientesifluc)
  pasivoscorrientesifluc_ant.userId = user.id
  pasivoscorrientesifluc_ant.periodoId = reporte.periodoId
  pasivoscorrientesifluc_ant.empresaId = reporte.empresaId
  pasivoscorrientesifluc_ant.reporteId = ''

  // PASIVOS NO CORRIENTES ANT
  res.pasivosnocorrientesifluc.id = ''
  res.pasivosnocorrientesifluc.createdAt = fechaFormatoISO
  res.pasivosnocorrientesifluc.updatedAt = fechaFormatoISO
  pasivosnocorrientesifluc_ant = convertirAFlotantes(res.pasivosnocorrientesifluc)
  pasivosnocorrientesifluc_ant.userId = user.id
  pasivosnocorrientesifluc_ant.periodoId = reporte.periodoId
  pasivosnocorrientesifluc_ant.empresaId = reporte.empresaId
  pasivosnocorrientesifluc_ant.reporteId = ''

  // PATRIMONIO ANT
  res.patrimonioifluc.id = ''
  res.patrimonioifluc.createdAt = fechaFormatoISO
  res.patrimonioifluc.updatedAt = fechaFormatoISO
  patrimonioifluc_ant = convertirAFlotantes(res.patrimonioifluc)
  patrimonioifluc_ant.userId = user.id
  patrimonioifluc_ant.periodoId = reporte.periodoId
  patrimonioifluc_ant.empresaId = reporte.empresaId
  patrimonioifluc_ant.reporteId = ''

  // COSTOS ANT
  res.costosifluc.id = ''
  res.costosifluc.createdAt = fechaFormatoISO
  res.costosifluc.updatedAt = fechaFormatoISO
  costosifluc_ant = convertirAFlotantes(res.costosifluc)
  costosifluc_ant.userId = user.id
  costosifluc_ant.periodoId = reporte.periodoId
  costosifluc_ant.empresaId = reporte.empresaId
  costosifluc_ant.reporteId = ''

  // INGRESOS ANT
  res.ingresosifluc.id = ''
  res.ingresosifluc.createdAt = fechaFormatoISO
  res.ingresosifluc.updatedAt = fechaFormatoISO
  ingresosifluc_ant = convertirAFlotantes(res.ingresosifluc)
  ingresosifluc_ant.userId = user.id
  ingresosifluc_ant.periodoId = reporte.periodoId
  ingresosifluc_ant.empresaId = reporte.empresaId
  ingresosifluc_ant.reporteId = ''

  // OTROS INGRESOS ANT
  res.otrosingresosifluc.id = ''
  res.otrosingresosifluc.createdAt = fechaFormatoISO
  res.otrosingresosifluc.updatedAt = fechaFormatoISO
  otrosingresosifluc_ant = convertirAFlotantes(res.otrosingresosifluc)
  otrosingresosifluc_ant.userId = user.id
  otrosingresosifluc_ant.periodoId = reporte.periodoId
  otrosingresosifluc_ant.empresaId = reporte.empresaId
  otrosingresosifluc_ant.reporteId = ''

  // GASTOS DE VENTAS ANT
  res.gastosdeventasifluc.id = ''
  res.gastosdeventasifluc.createdAt = fechaFormatoISO
  res.gastosdeventasifluc.updatedAt = fechaFormatoISO
  gastosdeventasifluc_ant = convertirAFlotantes(res.gastosdeventasifluc)
  gastosdeventasifluc_ant.userId = user.id
  gastosdeventasifluc_ant.periodoId = reporte.periodoId
  gastosdeventasifluc_ant.empresaId = reporte.empresaId
  gastosdeventasifluc_ant.reporteId = ''

  // GASTOS ADMINISTRATIVOS ANT
  res.gastosadministrativosifluc.id = ''
  res.gastosadministrativosifluc.createdAt = fechaFormatoISO
  res.gastosadministrativosifluc.updatedAt = fechaFormatoISO
  gastosadministrativosifluc_ant = convertirAFlotantes(res.gastosadministrativosifluc)
  gastosadministrativosifluc_ant.userId = user.id
  gastosadministrativosifluc_ant.periodoId = reporte.periodoId
  gastosadministrativosifluc_ant.empresaId = reporte.empresaId
  gastosadministrativosifluc_ant.reporteId = ''

  // GASTOS FINANCIEROS ANT
  res.gastosfinancierosifluc.id = ''
  res.gastosfinancierosifluc.createdAt = fechaFormatoISO
  res.gastosfinancierosifluc.updatedAt = fechaFormatoISO
  gastosfinancierosifluc_ant = convertirAFlotantes(res.gastosfinancierosifluc)
  gastosfinancierosifluc_ant.userId = user.id
  gastosfinancierosifluc_ant.periodoId = reporte.periodoId
  gastosfinancierosifluc_ant.empresaId = reporte.empresaId
  gastosfinancierosifluc_ant.reporteId = ''

  // OTROS GASTOS ANT
  res.otrosgastosifluc.id = ''
  res.otrosgastosifluc.createdAt = fechaFormatoISO
  res.otrosgastosifluc.updatedAt = fechaFormatoISO
  otrosgastosifluc_ant = convertirAFlotantes(res.otrosgastosifluc)
  otrosgastosifluc_ant.userId = user.id
  otrosgastosifluc_ant.periodoId = reporte.periodoId
  otrosgastosifluc_ant.empresaId = reporte.empresaId
  otrosgastosifluc_ant.reporteId = ''

  // RESULTADOS ANT
  res.resultadosifluc.id = ''
  res.resultadosifluc.createdAt = fechaFormatoISO
  res.resultadosifluc.updatedAt = fechaFormatoISO
  resultadosifluc_ant = convertirAFlotantes(res.resultadosifluc)
  resultadosifluc_ant.userId = user.id
  resultadosifluc_ant.periodoId = reporte.periodoId
  resultadosifluc_ant.empresaId = reporte.empresaId
  resultadosifluc_ant.reporteId = ''

  // RESULTADOS OPERACIONES CONTINUADAS ANT
  res.operacionesdiscontinuadasifluc.id = ''
  res.operacionesdiscontinuadasifluc.createdAt = fechaFormatoISO
  res.operacionesdiscontinuadasifluc.updatedAt = fechaFormatoISO
  operacionesdiscontinuadasifluc_ant = convertirAFlotantes(res.operacionesdiscontinuadasifluc)
  operacionesdiscontinuadasifluc_ant.userId = user.id
  operacionesdiscontinuadasifluc_ant.periodoId = reporte.periodoId
  operacionesdiscontinuadasifluc_ant.empresaId = reporte.empresaId
  operacionesdiscontinuadasifluc_ant.reporteId = ''

  // RESULTADOS INTEGRAL ANT
  res.otrosresultadosintegralifluc.id = ''
  res.otrosresultadosintegralifluc.createdAt = fechaFormatoISO
  res.otrosresultadosintegralifluc.updatedAt = fechaFormatoISO
  otrosresultadosintegralifluc_ant = convertirAFlotantes(res.otrosresultadosintegralifluc)
  otrosresultadosintegralifluc_ant.userId = user.id
  otrosresultadosintegralifluc_ant.periodoId = reporte.periodoId
  otrosresultadosintegralifluc_ant.empresaId = reporte.empresaId
  otrosresultadosintegralifluc_ant.reporteId = ''

  // RESULTADOS PARTICIPACION CONTROLADORA ANT
  res.resultadosparticipacioncontroladoraifluc.id = ''
  res.resultadosparticipacioncontroladoraifluc.createdAt = fechaFormatoISO
  res.resultadosparticipacioncontroladoraifluc.updatedAt = fechaFormatoISO
  resultadosparticipacioncontroladoraifluc_ant = convertirAFlotantes(res.resultadosparticipacioncontroladoraifluc)
  resultadosparticipacioncontroladoraifluc_ant.userId = user.id
  resultadosparticipacioncontroladoraifluc_ant.periodoId = reporte.periodoId
  resultadosparticipacioncontroladoraifluc_ant.empresaId = reporte.empresaId
  resultadosparticipacioncontroladoraifluc_ant.reporteId = ''

  // ACTIVIDADES DE OPERACION ANT
  res.actividadesdeoperacionifluc.id = ''
  res.actividadesdeoperacionifluc.createdAt = fechaFormatoISO
  res.actividadesdeoperacionifluc.updatedAt = fechaFormatoISO
  actividadesdeoperacionifluc_ant = convertirAFlotantes(res.actividadesdeoperacionifluc)
  actividadesdeoperacionifluc_ant.userId = user.id
  actividadesdeoperacionifluc_ant.periodoId = reporte.periodoId
  actividadesdeoperacionifluc_ant.empresaId = reporte.empresaId
  actividadesdeoperacionifluc_ant.reporteId = ''

  // ACTIVIDADES DE INVERSION ANT
  res.actividadesdeinversionifluc.id = ''
  res.actividadesdeinversionifluc.createdAt = fechaFormatoISO
  res.actividadesdeinversionifluc.updatedAt = fechaFormatoISO
  actividadesdeinversionifluc_ant = convertirAFlotantes(res.actividadesdeinversionifluc)
  actividadesdeinversionifluc_ant.userId = user.id
  actividadesdeinversionifluc_ant.periodoId = reporte.periodoId
  actividadesdeinversionifluc_ant.empresaId = reporte.empresaId
  actividadesdeinversionifluc_ant.reporteId = ''

  // ACTIVIDADES DE FINANCIAMIENTO ANT
  res.actividadesdefinanciamientoifluc.id = ''
  res.actividadesdefinanciamientoifluc.createdAt = fechaFormatoISO
  res.actividadesdefinanciamientoifluc.updatedAt = fechaFormatoISO
  actividadesdefinanciamientoifluc_ant = convertirAFlotantes(res.actividadesdefinanciamientoifluc)
  actividadesdefinanciamientoifluc_ant.userId = user.id
  actividadesdefinanciamientoifluc_ant.periodoId = reporte.periodoId
  actividadesdefinanciamientoifluc_ant.empresaId = reporte.empresaId
  actividadesdefinanciamientoifluc_ant.reporteId = ''

  // CONCI. GANANCIA NETA ANT
  res.conciliacionganancianetaifluc.id = ''
  res.conciliacionganancianetaifluc.createdAt = fechaFormatoISO
  res.conciliacionganancianetaifluc.updatedAt = fechaFormatoISO
  conciliacionganancianetaifluc_ant = convertirAFlotantes(res.conciliacionganancianetaifluc)
  conciliacionganancianetaifluc_ant.userId = user.id
  conciliacionganancianetaifluc_ant.periodoId = reporte.periodoId
  conciliacionganancianetaifluc_ant.empresaId = reporte.empresaId
  conciliacionganancianetaifluc_ant.reporteId = ''

  // MOV PERDIDAS ACUMULADAS DE CUENTAS INCOBRABLES Y DETERIORO ANT
  res.movperdidasacumuladascuentasincobrablesydeterioro.id = ''
  res.movperdidasacumuladascuentasincobrablesydeterioro.createdAt = fechaFormatoISO
  res.movperdidasacumuladascuentasincobrablesydeterioro.updatedAt = fechaFormatoISO
  movperdidasacumuladascuentasincobrablesydeterioro_ant = convertirAFlotantes(res.movperdidasacumuladascuentasincobrablesydeterioro)
  movperdidasacumuladascuentasincobrablesydeterioro_ant.userId = user.id
  movperdidasacumuladascuentasincobrablesydeterioro_ant.periodoId = reporte.periodoId
  movperdidasacumuladascuentasincobrablesydeterioro_ant.empresaId = reporte.empresaId
  movperdidasacumuladascuentasincobrablesydeterioro_ant.reporteId = ''

  // MOV PERDIDAS ACUMULADAS DE VALOR NETO DE REALIZACION ANT
  res.movperdidasacumuladasvalornetorealizacion.id = ''
  res.movperdidasacumuladasvalornetorealizacion.createdAt = fechaFormatoISO
  res.movperdidasacumuladasvalornetorealizacion.updatedAt = fechaFormatoISO
  movperdidasacumuladasvalornetorealizacion_ant = convertirAFlotantes(res.movperdidasacumuladasvalornetorealizacion)
  movperdidasacumuladasvalornetorealizacion_ant.userId = user.id
  movperdidasacumuladasvalornetorealizacion_ant.periodoId = reporte.periodoId
  movperdidasacumuladasvalornetorealizacion_ant.empresaId = reporte.empresaId
  movperdidasacumuladasvalornetorealizacion_ant.reporteId = ''

  // MOV PROPIEDADES PLANTAS Y EQUIPOS ANT
  res.movpropiedadesplantasyequipos.id = ''
  res.movpropiedadesplantasyequipos.createdAt = fechaFormatoISO
  res.movpropiedadesplantasyequipos.updatedAt = fechaFormatoISO
  movpropiedadesplantasyequipos_ant = convertirAFlotantes(res.movpropiedadesplantasyequipos)
  movpropiedadesplantasyequipos_ant.userId = user.id
  movpropiedadesplantasyequipos_ant.periodoId = reporte.periodoId
  movpropiedadesplantasyequipos_ant.empresaId = reporte.empresaId
  movpropiedadesplantasyequipos_ant.reporteId = ''

  // MOV PROPIEDADES DE INVERSION ANT
  res.movpropiedadesdeinversion.id = ''
  res.movpropiedadesdeinversion.createdAt = fechaFormatoISO
  res.movpropiedadesdeinversion.updatedAt = fechaFormatoISO
  movpropiedadesdeinversion_ant = convertirAFlotantes(res.movpropiedadesdeinversion)
  movpropiedadesdeinversion_ant.userId = user.id
  movpropiedadesdeinversion_ant.periodoId = reporte.periodoId
  movpropiedadesdeinversion_ant.empresaId = reporte.empresaId
  movpropiedadesdeinversion_ant.reporteId = ''

  // MOV INTANGIBLES ANT
  res.movintangibles.id = ''
  res.movintangibles.createdAt = fechaFormatoISO
  res.movintangibles.updatedAt = fechaFormatoISO
  movintangibles_ant = convertirAFlotantes(res.movintangibles)
  movintangibles_ant.userId = user.id
  movintangibles_ant.periodoId = reporte.periodoId
  movintangibles_ant.empresaId = reporte.empresaId
  movintangibles_ant.reporteId = ''

  // MOV ACTIVOS BIOLOGICOS ANT
  res.movactivosbiologicos.id = ''
  res.movactivosbiologicos.createdAt = fechaFormatoISO
  res.movactivosbiologicos.updatedAt = fechaFormatoISO
  movactivosbiologicos_ant = convertirAFlotantes(res.movactivosbiologicos)
  movactivosbiologicos_ant.userId = user.id
  movactivosbiologicos_ant.periodoId = reporte.periodoId
  movactivosbiologicos_ant.empresaId = reporte.empresaId
  movactivosbiologicos_ant.reporteId = ''

  // MOV INVERSIONES EN SUBSIDIARIAS ANT
  res.movimpuestosdiferidos.id = ''
  res.movimpuestosdiferidos.createdAt = fechaFormatoISO
  res.movimpuestosdiferidos.updatedAt = fechaFormatoISO
  movimpuestosdiferidos_ant = convertirAFlotantes(res.movimpuestosdiferidos)
  movimpuestosdiferidos_ant.userId = user.id
  movimpuestosdiferidos_ant.periodoId = reporte.periodoId
  movimpuestosdiferidos_ant.empresaId = reporte.empresaId
  movimpuestosdiferidos_ant.reporteId = ''

  // MOV JUBILACION PATRONAL ANT
  res.movjubilacionpatronal.id = ''
  res.movjubilacionpatronal.createdAt = fechaFormatoISO
  res.movjubilacionpatronal.updatedAt = fechaFormatoISO
  movjubilacionpatronal_ant = convertirAFlotantes(res.movjubilacionpatronal)
  movjubilacionpatronal_ant.userId = user.id
  movjubilacionpatronal_ant.periodoId = reporte.periodoId
  movjubilacionpatronal_ant.empresaId = reporte.empresaId
  movjubilacionpatronal_ant.reporteId = ''

  // MOV DESHAUCIO ANT
  res.deshaucio.id = ''
  res.deshaucio.createdAt = fechaFormatoISO
  res.deshaucio.updatedAt = fechaFormatoISO
  deshaucio_ant = convertirAFlotantes(res.deshaucio)
  deshaucio_ant.userId = user.id
  deshaucio_ant.periodoId = reporte.periodoId
  deshaucio_ant.empresaId = reporte.empresaId
  deshaucio_ant.reporteId = ''

  // MOV ACTIVOS FINANCIEROS A LARGO PLAZO ANT
  res.activosfinancieroslargoplazo.id = ''
  res.activosfinancieroslargoplazo.createdAt = fechaFormatoISO
  res.activosfinancieroslargoplazo.updatedAt = fechaFormatoISO
  activosfinancieroslargoplazo_ant = convertirAFlotantes(res.activosfinancieroslargoplazo)
  activosfinancieroslargoplazo_ant.userId = user.id
  activosfinancieroslargoplazo_ant.periodoId = reporte.periodoId
  activosfinancieroslargoplazo_ant.empresaId = reporte.empresaId
  activosfinancieroslargoplazo_ant.reporteId = ''

  // OTROS ANT
  res.otros.id = ''
  res.otros.createdAt = fechaFormatoISO
  res.otros.updatedAt = fechaFormatoISO
  otros_ant = convertirAFlotantes(res.otros)
  otros_ant.userId = user.id
  otros_ant.periodoId = reporte.periodoId
  otros_ant.empresaId = reporte.empresaId
  otros_ant.reporteId = ''

  const reportetxt = {
    reporte,
    activoscorrientesifluc,
    activosnocorrientesifluc,
    pasivoscorrientesifluc,
    pasivosnocorrientesifluc,
    patrimonioifluc,
    costosifluc,
    ingresosifluc,
    otrosingresosifluc,
    gastosdeventasifluc,
    gastosadministrativosifluc,
    gastosfinancierosifluc,
    otrosgastosifluc,
    resultadosifluc,
    operacionesdiscontinuadasifluc,
    otrosresultadosintegralifluc,
    resultadosparticipacioncontroladoraifluc,
    actividadesdeoperacionifluc,
    actividadesdeinversionifluc,
    actividadesdefinanciamientoifluc,
    conciliacionganancianetaifluc,
    ecpifluc,
    movperdidasacumuladascuentasincobrablesydeterioro,
    movperdidasacumuladasvalornetorealizacion,
    movpropiedadesplantasyequipos,
    movpropiedadesdeinversion,
    movintangibles,
    movactivosbiologicos,
    movimpuestosdiferidos,
    movjubilacionpatronal,
    deshaucio,
    activosfinancieroslargoplazo,
    otros,
    activoscorrientesifluc_ant,
    activosnocorrientesifluc_ant,
    pasivoscorrientesifluc_ant,
    pasivosnocorrientesifluc_ant,
    patrimonioifluc_ant,
    costosifluc_ant,
    ingresosifluc_ant,
    otrosingresosifluc_ant,
    gastosdeventasifluc_ant,
    gastosadministrativosifluc_ant,
    gastosfinancierosifluc_ant,
    otrosgastosifluc_ant,
    resultadosifluc_ant,
    operacionesdiscontinuadasifluc_ant,
    otrosresultadosintegralifluc_ant,
    resultadosparticipacioncontroladoraifluc_ant,
    actividadesdeoperacionifluc_ant,
    actividadesdeinversionifluc_ant,
    actividadesdefinanciamientoifluc_ant,
    conciliacionganancianetaifluc_ant,
    movperdidasacumuladascuentasincobrablesydeterioro_ant,
    movperdidasacumuladasvalornetorealizacion_ant,
    movpropiedadesplantasyequipos_ant,
    movpropiedadesdeinversion_ant,
    movintangibles_ant,
    movactivosbiologicos_ant,
    movimpuestosdiferidos_ant,
    movjubilacionpatronal_ant,
    deshaucio_ant,
    activosfinancieroslargoplazo_ant,
    otros_ant,
  }

  // console.log(reportetxt)
  addNewReporte(reportetxt, index)
}

const addNewReporte = (reporteData, index) => {
  superciasListStore.addReporteSupercias(reporteData)
    .then(res => {
      localStorage.clear()
      loading.value[index] = false

      // emit('update:isDrawerOpen', false)
      router.replace('/pages/supercias/list')


    })
}

const convertirAFlotantes = objeto => {
  const nuevoObjeto = {}

  Object.keys(objeto).forEach(key => {
    const nuevaClave = `${key}_ant`

    // Verificamos si la propiedad es un string y se puede convertir a un número
    if (typeof objeto[key] === 'string' && !isNaN(objeto[key])) {
      nuevoObjeto[nuevaClave] = parseFloat(objeto[key])
    } else {
      nuevoObjeto[nuevaClave] = objeto[key]
    }
  })

  return nuevoObjeto
}

const crearNuevoPeriodoDuplicado = (periodo, index) =>  {
  console.log("periodo", periodo)

  const periodoData = {
    periodo: periodo.periodo + 1,
    empresaId: periodo.empresaId,
    userId: periodo.userId,
  }

  periodoListStore.addPeriodo(periodoData).then(res => {
    const nuevoPeriodoData = {
      id: periodo.id,
      userId: periodo.userId,
      empresaId: periodo.empresaId,
      nuevoPeriodoId: res.data.id,
      periodo: periodo.periodo,
    }

    console.log('nuevoPeriodoData: ', nuevoPeriodoData)

    buscarReporteConDataParaDuplicar(nuevoPeriodoData, index)
  })
}

const duplicarPeriodoDB = (periodo, index) => {
  loading.value[index] = true

  console.log("periodo", periodo)
  console.log("index", index)

  crearNuevoPeriodoDuplicado(periodo, index)
}
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <VDialog
    max-width="500"
    :model-value="props.isDialogVisible"
    @update:model-value="updateModelValue"
  >
    <VCard class="text-center px-10 py-6">
      <VCardText>
        <VBtn
          icon
          variant="outlined"
          color="warning"
          class="mb-4"
          style="width: 88px; height: 88px; pointer-events: none;"
        >
          <span class="text-5xl">!</span>
        </VBtn>

        <h6 class="text-lg font-weight-medium">
          {{ props.confirmationMsg }}
        </h6>
      </VCardText>

      <VCardActions class="align-center justify-center gap-2">
        <VBtn
          variant="elevated"
          @click="onConfirmation"
        >
          Confirmar
        </VBtn>

        <VBtn
          color="secondary"
          variant="tonal"
          @click="onCancel"
        >
          Cancelar
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
