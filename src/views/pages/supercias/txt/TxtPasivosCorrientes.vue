<script setup>
import { useReportStore } from "@/@store/reportStore"
import { initializePasivosCorrientes, initializePasivosCorrientesAnt } from "@core/utils/initializers"

const reportStore = useReportStore()
const props = defineProps({
  data: {
    corrientes: null,
    corrientes_ant: null,
  },
})

const pasivosCorrientes = initializePasivosCorrientes()
const pasivosCorrientesAnt = initializePasivosCorrientesAnt()

/* PERIODO ACTUAL */
let esf_2 = pasivosCorrientes['esf_2']
let esf_201 = pasivosCorrientes['esf_201']
let esf_202 = pasivosCorrientes['esf_202']
let esf_20101 = pasivosCorrientes['esf_20101']
let esf_20102 = pasivosCorrientes['esf_20102']
let esf_20103 = pasivosCorrientes['esf_20103']
let esf_2010301 = pasivosCorrientes['esf_2010301']
let esf_201030101 = pasivosCorrientes['esf_201030101']
let esf_201030102 = pasivosCorrientes['esf_201030102']
let esf_201030103 = pasivosCorrientes['esf_201030103']
let esf_2010302 = pasivosCorrientes['esf_2010302']
let esf_201030201 = pasivosCorrientes['esf_201030201']
let esf_201030202 = pasivosCorrientes['esf_201030202']
let esf_201030203 = pasivosCorrientes['esf_201030203']
let esf_20104 = pasivosCorrientes['esf_20104']
let esf_2010401 = pasivosCorrientes['esf_2010401']
let esf_2010402 = pasivosCorrientes['esf_2010402']
let esf_20105 = pasivosCorrientes['esf_20105']
let esf_2010501 = pasivosCorrientes['esf_2010501']
let esf_2010502 = pasivosCorrientes['esf_2010502']
let esf_20106 = pasivosCorrientes['esf_20106']
let esf_2010601 = pasivosCorrientes['esf_2010601']
let esf_2010602 = pasivosCorrientes['esf_2010602']
let esf_2010603 = pasivosCorrientes['esf_2010603']
let esf_2010604 = pasivosCorrientes['esf_2010604']
let esf_2010605 = pasivosCorrientes['esf_2010605']
let esf_20107 = pasivosCorrientes['esf_20107']
let esf_2010701 = pasivosCorrientes['esf_2010701']
let esf_2010702 = pasivosCorrientes['esf_2010702']
let esf_2010703 = pasivosCorrientes['esf_2010703']
let esf_2010704 = pasivosCorrientes['esf_2010704']
let esf_2010705 = pasivosCorrientes['esf_2010705']
let esf_2010706 = pasivosCorrientes['esf_2010706']
let esf_2010707 = pasivosCorrientes['esf_2010707']
let esf_20108 = pasivosCorrientes['esf_20108']
let esf_2010801 = pasivosCorrientes['esf_2010801']
let esf_201080101 = pasivosCorrientes['esf_201080101']
let esf_201080102 = pasivosCorrientes['esf_201080102']
let esf_201080103 = pasivosCorrientes['esf_201080103']
let esf_201080104 = pasivosCorrientes['esf_201080104']
let esf_2010802 = pasivosCorrientes['esf_2010802']
let esf_201080201 = pasivosCorrientes['esf_201080201']
let esf_201080202 = pasivosCorrientes['esf_201080202']
let esf_201080203 = pasivosCorrientes['esf_201080203']
let esf_201080204 = pasivosCorrientes['esf_201080204']
let esf_20109 = pasivosCorrientes['esf_20109']
let esf_20110 = pasivosCorrientes['esf_20110']
let esf_2011001 = pasivosCorrientes['esf_2011001']
let esf_2011002 = pasivosCorrientes['esf_2011002']
let esf_20111 = pasivosCorrientes['esf_20111']
let esf_20112 = pasivosCorrientes['esf_20112']
let esf_2011201 = pasivosCorrientes['esf_2011201']
let esf_2011202 = pasivosCorrientes['esf_2011202']
let esf_201120201 = pasivosCorrientes['esf_201120201']
let esf_201120202 = pasivosCorrientes['esf_201120202']
let esf_20113 = pasivosCorrientes['esf_20113']
let esf_2011301 = pasivosCorrientes['esf_2011301']
let esf_2011302 = pasivosCorrientes['esf_2011302']
let esf_2011303 = pasivosCorrientes['esf_2011303']
let esf_2011304 = pasivosCorrientes['esf_2011304']
let esf_2011305 = pasivosCorrientes['esf_2011305']
let esf_2011306 = pasivosCorrientes['esf_2011306']
let esf_2011307 = pasivosCorrientes['esf_2011307']
let esf_2011308 = pasivosCorrientes['esf_2011308']
let esf_2011309 = pasivosCorrientes['esf_2011309']
let esf_2011310 = pasivosCorrientes['esf_2011310']
let esf_2011311 = pasivosCorrientes['esf_2011311']
let esf_2011312 = pasivosCorrientes['esf_2011312']
let esf_20114 = pasivosCorrientes['esf_20114']

/* PERIODO ANTERIOR */
let esf_2_ant = pasivosCorrientesAnt['esf_2_ant']
let esf_201_ant = pasivosCorrientesAnt['esf_201_ant']
let esf_202_ant = pasivosCorrientesAnt['esf_202_ant']
let esf_20101_ant = pasivosCorrientesAnt['esf_20101_ant']
let esf_20102_ant = pasivosCorrientesAnt['esf_20102_ant']
let esf_20103_ant = pasivosCorrientesAnt['esf_20103_ant']
let esf_2010301_ant = pasivosCorrientesAnt['esf_2010301_ant']
let esf_201030101_ant = pasivosCorrientesAnt['esf_201030101_ant']
let esf_201030102_ant = pasivosCorrientesAnt['esf_201030102_ant']
let esf_201030103_ant = pasivosCorrientesAnt['esf_201030103_ant']
let esf_2010302_ant = pasivosCorrientesAnt['esf_2010302_ant']
let esf_201030201_ant = pasivosCorrientesAnt['esf_201030201_ant']
let esf_201030202_ant = pasivosCorrientesAnt['esf_201030202_ant']
let esf_201030203_ant = pasivosCorrientesAnt['esf_201030203_ant']
let esf_20104_ant = pasivosCorrientesAnt['esf_20104_ant']
let esf_2010401_ant = pasivosCorrientesAnt['esf_2010401_ant']
let esf_2010402_ant = pasivosCorrientesAnt['esf_2010402_ant']
let esf_20105_ant = pasivosCorrientesAnt['esf_20105_ant']
let esf_2010501_ant = pasivosCorrientesAnt['esf_2010501_ant']
let esf_2010502_ant = pasivosCorrientesAnt['esf_2010502_ant']
let esf_20106_ant = pasivosCorrientesAnt['esf_20106_ant']
let esf_2010601_ant = pasivosCorrientesAnt['esf_2010601_ant']
let esf_2010602_ant = pasivosCorrientesAnt['esf_2010602_ant']
let esf_2010603_ant = pasivosCorrientesAnt['esf_2010603_ant']
let esf_2010604_ant = pasivosCorrientesAnt['esf_2010604_ant']
let esf_2010605_ant = pasivosCorrientesAnt['esf_2010605_ant']
let esf_20107_ant = pasivosCorrientesAnt['esf_20107_ant']
let esf_2010701_ant = pasivosCorrientesAnt['esf_2010701_ant']
let esf_2010702_ant = pasivosCorrientesAnt['esf_2010702_ant']
let esf_2010703_ant = pasivosCorrientesAnt['esf_2010703_ant']
let esf_2010704_ant = pasivosCorrientesAnt['esf_2010704_ant']
let esf_2010705_ant = pasivosCorrientesAnt['esf_2010705_ant']
let esf_2010706_ant = pasivosCorrientesAnt['esf_2010706_ant']
let esf_2010707_ant = pasivosCorrientesAnt['esf_2010707_ant']
let esf_20108_ant = pasivosCorrientesAnt['esf_20108_ant']
let esf_2010801_ant = pasivosCorrientesAnt['esf_2010801_ant']
let esf_201080101_ant = pasivosCorrientesAnt['esf_201080101_ant']
let esf_201080102_ant = pasivosCorrientesAnt['esf_201080102_ant']
let esf_201080103_ant = pasivosCorrientesAnt['esf_201080103_ant']
let esf_201080104_ant = pasivosCorrientesAnt['esf_201080104_ant']
let esf_2010802_ant = pasivosCorrientesAnt['esf_2010802_ant']
let esf_201080201_ant = pasivosCorrientesAnt['esf_201080201_ant']
let esf_201080202_ant = pasivosCorrientesAnt['esf_201080202_ant']
let esf_201080203_ant = pasivosCorrientesAnt['esf_201080203_ant']
let esf_201080204_ant = pasivosCorrientesAnt['esf_201080204_ant']
let esf_20109_ant = pasivosCorrientesAnt['esf_20109_ant']
let esf_20110_ant = pasivosCorrientesAnt['esf_20110_ant']
let esf_2011001_ant = pasivosCorrientesAnt['esf_2011001_ant']
let esf_2011002_ant = pasivosCorrientesAnt['esf_2011002_ant']
let esf_20111_ant = pasivosCorrientesAnt['esf_20111_ant']
let esf_20112_ant = pasivosCorrientesAnt['esf_20112_ant']
let esf_2011201_ant = pasivosCorrientesAnt['esf_2011201_ant']
let esf_2011202_ant = pasivosCorrientesAnt['esf_2011202_ant']
let esf_201120201_ant = pasivosCorrientesAnt['esf_201120201_ant']
let esf_201120202_ant = pasivosCorrientesAnt['esf_201120202_ant']
let esf_20113_ant = pasivosCorrientesAnt['esf_20113_ant']
let esf_2011301_ant = pasivosCorrientesAnt['esf_2011301_ant']
let esf_2011302_ant = pasivosCorrientesAnt['esf_2011302_ant']
let esf_2011303_ant = pasivosCorrientesAnt['esf_2011303_ant']
let esf_2011304_ant = pasivosCorrientesAnt['esf_2011304_ant']
let esf_2011305_ant = pasivosCorrientesAnt['esf_2011305_ant']
let esf_2011306_ant = pasivosCorrientesAnt['esf_2011306_ant']
let esf_2011307_ant = pasivosCorrientesAnt['esf_2011307_ant']
let esf_2011308_ant = pasivosCorrientesAnt['esf_2011308_ant']
let esf_2011309_ant = pasivosCorrientesAnt['esf_2011309_ant']
let esf_2011310_ant = pasivosCorrientesAnt['esf_2011310_ant']
let esf_2011311_ant = pasivosCorrientesAnt['esf_2011311_ant']
let esf_2011312_ant = pasivosCorrientesAnt['esf_2011312_ant']
let esf_20114_ant = pasivosCorrientesAnt['esf_20114_ant']

let values = ref([])

let handleActionClick = async id => {
  esf_201.value = (Number(esf_20101.value) + Number(esf_20102.value) + Number(esf_20103.value) + Number(esf_20104.value) + Number(esf_20105.value) + Number(esf_20106.value) + Number(esf_20107.value) + Number(esf_20108.value) + Number(esf_20109.value) + Number(esf_20110.value) + Number(esf_20111.value) + Number(esf_20112.value) + Number(esf_20113.value) + Number(esf_20114.value)).toFixed(2)

  props.data.corrientes = esf_201.value
  esf_20103.value = (Number(esf_2010301.value) + Number(esf_2010302.value)).toFixed(2)
  esf_2010301.value = (Number(esf_201030101.value) + Number(esf_201030102.value) + Number(esf_201030103.value)).toFixed(2)
  esf_2010302.value = (Number(esf_201030201.value) + Number(esf_201030202.value) + Number(esf_201030203.value)).toFixed(2)
  esf_20104.value = (Number(esf_2010401.value) + Number(esf_2010402.value)).toFixed(2)
  esf_20105.value = (Number(esf_2010501.value) + Number(esf_2010502.value)).toFixed(2)
  esf_20106.value = (Number(esf_2010601.value) + Number(esf_2010602.value) + Number(esf_2010603.value) + Number(esf_2010604.value) + Number(esf_2010605.value)).toFixed(2)
  esf_20107.value = (Number(esf_2010701.value) + Number(esf_2010702.value) + Number(esf_2010703.value) + Number(esf_2010704.value) + Number(esf_2010705.value) + Number(esf_2010706.value) + Number(esf_2010707.value)).toFixed(2)
  esf_20108.value = (Number(esf_2010801.value) + Number(esf_2010802.value)).toFixed(2)
  esf_2010801.value = (Number(esf_201080101.value) + Number(esf_201080102.value) + Number(esf_201080103.value) + Number(esf_201080104.value)).toFixed(2)
  esf_2010802.value = (Number(esf_201080201.value) + Number(esf_201080202.value) + Number(esf_201080203.value) + Number(esf_201080204.value)).toFixed(2)
  esf_20110.value = (Number(esf_2011001.value) + Number(esf_2011002.value)).toFixed(2)
  esf_20112.value = (Number(esf_2011201.value) + Number(esf_2011202.value)).toFixed(2)
  esf_2011202.value = (Number(esf_201120201.value) + Number(esf_201120202.value)).toFixed(2)
  esf_20113.value = (Number(esf_2011301.value) + Number(esf_2011302.value) + Number(esf_2011303.value) + Number(esf_2011304.value) +  Number(esf_2011305.value) +  Number(esf_2011306.value) +  Number(esf_2011307.value) +  Number(esf_2011308.value) +  Number(esf_2011309.value) +  Number(esf_2011310.value) +  Number(esf_2011311.value) +  Number(esf_2011312.value)).toFixed(2)

  const pasivoscorrientes = {
    esf_201: esf_201.value,
    esf_20101: esf_20101.value,
    esf_20102: esf_20102.value,
    esf_20103: esf_20103.value,
    esf_2010301: esf_2010301.value,
    esf_201030101: esf_201030101.value,
    esf_201030102: esf_201030102.value,
    esf_201030103: esf_201030103.value,
    esf_2010302: esf_2010302.value,
    esf_201030201: esf_201030201.value,
    esf_201030202: esf_201030202.value,
    esf_201030203: esf_201030203.value,
    esf_20104: esf_20104.value,
    esf_2010401: esf_2010401.value,
    esf_2010402: esf_2010402.value,
    esf_20105: esf_20105.value,
    esf_2010501: esf_2010501.value,
    esf_2010502: esf_2010502.value,
    esf_20106: esf_20106.value,
    esf_2010601: esf_2010601.value,
    esf_2010602: esf_2010602.value,
    esf_2010603: esf_2010603.value,
    esf_2010604: esf_2010604.value,
    esf_2010605: esf_2010605.value,
    esf_20107: esf_20107.value,
    esf_2010701: esf_2010701.value,
    esf_2010702: esf_2010702.value,
    esf_2010703: esf_2010703.value,
    esf_2010704: esf_2010704.value,
    esf_2010705: esf_2010705.value,
    esf_2010706: esf_2010706.value,
    esf_2010707: esf_2010707.value,
    esf_20108: esf_20108.value,
    esf_2010801: esf_2010801.value,
    esf_201080101: esf_201080101.value,
    esf_201080102: esf_201080102.value,
    esf_201080103: esf_201080103.value,
    esf_201080104: esf_201080104.value,
    esf_2010802: esf_2010802.value,
    esf_201080201: esf_201080201.value,
    esf_201080202: esf_201080202.value,
    esf_201080203: esf_201080203.value,
    esf_201080204: esf_201080204.value,
    esf_20109: esf_20109.value,
    esf_20110: esf_20110.value,
    esf_2011001: esf_2011001.value,
    esf_2011002: esf_2011002.value,
    esf_20111: esf_20111.value,
    esf_20112: esf_20112.value,
    esf_2011201: esf_2011201.value,
    esf_2011202: esf_2011202.value,
    esf_201120201: esf_201120201.value,
    esf_201120202: esf_201120202.value,
    esf_20113: esf_20113.value,
    esf_2011301: esf_2011301.value,
    esf_2011302: esf_2011302.value,
    esf_2011303: esf_2011303.value,
    esf_2011304: esf_2011304.value,
    esf_2011305: esf_2011305.value,
    esf_2011306: esf_2011306.value,
    esf_2011307: esf_2011307.value,
    esf_2011308: esf_2011308.value,
    esf_2011309: esf_2011309.value,
    esf_2011310: esf_2011310.value,
    esf_2011311: esf_2011311.value,
    esf_2011312: esf_2011312.value,
    esf_20114: esf_20114.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    pasivoscorrientesifluc: pasivoscorrientes,
  })
}

let handleActionClick_ant = async id => {
  esf_2_ant.value = (Number(esf_201_ant.value) + Number(esf_202_ant.value)).toFixed(2)
  esf_201_ant.value = (Number(esf_20101_ant.value) + Number(esf_20102_ant.value) + Number(esf_20103_ant.value) + Number(esf_20104_ant.value) + Number(esf_20105_ant.value) + Number(esf_20106_ant.value) + Number(esf_20107_ant.value) + Number(esf_20108_ant.value) + Number(esf_20109_ant.value) + Number(esf_20110_ant.value) + Number(esf_20111_ant.value) + Number(esf_20112_ant.value) + Number(esf_20113_ant.value) + Number(esf_20114_ant.value)).toFixed(2)

  props.data.corrientes_ant = esf_201_ant.value
  esf_20103_ant.value = (Number(esf_2010301_ant.value) + Number(esf_2010302_ant.value)).toFixed(2)
  esf_2010301_ant.value = (Number(esf_201030101_ant.value) + Number(esf_201030102_ant.value) + Number(esf_201030103_ant.value)).toFixed(2)
  esf_2010302_ant.value = (Number(esf_201030201_ant.value) + Number(esf_201030202_ant.value) + Number(esf_201030203_ant.value)).toFixed(2)
  esf_20104_ant.value = (Number(esf_2010401_ant.value) + Number(esf_2010402_ant.value)).toFixed(2)
  esf_20105_ant.value = (Number(esf_2010501_ant.value) + Number(esf_2010502_ant.value)).toFixed(2)
  esf_20106_ant.value = (Number(esf_2010601_ant.value) + Number(esf_2010602_ant.value) + Number(esf_2010603_ant.value) + Number(esf_2010604_ant.value) + Number(esf_2010605_ant.value)).toFixed(2)
  esf_20107_ant.value = (Number(esf_2010701_ant.value) + Number(esf_2010702_ant.value) + Number(esf_2010703_ant.value) + Number(esf_2010704_ant.value) + Number(esf_2010705_ant.value) + Number(esf_2010706_ant.value) + Number(esf_2010707_ant.value)).toFixed(2)
  esf_20108_ant.value = (Number(esf_2010801_ant.value) + Number(esf_2010802_ant.value)).toFixed(2)
  esf_2010801_ant.value = (Number(esf_201080101_ant.value) + Number(esf_201080102_ant.value) + Number(esf_201080103_ant.value) + Number(esf_201080104_ant.value)).toFixed(2)
  esf_2010802_ant.value = (Number(esf_201080201_ant.value) + Number(esf_201080202_ant.value) + Number(esf_201080203_ant.value) + Number(esf_201080204_ant.value)).toFixed(2)
  esf_20110_ant.value = (Number(esf_2011001_ant.value) + Number(esf_2011002_ant.value)).toFixed(2)
  esf_20112_ant.value = (Number(esf_2011201_ant.value) + Number(esf_2011202_ant.value)).toFixed(2)
  esf_2011202_ant.value = (Number(esf_201120201_ant.value) + Number(esf_201120202_ant.value)).toFixed(2)
  esf_20113_ant.value = (Number(esf_2011301_ant.value) + Number(esf_2011302_ant.value) + Number(esf_2011303_ant.value) + Number(esf_2011304_ant.value) +  Number(esf_2011305_ant.value) +  Number(esf_2011306_ant.value) +  Number(esf_2011307_ant.value) +  Number(esf_2011308_ant.value) +  Number(esf_2011309_ant.value) +  Number(esf_2011310_ant.value) +  Number(esf_2011311_ant.value) +  Number(esf_2011312_ant.value)).toFixed(2)

  const pasivoscorrientes_ant = {
    esf_2_ant: esf_2_ant.value,
    esf_201_ant: esf_201_ant.value,
    esf_20101_ant: esf_20101_ant.value,
    esf_20102_ant: esf_20102_ant.value,
    esf_20103_ant: esf_20103_ant.value,
    esf_2010301_ant: esf_2010301_ant.value,
    esf_201030101_ant: esf_201030101_ant.value,
    esf_201030102_ant: esf_201030102_ant.value,
    esf_201030103_ant: esf_201030103_ant.value,
    esf_2010302_ant: esf_2010302_ant.value,
    esf_201030201_ant: esf_201030201_ant.value,
    esf_201030202_ant: esf_201030202_ant.value,
    esf_201030203_ant: esf_201030203_ant.value,
    esf_20104_ant: esf_20104_ant.value,
    esf_2010401_ant: esf_2010401_ant.value,
    esf_2010402_ant: esf_2010402_ant.value,
    esf_20105_ant: esf_20105_ant.value,
    esf_2010501_ant: esf_2010501_ant.value,
    esf_2010502_ant: esf_2010502_ant.value,
    esf_20106_ant: esf_20106_ant.value,
    esf_2010601_ant: esf_2010601_ant.value,
    esf_2010602_ant: esf_2010602_ant.value,
    esf_2010603_ant: esf_2010603_ant.value,
    esf_2010604_ant: esf_2010604_ant.value,
    esf_2010605_ant: esf_2010605_ant.value,
    esf_20107_ant: esf_20107_ant.value,
    esf_2010701_ant: esf_2010701_ant.value,
    esf_2010702_ant: esf_2010702_ant.value,
    esf_2010703_ant: esf_2010703_ant.value,
    esf_2010704_ant: esf_2010704_ant.value,
    esf_2010705_ant: esf_2010705_ant.value,
    esf_2010706_ant: esf_2010706_ant.value,
    esf_2010707_ant: esf_2010707_ant.value,
    esf_20108_ant: esf_20108_ant.value,
    esf_2010801_ant: esf_2010801_ant.value,
    esf_201080101_ant: esf_201080101_ant.value,
    esf_201080102_ant: esf_201080102_ant.value,
    esf_201080103_ant: esf_201080103_ant.value,
    esf_201080104_ant: esf_201080104_ant.value,
    esf_2010802_ant: esf_2010802_ant.value,
    esf_201080201_ant: esf_201080201_ant.value,
    esf_201080202_ant: esf_201080202_ant.value,
    esf_201080203_ant: esf_201080203_ant.value,
    esf_201080204_ant: esf_201080204_ant.value,
    esf_20109_ant: esf_20109_ant.value,
    esf_20110_ant: esf_20110_ant.value,
    esf_2011001_ant: esf_2011001_ant.value,
    esf_2011002_ant: esf_2011002_ant.value,
    esf_20111_ant: esf_20111_ant.value,
    esf_20112_ant: esf_20112_ant.value,
    esf_2011201_ant: esf_2011201_ant.value,
    esf_2011202_ant: esf_2011202_ant.value,
    esf_201120201_ant: esf_201120201_ant.value,
    esf_201120202_ant: esf_201120202_ant.value,
    esf_20113_ant: esf_20113_ant.value,
    esf_2011301_ant: esf_2011301_ant.value,
    esf_2011302_ant: esf_2011302_ant.value,
    esf_2011303_ant: esf_2011303_ant.value,
    esf_2011304_ant: esf_2011304_ant.value,
    esf_2011305_ant: esf_2011305_ant.value,
    esf_2011306_ant: esf_2011306_ant.value,
    esf_2011307_ant: esf_2011307_ant.value,
    esf_2011308_ant: esf_2011308_ant.value,
    esf_2011309_ant: esf_2011309_ant.value,
    esf_2011310_ant: esf_2011310_ant.value,
    esf_2011311_ant: esf_2011311_ant.value,
    esf_2011312_ant: esf_2011312_ant.value,
    esf_20114_ant: esf_20114_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    pasivoscorrientesifluc_ant: pasivoscorrientes_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_ant(1))
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <!-- 👉 Add purchased products -->
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">

          <VRow>
            <VCol cols="12" md="12" style="font-size:8px;">

              <VRow class="font-weight-medium px-4 mb-2">
                <VCol cols="12" md="6">
                  <span class="text-sm" style="font-size:0.900rem">CONCEPTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm" style="font-size:0.900rem">CUENTA</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ACTUAL</span>
                </VCol>
              </VRow>

              <VDivider />

              <!--
              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm">PASIVO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+)2" type="number" disabled v-model="esf_2"/>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2" type="number" disabled v-model="esf_2_ant"/>
                </VCol>
              </VRow>
              -->

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PASIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20101" type="number" v-model="esf_20101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20101" type="number" v-model="esf_20101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PASIVOS POR CONTRATO DE ARRENDAMIENTO</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <span class="text-sm">20102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20102" type="number" v-model="esf_20102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20102" type="number" v-model="esf_20102_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CUENTAS Y DOCUMENTOS POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20103" type="number" disabled v-model="esf_20103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20103" type="number" disabled v-model="esf_20103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010301" type="number" disabled v-model="esf_2010301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010301" type="number" disabled v-model="esf_2010301_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030101" type="number" v-model="esf_201030101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030101" type="number" v-model="esf_201030101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030102" type="number" v-model="esf_201030102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030102" type="number" v-model="esf_201030102_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030103" type="number" v-model="esf_201030103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030103" type="number" v-model="esf_201030103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010302" type="number" disabled v-model="esf_2010302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010302" type="number" disabled v-model="esf_2010302_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030201" type="number" v-model="esf_201030201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030201" type="number" v-model="esf_201030201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030202" type="number" v-model="esf_201030202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030202" type="number" v-model="esf_201030202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201030203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030203" type="number" v-model="esf_201030203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201030203" type="number" v-model="esf_201030203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OBLIGACIONES CON INSTITUCIONES FINANCIERAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20104" type="number" disabled  v-model="esf_20104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20104" type="number" disabled  v-model="esf_20104_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010401" type="number" v-model="esf_2010401" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010401" type="number" v-model="esf_2010401_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010402" type="number" v-model="esf_2010402" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010402" type="number" v-model="esf_2010402_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PROVISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20105" type="number" disabled v-model="esf_20105" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20105" type="number" disabled v-model="esf_20105_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010501" type="number" v-model="esf_2010501" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010501" type="number" v-model="esf_2010501_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010502" type="number" v-model="esf_2010502" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010502" type="number" v-model="esf_2010502_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PORCIÓN CORRIENTE DE VALORES EMITIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20106" type="number" disabled v-model="esf_20106" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20106" type="number" disabled v-model="esf_20106_ant"  @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBLIGACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010601" type="number" v-model="esf_2010601" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010601" type="number" v-model="esf_2010601_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PAPEL COMERCIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010602" type="number" v-model="esf_2010602" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010602" type="number" v-model="esf_2010602_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">VALORES DE TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010603</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010603" type="number" v-model="esf_2010603" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010603" type="number" v-model="esf_2010603_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010604</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010604" type="number" v-model="esf_2010604" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010604" type="number" v-model="esf_2010604_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INTERESES POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010605</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010605" type="number" v-model="esf_2010605" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010605" type="number" v-model="esf_2010605_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTRAS OBLIGACIONES CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20107" type="number" disabled v-model="esf_20107" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20107" type="number" disabled v-model="esf_20107_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CON LA ADMINISTRACIÓN TRIBUTARIA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010701</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010701" type="number"  v-model="esf_2010701" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010701" type="number"  v-model="esf_2010701_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">IMPUESTO A LA RENTA POR PAGAR DEL EJERCICIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010702</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010702" type="number" v-model="esf_2010702" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010702" type="number" v-model="esf_2010702_ant"  @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CON EL IESS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010703</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010703" type="number" v-model="esf_2010703" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010703" type="number" v-model="esf_2010703_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR BENEFICIOS A LA LEY DE EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010704</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010704" type="number" v-model="esf_2010704" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010704" type="number" v-model="esf_2010704_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PARTICIPACIÓN TRABAJADORES POR PAGAR DEL EJERCICIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010705</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010705" type="number" v-model="esf_2010705" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010705" type="number" v-model="esf_2010705_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DIVIDENDOS POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010706</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010706" type="number" v-model="esf_2010706" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010706" type="number" v-model="esf_2010706_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010707</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010707" type="number" v-model="esf_2010707" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010707" type="number" v-model="esf_2010707_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CUENTAS POR PAGAR A RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20108" type="number" disabled v-model="esf_20108" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20108" type="number" disabled v-model="esf_20108_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">LOCALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010801</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010801" type="number" disabled v-model="esf_2010801" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010801" type="number" disabled v-model="esf_2010801_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS DE ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080101" type="number" v-model="esf_201080101" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080101" type="number" v-model="esf_201080101_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRÉSTAMOS DE COMPAÑÍAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080102" type="number" v-model="esf_201080102" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080102" type="number" v-model="esf_201080102_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080103" type="number" v-model="esf_201080103" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080103" type="number" v-model="esf_201080103_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080104" type="number" v-model="esf_201080104" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080104" type="number" v-model="esf_201080104_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2010802</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010802" type="number" disabled v-model="esf_2010802" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2010802" type="number" disabled v-model="esf_2010802_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRESTAMOS DE ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080201" type="number" v-model="esf_201080201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080201" type="number" v-model="esf_201080201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PRESTAMOS DE COMPAÑÍAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080202" type="number" v-model="esf_201080202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080202" type="number" v-model="esf_201080202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080203</span>
                </VCol>
                <VCol cols="12" md="2" >>
                  <VTextField label="(+) 201080203" type="number" v-model="esf_201080203" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >>
                  <VTextField label="(+) 201080203" type="number" v-model="esf_201080203_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201080204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080204" type="number" v-model="esf_201080204" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201080204" type="number" v-model="esf_201080204_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS PASIVOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20109</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20109" type="number" v-model="esf_20109" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20109" type="number" v-model="esf_20109_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">ANTICIPOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20110</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20110" type="number" disabled v-model="esf_20110" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20110" type="number" disabled v-model="esf_20110_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ANTICIPOS DE CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011001</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011001" type="number" v-model="esf_2011001" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011001" type="number" v-model="esf_2011001_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS ANTICIPOS RECIBIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011002</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011002" type="number" v-model="esf_2011002" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011002" type="number" v-model="esf_2011002_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PASIVOS DIRECTAMENTE ASOCIADOS CON LOS ACTIVOS NO CORRIENTES Y OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20111</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20111" type="number" v-model="esf_20111" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20111" type="number" v-model="esf_20111_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PORCION CORRIENTE DE PROVISIONES POR BENEFICIOS A EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20112</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20112" type="number" disabled v-model="esf_20112" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20112" type="number" disabled v-model="esf_20112_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">JUBILACIÓN PATRONAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011201" type="number" v-model="esf_2011201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011201" type="number" v-model="esf_2011201_ant"  @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS BENEFICIOS PARA LOS EMPLEADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011202" type="number" disabled v-model="esf_2011202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011202" type="number" disabled v-model="esf_2011202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DESHAUCIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201120201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201120201" type="number" v-model="esf_201120201" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201120201" type="number" v-model="esf_201120201_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201120202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201120202" type="number" v-model="esf_201120202" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 201120202" type="number" v-model="esf_201120202_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS PASIVOS CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20113</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20113" type="number" disabled v-model="esf_20113" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20113" type="number" disabled v-model="esf_20113_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">COMISIONES POR PAGAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011301" type="number" v-model="esf_2011301" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011301" type="number" v-model="esf_2011301_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR OPERACIONES BÚRSATILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011302" type="number" v-model="esf_2011302" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011302" type="number" v-model="esf_2011302_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR CUSTODIA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011303" type="number" v-model="esf_2011303" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011303" type="number" v-model="esf_2011303_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR ADMINISTRACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011304" type="number" v-model="esf_2011304" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011304" type="number" v-model="esf_2011304_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTRAS COMISIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011305" type="number" v-model="esf_2011305" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011305" type="number" v-model="esf_2011305_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SANCIONES Y MULTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011306" type="number" v-model="esf_2011306" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011306" type="number" v-model="esf_2011306_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INDEMNIZACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011307" type="number" v-model="esf_2011307" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011307" type="number" v-model="esf_2011307_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBLIGACIONES JUDICIALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011308</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011308" type="number" v-model="esf_2011308" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011308" type="number" v-model="esf_2011308_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ACREEDORES POR INTERMEDIACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011309</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011309" type="number" v-model="esf_2011309" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011309" type="number" v-model="esf_2011309_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBLIGACIONES POR COMPROMISOS DE RECOMPRA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011310</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011310" type="number" v-model="esf_2011310" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011310" type="number" v-model="esf_2011310_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">POR CONTRATOS DE UNDERWRITING</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011311</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011311" type="number" v-model="esf_2011311" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011311" type="number" v-model="esf_2011311_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">2011312</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011312" type="number" v-model="esf_2011312" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 2011312" type="number" v-model="esf_2011312_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">PASIVOS FINANCIEROS AL COSTO AMORTIZADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">20114</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20114" type="number" v-model="esf_20114" @input="handleActionClick(this)" @blur="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 20114" type="number" v-model="esf_20114_ant" @input="handleActionClick_ant(this)" @blur="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">PASIVO CORRIENTE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">201</span>
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 201" type="number" disabled v-model="esf_201" />
                </VCol>
                <VCol cols="12" md="2">
                  <VTextField label="(+) 201" type="number" disabled v-model="esf_201_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
