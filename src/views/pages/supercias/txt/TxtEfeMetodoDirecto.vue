<script setup>
const values = ref([])

/* PERIODO ACTUAL */
let efe_md_95 = ref('0')
let efe_md_9501 = ref('0')
let efe_md_950101 = ref('0')
let efe_md_95010101 = ref('0')
let efe_md_95010102 = ref('0')
let efe_md_95010103 = ref('0')
let efe_md_95010104 = ref('0')
let efe_md_95010105 = ref('0')
let efe_md_950102 = ref('0')
let efe_md_95010201 = ref('0')
let efe_md_95010202 = ref('0')
let efe_md_95010203 = ref('0')
let efe_md_95010204 = ref('0')
let efe_md_95010205 = ref('0')
let efe_md_950103 = ref('0')
let efe_md_950104 = ref('0')
let efe_md_950105 = ref('0')
let efe_md_950106 = ref('0')
let efe_md_950107 = ref('0')
let efe_md_950108 = ref('0')
let efe_md_9502 = ref('0')
let efe_md_950201 = ref('0')
let efe_md_950202 = ref('0')
let efe_md_950203 = ref('0')
let efe_md_950204 = ref('0')
let efe_md_950205 = ref('0')
let efe_md_950206 = ref('0')
let efe_md_950207 = ref('0')
let efe_md_950208 = ref('0')
let efe_md_950209 = ref('0')
let efe_md_950210 = ref('0')
let efe_md_950211 = ref('0')
let efe_md_950212 = ref('0')
let efe_md_950213 = ref('0')
let efe_md_950214 = ref('0')
let efe_md_950215 = ref('0')
let efe_md_950216 = ref('0')
let efe_md_950217 = ref('0')
let efe_md_950218 = ref('0')
let efe_md_950219 = ref('0')
let efe_md_950220 = ref('0')
let efe_md_950221 = ref('0')
let efe_md_9503 = ref('0')
let efe_md_950301 = ref('0')
let efe_md_950302 = ref('0')
let efe_md_950303 = ref('0')
let efe_md_950304 = ref('0')
let efe_md_950305 = ref('0')
let efe_md_950306 = ref('0')
let efe_md_950307 = ref('0')
let efe_md_950308 = ref('0')
let efe_md_950309 = ref('0')
let efe_md_950310 = ref('0')
let efe_md_9504 = ref('0')
let efe_md_950401 = ref('0')
let efe_md_9505 = ref('0')
let efe_md_9506 = ref('0')
let efe_md_9507 = ref('0')
let efe_md_96 = ref('0')
let efe_md_97 = ref('0')
let efe_md_9701 = ref('0')
let efe_md_9702 = ref('0')
let efe_md_9703 = ref('0')
let efe_md_9704 = ref('0')
let efe_md_9705 = ref('0')
let efe_md_9706 = ref('0')
let efe_md_9707 = ref('0')
let efe_md_9708 = ref('0')
let efe_md_9709 = ref('0')
let efe_md_9710 = ref('0')
let efe_md_9711 = ref('0')
let efe_md_98 = ref('0')
let efe_md_9801 = ref('0')
let efe_md_9802 = ref('0')
let efe_md_9803 = ref('0')
let efe_md_9804 = ref('0')
let efe_md_9805 = ref('0')
let efe_md_9806 = ref('0')
let efe_md_9807 = ref('0')
let efe_md_9808 = ref('0')
let efe_md_9809 = ref('0')
let efe_md_9810 = ref('0')
let efe_md_9820 = ref('0')

/* PERIODO ANTERIOR */
let efe_md_95_ant = ref('0')
let efe_md_9501_ant = ref('0')
let efe_md_950101_ant = ref('0')
let efe_md_95010101_ant = ref('0')
let efe_md_95010102_ant = ref('0')
let efe_md_95010103_ant = ref('0')
let efe_md_95010104_ant = ref('0')
let efe_md_95010105_ant = ref('0')
let efe_md_950102_ant = ref('0')
let efe_md_95010201_ant = ref('0')
let efe_md_95010202_ant = ref('0')
let efe_md_95010203_ant = ref('0')
let efe_md_95010204_ant = ref('0')
let efe_md_95010205_ant = ref('0')
let efe_md_950103_ant = ref('0')
let efe_md_950104_ant = ref('0')
let efe_md_950105_ant = ref('0')
let efe_md_950106_ant = ref('0')
let efe_md_950107_ant = ref('0')
let efe_md_950108_ant = ref('0')
let efe_md_9502_ant = ref('0')
let efe_md_950201_ant = ref('0')
let efe_md_950202_ant = ref('0')
let efe_md_950203_ant = ref('0')
let efe_md_950204_ant = ref('0')
let efe_md_950205_ant = ref('0')
let efe_md_950206_ant = ref('0')
let efe_md_950207_ant = ref('0')
let efe_md_950208_ant = ref('0')
let efe_md_950209_ant = ref('0')
let efe_md_950210_ant = ref('0')
let efe_md_950211_ant = ref('0')
let efe_md_950212_ant = ref('0')
let efe_md_950213_ant = ref('0')
let efe_md_950214_ant = ref('0')
let efe_md_950215_ant = ref('0')
let efe_md_950216_ant = ref('0')
let efe_md_950217_ant = ref('0')
let efe_md_950218_ant = ref('0')
let efe_md_950219_ant = ref('0')
let efe_md_950220_ant = ref('0')
let efe_md_950221_ant = ref('0')
let efe_md_9503_ant = ref('0')
let efe_md_950301_ant = ref('0')
let efe_md_950302_ant = ref('0')
let efe_md_950303_ant = ref('0')
let efe_md_950304_ant = ref('0')
let efe_md_950305_ant = ref('0')
let efe_md_950306_ant = ref('0')
let efe_md_950307_ant = ref('0')
let efe_md_950308_ant = ref('0')
let efe_md_950309_ant = ref('0')
let efe_md_950310_ant = ref('0')
let efe_md_9504_ant = ref('0')
let efe_md_950401_ant = ref('0')
let efe_md_9505_ant = ref('0')
let efe_md_9506_ant = ref('0')
let efe_md_9507_ant = ref('0')
let efe_md_96_ant = ref('0')
let efe_md_97_ant = ref('0')
let efe_md_9701_ant = ref('0')
let efe_md_9702_ant = ref('0')
let efe_md_9703_ant = ref('0')
let efe_md_9704_ant = ref('0')
let efe_md_9705_ant = ref('0')
let efe_md_9706_ant = ref('0')
let efe_md_9707_ant = ref('0')
let efe_md_9708_ant = ref('0')
let efe_md_9709_ant = ref('0')
let efe_md_9710_ant = ref('0')
let efe_md_9711_ant = ref('0')
let efe_md_98_ant = ref('0')
let efe_md_9801_ant = ref('0')
let efe_md_9802_ant = ref('0')
let efe_md_9803_ant = ref('0')
let efe_md_9804_ant = ref('0')
let efe_md_9805_ant = ref('0')
let efe_md_9806_ant = ref('0')
let efe_md_9807_ant = ref('0')
let efe_md_9808_ant = ref('0')
let efe_md_9809_ant = ref('0')
let efe_md_9810_ant = ref('0')
let efe_md_9820_ant = ref('0')

let convertirNegativo_95010201_ant = async id => { efe_md_95010201_ant.value = (Number(efe_md_95010201_ant.value) > 0) ? Number(efe_md_95010201_ant.value) * -1 : Number(efe_md_95010201_ant.value) }
let convertirNegativo_95010202_ant = async id => { efe_md_95010202_ant.value = (Number(efe_md_95010202_ant.value) > 0) ? Number(efe_md_95010202_ant.value) * -1 : Number(efe_md_95010202_ant.value) }
let convertirNegativo_95010203_ant = async id => { efe_md_95010203_ant.value = (Number(efe_md_95010203_ant.value) > 0) ? Number(efe_md_95010203_ant.value) * -1 : Number(efe_md_95010203_ant.value) }
let convertirNegativo_95010204_ant = async id => { efe_md_95010204_ant.value = (Number(efe_md_95010204_ant.value) > 0) ? Number(efe_md_95010204_ant.value) * -1 : Number(efe_md_95010204_ant.value) }
let convertirNegativo_95010205_ant = async id => { efe_md_95010205_ant.value = (Number(efe_md_95010205_ant.value) > 0) ? Number(efe_md_95010205_ant.value) * -1 : Number(efe_md_95010205_ant.value) }
let convertirNegativo_950103_ant = async id => { efe_md_950103_ant.value = (Number(efe_md_950103_ant.value) > 0) ? Number(efe_md_950103_ant.value) * -1 : Number(efe_md_950103_ant.value) }
let convertirNegativo_950105_ant = async id => { efe_md_950105_ant.value = (Number(efe_md_950105_ant.value) > 0) ? Number(efe_md_950105_ant.value) * -1 : Number(efe_md_950105_ant.value) }
let convertirNegativo_950107_ant = async id => { efe_md_950107_ant.value = (Number(efe_md_950107_ant.value) > 0) ? Number(efe_md_950107_ant.value) * -1 : Number(efe_md_950107_ant.value) }
let convertirNegativo_950202_ant = async id => { efe_md_950202_ant.value = (Number(efe_md_950202_ant.value) > 0) ? Number(efe_md_950202_ant.value) * -1 : Number(efe_md_950202_ant.value) }
let convertirNegativo_950203_ant = async id => { efe_md_950203_ant.value = (Number(efe_md_950203_ant.value) > 0) ? Number(efe_md_950203_ant.value) * -1 : Number(efe_md_950203_ant.value) }
let convertirNegativo_950205_ant = async id => { efe_md_950205_ant.value = (Number(efe_md_950205_ant.value) > 0) ? Number(efe_md_950205_ant.value) * -1 : Number(efe_md_950205_ant.value) }
let convertirNegativo_950207_ant = async id => { efe_md_950207_ant.value = (Number(efe_md_950207_ant.value) > 0) ? Number(efe_md_950207_ant.value) * -1 : Number(efe_md_950207_ant.value) }
let convertirNegativo_950209_ant = async id => { efe_md_950209_ant.value = (Number(efe_md_950209_ant.value) > 0) ? Number(efe_md_950209_ant.value) * -1 : Number(efe_md_950209_ant.value) }
let convertirNegativo_950211_ant = async id => { efe_md_950211_ant.value = (Number(efe_md_950211_ant.value) > 0) ? Number(efe_md_950211_ant.value) * -1 : Number(efe_md_950211_ant.value) }
let convertirNegativo_950213_ant = async id => { efe_md_950213_ant.value = (Number(efe_md_950213_ant.value) > 0) ? Number(efe_md_950213_ant.value) * -1 : Number(efe_md_950213_ant.value) }
let convertirNegativo_950215_ant = async id => { efe_md_950215_ant.value = (Number(efe_md_950215_ant.value) > 0) ? Number(efe_md_950215_ant.value) * -1 : Number(efe_md_950215_ant.value) }
let convertirNegativo_950217_ant = async id => { efe_md_950217_ant.value = (Number(efe_md_950217_ant.value) > 0) ? Number(efe_md_950217_ant.value) * -1 : Number(efe_md_950217_ant.value) }
let convertirNegativo_950303_ant = async id => { efe_md_950303_ant.value = (Number(efe_md_950303_ant.value) > 0) ? Number(efe_md_950303_ant.value) * -1 : Number(efe_md_950303_ant.value) }
let convertirNegativo_950305_ant = async id => { efe_md_950305_ant.value = (Number(efe_md_950305_ant.value) > 0) ? Number(efe_md_950305_ant.value) * -1 : Number(efe_md_950305_ant.value) }
let convertirNegativo_950306_ant = async id => { efe_md_950306_ant.value = (Number(efe_md_950306_ant.value) > 0) ? Number(efe_md_950306_ant.value) * -1 : Number(efe_md_950306_ant.value) }
let convertirNegativo_950308_ant = async id => { efe_md_950308_ant.value = (Number(efe_md_950308_ant.value) > 0) ? Number(efe_md_950308_ant.value) * -1 : Number(efe_md_950308_ant.value) }
let convertirNegativo_9704_ant = async id => { efe_md_9704_ant.value = (Number(efe_md_9704_ant.value) > 0) ? Number(efe_md_9704_ant.value) * -1 : Number(efe_md_9704_ant.value) }

let convertirNegativo_95010201 = async id => { efe_md_95010201.value = (Number(efe_md_95010201.value) > 0) ? Number(efe_md_95010201.value) * -1 : Number(efe_md_95010201.value) }
let convertirNegativo_95010202 = async id => { efe_md_95010202.value = (Number(efe_md_95010202.value) > 0) ? Number(efe_md_95010202.value) * -1 : Number(efe_md_95010202.value) }
let convertirNegativo_95010203 = async id => { efe_md_95010203.value = (Number(efe_md_95010203.value) > 0) ? Number(efe_md_95010203.value) * -1 : Number(efe_md_95010203.value) }
let convertirNegativo_95010204 = async id => { efe_md_95010204.value = (Number(efe_md_95010204.value) > 0) ? Number(efe_md_95010204.value) * -1 : Number(efe_md_95010204.value) }
let convertirNegativo_95010205 = async id => { efe_md_95010205.value = (Number(efe_md_95010205.value) > 0) ? Number(efe_md_95010205.value) * -1 : Number(efe_md_95010205.value) }
let convertirNegativo_950103 = async id => { efe_md_950103.value = (Number(efe_md_950103.value) > 0) ? Number(efe_md_950103.value) * -1 : Number(efe_md_950103.value) }
let convertirNegativo_950105 = async id => { efe_md_950105.value = (Number(efe_md_950105.value) > 0) ? Number(efe_md_950105.value) * -1 : Number(efe_md_950105.value) }
let convertirNegativo_950107 = async id => { efe_md_950107.value = (Number(efe_md_950107.value) > 0) ? Number(efe_md_950107.value) * -1 : Number(efe_md_950107.value) }
let convertirNegativo_950202 = async id => { efe_md_950202.value = (Number(efe_md_950202.value) > 0) ? Number(efe_md_950202.value) * -1 : Number(efe_md_950202.value) }
let convertirNegativo_950203 = async id => { efe_md_950203.value = (Number(efe_md_950203.value) > 0) ? Number(efe_md_950203.value) * -1 : Number(efe_md_950203.value) }
let convertirNegativo_950205 = async id => { efe_md_950205.value = (Number(efe_md_950205.value) > 0) ? Number(efe_md_950205.value) * -1 : Number(efe_md_950205.value) }
let convertirNegativo_950207 = async id => { efe_md_950207.value = (Number(efe_md_950207.value) > 0) ? Number(efe_md_950207.value) * -1 : Number(efe_md_950207.value) }
let convertirNegativo_950209 = async id => { efe_md_950209.value = (Number(efe_md_950209.value) > 0) ? Number(efe_md_950209.value) * -1 : Number(efe_md_950209.value) }
let convertirNegativo_950211 = async id => { efe_md_950211.value = (Number(efe_md_950211.value) > 0) ? Number(efe_md_950211.value) * -1 : Number(efe_md_950211.value) }
let convertirNegativo_950213 = async id => { efe_md_950213.value = (Number(efe_md_950213.value) > 0) ? Number(efe_md_950213.value) * -1 : Number(efe_md_950213.value) }
let convertirNegativo_950215 = async id => { efe_md_950215.value = (Number(efe_md_950215.value) > 0) ? Number(efe_md_950215.value) * -1 : Number(efe_md_950215.value) }
let convertirNegativo_950217 = async id => { efe_md_950217.value = (Number(efe_md_950217.value) > 0) ? Number(efe_md_950217.value) * -1 : Number(efe_md_950217.value) }
let convertirNegativo_950303 = async id => { efe_md_950303.value = (Number(efe_md_950303.value) > 0) ? Number(efe_md_950303.value) * -1 : Number(efe_md_950303.value) }
let convertirNegativo_950305 = async id => { efe_md_950305.value = (Number(efe_md_950305.value) > 0) ? Number(efe_md_950305.value) * -1 : Number(efe_md_950305.value) }
let convertirNegativo_950306 = async id => { efe_md_950306.value = (Number(efe_md_950306.value) > 0) ? Number(efe_md_950306.value) * -1 : Number(efe_md_950306.value) }
let convertirNegativo_950308 = async id => { efe_md_950308.value = (Number(efe_md_950308.value) > 0) ? Number(efe_md_950308.value) * -1 : Number(efe_md_950308.value) }
let convertirNegativo_9704 = async id => { efe_md_9704.value = (Number(efe_md_9704.value) > 0) ? Number(efe_md_9704.value) * -1 : Number(efe_md_9704.value) }


const handleActionClick = async id => {
  efe_md_95.value = (Number(efe_md_9501.value) + Number(efe_md_9502.value) + Number(efe_md_9503.value)).toFixed(2)
  efe_md_9501.value = (Number(efe_md_950101.value) + Number(efe_md_950102.value) + Number(efe_md_950103.value) + Number(efe_md_950104.value) + Number(efe_md_950105.value) + Number(efe_md_950106.value) + Number(efe_md_950107.value) + Number(efe_md_950108.value)).toFixed(2)
  efe_md_950101.value = (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)
  efe_md_950102.value = (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)
  efe_md_9502.value = (Number(efe_md_950201.value) + Number(efe_md_950202.value) + Number(efe_md_950203.value) + Number(efe_md_950204.value) + Number(efe_md_950205.value) + Number(efe_md_950206.value) + Number(efe_md_950207.value) + Number(efe_md_950208.value) + Number(efe_md_950209.value) + Number(efe_md_950210.value) + Number(efe_md_950211.value) + Number(efe_md_950212.value) + Number(efe_md_950213.value) + Number(efe_md_950214.value) + Number(efe_md_950215.value) + Number(efe_md_950216.value) + Number(efe_md_950217.value) + Number(efe_md_950218.value) + Number(efe_md_950219.value) + Number(efe_md_950220.value) + Number(efe_md_950221.value)).toFixed(2)
  efe_md_9503.value = (Number(efe_md_950301.value) + Number(efe_md_950302.value) + Number(efe_md_950303.value) + Number(efe_md_950304.value) + Number(efe_md_950305.value) + Number(efe_md_950306.value) + Number(efe_md_950307.value) + Number(efe_md_950308.value) + Number(efe_md_950309.value) + Number(efe_md_950310.value)).toFixed(2)
  efe_md_9504.value = (Number(efe_md_950401.value)).toFixed(2)
  efe_md_9505.value = (Number(efe_md_95.value) + Number(efe_md_9504.value)).toFixed(2)
  efe_md_9507.value = (Number(efe_md_9505.value) + Number(efe_md_9506.value)).toFixed(2)
  efe_md_96.value = JSON.parse(sessionStorage.getItem('96')).toFixed(2)
  efe_md_97.value = (Number(efe_md_9701.value) + Number(efe_md_9702.value) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708.value) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711.value)).toFixed(2)
  efe_md_98.value = (Number(efe_md_9801.value) + Number(efe_md_9802.value) + Number(efe_md_9803.value) + Number(efe_md_9804.value) + Number(efe_md_9805.value) + Number(efe_md_9806.value) + Number(efe_md_9807.value) + Number(efe_md_9808.value) + Number(efe_md_9809.value) + Number(efe_md_9810.value)).toFixed(2)
  efe_md_9820.value = (Number(efe_md_96.value) + Number(efe_md_97.value) + Number(efe_md_98.value)).toFixed(2)
}

const handleActionClick_ant = async id => {
  efe_md_95_ant.value = (Number(efe_md_9501_ant.value) + Number(efe_md_9502_ant.value) + Number(efe_md_9503_ant.value)).toFixed(2)
  efe_md_9501_ant.value = (Number(efe_md_950101_ant.value) + Number(efe_md_950102_ant.value) + Number(efe_md_950103_ant.value) + Number(efe_md_950104_ant.value) + Number(efe_md_950105_ant.value) + Number(efe_md_950106_ant.value) + Number(efe_md_950107_ant.value) + Number(efe_md_950108_ant.value)).toFixed(2)
  efe_md_950101_ant.value = (Number(efe_md_95010101_ant.value) + Number(efe_md_95010102_ant.value) + Number(efe_md_95010103_ant.value) + Number(efe_md_95010104_ant.value) + Number(efe_md_95010105_ant.value)).toFixed(2)
  efe_md_950102_ant.value = (Number(efe_md_95010201_ant.value) + Number(efe_md_95010202_ant.value) + Number(efe_md_95010203_ant.value) + Number(efe_md_95010204_ant.value) + Number(efe_md_95010205_ant.value)).toFixed(2)
  efe_md_9502_ant.value = (Number(efe_md_950201_ant.value) + Number(efe_md_950202_ant.value) + Number(efe_md_950203_ant.value) + Number(efe_md_950204_ant.value) + Number(efe_md_950205_ant.value) + Number(efe_md_950206_ant.value) + Number(efe_md_950207_ant.value) + Number(efe_md_950208_ant.value) + Number(efe_md_950209_ant.value) + Number(efe_md_950210_ant.value) + Number(efe_md_950211_ant.value) + Number(efe_md_950212_ant.value) + Number(efe_md_950213_ant.value) + Number(efe_md_950214_ant.value) + Number(efe_md_950215_ant.value) + Number(efe_md_950216_ant.value) + Number(efe_md_950217_ant.value) + Number(efe_md_950218_ant.value) + Number(efe_md_950219_ant.value) + Number(efe_md_950220_ant.value) + Number(efe_md_950221_ant.value)).toFixed(2)
  efe_md_9503_ant.value = (Number(efe_md_950301_ant.value) + Number(efe_md_950302_ant.value) + Number(efe_md_950303_ant.value) + Number(efe_md_950304_ant.value) + Number(efe_md_950305_ant.value) + Number(efe_md_950306_ant.value) + Number(efe_md_950307_ant.value) + Number(efe_md_950308_ant.value) + Number(efe_md_950309_ant.value) + Number(efe_md_950310_ant.value)).toFixed(2)
  efe_md_9504_ant.value = (Number(efe_md_950401_ant.value)).toFixed(2)
  efe_md_9505_ant.value = (Number(efe_md_95_ant.value) + Number(efe_md_9504_ant.value)).toFixed(2)
  efe_md_9507_ant.value = (Number(efe_md_9505_ant.value) + Number(efe_md_9506_ant.value)).toFixed(2)
  efe_md_96_ant.value = JSON.parse(sessionStorage.getItem('96_ant')).toFixed(2)
  efe_md_97_ant.value = (Number(efe_md_9701_ant.value) + Number(efe_md_9702_ant.value) + Number(efe_md_9703_ant.value) + Number(efe_md_9704_ant.value) + Number(efe_md_9705_ant.value) + Number(efe_md_9706_ant.value) + Number(efe_md_9707_ant.value) + Number(efe_md_9708_ant.value) + Number(efe_md_9709_ant.value) + Number(efe_md_9710_ant.value) + Number(efe_md_9711_ant.value)).toFixed(2)
  efe_md_98_ant.value = (Number(efe_md_9801_ant.value) + Number(efe_md_9802_ant.value) + Number(efe_md_9803_ant.value) + Number(efe_md_9804_ant.value) + Number(efe_md_9805_ant.value) + Number(efe_md_9806_ant.value) + Number(efe_md_9807_ant.value) + Number(efe_md_9808_ant.value) + Number(efe_md_9809_ant.value) + Number(efe_md_9810_ant.value)).toFixed(2)
  efe_md_9820_ant.value = (Number(efe_md_96_ant.value) + Number(efe_md_97_ant.value) + Number(efe_md_98_ant.value)).toFixed(2)
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
        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>ESTADOS DE FLUJOS DE EFECTIVO POR EL MÉTODO DIRECTO</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <VCol
              cols="12"
              md="12"
              style="font-size:8px;"
            >
              <VRow class="font-weight-medium px-4 mb-2">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >CONCEPTO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >CUENTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >PERIODO ACTUAL</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.800rem"
                  >PERIODO ANTERIOR</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol
                  cols="12 bg-primary"
                  md="12"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">INCREMENTO NETO (DISMINUCIÓN) EN EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO, ANTES DEL EFECTO DE LOS CAMBIOS EN LA TASA DE CAMBIO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95"
                    label="(+) 95"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95_ant"
                    label="(+) 95"
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
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE OPERACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9501</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501"
                    v-model="efe_md_9501"
                    label="(+) 9501"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9501"
                    v-model="efe_md_9501_ant"
                    label="(+) 9501"
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
                  <span class="text-sm">Clases de cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950101"
                    v-model="efe_md_950101"
                    label="(+) 950101"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950101"
                    v-model="efe_md_950101_ant"
                    label="(+) 950101"
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
                  <span class="text-sm">Cobros procedentes de las ventas de bienes y prestación de servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010101</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010101"
                    v-model="efe_md_95010101"
                    label="(+) 95010101"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010101"
                    v-model="efe_md_95010101_ant"
                    label="(+) 95010101"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Cobros procedentes de regalías, cuotas, comisiones y otros ingresos de actividades ordinarias</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010102"
                    v-model="efe_md_95010102"
                    label="(+) 95010102"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010102"
                    v-model="efe_md_95010102_ant"
                    label="(+) 95010102"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Cobros procedentes de contratos mantenidos con propósitos de intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010103"
                    v-model="efe_md_95010103"
                    label="(+) 95010103"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010103"
                    v-model="efe_md_95010103_ant"
                    label="(+) 95010103"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Cobros procedentes de primas y prestaciones, anualidades y otros beneficios de pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010104"
                    v-model="efe_md_95010104"
                    label="(+) 95010104"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010104"
                    v-model="efe_md_95010104_ant"
                    label="(+) 95010104"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros cobros por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95010105"
                    label="(+) 95010105"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95"
                    v-model="efe_md_95010105_ant"
                    label="(+) 95010105"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Clases de pagos por actvidades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950102</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950102"
                    v-model="efe_md_950102"
                    label="(+) 950102"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950102"
                    v-model="efe_md_950102_ant"
                    label="(+) 950102"
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
                  <span class="text-sm">Pagos a proveedores por el suministro de bienes y servicios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010201"
                    v-model="efe_md_95010201"
                    label="(-) 95010201"
                    type="number"
                    @blur="convertirNegativo_95010201(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010201"
                    v-model="efe_md_95010201_ant"
                    label="(-) 95010201"
                    type="number"
                    @blur="convertirNegativo_95010201_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos procedentes de contratos mantenidos para intermediación o para negociar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010202"
                    v-model="efe_md_95010202"
                    label="(-) 95010202"
                    type="number"
                    @blur="convertirNegativo_95010202(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010202"
                    v-model="efe_md_95010202_ant"
                    label="(-) 95010202"
                    type="number"
                    @blur="convertirNegativo_95010202_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos a y por cuenta de los empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010203</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010203"
                    v-model="efe_md_95010203"
                    label="(-) 95010203"
                    type="number"
                    @blur="convertirNegativo_95010203(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010203"
                    v-model="efe_md_95010203_ant"
                    label="(-) 95010203"
                    type="number"
                    @blur="convertirNegativo_95010203_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos por primas y prestaciones, anualidades y otras obligaciones derivadas de las pólizas suscritas</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010204</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010204"
                    v-model="efe_md_95010204"
                    label="(-) 95010204"
                    type="number"
                    @blur="convertirNegativo_95010204(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010204"
                    v-model="efe_md_95010204_ant"
                    label="(-) 95010204"
                    type="number"
                    @blur="convertirNegativo_95010204_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros pagos por actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">95010205</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010205"
                    v-model="efe_md_95010205"
                    label="(-) 95010205"
                    type="number"
                    @blur="convertirNegativo_95010205(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_95010205"
                    v-model="efe_md_95010205_ant"
                    label="(-) 95010205"
                    type="number"
                    @blur="convertirNegativo_95010205_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Dividendos pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950103</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950103"
                    v-model="efe_md_950103"
                    label="(-) 950103"
                    type="number"
                    @blur="convertirNegativo_950103(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950103"
                    v-model="efe_md_950103_ant"
                    label="(-) 950103"
                    type="number"
                    @blur="convertirNegativo_950103_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950104</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950104"
                    v-model="efe_md_950104"
                    label="(+) 950104"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950104"
                    v-model="efe_md_950104_ant"
                    label="(+) 950104"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Intereses pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950105</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950105"
                    v-model="efe_md_950105"
                    label="(-) 950105"
                    type="number"
                    @blur="convertirNegativo_950105(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950105"
                    v-model="efe_md_950105_ant"
                    label="(-) 950105"
                    type="number"
                    @blur="convertirNegativo_950105_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950106</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950106"
                    v-model="efe_md_950106"
                    label="(+) 950106"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950106"
                    v-model="efe_md_950106_ant"
                    label="(+) 950106"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Impuestos a las ganancias pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950107</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950107"
                    v-model="efe_md_950107"
                    label="(-) 950107"
                    type="number"
                    @blur="convertirNegativo_950107(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950107"
                    v-model="efe_md_950107_ant"
                    label="(-) 950107"
                    type="number"
                    @blur="convertirNegativo_950107_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950108</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950108"
                    v-model="efe_md_950108"
                    label="(+) 950108"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950108"
                    v-model="efe_md_950108_ant"
                    label="(+) 950108"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol
                  cols="12 bg-primary"
                  md="12"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE INVERSIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9502</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9502"
                    v-model="efe_md_9502"
                    label="(+) 9502"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9502"
                    v-model="efe_md_9502_ant"
                    label="(+) 9502"
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
                  <span class="text-sm">Efectivo procedentes de la venta de acciones en subsidiarias u otros negocios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950201</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950201"
                    v-model="efe_md_950201"
                    label="(+) 950201"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950201"
                    v-model="efe_md_950201_ant"
                    label="(+) 950201"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Efectivo utilizado para adquirir acciones en subsidiarias u otros negocios para tener el control</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950202</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950202"
                    v-model="efe_md_950202"
                    label="(-) 950202"
                    type="number"
                    @blur="convertirNegativo_950202(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950202"
                    v-model="efe_md_950202_ant"
                    label="(-) 950202"
                    type="number"
                    @blur="convertirNegativo_950202_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Efectivo utilizado en la compra de participaciones no controladoras</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950203</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950203"
                    v-model="efe_md_950203"
                    label="(-) 950203"
                    type="number"
                    @blur="convertirNegativo_950203(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950203"
                    v-model="efe_md_950203_ant"
                    label="(-) 950203"
                    type="number"
                    @blur="convertirNegativo_950203_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros cobros por la venta de acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950204</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950204"
                    v-model="efe_md_950204"
                    label="(+) 950204"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950204"
                    v-model="efe_md_950204_ant"
                    label="(+) 950204"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros pagos para adquirir acciones o instrumentos de deuda de otras entidades</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950205</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950205"
                    v-model="efe_md_950205"
                    label="(-) 950205"
                    type="number"
                    @blur="convertirNegativo_950205(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950205"
                    v-model="efe_md_950205_ant"
                    label="(-) 950205"
                    type="number"
                    @blur="convertirNegativo_950205_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros cobros por la venta de participaciones en negocios conjuntos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950206</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950206"
                    v-model="efe_md_950206"
                    label="(+) 950206"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950206"
                    v-model="efe_md_950206_ant"
                    label="(+) 950206"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros pagos para adquirir participaciones en negocios conjuntos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950207</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950207"
                    v-model="efe_md_950207"
                    label="(-) 950207"
                    type="number"
                    @blur="convertirNegativo_950207(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950207"
                    v-model="efe_md_950207_ant"
                    label="(-) 950207"
                    type="number"
                    @blur="convertirNegativo_950207_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Importes procedentes por la venta de propiedades, planta y equipo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950208</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950208"
                    v-model="efe_md_950208"
                    label="(+) 950208"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950208"
                    v-model="efe_md_950208_ant"
                    label="(+) 950208"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Adquisiciones de propiedades, planta y equipo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950209</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950209"
                    v-model="efe_md_950209"
                    label="(-) 950209"
                    type="number"
                    @blur="convertirNegativo_950209(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950209"
                    v-model="efe_md_950209_ant"
                    label="(-) 950209"
                    type="number"
                    @blur="convertirNegativo_950209_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Importes procedentes de ventas de activos intangibles</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950210</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950210"
                    v-model="efe_md_950210"
                    label="(+) 950210"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950210"
                    v-model="efe_md_950210_ant"
                    label="(+) 950210"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Compras de activos intangibles</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950211</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950211"
                    v-model="efe_md_950211"
                    label="(-) 950211"
                    type="number"
                    @blur="convertirNegativo_950211(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950211"
                    v-model="efe_md_950211_ant"
                    label="(-) 950211"
                    type="number"
                    @blur="convertirNegativo_950211_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Importes procedentes de otros activos a largo plazo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950212</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950212"
                    v-model="efe_md_950212"
                    label="(+) 950212"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950212"
                    v-model="efe_md_950212_ant"
                    label="(+) 950212"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Compras de otros activos a largo plazo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950213</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950213"
                    v-model="efe_md_950213"
                    label="(-) 950213"
                    type="number"
                    @blur="convertirNegativo_950213(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950213"
                    v-model="efe_md_950213_ant"
                    label="(-) 950213"
                    type="number"
                    @blur="convertirNegativo_950213_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950214</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950214"
                    v-model="efe_md_950214"
                    label="(+) 950214"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950214"
                    v-model="efe_md_950214_ant"
                    label="(+) 950214"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Anticipos de efectivo efectuados a terceros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950215</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950215"
                    v-model="efe_md_950215"
                    label="(-) 950215"
                    type="number"
                    @blur="convertirNegativo_950215(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950215"
                    v-model="efe_md_950215_ant"
                    label="(-) 950215"
                    type="number"
                    @blur="convertirNegativo_950215_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Cobros procedentes del reembolso de anticipos y préstamos concedidos a terceros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950216</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950216"
                    v-model="efe_md_950216"
                    label="(+) 950216"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950216"
                    v-model="efe_md_950216_ant"
                    label="(+) 950216"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos derivados de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950217</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950217"
                    v-model="efe_md_950217"
                    label="(-) 950217"
                    type="number"
                    @blur="convertirNegativo_950217(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950217"
                    v-model="efe_md_950217_ant"
                    label="(-) 950217"
                    type="number"
                    @blur="convertirNegativo_950217_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Cobros procedentes de contratos de futuro, a término, de opciones y de permuta financiera</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950218</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950218"
                    v-model="efe_md_950218"
                    label="(+) 950218"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950218"
                    v-model="efe_md_950218_ant"
                    label="(+) 950218"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Dividendos recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950219</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950219"
                    v-model="efe_md_950219"
                    label="(+) 950219"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950219"
                    v-model="efe_md_950219_ant"
                    label="(+) 950219"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950220</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950220"
                    v-model="efe_md_950220"
                    label="(+) 950220"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950220"
                    v-model="efe_md_950220_ant"
                    label="(+) 950220"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10 mb-2">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950221</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950221"
                    v-model="efe_md_950221"
                    label="(+) 950221"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950221"
                    v-model="efe_md_950221_ant"
                    label="(+) 950221"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mb-2 mt-2">
                <VCol
                  cols="12 bg-primary"
                  md="12"
                >
                  <span
                    class="text-sm"
                    style="font-size:0.900rem"
                  >ACTIVIDADES DE FINANCIAMIENTO</span>
                </VCol>
              </VRow>

              <VDivider />

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">FLUJOS DE EFECTIVO PROCEDENTES DE (UTILIZADOS EN) ACTIVIDADES DE FINANCIACIÓN</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9503</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9503"
                    v-model="efe_md_9503"
                    label="(+) 9503"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9503"
                    v-model="efe_md_9503_ant"
                    label="(+) 9503"
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
                  <span class="text-sm">Aporte en efectivo por aumento de capital</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950301</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950301"
                    v-model="efe_md_950301"
                    label="(+) 950301"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950301"
                    v-model="efe_md_950301_ant"
                    label="(+) 950301"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Financiamiento por emisión de títulos valores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950302</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950302"
                    v-model="efe_md_950302"
                    label="(+) 950302"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950302"
                    v-model="efe_md_950302_ant"
                    label="(+) 950302"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos por adquirir o rescatar las acciones de la entidad</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950303</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950303"
                    v-model="efe_md_950303"
                    label="(-) 950303"
                    type="number"
                    @blur="convertirNegativo_950303(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950303"
                    v-model="efe_md_950303_ant"
                    label="(-) 950303"
                    type="number"
                    @blur="convertirNegativo_950303_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Financiación por préstamos a largo plazo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950304</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950304"
                    v-model="efe_md_950304"
                    label="(+) 950304"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950304"
                    v-model="efe_md_950304_ant"
                    label="(+) 950304"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos de préstamos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950305</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950305"
                    v-model="efe_md_950305"
                    label="(-) 950305"
                    type="number"
                    @blur="convertirNegativo_950305(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950305"
                    v-model="efe_md_950305_ant"
                    label="(-) 950305"
                    type="number"
                    @blur="convertirNegativo_950305_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pagos de pasivos por arrendamientos financieros</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950306</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950306"
                    v-model="efe_md_950306"
                    label="(-) 950306"
                    type="number"
                    @blur="convertirNegativo_950306(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950306"
                    v-model="efe_md_950306_ant"
                    label="(-) 950306"
                    type="number"
                    @blur="convertirNegativo_950306(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Importes procedentes de subvenciones del gobierno</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950307</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950307"
                    v-model="efe_md_950307"
                    label="(+) 950307"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950307"
                    v-model="efe_md_950307_ant"
                    label="(+) 950307"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Dividendos pagados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950308</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950308"
                    v-model="efe_md_950308"
                    label="(-) 950308"
                    type="number"
                    @blur="convertirNegativo_950308(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950308"
                    v-model="efe_md_950308_ant"
                    label="(-) 950308"
                    type="number"
                    @blur="convertirNegativo_950308_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Intereses recibidos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950309</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950309"
                    v-model="efe_md_950309"
                    label="(+) 950309"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950309"
                    v-model="efe_md_950309_ant"
                    label="(+) 950309"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otras entradas (salidas) de efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950310</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950310"
                    v-model="efe_md_950310"
                    label="(+) 950310"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950310"
                    v-model="efe_md_950310_ant"
                    label="(+) 950310"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">EFECTOS DE LA VARIACION EN LA TASA DE CAMBIO SOBRE EL EFECTIVO Y EQUIVALENTES AL DE EFECTIVO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9504</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9504"
                    v-model="efe_md_9504"
                    label="(+) 9504"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9504"
                    v-model="efe_md_9504_ant"
                    label="(+) 9504"
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
                  <span class="text-sm">Efectos de la variación en la tasa de cambio sobre el efectivo y equivalentes al efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">950401</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950401"
                    v-model="efe_md_950401"
                    label="(+) 950401"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_950401"
                    v-model="efe_md_950401_ant"
                    label="(+) 950401"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">INCREMENTO (DISMINUCIÓN) NETO DE EFECTIVO Y EQUIVALENTES AL EFECTIVO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9505</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9505"
                    v-model="efe_md_9505"
                    label="(+) 9505"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9505"
                    v-model="efe_md_9505_ant"
                    label="(+) 9505"
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
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL PRINCIPIO DEL PERIODO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9506</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9506"
                    v-model="efe_md_9506"
                    label="(+) 9506"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9506"
                    v-model="efe_md_9506_ant"
                    label="(+) 9506"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">EFECTIVO Y EQUIVALENTES AL EFECTIVO AL FINAL DEL PERIODO</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9507</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9507"
                    v-model="efe_md_9507"
                    label="(+) 9507"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9507"
                    v-model="efe_md_9507_ant"
                    label="(+) 9507"
                    type="number"
                    disabled
                  />
                </VCol>
              </VRow>
            </VCol>
          </VRow>
        </div>


        <VRow
          style="width:100%;"
          class="mb-5"
        >
          <VCol
            cols="12"
            md="12"
          >
            <VCardTitle>CONCILIACION ENTRE LA GANANCIA (PERDIDA) NETA Y LOS FLUJOS DE OPERACIÓN</VCardTitle>
          </VCol>
        </VRow>
        <!-- eslint-disable vue/no-mutating-props -->
        <div class="add-products-header mb-2 d-none d-md-flex">
          <VRow>
            <VCol
              cols="12"
              md="12"
              style="font-size:8px;"
            >
              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">GANANCIA (PÉRDIDA) ANTES DE 15% A TRABAJADORES E IMPUESTO A LA RENTA</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">96</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_96"
                    v-model="efe_md_96"
                    label="(+) 96"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_96"
                    v-model="efe_md_96_ant"
                    label="(+) 96"
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
                  <span class="text-sm">AJUSTE POR PARTIDAS DISTINTAS AL EFECTIVO:</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">97</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_97"
                    v-model="efe_md_97"
                    label="(+) 97"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_97"
                    v-model="efe_md_97_ant"
                    label="(+) 97"
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
                  <span class="text-sm">Ajustes por gasto de depreciación y amortización</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9701</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9701"
                    v-model="efe_md_9701"
                    label="(+) 9701"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9701"
                    v-model="efe_md_9701_ant"
                    label="(+) 9701"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajustes por gastos por deterioro (reversiones por deterioro) reconocidas en los resultados del periodo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9702</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9702"
                    v-model="efe_md_9702"
                    label="(+) 9702"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9702"
                    v-model="efe_md_9702_ant"
                    label="(+) 9702"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pérdida (ganancia) de moneda extranjera no realizada</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9703</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9703"
                    v-model="efe_md_9703"
                    label="(+) 9703"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9703"
                    v-model="efe_md_9703_ant"
                    label="(+) 9703"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Pérdidas en cambio de moneda extranjera</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9704</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9704"
                    v-model="efe_md_9704"
                    label="(-) 9704"
                    type="number"
                    @blur="convertirNegativo_9704(this); handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9704"
                    v-model="efe_md_9704_ant"
                    label="(-) 9704"
                    type="number"
                    @blur="convertirNegativo_9704_ant(this); handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajustes por gastos en provisiones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9705</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9705"
                    v-model="efe_md_9705"
                    label="(+) 9705"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9705"
                    v-model="efe_md_9705_ant"
                    label="(+) 9705"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajuste por participaciones no controladoras</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9706</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9706"
                    v-model="efe_md_9706"
                    label="(+) 9706"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9706"
                    v-model="efe_md_9706_ant"
                    label="(+) 9706"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajuste por pagos basados en acciones</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9707</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9707"
                    v-model="efe_md_9707"
                    label="(+) 9707"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9707"
                    v-model="efe_md_9707_ant"
                    label="(+) 9707"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajustes por ganancias (pérdidas) en valor razonable</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9708</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9708"
                    v-model="efe_md_9708"
                    label="(+) 9708"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9708"
                    v-model="efe_md_9708_ant"
                    label="(+) 9708"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajustes por gasto por impuesto a la renta</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9709</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9709"
                    v-model="efe_md_9709"
                    label="(+) 9709"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9709"
                    v-model="efe_md_9709_ant"
                    label="(+) 9709"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Ajustes por gasto por participación trabajadores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9710</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9710"
                    v-model="efe_md_9710"
                    label="(+) 9710"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9710"
                    v-model="efe_md_9710_ant"
                    label="(+) 9710"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Otros ajustes por partidas distintas al efectivo</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9711</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9711"
                    v-model="efe_md_9711"
                    label="(+) 9711"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9711"
                    v-model="efe_md_9711_ant"
                    label="(+) 9711"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">CAMBIOS EN ACTIVOS Y PASIVOS:</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">98</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_98"
                    v-model="efe_md_98"
                    label="(+) 98"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_98"
                    v-model="efe_md_98_ant"
                    label="(+) 98"
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
                  <span class="text-sm">(Incremento) disminución en cuentas por cobrar clientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9801</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9801"
                    v-model="efe_md_9801"
                    label="(+) 9801"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9801"
                    v-model="efe_md_9801_ant"
                    label="(+) 9801"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">(Incremento) disminución en otras cuentas por cobrar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9802</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9802"
                    v-model="efe_md_9802"
                    label="(+) 9802"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9802"
                    v-model="efe_md_9802_ant"
                    label="(+) 9802"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">(Incremento) disminución en anticipos de proveedores</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9803</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9803"
                    v-model="efe_md_9803"
                    label="(+) 9803"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9803"
                    v-model="efe_md_9803_ant"
                    label="(+) 9803"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">(Incremento) disminución en inventarios</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9804</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9804"
                    v-model="efe_md_9804"
                    label="(+) 9804"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9804"
                    v-model="efe_md_9804_ant"
                    label="(+) 9804"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">(Incremento) disminución en otros activos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9805</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9805"
                    v-model="efe_md_9805"
                    label="(+) 9805"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9805"
                    v-model="efe_md_9805_ant"
                    label="(+) 9805"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Incremento  (disminución) en cuentas por pagar comerciales</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9806</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9806"
                    v-model="efe_md_9806"
                    label="(+) 9806"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9806"
                    v-model="efe_md_9806_ant"
                    label="(+) 9806"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Incremento  (disminución) en otras cuentas por pagar</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9807</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9807"
                    v-model="efe_md_9807"
                    label="(+) 9807"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9807"
                    v-model="efe_md_9807_ant"
                    label="(+) 9807"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Incremento  (disminución) en beneficios empleados</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9808</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9808"
                    v-model="efe_md_9808"
                    label="(+) 9808"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9808"
                    v-model="efe_md_9808_ant"
                    label="(+) 9808"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Incremento  (disminución) en anticipos de clientes</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9809</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9809"
                    v-model="efe_md_9809"
                    label="(+) 9809"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9809"
                    v-model="efe_md_9809_ant"
                    label="(+) 9809"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Incremento  (disminución) en otros pasivos</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9810</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9810"
                    v-model="efe_md_9810"
                    label="(+) 9810"
                    type="number"
                    @blur="handleActionClick(this)"
                    @input="handleActionClick(this)"
                    @keyup="handleActionClick(this)"
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9810_ant"
                    v-model="efe_md_9810_ant"
                    label="(+) 9810"
                    type="number"
                    @blur="handleActionClick_ant(this)"
                    @input="handleActionClick_ant(this)"
                    @keyup="handleActionClick_ant(this)"
                  />
                </VCol>
              </VRow>

              <VRow class="font-weight-medium px-4 mt-10">
                <VCol
                  cols="12"
                  md="6"
                >
                  <span class="text-sm">Flujos de efectivo netos procedentes de (utilizados en) actividades de operación</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <span class="text-sm">9820</span>
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9820"
                    v-model="efe_md_9820"
                    label="(+) 9820"
                    type="number"
                    disabled
                  />
                </VCol>
                <VCol
                  cols="12"
                  md="2"
                >
                  <VTextField
                    id="efe_md_9820"
                    v-model="efe_md_9820_ant"
                    label="(+) 9820"
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
  </VForm>
</template>
