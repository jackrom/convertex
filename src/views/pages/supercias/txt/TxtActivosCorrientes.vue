<script setup>
import { initializeActivosCorrientes, initializeActivosCorrientesAnt } from "@core/utils/initializers"

const emits = defineEmits(['accion'])

const props = defineProps({
  data: {
    corrientes: null,
    corrientes_ant: null,
    ac_10101: null,
    ac_10101_ant: null,
    esf_1010302_ant: null,
  },
})

import { useReportStore } from "@/@store/reportStore"

const reportStore = useReportStore()

const activosCorrientes = initializeActivosCorrientes()
const activosCorrientesAnt = initializeActivosCorrientesAnt()

/* PERIODO ACTUAL */
let esf_1 = activosCorrientes['esf_1']
let esf_101 = activosCorrientes['esf_101']
let esf_102 = activosCorrientes['esf_102']
let esf_10101 = activosCorrientes['esf_10101']
let esf_1010101 = activosCorrientes['esf_1010101']
let esf_1010102 = activosCorrientes['esf_1010102']
let esf_1010103 = activosCorrientes['esf_1010103']
let esf_10102 = activosCorrientes['esf_10102']
let esf_1010201 = activosCorrientes['esf_1010201']
let esf_101020101 = activosCorrientes['esf_101020101']
let esf_10102010101 = activosCorrientes['esf_10102010101']
let esf_10102010102 = activosCorrientes['esf_10102010102']
let esf_10102010103 = activosCorrientes['esf_10102010103']
let esf_10102010104 = activosCorrientes['esf_10102010104']
let esf_10102010105 = activosCorrientes['esf_10102010105']
let esf_10102010106 = activosCorrientes['esf_10102010106']
let esf_101020102 = activosCorrientes['esf_101020102']
let esf_10102010201 = activosCorrientes['esf_10102010201']
let esf_10102010202 = activosCorrientes['esf_10102010202']
let esf_10102010203 = activosCorrientes['esf_10102010203']
let esf_10102010204 = activosCorrientes['esf_10102010204']
let esf_10102010205 = activosCorrientes['esf_10102010205']
let esf_10102010206 = activosCorrientes['esf_10102010206']
let esf_10102010207 = activosCorrientes['esf_10102010207']
let esf_10102010208 = activosCorrientes['esf_10102010208']
let esf_10102010209 = activosCorrientes['esf_10102010209']
let esf_10102010210 = activosCorrientes['esf_10102010210']
let esf_10102010211 = activosCorrientes['esf_10102010211']
let esf_10102010212 = activosCorrientes['esf_10102010212']
let esf_10102010213 = activosCorrientes['esf_10102010213']
let esf_10102010214 = activosCorrientes['esf_10102010214']
let esf_10102010215 = activosCorrientes['esf_10102010215']
let esf_10102010216 = activosCorrientes['esf_10102010216']
let esf_10102010217 = activosCorrientes['esf_10102010217']
let esf_10102010218 = activosCorrientes['esf_10102010218']
let esf_10102010219 = activosCorrientes['esf_10102010219']
let esf_10102010220 = activosCorrientes['esf_10102010220']
let esf_10102010221 = activosCorrientes['esf_10102010221']
let esf_10102010222 = activosCorrientes['esf_10102010222']
let esf_10102010223 = activosCorrientes['esf_10102010223']
let esf_101020103 = activosCorrientes['esf_101020103']
let esf_10102010301 = activosCorrientes['esf_10102010301']
let esf_10102010302 = activosCorrientes['esf_10102010302']
let esf_10102010303 = activosCorrientes['esf_10102010303']
let esf_10102010304 = activosCorrientes['esf_10102010304']
let esf_1010202 = activosCorrientes['esf_1010202']
let esf_101020201 = activosCorrientes['esf_101020201']
let esf_10102020101 = activosCorrientes['esf_10102020101']
let esf_10102020102 = activosCorrientes['esf_10102020102']
let esf_10102020103 = activosCorrientes['esf_10102020103']
let esf_10102020104 = activosCorrientes['esf_10102020104']
let esf_10102020105 = activosCorrientes['esf_10102020105']
let esf_10102020106 = activosCorrientes['esf_10102020106']
let esf_101020202 = activosCorrientes['esf_101020202']
let esf_10102020201 = activosCorrientes['esf_10102020201']
let esf_10102020202 = activosCorrientes['esf_10102020202']
let esf_10102020203 = activosCorrientes['esf_10102020203']
let esf_10102020204 = activosCorrientes['esf_10102020204']
let esf_10102020205 = activosCorrientes['esf_10102020205']
let esf_10102020206 = activosCorrientes['esf_10102020206']
let esf_10102020207 = activosCorrientes['esf_10102020207']
let esf_10102020208 = activosCorrientes['esf_10102020208']
let esf_10102020209 = activosCorrientes['esf_10102020209']
let esf_10102020210 = activosCorrientes['esf_10102020210']
let esf_10102020211 = activosCorrientes['esf_10102020211']
let esf_10102020212 = activosCorrientes['esf_10102020212']
let esf_10102020213 = activosCorrientes['esf_10102020213']
let esf_10102020214 = activosCorrientes['esf_10102020214']
let esf_10102020215 = activosCorrientes['esf_10102020215']
let esf_10102020216 = activosCorrientes['esf_10102020216']
let esf_10102020217 = activosCorrientes['esf_10102020217']
let esf_10102020218 = activosCorrientes['esf_10102020218']
let esf_10102020219 = activosCorrientes['esf_10102020219']
let esf_10102020220 = activosCorrientes['esf_10102020220']
let esf_10102020221 = activosCorrientes['esf_10102020221']
let esf_10102020222 = activosCorrientes['esf_10102020222']
let esf_10102020223 = activosCorrientes['esf_10102020223']
let esf_1010203 = activosCorrientes['esf_1010203']
let esf_101020302 = activosCorrientes['esf_101020302']
let esf_10102030201 = activosCorrientes['esf_10102030201']
let esf_10102030202 = activosCorrientes['esf_10102030202']
let esf_10102030203 = activosCorrientes['esf_10102030203']
let esf_10102030204 = activosCorrientes['esf_10102030204']
let esf_10102030205 = activosCorrientes['esf_10102030205']
let esf_10102030206 = activosCorrientes['esf_10102030206']
let esf_10102030207 = activosCorrientes['esf_10102030207']
let esf_10102030208 = activosCorrientes['esf_10102030208']
let esf_10102030209 = activosCorrientes['esf_10102030209']
let esf_10102030210 = activosCorrientes['esf_10102030210']
let esf_10102030211 = activosCorrientes['esf_10102030211']
let esf_10102030212 = activosCorrientes['esf_10102030212']
let esf_10102030213 = activosCorrientes['esf_10102030213']
let esf_10102030214 = activosCorrientes['esf_10102030214']
let esf_10102030215 = activosCorrientes['esf_10102030215']
let esf_10102030216 = activosCorrientes['esf_10102030216']
let esf_10102030217 = activosCorrientes['esf_10102030217']
let esf_10102030218 = activosCorrientes['esf_10102030218']
let esf_10102030219 = activosCorrientes['esf_10102030219']
let esf_10102030220 = activosCorrientes['esf_10102030220']
let esf_10102030221 = activosCorrientes['esf_10102030221']
let esf_10102030222 = activosCorrientes['esf_10102030222']
let esf_10102030223 = activosCorrientes['esf_10102030223']
let esf_1010204 = activosCorrientes['esf_1010204']
let esf_101020401 = activosCorrientes['esf_101020401']
let esf_101020402 = activosCorrientes['esf_101020402']
let esf_101020403 = activosCorrientes['esf_101020403']
let esf_1010205 = activosCorrientes['esf_1010205']
let esf_101020501 = activosCorrientes['esf_101020501']
let esf_10102050101 = activosCorrientes['esf_10102050101']
let esf_10102050102 = activosCorrientes['esf_10102050102']
let esf_101020502 = activosCorrientes['esf_101020502']
let esf_10102050201 = activosCorrientes['esf_10102050201']
let esf_10102050202 = activosCorrientes['esf_10102050202']
let esf_10102050203 = activosCorrientes['esf_10102050203']
let esf_10102050204 = activosCorrientes['esf_10102050204']
let esf_10102050207 = activosCorrientes['esf_10102050207']
let esf_10102050208 = activosCorrientes['esf_10102050208']
let esf_10102050209 = activosCorrientes['esf_10102050209']
let esf_10102050210 = activosCorrientes['esf_10102050210']
let esf_10102050211 = activosCorrientes['esf_10102050211']
let esf_10102050212 = activosCorrientes['esf_10102050212']
let esf_10102050213 = activosCorrientes['esf_10102050213']
let esf_10102050214 = activosCorrientes['esf_10102050214']
let esf_10102050215 = activosCorrientes['esf_10102050215']
let esf_10102050216 = activosCorrientes['esf_10102050216']
let esf_10102050217 = activosCorrientes['esf_10102050217']
let esf_10102050218 = activosCorrientes['esf_10102050218']
let esf_10102050219 = activosCorrientes['esf_10102050219']
let esf_10102050220 = activosCorrientes['esf_10102050220']
let esf_10102050221 = activosCorrientes['esf_10102050221']
let esf_1010206 = activosCorrientes['esf_1010206']
let esf_101020601 = activosCorrientes['esf_101020601']
let esf_101020602 = activosCorrientes['esf_101020602']
let esf_101020603 = activosCorrientes['esf_101020603']
let esf_101020604 = activosCorrientes['esf_101020604']
let esf_1010207 = activosCorrientes['esf_1010207']
let esf_10103 = activosCorrientes['esf_10103']
let esf_1010301 = activosCorrientes['esf_1010301']
let esf_1010302 = activosCorrientes['esf_1010302']
let esf_1010303 = activosCorrientes['esf_1010303']
let esf_1010304 = activosCorrientes['esf_1010304']
let esf_1010305 = activosCorrientes['esf_1010305']
let esf_1010306 = activosCorrientes['esf_1010306']
let esf_1010307 = activosCorrientes['esf_1010307']
let esf_1010308 = activosCorrientes['esf_1010308']
let esf_1010309 = activosCorrientes['esf_1010309']
let esf_1010310 = activosCorrientes['esf_1010310']
let esf_1010311 = activosCorrientes['esf_1010311']
let esf_1010312 = activosCorrientes['esf_1010312']
let esf_1010313 = activosCorrientes['esf_1010313']
let esf_10104 = activosCorrientes['esf_10104']
let esf_1010401 = activosCorrientes['esf_1010401']
let esf_1010402 = activosCorrientes['esf_1010402']
let esf_1010403 = activosCorrientes['esf_1010403']
let esf_1010404 = activosCorrientes['esf_1010404']
let esf_10105 = activosCorrientes['esf_10105']
let esf_1010501 = activosCorrientes['esf_1010501']
let esf_1010502 = activosCorrientes['esf_1010502']
let esf_1010503 = activosCorrientes['esf_1010503']
let esf_10106 = activosCorrientes['esf_10106']
let esf_10107 = activosCorrientes['esf_10107']
let esf_10108 = activosCorrientes['esf_10108']

/* PERIODO ANTERIOR */
let esf_1_ant = activosCorrientesAnt['esf_1_ant']
let esf_101_ant = activosCorrientesAnt['esf_101_ant']
let esf_102_ant = activosCorrientesAnt['esf_102_ant']
let esf_10101_ant = activosCorrientesAnt['esf_10101_ant']
let esf_1010101_ant = activosCorrientesAnt['esf_1010101_ant']
let esf_1010102_ant = activosCorrientesAnt['esf_1010102_ant']
let esf_1010103_ant = activosCorrientesAnt['esf_1010103_ant']
let esf_10102_ant = activosCorrientesAnt['esf_10102_ant']
let esf_1010201_ant = activosCorrientesAnt['esf_1010201_ant']
let esf_101020101_ant = activosCorrientesAnt['esf_101020101_ant']
let esf_10102010101_ant = activosCorrientesAnt['esf_10102010101_ant']
let esf_10102010102_ant = activosCorrientesAnt['esf_10102010102_ant']
let esf_10102010103_ant = activosCorrientesAnt['esf_10102010103_ant']
let esf_10102010104_ant = activosCorrientesAnt['esf_10102010104_ant']
let esf_10102010105_ant = activosCorrientesAnt['esf_10102010105_ant']
let esf_10102010106_ant = activosCorrientesAnt['esf_10102010106_ant']
let esf_101020102_ant = activosCorrientesAnt['esf_101020102_ant']
let esf_10102010201_ant = activosCorrientesAnt['esf_10102010201_ant']
let esf_10102010202_ant = activosCorrientesAnt['esf_10102010202_ant']
let esf_10102010203_ant = activosCorrientesAnt['esf_10102010203_ant']
let esf_10102010204_ant = activosCorrientesAnt['esf_10102010204_ant']
let esf_10102010205_ant = activosCorrientesAnt['esf_10102010205_ant']
let esf_10102010206_ant = activosCorrientesAnt['esf_10102010206_ant']
let esf_10102010207_ant = activosCorrientesAnt['esf_10102010207_ant']
let esf_10102010208_ant = activosCorrientesAnt['esf_10102010208_ant']
let esf_10102010209_ant = activosCorrientesAnt['esf_10102010209_ant']
let esf_10102010210_ant = activosCorrientesAnt['esf_10102010210_ant']
let esf_10102010211_ant = activosCorrientesAnt['esf_10102010211_ant']
let esf_10102010212_ant = activosCorrientesAnt['esf_10102010212_ant']
let esf_10102010213_ant = activosCorrientesAnt['esf_10102010213_ant']
let esf_10102010214_ant = activosCorrientesAnt['esf_10102010214_ant']
let esf_10102010215_ant = activosCorrientesAnt['esf_10102010215_ant']
let esf_10102010216_ant = activosCorrientesAnt['esf_10102010216_ant']
let esf_10102010217_ant = activosCorrientesAnt['esf_10102010217_ant']
let esf_10102010218_ant = activosCorrientesAnt['esf_10102010218_ant']
let esf_10102010219_ant = activosCorrientesAnt['esf_10102010219_ant']
let esf_10102010220_ant = activosCorrientesAnt['esf_10102010220_ant']
let esf_10102010221_ant = activosCorrientesAnt['esf_10102010221_ant']
let esf_10102010222_ant = activosCorrientesAnt['esf_10102010222_ant']
let esf_10102010223_ant = activosCorrientesAnt['esf_10102010223_ant']
let esf_101020103_ant = activosCorrientesAnt['esf_101020103_ant']
let esf_10102010301_ant = activosCorrientesAnt['esf_10102010301_ant']
let esf_10102010302_ant = activosCorrientesAnt['esf_10102010302_ant']
let esf_10102010303_ant = activosCorrientesAnt['esf_10102010303_ant']
let esf_10102010304_ant = activosCorrientesAnt['esf_10102010304_ant']
let esf_1010202_ant = activosCorrientesAnt['esf_1010202_ant']
let esf_101020201_ant = activosCorrientesAnt['esf_101020201_ant']
let esf_10102020101_ant = activosCorrientesAnt['esf_10102020101_ant']
let esf_10102020102_ant = activosCorrientesAnt['esf_10102020102_ant']
let esf_10102020103_ant = activosCorrientesAnt['esf_10102020103_ant']
let esf_10102020104_ant = activosCorrientesAnt['esf_10102020104_ant']
let esf_10102020105_ant = activosCorrientesAnt['esf_10102020105_ant']
let esf_10102020106_ant = activosCorrientesAnt['esf_10102020106_ant']
let esf_101020202_ant = activosCorrientesAnt['esf_101020202_ant']
let esf_10102020201_ant = activosCorrientesAnt['esf_10102020201_ant']
let esf_10102020202_ant = activosCorrientesAnt['esf_10102020202_ant']
let esf_10102020203_ant = activosCorrientesAnt['esf_10102020203_ant']
let esf_10102020204_ant = activosCorrientesAnt['esf_10102020204_ant']
let esf_10102020205_ant = activosCorrientesAnt['esf_10102020205_ant']
let esf_10102020206_ant = activosCorrientesAnt['esf_10102020206_ant']
let esf_10102020207_ant = activosCorrientesAnt['esf_10102020207_ant']
let esf_10102020208_ant = activosCorrientesAnt['esf_10102020208_ant']
let esf_10102020209_ant = activosCorrientesAnt['esf_10102020209_ant']
let esf_10102020210_ant = activosCorrientesAnt['esf_10102020210_ant']
let esf_10102020211_ant = activosCorrientesAnt['esf_10102020211_ant']
let esf_10102020212_ant = activosCorrientesAnt['esf_10102020212_ant']
let esf_10102020213_ant = activosCorrientesAnt['esf_10102020213_ant']
let esf_10102020214_ant = activosCorrientesAnt['esf_10102020214_ant']
let esf_10102020215_ant = activosCorrientesAnt['esf_10102020215_ant']
let esf_10102020216_ant = activosCorrientesAnt['esf_10102020216_ant']
let esf_10102020217_ant = activosCorrientesAnt['esf_10102020217_ant']
let esf_10102020218_ant = activosCorrientesAnt['esf_10102020218_ant']
let esf_10102020219_ant = activosCorrientesAnt['esf_10102020219_ant']
let esf_10102020220_ant = activosCorrientesAnt['esf_10102020220_ant']
let esf_10102020221_ant = activosCorrientesAnt['esf_10102020221_ant']
let esf_10102020222_ant = activosCorrientesAnt['esf_10102020222_ant']
let esf_10102020223_ant = activosCorrientesAnt['esf_10102020223_ant']
let esf_1010203_ant = activosCorrientesAnt['esf_1010203_ant']
let esf_101020302_ant = activosCorrientesAnt['esf_101020302_ant']
let esf_10102030201_ant = activosCorrientesAnt['esf_10102030201_ant']
let esf_10102030202_ant = activosCorrientesAnt['esf_10102030202_ant']
let esf_10102030203_ant = activosCorrientesAnt['esf_10102030203_ant']
let esf_10102030204_ant = activosCorrientesAnt['esf_10102030204_ant']
let esf_10102030205_ant = activosCorrientesAnt['esf_10102030205_ant']
let esf_10102030206_ant = activosCorrientesAnt['esf_10102030206_ant']
let esf_10102030207_ant = activosCorrientesAnt['esf_10102030207_ant']
let esf_10102030208_ant = activosCorrientesAnt['esf_10102030208_ant']
let esf_10102030209_ant = activosCorrientesAnt['esf_10102030209_ant']
let esf_10102030210_ant = activosCorrientesAnt['esf_10102030210_ant']
let esf_10102030211_ant = activosCorrientesAnt['esf_10102030211_ant']
let esf_10102030212_ant = activosCorrientesAnt['esf_10102030212_ant']
let esf_10102030213_ant = activosCorrientesAnt['esf_10102030213_ant']
let esf_10102030214_ant = activosCorrientesAnt['esf_10102030214_ant']
let esf_10102030215_ant = activosCorrientesAnt['esf_10102030215_ant']
let esf_10102030216_ant = activosCorrientesAnt['esf_10102030216_ant']
let esf_10102030217_ant = activosCorrientesAnt['esf_10102030217_ant']
let esf_10102030218_ant = activosCorrientesAnt['esf_10102030218_ant']
let esf_10102030219_ant = activosCorrientesAnt['esf_10102030219_ant']
let esf_10102030220_ant = activosCorrientesAnt['esf_10102030220_ant']
let esf_10102030221_ant = activosCorrientesAnt['esf_10102030221_ant']
let esf_10102030222_ant = activosCorrientesAnt['esf_10102030222_ant']
let esf_10102030223_ant = activosCorrientesAnt['esf_10102030223_ant']
let esf_1010204_ant = activosCorrientesAnt['esf_1010204_ant']
let esf_101020401_ant = activosCorrientesAnt['esf_101020401_ant']
let esf_101020402_ant = activosCorrientesAnt['esf_101020402_ant']
let esf_101020403_ant = activosCorrientesAnt['esf_101020403_ant']
let esf_1010205_ant = activosCorrientesAnt['esf_1010205_ant']
let esf_101020501_ant = activosCorrientesAnt['esf_101020501_ant']
let esf_10102050101_ant = activosCorrientesAnt['esf_10102050101_ant']
let esf_10102050102_ant = activosCorrientesAnt['esf_10102050102_ant']
let esf_101020502_ant = activosCorrientesAnt['esf_101020502_ant']
let esf_10102050201_ant = activosCorrientesAnt['esf_10102050201_ant']
let esf_10102050202_ant = activosCorrientesAnt['esf_10102050202_ant']
let esf_10102050203_ant = activosCorrientesAnt['esf_10102050203_ant']
let esf_10102050204_ant = activosCorrientesAnt['esf_10102050204_ant']
let esf_10102050207_ant = activosCorrientesAnt['esf_10102050207_ant']
let esf_10102050208_ant = activosCorrientesAnt['esf_10102050208_ant']
let esf_10102050209_ant = activosCorrientesAnt['esf_10102050209_ant']
let esf_10102050210_ant = activosCorrientesAnt['esf_10102050210_ant']
let esf_10102050211_ant = activosCorrientesAnt['esf_10102050211_ant']
let esf_10102050212_ant = activosCorrientesAnt['esf_10102050212_ant']
let esf_10102050213_ant = activosCorrientesAnt['esf_10102050213_ant']
let esf_10102050214_ant = activosCorrientesAnt['esf_10102050214_ant']
let esf_10102050215_ant = activosCorrientesAnt['esf_10102050215_ant']
let esf_10102050216_ant = activosCorrientesAnt['esf_10102050216_ant']
let esf_10102050217_ant = activosCorrientesAnt['esf_10102050217_ant']
let esf_10102050218_ant = activosCorrientesAnt['esf_10102050218_ant']
let esf_10102050219_ant = activosCorrientesAnt['esf_10102050219_ant']
let esf_10102050220_ant = activosCorrientesAnt['esf_10102050220_ant']
let esf_10102050221_ant = activosCorrientesAnt['esf_10102050221_ant']
let esf_1010206_ant = activosCorrientesAnt['esf_1010206_ant']
let esf_101020601_ant = activosCorrientesAnt['esf_101020601_ant']
let esf_101020602_ant = activosCorrientesAnt['esf_101020602_ant']
let esf_101020603_ant = activosCorrientesAnt['esf_101020603_ant']
let esf_101020604_ant = activosCorrientesAnt['esf_101020604_ant']
let esf_1010207_ant = activosCorrientesAnt['esf_1010207_ant']
let esf_10103_ant = activosCorrientesAnt['esf_10103_ant']
let esf_1010301_ant = activosCorrientesAnt['esf_1010301_ant']
let esf_1010302_ant = activosCorrientesAnt['esf_1010302_ant']
let esf_1010303_ant = activosCorrientesAnt['esf_1010303_ant']
let esf_1010304_ant = activosCorrientesAnt['esf_1010304_ant']
let esf_1010305_ant = activosCorrientesAnt['esf_1010305_ant']
let esf_1010306_ant = activosCorrientesAnt['esf_1010306_ant']
let esf_1010307_ant = activosCorrientesAnt['esf_1010307_ant']
let esf_1010308_ant = activosCorrientesAnt['esf_1010308_ant']
let esf_1010309_ant = activosCorrientesAnt['esf_1010309_ant']
let esf_1010310_ant = activosCorrientesAnt['esf_1010310_ant']
let esf_1010311_ant = activosCorrientesAnt['esf_1010311_ant']
let esf_1010312_ant = activosCorrientesAnt['esf_1010312_ant']
let esf_1010313_ant = activosCorrientesAnt['esf_1010313_ant']
let esf_10104_ant = activosCorrientesAnt['esf_10104_ant']
let esf_1010401_ant = activosCorrientesAnt['esf_1010401_ant']
let esf_1010402_ant = activosCorrientesAnt['esf_1010402_ant']
let esf_1010403_ant = activosCorrientesAnt['esf_1010403_ant']
let esf_1010404_ant = activosCorrientesAnt['esf_1010404_ant']
let esf_10105_ant = activosCorrientesAnt['esf_10105_ant']
let esf_1010501_ant = activosCorrientesAnt['esf_1010501_ant']
let esf_1010502_ant = activosCorrientesAnt['esf_1010502_ant']
let esf_1010503_ant = activosCorrientesAnt['esf_1010503_ant']
let esf_10106_ant = activosCorrientesAnt['esf_10106_ant']
let esf_10107_ant = activosCorrientesAnt['esf_10107_ant']
let esf_10108_ant = activosCorrientesAnt['esf_10108_ant']

let values = ref([])

let convertirNegativo_1010313_ant = async id => { esf_1010313_ant.value = (Number(esf_1010313_ant.value) > 0) ? Number(esf_1010313_ant.value) * -1 : Number(esf_1010313_ant.value) }
let convertirNegativo_101020401_ant = async id => { esf_101020401_ant.value = (Number(esf_101020401_ant.value) > 0) ? Number(esf_101020401_ant.value) * -1 : Number(esf_101020401_ant.value) }
let convertirNegativo_101020402_ant = async id => { esf_101020402_ant.value = (Number(esf_101020402_ant.value) > 0) ? Number(esf_101020402_ant.value) * -1 : Number(esf_101020402_ant.value) }
let convertirNegativo_101020403_ant = async id => { esf_101020403_ant.value = (Number(esf_101020403_ant.value) > 0) ? Number(esf_101020403_ant.value) * -1 : Number(esf_101020403_ant.value) }
let convertirNegativo_1010207_ant = async id => { esf_1010207_ant.value = (Number(esf_1010207_ant.value) > 0) ? Number(esf_1010207_ant.value) * -1 : Number(esf_1010207_ant.value) }

let convertirNegativo_1010313 = async id => { esf_1010313.value = (Number(esf_1010313.value) > 0) ? Number(esf_1010313.value) * -1 : esf_1010313.value = Number(esf_1010313.value) }
let convertirNegativo_101020401 = async id => { esf_101020401.value = (Number(esf_101020401.value) > 0) ? Number(esf_101020401.value) * -1 : Number(esf_101020401.value) }
let convertirNegativo_101020402 = async id => { esf_101020402.value = (Number(esf_101020402.value) > 0) ? Number(esf_101020402.value) * -1 : Number(esf_101020402.value) }
let convertirNegativo_101020403 = async id => { esf_101020403.value = (Number(esf_101020403.value) > 0) ? Number(esf_101020403.value) * -1 : Number(esf_101020403.value) }
let convertirNegativo_1010207 = async id => { esf_1010207.value = (Number(esf_1010207.value) > 0) ? Number(esf_1010207.value) * -1 : Number(esf_1010207.value) }

watch(() => props.data.esf_1010302_ant, () => {
  const costos_ant = reportStore.setReportDataAnt("costosifluc")[0]

  costos_ant.eri_5010110_ant = props.data.esf_1010302_ant
})

const handleActionClick = async id => {
  esf_1.value = (Number(esf_101.value) + Number(esf_102.value)).toFixed(2)
  esf_101.value = (Number(esf_10101.value) + Number(esf_10102.value) + Number(esf_10103.value) + Number(esf_10104.value) + Number(esf_10105.value) + Number(esf_10106.value) + Number(esf_10107.value) + Number(esf_10108.value)).toFixed(2)
  props.data.corrientes = esf_101.value
  esf_10101.value = (Number(esf_1010101.value) + Number(esf_1010102.value) + Number(esf_1010103.value)).toFixed(2)
  esf_10102.value = (Number(esf_1010201.value) + Number(esf_1010202.value) + Number(esf_1010203.value) + Number(esf_1010204.value) + Number(esf_1010205.value) + Number(esf_1010206.value) + Number(esf_1010207.value)).toFixed(2)
  esf_1010201.value = (Number(esf_101020101.value) + Number(esf_101020102.value) + Number(esf_101020103.value)).toFixed(2)
  esf_101020101.value = (Number(esf_10102010101.value) + Number(esf_10102010102.value) + Number(esf_10102010103.value) + Number(esf_10102010104.value) + Number(esf_10102010105.value) + Number(esf_10102010106.value)).toFixed(2)
  esf_101020102.value = (Number(esf_10102010201.value) + Number(esf_10102010202.value) + Number(esf_10102010203.value) + Number(esf_10102010204.value) + Number(esf_10102010205.value) + Number(esf_10102010206.value) + Number(esf_10102010207.value) + Number(esf_10102010208.value) + Number(esf_10102010209.value) + Number(esf_10102010210.value) + Number(esf_10102010211.value) + Number(esf_10102010212.value) + Number(esf_10102010213.value) + Number(esf_10102010214.value) + Number(esf_10102010215.value) + Number(esf_10102010216.value) + Number(esf_10102010217.value) + Number(esf_10102010218.value) + Number(esf_10102010219.value) + Number(esf_10102010220.value) + Number(esf_10102010221.value) + Number(esf_10102010222.value) + Number(esf_10102010223.value)).toFixed(2)
  esf_101020103.value = (Number(esf_10102010301.value) + Number(esf_10102010302.value) + Number(esf_10102010303.value) + Number(esf_10102010304.value)).toFixed(2)
  esf_1010202.value = (Number(esf_101020201.value) + Number(esf_101020202.value)).toFixed(2)
  esf_101020201.value = (Number(esf_10102020101.value) + Number(esf_10102020102.value) + Number(esf_10102020103.value) + Number(esf_10102020104.value) + Number(esf_10102020105.value) + Number(esf_10102020106.value)).toFixed(2)
  esf_101020202.value = (Number(esf_10102020201.value) + Number(esf_10102020202.value) + Number(esf_10102020203.value) + Number(esf_10102020204.value) + Number(esf_10102020205.value) + Number(esf_10102020206.value) + Number(esf_10102020207.value) + Number(esf_10102020208.value) + Number(esf_10102020209.value) + Number(esf_10102020210.value) + Number(esf_10102020211.value) + Number(esf_10102020212.value) + Number(esf_10102020213.value) + Number(esf_10102020214.value) + Number(esf_10102020215.value) + Number(esf_10102020216.value) + Number(esf_10102020217.value) + Number(esf_10102020218.value) + Number(esf_10102020219.value) + Number(esf_10102020220.value) + Number(esf_10102020221.value) + Number(esf_10102020222.value) + Number(esf_10102020223.value)).toFixed(2)
  esf_1010203.value = (Number(esf_101020302.value)).toFixed(2)
  esf_101020302.value = (Number(esf_10102030201.value) + Number(esf_10102030202.value) + Number(esf_10102030203.value) + Number(esf_10102030204.value) + Number(esf_10102030205.value) + Number(esf_10102030206.value) + Number(esf_10102030207.value) + Number(esf_10102030208.value) + Number(esf_10102030209.value) + Number(esf_10102030210.value) + Number(esf_10102030211.value) + Number(esf_10102030212.value) + Number(esf_10102030213.value) + Number(esf_10102030214.value) + Number(esf_10102030215.value) + Number(esf_10102030216.value) + Number(esf_10102030217.value) + Number(esf_10102030218.value) + Number(esf_10102030219.value) + Number(esf_10102030220.value) + Number(esf_10102030221.value) + Number(esf_10102030222.value) + Number(esf_10102030223.value)).toFixed(2)
  esf_1010204.value = (Number(esf_101020401.value) + Number(esf_101020402.value) + Number(esf_101020403.value)).toFixed(2)
  esf_1010205.value = (Number(esf_101020501.value) + Number(esf_101020502.value)).toFixed(2)
  esf_101020501.value = (Number(esf_10102050101.value) + Number(esf_10102050102.value)).toFixed(2)
  esf_101020502.value = (Number(esf_10102050201.value) + Number(esf_10102050202.value) + Number(esf_10102050203.value) + Number(esf_10102050204.value) + Number(esf_10102050207.value) + Number(esf_10102050208.value) + Number(esf_10102050209.value) + Number(esf_10102050210.value) + Number(esf_10102050211.value) + Number(esf_10102050212.value) + Number(esf_10102050213.value) + Number(esf_10102050214.value) + Number(esf_10102050215.value) + Number(esf_10102050216.value) + Number(esf_10102050217.value) + Number(esf_10102050218.value) + Number(esf_10102050219.value) + Number(esf_10102050220.value) + Number(esf_10102050221.value)).toFixed(2)
  esf_1010206.value = (Number(esf_101020601.value) + Number(esf_101020602.value) + Number(esf_101020603.value) + Number(esf_101020604.value)).toFixed(2)
  esf_10103.value = (Number(esf_1010301.value) + Number(esf_1010302.value) + Number(esf_1010303.value) + Number(esf_1010304.value) + Number(esf_1010305.value) + Number(esf_1010306.value) + Number(esf_1010307.value) + Number(esf_1010308.value) + Number(esf_1010309.value) + Number(esf_1010310.value) + Number(esf_1010311.value) + Number(esf_1010312.value) + Number(esf_1010313.value)).toFixed(2)
  esf_10104.value = (Number(esf_1010401.value) + Number(esf_1010402.value) + Number(esf_1010403.value) + Number(esf_1010404.value)).toFixed(2)
  esf_10105.value = (Number(esf_1010501.value) + Number(esf_1010502.value) + Number(esf_1010503.value)).toFixed(2)

  reportStore.updateReportData("activoscorrientesifluc", 'esf_10101', Number(esf_10101.value))

  props.data.ac_10101 = esf_10101.value

  const activoscorrientes = {
    esf_101: esf_101.value,
    esf_10101: esf_10101.value,
    esf_1010101: esf_1010101.value,
    esf_1010102: esf_1010102.value,
    esf_1010103: esf_1010103.value,
    esf_10102: esf_10102.value,
    esf_1010201: esf_1010201.value,
    esf_101020101: esf_101020101.value,
    esf_10102010101: esf_10102010101.value,
    esf_10102010102: esf_10102010102.value,
    esf_10102010103: esf_10102010103.value,
    esf_10102010104: esf_10102010104.value,
    esf_10102010105: esf_10102010105.value,
    esf_10102010106: esf_10102010106.value,
    esf_101020102: esf_101020102.value,
    esf_10102010201: esf_10102010201.value,
    esf_10102010202: esf_10102010202.value,
    esf_10102010203: esf_10102010203.value,
    esf_10102010204: esf_10102010204.value,
    esf_10102010205: esf_10102010205.value,
    esf_10102010206: esf_10102010206.value,
    esf_10102010207: esf_10102010207.value,
    esf_10102010208: esf_10102010208.value,
    esf_10102010209: esf_10102010209.value,
    esf_10102010210: esf_10102010210.value,
    esf_10102010211: esf_10102010211.value,
    esf_10102010212: esf_10102010212.value,
    esf_10102010213: esf_10102010213.value,
    esf_10102010214: esf_10102010214.value,
    esf_10102010215: esf_10102010215.value,
    esf_10102010216: esf_10102010216.value,
    esf_10102010217: esf_10102010217.value,
    esf_10102010218: esf_10102010218.value,
    esf_10102010219: esf_10102010219.value,
    esf_10102010220: esf_10102010220.value,
    esf_10102010221: esf_10102010221.value,
    esf_10102010222: esf_10102010222.value,
    esf_10102010223: esf_10102010223.value,
    esf_101020103: esf_101020103.value,
    esf_10102010301: esf_10102010301.value,
    esf_10102010302: esf_10102010302.value,
    esf_10102010303: esf_10102010303.value,
    esf_10102010304: esf_10102010304.value,
    esf_1010202: esf_1010202.value,
    esf_101020201: esf_101020201.value,
    esf_10102020101: esf_10102020101.value,
    esf_10102020102: esf_10102020102.value,
    esf_10102020103: esf_10102020103.value,
    esf_10102020104: esf_10102020104.value,
    esf_10102020105: esf_10102020105.value,
    esf_10102020106: esf_10102020106.value,
    esf_101020202: esf_101020202.value,
    esf_10102020201: esf_10102020201.value,
    esf_10102020202: esf_10102020202.value,
    esf_10102020203: esf_10102020203.value,
    esf_10102020204: esf_10102020204.value,
    esf_10102020205: esf_10102020205.value,
    esf_10102020206: esf_10102020206.value,
    esf_10102020207: esf_10102020207.value,
    esf_10102020208: esf_10102020208.value,
    esf_10102020209: esf_10102020209.value,
    esf_10102020210: esf_10102020210.value,
    esf_10102020211: esf_10102020211.value,
    esf_10102020212: esf_10102020212.value,
    esf_10102020213: esf_10102020213.value,
    esf_10102020214: esf_10102020214.value,
    esf_10102020215: esf_10102020215.value,
    esf_10102020216: esf_10102020216.value,
    esf_10102020217: esf_10102020217.value,
    esf_10102020218: esf_10102020218.value,
    esf_10102020219: esf_10102020219.value,
    esf_10102020220: esf_10102020220.value,
    esf_10102020221: esf_10102020221.value,
    esf_10102020222: esf_10102020222.value,
    esf_10102020223: esf_10102020223.value,
    esf_1010203: esf_1010203.value,
    esf_101020302: esf_101020302.value,
    esf_10102030201: esf_10102030201.value,
    esf_10102030202: esf_10102030202.value,
    esf_10102030203: esf_10102030203.value,
    esf_10102030204: esf_10102030204.value,
    esf_10102030205: esf_10102030205.value,
    esf_10102030206: esf_10102030206.value,
    esf_10102030207: esf_10102030207.value,
    esf_10102030208: esf_10102030208.value,
    esf_10102030209: esf_10102030209.value,
    esf_10102030210: esf_10102030210.value,
    esf_10102030211: esf_10102030211.value,
    esf_10102030212: esf_10102030212.value,
    esf_10102030213: esf_10102030213.value,
    esf_10102030214: esf_10102030214.value,
    esf_10102030215: esf_10102030215.value,
    esf_10102030216: esf_10102030216.value,
    esf_10102030217: esf_10102030217.value,
    esf_10102030218: esf_10102030218.value,
    esf_10102030219: esf_10102030219.value,
    esf_10102030220: esf_10102030220.value,
    esf_10102030221: esf_10102030221.value,
    esf_10102030222: esf_10102030222.value,
    esf_10102030223: esf_10102030223.value,
    esf_1010204: esf_1010204.value,
    esf_101020401: esf_101020401.value,
    esf_101020402: esf_101020402.value,
    esf_101020403: esf_101020403.value,
    esf_1010205: esf_1010205.value,
    esf_101020501: esf_101020501.value,
    esf_10102050101: esf_10102050101.value,
    esf_10102050102: esf_10102050102.value,
    esf_101020502: esf_101020502.value,
    esf_10102050201: esf_10102050201.value,
    esf_10102050202: esf_10102050202.value,
    esf_10102050203: esf_10102050203.value,
    esf_10102050204: esf_10102050204.value,
    esf_10102050207: esf_10102050207.value,
    esf_10102050208: esf_10102050208.value,
    esf_10102050209: esf_10102050209.value,
    esf_10102050210: esf_10102050210.value,
    esf_10102050211: esf_10102050211.value,
    esf_10102050212: esf_10102050212.value,
    esf_10102050213: esf_10102050213.value,
    esf_10102050214: esf_10102050214.value,
    esf_10102050215: esf_10102050215.value,
    esf_10102050216: esf_10102050216.value,
    esf_10102050217: esf_10102050217.value,
    esf_10102050218: esf_10102050218.value,
    esf_10102050219: esf_10102050219.value,
    esf_10102050220: esf_10102050220.value,
    esf_10102050221: esf_10102050221.value,
    esf_1010206: esf_1010206.value,
    esf_101020601: esf_101020601.value,
    esf_101020602: esf_101020602.value,
    esf_101020603: esf_101020603.value,
    esf_101020604: esf_101020604.value,
    esf_1010207: esf_1010207.value,
    esf_10103: esf_10103.value,
    esf_1010301: esf_1010301.value,
    esf_1010302: esf_1010302.value,
    esf_1010303: esf_1010303.value,
    esf_1010304: esf_1010304.value,
    esf_1010305: esf_1010305.value,
    esf_1010306: esf_1010306.value,
    esf_1010307: esf_1010307.value,
    esf_1010308: esf_1010308.value,
    esf_1010309: esf_1010309.value,
    esf_1010310: esf_1010310.value,
    esf_1010311: esf_1010311.value,
    esf_1010312: esf_1010312.value,
    esf_1010313: esf_1010313.value,
    esf_10104: esf_10104.value,
    esf_1010401: esf_1010401.value,
    esf_1010402: esf_1010402.value,
    esf_1010403: esf_1010403.value,
    esf_1010404: esf_1010404.value,
    esf_10105: esf_10105.value,
    esf_1010501: esf_1010501.value,
    esf_1010502: esf_1010502.value,
    esf_1010503: esf_1010503.value,
    esf_10106: esf_10106.value,
    esf_10107: esf_10107.value,
    esf_10108: esf_10108.value,
  }

  reportStore.setReportData({
    ...reportStore.reportData,
    activoscorrientesifluc: activoscorrientes,
  })
}

const handleActionClick_ant = async id => {
  esf_1_ant.value = (Number(esf_101_ant.value)).toFixed(2)
  esf_101_ant.value = (Number(esf_10101_ant.value) + Number(esf_10102_ant.value) + Number(esf_10103_ant.value) + Number(esf_10104_ant.value) + Number(esf_10105_ant.value) + Number(esf_10106_ant.value) + Number(esf_10107_ant.value) + Number(esf_10108_ant.value)).toFixed(2)
  props.data.corrientes_ant = esf_101_ant.value

  esf_10101_ant.value = (Number(esf_1010101_ant.value) + Number(esf_1010102_ant.value) + Number(esf_1010103_ant.value)).toFixed(2)
  esf_10102_ant.value = (Number(esf_1010201_ant.value) + Number(esf_1010202_ant.value) + Number(esf_1010203_ant.value) + Number(esf_1010204_ant.value) + Number(esf_1010205_ant.value) + Number(esf_1010206_ant.value) + Number(esf_1010207_ant.value)).toFixed(2)
  esf_1010201_ant.value = (Number(esf_101020101_ant.value) + Number(esf_101020102_ant.value) + Number(esf_101020103_ant.value)).toFixed(2)
  esf_101020101_ant.value = (Number(esf_10102010101_ant.value) + Number(esf_10102010102_ant.value) + Number(esf_10102010103_ant.value) + Number(esf_10102010104_ant.value) + Number(esf_10102010105_ant.value) + Number(esf_10102010106_ant.value)).toFixed(2)
  esf_101020102_ant.value = (Number(esf_10102010201_ant.value) + Number(esf_10102010202_ant.value) + Number(esf_10102010203_ant.value) + Number(esf_10102010204_ant.value) + Number(esf_10102010205_ant.value) + Number(esf_10102010206_ant.value) + Number(esf_10102010207_ant.value) + Number(esf_10102010208_ant.value) + Number(esf_10102010209_ant.value) + Number(esf_10102010210_ant.value) + Number(esf_10102010211_ant.value) + Number(esf_10102010212_ant.value) + Number(esf_10102010213_ant.value) + Number(esf_10102010214_ant.value) + Number(esf_10102010215_ant.value) + Number(esf_10102010216_ant.value) + Number(esf_10102010217_ant.value) + Number(esf_10102010218_ant.value) + Number(esf_10102010219_ant.value) + Number(esf_10102010220_ant.value) + Number(esf_10102010221_ant.value) + Number(esf_10102010222_ant.value) + Number(esf_10102010223_ant.value)).toFixed(2)
  esf_101020103_ant.value = (Number(esf_10102010301_ant.value) + Number(esf_10102010302_ant.value) + Number(esf_10102010303_ant.value) + Number(esf_10102010304_ant.value)).toFixed(2)
  esf_1010202_ant.value = (Number(esf_101020201_ant.value) + Number(esf_101020202_ant.value)).toFixed(2)
  esf_101020201_ant.value = (Number(esf_10102020101_ant.value) + Number(esf_10102020102_ant.value) + Number(esf_10102020103_ant.value) + Number(esf_10102020104_ant.value) + Number(esf_10102020105_ant.value) + Number(esf_10102020106_ant.value)).toFixed(2)
  esf_101020202_ant.value = (Number(esf_10102020201_ant.value) + Number(esf_10102020202_ant.value) + Number(esf_10102020203_ant.value) + Number(esf_10102020204_ant.value) + Number(esf_10102020205_ant.value) + Number(esf_10102020206_ant.value) + Number(esf_10102020207_ant.value) + Number(esf_10102020208_ant.value) + Number(esf_10102020209_ant.value) + Number(esf_10102020210_ant.value) + Number(esf_10102020211_ant.value) + Number(esf_10102020212_ant.value) + Number(esf_10102020213_ant.value) + Number(esf_10102020214_ant.value) + Number(esf_10102020215_ant.value) + Number(esf_10102020216_ant.value) + Number(esf_10102020217_ant.value) + Number(esf_10102020218_ant.value) + Number(esf_10102020219_ant.value) + Number(esf_10102020220_ant.value) + Number(esf_10102020221_ant.value) + Number(esf_10102020222_ant.value) + Number(esf_10102020223_ant.value)).toFixed(2)
  esf_1010203_ant.value = (Number(esf_101020302_ant.value)).toFixed(2)
  esf_101020302_ant.value = (Number(esf_10102030201_ant.value) + Number(esf_10102030202_ant.value) + Number(esf_10102030203_ant.value) + Number(esf_10102030204_ant.value) + Number(esf_10102030205_ant.value) + Number(esf_10102030206_ant.value) + Number(esf_10102030207_ant.value) + Number(esf_10102030208_ant.value) + Number(esf_10102030209_ant.value) + Number(esf_10102030210_ant.value) + Number(esf_10102030211_ant.value) + Number(esf_10102030212_ant.value) + Number(esf_10102030213_ant.value) + Number(esf_10102030214_ant.value) + Number(esf_10102030215_ant.value) + Number(esf_10102030216_ant.value) + Number(esf_10102030217_ant.value) + Number(esf_10102030218_ant.value) + Number(esf_10102030219_ant.value) + Number(esf_10102030220_ant.value) + Number(esf_10102030221_ant.value) + Number(esf_10102030222_ant.value) + Number(esf_10102030223_ant.value)).toFixed(2)
  esf_1010204_ant.value = (Number(esf_101020401_ant.value) + Number(esf_101020402_ant.value) + Number(esf_101020403_ant.value)).toFixed(2)
  esf_1010205_ant.value = (Number(esf_101020501_ant.value) + Number(esf_101020502_ant.value)).toFixed(2)
  esf_101020501_ant.value = (Number(esf_10102050101_ant.value) + Number(esf_10102050102_ant.value)).toFixed(2)
  esf_101020502_ant.value = (Number(esf_10102050201_ant.value) + Number(esf_10102050202_ant.value) + Number(esf_10102050203_ant.value) + Number(esf_10102050204_ant.value) + Number(esf_10102050207_ant.value) + Number(esf_10102050208_ant.value) + Number(esf_10102050209_ant.value) + Number(esf_10102050210_ant.value) + Number(esf_10102050211_ant.value) + Number(esf_10102050212_ant.value) + Number(esf_10102050213_ant.value) + Number(esf_10102050214_ant.value) + Number(esf_10102050215_ant.value) + Number(esf_10102050216_ant.value) + Number(esf_10102050217_ant.value) + Number(esf_10102050218_ant.value) + Number(esf_10102050219_ant.value) + Number(esf_10102050220_ant.value) + Number(esf_10102050221_ant.value)).toFixed(2)
  esf_1010206_ant.value = (Number(esf_101020601_ant.value) + Number(esf_101020602_ant.value) + Number(esf_101020603_ant.value) + Number(esf_101020604_ant.value)).toFixed(2)
  esf_10103_ant.value = (Number(esf_1010301_ant.value) + Number(esf_1010302_ant.value) + Number(esf_1010303_ant.value) + Number(esf_1010304_ant.value) + Number(esf_1010305_ant.value) + Number(esf_1010306_ant.value) + Number(esf_1010307_ant.value) + Number(esf_1010308_ant.value) + Number(esf_1010309_ant.value) + Number(esf_1010310_ant.value) + Number(esf_1010311_ant.value) + Number(esf_1010312_ant.value) + Number(esf_1010313_ant.value)).toFixed(2)
  esf_10104_ant.value = (Number(esf_1010401_ant.value) + Number(esf_1010402_ant.value) + Number(esf_1010403_ant.value) + Number(esf_1010404_ant.value)).toFixed(2)
  esf_10105_ant.value = (Number(esf_1010501_ant.value) + Number(esf_1010502_ant.value) + Number(esf_1010503_ant.value)).toFixed(2)

  reportStore.updateReportData("activoscorrientesifluc_ant", 'esf_10101_ant', Number(esf_10101_ant.value))

  props.data.ac_10101_ant = esf_10101_ant.value

  const activoscorrientes_ant = {
    esf_101_ant: esf_101_ant.value,
    esf_10101_ant: esf_10101_ant.value,
    esf_1010101_ant: esf_1010101_ant.value,
    esf_1010102_ant: esf_1010102_ant.value,
    esf_1010103_ant: esf_1010103_ant.value,
    esf_10102_ant: esf_10102_ant.value,
    esf_1010201_ant: esf_1010201_ant.value,
    esf_101020101_ant: esf_101020101_ant.value,
    esf_10102010101_ant: esf_10102010101_ant.value,
    esf_10102010102_ant: esf_10102010102_ant.value,
    esf_10102010103_ant: esf_10102010103_ant.value,
    esf_10102010104_ant: esf_10102010104_ant.value,
    esf_10102010105_ant: esf_10102010105_ant.value,
    esf_10102010106_ant: esf_10102010106_ant.value,
    esf_101020102_ant: esf_101020102_ant.value,
    esf_10102010201_ant: esf_10102010201_ant.value,
    esf_10102010202_ant: esf_10102010202_ant.value,
    esf_10102010203_ant: esf_10102010203_ant.value,
    esf_10102010204_ant: esf_10102010204_ant.value,
    esf_10102010205_ant: esf_10102010205_ant.value,
    esf_10102010206_ant: esf_10102010206_ant.value,
    esf_10102010207_ant: esf_10102010207_ant.value,
    esf_10102010208_ant: esf_10102010208_ant.value,
    esf_10102010209_ant: esf_10102010209_ant.value,
    esf_10102010210_ant: esf_10102010210_ant.value,
    esf_10102010211_ant: esf_10102010211_ant.value,
    esf_10102010212_ant: esf_10102010212_ant.value,
    esf_10102010213_ant: esf_10102010213_ant.value,
    esf_10102010214_ant: esf_10102010214_ant.value,
    esf_10102010215_ant: esf_10102010215_ant.value,
    esf_10102010216_ant: esf_10102010216_ant.value,
    esf_10102010217_ant: esf_10102010217_ant.value,
    esf_10102010218_ant: esf_10102010218_ant.value,
    esf_10102010219_ant: esf_10102010219_ant.value,
    esf_10102010220_ant: esf_10102010220_ant.value,
    esf_10102010221_ant: esf_10102010221_ant.value,
    esf_10102010222_ant: esf_10102010222_ant.value,
    esf_10102010223_ant: esf_10102010223_ant.value,
    esf_101020103_ant: esf_101020103_ant.value,
    esf_10102010301_ant: esf_10102010301_ant.value,
    esf_10102010302_ant: esf_10102010302_ant.value,
    esf_10102010303_ant: esf_10102010303_ant.value,
    esf_10102010304_ant: esf_10102010304_ant.value,
    esf_1010202_ant: esf_1010202_ant.value,
    esf_101020201_ant: esf_101020201_ant.value,
    esf_10102020101_ant: esf_10102020101_ant.value,
    esf_10102020102_ant: esf_10102020102_ant.value,
    esf_10102020103_ant: esf_10102020103_ant.value,
    esf_10102020104_ant: esf_10102020104_ant.value,
    esf_10102020105_ant: esf_10102020105_ant.value,
    esf_10102020106_ant: esf_10102020106_ant.value,
    esf_101020202_ant: esf_101020202_ant.value,
    esf_10102020201_ant: esf_10102020201_ant.value,
    esf_10102020202_ant: esf_10102020202_ant.value,
    esf_10102020203_ant: esf_10102020203_ant.value,
    esf_10102020204_ant: esf_10102020204_ant.value,
    esf_10102020205_ant: esf_10102020205_ant.value,
    esf_10102020206_ant: esf_10102020206_ant.value,
    esf_10102020207_ant: esf_10102020207_ant.value,
    esf_10102020208_ant: esf_10102020208_ant.value,
    esf_10102020209_ant: esf_10102020209_ant.value,
    esf_10102020210_ant: esf_10102020210_ant.value,
    esf_10102020211_ant: esf_10102020211_ant.value,
    esf_10102020212_ant: esf_10102020212_ant.value,
    esf_10102020213_ant: esf_10102020213_ant.value,
    esf_10102020214_ant: esf_10102020214_ant.value,
    esf_10102020215_ant: esf_10102020215_ant.value,
    esf_10102020216_ant: esf_10102020216_ant.value,
    esf_10102020217_ant: esf_10102020217_ant.value,
    esf_10102020218_ant: esf_10102020218_ant.value,
    esf_10102020219_ant: esf_10102020219_ant.value,
    esf_10102020220_ant: esf_10102020220_ant.value,
    esf_10102020221_ant: esf_10102020221_ant.value,
    esf_10102020222_ant: esf_10102020222_ant.value,
    esf_10102020223_ant: esf_10102020223_ant.value,
    esf_1010203_ant: esf_1010203_ant.value,
    esf_101020302_ant: esf_101020302_ant.value,
    esf_10102030201_ant: esf_10102030201_ant.value,
    esf_10102030202_ant: esf_10102030202_ant.value,
    esf_10102030203_ant: esf_10102030203_ant.value,
    esf_10102030204_ant: esf_10102030204_ant.value,
    esf_10102030205_ant: esf_10102030205_ant.value,
    esf_10102030206_ant: esf_10102030206_ant.value,
    esf_10102030207_ant: esf_10102030207_ant.value,
    esf_10102030208_ant: esf_10102030208_ant.value,
    esf_10102030209_ant: esf_10102030209_ant.value,
    esf_10102030210_ant: esf_10102030210_ant.value,
    esf_10102030211_ant: esf_10102030211_ant.value,
    esf_10102030212_ant: esf_10102030212_ant.value,
    esf_10102030213_ant: esf_10102030213_ant.value,
    esf_10102030214_ant: esf_10102030214_ant.value,
    esf_10102030215_ant: esf_10102030215_ant.value,
    esf_10102030216_ant: esf_10102030216_ant.value,
    esf_10102030217_ant: esf_10102030217_ant.value,
    esf_10102030218_ant: esf_10102030218_ant.value,
    esf_10102030219_ant: esf_10102030219_ant.value,
    esf_10102030220_ant: esf_10102030220_ant.value,
    esf_10102030221_ant: esf_10102030221_ant.value,
    esf_10102030222_ant: esf_10102030222_ant.value,
    esf_10102030223_ant: esf_10102030223_ant.value,
    esf_1010204_ant: esf_1010204_ant.value,
    esf_101020401_ant: esf_101020401_ant.value,
    esf_101020402_ant: esf_101020402_ant.value,
    esf_101020403_ant: esf_101020403_ant.value,
    esf_1010205_ant: esf_1010205_ant.value,
    esf_101020501_ant: esf_101020501_ant.value,
    esf_10102050101_ant: esf_10102050101_ant.value,
    esf_10102050102_ant: esf_10102050102_ant.value,
    esf_101020502_ant: esf_101020502_ant.value,
    esf_10102050201_ant: esf_10102050201_ant.value,
    esf_10102050202_ant: esf_10102050202_ant.value,
    esf_10102050203_ant: esf_10102050203_ant.value,
    esf_10102050204_ant: esf_10102050204_ant.value,
    esf_10102050207_ant: esf_10102050207_ant.value,
    esf_10102050208_ant: esf_10102050208_ant.value,
    esf_10102050209_ant: esf_10102050209_ant.value,
    esf_10102050210_ant: esf_10102050210_ant.value,
    esf_10102050211_ant: esf_10102050211_ant.value,
    esf_10102050212_ant: esf_10102050212_ant.value,
    esf_10102050213_ant: esf_10102050213_ant.value,
    esf_10102050214_ant: esf_10102050214_ant.value,
    esf_10102050215_ant: esf_10102050215_ant.value,
    esf_10102050216_ant: esf_10102050216_ant.value,
    esf_10102050217_ant: esf_10102050217_ant.value,
    esf_10102050218_ant: esf_10102050218_ant.value,
    esf_10102050219_ant: esf_10102050219_ant.value,
    esf_10102050220_ant: esf_10102050220_ant.value,
    esf_10102050221_ant: esf_10102050221_ant.value,
    esf_1010206_ant: esf_1010206_ant.value,
    esf_101020601_ant: esf_101020601_ant.value,
    esf_101020602_ant: esf_101020602_ant.value,
    esf_101020603_ant: esf_101020603_ant.value,
    esf_101020604_ant: esf_101020604_ant.value,
    esf_1010207_ant: esf_1010207_ant.value,
    esf_10103_ant: esf_10103_ant.value,
    esf_1010301_ant: esf_1010301_ant.value,
    esf_1010302_ant: esf_1010302_ant.value,
    esf_1010303_ant: esf_1010303_ant.value,
    esf_1010304_ant: esf_1010304_ant.value,
    esf_1010305_ant: esf_1010305_ant.value,
    esf_1010306_ant: esf_1010306_ant.value,
    esf_1010307_ant: esf_1010307_ant.value,
    esf_1010308_ant: esf_1010308_ant.value,
    esf_1010309_ant: esf_1010309_ant.value,
    esf_1010310_ant: esf_1010310_ant.value,
    esf_1010311_ant: esf_1010311_ant.value,
    esf_1010312_ant: esf_1010312_ant.value,
    esf_1010313_ant: esf_1010313_ant.value,
    esf_10104_ant: esf_10104_ant.value,
    esf_1010401_ant: esf_1010401_ant.value,
    esf_1010402_ant: esf_1010402_ant.value,
    esf_1010403_ant: esf_1010403_ant.value,
    esf_1010404_ant: esf_1010404_ant.value,
    esf_10105_ant: esf_10105_ant.value,
    esf_1010501_ant: esf_1010501_ant.value,
    esf_1010502_ant: esf_1010502_ant.value,
    esf_1010503_ant: esf_1010503_ant.value,
    esf_10106_ant: esf_10106_ant.value,
    esf_10107_ant: esf_10107_ant.value,
    esf_10108_ant: esf_10108_ant.value,
  }

  reportStore.setReportDataAnt({
    ...reportStore.reportDataAnt,
    activoscorrientesifluc_ant: activoscorrientes_ant,
  })
}

onMounted(() => {
  handleActionClick(1)
})
onMounted(() => {
  handleActionClick_ant(1)
})
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VCardText class="add-products-form">
      <div
        class="ma-sm-4"
      >
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
                  <span class="text-sm ml-7">EFECTIVO Y EQUIVALENTES AL EFECTIVO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10101" type="number" disabled id="esf_10101" v-model="esf_10101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10101" type="number" disabled id="esf_10101_ant" v-model="esf_10101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CAJA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010101" v-model="esf_1010101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010101" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010101_ant" v-model="esf_1010101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INSTITUCIONES FINANCIERAS PÚBLICAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010102" v-model="esf_1010102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010102" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010102_ant" v-model="esf_1010102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INSTITUCIONES FINANCIERAS PRIVADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010103" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010103" v-model="esf_1010103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010103" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010103_ant" v-model="esf_1010103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">ACTIVOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102" type="number" disabled id="esf_10102" v-model="esf_10102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102" type="number" disabled id="esf_10102_ant" v-model="esf_10102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010201" type="number" disabled  id="esf_1010201" v-model="esf_1010201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010201" type="number" disabled  id="esf_1010201_ant" v-model="esf_1010201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">RENTA VARIABLE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020101" type="number" disabled id="esf_101020101" v-model="esf_101020101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020101" type="number" disabled id="esf_101020101_ant" v-model="esf_101020101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">ACCIONES Y PARTICIPACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField
                    label="(+) 10102010101"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                    type="number"
                    id="esf_10102010101" v-model="esf_10102010101"
                  />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField
                    label="(+) 10102010101"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                    type="number"
                    id="esf_10102010101_ant" v-model="esf_10102010101_ant"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUOTAS DE FONDOS COLECTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010102" v-model="esf_10102010102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010102" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010102_ant" v-model="esf_10102010102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VALORES DE TITULARIZACIÓN DE PARTICIPACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010103" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010103" v-model="esf_10102010103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010103" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010103_ant" v-model="esf_10102010103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">UNIDADES DE PARTICIPACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010104" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010104" v-model="esf_10102010104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010104" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010104_ant" v-model="esf_10102010104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INVERSIONES EN EL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010105" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010105" v-model="esf_10102010105" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010105" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010105_ant" v-model="esf_10102010105_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="O10102010106" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010106" v-model="esf_10102010106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="O10102010106" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010106_ant" v-model="esf_10102010106_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">RENTA FIJA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020102" type="number" disabled id="esf_101020102" v-model="esf_101020102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020102" type="number" disabled id="esf_101020102_ant" v-model="esf_101020102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">AVALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010201" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010201" v-model="esf_10102010201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010201" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010201_ant" v-model="esf_10102010201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DEL ESTADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010202" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010202" v-model="esf_10102010202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010202" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010202_ant" v-model="esf_10102010202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DE PRENDA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010203" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010203" v-model="esf_10102010203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010203" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010203_ant" v-model="esf_10102010203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CÉDULAS HIPOTECARIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010204" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010204" v-model="esf_10102010204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010204" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010204_ant" v-model="esf_10102010204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010205" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010205" v-model="esf_10102010205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010205" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010205_ant" v-model="esf_10102010205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010206" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010206" v-model="esf_10102010206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010206" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010206_ant" v-model="esf_10102010206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE TESORERÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010207" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010207" v-model="esf_10102010207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010207" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010207_ant" v-model="esf_10102010207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE DEPÓSITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010208" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010208" v-model="esf_10102010208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010208" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010208_ant" v-model="esf_10102010208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUPONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010209" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010209" v-model="esf_10102010209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010209" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010209_ant" v-model="esf_10102010209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DEPÓSITOS A PLAZO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010210" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010210" v-model="esf_10102010210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010210" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010210_ant" v-model="esf_10102010210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">LETRAS DE CAMBIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010211" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010211" v-model="esf_10102010211" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010211" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010211_ant" v-model="esf_10102010211_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">NOTAS DE CRÉDITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010212" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010212" v-model="esf_10102010212" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010212" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010212_ant" v-model="esf_10102010212_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010213" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010213" v-model="esf_10102010213" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010213" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010213_ant" v-model="esf_10102010213_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">FACTURAS COMERCIALES NEGOCIABLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010214" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010214" v-model="esf_10102010214" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010214" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010214_ant" v-model="esf_10102010214_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OVERNIGHTS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010215" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010215" v-model="esf_10102010215" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010215" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010215_ant" v-model="esf_10102010215_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES CONVERTIBLES EN ACCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010216" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010216" v-model="esf_10102010216" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010216" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010216_ant" v-model="esf_10102010216_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAPEL COMERCIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010217" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010217" v-model="esf_10102010217" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010217" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010217_ant" v-model="esf_10102010217_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAGARÉS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010218" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010218" v-model="esf_10102010218" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010218" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010218_ant" v-model="esf_10102010218_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PÓLIZAS DE ACUMULACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010219" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010219" v-model="esf_10102010219" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010219" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010219_ant" v-model="esf_10102010219_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">TÍTULOS DEL BANCO CENTRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010220" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010220" v-model="esf_10102010220" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010220" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010220_ant" v-model="esf_10102010220_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VALORES DE TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010221" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010221" v-model="esf_10102010221" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010221" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010221_ant" v-model="esf_10102010221_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INVERSIONES EN EL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010222</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010222" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010222" v-model="esf_10102010222" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010222" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010222_ant" v-model="esf_10102010222_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010223</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010223" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010223" v-model="esf_10102010223" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010223" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010223_ant" v-model="esf_10102010223_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">DERIVADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020103" type="number" disabled id="esf_101020103" v-model="esf_101020103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020103" type="number" disabled id="esf_101020103_ant" v-model="esf_101020103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">FORWARD</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010301" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010301" v-model="esf_10102010301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010301" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010301_ant" v-model="esf_10102010301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">FUTUROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010302" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010302" v-model="esf_10102010302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010302" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010302_ant" v-model="esf_10102010302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OPCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="0102010303" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010303" v-model="esf_10102010303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="0102010303" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010303_ant" v-model="esf_10102010303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102010304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010304" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102010304" v-model="esf_10102010304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102010304" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102010304_ant" v-model="esf_10102010304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTRO RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010202" type="number" disabled id="esf_1010202" v-model="esf_1010202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010202" type="number" disabled id="esf_1010202_ant" v-model="esf_1010202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">RENTA VARIABLE</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020201" type="number" disabled id="esf_101020201" v-model="esf_101020201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020201" type="number" disabled id="esf_101020201_ant" v-model="esf_101020201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">ACCIONES Y PARTICIPACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020101" v-model="esf_10102020101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020101" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020101_ant" v-model="esf_10102020101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUOTAS DE FONDOS COLECTIVOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020102" v-model="esf_10102020102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020102" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020102_ant" v-model="esf_10102020102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">UNIDADES DE PARTICIPACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020103" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020103" v-model="esf_10102020103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020103" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020103_ant" v-model="esf_10102020103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VALORES DE TITULARIZACIÓN DE PARTICIPACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020104" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020104" v-model="esf_10102020104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020104" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020104_ant" v-model="esf_10102020104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INVERSIONES EN EL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020105" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020105" v-model="esf_10102020105" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020105" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020105_ant" v-model="esf_10102020105_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020106" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020106" v-model="esf_10102020106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020106" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020106_ant" v-model="esf_10102020106_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">RENTA FIJA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020202" type="number" disabled id="esf_101020202" v-model="esf_101020202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020202" type="number" disabled id="esf_101020202_ant" v-model="esf_101020202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">AVALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020201" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020201" v-model="esf_10102020201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020201" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020201_ant" v-model="esf_10102020201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DEL ESTADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020202" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020202" v-model="esf_10102020202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020202" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020202_ant" v-model="esf_10102020202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DE PRENDA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020203" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020203" v-model="esf_10102020203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020203" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020203_ant" v-model="esf_10102020203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CÉDULAS HIPOTECARIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020204" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020204" v-model="esf_10102020204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020204" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020204_ant" v-model="esf_10102020204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020205" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020205" v-model="esf_10102020205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020205" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020205_ant" v-model="esf_10102020205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020206" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020206" v-model="esf_10102020206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020206" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020206_ant" v-model="esf_10102020206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE TESORERÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020207" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020207" v-model="esf_10102020207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020207" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020207_ant" v-model="esf_10102020207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE DEPÓSITOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020208" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020208" v-model="esf_10102020208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020208" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020208_ant" v-model="esf_10102020208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUPONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020209" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020209" v-model="esf_10102020209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020209" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020209_ant" v-model="esf_10102020209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DEPÓSITOS A PLAZO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020210" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020210" v-model="esf_10102020210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020210" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020210_ant" v-model="esf_10102020210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">LETRAS DE CAMBIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020211" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020211" v-model="esf_10102020211" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020211" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020211_ant" v-model="esf_10102020211_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">NOTAS DE CRÉDITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020212" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020212" v-model="esf_10102020212" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020212" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020212_ant" v-model="esf_10102020212_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020213" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020213" v-model="esf_10102020213" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020213" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020213_ant" v-model="esf_10102020213_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">FACTURAS COMERCIALES NEGOCIABLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020214" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020214" v-model="esf_10102020214" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020214" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020214_ant" v-model="esf_10102020214_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OVERNIGHTS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020215" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020215" v-model="esf_10102020215" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020215" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020215_ant" v-model="esf_10102020215_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES CONVERTIBLES EN ACCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020216" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020216" v-model="esf_10102020216" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020216" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020216_ant" v-model="esf_10102020216_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAPEL COMERCIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020217" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020217" v-model="esf_10102020217" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020217" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020217_ant" v-model="esf_10102020217_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAGARÉS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020218" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020218" v-model="esf_10102020218" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020218" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020218_ant" v-model="esf_10102020218_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POLIZAS DE ACUMULACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020219" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020219" v-model="esf_10102020219" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020219" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020219_ant" v-model="esf_10102020219_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">TÍTULOS DEL BANCO CENTRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020220" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020220" v-model="esf_10102020220" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020220" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020220_ant" v-model="esf_10102020220_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VALORES DE TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020221" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020221" v-model="esf_10102020221" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020221" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020221_ant" v-model="esf_10102020221_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INVERSIONES EN EL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020222</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020222" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020222" v-model="esf_10102020222" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020222" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020222_ant" v-model="esf_10102020222_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102020223</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020223" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102020223" v-model="esf_10102020223" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102020223" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102020223_ant" v-model="esf_10102020223_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ACTIVOS FINANCIEROS AL COSTO AMORTIZADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010203" type="number" disabled id="esf_1010203" v-model="esf_1010203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010203" type="number" disabled id="esf_1010203_ant" v-model="esf_1010203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">RENTA FIJA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020302" type="number" disabled id="esf_101020302" v-model="esf_101020302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020302" type="number" disabled id="esf_101020302_ant" v-model="esf_101020302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">AVALES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030201" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030201" v-model="esf_10102030201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030201" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030201_ant" v-model="esf_10102030201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DEL ESTADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030202" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030202" v-model="esf_10102030202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030202" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030202_ant" v-model="esf_10102030202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">BONOS DE PRENDA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030203" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030203" v-model="esf_10102030203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030203" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030203_ant" v-model="esf_10102030203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CÉDULAS HIPOTECARIAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030204" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030204" v-model="esf_10102030204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030204" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030204_ant" v-model="esf_10102030204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030205" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030205" v-model="esf_10102030205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030205" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030205_ant" v-model="esf_10102030205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE INVERSIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030206" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030206" v-model="esf_10102030206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030206" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030206_ant" v-model="esf_10102030206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE TESORERÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030207" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030207" v-model="esf_10102030207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030207" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030207_ant" v-model="esf_10102030207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CERTIFICADOS DE DEPÓSITOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030208" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030208" v-model="esf_10102030208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030208" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030208_ant" v-model="esf_10102030208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUPONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030209" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030209" v-model="esf_10102030209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030209" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030209_ant" v-model="esf_10102030209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DEPÓSITOS A PLAZO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030210" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030210" v-model="esf_10102030210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030210" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030210_ant" v-model="esf_10102030210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">LETRAS DE CAMBIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030211" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030211" v-model="esf_10102030211" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030211" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030211_ant" v-model="esf_10102030211_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">NOTAS DE CRÉDITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030212" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030212" v-model="esf_10102030212" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030212" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030212_ant" v-model="esf_10102030212_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030213" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030213" v-model="esf_10102030213" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030213" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030213_ant" v-model="esf_10102030213_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">FACTURAS COMERCIALES NEGOCIABLES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030214" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030214" v-model="esf_10102030214" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030214" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030214_ant" v-model="esf_10102030214_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OVERNIGHTS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030215" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030215" v-model="esf_10102030215" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030215" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030215_ant" v-model="esf_10102030215_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OBLIGACIONES CONVERTIBLES EN ACCIONES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030216" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030216" v-model="esf_10102030216" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030216" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030216_ant" v-model="esf_10102030216_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAPEL COMERCIAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030217" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030217" v-model="esf_10102030217" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030217" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030217_ant" v-model="esf_10102030217_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PAGARÉS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030218" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030218" v-model="esf_10102030218" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030218" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030218_ant" v-model="esf_10102030218_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">PÓLIZAS DE ACUMULACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030219" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030219" v-model="esf_10102030219" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030219" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030219_ant" v-model="esf_10102030219_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">TÍTULOS DEL BANCO CENTRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030220" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030220" v-model="esf_10102030220" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030220" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030220_ant" v-model="esf_10102030220_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">VALORES DE TITULARIZACIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030221" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030221" v-model="esf_10102030221" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030221" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030221_ant" v-model="esf_10102030221_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INVERSIONES EN EL EXTERIOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030222</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030222" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030222" v-model="esf_10102030222" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030222" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030222_ant" v-model="esf_10102030222_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102030223</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030223" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102030223" v-model="esf_10102030223" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102030223" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102030223_ant" v-model="esf_10102030223_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PROVISIÓN POR DETERIORO DE ACTIVOS FINANCIEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010204" type="number" disabled id="esf_1010204" v-model="esf_1010204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010204" type="number" disabled id="esf_1010204_ant" v-model="esf_1010204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN RESULTADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020401" @blur="convertirNegativo_101020401(this); handleActionClick(this)" type="number" id="esf_101020401" v-model="esf_101020401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020401" @blur="convertirNegativo_101020401_ant(this); handleActionClick_ant(this)" type="number" id="esf_101020401_ant" v-model="esf_101020401_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ACTIVOS FINANCIEROS AL COSTO AMORTIZADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020402" @blur="convertirNegativo_101020402(this); handleActionClick(this)" type="number" id="esf_101020402" v-model="esf_101020402" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020402" @blur="convertirNegativo_101020402_ant(this); handleActionClick_ant(this)" type="number" id="esf_101020402_ant" v-model="esf_101020402_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">ACTIVOS FINANCIEROS A VALOR RAZONABLE CON CAMBIOS EN OTROS RESULTADO INTEGRAL</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020403" @blur="convertirNegativo_101020403(this); handleActionClick(this)" type="number" id="esf_101020403" v-model="esf_101020403" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 101020403" @blur="convertirNegativo_101020403_ant(this); handleActionClick_ant(this)" type="number" id="esf_101020403_ant" v-model="esf_101020403_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DEUDORES COMERCIALES Y OTRAS CUENTAS POR COBRAR NO RELACIONADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010205</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010205" type="number" disabled id="esf_1010205" v-model="esf_1010205" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010205" type="number" disabled id="esf_1010205_ant" v-model="esf_1010205_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">DE ACTIVIDADES ORDINARIAS QUE GENEREN INTERESES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020501" type="number" disabled id="esf_101020501" v-model="esf_101020501" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020501" type="number" disabled id="esf_101020501_ant" v-model="esf_101020501_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUENTAS Y DOCUMENTOS A COBRAR CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050101" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050101" v-model="esf_10102050101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050101" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050101_ant" v-model="esf_10102050101_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUENTAS Y DOCUMENTOS A COBRAR A TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050102</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050102" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050102" v-model="esf_10102050102" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050102" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050102_ant" v-model="esf_10102050102_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">DE ACTIVIDADES ORDINARIAS QUE NO GENEREN INTERESES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020502" type="number" disabled id="esf_101020502" v-model="esf_101020502" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020502" type="number" disabled id="esf_101020502_ant" v-model="esf_101020502_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUENTAS Y DOCUEMNTOS A COBRAR CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050201</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050201" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050201" v-model="esf_10102050201" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050201" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050201_ant" v-model="esf_10102050201_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUENTAS Y DOCUEMNTOS A COBRAR A TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050202</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050202" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050202" v-model="esf_10102050202" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050202" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050202_ant" v-model="esf_10102050202_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CUENTAS POR COBRAR AL ORIGINADOR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050203</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050203" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050203" v-model="esf_10102050203" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050203" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050203_ant" v-model="esf_10102050203_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">COMISIÓN POR OPERACIONES BÚRSATILES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050204</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050204" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050204" v-model="esf_10102050204" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050204" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050204_ant" v-model="esf_10102050204_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">CONTRATO DE UNDERWRITING</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050207" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050207" v-model="esf_10102050207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050207" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050207_ant" v-model="esf_10102050207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR ADMINISTRACIÓN Y MANEJO DE PORTAFOLIOS DE TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050208</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050208" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050208" v-model="esf_10102050208" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050208" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050208_ant" v-model="esf_10102050208_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR ADMINISTRACIÓN Y MANEJO DE FONDOS ADMINISTRADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050209</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050209" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050209" v-model="esf_10102050209" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050209" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050209_ant" v-model="esf_10102050209_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR ADMINISTRACIÓN Y MANEJO DE NEGOCIOS FIDUCIARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050210</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050210" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050210" v-model="esf_10102050210" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050210" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050210_ant" v-model="esf_10102050210_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR CUSTODÍA Y CONSERVACIÓN DE VALORES MATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050211</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050211" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050211" v-model="esf_10102050211" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050211" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050211_ant" v-model="esf_10102050211_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR CUSTODÍA Y CONSERVACIÓN DE VALORES DESMATERIALIZADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050212</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050212" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050212" v-model="esf_10102050212" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050212" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050212_ant" v-model="esf_10102050212_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR MANEJO DE LIBRO DE ACCIONES Y ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050213</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050213" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050213" v-model="esf_10102050213" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050213" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050213_ant" v-model="esf_10102050213_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">POR ASESORÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050214</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050214" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050214" v-model="esf_10102050214" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050214" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050214_ant" v-model="esf_10102050214_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DIVIDENDOS POR COBRAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050215</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050215" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050215" v-model="esf_10102050215" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050215" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050215_ant" v-model="esf_10102050215_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">INTERESES POR COBRAR</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050216</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050216" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050216" v-model="esf_10102050216" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050216" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050216_ant" v-model="esf_10102050216_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DEUDORES POR INTERMEDIACIÓN DE VALORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050217</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050217" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050217" v-model="esf_10102050217" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050217" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050217_ant" v-model="esf_10102050217_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">ANTICIPOS A COMITENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050218</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050218" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050218" v-model="esf_10102050218" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050218" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050218_ant" v-model="esf_10102050218_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">ANTICIPO A letRUCTOR POR AVANCE DE OBRAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050219</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050219" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050219" v-model="esf_10102050219" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050219" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050219_ant" v-model="esf_10102050219_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">DERECHOS POR COMPROMISOS DE RECOMPRA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050220</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050220" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050220" v-model="esf_10102050220" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050220" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050220_ant" v-model="esf_10102050220_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-13">OTRAS CUENTAS POR COBRAR NO RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10102050221</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050221" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10102050221" v-model="esf_10102050221" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10102050221" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10102050221_ant" v-model="esf_10102050221_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">DOCUMENTOS Y CUENTAS POR COBRAR RELACIONADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010206</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010206" type="number" disabled id="esf_1010206" v-model="esf_1010206" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010206" @type="number" disabled id="esf_1010206_ant" v-model="esf_1010206_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR COBRAR A ACCIONISTAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020601</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020601" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_101020601" v-model="esf_101020601" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020601" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_101020601_ant" v-model="esf_101020601_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR COBRAR A COMPAÑIAS RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020602</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020602" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_101020602" v-model="esf_101020602" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020602" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_101020602_ant" v-model="esf_101020602_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">POR COBRAR A CLIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020603</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020603" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_101020603" v-model="esf_101020603" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020603" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_101020603_ant" v-model="esf_101020603_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-11">OTRAS CUENTAS POR COBRAR RELACIONADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101020604</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020604" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_101020604" v-model="esf_101020604" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101020604" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_101020604_ant" v-model="esf_101020604_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">PROVISIÓN POR CUENTAS INCOBRABLES Y DETERIORO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010207</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1010207" @blur="convertirNegativo_1010207(this); handleActionClick(this)" type="number" id="esf_1010207" v-model="esf_1010207" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1010207" @blur="convertirNegativo_1010207_ant(this); handleActionClick_ant(this)" type="number" id="esf_1010207_ant" v-model="esf_1010207_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10103</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10103" type="number" disabled id="esf_10103" v-model="esf_10103" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10103" type="number" disabled id="esf_10103_ant" v-model="esf_10103_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE MATERIA PRIMA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010301</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010301" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010301" v-model="esf_1010301" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010301" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010301_ant" v-model="esf_1010301_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE PRODUCTOS EN PROCESO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010302</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010302" id="esf_1010302" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" v-model="esf_1010302" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010302" id="esf_1010302_ant" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" v-model="esf_1010302_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE SUMINISTROS O MATERIALES A SER CONSUMIDOS EN EL PROCESO DE PRODUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010303</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010303" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010303" v-model="esf_1010303" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010303" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010303_ant" v-model="esf_1010303_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE SUMINISTROS O MATERIALES A SER CONSUMIDOS EN LA PRESTACIÓN DEL SERVICIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010304</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010304" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010304" v-model="esf_1010304" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010304" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010304_ant" v-model="esf_1010304_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE PROD. TERM. Y MERCAD. EN ALMACÉN - PRODUCIDO POR LA COMPAÑÍA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010305</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010305" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010305" v-model="esf_1010305" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010305" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010305_ant" v-model="esf_1010305_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS DE PROD. TERM. Y MERCAD. EN ALMACÉN - COMPRADO A TERCEROS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010306</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010306" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010306" v-model="esf_1010306" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010306" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010306_ant" v-model="esf_1010306_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">MERCADERÍAS EN TRÁNSITO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010307</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010307" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010307" v-model="esf_1010307" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010307" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010307_ant" v-model="esf_1010307_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBRAS EN CONSTRUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010308</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010308" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010308" v-model="esf_1010308" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010308" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010308_ant" v-model="esf_1010308_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OBRAS TERMINADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010309</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010309" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010309" v-model="esf_1010309" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010309" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010309_ant" v-model="esf_1010309_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">MATERIALES O BIENES PARA LA CONSTRUCCIÓN</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010310</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010310" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010310" v-model="esf_1010310" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010310" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010310_ant" v-model="esf_1010310_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">INVENTARIOS REPUESTOS, HERRAMNIENTAS Y ACCESORIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010311</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010311" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010311" v-model="esf_1010311" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010311" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010311_ant" v-model="esf_1010311_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS INVENTARIOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010312</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010312" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010312" v-model="esf_1010312" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010312" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010312_ant" v-model="esf_1010312_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">(-) PROVISIÓN POR VALOR NETO DE REALIZACIÓN Y OTRAS PERDIDAS EN INVENTARIO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010313</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1010313" @blur="convertirNegativo_1010313(esf_1010313); handleActionClick(this)" type="number" id="esf_1010313" v-model="esf_1010313" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(-) 1010313" @blur="convertirNegativo_1010313_ant(esf_1010313); handleActionClick_ant(this)" type="number" id="esf_1010313_ant" v-model="esf_1010313_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">SERVICIOS Y OTROS PAGOS ANTICIPADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10104</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10104" type="number" disabled id="esf_10104" v-model="esf_10104" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10104" type="number" disabled id="esf_10104_ant" v-model="esf_10104_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">SEGUROS PAGADOS POR ANTICIPADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010401</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010401" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010401" v-model="esf_1010401" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010401" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010401_ant" v-model="esf_1010401_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-9">ARRIENDOS PAGADOS POR ANTICIPADO</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010402</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010402" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010402" v-model="esf_1010402" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010402" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010402_ant" v-model="esf_1010402_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6">
                  <span class="text-sm ml-9">ANTICIPOS A PROVEEDORES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010403</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010403" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010403" v-model="esf_1010403" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010403" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010403_ant" v-model="esf_1010403_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">OTROS ANTICIPOS ENTREGADOS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010404</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010404" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010404" v-model="esf_1010404" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010404" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010404_ant" v-model="esf_1010404_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">ACTIVOS POR IMPUSTOS CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10105</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10105" @type="number" disabled id="esf_10105" v-model="esf_10105" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10105" type="number" disabled id="esf_10105_ant" v-model="esf_10105_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CRÉDITO TRIBUTARIO A FAVOR DE LA EMPRESA (IVA)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010501</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010501" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010501" v-model="esf_1010501" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010501" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010501_ant" v-model="esf_1010501_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">CRÉDITO TRIBUTARIO A FAVOR DE LA EMPRESA (I.R.)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010502</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010502" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010502" v-model="esf_1010502" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010502" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010502_ant" v-model="esf_1010502_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-9">ANTICIPO DE IMPUESTO A LA RENTA</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">1010503</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010503" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_1010503" v-model="esf_1010503" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 1010503" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_1010503_ant" v-model="esf_1010503_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">ACTIVOS CORRIENTES MANTENIDOS PARA LA VENTA Y OPERACIONES DISCONTINUADAS</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10106</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10106" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10106" v-model="esf_10106" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10106" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10106_ant" v-model="esf_10106_ant" />
                </VCol>
              </VRow>


              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">CONSTRUCCIONES EN PROCESO (NIC 11 Y SECC. 23 PYMES)</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10107</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10107" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10107" v-model="esf_10107" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField
                    label="(+) 10107"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                    type="number"
                    id="esf_10107_ant"
                    v-model="esf_10107_ant"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-7">OTROS ACTIVOS CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">10108</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10108" @blur="handleActionClick(this)"  @input="handleActionClick(this)" @keyup="handleActionClick(this)" type="number" id="esf_10108" v-model="esf_10108" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 10108" @blur="handleActionClick_ant(this)"  @input="handleActionClick_ant(this)" @keyup="handleActionClick_ant(this)" type="number" id="esf_10108_ant" v-model="esf_10108_ant" />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4">
                <VCol cols="12" md="6" >
                  <span class="text-sm ml-5">ACTIVOS CORRIENTES</span>
                </VCol>
                <VCol cols="12" md="2">
                  <span class="text-sm">101</span>
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101" type="number" disabled id="esf_101" v-model="esf_101" />
                </VCol>
                <VCol cols="12" md="2" >
                  <VTextField label="(+) 101" type="number" disabled id="esf_101_ant" v-model="esf_101_ant" />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>
      </div>
    </VCardText>
  </VForm>
</template>
