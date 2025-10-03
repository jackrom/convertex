import { useReportStore } from "@/@store/reportStore"

export const asignacionValoresESF = (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo)

  console.log('codigo: ', codigo)
  console.log('valor: ', valor)

  const prefix = 'esf_'
  const startIndex = codigo.indexOf(prefix) + prefix.length
  const modulo = codigo.substring(startIndex, startIndex + 3)

  console.log("modulo: ", modulo)

  switch (modulo) {
  case "101":
    reportStore.updateReportData("activoscorrientesifluc", codigo, valor)
    break
  case "102":
    reportStore.updateReportData("activosnocorrientesifluc", codigo, valor)
    break
  case "201":
    reportStore.updateReportData("pasivoscorrientesifluc", codigo, valor)
    break
  case "202":
    reportStore.updateReportData("pasivosnocorrientesifluc", codigo, valor)
    break
  default:
    console.log(`Unknown code ${modulo}: No specific action defined for this code: ${codigo}`)
  }

  const modulo_patrimonio = codigo.substring(startIndex, startIndex + 2)
  if(modulo_patrimonio === "30") {
    reportStore.updateReportData("patrimonioifluc", codigo, valor)
  }
}

export const asignacionValoresESF_ant = (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo);

  const prefix = 'esf_'
  const startIndex = codigo.indexOf(prefix) + prefix.length
  const modulo = codigo.substring(startIndex, startIndex + 3)

  switch (modulo) {
  case "101":
    reportStore.updateReportDataAnt("activoscorrientesifluc_ant", codigo, valor)
    break
  case "102":
    reportStore.updateReportDataAnt("activosnocorrientesifluc_ant", codigo, valor)
    break
  case "201":
    reportStore.updateReportDataAnt("pasivoscorrientesifluc_ant", codigo, valor)
    break
  case "202":
    reportStore.updateReportDataAnt("pasivosnocorrientesifluc_ant", codigo, valor)
    break
  default:
    console.log("Unknown code: No specific action defined for this code")
  }

  const modulo_patrimonio = codigo.substring(startIndex, startIndex + 2)

  if(modulo_patrimonio === "30") {
    reportStore.updateReportDataAnt("patrimonioifluc_ant", codigo, valor)
  } else {
    console.log("Unknown code: No specific action defined for this code")
  }
}

export const asignacionValoresERI =  (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo)

  console.log('codigo: ', codigo)
  console.log('valor: ', valor)

  const prefix = 'eri_'
  const startIndex = codigo.indexOf(prefix) + prefix.length
  const modulo = codigo.substring(startIndex, startIndex + 3)

  console.log("modulo: ", modulo)

  switch (modulo) {
  case "401":
    reportStore.updateReportData("ingresosifluc", codigo, valor)
    break
  case "501":
    reportStore.updateReportData("costosifluc", codigo, valor)
    break
  case "403":
    reportStore.updateReportData("otrosingresosifluc", codigo, valor)
    break
  case "600":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "601":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "602":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "603":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "604":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "605":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "606":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "607":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "700":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "701":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "702":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "703":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "704":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "705":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "706":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "707":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "800":
    reportStore.updateReportData("otrosresultadosintegralifluc", codigo, valor)
    break
  case "801":
    reportStore.updateReportData("resultadosparticipacioncontroladoraifluc", codigo, valor)
    break
  default:
    console.log(`Unknown code ${modulo}: No specific action defined for this code: ${codigo}`)
  }

  const modulogastos = codigo.substring(startIndex, startIndex + 5)
  if(modulogastos == 50201) {
    reportStore.updateReportData("gastosdeventasifluc", codigo, valor)
  }
  if(modulogastos == 50202) {
    reportStore.updateReportData("gastosadministrativosifluc", codigo, valor)
  }
  if(modulogastos == 50203) {
    reportStore.updateReportData("gastosfinancierosifluc", codigo, valor)
  }
  if(modulogastos == 50204) {
    reportStore.updateReportData("otrosgastosifluc", codigo, valor)
  }
}

export const asignacionValoresERI_ant =  (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo)

  const prefix = 'eri_'
  const startIndex = codigo.indexOf(prefix) + prefix.length
  const modulo = codigo.substring(startIndex, startIndex + 3)

  switch (modulo) {
  case "401":
    reportStore.updateReportDataAnt("ingresosifluc_ant", codigo, valor)
    break
  case "501":
    reportStore.updateReportDataAnt("costosifluc_ant", codigo, valor)
    break
  case "403":
    reportStore.updateReportDataAnt("otrosingresosifluc_ant", codigo, valor)
    break
  case "600":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "601":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "602":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "603":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "604":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "605":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "606":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "607":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "700":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "701":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "702":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "703":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "704":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "705":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "706":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "707":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "800":
    reportStore.updateReportDataAnt("otrosresultadosintegralifluc_ant", codigo, valor)
    break
  case "801":
    reportStore.updateReportDataAnt("resultadosparticipacioncontroladoraifluc_ant", codigo, valor)
    break
  default:
    console.log("Unknown code: No specific action defined for this code: " + codigo)
  }

  const modulogastos = codigo.substring(startIndex, startIndex + 5)

  if(modulogastos == 50201) {
    reportStore.updateReportDataAnt("gastosdeventasifluc_ant", codigo, valor)
  }
  if(modulogastos == 50202) {
    reportStore.updateReportDataAnt("gastosadministrativosifluc_ant", codigo, valor)
  }
  if(modulogastos == 50203) {
    reportStore.updateReportDataAnt("gastosfinancierosifluc_ant", codigo, valor)
  }
  if(modulogastos == 50204) {
    reportStore.updateReportDataAnt("otrosgastosifluc_ant", codigo, valor)
  }
}

export const asignacionValores = (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo)

  console.log("Código recibido: ", codigo)
  console.log("Valor recibido: ", valor)

  let startIndex = -1

  if (codigo.startsWith("esf_")) {
    startIndex = codigo.indexOf("esf_") + 4 // Longitud de "esf_" es 4
  } else if (codigo.startsWith("eri_")) {
    startIndex = codigo.indexOf("eri_") + 4 // Longitud de "eri_" es 4
  }

  if (startIndex === -1) {
    console.warn(`Código desconocido: ${codigo}`)

    return
  }

  let modulo = codigo.substring(startIndex, startIndex + 3)
  console.log("Módulo extraído: ", modulo)

  // Manejo especial del módulo 502 con 5 dígitos
  if (modulo === "502") {
    let modulogastos = codigo.substring(startIndex, startIndex + 5)
    console.log("Código específico de gastos: ", modulogastos)

    switch (modulogastos) {
    case "50201":
      reportStore.updateReportData("gastosdeventasifluc", codigo, valor)
      break
    case "50202":
      reportStore.updateReportData("gastosadministrativosifluc", codigo, valor)
      break
    case "50203":
      reportStore.updateReportData("gastosfinancierosifluc", codigo, valor)
      break
    case "50204":
      reportStore.updateReportData("otrosgastosifluc", codigo, valor)
      break
    default:
      console.log(`Código de gastos no reconocido: ${modulogastos} en ${codigo}`)
    }

    return; // Evita que pase al switch general
  }

  switch (modulo) {
  case "101":
    reportStore.updateReportData("activoscorrientesifluc", codigo, valor)
    break
  case "102":
    reportStore.updateReportData("activosnocorrientesifluc", codigo, valor)
    break
  case "201":
    reportStore.updateReportData("pasivoscorrientesifluc", codigo, valor)
    break
  case "202":
    reportStore.updateReportData("pasivosnocorrientesifluc", codigo, valor)
    break
  case "401":
    reportStore.updateReportData("ingresosifluc", codigo, valor)
    break
  case "501":
    reportStore.updateReportData("costosifluc", codigo, valor)
    break
  case "403":
    reportStore.updateReportData("otrosingresosifluc", codigo, valor)
    break
  case "600":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "601":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "602":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "603":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "604":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "605":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "606":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "607":
    reportStore.updateReportData("resultadosifluc", codigo, valor)
    break
  case "700":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "701":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "702":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "703":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "704":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "705":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "706":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "707":
    reportStore.updateReportData("operacionesdiscontinuadasifluc", codigo, valor)
    break
  case "800":
    reportStore.updateReportData("otrosresultadosintegralifluc", codigo, valor)
    break
  case "801":
    reportStore.updateReportData("resultadosparticipacioncontroladoraifluc", codigo, valor)
    break
  default:
    console.log(`Unknown code ${modulo}: No specific action defined for this code: ${codigo}`)
  }

  const modulo_patrimonio = codigo.substring(startIndex, startIndex + 2)
  if(modulo_patrimonio === "30") {
    reportStore.updateReportData("patrimonioifluc", codigo, valor)
  }
}

export const asignacionValoresAnt = (codigo, valor) => {
  const reportStore = useReportStore()

  codigo = String(codigo)

  console.log("Código recibido: ", codigo)
  console.log("Valor recibido: ", valor)

  let startIndex = -1

  if (codigo.startsWith("esf_")) {
    startIndex = codigo.indexOf("esf_") + 4 // Longitud de "esf_" es 4
  } else if (codigo.startsWith("eri_")) {
    startIndex = codigo.indexOf("eri_") + 4 // Longitud de "eri_" es 4
  }

  if (startIndex === -1) {
    console.warn(`Código desconocido: ${codigo}`)

    return
  }

  let modulo = codigo.substring(startIndex, startIndex + 3)
  console.log("Módulo extraído: ", modulo)

  // Manejo especial del módulo 502 con 5 dígitos
  if (modulo === "502") {
    let modulogastos = codigo.substring(startIndex, startIndex + 5)
    console.log("Código específico de gastos: ", modulogastos)

    switch (modulogastos) {
    case "50201":
      reportStore.updateReportDataAnt("gastosdeventasifluc_ant", codigo, valor)
      break
    case "50202":
      reportStore.updateReportDataAnt("gastosadministrativosifluc_ant", codigo, valor)
      break
    case "50203":
      reportStore.updateReportDataAnt("gastosfinancierosifluc_ant", codigo, valor)
      break
    case "50204":
      reportStore.updateReportDataAnt("otrosgastosifluc_ant", codigo, valor)
      break
    default:
      console.log(`Código de gastos no reconocido: ${modulogastos} en ${codigo}`)
    }

    return; // Evita que pase al switch general
  }

  switch (modulo) {
  case "101":
    reportStore.updateReportDataAnt("activoscorrientesifluc_ant", codigo, valor)
    break
  case "102":
    reportStore.updateReportDataAnt("activosnocorrientesifluc_ant", codigo, valor)
    break
  case "201":
    reportStore.updateReportDataAnt("pasivoscorrientesifluc_ant", codigo, valor)
    break
  case "202":
    reportStore.updateReportDataAnt("pasivosnocorrientesifluc_ant", codigo, valor)
    break
  case "401":
    reportStore.updateReportDataAnt("ingresosifluc_ant", codigo, valor)
    break
  case "501":
    reportStore.updateReportDataAnt("costosifluc_ant", codigo, valor)
    break
  case "403":
    reportStore.updateReportDataAnt("otrosingresosifluc_ant", codigo, valor)
    break
  case "600":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "601":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "602":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "603":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "604":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "605":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "606":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "607":
    reportStore.updateReportDataAnt("resultadosifluc_ant", codigo, valor)
    break
  case "700":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "701":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasiflu_antc", codigo, valor)
    break
  case "702":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "703":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "704":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "705":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "706":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "707":
    reportStore.updateReportDataAnt("operacionesdiscontinuadasifluc_ant", codigo, valor)
    break
  case "800":
    reportStore.updateReportDataAnt("otrosresultadosintegralifluc_ant", codigo, valor)
    break
  case "801":
    reportStore.updateReportDataAnt("resultadosparticipacioncontroladoraifluc_ant", codigo, valor)
    break
  default:
    console.log(`Unknown code ${modulo}: No specific action defined for this code: ${codigo}`)
  }

  const modulo_patrimonio = codigo.substring(startIndex, startIndex + 2)
  if(modulo_patrimonio === "30") {
    reportStore.updateReportDataAnt("patrimonioifluc_ant", codigo, valor)
  }
}

