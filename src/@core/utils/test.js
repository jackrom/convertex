const efe_md_9501010101 = computed(() => {
  return (localStorage.getItem('eri_40101'))
    ? Number(localStorage.getItem('eri_40101')).toFixed(2)
    : Number(JSON.parse(localStorage.getItem('ingresos')).eri_40101).toFixed(2)
})

const efe_md_9501010102 = computed(() => {
  return (localStorage.getItem('eri_40102'))
    ? localStorage.getItem('eri_40102')
    : JSON.parse(localStorage.getItem('ingresos')).eri_40102
})

const efe_md_9501010103 = computed(() => {
  return (localStorage.getItem('eri_40103'))
    ? localStorage.getItem('eri_40103')
    : JSON.parse(localStorage.getItem('ingresos')).eri_40103
})

const efe_md_9501010104 = computed(() => {
  return (localStorage.getItem('eri_40112'))
    ? (Number(localStorage.getItem('eri_40112'))).toFixed(2)
    : JSON.parse(localStorage.getItem('ingresos')).eri_40112
})

const efe_md_9501010105 = computed(() => {
  return (localStorage.getItem('eri_40113'))
    ? (Number(localStorage.getItem('eri_40113'))).toFixed(2)
    : JSON.parse(localStorage.getItem('ingresos')).eri_40113
})

const efe_md_9501010106 = computed(() => {
  return (localStorage.getItem('eri_40114'))
    ? (Number(localStorage.getItem('eri_40114'))).toFixed(2)
    : JSON.parse(localStorage.getItem('ingresos')).eri_40114
})

const efe_md_9501010107 = computed(() => {
  return (localStorage.getItem('eri_40115'))
    ? (Number(localStorage.getItem('eri_40115'))).toFixed(2)
    : JSON.parse(localStorage.getItem('ingresos')).eri_40115
})

const efe_md_9501010108 = computed(() => {
  return (localStorage.getItem('eri_40116'))
    ? (Number(localStorage.getItem('eri_40116'))).toFixed(2)
    : JSON.parse(localStorage.getItem('ingresos')).eri_40116
})

// console.log('efe_md_9501010108.value', efe_md_9501010108.value)

const efe_md_9501010109 = computed(() => {
  return (localStorage.getItem('esf_1010205') && localStorage.getItem('esf_1010205_ant'))
    ? ((Number(localStorage.getItem('esf_1010205')) - Number(localStorage.getItem('esf_1010205_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010205) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010205_ant))  * -1).toFixed(2)
})

const efe_md_9501010110 = computed(() => {
  return (localStorage.getItem('esf_1010204') && localStorage.getItem('esf_1010204_ant'))
    ? ((Number(localStorage.getItem('esf_1010204')) - Number(localStorage.getItem('esf_1010204_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010204) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010204_ant))  * -1).toFixed(2)
})

const efe_md_9501010111 = computed(() => {
  return (localStorage.getItem('esf_1010207') && localStorage.getItem('esf_1010207_ant'))
    ? ((Number(localStorage.getItem('esf_1010207')) - Number(localStorage.getItem('esf_1010207_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010207) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010207_ant))  * -1).toFixed(2)
})

const efe_md_9501010112 = computed(() => {
  return (localStorage.getItem('provisionesanio'))
    ? (Number(localStorage.getItem('provisionesanio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).provisionesanio)).toFixed(2)
})

// console.log('efe_md_9501010112.value', efe_md_9501010112.value)

const efe_md_9501010113 = computed(() => {
  return (localStorage.getItem('bajasoreversiones'))
    ? (Number(localStorage.getItem('bajasoreversiones'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).bajasoreversiones)).toFixed(2)
})

const efe_md_9501010114 = computed(() => {
  return (localStorage.getItem('ajustes'))
    ? (Number(localStorage.getItem('ajustes'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).ajustes)).toFixed(2)
})

const efe_md_9501010115 = computed(() => {
  return (localStorage.getItem('esf_1010201') && localStorage.getItem('esf_1010201_ant'))
    ? ((Number(localStorage.getItem('esf_1010201')) - Number(localStorage.getItem('esf_1010201_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010201) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010201_ant))  * -1).toFixed(2)
})

const efe_md_9501010116 = computed(() => {
  return (localStorage.getItem('esf_1010202') && localStorage.getItem('esf_1010202_ant'))
    ? ((Number(localStorage.getItem('esf_1010202')) - Number(localStorage.getItem('esf_1010202_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010202) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010202_ant))  * -1).toFixed(2)
})

const efe_md_9501010117 = computed(() => {
  return (localStorage.getItem('esf_1010203') && localStorage.getItem('esf_1010203_ant'))
    ? ((Number(localStorage.getItem('esf_1010203')) - Number(localStorage.getItem('esf_1010203_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010203) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010203_ant))  * -1).toFixed(2)
})

const efe_md_9501010118 = computed(() => {
  return (localStorage.getItem('esf_10105') && localStorage.getItem('esf_10105_ant'))
    ? ((Number(localStorage.getItem('esf_10105')) - Number(localStorage.getItem('esf_10105_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10105) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10105_ant))  * -1).toFixed(2)
})

const efe_md_9501010119 = computed(() => {
  return (localStorage.getItem('esf_10106') && localStorage.getItem('esf_10106_ant'))
    ? ((Number(localStorage.getItem('esf_10106')) - Number(localStorage.getItem('esf_10106_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10106) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10106_ant))  * -1).toFixed(2)
})

const efe_md_9501010120 = computed(() => {
  return (localStorage.getItem('esf_10107') && localStorage.getItem('esf_10107_ant'))
    ? ((Number(localStorage.getItem('esf_10107')) - Number(localStorage.getItem('esf_10107_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10107) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10107_ant))  * -1).toFixed(2)
})

const efe_md_9501010121 = computed(() => {
  return (localStorage.getItem('esf_10108') && localStorage.getItem('esf_10108_ant'))
    ? ((Number(localStorage.getItem('esf_10108')) - Number(localStorage.getItem('esf_10108_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10108) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10108_ant))  * -1).toFixed(2)
})

efe_md_95010101.value = (Number(efe_md_9501010101.value) + Number(efe_md_9501010102.value) + Number(efe_md_9501010103.value) + Number(efe_md_9501010104.value) + Number(efe_md_9501010105.value) + Number(efe_md_9501010106.value) + Number(efe_md_9501010107.value) + Number(efe_md_9501010108.value) + Number(efe_md_9501010109.value) + Number(efe_md_9501010110.value) + Number(efe_md_9501010111.value) + Number(efe_md_9501010112.value) + Number(efe_md_9501010113.value) + Number(efe_md_9501010114.value) + Number(efe_md_9501010115.value) + Number(efe_md_9501010116.value) + Number(efe_md_9501010117.value) + Number(efe_md_9501010118.value) + Number(efe_md_9501010119.value) + Number(efe_md_9501010120.value) + Number(efe_md_9501010121.value)).toFixed(2)

// console.log('efe_md_95010101', efe_md_95010101.value)

const efe_md_9501010201 = computed(() => {
  return (localStorage.getItem('eri_40104'))
    ? (Number(localStorage.getItem('eri_40104'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40104)).toFixed(2)
})

const efe_md_9501010202 = computed(() => {
  return (localStorage.getItem('eri_40105'))
    ? (Number(localStorage.getItem('eri_40105'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40105)).toFixed(2)
})

const efe_md_9501010203 = computed(() => {
  return (localStorage.getItem('eri_40106'))
    ? (Number(localStorage.getItem('eri_40106'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40106)).toFixed(2)
})

const efe_md_9501010204 = computed(() => {
  return (localStorage.getItem('eri_40108'))
    ? (Number(localStorage.getItem('eri_40108'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40108)).toFixed(2)
})

const efe_md_9501010205 = computed(() => {
  return (localStorage.getItem('eri_40109'))
    ? (Number(localStorage.getItem('eri_40109'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40109)).toFixed(2)
})

const efe_md_9501010206 = computed(() => {
  return (localStorage.getItem('eri_40110'))
    ? (Number(localStorage.getItem('eri_40110'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40110)).toFixed(2)
})

const efe_md_9501010207 = computed(() => {
  return (localStorage.getItem('esf_1010206') && localStorage.getItem('esf_1010206_ant'))
    ? ((Number(localStorage.getItem('esf_1010206')) - Number(localStorage.getItem('esf_1010206_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_1010206) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_1010206_ant))  * -1).toFixed(2)
})

efe_md_95010102.value = (Number(efe_md_9501010201.value) + Number(efe_md_9501010202.value) + Number(efe_md_9501010203.value) + Number(efe_md_9501010204.value) + Number(efe_md_9501010205.value) + Number(efe_md_9501010206.value) + Number(efe_md_9501010207.value)).toFixed(2)

// console.log('efe_md_95010102', efe_md_95010102.value)

const efe_md_95010103 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010103
})

// console.log('efe_md_95010103', efe_md_95010103.value)

const efe_md_95010104 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010104
})

// console.log('efe_md_95010104', efe_md_95010104.value)

const efe_md_95010105 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010105
})

// console.log('efe_md_95010105', efe_md_95010105.value)

efe_md_950101.value = (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)

// console.log('efe_md_950101', efe_md_950101.value)

const efe_md_9501020101 = computed(() => {
  return (localStorage.getItem('eri_501'))
    ? (Number(localStorage.getItem('eri_501')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('costos')).eri_501)).toFixed(2)
})

const efe_md_9501020102 = computed(() => {
  return (localStorage.getItem('esf_10103') && localStorage.getItem('esf_10103_ant'))
    ? ((Number(localStorage.getItem('esf_10103')) - Number(localStorage.getItem('esf_10103_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10103) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10103_ant))  * -1).toFixed(2)
})

const efe_md_9501020103 = computed(() => {
  return (localStorage.getItem('provisionesdelanio'))
    ? (Number(localStorage.getItem('provisionesdelanio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).provisionesdelanio)).toFixed(2)
})

const efe_md_9501020104 = computed(() => {
  return (localStorage.getItem('bajas'))
    ? (Number(localStorage.getItem('bajas'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).bajasoreversiones)).toFixed(2)
})

const efe_md_9501020105 = computed(() => {
  return (localStorage.getItem('ajustes_pavnr'))
    ? (Number(localStorage.getItem('ajustes_pavnr'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).ajustes)).toFixed(2)
})

const efe_md_9501020106 = computed(() => {
  return (localStorage.getItem('eri_50201'))
    ? (Number(localStorage.getItem('eri_50201')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('gastosdeventas')).eri_50201) * -1).toFixed(2)
})

const efe_md_9501020107 = computed(() => {
  return (localStorage.getItem('eri_50202'))
    ? (Number(localStorage.getItem('eri_50202')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('gastosadministrativos')).eri_50202) * -1).toFixed(2)
})

const efe_md_9501020108 = computed(() => {
  return (localStorage.getItem('esf_10104') && localStorage.getItem('esf_10104_ant'))
    ? ((Number(localStorage.getItem('esf_10104')) - Number(localStorage.getItem('esf_10104_ant'))) * -1).toFixed(2)
    : ((Number(JSON.parse(localStorage.getItem('activoscorrientes')).esf_10104) - Number(JSON.parse(localStorage.getItem('activoscorrientes_ant')).esf_10104_ant))  * -1).toFixed(2)
})

const efe_md_9501020109 = computed(() => {
  return (localStorage.getItem('esf_20103') && localStorage.getItem('esf_20103_ant'))
    ? (Number(localStorage.getItem('esf_20103')) - Number(localStorage.getItem('esf_20103_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20103) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20103_ant)).toFixed(2)
})

const efe_md_9501020110 = computed(() => {
  return (localStorage.getItem('esf_201120202') && localStorage.getItem('esf_201120202_ant'))
    ? (Number(localStorage.getItem('esf_201120202')) - Number(localStorage.getItem('esf_201120202_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_201120202) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_201120202_ant)).toFixed(2)
})

const efe_md_9501020111 = computed(() => {
  return (localStorage.getItem('esf_20101') && localStorage.getItem('esf_20101_ant'))
    ? (Number(localStorage.getItem('esf_20101')) - Number(localStorage.getItem('esf_20101_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20101) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20101_ant)).toFixed(2)
})

const efe_md_9501020112 = computed(() => {
  return (localStorage.getItem('esf_20102') && localStorage.getItem('esf_20102_ant'))
    ? (Number(localStorage.getItem('esf_20102')) - Number(localStorage.getItem('esf_20102_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20102) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20102_ant)).toFixed(2)
})

const efe_md_9501020113 = computed(() => {
  return (localStorage.getItem('esf_20104') && localStorage.getItem('esf_20104_ant'))
    ? (Number(localStorage.getItem('esf_20104')) - Number(localStorage.getItem('esf_20104_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20104) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20104_ant)).toFixed(2)
})

const efe_md_9501020114 = computed(() => {
  return (localStorage.getItem('esf_20105') && localStorage.getItem('esf_20105_ant'))
    ? (Number(localStorage.getItem('esf_20105')) - Number(localStorage.getItem('esf_20105_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20105) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20105_ant)).toFixed(2)
})

const efe_md_9501020115 = computed(() => {
  return (localStorage.getItem('esf_20106') && localStorage.getItem('esf_20106_ant'))
    ? (Number(localStorage.getItem('esf_20106')) - Number(localStorage.getItem('esf_20106_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20106) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20106_ant)).toFixed(2)
})

const efe_md_9501020116 = computed(() => {
  return (localStorage.getItem('esf_20107') && localStorage.getItem('esf_20107_ant'))
    ? (Number(localStorage.getItem('esf_20107')) - Number(localStorage.getItem('esf_20107_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20107) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20107_ant)).toFixed(2)
})

const efe_md_9501020117 = computed(() => {
  return (localStorage.getItem('mov_pt_provisiondelanio'))
    ? (Number(localStorage.getItem('mov_pt_provisiondelanio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('otros')).mov_pt_provisiondelanio).toFixed(2))
})

const efe_md_9501020118 =  computed(() => {
  return (localStorage.getItem('mov_islr_provisiondelanio'))
    ? (Number(localStorage.getItem('mov_islr_provisiondelanio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('otros')).mov_islr_provisiondelanio).toFixed(2))
})

const efe_md_9501020119 = computed(() => {
  return (localStorage.getItem('esf_20108') && localStorage.getItem('esf_20108_ant'))
    ? (Number(localStorage.getItem('esf_20108')) - Number(localStorage.getItem('esf_20108_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20108) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20108_ant)).toFixed(2)
})

const efe_md_9501020120 = computed(() => {
  return (localStorage.getItem('esf_20109') && localStorage.getItem('esf_20109_ant'))
    ? (Number(localStorage.getItem('esf_20109')) - Number(localStorage.getItem('esf_20109_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20109) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20109_ant)).toFixed(2)
})

const efe_md_9501020121 = computed(() => {
  return (localStorage.getItem('esf_20110') && localStorage.getItem('esf_20110_ant'))
    ? (Number(localStorage.getItem('esf_20110')) - Number(localStorage.getItem('esf_20110_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20110) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20110_ant)).toFixed(2)
})

const efe_md_9501020122 = computed(() => {
  return (localStorage.getItem('esf_20111') && localStorage.getItem('esf_20111_ant'))
    ? (Number(localStorage.getItem('esf_20111')) - Number(localStorage.getItem('esf_20111_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20111) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20111_ant)).toFixed(2)
})

const efe_md_9501020123 = computed(() => {
  return (localStorage.getItem('esf_20113') && localStorage.getItem('esf_20113_ant'))
    ? (Number(localStorage.getItem('esf_20113')) - Number(localStorage.getItem('esf_20113_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20113) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20113_ant)).toFixed(2)
})

const efe_md_9501020124 = computed(() => {
  return (localStorage.getItem('esf_20114') && localStorage.getItem('esf_20114_ant'))
    ? (Number(localStorage.getItem('esf_20114')) - Number(localStorage.getItem('esf_20114_ant'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('pasivoscorrientes')).esf_20114) - Number(JSON.parse(localStorage.getItem('pasivoscorrientes_ant')).esf_20114_ant)).toFixed(2)
})

const efe_md_9501020125 = computed(() => {
  return (localStorage.getItem('mov_islr_pagos'))
    ? (Number(localStorage.getItem('mov_islr_pagos')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('otros')).mov_islr_pagos) * -1).toFixed(2)
})

const efe_md_9501020126 = computed(() => {
  return (localStorage.getItem('mov_pt_pagos'))
    ? (Number(localStorage.getItem('mov_pt_pagos')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('otros')).mov_pt_pagos) * -1).toFixed(2)
})

const efe_md_9501020127 = computed(() => {
  return (localStorage.getItem('mov_total_gdd'))
    ? (Number(localStorage.getItem('mov_total_gdd')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesplantasyequipos')).mov_total_gdd) * -1).toFixed(2)
})

const efe_md_9501020128 = computed(() => {
  return (localStorage.getItem('mov_gastosdedepreciacion_edificios'))
    ? (Number(localStorage.getItem('mov_gastosdedepreciacion_edificios')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_gastosdedepreciacion_edificios) * -1).toFixed(2)
})

const efe_md_9501020129 = computed(() => {
  return (Number(localStorage.getItem('mov_gastordeamortizacion')) * -1).toFixed(2)
})

const efe_md_9501020130 = computed(() => {
  return (localStorage.getItem('provisionesanio'))
    ? (Number(localStorage.getItem('provisionesanio')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).provisionesanio) * -1).toFixed(2)
})

const efe_md_9501020131 = computed(() => {
  return (localStorage.getItem('bajasoreversiones'))
    ? (Number(localStorage.getItem('bajasoreversiones')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).bajasoreversiones) * -1).toFixed(2)
})

const efe_md_9501020132 = computed(() => {
  return (localStorage.getItem('ajustes'))
    ? (Number(localStorage.getItem('ajustes')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladascuentasincobrablesydeterioro')).ajustes) * -1).toFixed(2)
})

const efe_md_9501020133 = computed(() => {
  return (localStorage.getItem('provisionesdelanio'))
    ? (Number(localStorage.getItem('provisionesdelanio')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).provisionesdelanio) * -1).toFixed(2)
})

const efe_md_9501020134 = computed(() => {
  return (localStorage.getItem('bajas'))
    ? (Number(localStorage.getItem('bajas')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).bajasoreversiones) * -1).toFixed(2)
})

const efe_md_9501020135 = computed(() => {
  return (localStorage.getItem('ajustes_pavnr'))
    ? (Number(localStorage.getItem('ajustes_pavnr')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movperdidasacumuladasvalornetorealizacion')).ajustes) * -1).toFixed(2)
})

const efe_md_9501020136 = computed(() => {
  return (localStorage.getItem('mov_provisionpordeterioro'))
    ? (Number(localStorage.getItem('mov_provisionpordeterioro')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('activosfinancieroslargoplazo')).mov_provisionpordeterioro) * -1).toFixed(2)
})

const efe_md_9501020137 = computed(() => {
  return (localStorage.getItem('mov_valorrazonable_terrenos'))
    ? (Number(localStorage.getItem('mov_valorrazonable_terrenos')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_valorrazonable_terrenos) * -1).toFixed(2)
})

const efe_md_9501020138 = computed(() => {
  return (localStorage.getItem('mov_valorrazonable_edificios'))
    ? (Number(localStorage.getItem('mov_valorrazonable_edificios')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_valorrazonable_edificios) * -1).toFixed(2)
})

const efe_md_9501020139 = computed(() => {
  return (localStorage.getItem('mov_total_bilddb'))
    ? (Number(localStorage.getItem('mov_total_bilddb')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesplantasyequipos')).mov_total_bilddb) * -1).toFixed(2)
})

const efe_md_9501020140 = computed(() => {
  return (localStorage.getItem('mov_total_sida'))
    ? (Number(localStorage.getItem('mov_total_sida')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesplantasyequipos')).mov_total_sida) * -1).toFixed(2)
})

const efe_md_9501020141 = computed(() => {
  return (localStorage.getItem('mov_bajasincluidadepreciaciondada_terrenos'))
    ? (Number(localStorage.getItem('mov_bajasincluidadepreciaciondada_terrenos')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_bajasincluida_terrenos) * -1).toFixed(2)
})

const efe_md_9501020142 = computed(() => {
  return (localStorage.getItem('mov_bajasincluidadepreciaciondada_edificios'))
    ? (Number(localStorage.getItem('mov_bajasincluidadepreciaciondada_edificios')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_bajasincluida_edificios) * -1).toFixed(2)
})

const efe_md_9501020143 = computed(() => {
  return (localStorage.getItem('mov_otros_terrenos'))
    ? (Number(localStorage.getItem('mov_otros_terrenos')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_otros_terrenos) * -1).toFixed(2)
})

const efe_md_9501020144 = computed(() => {
  return (localStorage.getItem('mov_otros_edificios'))
    ? (Number(localStorage.getItem('mov_otros_edificios')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movpropiedadesdeinversion')).mov_otros_edificios) * -1).toFixed(2)
})

const efe_md_9501020145 = computed(() => {
  return (localStorage.getItem('mov_bajasincluida'))
    ? (Number(localStorage.getItem('mov_bajasincluida')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movintangibles')).mov_bajasincluida) * -1).toFixed(2)
})

const efe_md_9501020146 = computed(() => {
  return (localStorage.getItem('mov_otros'))
    ? (Number(localStorage.getItem('mov_otros')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movintangibles')).mov_otros) * -1).toFixed(2)
})

const efe_md_9501020147 = computed(() => {
  return (localStorage.getItem('mov_bajasoventas_total'))
    ? (Number(localStorage.getItem('mov_bajasoventas_total')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movactivosbiologicos')).mov_bajasoventas_total) * -1).toFixed(2)
})

const efe_md_9501020148 = computed(() => {
  return (localStorage.getItem('mov_incrementodisminuciondevalor_total'))
    ? (Number(localStorage.getItem('mov_incrementodisminuciondevalor_total')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movactivosbiologicos')).mov_incrementodisminuciondevalor_total) * -1).toFixed(2)
})

const efe_md_9501020149 = computed(() => {
  return (localStorage.getItem('mov_costosporservicios'))
    ? (Number(localStorage.getItem('mov_costosporservicios'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_costosporservicios)).toFixed(2)
})

const efe_md_9501020150 = computed(() => {
  return (localStorage.getItem('mov_costofinanciero'))
    ? (Number(localStorage.getItem('mov_costofinanciero'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_costofinanciero)).toFixed(2)
})

const efe_md_9501020151 = computed(() => {
  return (localStorage.getItem('mov_otros_jp'))
    ? (Number(localStorage.getItem('mov_otros_jp'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movjubilacionpatronal')).mov_otros)).toFixed(2)
})

const efe_md_9501020152 = computed(() => {
  return (localStorage.getItem('mov_efectodeliquidaciones'))
    ? (Number(localStorage.getItem('mov_efectodeliquidaciones'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('movjubilacionpatronal')).mov_efectodeliquidaciones)).toFixed(2)
})

const efe_md_9501020153 = computed(() => {
  return (localStorage.getItem('mov_costosporservicios_desahucio'))
    ? (Number(localStorage.getItem('mov_costosporservicios_desahucio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_costosporservicios)).toFixed(2)
})

const efe_md_9501020154 = computed(() => {
  return (localStorage.getItem('mov_costofinanciero_desahucio'))
    ? (Number(localStorage.getItem('mov_costofinanciero_desahucio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_costofinanciero)).toFixed(2)
})

const efe_md_9501020155 = computed(() => {
  return (localStorage.getItem('mov_otros_desahucio'))
    ? Number(localStorage.getItem('mov_otros_desahucio')).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_otros)).toFixed(2)
})

const efe_md_9501020156 = computed(() => {
  return (localStorage.getItem('mov_efectodeliquidaciones_desahucio'))
    ? (Number(localStorage.getItem('mov_efectodeliquidaciones_desahucio'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('deshaucio')).mov_efectodeliquidaciones)).toFixed(2)
})

efe_md_95010201.value = (Number(efe_md_9501020101.value) + Number(efe_md_9501020102.value) + Number(efe_md_9501020103.value) + Number(efe_md_9501020104.value) + Number(efe_md_9501020105.value) + Number(efe_md_9501020106.value) + Number(efe_md_9501020107.value) + Number(efe_md_9501020108.value) + Number(efe_md_9501020109.value) + Number(efe_md_9501020110.value) + Number(efe_md_9501020111.value) + Number(efe_md_9501020112.value) + Number(efe_md_9501020113.value) + Number(efe_md_9501020114.value) + Number(efe_md_9501020115.value) + Number(efe_md_9501020116.value) + Number(efe_md_9501020117.value) + Number(efe_md_9501020118.value) + Number(efe_md_9501020119.value) + Number(efe_md_9501020120.value) + Number(efe_md_9501020121.value) + Number(efe_md_9501020122.value) + Number(efe_md_9501020123.value) + Number(efe_md_9501020124.value) + Number(efe_md_9501020125.value) + Number(efe_md_9501020126.value) + Number(efe_md_9501020127.value) + Number(efe_md_9501020128.value) + Number(efe_md_9501020129.value) + Number(efe_md_9501020130.value) + Number(efe_md_9501020131.value) + Number(efe_md_9501020132.value) + Number(efe_md_9501020133.value) + Number(efe_md_9501020134.value) + Number(efe_md_9501020135.value) + Number(efe_md_9501020136.value) + Number(efe_md_9501020137.value) + Number(efe_md_9501020138.value) + Number(efe_md_9501020139.value) + Number(efe_md_9501020140.value) + Number(efe_md_9501020141.value) + Number(efe_md_9501020142.value) + Number(efe_md_9501020143.value) + Number(efe_md_9501020144.value) + Number(efe_md_9501020145.value) + Number(efe_md_9501020146.value) + Number(efe_md_9501020147.value) + Number(efe_md_9501020148.value) + Number(efe_md_9501020149.value) + Number(efe_md_9501020150.value) + Number(efe_md_9501020151.value) + Number(efe_md_9501020152.value) + Number(efe_md_9501020153.value) + Number(efe_md_9501020154.value) + Number(efe_md_9501020155.value) + Number(efe_md_9501020156.value)).toFixed(2)

// console.log('efe_md_95010201', efe_md_95010201.value)

const efe_md_95010202 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010202
})

const efe_md_95010203 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010203
})

const efe_md_95010204 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010204
})

const efe_md_95010205 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_95010205
})

efe_md_950102.value = (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)

// console.log('efe_md_950102', efe_md_950102.value)

const efe_md_950103 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_950103
})

// console.log('efe_md_950103', efe_md_950103.value)

const efe_md_950104 = computed(() => {
  return (localStorage.getItem('eri_40107'))
    ? (Number(localStorage.getItem('eri_40107'))).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('ingresos')).eri_40107)).toFixed(2)
})

// console.log('efe_md_950104', efe_md_950104.value)

const efe_md_95010501 = computed(() => {
  return (localStorage.getItem('eri_50203'))
    ? (Number(localStorage.getItem('eri_50203')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('gastosfinancieros')).eri_50203) * -1).toFixed(2)
})

const efe_md_95010502 = computed(() => {
  return (localStorage.getItem('mov_interesactualizacionantiguasinv'))
    ? (Number(localStorage.getItem('mov_interesactualizacionantiguasinv')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('activosfinancieroslargoplazo')).mov_interesactualizacionantiguasinv) * -1).toFixed(2)
})

const efe_md_95010503 = computed(() => {
  return (localStorage.getItem('mov_ajustes_aflp'))
    ? (Number(localStorage.getItem('mov_ajustes_aflp')) * -1).toFixed(2)
    : (Number(JSON.parse(localStorage.getItem('activosfinancieroslargoplazo')).mov_ajustes) * -1).toFixed(2)
})

efe_md_950105.value = (Number(efe_md_95010501.value) + Number(efe_md_95010502.value) + Number(efe_md_95010503.value)).toFixed(2)

// console.log('efe_md_950105', efe_md_950105.value)

const efe_md_950106 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_950106
})

const efe_md_950107 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_950107
})

const efe_md_950108 = computed(() => {
  return JSON.parse(localStorage.getItem('actividadesdeoperacion')).efe_md_950108
})

// console.log('efe_md_950108', efe_md_950108.value)
