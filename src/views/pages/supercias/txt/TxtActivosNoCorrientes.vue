<script setup>
import {
  initializeActivosNoCorrientes,
  initializeActivosNoCorrientesAnt,
} from "@core/utils/initializers"

const props = defineProps({
  data: {
    nocorrientes: null,
    nocorrientes_ant: null,
  },
})

import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const activosNoCorrientes = initializeActivosNoCorrientes()
const activosNoCorrientesAnt = initializeActivosNoCorrientesAnt()

/* PERIODO ACTUAL */
let esf_1 = activosNoCorrientes['esf_1']
let esf_101 = activosNoCorrientes['esf_101']
let esf_102 = activosNoCorrientes['esf_102']
let esf_10201 = activosNoCorrientes['esf_10201']
let esf_1020101 = activosNoCorrientes['esf_1020101']
let esf_1020102 = activosNoCorrientes['esf_1020102']
let esf_1020103 = activosNoCorrientes['esf_1020103']
let esf_1020104 = activosNoCorrientes['esf_1020104']
let esf_1020105 = activosNoCorrientes['esf_1020105']
let esf_1020106 = activosNoCorrientes['esf_1020106']
let esf_1020107 = activosNoCorrientes['esf_1020107']
let esf_1020108 = activosNoCorrientes['esf_1020108']
let esf_1020109 = activosNoCorrientes['esf_1020109']
let esf_1020110 = activosNoCorrientes['esf_1020110']
let esf_1020111 = activosNoCorrientes['esf_1020111']
let esf_1020112 = activosNoCorrientes['esf_1020112']
let esf_1020113 = activosNoCorrientes['esf_1020113']
let esf_1020114 = activosNoCorrientes['esf_1020114']
let esf_102011401 = activosNoCorrientes['esf_102011401']
let esf_102011402 = activosNoCorrientes['esf_102011402']
let esf_102011403 = activosNoCorrientes['esf_102011403']
let esf_10202 = activosNoCorrientes['esf_10202']
let esf_1020201 = activosNoCorrientes['esf_1020201']
let esf_102020101 = activosNoCorrientes['esf_102020101']
let esf_102020102 = activosNoCorrientes['esf_102020102']
let esf_1020202 = activosNoCorrientes['esf_1020202']
let esf_102020201 = activosNoCorrientes['esf_102020201']
let esf_102020202 = activosNoCorrientes['esf_102020202']
let esf_1020203 = activosNoCorrientes['esf_1020203']
let esf_1020204 = activosNoCorrientes['esf_1020204']
let esf_10203 = activosNoCorrientes['esf_10203']
let esf_1020301 = activosNoCorrientes['esf_1020301']
let esf_1020302 = activosNoCorrientes['esf_1020302']
let esf_1020303 = activosNoCorrientes['esf_1020303']
let esf_1020304 = activosNoCorrientes['esf_1020304']
let esf_1020305 = activosNoCorrientes['esf_1020305']
let esf_1020306 = activosNoCorrientes['esf_1020306']
let esf_10204 = activosNoCorrientes['esf_10204']
let esf_1020401 = activosNoCorrientes['esf_1020401']
let esf_1020402 = activosNoCorrientes['esf_1020402']
let esf_1020403 = activosNoCorrientes['esf_1020403']
let esf_1020404 = activosNoCorrientes['esf_1020404']
let esf_1020405 = activosNoCorrientes['esf_1020405']
let esf_1020406 = activosNoCorrientes['esf_1020406']
let esf_1020407 = activosNoCorrientes['esf_1020407']
let esf_10205 = activosNoCorrientes['esf_10205']
let esf_10206 = activosNoCorrientes['esf_10206']
let esf_1020601 = activosNoCorrientes['esf_1020601']
let esf_1020602 = activosNoCorrientes['esf_1020602']
let esf_1020603 = activosNoCorrientes['esf_1020603']
let esf_1020604 = activosNoCorrientes['esf_1020604']
let esf_1020605 = activosNoCorrientes['esf_1020605']
let esf_1020606 = activosNoCorrientes['esf_1020606']
let esf_10207 = activosNoCorrientes['esf_10207']
let esf_1020701 = activosNoCorrientes['esf_1020701']
let esf_1020702 = activosNoCorrientes['esf_1020702']
let esf_1020703 = activosNoCorrientes['esf_1020703']
let esf_10208 = activosNoCorrientes['esf_10208']
let esf_1020801 = activosNoCorrientes['esf_1020801']
let esf_1020802 = activosNoCorrientes['esf_1020802']
let esf_1020803 = activosNoCorrientes['esf_1020803']
let esf_1020805 = activosNoCorrientes['esf_1020805']
let esf_1020806 = activosNoCorrientes['esf_1020806']
let esf_1020807 = activosNoCorrientes['esf_1020807']
let esf_1020808 = activosNoCorrientes['esf_1020808']
let esf_1020809 = activosNoCorrientes['esf_1020809']
let esf_1020810 = activosNoCorrientes['esf_1020810']
let esf_1020811 = activosNoCorrientes['esf_1020811']
let esf_10209 = activosNoCorrientes['esf_10209']
let esf_1020901 = activosNoCorrientes['esf_1020901']
let esf_1020902 = activosNoCorrientes['esf_1020902']
let esf_1020903 = activosNoCorrientes['esf_1020903']
let esf_10210 = activosNoCorrientes['esf_10210']
let esf_1021001 = activosNoCorrientes['esf_1021001']
let esf_1021002 = activosNoCorrientes['esf_1021002']
let esf_1021003 = activosNoCorrientes['esf_1021003']
let esf_1021004 = activosNoCorrientes['esf_1021004']

/* PERIODO ANTERIOR */
let esf_1_ant = activosNoCorrientesAnt['esf_1_ant']
let esf_101_ant = activosNoCorrientesAnt['esf_101_ant']
let esf_102_ant = activosNoCorrientesAnt['esf_102_ant']
let esf_10201_ant = activosNoCorrientesAnt['esf_10201_ant']
let esf_1020101_ant = activosNoCorrientesAnt['esf_1020101_ant']
let esf_1020102_ant = activosNoCorrientesAnt['esf_1020102_ant']
let esf_1020103_ant = activosNoCorrientesAnt['esf_1020103_ant']
let esf_1020104_ant = activosNoCorrientesAnt['esf_1020104_ant']
let esf_1020105_ant = activosNoCorrientesAnt['esf_1020105_ant']
let esf_1020106_ant = activosNoCorrientesAnt['esf_1020106_ant']
let esf_1020107_ant = activosNoCorrientesAnt['esf_1020107_ant']
let esf_1020108_ant = activosNoCorrientesAnt['esf_1020108_ant']
let esf_1020109_ant = activosNoCorrientesAnt['esf_1020109_ant']
let esf_1020110_ant = activosNoCorrientesAnt['esf_1020110_ant']
let esf_1020111_ant = activosNoCorrientesAnt['esf_1020111_ant']
let esf_1020112_ant = activosNoCorrientesAnt['esf_1020112_ant']
let esf_1020113_ant = activosNoCorrientesAnt['esf_1020113_ant']
let esf_1020114_ant = activosNoCorrientesAnt['esf_1020114_ant']
let esf_102011401_ant = activosNoCorrientesAnt['esf_102011401_ant']
let esf_102011402_ant = activosNoCorrientesAnt['esf_102011402_ant']
let esf_102011403_ant = activosNoCorrientesAnt['esf_102011403_ant']
let esf_10202_ant = activosNoCorrientesAnt['esf_10202_ant']
let esf_1020201_ant = activosNoCorrientesAnt['esf_1020201_ant']
let esf_102020101_ant = activosNoCorrientesAnt['esf_102020101_ant']
let esf_102020102_ant = activosNoCorrientesAnt['esf_102020102_ant']
let esf_1020202_ant = activosNoCorrientesAnt['esf_1020202_ant']
let esf_102020201_ant = activosNoCorrientesAnt['esf_102020201_ant']
let esf_102020202_ant = activosNoCorrientesAnt['esf_102020202_ant']
let esf_1020203_ant = activosNoCorrientesAnt['esf_1020203_ant']
let esf_1020204_ant = activosNoCorrientesAnt['esf_1020204_ant']
let esf_10203_ant = activosNoCorrientesAnt['esf_10203_ant']
let esf_1020301_ant = activosNoCorrientesAnt['esf_1020301_ant']
let esf_1020302_ant = activosNoCorrientesAnt['esf_1020302_ant']
let esf_1020303_ant = activosNoCorrientesAnt['esf_1020303_ant']
let esf_1020304_ant = activosNoCorrientesAnt['esf_1020304_ant']
let esf_1020305_ant = activosNoCorrientesAnt['esf_1020305_ant']
let esf_1020306_ant = activosNoCorrientesAnt['esf_1020306_ant']
let esf_10204_ant = activosNoCorrientesAnt['esf_10204_ant']
let esf_1020401_ant = activosNoCorrientesAnt['esf_1020401_ant']
let esf_1020402_ant = activosNoCorrientesAnt['esf_1020402_ant']
let esf_1020403_ant = activosNoCorrientesAnt['esf_1020403_ant']
let esf_1020404_ant = activosNoCorrientesAnt['esf_1020404_ant']
let esf_1020405_ant = activosNoCorrientesAnt['esf_1020405_ant']
let esf_1020406_ant = activosNoCorrientesAnt['esf_1020406_ant']
let esf_1020407_ant = activosNoCorrientesAnt['esf_1020407_ant']
let esf_10205_ant = activosNoCorrientesAnt['esf_10205_ant']
let esf_10206_ant = activosNoCorrientesAnt['esf_10206_ant']
let esf_1020601_ant = activosNoCorrientesAnt['esf_1020601_ant']
let esf_1020602_ant = activosNoCorrientesAnt['esf_1020602_ant']
let esf_1020603_ant = activosNoCorrientesAnt['esf_1020603_ant']
let esf_1020604_ant = activosNoCorrientesAnt['esf_1020604_ant']
let esf_1020605_ant = activosNoCorrientesAnt['esf_1020605_ant']
let esf_1020606_ant = activosNoCorrientesAnt['esf_1020606_ant']
let esf_10207_ant = activosNoCorrientesAnt['esf_10207_ant']
let esf_1020701_ant = activosNoCorrientesAnt['esf_1020701_ant']
let esf_1020702_ant = activosNoCorrientesAnt['esf_1020702_ant']
let esf_1020703_ant = activosNoCorrientesAnt['esf_1020703_ant']
let esf_10208_ant = activosNoCorrientesAnt['esf_10208_ant']
let esf_1020801_ant = activosNoCorrientesAnt['esf_1020801_ant']
let esf_1020802_ant = activosNoCorrientesAnt['esf_1020802_ant']
let esf_1020803_ant = activosNoCorrientesAnt['esf_1020803_ant']
let esf_1020805_ant = activosNoCorrientesAnt['esf_1020805_ant']
let esf_1020806_ant = activosNoCorrientesAnt['esf_1020806_ant']
let esf_1020807_ant = activosNoCorrientesAnt['esf_1020807_ant']
let esf_1020808_ant = activosNoCorrientesAnt['esf_1020808_ant']
let esf_1020809_ant = activosNoCorrientesAnt['esf_1020809_ant']
let esf_1020810_ant = activosNoCorrientesAnt['esf_1020810_ant']
let esf_1020811_ant = activosNoCorrientesAnt['esf_1020811_ant']
let esf_10209_ant = activosNoCorrientesAnt['esf_10209_ant']
let esf_1020901_ant = activosNoCorrientesAnt['esf_1020901_ant']
let esf_1020902_ant = activosNoCorrientesAnt['esf_1020902_ant']
let esf_1020903_ant = activosNoCorrientesAnt['esf_1020903_ant']
let esf_10210_ant = activosNoCorrientesAnt['esf_10210_ant']
let esf_1021001_ant = activosNoCorrientesAnt['esf_1021001_ant']
let esf_1021002_ant = activosNoCorrientesAnt['esf_1021002_ant']
let esf_1021003_ant = activosNoCorrientesAnt['esf_1021003_ant']
let esf_1021004_ant = activosNoCorrientesAnt['esf_1021004_ant']

const values = ref([])

let convertirNegativo_1020112_ant = async id => { esf_1020112_ant.value = (Number(esf_1020112_ant.value) > 0) ? Number(esf_1020112_ant.value) * -1 : Number(esf_1020112_ant.value) }
let convertirNegativo_1020113_ant = async id => { esf_1020113_ant.value = (Number(esf_1020113_ant.value) > 0) ? Number(esf_1020113_ant.value) * -1 : Number(esf_1020113_ant.value) }
let convertirNegativo_102011402_ant = async id => { esf_102011402_ant.value = (Number(esf_102011402_ant.value) > 0) ? Number(esf_102011402_ant.value) * -1 : Number(esf_102011402_ant.value) }
let convertirNegativo_102011403_ant = async id => { esf_102011403_ant.value = (Number(esf_102011403_ant.value) > 0) ? Number(esf_102011403_ant.value) * -1 : Number(esf_102011403_ant.value) }
let convertirNegativo_1020203_ant = async id => { esf_1020203_ant.value = (Number(esf_1020203_ant.value) > 0) ? Number(esf_1020203_ant.value) * -1 : Number(esf_1020203_ant.value) }
let convertirNegativo_1020204_ant = async id => { esf_1020204_ant.value = (Number(esf_1020204_ant.value) > 0) ? Number(esf_1020204_ant.value) * -1 : Number(esf_1020204_ant.value) }
let convertirNegativo_1020305_ant = async id => { esf_1020305_ant.value = (Number(esf_1020305_ant.value) > 0) ? Number(esf_1020305_ant.value) * -1 : Number(esf_1020305_ant.value) }
let convertirNegativo_1020306_ant = async id => { esf_1020306_ant.value = (Number(esf_1020306_ant.value) > 0) ? Number(esf_1020306_ant.value) * -1 : Number(esf_1020306_ant.value) }
let convertirNegativo_1020405_ant = async id => { esf_1020405_ant.value = (Number(esf_1020405_ant.value) > 0) ? Number(esf_1020405_ant.value) * -1 : Number(esf_1020405_ant.value) }
let convertirNegativo_1020406_ant = async id => { esf_1020406_ant.value = (Number(esf_1020406_ant.value) > 0) ? Number(esf_1020406_ant.value) * -1 : Number(esf_1020406_ant.value) }
let convertirNegativo_1020602_ant = async id => { esf_1020602_ant.value = (Number(esf_1020602_ant.value) > 0) ? Number(esf_1020602_ant.value) * -1 : Number(esf_1020602_ant.value) }
let convertirNegativo_1020604_ant = async id => { esf_1020604_ant.value = (Number(esf_1020604_ant.value) > 0) ? Number(esf_1020604_ant.value) * -1 : Number(esf_1020604_ant.value) }
let convertirNegativo_1020606_ant = async id => { esf_1020606_ant.value = (Number(esf_1020606_ant.value) > 0) ? Number(esf_1020606_ant.value) * -1 : Number(esf_1020606_ant.value) }
let convertirNegativo_1020701_ant = async id => { esf_1020701_ant.value = (Number(esf_1020701_ant.value) > 0) ? Number(esf_1020701_ant.value) * -1 : Number(esf_1020701_ant.value) }
let convertirNegativo_1020702_ant = async id => { esf_1020702_ant.value = (Number(esf_1020702_ant.value) > 0) ? Number(esf_1020702_ant.value) * -1 : Number(esf_1020702_ant.value) }
let convertirNegativo_1020810_ant = async id => { esf_1020810_ant.value = (Number(esf_1020810_ant.value) > 0) ? Number(esf_1020810_ant.value) * -1 : Number(esf_1020810_ant.value) }

let convertirNegativo_1020112 = async id => { esf_1020112.value = (Number(esf_1020112.value) > 0) ? Number(esf_1020112.value) * -1 : Number(esf_1020112.value) }
let convertirNegativo_1020113 = async id => { esf_1020113.value = (Number(esf_1020113.value) > 0) ? Number(esf_1020113.value) * -1 : Number(esf_1020113.value) }
let convertirNegativo_102011402 = async id => { esf_102011402.value = (Number(esf_102011402.value) > 0) ? Number(esf_102011402.value) * -1 : Number(esf_102011402.value) }
let convertirNegativo_102011403 = async id => { esf_102011403.value = (Number(esf_102011403.value) > 0) ? Number(esf_102011403.value) * -1 : Number(esf_102011403.value) }
let convertirNegativo_1020203 = async id => { esf_1020203.value = (Number(esf_1020203.value) > 0) ? Number(esf_1020203.value) * -1 : Number(esf_1020203.value) }
let convertirNegativo_1020204 = async id => { esf_1020204.value = (Number(esf_1020204.value) > 0) ? Number(esf_1020204.value) * -1 : Number(esf_1020204.value) }
let convertirNegativo_1020305 = async id => { esf_1020305.value = (Number(esf_1020305.value) > 0) ? Number(esf_1020305.value) * -1 : Number(esf_1020305.value) }
let convertirNegativo_1020306 = async id => { esf_1020306.value = (Number(esf_1020306.value) > 0) ? Number(esf_1020306.value) * -1 : Number(esf_1020306.value) }
let convertirNegativo_1020405 = async id => { esf_1020405.value = (Number(esf_1020405.value) > 0) ? Number(esf_1020405.value) * -1 : Number(esf_1020405.value) }
let convertirNegativo_1020406 = async id => { esf_1020406.value = (Number(esf_1020406.value) > 0) ? Number(esf_1020406.value) * -1 : Number(esf_1020406.value) }
let convertirNegativo_1020602 = async id => { esf_1020602.value = (Number(esf_1020602.value) > 0) ? Number(esf_1020602.value) * -1 : Number(esf_1020602.value) }
let convertirNegativo_1020604 = async id => { esf_1020604.value = (Number(esf_1020604.value) > 0) ? Number(esf_1020604.value) * -1 : Number(esf_1020604.value) }
let convertirNegativo_1020606 = async id => { esf_1020606.value = (Number(esf_1020606.value) > 0) ? Number(esf_1020606.value) * -1 : Number(esf_1020606.value) }
let convertirNegativo_1020701 = async id => { esf_1020701.value = (Number(esf_1020701.value) > 0) ? Number(esf_1020701.value) * -1 : Number(esf_1020701.value) }
let convertirNegativo_1020702 = async id => { esf_1020702.value = (Number(esf_1020702.value) > 0) ? Number(esf_1020702.value) * -1 : Number(esf_1020702.value) }
let convertirNegativo_1020810 = async id => { esf_1020810.value = (Number(esf_1020810.value) > 0) ? Number(esf_1020810.value) * -1 : Number(esf_1020810.value) }

const handleActionClick = async id => {
  esf_101 = reportStore.getSingleReportValue("activosnocorrientesifluc", 'esf_101')
  esf_10201.value = (Number(esf_1020101.value) + Number(esf_1020102.value) + Number(esf_1020103.value) + Number(esf_1020104.value) + Number(esf_1020105.value) + Number(esf_1020106.value) + Number(esf_1020107.value) + Number(esf_1020108.value) + Number(esf_1020109.value) + Number(esf_1020110.value) + Number(esf_1020111.value) + Number(esf_1020112.value) + Number(esf_1020113.value) + Number(esf_1020114.value)).toFixed(2)
  esf_102.value = (Number(esf_10201.value) + Number(esf_10202.value) + Number(esf_10203.value) + Number(esf_10204.value) + Number(esf_10205.value) + Number(esf_10206.value) + Number(esf_10207.value) + Number(esf_10208.value) + Number(esf_10209.value) + Number(esf_10210.value)).toFixed(2)
  esf_1020114.value = (Number(esf_102011401.value) + Number(esf_102011402.value) + Number(esf_102011403.value)).toFixed(2)
  esf_10202.value = (Number(esf_1020201.value) + Number(esf_1020202.value) + Number(esf_1020203.value) + Number(esf_1020204.value)).toFixed(2)
  esf_1020201.value = (Number(esf_102020101.value) + Number(esf_102020102.value)).toFixed(2)
  esf_1020202.value = (Number(esf_102020201.value) + Number(esf_102020202.value)).toFixed(2)
  esf_10203.value = (Number(esf_1020301.value) + Number(esf_1020302.value) + Number(esf_1020303.value) + Number(esf_1020304.value) +  Number(esf_1020305.value) +  Number(esf_1020306.value)).toFixed(2)
  esf_10204.value = (Number(esf_1020401.value) + Number(esf_1020402.value) + Number(esf_1020403.value) + Number(esf_1020404.value) + Number(esf_1020405.value) + Number(esf_1020406.value) + Number(esf_1020407.value)).toFixed(2)
  esf_10206.value = (Number(esf_1020601.value) + Number(esf_1020602.value) + Number(esf_1020603.value) + Number(esf_1020604.value) + Number(esf_1020605.value) + Number(esf_1020606.value)).toFixed(2)
  esf_10207.value = (Number(esf_1020701.value) + Number(esf_1020702.value) + Number(esf_1020703.value)).toFixed(2)
  esf_10208.value = (Number(esf_1020801.value) + Number(esf_1020802.value) + Number(esf_1020803.value) + Number(esf_1020805.value) + Number(esf_1020806.value) + Number(esf_1020807.value) + Number(esf_1020808.value) + Number(esf_1020809.value) + Number(esf_1020810.value) + Number(esf_1020811.value)).toFixed(2)
  esf_10209.value = (Number(esf_1020901.value) + Number(esf_1020902.value) + Number(esf_1020903.value)).toFixed(2)
  esf_10210.value = (Number(esf_1021001.value) + Number(esf_1021002.value) + Number(esf_1021003.value) + Number(esf_1021004.value)).toFixed(2)

  props.data.nocorrientes = reportStore.getSingleReportValue("activosnocorrientesifluc", 'esf_102')

  esf_1 = (Number(esf_101) + Number(esf_102)).toFixed(2)

  const activosnocorrientes = {
    esf_1: (typeof esf_1.value === 'string') ? Number(esf_1.value) : 0,
    esf_102: (typeof esf_102.value === 'string') ? Number(esf_102.value) : esf_102.value,
    esf_10201: (typeof esf_10201.value === 'string') ? Number(esf_10201.value) : esf_10201.value,
    esf_1020101: (typeof esf_1020101.value === 'string') ? Number(esf_1020101.value) : esf_1020101.value,
    esf_1020102: (typeof esf_1020102.value === 'string') ? Number(esf_1020102.value) : esf_1020102.value,
    esf_1020103: (typeof esf_1020103.value === 'string') ? Number(esf_1020103.value) : esf_1020103.value,
    esf_1020104: (typeof esf_1020104.value === 'string') ? Number(esf_1020104.value) : esf_1020104.value,
    esf_1020105: (typeof esf_1020105.value === 'string') ? Number(esf_1020105.value) : esf_1020105.value,
    esf_1020106: (typeof esf_1020106.value === 'string') ? Number(esf_1020106.value) : esf_1020106.value,
    esf_1020107: (typeof esf_1020107.value === 'string') ? Number(esf_1020107.value) : esf_1020107.value,
    esf_1020108: (typeof esf_1020108.value === 'string') ? Number(esf_1020108.value) : esf_1020108.value,
    esf_1020109: (typeof esf_1020109.value === 'string') ? Number(esf_1020109.value) : esf_1020109.value,
    esf_1020110: (typeof esf_1020110.value === 'string') ? Number(esf_1020110.value) : esf_1020110.value,
    esf_1020111: (typeof esf_1020111.value === 'string') ? Number(esf_1020111.value) : esf_1020111.value,
    esf_1020112: (typeof esf_1020112.value === 'string') ? Number(esf_1020112.value) : esf_1020112.value,
    esf_1020113: (typeof esf_1020113.value === 'string') ? Number(esf_1020113.value) : esf_1020113.value,
    esf_1020114: (typeof esf_1020114.value === 'string') ? Number(esf_1020114.value) : esf_1020114.value,
    esf_102011401: (typeof esf_102011401.value === 'string') ? Number(esf_102011401.value) : esf_102011401.value,
    esf_102011402: (typeof esf_102011402.value === 'string') ? Number(esf_102011402.value) : esf_102011402.value,
    esf_102011403: (typeof esf_102011403.value === 'string') ? Number(esf_102011403.value) : esf_102011403.value,
    esf_10202: (typeof esf_10202.value === 'string') ? Number(esf_10202.value) : esf_10202.value,
    esf_1020201: (typeof esf_1020201.value === 'string') ? Number(esf_1020201.value) : esf_1020201.value,
    esf_102020101: (typeof esf_102020101.value === 'string') ? Number(esf_102020101.value) : esf_102020101.value,
    esf_102020102: (typeof esf_102020102.value === 'string') ? Number(esf_102020102.value) : esf_102020102.value,
    esf_1020202: (typeof esf_1020202.value === 'string') ? Number(esf_1020202.value) : esf_1020202.value,
    esf_102020201: (typeof esf_102020201.value === 'string') ? Number(esf_102020201.value) : esf_102020201.value,
    esf_102020202: (typeof esf_102020202.value === 'string') ? Number(esf_102020202.value) : esf_102020202.value,
    esf_1020203: (typeof esf_1020203.value === 'string') ? Number(esf_1020203.value) : esf_1020203.value,
    esf_1020204: (typeof esf_1020204.value === 'string') ? Number(esf_1020204.value) : esf_1020204.value,
    esf_10203: (typeof esf_10203.value === 'string') ? Number(esf_10203.value) : esf_10203.value,
    esf_1020301: (typeof esf_1020301.value === 'string') ? Number(esf_1020301.value) : esf_1020301.value,
    esf_1020302: (typeof esf_1020302.value === 'string') ? Number(esf_1020302.value) : esf_1020302.value,
    esf_1020303: (typeof esf_1020303.value === 'string') ? Number(esf_1020303.value) : esf_1020303.value,
    esf_1020304: (typeof esf_1020304.value === 'string') ? Number(esf_1020304.value) : esf_1020304.value,
    esf_1020305: (typeof esf_1020305.value === 'string') ? Number(esf_1020305.value) : esf_1020305.value,
    esf_1020306: (typeof esf_1020306.value === 'string') ? Number(esf_1020306.value) : esf_1020306.value,
    esf_10204: (typeof esf_10204.value === 'string') ? Number(esf_10204.value) : esf_10204.value,
    esf_1020401: (typeof esf_1020401.value === 'string') ? Number(esf_1020401.value) : esf_1020401.value,
    esf_1020402: (typeof esf_1020402.value === 'string') ? Number(esf_1020402.value) : esf_1020402.value,
    esf_1020403: (typeof esf_1020403.value === 'string') ? Number(esf_1020403.value) : esf_1020403.value,
    esf_1020404: (typeof esf_1020404.value === 'string') ? Number(esf_1020404.value) : esf_1020404.value,
    esf_1020405: (typeof esf_1020405.value === 'string') ? Number(esf_1020405.value) : esf_1020405.value,
    esf_1020406: (typeof esf_1020406.value === 'string') ? Number(esf_1020406.value) : esf_1020406.value,
    esf_1020407: (typeof esf_1020407.value === 'string') ? Number(esf_1020407.value) : esf_1020407.value,
    esf_10205: (typeof esf_10205.value === 'string') ? Number(esf_10205.value) : esf_10205.value,
    esf_10206: (typeof esf_10206.value === 'string') ? Number(esf_10206.value) : esf_10206.value,
    esf_1020601: (typeof esf_1020601.value === 'string') ? Number(esf_1020601.value) : esf_1020601.value,
    esf_1020602: (typeof esf_1020602.value === 'string') ? Number(esf_1020602.value) : esf_1020602.value,
    esf_1020603: (typeof esf_1020603.value === 'string') ? Number(esf_1020603.value) : esf_1020603.value,
    esf_1020604: (typeof esf_1020604.value === 'string') ? Number(esf_1020604.value) : esf_1020604.value,
    esf_1020605: (typeof esf_1020605.value === 'string') ? Number(esf_1020605.value) : esf_1020605.value,
    esf_1020606: (typeof esf_1020606.value === 'string') ? Number(esf_1020606.value) : esf_1020606.value,
    esf_10207: (typeof esf_10207.value === 'string') ? Number(esf_10207.value) : esf_10207.value,
    esf_1020701: (typeof esf_1020701.value === 'string') ? Number(esf_1020701.value) : esf_1020701.value,
    esf_1020702: (typeof esf_1020702.value === 'string') ? Number(esf_1020702.value) : esf_1020702.value,
    esf_1020703: (typeof esf_1020703.value === 'string') ? Number(esf_1020703.value) : esf_1020703.value,
    esf_10208: (typeof esf_10208.value === 'string') ? Number(esf_10208.value) : esf_10208.value,
    esf_1020801: (typeof esf_1020801.value === 'string') ? Number(esf_1020801.value) : esf_1020801.value,
    esf_1020802: (typeof esf_1020802.value === 'string') ? Number(esf_1020802.value) : esf_1020802.value,
    esf_1020803: (typeof esf_1020803.value === 'string') ? Number(esf_1020803.value) : esf_1020803.value,
    esf_1020805: (typeof esf_1020805.value === 'string') ? Number(esf_1020805.value) : esf_1020805.value,
    esf_1020806: (typeof esf_1020806.value === 'string') ? Number(esf_1020806.value) : esf_1020806.value,
    esf_1020807: (typeof esf_1020807.value === 'string') ? Number(esf_1020807.value) : esf_1020807.value,
    esf_1020808: (typeof esf_1020808.value === 'string') ? Number(esf_1020808.value) : esf_1020808.value,
    esf_1020809: (typeof esf_1020809.value === 'string') ? Number(esf_1020809.value) : esf_1020809.value,
    esf_1020810: (typeof esf_1020810.value === 'string') ? Number(esf_1020810.value) : esf_1020810.value,
    esf_1020811: (typeof esf_1020811.value === 'string') ? Number(esf_1020811.value) : esf_1020811.value,
    esf_10209: (typeof esf_10209.value === 'string') ? Number(esf_10209.value) : esf_10209.value,
    esf_1020901: (typeof esf_1020901.value === 'string') ? Number(esf_1020901.value) : esf_1020901.value,
    esf_1020902: (typeof esf_1020902.value === 'string') ? Number(esf_1020902.value) : esf_1020902.value,
    esf_1020903: (typeof esf_1020903.value === 'string') ? Number(esf_1020903.value) : esf_1020903.value,
    esf_10210: (typeof esf_10210.value === 'string') ? Number(esf_10210.value) : esf_10210.value,
    esf_1021001: (typeof esf_1021001.value === 'string') ? Number(esf_1021001.value) : esf_1021001.value,
    esf_1021002: (typeof esf_1021002.value === 'string') ? Number(esf_1021002.value) : esf_1021002.value,
    esf_1021003: (typeof esf_1021003.value === 'string') ? Number(esf_1021003.value) : esf_1021003.value,
    esf_1021004: (typeof esf_1021004.value === 'string') ? Number(esf_1021004.value) : esf_1021004.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    activosnocorrientesifluc: activosnocorrientes,
  })
}

const handleActionClick_Ant = async id => {
  esf_101_ant = reportStore.getSingleReportValue("activosnocorrientesifluc_ant", 'esf_101_ant', true)
  esf_1_ant = (Number(esf_101_ant) + Number(esf_102_ant)).toFixed(2)
  props.data.nocorrientes_ant = esf_102_ant.value
  esf_10201_ant.value = (Number(esf_1020101_ant.value) + Number(esf_1020102_ant.value) + Number(esf_1020103_ant.value) + Number(esf_1020104_ant.value) + Number(esf_1020105_ant.value) + Number(esf_1020106_ant.value) + Number(esf_1020107_ant.value) + Number(esf_1020108_ant.value) + Number(esf_1020109_ant.value) + Number(esf_1020110_ant.value) + Number(esf_1020111_ant.value) + Number(esf_1020112_ant.value) + Number(esf_1020113_ant.value) + Number(esf_1020114_ant.value)).toFixed(2)
  esf_102_ant.value = (Number(esf_10201_ant.value) + Number(esf_10202_ant.value) + Number(esf_10203_ant.value) + Number(esf_10204_ant.value) + Number(esf_10205_ant.value) + Number(esf_10206_ant.value) + Number(esf_10207_ant.value) + Number(esf_10208_ant.value) + Number(esf_10209_ant.value) + Number(esf_10210_ant.value)).toFixed(2)
  esf_1020114_ant.value = (Number(esf_102011401_ant.value) + Number(esf_102011402_ant.value) + Number(esf_102011403_ant.value)).toFixed(2)
  esf_10202_ant.value = (Number(esf_1020201_ant.value) + Number(esf_1020202_ant.value) + Number(esf_1020203_ant.value) + Number(esf_1020204_ant.value)).toFixed(2)
  esf_1020201_ant.value = (Number(esf_102020101_ant.value) + Number(esf_102020102_ant.value)).toFixed(2)
  esf_1020202_ant.value = (Number(esf_102020201_ant.value) + Number(esf_102020202_ant.value)).toFixed(2)
  esf_10203_ant.value = (Number(esf_1020301_ant.value) + Number(esf_1020302_ant.value) + Number(esf_1020303_ant.value) + Number(esf_1020304_ant.value) +  Number(esf_1020305_ant.value) +  Number(esf_1020306_ant.value)).toFixed(2)
  esf_10204_ant.value = (Number(esf_1020401_ant.value) + Number(esf_1020402_ant.value) + Number(esf_1020403_ant.value) + Number(esf_1020404_ant.value) + Number(esf_1020405_ant.value) + Number(esf_1020406_ant.value) + Number(esf_1020407_ant.value)).toFixed(2)
  esf_10206_ant.value = (Number(esf_1020601_ant.value) + Number(esf_1020602_ant.value) + Number(esf_1020603_ant.value) + Number(esf_1020604_ant.value) + Number(esf_1020605_ant.value) + Number(esf_1020606_ant.value)).toFixed(2)
  esf_10207_ant.value = (Number(esf_1020701_ant.value) + Number(esf_1020702_ant.value) + Number(esf_1020703_ant.value)).toFixed(2)
  esf_10208_ant.value = (Number(esf_1020801_ant.value) + Number(esf_1020802_ant.value) + Number(esf_1020803_ant.value) + Number(esf_1020805_ant.value) + Number(esf_1020806_ant.value) + Number(esf_1020807_ant.value) + Number(esf_1020808_ant.value) + Number(esf_1020809_ant.value) + Number(esf_1020810_ant.value) + Number(esf_1020811_ant.value)).toFixed(2)
  esf_10209_ant.value = (Number(esf_1020901_ant.value) + Number(esf_1020902_ant.value) + Number(esf_1020903_ant.value)).toFixed(2)
  esf_10210_ant.value = (Number(esf_1021001_ant.value) + Number(esf_1021002_ant.value) + Number(esf_1021003_ant.value) + Number(esf_1021004_ant.value)).toFixed(2)

  const activosnocorrientes_ant = {
    esf_102_ant: esf_102_ant.value,
    esf_10201_ant: esf_10201_ant.value,
    esf_1020101_ant: esf_1020101_ant.value,
    esf_1020102_ant: esf_1020102_ant.value,
    esf_1020103_ant: esf_1020103_ant.value,
    esf_1020104_ant: esf_1020104_ant.value,
    esf_1020105_ant: esf_1020105_ant.value,
    esf_1020106_ant: esf_1020106_ant.value,
    esf_1020107_ant: esf_1020107_ant.value,
    esf_1020108_ant: esf_1020108_ant.value,
    esf_1020109_ant: esf_1020109_ant.value,
    esf_1020110_ant: esf_1020110_ant.value,
    esf_1020111_ant: esf_1020111_ant.value,
    esf_1020112_ant: esf_1020112_ant.value,
    esf_1020113_ant: esf_1020113_ant.value,
    esf_1020114_ant: esf_1020114_ant.value,
    esf_102011401_ant: esf_102011401_ant.value,
    esf_102011402_ant: esf_102011402_ant.value,
    esf_102011403_ant: esf_102011403_ant.value,
    esf_10202_ant: esf_10202_ant.value,
    esf_1020201_ant: esf_1020201_ant.value,
    esf_102020101_ant: esf_102020101_ant.value,
    esf_102020102_ant: esf_102020102_ant.value,
    esf_1020202_ant: esf_1020202_ant.value,
    esf_102020201_ant: esf_102020201_ant.value,
    esf_102020202_ant: esf_102020202_ant.value,
    esf_1020203_ant: esf_1020203_ant.value,
    esf_1020204_ant: esf_1020204_ant.value,
    esf_10203_ant: esf_10203_ant.value,
    esf_1020301_ant: esf_1020301_ant.value,
    esf_1020302_ant: esf_1020302_ant.value,
    esf_1020303_ant: esf_1020303_ant.value,
    esf_1020304_ant: esf_1020304_ant.value,
    esf_1020305_ant: esf_1020305_ant.value,
    esf_1020306_ant: esf_1020306_ant.value,
    esf_10204_ant: esf_10204_ant.value,
    esf_1020401_ant: esf_1020401_ant.value,
    esf_1020402_ant: esf_1020402_ant.value,
    esf_1020403_ant: esf_1020403_ant.value,
    esf_1020404_ant: esf_1020404_ant.value,
    esf_1020405_ant: esf_1020405_ant.value,
    esf_1020406_ant: esf_1020406_ant.value,
    esf_1020407_ant: esf_1020407_ant.value,
    esf_10205_ant: esf_10205_ant.value,
    esf_10206_ant: esf_10206_ant.value,
    esf_1020601_ant: esf_1020601_ant.value,
    esf_1020602_ant: esf_1020602_ant.value,
    esf_1020603_ant: esf_1020603_ant.value,
    esf_1020604_ant: esf_1020604_ant.value,
    esf_1020605_ant: esf_1020605_ant.value,
    esf_1020606_ant: esf_1020606_ant.value,
    esf_10207_ant: esf_10207_ant.value,
    esf_1020701_ant: esf_1020701_ant.value,
    esf_1020702_ant: esf_1020702_ant.value,
    esf_1020703_ant: esf_1020703_ant.value,
    esf_10208_ant: esf_10208_ant.value,
    esf_1020801_ant: esf_1020801_ant.value,
    esf_1020802_ant: esf_1020802_ant.value,
    esf_1020803_ant: esf_1020803_ant.value,
    esf_1020805_ant: esf_1020805_ant.value,
    esf_1020806_ant: esf_1020806_ant.value,
    esf_1020807_ant: esf_1020807_ant.value,
    esf_1020808_ant: esf_1020808_ant.value,
    esf_1020809_ant: esf_1020809_ant.value,
    esf_1020810_ant: esf_1020810_ant.value,
    esf_1020811_ant: esf_1020811_ant.value,
    esf_10209_ant: esf_10209_ant.value,
    esf_1020901_ant: esf_1020901_ant.value,
    esf_1020902_ant: esf_1020902_ant.value,
    esf_1020903_ant: esf_1020903_ant.value,
    esf_10210_ant: esf_10210_ant.value,
    esf_1021001_ant: esf_1021001_ant.value,
    esf_1021002_ant: esf_1021002_ant.value,
    esf_1021003_ant: esf_1021003_ant.value,
    esf_1021004_ant: esf_1021004_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    activosnocorrientesifluc_ant: activosnocorrientes_ant,
  })
}

onMounted(() => handleActionClick(1))
onMounted(() => handleActionClick_Ant(1))
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
                  <span class="text-sm" style="font-size:0.900rem">PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">PROPIEDAD, PLANTAS Y EQUIPOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10201" type="number" disabled v-model="esf_10201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102" type="number" disabled v-model="esf_10201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">TERRENOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020101" type="number" v-model="esf_1020101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020101" type="number" v-model="esf_1020101_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">EDIFICIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020102" type="number" v-model="esf_1020102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020102" type="number" v-model="esf_1020102_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CONSTRUCCIONES EN CURSO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020103" type="number" v-model="esf_1020103" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020103" type="number" v-model="esf_1020103_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INSTALACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020104" type="number" v-model="esf_1020104" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020104" type="number" v-model="esf_1020104_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">MUEBLES Y ENSERES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020105" type="number" v-model="esf_1020105" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020105" type="number" v-model="esf_1020105_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">MAQUINARIA Y EQUIPOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020106" type="number" v-model="esf_1020106" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020106" type="number" v-model="esf_1020106_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">NAVES, AERONAVES, BARCAZAS Y SIMILARES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020107" type="number" v-model="esf_1020107" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020107" type="number" v-model="esf_1020107_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">EQUIPOS DE COMPUTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020108" type="number" v-model="esf_1020108" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020108" type="number" v-model="esf_1020108_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VEHÍCULOS, EQUIPOS DE TRANSPORTE Y EQUIPO CAMINERO MÓVIL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020109</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020109" type="number" v-model="esf_1020109" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020109" type="number" v-model="esf_1020109_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020110</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020110" type="number" v-model="esf_1020110" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020110" type="number" v-model="esf_1020110_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">REPUESTOS Y HERRAMIENTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020111</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020111" type="number" v-model="esf_1020111" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020111" type="number" v-model="esf_1020111_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">(-) DEPRECIACIÓN ACUMULADA PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020112</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020112" type="number" v-model="esf_1020112" @blur="convertirNegativo_1020112(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020112" type="number" v-model="esf_1020112_ant" @blur="convertirNegativo_1020112_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">(-) DETERIORO ACUMULADO DE PROPIEDADES, PLANTA Y EQUIPO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020113</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020113" type="number" v-model="esf_1020113" @blur="convertirNegativo_1020113(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020113" type="number" v-model="esf_1020113_ant" @blur="convertirNegativo_1020113_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">ACTIVOS DE EXPLORACIÓN Y EXPLOTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020114</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020114" type="number" disabled v-model="esf_1020114" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020114" type="number" disabled v-model="esf_1020114_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15">ACTIVOS DE EXPLORACIÓN Y EXPLOTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102011401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102011401" type="number" v-model="esf_102011401" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102011401" type="number" v-model="esf_102011401_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >(-) AMORTIZACIÓN ACUMULADA DE ACTIVOS DE EXPLORACIÓN Y EXPLOTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102011402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 102011402" type="number" v-model="esf_102011402" @blur="convertirNegativo_102011402(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 102011402" type="number" v-model="esf_102011402_ant" @blur="convertirNegativo_102011402_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >(-) DETERIORO ACUMULADO DE ACTIVOS DE EXPLORACIÓN Y EXPLOTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102011403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 102011403" type="number" v-model="esf_102011403" @blur="convertirNegativo_102011403(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 102011403" type="number" v-model="esf_102011403_ant" @blur="convertirNegativo_102011403_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >PROPIEDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10202" type="number" disabled v-model="esf_10202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10202" type="number" disabled v-model="esf_10202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >TERRENOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020201" type="number" disabled v-model="esf_1020201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020201" type="number" disabled v-model="esf_1020201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >TERRENOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020101" type="number" v-model="esf_102020101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020101" type="number" v-model="esf_102020101_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >DERECHOS DE USO SOBRE TERRENOS SUBARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020102" type="number" v-model="esf_102020102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020102" type="number" v-model="esf_102020102_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"    />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >EDIFICIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020202" type="number" disabled v-model="esf_1020202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020202" type="number" disabled v-model="esf_1020202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >EDIFICIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020201" type="number" v-model="esf_102020201" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020201" type="number" v-model="esf_102020201_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-15" >DERECHOS DE USO SOBRE EDIFICIOS SUBARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020202" type="number" v-model="esf_102020202" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102020202" type="number" v-model="esf_102020202_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DEPRECIACION ACUMULADA DE PROPIEDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020203" type="number" v-model="esf_1020203" @blur="convertirNegativo_1020203(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020203" type="number" v-model="esf_1020203_ant" @blur="convertirNegativo_1020203_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DETERIORO ACUMULADO DE PROPIEDADES DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020204" type="number" v-model="esf_1020204" @blur="convertirNegativo_1020204(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020204" type="number" v-model="esf_1020204_ant" @blur="convertirNegativo_1020204_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >ACTIVOS BIOLOGICOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10203" type="number" disabled v-model="esf_10203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10203" type="number" disabled v-model="esf_10203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ANIMALES VIVOS EN CRECIMIENTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020301" type="number" v-model="esf_1020301" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020301" type="number" v-model="esf_1020301_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ANIMALES VIVOS EN PRODUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020302" type="number" v-model="esf_1020302" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020302" type="number" v-model="esf_1020302_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >PLANTAS EN CRECIMIENTO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020303" type="number" v-model="esf_1020303" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020303" type="number" v-model="esf_1020303_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >PLANTAS EN PRODUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020304" type="number" v-model="esf_1020304" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020304" type="number" v-model="esf_1020304_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DEPRECIACION ACUMULADA DE ACTIVOS BIOLÓGICOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020305" type="number" v-model="esf_1020305" @blur="convertirNegativo_1020305(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020305" type="number" v-model="esf_1020305_ant" @blur="convertirNegativo_1020305_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DETERIORO ACUMULADO DE ACTIVOS BIOLOGÍCOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020306" type="number" v-model="esf_1020306" @blur="convertirNegativo_1020306(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020306" type="number" v-model="esf_1020306_ant" @blur="convertirNegativo_1020306_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >ACTIVO INTANGIBLE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10204" type="number" disabled v-model="esf_10204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10204" type="number" disabled v-model="esf_10204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >PLUSVALÍAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020401" type="number" v-model="esf_1020401" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020401" type="number" v-model="esf_1020401_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >MARCAS, PATENTES, DERECHOS DE LLAVE , CUOTAS PATRIMONIALES Y OTROS SIMILARES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020402" type="number" v-model="esf_1020402" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020402" type="number" v-model="esf_1020402_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >CONCESIONES Y LICENCIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020403" type="number" v-model="esf_1020403" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020403" type="number" v-model="esf_1020403_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ACTIVOS DE EXPLORACIÓN Y EXPLOTACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020404</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020404" type="number" v-model="esf_1020404" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020404" type="number" v-model="esf_1020404_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) AMORTIZACIÓN ACUMULADA DE ACTIVOS INTANGIBLE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020405</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020405" type="number" v-model="esf_1020405" @blur="convertirNegativo_1020405(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020405" type="number" v-model="esf_1020405_ant" @blur="convertirNegativo_1020405_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DETERIORO ACUMULADO DE ACTIVO INTANGIBLE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020406</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020406" type="number" v-model="esf_1020406" @blur="convertirNegativo_1020406(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020406" type="number" v-model="esf_1020406_ant" @blur="convertirNegativo_1020406_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >OTROS INTANGIBLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020407</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020407" type="number" v-model="esf_1020407" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020407" type="number" v-model="esf_1020407_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >ACTIVOS POR IMPUESTOS DIFERIDOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10205" type="number" v-model="esf_10205" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10205" type="number" v-model="esf_10205_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >ACTIVOS FINANCIEROS NO CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10206" type="number" disabled v-model="esf_10206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10206" type="number" disabled v-model="esf_10206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020601" type="number" v-model="esf_1020601" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020601" type="number" v-model="esf_1020601_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) PROVISION POR DETERIORO DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020602" type="number" v-model="esf_1020602" @blur="convertirNegativo_1020602(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020602" type="number" v-model="esf_1020602_ant" @blur="convertirNegativo_1020602_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ACTIVOS FINANCIEROS A COSTO AMORTIZADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020603</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020603" type="number" v-model="esf_1020603" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020603" type="number" v-model="esf_1020603_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS A COSTO AMORTIZADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020604</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020604" type="number" v-model="esf_1020604" @blur="convertirNegativo_1020604(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020604" type="number" v-model="esf_1020604_ant" @blur="convertirNegativo_1020604_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020605</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020605" type="number" v-model="esf_1020605" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020605" type="number" v-model="esf_1020605_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-)PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020606</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020606" type="number" v-model="esf_1020606" @blur="convertirNegativo_1020606(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020606" type="number" v-model="esf_1020606_ant" @blur="convertirNegativo_1020606_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >DERECHOS DE USO POR ACTIVOS ARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10207" type="number" disabled v-model="esf_10207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10207" type="number" disabled v-model="esf_10207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DEPRECIACIÓN ACUMULADA DE ACTIVOS PROVENIENTES POR DERECHOS DE USO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020701</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020701" type="number" v-model="esf_1020701" @blur="convertirNegativo_1020701(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020701" type="number" v-model="esf_1020701_ant" @blur="convertirNegativo_1020701_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) DETERIORO ACUMULADO DE ACTIVOS PROVENIENTES POR DERECHOS DE USO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020702</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020702" type="number" v-model="esf_1020702" @blur="convertirNegativo_1020702(this); handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020702" type="number" v-model="esf_1020702_ant" @blur="convertirNegativo_1020702_ant(this); handleActionClick_Ant(this)"  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >DERECHO DE USO POR ACTIVOS ARRENDADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020703</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020703" type="number" v-model="esf_1020703" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020703" type="number" v-model="esf_1020703_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >OTROS ACTIVOS NO CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10208" type="number" disabled v-model="esf_10208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10208" type="number" disabled v-model="esf_10208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >DERECHOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020801</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020801" type="number" v-model="esf_1020801" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020801" type="number" v-model="esf_1020801_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >DEPÓSITO EN GARANTÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020802</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020802" type="number" v-model="esf_1020802" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020802" type="number" v-model="esf_1020802_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >DEPÓSITOS EN GARANTÍA POR OPERACIONES BURSÁTILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020803</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020803" type="number" v-model="esf_1020803" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020803" type="number" v-model="esf_1020803_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >ACCIONES DEL DEPÓSITO CENTRALIZADO DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020805</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020805" type="number" v-model="esf_1020805" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020805" type="number" v-model="esf_1020805_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >INVERSIONES SUBSIDIARIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020806</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020806" type="number" v-model="esf_1020806" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020806" type="number" v-model="esf_1020806_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >INVERSIONES ASOCIADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020807</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020807" type="number" v-model="esf_1020807" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020807" type="number" v-model="esf_1020807_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >INVERSIONES NEGOCIOS CONJUNTOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020808</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020808" type="number" v-model="esf_1020808" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020808" type="number" v-model="esf_1020808_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >OTRAS INVERSIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020809</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020809" type="number" v-model="esf_1020809" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020809" type="number" v-model="esf_1020809_ant" @blur="handleActionClick_Ant(this)" @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >(-) PROVISIÓN VALUACIÓN DE INVERSIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020810</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020810" type="number" v-model="esf_1020810" @blur="convertirNegativo_1020810(this); handleActionClick(this)" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1020810" type="number" v-model="esf_1020810_ant" @blur="convertirNegativo_1020810_ant(this); handleActionClick_Ant(this)" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >OTROS ACTIVOS NO CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020811</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020811" type="number" v-model="esf_1020811" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020811" type="number" v-model="esf_1020811_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >DOCUMENTOS Y CUENTAS POR COBRAR NO RELACIONADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10209" type="number" disabled v-model="esf_10209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10209" type="number" disabled v-model="esf_10209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >CUENTAS Y DOCUMENTOS A COBRAR CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020901</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020901" type="number" v-model="esf_1020901" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020901" type="number" v-model="esf_1020901_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >CUENTAS Y DOCUMENTOS A COBRAR A TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020902</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020902" type="number" v-model="esf_1020902" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020902" type="number" v-model="esf_1020902_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >OTRAS CUENTAS POR COBRAR NO RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1020903</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020903" type="number" v-model="esf_1020903" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1020903" type="number" v-model="esf_1020903_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11" >DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10210" type="number" disabled v-model="esf_10210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10210" type="number" disabled v-model="esf_10210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >POR COBRAR A ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1021001</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021001" type="number" v-model="esf_1021001" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021001" type="number" v-model="esf_1021001_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >POR COBRAR A COMPAÑIAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1021002</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021002" type="number" v-model="esf_1021002" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021002" type="number" v-model="esf_1021002_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >POR COBRAR A CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1021003</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021003" type="number" v-model="esf_1021003" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021003" type="number" v-model="esf_1021003_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13" >OTRAS CUENTAS POR COBRAR RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1021004</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021004" type="number" v-model="esf_1021004" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)"   />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1021004" type="number" v-model="esf_1021004_ant" @blur="handleActionClick_Ant(this)"  @input="handleActionClick_Ant(this)" @keyup="handleActionClick_Ant(this)"   />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ACTIVOS NO CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102" type="number" disabled v-model="esf_102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 102" type="number" disabled v-model="esf_102_ant" />
                </VCol>
              </VRow>

            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
