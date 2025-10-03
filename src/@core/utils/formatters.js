import { isToday } from './index'
import {
  calcular_95,
  calcular_9501,
  calcular_950101,
  calcular_95010101,
  calcular_95010102,
  calcular_950102,
  calcular_95010201,
  calcular_95010203,
  calcular_950104,
  calcular_950105,
  calcular_950107,
  calcular_950108,
  calcular_9502,
  calcular_950205, calcular_950209, calcular_950211, calcular_950213,
  calcular_950221,
  calcular_9503,
  calcular_950301,
  calcular_950310,
  calcular_9504,
  calcular_9505,
  calcular_9506,
  calcular_9507,
  calcular_9701,
  calcular_9702,
  calcular_9708,
  calcular_9709,
  calcular_9710,
  calcular_9711, calcular_9711_Solo_Txt,
  calcular_97_Solo_TXT,
  calcular_98,
  calcular_9801,
  calcular_9804,
  calcular_9805,
  calcular_9806,
  calcular_9808,
  calcular_9810,
  calcular_9820,
  calcular_eri_401,
  calcular_eri_40102,
  calcular_eri_40106,
  calcular_eri_40109,
  calcular_eri_4010901,
  calcular_eri_4010902,
  calcular_eri_4010903,
  calcular_eri_40110,
  calcular_eri_403,
  calcular_eri_501,
  calcular_eri_50102,
  calcular_eri_50103,
  calcular_eri_50104,
  calcular_eri_50105,
  calcular_eri_502,
  calcular_eri_50201,
  calcular_eri_50202,
  calcular_eri_50204,
  calcular_eri_600,
  calcular_eri_602,
  calcular_eri_604,
  calcular_eri_607,
  calcular_eri_702,
  calcular_eri_704,
  calcular_eri_706,
  calcular_eri_707,
  calcular_eri_800,
  calcular_eri_801,
  calcular_esf_101,
  calcular_esf_10101,
  calcular_esf_10102,
  calcular_esf_1010205,
  calcular_esf_101020501,
  calcular_esf_101020502,
  calcular_esf_10103,
  calcular_esf_10104,
  calcular_esf_10105,
} from "@core/utils/formulas"

import { useReportStore } from "@/@store/reportStore"
import { computed, ref } from "vue"

const user = JSON.parse(sessionStorage.getItem('userData'))

export const avatarText = value => {
  if (!value)
    return ''
  const nameArray = value.split(' ')

  return nameArray.map(word => word.charAt(0).toUpperCase()).join('')
}

// TODO: Try to implement this: https://twitter.com/fireship_dev/status/1565424801216311297
export const kFormatter = num => {
  const regex = /\B(?=(\d{3})+(?!\d))/g

  return Math.abs(num) > 9999 ? `${Math.sign(num) * +((Math.abs(num) / 1000).toFixed(1))}k` : Math.abs(num).toFixed(0).replace(regex, ',')
}

/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Intl.DateTimeFormatOptions} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value)
    return value

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }
  if (toTimeForCurrentDay && isToday(date))
    formatting = { hour: 'numeric', minute: 'numeric' }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

export const formatearEcp = (dataObject, ECP) => {

  const rows = [
    [
      "",
      "",
      "CAPITAL SOCIAL",
      "APORTES DE SOCIOS O ACCIONISTAS PARA FUTURA CAPITALIZACIÓN",
      "PRIMA EMISIÓN PRIMARIA DE ACCIONES",
      "RESERVA LEGAL",
      "RESERVAS FACULTATIVA Y ESTATUTARIA",
      "ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA",
      "PROPIEDADES, PLANTA Y EQUIPO",
      "ACTIVOS INTANGIBLES",
      "OTROS SUPERAVIT POR REVALUACION",
      "GANANCIAS ACUMULADAS",
      "(-) PÉRDIDAS ACUMULADAS",
      "RESULTADOS ACUMULADOS POR APLICACIÓN PRIMERA VEZ DE LAS NIIF",
      "RESERVA DE CAPITAL",
      "RESERVA POR DONACIONES",
      "RESERVA POR VALUACIÓN",
      "RESERVA POR REVALUACIÓN DE INVERSIONES",
      "GANANCIA NETA DEL PERIODO",
      "(-) PERDIDA NETA DEL PERIODO",
      "TOTAL PATRIMONIO NETO ATRIBUIBLE A LOS PROPIETARIOS CONTROLADORA",
      "PARTICIPACIONES NO CONTROLADORA",
      "TOTAL PATRIMONIO",
    ],
    ["", "CÓDIGO", "301", "302", "303", "30401", "30402", "30501", "30502", "30503", "30504", "30601", "30602", "30603", "30604", "30605", "30606", "30607", "30701", "30702", "30", "31", ""],
  ]

  const description = [
    "",
    "SALDO REEXPRESADO DEL PERIODO INMEDIATO ANTERIOR",
    "SALDO DEL PERIODO INMEDIATO ANTERIOR",
    "CAMBIOS EN POLITICAS CONTABLES",
    "CORRECCIÓN DE ERRORES",
    "CAMBIOS DEL AÑO EN EL PATRIMONIO",
    "AUMENTO (DISMINUCIÓN) DEL CAPITAL SOCIAL",
    "APORTES PARA FUTURAS CAPITALIZACIONES",
    "PRIMA POR EMISIÓN PRIMARIA DE ACCIONES",
    "DIVIDENDOS",
    "TRANSFERENCIA DE RESULTADOS A OTRAS CUENTAS PATRIMONIALES",
    "REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS FINANCIEROS DISPONIBLES PARA LA VENTA",
    "REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE PROPIEDADES, PLANTA Y EQUIPO",
    "REALIZACIÓN DE LA RESERVA POR VALUACIÓN DE ACTIVOS INTANGIBLES",
    "OTROS CAMBIOS (DETALLAR)",
    "TRANSFERENCIAS A CUENTA DE ACTIVOS Y PASIVOS",
    "OTROS CAMBIOS DETALLAR",
    "RESULTADO INTEGRAL TOTAL DEL AÑO (GANANCIA O PERDIDA DEL EJERCICIO)",
    "SALDO AL FINAL DEL PERIODO",
  ]

  const codes = [
    "",
    "9901",
    "990101",
    "990102",
    "990103",
    "9902",
    "990201",
    "990202",
    "990203",
    "990204",
    "990205",
    "990206",
    "990207",
    "990208",
    "990209",
    "99020901",
    "99020902",
    "990210",
    "99",
  ]

  codes.forEach((code, i) => {
    const row = [
      description[i],
      code,
      dataObject[`ecp_${code}_301`],
      dataObject[`ecp_${code}_302`],
      dataObject[`ecp_${code}_303`],
      dataObject[`ecp_${code}_30401`],
      dataObject[`ecp_${code}_30402`],
      dataObject[`ecp_${code}_30501`],
      dataObject[`ecp_${code}_30502`],
      dataObject[`ecp_${code}_30503`],
      dataObject[`ecp_${code}_30504`],
      dataObject[`ecp_${code}_30601`],
      dataObject[`ecp_${code}_30602`],
      dataObject[`ecp_${code}_30603`],
      dataObject[`ecp_${code}_30604`],
      dataObject[`ecp_${code}_30605`],
      dataObject[`ecp_${code}_30606`],
      dataObject[`ecp_${code}_30607`],
      dataObject[`ecp_${code}_30701`],
      dataObject[`ecp_${code}_30702`],
      dataObject[`ecp_${code}_30`],
      dataObject[`ecp_${code}_31`],
      dataObject[`ecp_${code}_Total`],
    ]

    rows.push(row)
  })

  return rows
}

function sumarTotales(esf) {
  let sumas = {}

  const esHijo = (codigoPadre, codigoHijo) => {
    return codigoHijo && codigoPadre && codigoHijo.startsWith(codigoPadre) && codigoPadre !== codigoHijo
  }

  esf.forEach(item => {
    const codigo = item.codigo
    const actual = parseFloat(item.actual) || 0

    if (!codigo) return

    const esHoja = esf.every(otro => {
      return !esHijo(codigo, otro.codigo)
    })

    if (esHoja) {
      sumas[codigo] = (sumas[codigo] || 0) + actual
    }
  })

  esf.forEach(item => {
    const codigo = item.codigo

    if (!codigo) return

    let subtotal = 0
    Object.keys(sumas).forEach(codigoHoja => {
      if (esHijo(codigo, codigoHoja) || codigo === codigoHoja) {
        subtotal += sumas[codigoHoja]
      }
    })

    sumas[codigo] = subtotal
  })

  return esf.map(item => ({
    codigo: item.codigo,
    nombre: item.nombre,
    actual: sumas[item.codigo]?.toFixed(2) || "0.00",
    anterior: item.anterior || "",
  }))
}

export const formatearEsf = (ecpOriginal, ESF) => {
  const nuevoFormato = []
  const totales = {}

  for (const key in ecpOriginal) {
    let nombreCuenta = 'No Identificada'

    const encontrado = ESF.find(item => key === 'esf_' + item.CODIGO)
    if (encontrado) {
      nombreCuenta = encontrado["NOMBRE DE LA CUENTA"]
    }
    if (!['id', 'reporteId', 'periodoId', 'empresaId', 'createdAt', 'updatedAt', 'userId'].includes(key)) {
      let valorActual = ecpOriginal[key]
      if (typeof valorActual !== 'number') {
        valorActual = parseFloat(valorActual)
      }

      if (!isNaN(valorActual) && valorActual != 0) {
        const codigo = key.split('_')[1]

        /*
        for (let i = 1; i <= codigo.length; i += 2) {
          const prefijo = codigo.substring(0, i)

          totales[prefijo] = (totales[prefijo] || 0) + valorActual
        }
         */
        nuevoFormato.push({
          codigo,
          nombre: nombreCuenta,
          actual: valorActual,
          anterior: '',
        })
      }
    }
  }

  for (const item of nuevoFormato) {
    const prefijo = item.codigo

    if (totales[prefijo] !== undefined) {
      item.actual = totales[prefijo].toFixed(2)
    }
  }

  nuevoFormato.sort((a, b) => a.codigo.localeCompare(b.codigo))

  return nuevoFormato
}

export const formatearEri = (ecpOriginal, ERI) => {
  const nuevoFormato = []
  const totales = {}

  for (const key in ecpOriginal) {
    let nombreCuenta = 'No Identificada'

    const encontrado = ERI.find(item => key === 'eri_' + item.CODIGO)
    if (encontrado) {
      nombreCuenta = encontrado["NOMBRE DE LA CUENTA"]
    }

    if (!['id', 'reporteId', 'periodoId', 'empresaId', 'createdAt', 'updatedAt', 'userId'].includes(key)) {
      let valorActual = ecpOriginal[key]

      if (typeof valorActual !== 'number') {
        valorActual = parseFloat(valorActual)
      }

      if (!isNaN(valorActual) && valorActual != 0) {
        const codigo = key.split('_')[1]
        /*
        for (let i = 1; i <= codigo.length; i += 2) {
          const prefijo = codigo.substring(0, i)

          totales[prefijo] = (totales[prefijo] || 0) + valorActual
        }
        */
        nuevoFormato.push({
          codigo,
          nombre: nombreCuenta,
          actual: valorActual,
          anterior: '',
        })
      }
    }
  }

  for (const item of nuevoFormato) {
    const prefijo = item.codigo
    if (totales[prefijo] !== undefined) {
      item.actual = totales[prefijo].toFixed(2)
    }
  }

  nuevoFormato.sort((a, b) => a.codigo.localeCompare(b.codigo))

  return nuevoFormato

}

export const formatearEfe = (ecpOriginal, EFE) => {
  const nuevoFormato = []
  const totales = {}

  for (const key in ecpOriginal) {
    let nombreCuenta = 'No Identificada'

    const encontrado = EFE.find(item => key === 'efe_md_' + item.CODIGO)
    if (encontrado) {
      nombreCuenta = encontrado["NOMBRE DE LA CUENTA"]
    }

    if (!['id', 'reporteId', 'periodoId', 'empresaId', 'createdAt', 'updatedAt', 'userId'].includes(key)) {
      let valorActual = ecpOriginal[key]

      if (typeof valorActual !== 'number') {
        valorActual = parseFloat(valorActual)
      }

      if (!isNaN(valorActual) && valorActual != 0) {
        const codigo = key.split('_')[2]
        /*
        for (let i = 1; i <= codigo.length; i += 2) {
          const prefijo = codigo.substring(0, i) // Genera prefijos dinámicamente (cada dos dígitos)

          totales[prefijo] = (totales[prefijo] || 0) + valorActual
        }
        */
        nuevoFormato.push({
          codigo,
          nombre: nombreCuenta,
          actual: valorActual,
        })
      }
    }
  }

  for (const item of nuevoFormato) {
    const prefijo = item.codigo
    if (totales[prefijo] !== undefined) {
      item.actual = totales[prefijo].toFixed(2)
    }
  }

  nuevoFormato.sort((a, b) => a.codigo.localeCompare(b.codigo))

  return nuevoFormato
}

export const formatearEri2 = (ecpOriginal, eri) => {
  if (eri)
    return actualizarArray(eri, ecpOriginal, 'eri')
}

export const formatearEfe2 = (ecpOriginal, efe) => {
  if (efe)
    return actualizarArray(efe, ecpOriginal, 'efe')
}

export const formatearEsf2 = (ecpOriginal, esf) => {
  if (esf)
    return actualizarArray(esf, ecpOriginal, 'esf')
}

const actualizarArray = (arrayObjetos, objetoBase, tipo) => {
  return arrayObjetos.map(objeto => {
    const codigo = objeto.codigo
    let claveAnt = ''
    if (tipo === 'esf')
      claveAnt = `esf_${codigo}_ant`
    if (tipo === 'eri')
      claveAnt = `eri_${codigo}_ant`
    if (tipo === 'efe')
      claveAnt = `efe_md_${codigo}_ant`

    if (objetoBase.hasOwnProperty(claveAnt)) {
      objeto.anterior = String(objetoBase[claveAnt])
    }

    return objeto
  })
}

export const obtenerValoresSinAnt = obj => {
  return Object.values(obj).filter(
    item => item.codigo && !item.codigo.includes('_ant'))
}

export const createDefaultObject = keys => {
  let obj = {}
  keys.forEach(key => obj[key] = 0.00)

  return obj
}

export const copiarPropiedadesDeArray = arrayObjetosFuente => {
  let objetoDestino = {}

  arrayObjetosFuente.forEach(objetoFuente => {
    for (let item in objetoFuente) {
      if (objetoFuente.hasOwnProperty(item)) {
        objetoDestino[item] = objetoFuente[item]
      }
    }
  })

  return objetoDestino
}

export const borrarDataDeOtrosPeriodos = () => {
  const reportStore = useReportStore()

  reportStore.clearReportData()

  localStorage.removeItem('empresadetail')
  localStorage.removeItem('reporteId')
  localStorage.removeItem('periododetail')

  localStorage.removeItem('eri_50201')
  localStorage.removeItem('eri_50201_ant')

  localStorage.removeItem('efe_95_ant')
  localStorage.removeItem('efe_9505_ant')
  localStorage.removeItem('efe_9506_ant')
  localStorage.removeItem('efe_9507_ant')
  localStorage.removeItem('efe_9504_ant')
  localStorage.removeItem('efe_95')
  localStorage.removeItem('efe_9505')
  localStorage.removeItem('efe_9506')
  localStorage.removeItem('efe_9507')
  localStorage.removeItem('efe_9504')

  localStorage.removeItem('efe_9501')
  localStorage.removeItem('efe_9501_ant')
  localStorage.removeItem('efe_md_9501')
  localStorage.removeItem('diferenciaporcuadrar_efe_af')

  localStorage.clear()
}

export const guardarArchivoDeTexto = (contenido, nombre) => {
  const a = document.createElement("a")
  const archivo = new Blob([contenido], { type: 'text/plain' })
  const url = URL.createObjectURL(archivo)

  a.href = url
  a.download = nombre
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(url)
  document.body.removeChild(a)
}

export const pasarObjetoEsf = (obj, codigosesf) => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")
  let textoesf = ''

  Object.keys(obj).forEach(key => {
    if (
      key === 'empresaId' ||
      key === 'id' ||
      key === 'periodoId' ||
      key === 'reporteId' ||
      key === 'userId' ||
      key === 'createdAt' ||
      key === 'updatedAt' ||
      key === 'esf_201120201' ||
      key === 'esf_201120202' ||
      key === 'esf_202070201' ||
      key === 'esf_202070202' ||
      key === 'esf_10' ||
      key === 'esf_20' ||
      key === 'esf_1'
    ) {
      // console.log(key)
      if (key === 'esf_10') {
        key = 'esf_1'
        obj[key] = (Number(reportStore.getSingleReportValue("activoscorrientesifluc", "esf_101")) + Number(reportStore.getSingleReportValue("activosnocorrientesifluc", "esf_102"))).toFixed(2)
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_20') {
        key = 'esf_2'
        obj[key] = (Number(reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201")) + Number(reportStore.getSingleReportValue("pasivosnocorrientesifluc", "esf_202"))).toFixed(2)
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_101') {
        obj[key] = calcular_esf_101()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10101') {
        obj[key] = calcular_esf_10101()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_1010101') {
        obj[key] = activoscorrientes.esf_1010101
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_1010103') {
        obj[key] = activoscorrientes.esf_1010103
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10102') {
        obj[key] = calcular_esf_10102()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_1010205') {
        obj[key] = calcular_esf_1010205()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_101020501') {
        obj[key] = calcular_esf_101020501()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10102050101') {
        obj[key] = activoscorrientes.esf_10102050101
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_101020502') {
        obj[key] = calcular_esf_101020502()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10102050221') {
        obj[key] = activoscorrientes.esf_10102050221
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10103') {
        obj[key] = calcular_esf_10103()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_1010306') {
        obj[key] = activoscorrientes.esf_1010306
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10104') {
        obj[key] = calcular_esf_10104()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_10105') {
        obj[key] = calcular_esf_10105()
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }

      if (key === 'esf_1010502') {
        obj[key] = activoscorrientes.esf_1010502
        if (codigosesf.findIndex(r => r == key) < 0) {
          codigosesf.push(key)
          textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }
    } else {
      if (codigosesf.findIndex(r => r == key) < 0) {
        codigosesf.push(key)
        textoesf += `${key.replace('esf_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
      }
    }
  })

  return [
    textoesf,
    codigosesf,
  ]
}

export const pasarObjetoEri = (nombre, obj, codigoseri) => {
  const reportStore = useReportStore()
  let textoeri = ''

  Object.keys(obj).forEach(key => {
    if (nombre === 'eri.ingresos' && key == 'eri_401') {
      console.log('eri_401')
      console.log('nombre: ', nombre)
      obj[key] = Number(reportStore.getSingleReportValue("ingresosifluc", "eri_401")).toFixed(2)
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    }
    if (
      key == 'eri_401' ||
      key == 'eri_5' ||
      key == 'empresaId' ||
      key == 'id' ||
      key == 'periodoId' ||
      key == 'reporteId' ||
      key == 'userId' ||
      key == 'createdAt' ||
      key == 'updatedAt' ||
      (nombre === 'eri.gastosdeventas' && key === 'eri_50201') ||
      (nombre === 'eri.gastosadministrativos' && key === 'eri_50202') ||
      (nombre === 'eri.gastosfinancieros' && key === 'eri_50203')
    ) {
      // console.log(key)
    } else if (key == 'eri_707') {
      obj[key] = calcular_eri_707()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (nombre === 'eri.otrosgastos' && key === 'eri_50201') {
      obj[key] = reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (nombre === 'eri.otrosgastos' && key === 'eri_50202') {
      obj[key] = reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key === 'eri_50203') {
      obj[key] = Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2)
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (nombre === 'eri.otrosgastos' && key === 'eri_50204') {
      obj[key] = calcular_eri_50204()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_502') {
      obj[key] = calcular_eri_502()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_50102') {
      obj[key] = calcular_eri_50102()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_50103') {
      obj[key] = calcular_eri_50103()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_50104') {
      obj[key] = calcular_eri_50104()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_50105') {
      obj[key] = calcular_eri_50105()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_800') {
      obj[key] = calcular_eri_800()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_801') {
      obj[key] = calcular_eri_801()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_702') {
      obj[key] = calcular_eri_702()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_704') {
      obj[key] = calcular_eri_704()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_706') {
      obj[key] = calcular_eri_706()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_600') {
      obj[key] = calcular_eri_600()
      console.log(calcular_eri_600())
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_602') {
      obj[key] = calcular_eri_602()
      console.log(calcular_eri_602())
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_604') {
      obj[key] = calcular_eri_604()
      console.log(calcular_eri_604())
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_607') {
      obj[key] = calcular_eri_607()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_401') {
      console.log('eri_401')
      obj[key] = Number(reportStore.getSingleReportValue("ingresosifluc", "eri_401")).toFixed(2)
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_402') {
      const eri_401 = calcular_eri_401()
      const eri_501 = calcular_eri_501()

      obj[key] = (Number(eri_401) - Number(eri_501)).toFixed(2)
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_40102') {
      obj[key] = calcular_eri_40102()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_40106') {
      obj[key] = calcular_eri_40106()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_40109') {
      obj[key] = calcular_eri_40109()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_4010901') {
      obj[key] = calcular_eri_4010901()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_4010902') {
      obj[key] = calcular_eri_4010902()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_4010903') {
      obj[key] = calcular_eri_4010903()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_40110') {
      obj[key] = calcular_eri_40110()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else if (key == 'eri_403') {
      obj[key] = calcular_eri_403()
      codigoseri.push(key)
      textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
    } else {
      if (codigoseri.findIndex(r => r == key) < 0) {
        // cambiar a positivos los codigod ERI 601 y 603 debido a un error del SRI
        if (key == 'eri_601' && obj[key] < 0 || key == 'eri_603' && obj[key] < 0) {
          codigoseri.push(key)
          textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key] * -1).toFixed(2) : Number(obj[key] * -1).toFixed(2)}\n`
        } else {
          // console.log('KEY ', key + ' | VALOR ' + obj[key])
          codigoseri.push(key)
          textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
        }
      }
    }
  })

  return [
    textoeri,
    codigoseri,
  ]
}

export const pasarObjetoEcp = (obj, codigosecp) => {
  let textoecp = ''

  Object.keys(obj).forEach(key => {
    if (
      key == 'empresaId' ||
      key == 'id' ||
      key == 'periodoId' ||
      key == 'reporteId' ||
      key == 'userId' ||
      key == 'createdAt' ||
      key == 'updatedAt' ||
      key == 'ecp_99020901_301' ||
      key == 'ecp_99020901_302' ||
      key == 'ecp_99020901_303' ||
      key == 'ecp_99020901_30401' ||
      key == 'ecp_99020901_30402' ||
      key == 'ecp_99020901_30501' ||
      key == 'ecp_99020901_30502' ||
      key == 'ecp_99020901_30503' ||
      key == 'ecp_99020901_30504' ||
      key == 'ecp_99020901_30601' ||
      key == 'ecp_99020901_30602' ||
      key == 'ecp_99020901_30603' ||
      key == 'ecp_99020901_30604' ||
      key == 'ecp_99020901_30605' ||
      key == 'ecp_99020901_30606' ||
      key == 'ecp_99020901_30607' ||
      key == 'ecp_99020901_30701' ||
      key == 'ecp_99020901_30702' ||
      key == 'ecp_99020902_301' ||
      key == 'ecp_99020902_302' ||
      key == 'ecp_99020902_303' ||
      key == 'ecp_99020902_30401' ||
      key == 'ecp_99020902_30402' ||
      key == 'ecp_99020902_30501' ||
      key == 'ecp_99020902_30502' ||
      key == 'ecp_99020902_30503' ||
      key == 'ecp_99020902_30504' ||
      key == 'ecp_99020902_30601' ||
      key == 'ecp_99020902_30602' ||
      key == 'ecp_99020902_30603' ||
      key == 'ecp_99020902_30604' ||
      key == 'ecp_99020902_30605' ||
      key == 'ecp_99020902_30606' ||
      key == 'ecp_99020902_30607' ||
      key == 'ecp_99020902_30701' ||
      key == 'ecp_99020902_30702' ||
      key == 'ecp_9901_Total' ||
      key == 'ecp_990101_Total' ||
      key == 'ecp_990102_Total' ||
      key == 'ecp_990103_Total' ||
      key == 'ecp_9902_Total' ||
      key == 'ecp_990201_Total' ||
      key == 'ecp_990202_Total' ||
      key == 'ecp_990203_Total' ||
      key == 'ecp_990204_Total' ||
      key == 'ecp_990205_Total' ||
      key == 'ecp_990206_Total' ||
      key == 'ecp_990207_Total' ||
      key == 'ecp_990208_Total' ||
      key == 'ecp_990209_Total' ||
      key == 'ecp_99020901_Total' ||
      key == 'ecp_99020902_Total' ||
      key == 'ecp_990210_Total' ||
      key == 'ecp_99_Total' ||
      key == 'ecp_99020901_30' ||
      key == 'ecp_99020901_31' ||
      key == 'ecp_99020902_30' ||
      key == 'ecp_99020902_31'
    ) {
      // console.log(key)
    } else {
      if (codigosecp.findIndex(r => r == key) < 0) {
        codigosecp.push(key)
        textoecp += `${key.replace('ecp_', '').replace('_', ' ')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
      }
    }
  })

  return [
    textoecp,
    codigosecp,
  ]
}

export const pasarObjetoEfe = (obj, codigosefe) => {
  const reportStore = useReportStore()
  let textoefe = ""

  const valoresEfe = {}

  const excludedKeys = [
    "empresaId",
    "id",
    "periodoId",
    "reporteId",
    "userId",
    "createdAt",
    "updatedAt",
    "efe_md_9501010101",
    "efe_md_9501010102",
    "efe_md_9501010103",
    "efe_md_9501010104",
    "efe_md_9501010105",
    "efe_md_9501010106",
    "efe_md_9501010107",
    "efe_md_9501010108",
    "efe_md_9501010109",
    "efe_md_9501010110",
    "efe_md_9501010111",
    "efe_md_9501010112",
    "efe_md_9501010113",
    "efe_md_9501010114",
    "efe_md_9501010115",
    "efe_md_9501010116",
    "efe_md_9501010117",
    "efe_md_9501010118",
    "efe_md_9501010119",
    "efe_md_9501010120",
    "efe_md_9501010121",
    "efe_md_9501010201",
    "efe_md_9501010202",
    "efe_md_9501010203",
    "efe_md_9501010204",
    "efe_md_9501010205",
    "efe_md_9501010206",
    "efe_md_9501010207",
    "efe_md_9501020101",
    "efe_md_9501020102",
    "efe_md_9501020103",
    "efe_md_9501020104",
    "efe_md_9501020105",
    "efe_md_9501020106",
    "efe_md_9501020107",
    "efe_md_9501020108",
    "efe_md_9501020109",
    "efe_md_9501020110",
    "efe_md_9501020111",
    "efe_md_9501020112",
    "efe_md_9501020113",
    "efe_md_9501020114",
    "efe_md_9501020115",
    "efe_md_9501020116",
    "efe_md_9501020117",
    "efe_md_9501020118",
    "efe_md_9501020119",
    "efe_md_9501020120",
    "efe_md_9501020121",
    "efe_md_9501020122",
    "efe_md_9501020123",
    "efe_md_9501020124",
    "efe_md_9501020125",
    "efe_md_9501020126",
    "efe_md_9501020127",
    "efe_md_9501020128",
    "efe_md_9501020129",
    "efe_md_9501020130",
    "efe_md_9501020131",
    "efe_md_9501020132",
    "efe_md_9501020133",
    "efe_md_9501020134",
    "efe_md_9501020135",
    "efe_md_9501020136",
    "efe_md_9501020137",
    "efe_md_9501020138",
    "efe_md_9501020139",
    "efe_md_9501020140",
    "efe_md_9501020141",
    "efe_md_9501020142",
    "efe_md_9501020143",
    "efe_md_9501020144",
    "efe_md_9501020145",
    "efe_md_9501020146",
    "efe_md_9501020147",
    "efe_md_9501020148",
    "efe_md_9501020149",
    "efe_md_9501020150",
    "efe_md_9501020151",
    "efe_md_9501020152",
    "efe_md_9501020153",
    "efe_md_9501020154",
    "efe_md_9501020155",
    "efe_md_9501020156",
    "efe_md_9501020301",
    "efe_md_9501020302",
    "efe_md_9501020303",
    "efe_md_95010401",
    "efe_md_95010501",
    "efe_md_95010502",
    "efe_md_95010503",
    "efe_md_95010701",
    "efe_md_95010702",
    "efe_md_95010703",
    "efe_md_95010801",
    "efe_md_95010802",
    "efe_md_95010803",
    "efe_md_95010804",
    "efe_md_95010805",
    "efe_md_95010806",
    "efe_md_95010807",
    "efe_md_95010808",
    "efe_md_95010809",
    "efe_md_95010810",
    "efe_md_95010811",
    "efe_md_95010812",
    "efe_md_95010813",
    "efe_md_95020501",
    "efe_md_95020901",
    "efe_md_95021101",
    "efe_md_95021301",
    "efe_md_95021302",
    "efe_md_95021303",
    "efe_md_95022101",
    "efe_md_95022102",
    "efe_md_95022103",
    "efe_md_95022104",
    "efe_md_95022105",
    "efe_md_95022106",
    "efe_md_95022107",
    "efe_md_95022108",
    "efe_md_95022109",
    "efe_md_95022110",
    "efe_md_95030101",
    "efe_md_95030102",
    "efe_md_95030103",
    "efe_md_95030104",
    "efe_md_95030801",
    "efe_md_95031001",
    "efe_md_95031002",
    "efe_md_95031003",
    "efe_md_95031004",
    "efe_md_95031005",
    "efe_md_95031006",
    "efe_md_95031007",
    "efe_md_95031008",
    "efe_md_95031009",
    "efe_md_95031010",
    "efe_md_970101",
    "efe_md_970102",
    "efe_md_970103",
    "efe_md_970201",
    "efe_md_970202",
    "efe_md_970203",
    "efe_md_970204",
    "efe_md_970205",
    "efe_md_970206",
    "efe_md_970207",
    "efe_md_970801",
    "efe_md_970802",
    "efe_md_970901",
    "efe_md_971001",
    "efe_md_971101",
    "efe_md_971102",
    "efe_md_971103",
    "efe_md_971104",
    "efe_md_971105",
    "efe_md_971106",
    "efe_md_971107",
    "efe_md_971108",
    "efe_md_971109",
    "efe_md_971110",
    "efe_md_971111",
    "efe_md_971112",
    "efe_md_971113",
    "efe_md_971114",
    "efe_md_971115",
    "efe_md_971116",
    "efe_md_971117",
    "efe_md_971118",
    "efe_md_971119",
    "efe_md_971120",
    "efe_md_971121",
    "efe_md_971122",
    "efe_md_971123",
    "efe_md_971124",
    "efe_md_980101",
    "efe_md_980102",
    "efe_md_980103",
    "efe_md_980104",
    "efe_md_980105",
    "efe_md_980106",
    "efe_md_980201",
    "efe_md_980301",
    "efe_md_980401",
    "efe_md_980402",
    "efe_md_980403",
    "efe_md_980404",
    "efe_md_980501",
    "efe_md_980502",
    "efe_md_980503",
    "efe_md_980504",
    "efe_md_980505",
    "efe_md_980506",
    "efe_md_980507",
    "efe_md_980601",
    "efe_md_980801",
    "efe_md_981001",
    "efe_md_981002",
    "efe_md_981003",
    "efe_md_981004",
    "efe_md_981005",
    "efe_md_981006",
    "efe_md_981007",
    "efe_md_981008",
    "efe_md_981009",
    "efe_md_981010",
    "efe_md_981011",
    "efe_md_981012",
    "efe_md_981013",
    "efe_md_981014",
  ]

  const calcularCampoEspecial = (key, formula, storeField) => {
    const value = formula ? formula() : reportStore[storeField]

    obj[key] = value
    // console.log('obj[key]', obj[key])
    if (!codigosefe[key]) {
      codigosefe[key] = true
      textoefe += `${key.replace("efe_", "").replace("md_", "")} ${Number(value).toFixed(2)}\n`
    }
  }

  Object.keys(obj).forEach(key => {
    if (excludedKeys.includes(key)) {
      return
    }

    // console.log('key ', key + ' - ' + Number(obj[key]).toFixed(2))

    switch (key) {
    case "efe_md_95":
      calcularCampoEspecial(key, () => calcular_95(), null)
      break

    case "efe_md_95010101":
      calcularCampoEspecial(key, () => calcular_95010101(), null)
      break

    case "efe_md_9501":
      calcularCampoEspecial(key, () => calcular_9501(), null)
      break

    case "efe_md_950101":
      calcularCampoEspecial(key, () => calcular_950101(), null)
      break

    case "efe_md_95010102":
      calcularCampoEspecial(key, () => calcular_95010102(), null)
      break

    case "efe_md_950102":
      calcularCampoEspecial(key, () => calcular_950102(), null)
      break

    case "efe_md_95010201":
      calcularCampoEspecial(key, () => calcular_95010201(), null)
      break

    case "efe_md_95010203":
      calcularCampoEspecial(key, () => calcular_95010203(), null)
      break

    case "efe_md_950104":
      calcularCampoEspecial(key, () => calcular_950104(), null)
      break

    case "efe_md_950105":
      calcularCampoEspecial(key, () => calcular_950105(), null)
      break

    case "efe_md_950107":
      calcularCampoEspecial(key, () => calcular_950107(), null)
      break

    case "efe_md_950108":
      calcularCampoEspecial(key, () => calcular_950108(), null)
      break

    case "efe_md_9502":
      calcularCampoEspecial(key, () => calcular_9502(), null)
      break

    case "efe_md_950205":
      calcularCampoEspecial(key, () => calcular_950205(), null)
      break

    case "efe_md_950209":
      calcularCampoEspecial(key, () => calcular_950209(), null)
      break

    case "efe_md_950211":
      calcularCampoEspecial(key, () => calcular_950211(), null)
      break

    case "efe_md_950213":
      calcularCampoEspecial(key, () => calcular_950213(), null)
      break

    case "efe_md_950221":
      calcularCampoEspecial(key, () => calcular_950221(), null)
      break

    case "efe_md_9503":
      calcularCampoEspecial(key, () => calcular_9503(), null)
      break

    case "efe_md_950301":
      calcularCampoEspecial(key, () => calcular_950301(), null)
      break

    case "efe_md_950310":
      calcularCampoEspecial(key, () => calcular_950310(), null)
      break

    case "efe_md_9504":
      calcularCampoEspecial(key, () => calcular_9504(), null)
      break

    case "efe_md_9505":
      calcularCampoEspecial(key, () => calcular_9505(), null)
      break

    case "efe_md_9506":
      calcularCampoEspecial(key, () => calcular_9506(), null)
      break

    case "efe_md_9507":
      calcularCampoEspecial(key, () => calcular_9507(), null)
      break

    case "efe_md_96":
      calcularCampoEspecial(key, () => calcular_eri_600(), null)
      break

    case "efe_md_97":
      calcularCampoEspecial(key, () => calcular_97_Solo_TXT(), null)
      break

    case "efe_md_9701":
      calcularCampoEspecial(key, () => calcular_9701(), null)
      break

    case "efe_md_9702":
      calcularCampoEspecial(key, () => calcular_9702(), null)
      break

    case "efe_md_9708":
      calcularCampoEspecial(key, () => calcular_9708(), null)
      break

    case "efe_md_9711":
      calcularCampoEspecial(key, () => calcular_9711_Solo_Txt(), null)
      break

    case "efe_md_98":
      calcularCampoEspecial(key, () => calcular_98(), null)
      break

    case "efe_md_9801":
      calcularCampoEspecial(key, () => calcular_9801(), null)
      break

    case "efe_md_9802":
      const cur = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
      const prev = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

      const efe9802 = ((Number(cur) - Number(prev)) * -1).toFixed(2)

      calcularCampoEspecial(key, () => Number(efe9802).toFixed(2), null)
      break

    case "efe_md_9803":
      const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
      const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

      const efe9803 = ((Number(current) - Number(previous)) * -1).toFixed(2)

      calcularCampoEspecial(key, () => Number(efe9803).toFixed(2), null)
      break

    case "efe_md_9804":
      calcularCampoEspecial(key, () => calcular_9804(), null)
      break

    case "efe_md_9805":
      calcularCampoEspecial(key, () => calcular_9805(), null)
      break

    case "efe_md_9806":
      calcularCampoEspecial(key, () => calcular_9806(), null)
      break

    case "efe_md_9807":
      calcularCampoEspecial(key, () => Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9807")).toFixed(2), null)
      break

    case "efe_md_9808":
      calcularCampoEspecial(key, () => calcular_9808(), null)
      break

    case "efe_md_9810":
      calcularCampoEspecial(key, () => calcular_9810(), null)
      break

    case "efe_md_9820":
      calcularCampoEspecial(key, () => calcular_9820(), null)
      break

    default:
      if (!codigosefe[key]) {
        codigosefe[key] = true

        const formattedKey = key.replace("efe_", "").replace("md_", "")
        const formattedValue = Number(obj[key]).toFixed(2)

        textoefe += `${formattedKey} ${formattedValue}\n`
      }
      break
    }

    console.log('key ', key + ' - ' + Number(obj[key]).toFixed(2))
  })



  return [textoefe, codigosefe]
}

export const getLocalStorageItemAsNumber  = key => {
  const reportStore = useReportStore()
  const value = reportStore[key] || 0

  return Number(value).toFixed(2)
}

export const initializeDefaultValues = keys => {
  if (!Array.isArray(keys) || keys === undefined) {
    console.warn("El parámetro 'keys' no es un array o está indefinido.")

    return {}
  }

  return keys.reduce((acc, key) => {
    acc[key] = 0.00

    return acc
  }, {})
}


// Función para cargar datos desde localStorage o usar valores predeterminados
export const loadData = (key, defaultKeys) => {
  const reportStore = useReportStore()

  console.log('key: ', key)
  console.log('defaultKeys: ', defaultKeys)

  return reportStore.getReportData(key) || initializeDefaultValues(defaultKeys)
}

export const dataKeys = {
  esf: ["activoscorrientes", "activosnocorrientes", "pasivoscorrientes", "pasivosnocorrientes", "patrimonio"],
  eri: ["costos", "ingresos", "otrosingresos", "gastosdeventas", "gastosadministrativos", "gastosfinancieros", "otrosgastos", "resultados"],
  efe: ["actividadesdeoperacion", "actividadesdeinversion", "actividadesdefinanciamiento", "conciliacionganancianeta"],
  mov: ["movperdidasacumuladascuentasincobrablesydeterioro", "movperdidasacumuladasvalornetorealizacion", "movpropiedadesplantasyequipos", "movpropiedadesdeinversion", "movintangibles", "movactivosbiologicos", "movimpuestosdiferidos", "movjubilacionpatronal", "deshaucio", "activosfinancieroslargoplazo", "otros"],
}

// Crear objetos inicializados
export const createFinancialData = (keys, suffix = '') => {
  const data = {}

  keys.forEach(key => {
    console.log("data[key + suffix]: ", data[key + suffix])
    data[key + suffix] = loadData(key + suffix, window[key + suffix])
  })

  return data
}

export const getDefaultStructure = keys => {
  return keys.reduce((acc, key) => {
    acc[key] = 0.0

    return acc
  }, {})
}

export const processSection = (section, defaultKeys) => {
  return section ? setReportMeta(section) : setReportMeta(getDefaultStructure(defaultKeys))
}

export const setReportMeta = data => ({
  ...data,
  userId: user?.id,
  periodoId: reportStore.getReportData('periodoId'),
  empresaId: reportStore.getReportData('empresaId'),
  reporteId: reportStore.getReportData('reporteId'),
})

export const financialData = (keySet, suffix = "") => {
  const data = createFinancialData(keySet, suffix)

  return setReportMeta(data)
}


