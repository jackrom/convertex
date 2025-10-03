import { computed, ref } from "vue"
import { useReportStore } from "@/@store/reportStore"

const parseOrZero = value => {
  const number = parseFloat(value)

  return isNaN(number) ? 0 : number
}


/**
 * Carga un ítem de localStorage y lo devuelve como una referencia reactiva.
 *
 * Intenta obtener y parsear un ítem de localStorage. Si el ítem existe y es un JSON válido,
 * lo devuelve como una referencia reactiva de Vue. En caso de error durante el parseo del JSON,
 * o si el ítem no existe, devuelve una referencia reactiva con un valor predeterminado.
 *
 * @param {string} key - La clave del ítem en localStorage a cargar.
 * @param {*} defaultValue - Valor predeterminado a devolver si el ítem no existe o si hay un error.
 *                           Este valor es opcional y su valor por defecto es null.
 * @returns {Ref} Una referencia reactiva de Vue con el valor del ítem de localStorage o el valor predeterminado.
 *
 * Ejemplo de uso:
 * let mov_saldoinicial = ref(loadFromLocalStorage('movjubilacionpatronal', {}).mov_saldoinicial)
 */

export const loadFromLocalStorage = (key, defaultValue = null) => {
  const reportStore = useReportStore()

  try {
    const value = reportStore[key]
    if (value !== undefined) {
      return ref(value)
    }
  } catch (error) {
    // console.error(`Error accessing reportStore for key '${key}':`, error)
  }

  return ref(defaultValue)
}

export const getFormattedNumber = (value, fallback) => {
  const number = Number(value)
  if (!isNaN(number)) {
    return number.toFixed(2)
  }
  const fallbackNumber = Number(fallback)

  return !isNaN(fallbackNumber) ? fallbackNumber.toFixed(2) : 0.00
}

// PERIODO ACTUAL
/* ----------------- ESF ----------------------*/
export const calcular_esf_101 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10101 = computed(() => {
    return calcular_esf_10101()
  })

  const esf_10102 = computed(() => {
    return calcular_esf_10102()
  })

  const esf_10103 = computed(() => {
    return calcular_esf_10103()
  })

  const esf_10104 = computed(() => {
    return calcular_esf_10104()
  })

  const esf_10105 = computed(() => {
    return calcular_esf_10105()
  })

  const esf_10106 = computed(() => {
    return activoscorrientes.esf_10106
  })

  const esf_10107 = computed(() => {
    return activoscorrientes.esf_10107
  })

  const esf_10108 = computed(() => {
    return activoscorrientes.esf_10108
  })

  return (Number(esf_10101.value) + Number(esf_10102.value) + Number(esf_10103.value) + Number(esf_10104.value) + Number(esf_10105.value) + Number(esf_10106.value) + Number(esf_10107.value) + Number(esf_10108.value)).toFixed(2)
}

export const calcular_esf_10101 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_1010101 = computed(() => {
    return activoscorrientes.esf_1010101
  })

  const esf_1010102 = computed(() => {
    return activoscorrientes.esf_1010102
  })

  const esf_1010103 = computed(() => {
    return activoscorrientes.esf_1010103
  })

  return (Number(esf_1010101.value) + Number(esf_1010102.value) + Number(esf_1010103.value)).toFixed(2)
}

export const calcular_esf_10102 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_1010201 = computed(() => {
    return calcular_esf_1010201()
  })

  const esf_1010202 = computed(() => {
    return calcular_esf_1010202()
  })

  const esf_1010203 = computed(() => {
    return calcular_esf_1010203()
  })

  const esf_1010204 = computed(() => {
    return calcular_esf_1010204()
  })

  const esf_1010205 = computed(() => {
    return calcular_esf_1010205()
  })

  const esf_1010206 = computed(() => {
    return calcular_esf_1010206()
  })

  const esf_1010207 = computed(() => {
    return activoscorrientes.esf_1010207
  })

  return (Number(esf_1010201.value) + Number(esf_1010202.value) + Number(esf_1010203.value) + Number(esf_1010204.value) + Number(esf_1010205.value) + Number(esf_1010206.value) + Number(esf_1010207.value)).toFixed(2)
}

export const calcular_esf_1010201 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_101020101 = computed(() => {
    return calcular_esf_101020101()
  })

  const esf_101020102 = computed(() => {
    return calcular_esf_101020102()
  })

  const esf_101020103 = computed(() => {
    return calcular_esf_101020103()
  })

  return (Number(esf_101020101.value) + Number(esf_101020102.value) + Number(esf_101020103.value)).toFixed(2)
}

export const calcular_esf_101020101 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102010101 = computed(() => {
    return activoscorrientes.esf_10102010101
  })

  const esf_10102010102 = computed(() => {
    return activoscorrientes.esf_10102010102
  })

  const esf_10102010103 = computed(() => {
    return activoscorrientes.esf_10102010103
  })

  const esf_10102010104 = computed(() => {
    return activoscorrientes.esf_10102010104
  })

  const esf_10102010105 = computed(() => {
    return activoscorrientes.esf_10102010105
  })

  const esf_10102010106 = computed(() => {
    return activoscorrientes.esf_10102010106
  })

  return (Number(esf_10102010101.value) + Number(esf_10102010102.value) + Number(esf_10102010103.value) + Number(esf_10102010104.value) + Number(esf_10102010105.value) + Number(esf_10102010106.value)).toFixed(2)
}

export const calcular_esf_101020102 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102010201 = computed(() => {
    return activoscorrientes.esf_10102010201
  })

  const esf_10102010202 = computed(() => {
    return activoscorrientes.esf_10102010202
  })

  const esf_10102010203 = computed(() => {
    return activoscorrientes.esf_10102010203
  })

  const esf_10102010204 = computed(() => {
    return activoscorrientes.esf_10102010204
  })

  const esf_10102010205 = computed(() => {
    return activoscorrientes.esf_10102010205
  })

  const esf_10102010206 = computed(() => {
    return activoscorrientes.esf_10102010206
  })

  const esf_10102010207 = computed(() => {
    return activoscorrientes.esf_10102010207
  })

  const esf_10102010208 = computed(() => {
    return activoscorrientes.esf_10102010208
  })

  const esf_10102010209 = computed(() => {
    return activoscorrientes.esf_10102010209
  })

  const esf_10102010210 = computed(() => {
    return activoscorrientes.esf_10102010210
  })

  const esf_10102010211 = computed(() => {
    return activoscorrientes.esf_10102010211
  })

  const esf_10102010212 = computed(() => {
    return activoscorrientes.esf_10102010212
  })

  const esf_10102010213 = computed(() => {
    return activoscorrientes.esf_10102010213
  })

  const esf_10102010214 = computed(() => {
    return activoscorrientes.esf_10102010214
  })

  const esf_10102010215 = computed(() => {
    return activoscorrientes.esf_10102010215
  })

  const esf_10102010216 = computed(() => {
    return activoscorrientes.esf_10102010216
  })

  const esf_10102010217 = computed(() => {
    return activoscorrientes.esf_10102010217
  })

  const esf_10102010218 = computed(() => {
    return activoscorrientes.esf_10102010218
  })

  const esf_10102010219 = computed(() => {
    return activoscorrientes.esf_10102010219
  })

  const esf_10102010220 = computed(() => {
    return activoscorrientes.esf_10102010220
  })

  const esf_10102010221 = computed(() => {
    return activoscorrientes.esf_10102010221
  })

  const esf_10102010222 = computed(() => {
    return activoscorrientes.esf_10102010222
  })

  const esf_10102010223 = computed(() => {
    return activoscorrientes.esf_10102010223
  })

  return (Number(esf_10102010201.value) + Number(esf_10102010202.value) + Number(esf_10102010203.value) + Number(esf_10102010204.value) + Number(esf_10102010205.value) + Number(esf_10102010206.value) + Number(esf_10102010207.value) + Number(esf_10102010208.value) + Number(esf_10102010209.value) + Number(esf_10102010210.value) + Number(esf_10102010211.value) + Number(esf_10102010212.value) + Number(esf_10102010213.value) + Number(esf_10102010214.value) + Number(esf_10102010215.value) + Number(esf_10102010216.value) + Number(esf_10102010217.value) + Number(esf_10102010218.value) + Number(esf_10102010219.value) + Number(esf_10102010220.value) + Number(esf_10102010221.value) + Number(esf_10102010222.value) + Number(esf_10102010223.value)).toFixed(2)
}

export const calcular_esf_101020103 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102010301 = computed(() => {
    return activoscorrientes.esf_10102010301
  })

  const esf_10102010302 = computed(() => {
    return activoscorrientes.esf_10102010302
  })

  const esf_10102010303 = computed(() => {
    return activoscorrientes.esf_10102010303
  })

  const esf_10102010304 = computed(() => {
    return activoscorrientes.esf_10102010304
  })

  return (Number(esf_10102010301.value) + Number(esf_10102010302.value) + Number(esf_10102010303.value) + Number(esf_10102010304.value)).toFixed(2)
}

export const calcular_esf_1010202 = () => {
  const reportStore = useReportStore()

  const esf_101020201 = computed(() => {
    return calcular_esf_101020201()
  })

  const esf_101020202 = computed(() => {
    return calcular_esf_101020202()
  })

  return (Number(esf_101020201.value) + Number(esf_101020202.value)).toFixed(2)
}

export const calcular_esf_101020201 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102020101 = computed(() => {
    return activoscorrientes.esf_10102020101
  })

  const esf_10102020102 = computed(() => {
    return activoscorrientes.esf_10102020102
  })

  const esf_10102020103 = computed(() => {
    return activoscorrientes.esf_10102020103
  })

  const esf_10102020104 = computed(() => {
    return activoscorrientes.esf_10102020104
  })

  const esf_10102020105 = computed(() => {
    return activoscorrientes.esf_10102020105
  })

  const esf_10102020106 = computed(() => {
    return activoscorrientes.esf_10102020106
  })

  return (Number(esf_10102020101.value) + Number(esf_10102020102.value) + Number(esf_10102020103.value) + Number(esf_10102020104.value) + Number(esf_10102020105.value) + Number(esf_10102020106.value)).toFixed(2)
}

export const calcular_esf_101020202 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102020201 = computed(() => {
    return activoscorrientes.esf_10102020201
  })

  const esf_10102020202 = computed(() => {
    return activoscorrientes.esf_10102020202
  })

  const esf_10102020203 = computed(() => {
    return activoscorrientes.esf_10102020203
  })

  const esf_10102020204 = computed(() => {
    return activoscorrientes.esf_10102020204
  })

  const esf_10102020205 = computed(() => {
    return activoscorrientes.esf_10102020205
  })

  const esf_10102020206 = computed(() => {
    return activoscorrientes.esf_10102020206
  })

  const esf_10102020207 = computed(() => {
    return activoscorrientes.esf_10102020207
  })

  const esf_10102020208 = computed(() => {
    return activoscorrientes.esf_10102020208
  })

  const esf_10102020209 = computed(() => {
    return activoscorrientes.esf_10102020209
  })

  const esf_10102020210 = computed(() => {
    return activoscorrientes.esf_10102020210
  })

  const esf_10102020211 = computed(() => {
    return activoscorrientes.esf_10102020211
  })

  const esf_10102020212 = computed(() => {
    return activoscorrientes.esf_10102020212
  })

  const esf_10102020213 = computed(() => {
    return activoscorrientes.esf_10102020213
  })

  const esf_10102020214 = computed(() => {
    return activoscorrientes.esf_10102020214
  })

  const esf_10102020215 = computed(() => {
    return activoscorrientes.esf_10102020215
  })

  const esf_10102020216 = computed(() => {
    return activoscorrientes.esf_10102020216
  })

  const esf_10102020217= computed(() => {
    return activoscorrientes.esf_10102020217
  })

  const esf_10102020218 = computed(() => {
    return activoscorrientes.esf_10102020218
  })

  const esf_10102020219 = computed(() => {
    return activoscorrientes.esf_10102020219
  })

  const esf_10102020220 = computed(() => {
    return activoscorrientes.esf_10102020220
  })

  const esf_10102020221 = computed(() => {
    return activoscorrientes.esf_10102020221
  })

  const esf_10102020222 = computed(() => {
    return activoscorrientes.esf_10102020222
  })

  const esf_10102020223 = computed(() => {
    return activoscorrientes.esf_10102020223
  })

  return (Number(esf_10102020201.value) + Number(esf_10102020202.value) + Number(esf_10102020203.value) + Number(esf_10102020204.value) + Number(esf_10102020205.value) + Number(esf_10102020206.value) + Number(esf_10102020207.value) + Number(esf_10102020208.value) + Number(esf_10102020209.value) + Number(esf_10102020210.value) + Number(esf_10102020211.value) + Number(esf_10102020212.value) + Number(esf_10102020213.value) + Number(esf_10102020214.value) + Number(esf_10102020215.value) + Number(esf_10102020216.value) + Number(esf_10102020217.value) + Number(esf_10102020218.value) + Number(esf_10102020219.value) + Number(esf_10102020220.value) + Number(esf_10102020221.value) + Number(esf_10102020222.value) + Number(esf_10102020223.value)).toFixed(2)
}

export const calcular_esf_1010203 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_101020302 = computed(() => {
    return calcular_esf_101020302()
  })

  return (Number(esf_101020302.value)).toFixed(2)
}

export const calcular_esf_101020302 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102030201 = computed(() => {
    return activoscorrientes.esf_10102030201
  })

  const esf_10102030202 = computed(() => {
    return activoscorrientes.esf_10102030202
  })

  const esf_10102030203 = computed(() => {
    return activoscorrientes.esf_10102030203
  })

  const esf_10102030204 = computed(() => {
    return activoscorrientes.esf_10102030204
  })

  const esf_10102030205 = computed(() => {
    return activoscorrientes.esf_10102030205
  })

  const esf_10102030206 = computed(() => {
    return activoscorrientes.esf_10102030206
  })

  const esf_10102030207 = computed(() => {
    return activoscorrientes.esf_10102030207
  })

  const esf_10102030208 = computed(() => {
    return activoscorrientes.esf_10102030208
  })

  const esf_10102030209 = computed(() => {
    return activoscorrientes.esf_10102030209
  })

  const esf_10102030210 = computed(() => {
    return activoscorrientes.esf_10102030210
  })

  const esf_10102030211 = computed(() => {
    return activoscorrientes.esf_10102030211
  })

  const esf_10102030212 = computed(() => {
    return activoscorrientes.esf_10102030212
  })

  const esf_10102030213 = computed(() => {
    return activoscorrientes.esf_10102030213
  })

  const esf_10102030214 = computed(() => {
    return activoscorrientes.esf_10102030214
  })

  const esf_10102030215 = computed(() => {
    return activoscorrientes.esf_10102030215
  })

  const esf_10102030216 = computed(() => {
    return activoscorrientes.esf_10102030216
  })

  const esf_10102030217 = computed(() => {
    return activoscorrientes.esf_10102030217
  })

  const esf_10102030218 = computed(() => {
    return activoscorrientes.esf_10102030218
  })

  const esf_10102030219 = computed(() => {
    return activoscorrientes.esf_10102030219
  })

  const esf_10102030220 = computed(() => {
    return activoscorrientes.esf_10102030220
  })

  const esf_10102030221 = computed(() => {
    return activoscorrientes.esf_10102030221
  })

  const esf_10102030222 = computed(() => {
    return activoscorrientes.esf_10102030222
  })

  const esf_10102030223 = computed(() => {
    return activoscorrientes.esf_10102030223
  })

  return (Number(esf_10102030201.value) + Number(esf_10102030202.value) + Number(esf_10102030203.value) + Number(esf_10102030204.value) + Number(esf_10102030205.value) + Number(esf_10102030206.value) + Number(esf_10102030207.value) + Number(esf_10102030208.value) + Number(esf_10102030209.value) + Number(esf_10102030210.value) + Number(esf_10102030211.value) + Number(esf_10102030212.value) + Number(esf_10102030213.value) + Number(esf_10102030214.value) + Number(esf_10102030215.value) + Number(esf_10102030216.value) + Number(esf_10102030217.value) + Number(esf_10102030218.value) + Number(esf_10102030219.value) + Number(esf_10102030220.value) + Number(esf_10102030221.value) + Number(esf_10102030222.value) + Number(esf_10102030223.value)).toFixed(2)
}

export const calcular_esf_1010204 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_101020401 = computed(() => {
    return activoscorrientes.esf_101020401
  })

  const esf_101020402 = computed(() => {
    return activoscorrientes.esf_101020402
  })

  const esf_101020403 = computed(() => {
    return activoscorrientes.esf_101020403
  })

  return (Number(esf_101020401.value) + Number(esf_101020402.value) + Number(esf_101020403.value)).toFixed(2)
}

export const calcular_esf_1010205 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_101020501 = computed(() => {
    return calcular_esf_101020501()
  })

  const esf_101020502 = computed(() => {
    return calcular_esf_101020502()
  })

  return (Number(esf_101020501.value) + Number(esf_101020502.value)).toFixed(2)
}

export const calcular_esf_101020501 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102050101 = computed(() => {
    return activoscorrientes.esf_10102050101
  })

  const esf_10102050102 = computed(() => {
    return activoscorrientes.esf_10102050102
  })

  return (Number(esf_10102050101.value) + Number(esf_10102050102.value)).toFixed(2)
}

export const calcular_esf_101020502 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_10102050201 = computed(() => {
    return activoscorrientes.esf_10102050201
  })

  const esf_10102050202 = computed(() => {
    return activoscorrientes.esf_10102050202
  })

  const esf_10102050203 = computed(() => {
    return activoscorrientes.esf_10102050203
  })

  const esf_10102050204 = computed(() => {
    return activoscorrientes.esf_10102050204
  })

  const esf_10102050207 = computed(() => {
    return activoscorrientes.esf_10102050207
  })

  const esf_10102050208 = computed(() => {
    return activoscorrientes.esf_10102050208
  })

  const esf_10102050209 = computed(() => {
    return activoscorrientes.esf_10102050209
  })

  const esf_10102050210 = computed(() => {
    return activoscorrientes.esf_10102050210
  })

  const esf_10102050211 = computed(() => {
    return activoscorrientes.esf_10102050211
  })

  const esf_10102050212 = computed(() => {
    return activoscorrientes.esf_10102050212
  })

  const esf_10102050213 = computed(() => {
    return activoscorrientes.esf_10102050213
  })

  const esf_10102050214 = computed(() => {
    return activoscorrientes.esf_10102050214
  })

  const esf_10102050215 = computed(() => {
    return activoscorrientes.esf_10102050215
  })

  const esf_10102050216 = computed(() => {
    return activoscorrientes.esf_10102050216
  })

  const esf_10102050217 = computed(() => {
    return activoscorrientes.esf_10102050217
  })

  const esf_10102050218 = computed(() => {
    return activoscorrientes.esf_10102050218
  })

  const esf_10102050219 = computed(() => {
    return activoscorrientes.esf_10102050219
  })

  const esf_10102050220 = computed(() => {
    return activoscorrientes.esf_10102050220
  })

  const esf_10102050221 = computed(() => {
    return activoscorrientes.esf_10102050221
  })

  return (Number(esf_10102050201.value) + Number(esf_10102050202.value) + Number(esf_10102050203.value) + Number(esf_10102050204.value) + Number(esf_10102050207.value) + Number(esf_10102050208.value) + Number(esf_10102050209.value) + Number(esf_10102050210.value) + Number(esf_10102050211.value) + Number(esf_10102050212.value) + Number(esf_10102050213.value) + Number(esf_10102050214.value) + Number(esf_10102050215.value) + Number(esf_10102050216.value) + Number(esf_10102050217.value) + Number(esf_10102050218.value) + Number(esf_10102050219.value) + Number(esf_10102050220.value) + Number(esf_10102050221.value)).toFixed(2)
}

export const calcular_esf_1010206 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_101020601 = computed(() => {
    return activoscorrientes.esf_101020601
  })

  const esf_101020602 = computed(() => {
    return activoscorrientes.esf_101020602
  })

  const esf_101020603 = computed(() => {
    return activoscorrientes.esf_101020603
  })

  const esf_101020604 = computed(() => {
    return activoscorrientes.esf_101020604
  })

  return (Number(esf_101020601.value) + Number(esf_101020602.value) + Number(esf_101020603.value) + Number(esf_101020604.value)).toFixed(2)
}

export const calcular_esf_10103 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_1010301 = computed(() => {
    return activoscorrientes.esf_1010301
  })

  const esf_1010302 = computed(() => {
    return activoscorrientes.esf_1010302
  })

  const esf_1010303 = computed(() => {
    return activoscorrientes.esf_1010303
  })

  const esf_1010304 = computed(() => {
    return activoscorrientes.esf_1010304
  })

  const esf_1010305 = computed(() => {
    return activoscorrientes.esf_1010305
  })

  const esf_1010306 = computed(() => {
    return activoscorrientes.esf_1010306
  })

  const esf_1010307 = computed(() => {
    return activoscorrientes.esf_1010307
  })

  const esf_1010308 = computed(() => {
    return activoscorrientes.esf_1010308
  })

  const esf_1010309 = computed(() => {
    return activoscorrientes.esf_1010309
  })

  const esf_1010310 = computed(() => {
    return activoscorrientes.esf_1010310
  })

  const esf_1010311 = computed(() => {
    return activoscorrientes.esf_1010311
  })

  const esf_1010312 = computed(() => {
    return activoscorrientes.esf_1010312
  })

  const esf_1010313 = computed(() => {
    return activoscorrientes.esf_1010313
  })

  return (Number(esf_1010301.value) + Number(esf_1010302.value) + Number(esf_1010303.value) + Number(esf_1010304.value) + Number(esf_1010305.value) + Number(esf_1010306.value) + Number(esf_1010307.value) + Number(esf_1010308.value) + Number(esf_1010309.value) + Number(esf_1010310.value) + Number(esf_1010311.value) + Number(esf_1010312.value) + Number(esf_1010313.value)).toFixed(2)
}

export const calcular_esf_10104 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_1010401 = computed(() => {
    return activoscorrientes.esf_1010401
  })

  const esf_1010402 = computed(() => {
    return activoscorrientes.esf_1010402
  })

  const esf_1010403 = computed(() => {
    return activoscorrientes.esf_1010403
  })

  const esf_1010404 = computed(() => {
    return activoscorrientes.esf_1010404
  })

  return (Number(esf_1010401.value) + Number(esf_1010402.value) + Number(esf_1010403.value) + Number(esf_1010404.value)).toFixed(2)
}

export const calcular_esf_10105 = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const esf_1010501 = computed(() => {
    return activoscorrientes.esf_1010501
  })

  const esf_1010502 = computed(() => {
    return activoscorrientes.esf_1010502
  })

  const esf_1010503 = computed(() => {
    return activoscorrientes.esf_1010503
  })

  return (Number(esf_1010501.value) + Number(esf_1010502.value) + Number(esf_1010503.value)).toFixed(2)
}


export const calcular_esf_102 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  const esf_10201 = computed(() => {
    return calcular_esf_10201()
  })

  const esf_10202 = computed(() => {
    return calcular_esf_10202()
  })

  const esf_10203 = computed(() => {
    return calcular_esf_10203()
  })

  const esf_10204 = computed(() => {
    return calcular_esf_10204()
  })

  const esf_10205 = computed(() => {
    return activosnocorrientes.esf_10205
  })

  const esf_10206 = computed(() => {
    return calcular_esf_10206()
  })

  const esf_10207 = computed(() => {
    return calcular_esf_10207()
  })

  const esf_10208 = computed(() => {
    return calcular_esf_10208()
  })

  const esf_10209 = computed(() => {
    return calcular_esf_10209()
  })

  const esf_10210 = computed(() => {
    return calcular_esf_10210()
  })

  return (Number(esf_10201.value) + Number(esf_10202.value) + Number(esf_10203.value) + Number(esf_10204.value) + Number(esf_10205.value) + Number(esf_10206.value) + Number(esf_10207.value) + Number(esf_10208.value) + Number(esf_10209.value) + Number(esf_10210.value)).toFixed(2)
}

export const calcular_esf_10201 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  const esf_1020101 = computed(() => {
    return activosnocorrientes.esf_1020101
  })

  const esf_1020102 = computed(() => {
    return activosnocorrientes.esf_1020102
  })

  const esf_1020103 = computed(() => {
    return activosnocorrientes.esf_1020103
  })

  const esf_1020104 = computed(() => {
    return activosnocorrientes.esf_1020104
  })

  const esf_1020105 = computed(() => {
    return activosnocorrientes.esf_1020105
  })

  const esf_1020106 = computed(() => {
    return activosnocorrientes.esf_1020106
  })

  const esf_1020107 = computed(() => {
    return activosnocorrientes.esf_1020107
  })

  const esf_1020108 = computed(() => {
    return activosnocorrientes.esf_1020108
  })

  const esf_1020109 = computed(() => {
    return activosnocorrientes.esf_1020109
  })

  const esf_1020110 = computed(() => {
    return activosnocorrientes.esf_1020110
  })

  const esf_1020111 = computed(() => {
    return activosnocorrientes.esf_1020111
  })

  const esf_1020112 = computed(() => {
    return activosnocorrientes.esf_1020112
  })

  const esf_1020113 = computed(() => {
    return activosnocorrientes.esf_1020113
  })

  const esf_1020114 = computed(() => {
    return activosnocorrientes.esf_1020114
  })

  return (Number(esf_1020101.value) + Number(esf_1020102.value) + Number(esf_1020103.value) + Number(esf_1020104.value) + Number(esf_1020105.value) + Number(esf_1020106.value) + Number(esf_1020107.value) + Number(esf_1020108.value) + Number(esf_1020109.value) + Number(esf_1020110.value) + Number(esf_1020111.value) + Number(esf_1020112.value) + Number(esf_1020113.value) + Number(esf_1020114.value)).toFixed(2)
}

export const calcular_esf_10202 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  const esf_1020201 = computed(() => {
    return activosnocorrientes.esf_1020101
  })

  const esf_1020202 = computed(() => {
    return activosnocorrientes.esf_1020102
  })

  const esf_1020203 = computed(() => {
    return activosnocorrientes.esf_1020103
  })

  const esf_1020204 = computed(() => {
    return activosnocorrientes.esf_1020104
  })

  return (Number(esf_1020201.value) + Number(esf_1020202.value) + Number(esf_1020203.value) + Number(esf_1020204.value)).toFixed(2)
}

export const calcular_esf_10203 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020301.value) + Number(esf_1020302.value) + Number(esf_1020303.value) + Number(esf_1020304.value) +  Number(esf_1020305.value) +  Number(esf_1020306.value)).toFixed(2)
}

export const calcular_esf_10204 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020401.value) + Number(esf_1020402.value) + Number(esf_1020403.value) + Number(esf_1020404.value) + Number(esf_1020405.value) + Number(esf_1020406.value) + Number(esf_1020407.value)).toFixed(2)
}

export const calcular_esf_10206 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020601.value) + Number(esf_1020602.value) + Number(esf_1020603.value) + Number(esf_1020604.value) + Number(esf_1020605.value) + Number(esf_1020606.value)).toFixed(2)
}

export const calcular_esf_10207 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020701.value) + Number(esf_1020702.value) + Number(esf_1020703.value)).toFixed(2)
}

export const calcular_esf_10208 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020801.value) + Number(esf_1020802.value) + Number(esf_1020803.value) + Number(esf_1020805.value) + Number(esf_1020806.value) + Number(esf_1020807.value) + Number(esf_1020808.value) + Number(esf_1020809.value) + Number(esf_1020810.value) + Number(esf_1020811.value)).toFixed(2)
}

export const calcular_esf_10209 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1020901.value) + Number(esf_1020902.value) + Number(esf_1020903.value)).toFixed(2)
}

export const calcular_esf_10210 = () => {
  const reportStore = useReportStore()
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")

  return (Number(esf_1021001.value) + Number(esf_1021002.value) + Number(esf_1021003.value) + Number(esf_1021004.value)).toFixed(2)
}


/* ----------------- ERI ----------------------*/
export const calcular_eri_401 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_40101 = ref(Number(ingresos.eri_40101).toFixed(2))

  const eri_40102 = computed(() => {
    return calcular_eri_40102()
  })

  const eri_40103 = computed(() => {
    return ingresos.eri_40103
  })

  const eri_40104 = computed(() => {
    return ingresos.eri_40104
  })

  const eri_40105 = computed(() => {
    return ingresos.eri_40105
  })

  const eri_40106 = computed(() => {
    return calcular_eri_40106()
  })

  const eri_40107 = computed(() => {
    return ingresos.eri_40107
  })

  const eri_40108 = computed(() => {
    return ingresos.eri_40108
  })

  const eri_40109 = computed(() => {
    return calcular_eri_40109()
  })

  const eri_40110 = computed(() => {
    return calcular_eri_40110()
  })

  const eri_40112 = computed(() => {
    return ingresos.eri_40112
  })

  const eri_40113 = computed(() => {
    return ingresos.eri_40113
  })

  const eri_40114 = computed(() => {
    return ingresos.eri_40114
  })

  const eri_40115 = computed(() => {
    return ingresos.eri_40115
  })

  const eri_40116 = computed(() => {
    return ingresos.eri_40116
  })

  return (Number(eri_40101.value) + Number(eri_40102.value) + Number(eri_40103.value) + Number(eri_40104.value) + Number(eri_40105.value) + Number(eri_40106.value) + Number(eri_40107.value) + Number(eri_40108.value) + Number(eri_40109.value) + Number(eri_40110.value) + Number(eri_40112.value) + Number(eri_40113.value) + Number(eri_40114.value) + Number(eri_40115.value) + Number(eri_40116.value)).toFixed(2)
}

export const calcular_eri_40102 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_4010201 = computed(() => {
    return ingresos.eri_4010201
  })

  const eri_4010202 = computed(() => {
    return ingresos.eri_4010202
  })

  const eri_4010203 = computed(() => {
    return ingresos.eri_4010203
  })

  const eri_4010204 = computed(() => {
    return ingresos.eri_4010204
  })

  return (Number(eri_4010201.value) + Number(eri_4010202.value) + Number(eri_4010203.value) + Number(eri_4010204.value)).toFixed(2)
}

export const calcular_eri_40106 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_4010601 = computed(() => {
    return ingresos.eri_4010601
  })

  const eri_4010602 = computed(() => {
    return ingresos.eri_4010602
  })

  const eri_4010603 = computed(() => {
    return ingresos.eri_4010603
  })

  return (Number(eri_4010601.value) + Number(eri_4010602.value) + Number(eri_4010603.value)).toFixed(2)
}

export const calcular_eri_40109 = () => {
  const eri_4010901 = computed(() => {
    return calcular_eri_4010901()
  })

  const eri_4010902 = computed(() => {
    return calcular_eri_4010902()
  })

  const eri_4010903 = computed(() => {
    return calcular_eri_4010903()
  })

  return (Number(eri_4010901.value) + Number(eri_4010902.value) + Number(eri_4010903.value)).toFixed(2)
}

export const calcular_eri_4010901 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_401090101 = computed(() => {
    return ingresos.eri_401090101
  })

  const eri_401090103 = computed(() => {
    return ingresos.eri_401090103
  })

  const eri_401090104 = computed(() => {
    return ingresos.eri_401090104
  })

  const eri_401090105 = computed(() => {
    return ingresos.eri_401090105
  })

  const eri_401090106 = computed(() => {
    return ingresos.eri_401090106
  })

  return (Number(eri_401090101.value) + Number(eri_401090103.value) + Number(eri_401090104.value) + Number(eri_401090105.value) + Number(eri_401090106.value)).toFixed(2)
}

export const calcular_eri_4010902  = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_401090201 = computed(() => {
    return ingresos.eri_401090201
  })

  const eri_401090202 = computed(() => {
    return ingresos.eri_401090202
  })

  const eri_401090203 = computed(() => {
    return ingresos.eri_401090203
  })

  const eri_401090204 = computed(() => {
    return ingresos.eri_401090204
  })

  const eri_401090205 = computed(() => {
    return ingresos.eri_401090205
  })

  const eri_401090206 = computed(() => {
    return ingresos.eri_401090206
  })

  const eri_401090207 = computed(() => {
    return ingresos.eri_401090207
  })

  const eri_401090208 = computed(() => {
    return ingresos.eri_401090208
  })

  return(Number(eri_401090201.value) + Number(eri_401090202.value) + Number(eri_401090203.value) + Number(eri_401090204.value) + Number(eri_401090205.value) + Number(eri_401090206.value) + Number(eri_401090207.value) + Number(eri_401090208.value)).toFixed(2)
}

export const calcular_eri_4010903 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_401090301 = computed(() => {
    return ingresos.eri_401090301
  })

  const eri_401090302 = computed(() => {
    return ingresos.eri_401090302
  })

  const eri_401090303 = computed(() => {
    return ingresos.eri_401090303
  })

  const eri_401090304 = computed(() => {
    return ingresos.eri_401090304
  })

  return (Number(eri_401090301.value) + Number(eri_401090302.value) + Number(eri_401090303.value) + Number(eri_401090304.value)).toFixed(2)
}

export const calcular_eri_40110 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")

  const eri_4011001 = computed(() => {
    return ingresos.eri_4011001
  })

  const eri_4011002 = computed(() => {
    return ingresos.eri_4011002
  })

  const eri_4011003 = computed(() => {
    return ingresos.eri_4011003
  })

  const eri_4011004 = computed(() => {
    return ingresos.eri_4011004
  })

  const eri_4011005 = computed(() => {
    return ingresos.eri_4011005
  })

  const eri_4011006 = computed(() => {
    return ingresos.eri_4011006
  })

  return (Number(eri_4011001.value) + Number(eri_4011002.value) + Number(eri_4011003.value) + Number(eri_4011004.value) + Number(eri_4011005.value) + Number(eri_4011006.value)).toFixed(2)
}

export const calcular_eri_403 = () => {
  const reportStore = useReportStore()
  const otrosingresos = reportStore.getReportData("otrosingresosifluc")

  const eri_40301 = computed(() => {
    return otrosingresos?.eri_40301
  })

  const eri_40302 = computed(() => {
    return otrosingresos?.eri_40302
  })

  const eri_40303 = computed(() => {
    return otrosingresos?.eri_40303
  })

  return (Number(eri_40301.value) + Number(eri_40302.value) + Number(eri_40303.value)).toFixed(2)
}

export const calcular_eri_501 = () => {
  const eri_50101 = computed(() => {
    return calcular_eri_50101()
  })

  const eri_50102 = computed(() => {
    return calcular_eri_50102()
  })

  const eri_50103 = computed(() => {
    return calcular_eri_50103()
  })

  const eri_50104 = computed(() => {
    return calcular_eri_50104()
  })

  const eri_50105 = computed(() => {
    return calcular_eri_50105()
  })

  return (Number(eri_50101.value) + Number(eri_50102.value) + Number(eri_50103.value) + Number(eri_50104.value) + Number(eri_50105.value)).toFixed(2)
}

export const calcular_eri_50101 = () => {
  const reportStore = useReportStore()
  const activoscorrientes_ant = reportStore.getReportData("activoscorrientesifluc_ant", true)

  const costos = reportStore.getReportData("costosifluc")
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const eri_5010101 = computed(() => {
    return activoscorrientes_ant?.esf_1010306_ant
  })

  const eri_5010102 = computed(() => {
    return costos?.eri_5010102
  })

  const eri_5010103 = computed(() => {
    return costos?.eri_5010103
  })

  const eri_5010104 = computed(() => {
    return (activoscorrientes?.esf_1010306)  * -1
  })

  const eri_5010105 = computed(() => {
    return (activoscorrientes_ant?.esf_1010301_ant)
  })

  const eri_5010106 = computed(() => {
    return (costos?.eri_5010106)
  })

  const eri_5010107 = computed(() => {
    return (costos?.eri_5010107)
  })

  const eri_5010108 = computed(() => {
    return (activoscorrientes?.esf_1010301)  * -1
  })

  const eri_5010109 = computed(() => {
    return (activoscorrientes_ant?.esf_1010302_ant)
  })

  const eri_5010110 = computed(() => {
    return (costos?.eri_5010110)
  })

  const eri_5010111 = computed(() => {
    return (activoscorrientes_ant?.esf_1010305_ant)
  })

  const eri_5010112 = computed(() => {
    return (activoscorrientes?.esf_1010305)  * -1
  })

  return (Number(eri_5010101.value) + Number(eri_5010102.value) + Number(eri_5010103.value) + Number(eri_5010104.value) + Number(eri_5010105.value) + Number(eri_5010106.value) + Number(eri_5010107.value) + Number(eri_5010108.value) + Number(eri_5010109.value) + Number(eri_5010110.value) + Number(eri_5010111.value) + Number(eri_5010112.value)).toFixed(2)
}

export const calcular_eri_50102 = () => {
  const reportStore = useReportStore()
  const costos = reportStore.getReportData("costosifluc")

  const eri_5010201 = computed(() => {
    return costos?.eri_5010201
  })

  const eri_5010202 = computed(() => {
    return costos?.eri_5010202
  })

  return (Number(eri_5010201.value) + Number(eri_5010202.value)).toFixed(2)
}

export const calcular_eri_50103 = () => {
  const reportStore = useReportStore()
  const costos = reportStore.getReportData("costosifluc")

  const eri_5010301 = computed(() => {
    return costos?.eri_5010301
  })

  const eri_5010302 = computed(() => {
    return costos?.eri_5010302
  })

  return (Number(eri_5010301.value) + Number(eri_5010302.value)).toFixed(2)
}

export const calcular_eri_50104 = () => {
  const reportStore = useReportStore()
  const costos = reportStore.getReportData("costosifluc")

  const eri_5010401 = computed(() => {
    return costos?.eri_5010401
  })

  const eri_5010402 = computed(() => {
    return costos?.eri_5010402
  })

  const eri_5010403 = computed(() => {
    return costos?.eri_5010403
  })

  const eri_5010404 = computed(() => {
    return costos?.eri_5010404
  })

  const eri_5010405 = computed(() => {
    return costos?.eri_5010405
  })

  const eri_5010406 = computed(() => {
    return costos?.eri_5010406
  })

  const eri_5010407 = computed(() => {
    return costos?.eri_5010407
  })

  const eri_5010408 = computed(() => {
    return costos?.eri_5010408
  })

  return (Number(eri_5010401.value) + Number(eri_5010402.value) + Number(eri_5010403.value) + Number(eri_5010404.value) + Number(eri_5010405.value) + Number(eri_5010406.value) + Number(eri_5010407.value) + Number(eri_5010408.value)).toFixed(2)
}

export const calcular_eri_50105 = () => {
  const reportStore = useReportStore()
  const costos = reportStore.getReportData("costosifluc")

  const eri_5010501 = computed(() => {
    return costos?.eri_5010501
  })

  return (Number(eri_5010501.value)).toFixed(2)
}

export const  calcular_eri_502 = () => {
  const reportStore = useReportStore()

  const eri_50201 = ref(Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")).toFixed(2))

  const eri_50202 = ref(Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2))

  const eri_50203 = ref(Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2))

  const eri_50204 = ref(Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")).toFixed(2))

  return (Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value)).toFixed(2)
}

export const calcular_eri_50201 = () => {
  const reportStore = useReportStore()
  const gastosdeventas = reportStore.getReportData("gastosdeventasifluc")

  if (!gastosdeventas) {
    // console.warn("❌ Los datos aún no están disponibles.")
    return 0
  }

  const eri_5020120 = ref(0)
  const eri_5020121 = ref(0)
  const eri_5020122 = ref(0)
  const eri_5020123 = ref(0)

  const toNumber = v => Number(v || 0)

  const eri_5020101 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020101)
  })

  const eri_5020102 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020102)
  })

  const eri_5020103 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020103)
  })

  const eri_5020104 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020104)
  })

  const eri_5020105 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020105)
  })

  const eri_5020106 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020106)
  })

  const eri_5020107 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020107)
  })

  const eri_5020108 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020108)
  })

  const eri_5020109 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020109)
  })

  const eri_5020110 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020110)
  })

  const eri_5020111 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020111)
  })

  const eri_5020112 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020112)
  })

  const eri_5020113 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020113)
  })

  const eri_5020114 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020114)
  })

  const eri_5020115 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020115)
  })

  const eri_5020116 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020116)
  })

  const eri_5020117 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020117)
  })

  const eri_5020118 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020118)
  })

  const eri_5020119 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020119)
  })

  const eri_502012001 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012001)
  })

  const eri_502012002 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012002)
  })

  const eri_502012003 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012003)
  })

  // console.log('eri_5020101: ', eri_5020101.value)
  // console.log('eri_5020102: ', eri_5020102.value)
  // console.log('eri_5020103: ', eri_5020103.value)
  // console.log('eri_5020104: ', eri_5020104.value)
  // console.log('eri_5020105: ', eri_5020105.value)
  // console.log('eri_5020106: ', eri_5020106.value)
  // console.log('eri_5020107: ', eri_5020107.value)
  // console.log('eri_5020108: ', eri_5020108.value)
  // console.log('eri_5020109: ', eri_5020109.value)
  // console.log('eri_5020110: ', eri_5020110.value)
  // console.log('eri_5020111: ', eri_5020111.value)
  // console.log('eri_5020112: ', eri_5020112.value)
  // console.log('eri_5020113: ', eri_5020113.value)
  // console.log('eri_5020114: ', eri_5020114.value)
  // console.log('eri_5020115: ', eri_5020115.value)
  // console.log('eri_5020116: ', eri_5020116.value)
  // console.log('eri_5020117: ', eri_5020117.value)
  // console.log('eri_5020118: ', eri_5020118.value)
  // console.log('eri_5020119: ', eri_5020119.value)
  // console.log('eri_502012001: ', eri_502012001.value)
  // console.log('eri_502012002: ', eri_502012002.value)
  // console.log('eri_502012003: ', eri_502012003.value)

  eri_5020120.value = (Number(eri_502012001.value) + Number(eri_502012002.value) + Number(eri_502012003.value)).toFixed(2)
  // console.log('eri_5020120: ', eri_5020120.value)

  const eri_502012101 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012101)
  })

  const eri_502012102 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012102)
  })

  eri_5020121.value = (Number(eri_502012101.value) + Number(eri_502012102.value)).toFixed(2)
  // console.log('eri_5020121: ', eri_5020121.value)

  const eri_502012201 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012201)
  })

  const eri_502012202 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012202)
  })

  const eri_502012203 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012203)
  })

  const eri_502012204 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012204)
  })

  const eri_502012205 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012205)
  })

  const eri_502012206 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012206)
  })

  const eri_502012207 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012207)
  })

  eri_5020122.value = (Number(eri_502012201.value) + Number(eri_502012202.value) + Number(eri_502012203.value) + Number(eri_502012204.value) + Number(eri_502012205.value) + Number(eri_502012206.value) + Number(eri_502012207.value)).toFixed(2)
  // console.log('eri_5020122: ', eri_5020122.value)

  const eri_502012301 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012301)
  })

  const eri_502012302 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012302)
  })

  const eri_502012303 = computed(() => {
    return toNumber(gastosdeventas?.eri_502012303)
  })

  eri_5020123.value = (Number(eri_502012301.value) + Number(eri_502012302.value) + Number(eri_502012303.value)).toFixed(2)
  // console.log('eri_5020123: ', eri_5020123.value)

  const eri_5020124 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020124)
  })

  const eri_5020125 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020125)
  })

  const eri_5020126 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020126)
  })

  const eri_5020127 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020127)
  })

  const eri_5020128 = computed(() => {
    return toNumber(gastosdeventas?.eri_5020128)
  })

  return (Number(eri_5020101.value) + Number(eri_5020102.value) + Number(eri_5020103.value) + Number(eri_5020104.value) + Number(eri_5020105.value) + Number(eri_5020106.value) + Number(eri_5020107.value) + Number(eri_5020108.value) + Number(eri_5020109.value) + Number(eri_5020110.value) + Number(eri_5020111.value) + Number(eri_5020112.value) + Number(eri_5020113.value) + Number(eri_5020114.value) + Number(eri_5020115.value) + Number(eri_5020116.value) + Number(eri_5020117.value) + Number(eri_5020118.value) + Number(eri_5020119.value) + Number(eri_5020120.value) + Number(eri_5020121.value) + Number(eri_5020122.value) + Number(eri_5020123.value) + Number(eri_5020124.value) + Number(eri_5020125.value) + Number(eri_5020126.value) + Number(eri_5020127.value) + Number(eri_5020128.value)).toFixed(2)
}

export const calcular_eri_50202 = () => {
  const reportStore = useReportStore()
  const gastosadministrativos = reportStore.getReportData("gastosadministrativosifluc")

  const eri_5020221 = ref(0)
  const eri_5020222 = ref(0)
  const eri_5020223 = ref(0)
  const eri_5020224 = ref(0)

  const toNumber = v => Number(v || 0)

  const eri_5020201 = computed(() => { return toNumber(gastosadministrativos?.eri_5020201) })
  const eri_5020202 = computed(() => { return toNumber(gastosadministrativos?.eri_5020202) })
  const eri_5020203 = computed(() => { return toNumber(gastosadministrativos?.eri_5020203) })
  const eri_5020204 = computed(() => { return toNumber(gastosadministrativos?.eri_5020204) })
  const eri_5020205 = computed(() => { return toNumber(gastosadministrativos?.eri_5020205) })
  const eri_5020206 = computed(() => { return toNumber(gastosadministrativos?.eri_5020206) })
  const eri_5020207 = computed(() => { return toNumber(gastosadministrativos?.eri_5020207) })
  const eri_5020208 = computed(() => { return toNumber(gastosadministrativos?.eri_5020208) })
  const eri_5020209 = computed(() => { return toNumber(gastosadministrativos?.eri_5020209) })
  const eri_5020210 = computed(() => { return toNumber(gastosadministrativos?.eri_5020210) })
  const eri_5020211 = computed(() => { return toNumber(gastosadministrativos?.eri_5020211) })
  const eri_5020212 = computed(() => { return toNumber(gastosadministrativos?.eri_5020212) })
  const eri_5020213 = computed(() => { return toNumber(gastosadministrativos?.eri_5020213) })
  const eri_5020214 = computed(() => { return toNumber(gastosadministrativos?.eri_5020214) })
  const eri_5020215 = computed(() => { return toNumber(gastosadministrativos?.eri_5020215) })
  const eri_5020216 = computed(() => { return toNumber(gastosadministrativos?.eri_5020216) })
  const eri_5020217 = computed(() => { return toNumber(gastosadministrativos?.eri_5020217) })
  const eri_5020218 = computed(() => { return toNumber(gastosadministrativos?.eri_5020218) })
  const eri_5020219 = computed(() => { return toNumber(gastosadministrativos?.eri_5020219) })
  const eri_5020220 = computed(() => { return toNumber(gastosadministrativos?.eri_5020220) })
  const eri_502022101 = computed(() => { return toNumber(gastosadministrativos?.eri_502022101) })
  const eri_502022102 = computed(() => { return toNumber(gastosadministrativos?.eri_502022102) })
  const eri_502022103 = computed(() => { return toNumber(gastosadministrativos?.eri_502022103) })

  // console.log('eri_5020201: ', eri_5020201.value)
  // console.log('eri_5020202: ', eri_5020202.value)
  // console.log('eri_5020203: ', eri_5020203.value)
  // console.log('eri_5020204: ', eri_5020204.value)
  // console.log('eri_5020205: ', eri_5020205.value)
  // console.log('eri_5020206: ', eri_5020206.value)
  // console.log('eri_5020207: ', eri_5020207.value)
  // console.log('eri_5020208: ', eri_5020208.value)
  // console.log('eri_5020209: ', eri_5020209.value)
  // console.log('eri_5020210: ', eri_5020210.value)
  // console.log('eri_5020211: ', eri_5020211.value)
  // console.log('eri_5020212: ', eri_5020212.value)
  // console.log('eri_5020213: ', eri_5020213.value)
  // console.log('eri_5020214: ', eri_5020214.value)
  // console.log('eri_5020215: ', eri_5020215.value)
  // console.log('eri_5020216: ', eri_5020216.value)
  // console.log('eri_5020217: ', eri_5020217.value)
  // console.log('eri_5020218: ', eri_5020218.value)
  // console.log('eri_5020219: ', eri_5020219.value)
  // console.log('eri_5020220: ', eri_5020220.value)
  // console.log('eri_502022101: ', eri_502022101.value)
  // console.log('eri_502022102: ', eri_502022102.value)
  // console.log('eri_502022103: ', eri_502022103.value)

  eri_5020221.value = (Number(eri_502022101.value) + Number(eri_502022102.value) + Number(eri_502022103.value)).toFixed(2)

  const eri_502022201 = computed(() => { return toNumber(gastosadministrativos?.eri_502022201) })
  const eri_502022202 = computed(() => { return toNumber(gastosadministrativos?.eri_502022202) })

  eri_5020222.value = (Number(eri_502022201.value) + Number(eri_502022202.value)).toFixed(2)

  const eri_502022301 = computed(() => { return toNumber(gastosadministrativos?.eri_502022301) })
  const eri_502022302 = computed(() => { return toNumber(gastosadministrativos?.eri_502022302) })
  const eri_502022303 = computed(() => { return toNumber(gastosadministrativos?.eri_502022303) })
  const eri_502022304 = computed(() => { return toNumber(gastosadministrativos?.eri_502022304) })
  const eri_502022305 = computed(() => { return toNumber(gastosadministrativos?.eri_502022305) })
  const eri_502022306 = computed(() => { return toNumber(gastosadministrativos?.eri_502022306) })
  const eri_502022307 = computed(() => { return toNumber(gastosadministrativos?.eri_502022307) })

  eri_5020223.value = (Number(eri_502022301.value) + Number(eri_502022302.value) + Number(eri_502022303.value) + Number(eri_502022304.value) + Number(eri_502022305.value) + Number(eri_502022306.value) + Number(eri_502022307.value)).toFixed(2)

  const eri_502022401 = computed(() => { return toNumber(gastosadministrativos?.eri_502022401) })
  const eri_502022402 = computed(() => { return toNumber(gastosadministrativos?.eri_502022402) })
  const eri_502022403 = computed(() => { return toNumber(gastosadministrativos?.eri_502022403) })

  eri_5020224.value = (Number(eri_502022401.value) + Number(eri_502022402.value) + Number(eri_502022403.value)).toFixed(2)

  const eri_5020225 = computed(() => { return toNumber(gastosadministrativos?.eri_5020225) })
  const eri_5020226 = computed(() => { return toNumber(gastosadministrativos?.eri_5020226) })
  const eri_5020227 = computed(() => { return toNumber(gastosadministrativos?.eri_5020227) })
  const eri_5020228 = computed(() => { return toNumber(gastosadministrativos?.eri_5020228) })
  const eri_5020229 = computed(() => { return toNumber(gastosadministrativos?.eri_5020229) })

  return (Number(eri_5020201.value) + Number(eri_5020202.value) + Number(eri_5020203.value) + Number(eri_5020204.value) + Number(eri_5020205.value) + Number(eri_5020206.value) + Number(eri_5020207.value) + Number(eri_5020208.value) + Number(eri_5020209.value) + Number(eri_5020210.value) + Number(eri_5020211.value) + Number(eri_5020212.value) + Number(eri_5020213.value) + Number(eri_5020214.value) + Number(eri_5020215.value) + Number(eri_5020216.value) + Number(eri_5020217.value) + Number(eri_5020218.value) + Number(eri_5020219.value) + Number(eri_5020220.value) + Number(eri_5020221.value) + Number(eri_5020222.value) + Number(eri_5020223.value) + Number(eri_5020224.value) + Number(eri_5020225.value) + Number(eri_5020226.value) + Number(eri_5020227.value) + Number(eri_5020228.value) + Number(eri_5020229.value)).toFixed(2)
}

export const calcular_eri_50203 = () => {
  const reportStore = useReportStore()
  const gastosfinancieros = reportStore.getReportData("gastosfinancierosifluc")

  const eri_5020301 = ref(0)
  const eri_5020302 = ref(0)
  const eri_5020303 = ref(0)
  const eri_5020304 = ref(0)
  const eri_5020305 = ref(0)

  const toNumber = v => Number(v || 0)

  const eri_502030101 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030101)
  })

  const eri_502030102 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030102)
  })

  const eri_502030103 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030103)
  })

  const eri_502030104 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030104)
  })

  // console.log('eri_502030101: ', eri_502030101.value)
  // console.log('eri_502030102: ', eri_502030102.value)
  // console.log('eri_502030103: ', eri_502030103.value)
  // console.log('eri_502030104: ', eri_502030104.value)

  eri_5020301.value = (Number(eri_502030101.value) + Number(eri_502030102.value) + Number(eri_502030103.value) + Number(eri_502030104.value)).toFixed(2)

  // console.log('eri_5020301: ', eri_5020301.value)

  const eri_50203020101 = computed(() => {
    return toNumber(gastosfinancieros?.eri_50203020101)
  })

  const eri_50203020103 = computed(() => {
    return toNumber(gastosfinancieros?.eri_50203020103)
  })

  const eri_50203020104 = computed(() => {
    return toNumber(gastosfinancieros?.eri_50203020104)
  })

  const eri_50203020105 = computed(() => {
    return toNumber(gastosfinancieros?.eri_50203020105)
  })

  const eri_50203020106 = computed(() => {
    return toNumber(gastosfinancieros?.eri_50203020106)
  })

  // console.log('eri_50203020101: ', eri_50203020101.value)
  // console.log('eri_50203020103: ', eri_50203020103.value)
  // console.log('eri_50203020104: ', eri_50203020104.value)
  // console.log('eri_50203020105: ', eri_50203020105.value)
  // console.log('eri_50203020106: ', eri_50203020106.value)

  eri_5020302.value = (Number(eri_50203020101.value) + Number(eri_50203020103.value) + Number(eri_50203020104.value) + Number(eri_50203020105.value) + Number(eri_50203020106.value)).toFixed(2)

  // console.log('eri_5020302: ', eri_5020302.value)

  const eri_502030301 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030301)
  })

  const eri_502030302 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030302)
  })

  const eri_502030303 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030303)
  })

  const eri_502030304 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030304)
  })

  const eri_502030305 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030305)
  })

  const eri_502030306 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030306)
  })

  const eri_502030307 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030307)
  })

  const eri_502030308 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030308)
  })

  // console.log('eri_502030301: ', eri_502030301.value)
  // console.log('eri_502030302: ', eri_502030302.value)
  // console.log('eri_502030303: ', eri_502030303.value)
  // console.log('eri_502030304: ', eri_502030304.value)
  // console.log('eri_502030305: ', eri_502030305.value)
  // console.log('eri_502030306: ', eri_502030306.value)
  // console.log('eri_502030307: ', eri_502030307.value)
  // console.log('eri_502030308: ', eri_502030308.value)

  eri_5020303.value = (Number(eri_502030301.value) + Number(eri_502030302.value) + Number(eri_502030303.value) + Number(eri_502030304.value) + Number(eri_502030305.value) + Number(eri_502030306.value) + Number(eri_502030307.value) + Number(eri_502030308.value)).toFixed(2)

  // console.log('eri_5020303: ', eri_5020303.value)

  const eri_502030401 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030401)
  })

  const eri_502030402 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030402)
  })

  const eri_502030403 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030403)
  })

  const eri_502030404 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030404)
  })

  // console.log('eri_502030401: ', eri_502030401.value)
  // console.log('eri_502030402: ', eri_502030402.value)
  // console.log('eri_502030403: ', eri_502030403.value)
  // console.log('eri_502030404: ', eri_502030404.value)

  eri_5020304.value = (Number(eri_502030401.value) + Number(eri_502030402.value) + Number(eri_502030403.value) + Number(eri_502030404.value)).toFixed(2)

  // console.log('eri_5020304: ', eri_5020304.value)

  const eri_502030501 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030501)
  })

  const eri_502030502 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030502)
  })

  const eri_502030503 = computed(() => {
    return toNumber(gastosfinancieros?.eri_502030503)
  })

  const eri_502030504 =computed(() => {
    return toNumber(gastosfinancieros?.eri_502030504)
  })

  // console.log('eri_502030501: ', eri_502030501.value)
  // console.log('eri_502030502: ', eri_502030502.value)
  // console.log('eri_502030503: ', eri_502030503.value)
  // console.log('eri_502030504: ', eri_502030504.value)

  eri_5020305.value = (Number(eri_502030501.value) + Number(eri_502030502.value) + Number(eri_502030503.value) + Number(eri_502030504.value)).toFixed(2)

  // console.log('eri_5020305: ', eri_5020305.value)

  const eri_5020306 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020306)
  })

  const eri_5020307 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020307)
  })

  const eri_5020308 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020308)
  })

  const eri_5020309 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020309)
  })

  const eri_5020310 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020310)
  })

  const eri_5020311 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020311)
  })

  const eri_5020312 = computed(() => {
    return toNumber(gastosfinancieros?.eri_5020312)
  })

  // console.log('eri_5020306: ', eri_5020306.value)
  // console.log('eri_5020307: ', eri_5020307.value)
  // console.log('eri_5020308: ', eri_5020308.value)
  // console.log('eri_5020309: ', eri_5020309.value)
  // console.log('eri_5020310: ', eri_5020310.value)
  // console.log('eri_5020311: ', eri_5020311.value)
  // console.log('eri_5020312: ', eri_5020312.value)

  // console.log('eri_50203: ', (Number(eri_5020301.value) + Number(eri_5020302.value) + Number(eri_5020303.value) + Number(eri_5020304.value) + Number(eri_5020305.value) + Number(eri_5020306.value) + Number(eri_5020307.value) + Number(eri_5020308.value) + Number(eri_5020309.value) + Number(eri_5020310.value) + Number(eri_5020311.value) + Number(eri_5020312.value)).toFixed(2))

  return (Number(eri_5020301.value) + Number(eri_5020302.value) + Number(eri_5020303.value) + Number(eri_5020304.value) + Number(eri_5020305.value) + Number(eri_5020306.value) + Number(eri_5020307.value) + Number(eri_5020308.value) + Number(eri_5020309.value) + Number(eri_5020310.value) + Number(eri_5020311.value) + Number(eri_5020312.value)).toFixed(2)
}

export const  calcular_eri_50204 = () => {
  const reportStore = useReportStore()
  const otrosgastos = reportStore.getReportData("otrosgastosifluc")

  let eri_5020401 = computed(() => {
    return otrosgastos?.eri_5020401
  })

  let eri_5020402 = computed(() => {
    return otrosgastos?.eri_5020402
  })

  return (Number(eri_5020401.value) + Number(eri_5020402.value)).toFixed(2)
}

export const calcular_eri_600 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")
  const costos = reportStore.getReportData("costosifluc")

  const eri_401 = computed(() => {
    return ingresos?.eri_401
  })
  // console.log('eri_401: ', eri_401.value)

  const eri_501 = computed(() => {
    return costos?.eri_501
  })
  // console.log('eri_501: ', eri_501.value)

  const eri_50201 = computed(() => {
    return calcular_eri_50201()
  })
  // console.log('eri_50201: ', eri_50201.value)

  const eri_50202 = computed(() => {
    return calcular_eri_50202()
  })
  // console.log('eri_50202: ', eri_50202.value)

  const eri_50203 = computed(() => {
    return calcular_eri_50203()
  })
  // console.log('eri_50203: ', eri_50203.value)

  const eri_50204 = computed(() => {
    return calcular_eri_50204()
  })
  // console.log('eri_50204: ', eri_50204.value)

  const eri_403 = computed(() => {
    return calcular_eri_403()
  })
  // console.log('eri_403: ', eri_403.value)

  // console.log(((Number(eri_401.value - eri_501.value) - (Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value))) + Number(eri_403.value)).toFixed(2))

  return ((Number(eri_401.value - eri_501.value) - (Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value))) + Number(eri_403.value)).toFixed(2)
}

export const calcular_eri_602 = () => {
  const reportStore = useReportStore()
  const resultados = reportStore.getReportData("resultadosifluc")

  const eri_600 = computed(() => {
    return calcular_eri_600()
  })
  // console.log('eri_600: ', eri_600.value)

  const eri_601 = computed(() => {
    return resultados?.eri_601
  })
  // console.log('eri_601: ', eri_601.value)

  return (Number(eri_600.value) + Number(eri_601.value)).toFixed(2)
}

export const calcular_eri_604 = () => {
  const reportStore = useReportStore()
  const resultados = reportStore.getReportData("resultadosifluc")

  const eri_602 = computed(() => {
    return calcular_eri_602()
  })
  // console.log('eri_602: ', eri_602.value)

  const eri_603 = computed(() => {
    return resultados?.eri_603
  })
  // console.log('eri_603: ', eri_603.value)

  return (Number(eri_602.value) + Number(eri_603.value)).toFixed(2)
}

export const calcular_eri_607 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")
  const costos = reportStore.getReportData("costosifluc")
  const gastosdeventas = reportStore.getReportData("gastosdeventasifluc")
  const gastosadministrativos = reportStore.getReportData("gastosadministrativosifluc")
  const gastosfinancieros = reportStore.getReportData("gastosfinancierosifluc")
  const otrosgastos = reportStore.getReportData("otrosgastosifluc")
  const resultados = reportStore.getReportData("resultadosifluc")

  const eri_401 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_401")).toFixed(2)
  })

  const eri_403 = computed(() => {
    return calcular_eri_403()
  })

  const eri_501 = computed(() => {
    return Number(reportStore.getSingleReportValue("costosifluc", "eri_501")).toFixed(2)
  })

  const eri_50201 = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")).toFixed(2)
  })

  const eri_50202 = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")).toFixed(2)
  })

  const eri_50203 = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203")).toFixed(2)
  })

  const eri_50204 = computed(() => {
    return Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")).toFixed(2)
  })

  const eri_601 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
  })

  const eri_603 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const eri_605 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_605")).toFixed(2)
  })

  const eri_606 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_606")).toFixed(2)
  })

  const gastoscalculados = (Number(eri_501.value) + Number(eri_50201.value) + Number(eri_50202.value) + Number(eri_50203.value) + Number(eri_50204.value))

  const totalimpuestos = Number(eri_601.value) + Number(eri_603.value) + Number(eri_605.value) + Number(eri_606.value)

  return (Number(eri_401.value) - gastoscalculados + Number(eri_403.value) + totalimpuestos).toFixed(2)
}

export const calcular_eri_702 = () => {
  const reportStore = useReportStore()
  const operacionesdiscontinuadasifluc = reportStore.getReportData("operacionesdiscontinuadasifluc")

  const eri_700 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_700
  })

  const eri_701 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_701
  })

  return (Number(eri_700.value) + Number(eri_701.value)).toFixed(2)
}

export const calcular_eri_704 = () => {
  const reportStore = useReportStore()
  const operacionesdiscontinuadasifluc = reportStore.getReportData("operacionesdiscontinuadasifluc")

  const eri_702 = computed(() => {
    return calcular_eri_702()
  })

  const eri_703 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_703
  })

  return (Number(eri_702.value) + Number(eri_703.value)).toFixed(2)
}

export const calcular_eri_706 = () => {
  const reportStore = useReportStore()
  const operacionesdiscontinuadasifluc = reportStore.getReportData("operacionesdiscontinuadasifluc")

  const eri_704 = computed(() => {
    return calcular_eri_704()
  })

  const eri_705 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_705
  })

  return (Number(eri_704.value) + Number(eri_705.value)).toFixed(2)
}

export const calcular_eri_707 = () => {
  const reportStore = useReportStore()
  const operacionesdiscontinuadasifluc = reportStore.getReportData("operacionesdiscontinuadasifluc")

  const eri_702 = ref(0)
  const eri_704 = ref(0)
  const eri_706 = ref(0)
  const eri_607 = ref(calcular_eri_607())

  const eri_701 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_701
  })

  const eri_700 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_700
  })

  eri_702.value = (Number(eri_700.value) + Number(eri_701.value)).toFixed(2)

  const eri_703 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_703
  })

  eri_704.value = (Number(eri_702.value) + Number(eri_703.value)).toFixed(2)

  const eri_705 = computed(() => {
    return operacionesdiscontinuadasifluc?.eri_705
  })

  eri_706.value = (Number(eri_704.value) + Number(eri_705.value)).toFixed(2)

  return (Number(eri_706.value) + Number(eri_607.value)).toFixed(2)

}

export const calcular_eri_800 = () => {
  const reportStore = useReportStore()
  const otrosresultadosintegral = reportStore.getReportData("otrosresultadosintegralifluc")

  const eri_80001 =computed(() => {
    return otrosresultadosintegral?.eri_80001
  })

  const eri_80002 = computed(() => {
    return otrosresultadosintegral?.eri_80002
  })

  const eri_80003 = computed(() => {
    return otrosresultadosintegral?.eri_80003
  })

  const eri_80004 = computed(() => {
    return otrosresultadosintegral?.eri_80004
  })

  const eri_80005 = computed(() => {
    return otrosresultadosintegral?.eri_80005
  })

  const eri_80006 = computed(() => {
    return otrosresultadosintegral?.eri_80006
  })

  const eri_80007 = computed(() => {
    return otrosresultadosintegral?.eri_80007
  })

  const eri_80008 = computed(() => {
    return otrosresultadosintegral?.eri_80008
  })

  const eri_80009 = computed(() => {
    return otrosresultadosintegral?.eri_80009
  })

  return (Number(eri_80001.value) + Number(eri_80002.value) + Number(eri_80003.value) + Number(eri_80004.value) + Number(eri_80005.value) + Number(eri_80006.value) + Number(eri_80007.value) + Number(eri_80008.value) + Number(eri_80009.value)).toFixed(2)
}

export const calcular_eri_801 = () => {
  const eri_707 = computed(() => {
    return calcular_eri_707()
  })

  const eri_800 = computed(() => {
    return calcular_eri_800()
  })

  return (Number(eri_707.value) + Number(eri_800.value)).toFixed(2)
}

export const calcular_95 = () => {
  const efe_md_9501 = computed(() => {
    return calcular_9501()
  })

  const efe_md_9502 = computed(() => {
    return calcular_9502()
  })

  const efe_md_9503 = computed(() => {
    return calcular_9503()
  })

  return (Number(efe_md_9501.value) + Number(efe_md_9502.value) + Number(efe_md_9503.value)).toFixed(2)
}

export const calcular_9501 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")
  const movperdidasacumuladascuentasincobrablesydeterioro = reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro")
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")
  const actividadesdeoperacion = reportStore.getReportData("actividadesdeoperacionifluc")
  const costos = reportStore.getReportData("costosifluc")
  const movperdidasacumuladasvalornetorealizacion = reportStore.getReportData("movperdidasacumuladasvalornetorealizacion")
  const gastosdeventas = reportStore.getReportData("gastosdeventasifluc")
  const gastosadministrativos = reportStore.getReportData("gastosadministrativosifluc")
  const gastosfinancieros = reportStore.getReportData("gastosfinancierosifluc")
  const pasivoscorrientes = reportStore.getReportData("pasivoscorrientesifluc")
  const resultados = reportStore.getReportData("resultadosifluc")
  const otros = reportStore.getReportData("otros")
  const movpropiedadesplantasyequipos = reportStore.getReportData("movpropiedadesplantasyequipos")
  const movintangibles = reportStore.getReportData("movintangibles")
  const activosfinancieroslargoplazo = reportStore.getReportData("activosfinancieroslargoplazo")
  const movpropiedadesdeinversion = reportStore.getReportData("movpropiedadesdeinversion")
  const movactivosbiologicos = reportStore.getReportData("movactivosbiologicos")
  const movjubilacionpatronal = reportStore.getReportData("movjubilacionpatronal")
  const deshaucio = reportStore.getReportData("movjubilacionpatronal")
  const otrosgastos = reportStore.getReportData("otrosgastosifluc")
  const conciliacionganancianeta = reportStore.getReportData("conciliacionganancianetaifluc")

  const activoscorrientes_ant = reportStore.getReportData("activoscorrientesifluc_ant", true)
  const pasivoscorrientes_ant = reportStore.getReportData("pasivoscorrientesifluc_ant", true)

  const efe_md_950101 = ref(0)
  const efe_md_950105 = ref(0)
  const efe_md_950102 = ref(0)
  const efe_md_95010102 = ref(0)
  const efe_md_95010101 = ref(0)
  const efe_md_95010201 = ref(0)
  const efe_md_95010203 = ref(0)
  const efe_md_950107 = ref(0)
  const efe_md_950108 = ref(0)

  const efe_md_9501010101 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40101")).toFixed(2)
  })

  const efe_md_9501010102 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40102")).toFixed(2)
  })

  const efe_md_9501010103 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40103")).toFixed(2)
  })

  const efe_md_9501010104 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40112")).toFixed(2)
  })

  const efe_md_9501010105 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40113")).toFixed(2)
  })

  const efe_md_9501010106 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40114")).toFixed(2)
  })

  const efe_md_9501010107 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40115")).toFixed(2)
  })

  const efe_md_9501010108 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40116")).toFixed(2)
  })

  const efe_md_9501010109 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010205")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010205_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010110 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010111 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010112 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")).toFixed(2)
  })

  const efe_md_9501010113 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")).toFixed(2)
  })

  const efe_md_9501010114 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")).toFixed(2)
  })

  const efe_md_9501010115 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010116 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010117 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })


  const efe_md_9501010118 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010119 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010120 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501010121 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  efe_md_95010101.value = (Number(efe_md_9501010101.value) + Number(efe_md_9501010102.value) + Number(efe_md_9501010103.value) + Number(efe_md_9501010104.value) + Number(efe_md_9501010105.value) + Number(efe_md_9501010106.value) + Number(efe_md_9501010107.value) + Number(efe_md_9501010108.value) + Number(efe_md_9501010109.value) + Number(efe_md_9501010110.value) + Number(efe_md_9501010111.value) + Number(efe_md_9501010112.value) + Number(efe_md_9501010113.value) + Number(efe_md_9501010114.value) + Number(efe_md_9501010115.value) + Number(efe_md_9501010116.value) + Number(efe_md_9501010117.value) + Number(efe_md_9501010118.value) + Number(efe_md_9501010119.value) + Number(efe_md_9501010120.value) + Number(efe_md_9501010121.value)).toFixed(2)

  const efe_md_9501010201 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40104")).toFixed(2)
  })

  const efe_md_9501010202 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40105")).toFixed(2)
  })

  const efe_md_9501010203 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40106")).toFixed(2)
  })

  const efe_md_9501010204 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40108")).toFixed(2)
  })

  const efe_md_9501010205 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40109")).toFixed(2)
  })

  const efe_md_9501010206 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40110")).toFixed(2)
  })

  const efe_md_9501010207 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  efe_md_95010102.value = (Number(efe_md_9501010201.value) + Number(efe_md_9501010202.value) + Number(efe_md_9501010203.value) + Number(efe_md_9501010204.value) + Number(efe_md_9501010205.value) + Number(efe_md_9501010206.value) + Number(efe_md_9501010207.value)).toFixed(2)

  const efe_md_95010103 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010103).toFixed(2)
  })

  const efe_md_95010104 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010104).toFixed(2)
  })

  const efe_md_95010105 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010105).toFixed(2)
  })

  efe_md_950101.value = (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)

  const efe_md_9501020101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("costosifluc", "eri_501")) * -1).toFixed(2)
  })

  const efe_md_9501020102 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501020103 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020104 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020105 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020106 = computed(() => {
    return (Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")) * -1).toFixed(2)
  })

  const efe_md_9501020107 = computed(() => {
    return (Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")) * -1).toFixed(2)
  })

  const efe_md_9501020108 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501020109 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020110 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020111 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020112 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_9501020113 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_9501020114 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020115 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020116 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020117 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
  })

  const efe_md_9501020118 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const efe_md_9501020119 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020120 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020121 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020122 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020123 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020124 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020125 = computed(() => {
    return (Number(reportStore.getSingleReportValue("otros", "mov_islr_pagos")) * -1).toFixed(2)
  })

  const efe_md_9501020126 = computed(() => {
    return (Number(reportStore.getSingleReportValue("otros", "mov_pt_pagos")) * -1).toFixed(2)
  })

  const efe_md_9501020127 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
  })

  const efe_md_9501020128 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020129 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
  })

  const efe_md_9501020130 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
  })

  const efe_md_9501020131 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_9501020132 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_9501020133 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
  })

  const efe_md_9501020134 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_9501020135 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_9501020136 = computed(() => {
    return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
  })

  const efe_md_9501020137 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020138 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020139 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
  })

  const efe_md_9501020140 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
  })

  const efe_md_9501020141 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020142 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020143 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020144 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020145 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
  })

  const efe_md_9501020146 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
  })

  const efe_md_9501020147 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
  })

  const efe_md_9501020148 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
  })

  const efe_md_9501020149 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_9501020150 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_9501020151 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
  })

  const efe_md_9501020152 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_9501020153 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_9501020154 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_9501020155 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
  })

  const efe_md_9501020156 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
  })

  efe_md_95010201.value = (Number(efe_md_9501020101.value) + Number(efe_md_9501020102.value) + Number(efe_md_9501020103.value) + Number(efe_md_9501020104.value) + Number(efe_md_9501020105.value) + Number(efe_md_9501020106.value) + Number(efe_md_9501020107.value) + Number(efe_md_9501020108.value) + Number(efe_md_9501020109.value) + Number(efe_md_9501020110.value) + Number(efe_md_9501020111.value) + Number(efe_md_9501020112.value) + Number(efe_md_9501020113.value) + Number(efe_md_9501020114.value) + Number(efe_md_9501020115.value) + Number(efe_md_9501020116.value) + Number(efe_md_9501020117.value) + Number(efe_md_9501020118.value) + Number(efe_md_9501020119.value) + Number(efe_md_9501020120.value) + Number(efe_md_9501020121.value) + Number(efe_md_9501020122.value) + Number(efe_md_9501020123.value) + Number(efe_md_9501020124.value) + Number(efe_md_9501020125.value) + Number(efe_md_9501020126.value) + Number(efe_md_9501020127.value) + Number(efe_md_9501020128.value) + Number(efe_md_9501020129.value) + Number(efe_md_9501020130.value) + Number(efe_md_9501020131.value) + Number(efe_md_9501020132.value) + Number(efe_md_9501020133.value) + Number(efe_md_9501020134.value) + Number(efe_md_9501020135.value) + Number(efe_md_9501020136.value) + Number(efe_md_9501020137.value) + Number(efe_md_9501020138.value) + Number(efe_md_9501020139.value) + Number(efe_md_9501020140.value) + Number(efe_md_9501020141.value) + Number(efe_md_9501020142.value) + Number(efe_md_9501020143.value) + Number(efe_md_9501020144.value) + Number(efe_md_9501020145.value) + Number(efe_md_9501020146.value) + Number(efe_md_9501020147.value) + Number(efe_md_9501020148.value) + Number(efe_md_9501020149.value) + Number(efe_md_9501020150.value) + Number(efe_md_9501020151.value) + Number(efe_md_9501020152.value) + Number(efe_md_9501020153.value) + Number(efe_md_9501020154.value) + Number(efe_md_9501020155.value) + Number(efe_md_9501020156.value)).toFixed(2)

  const efe_md_95010202 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010202)
  })

  const efe_md_9501020301 = computed(() => {
    return Number(resultados?.eri_601)
  })

  const efe_md_9501020302 = computed(() => {
    return Number(resultados?.eri_601) * -1
  })

  const efe_md_9501020303 = computed(() => {
    return Number(otros?.mov_pt_pagos)
  })

  efe_md_95010203.value = (Number(efe_md_9501020301.value) + Number(efe_md_9501020302.value) + Number(efe_md_9501020303.value)).toFixed(2)

  const efe_md_95010204 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010204)
  })

  const efe_md_95010205 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_95010205)
  })

  efe_md_950102.value = (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)

  const efe_md_950103 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_950103)
  })

  const efe_md_950104 = computed(() => {
    return Number(ingresos?.eri_40107)
  })

  const efe_md_95010501 = computed(() => {
    return Number(gastosfinancieros?.eri_50203) * -1
  })

  const efe_md_95010502 = computed(() => {
    return Number(activosfinancieroslargoplazo?.mov_interesactualizacionantiguasinv) * -1
  })

  const efe_md_95010503 = computed(() => {
    return Number(activosfinancieroslargoplazo?.mov_ajustes) * -1
  })

  efe_md_950105.value = (Number(efe_md_95010501.value) + Number(efe_md_95010502.value) + Number(efe_md_95010503.value)).toFixed(2)

  const efe_md_950106 = computed(() => {
    return Number(actividadesdeoperacion?.efe_md_950106)
  })

  const efe_md_95010701 = computed(() => {
    return Number(resultados?.eri_603)
  })

  const efe_md_95010702 =  computed(() => {
    return Number(resultados?.eri_603) * -1
  })

  const efe_md_95010703 = computed(() => {
    return Number(otros?.mov_islr_pagos)
  })

  efe_md_950107.value = (Number(efe_md_95010701.value) + Number(efe_md_95010702.value) + Number(efe_md_95010703.value)).toFixed(2)

  const efe_md_95010801  =  computed(() => {
    return Number(otrosgastos?.eri_50204) * -1
  })

  const efe_md_95010802 = computed(() => {
    return calcular_eri_403()
  })

  const efe_md_95010809 = computed(() => {
    return Number(conciliacionganancianeta?.efe_md_9703)
  })

  const efe_md_95010810 = computed(() => {
    return Number(conciliacionganancianeta?.efe_md_9704)
  })

  efe_md_950108.value = (Number(efe_md_95010801.value) + Number(efe_md_95010802.value) + Number(efe_md_95010809.value) + Number(efe_md_95010810.value)).toFixed(2)

  return (Number(efe_md_950101.value) + Number(efe_md_950102.value) + Number(efe_md_950103.value) + Number(efe_md_950104.value) + Number(efe_md_950105.value) + Number(efe_md_950106.value) + Number(efe_md_950107.value) + Number(efe_md_950108.value)).toFixed(2)

}

export const calcular_950101 = () => {
  const reportStore = useReportStore()

  const efe_md_95010101 = computed(() => {
    return calcular_95010101()
  })

  const efe_md_95010102 = computed(() => {
    return calcular_95010102()
  })

  const efe_md_95010103 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010103")).toFixed(2)
  })

  const efe_md_95010104 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010104")).toFixed(2)
  })

  const efe_md_95010105 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010105")).toFixed(2)
  })

  return (Number(efe_md_95010101.value) + Number(efe_md_95010102.value) + Number(efe_md_95010103.value) + Number(efe_md_95010104.value) + Number(efe_md_95010105.value)).toFixed(2)
}

export const calcular_950102 = () => {
  const reportStore = useReportStore()

  const efe_md_95010201 = computed(() => {
    return calcular_95010201()
  })

  const efe_md_95010202 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010202")).toFixed(2)
  })

  const efe_md_95010203 = computed(() => {
    return calcular_95010203()
  })

  const efe_md_95010204 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010204")).toFixed(2)
  })

  const efe_md_95010205 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010205")).toFixed(2)
  })

  return (Number(efe_md_95010201.value) + Number(efe_md_95010202.value) + Number(efe_md_95010203.value) + Number(efe_md_95010204.value) + Number(efe_md_95010205.value)).toFixed(2)
}

export const calcular_950104 = () => {
  const reportStore = useReportStore()

  const efe_md_95010401 = computed(() => {
    return Number(reportStore.getSingleReportValue("ingresosifluc", "eri_40107")).toFixed(2)
  })

  return (Number(efe_md_95010401.value)).toFixed(2)
}

export const calcular_950105 = () => {
  const reportStore = useReportStore()

  const efe_md_95010501 = computed(() => {
    return Number(reportStore.getSingleReportValue("gastosfinancierosifluc", "eri_50203") * -1).toFixed(2)
  })

  const efe_md_95010502 = computed(() => {
    return Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv") * -1).toFixed(2)
  })

  const efe_md_95010503 = computed(() => {
    return Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes") * -1).toFixed(2)
  })

  return (Number(efe_md_95010501.value) + Number(efe_md_95010502.value) + Number(efe_md_95010503.value)).toFixed(2)
}

export const calcular_950107 = () => {
  const reportStore = useReportStore()

  const efe_md_95010701 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const efe_md_95010702 = computed(() => {
    return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")) * -1).toFixed(2)
  })

  const efe_md_95010703 = computed(() => {
    return Number(reportStore.getSingleReportValue("otros", "mov_islr_pagos")).toFixed(2)
  })

  return (Number(efe_md_95010701.value) + Number(efe_md_95010702.value) + Number(efe_md_95010703.value)).toFixed(2)
}

export const calcular_950108 = () => {
  const reportStore = useReportStore()

  const efe_md_95010801 = computed(() => {
    return (Number(reportStore.getSingleReportValue("otrosgastosifluc", "eri_50204")) * -1).toFixed(2)
  })

  const efe_md_95010802 = computed(() => {
    return Number(reportStore.getSingleReportValue("otrosingresosifluc", "eri_403")).toFixed(2)
  })

  const efe_md_95010803 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010803")).toFixed(2)
  })

  const efe_md_95010804 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010804")).toFixed(2)
  })

  const efe_md_95010805 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010805")).toFixed(2)
  })

  const efe_md_95010806 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010806")).toFixed(2)
  })

  const efe_md_95010807 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010807")).toFixed(2)
  })

  const efe_md_95010808 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010808")).toFixed(2)
  })

  const efe_md_95010809 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9703")).toFixed(2)
  })

  const efe_md_95010810 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9704")).toFixed(2)
  })

  const efe_md_95010811 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010811")).toFixed(2)
  })

  const efe_md_95010812 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010812")).toFixed(2)
  })

  const efe_md_95010813 = computed(() => {
    return Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010813")).toFixed(2)
  })

  return (Number(efe_md_95010801.value) + Number(efe_md_95010802.value) + Number(efe_md_95010803.value) + Number(efe_md_95010804.value) + Number(efe_md_95010805.value) + Number(efe_md_95010806.value) + Number(efe_md_95010807.value) + Number(efe_md_95010808.value) + Number(efe_md_95010809.value) + Number(efe_md_95010810.value) + Number(efe_md_95010811.value) + Number(efe_md_95010812.value) + Number(efe_md_95010813.value)).toFixed(2)
}

export const calcular_950221 = () => {
  const reportStore = useReportStore()
  const pasivosnocorrientes_ant = reportStore.getReportData("pasivosnocorrientesifluc_ant", true)
  const activosnocorrientes_ant = reportStore.getReportData("activosnocorrientesifluc_ant", true)

  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")
  const pasivosnocorrientes = reportStore.getReportData("pasivosnocorrientesifluc")

  const efe_md_95022101 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10207) - Number(activosnocorrientes_ant?.esf_10207_ant))  * -1).toFixed(2)
  })

  const efe_md_95022102 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10208) - Number(activosnocorrientes_ant?.esf_10208_ant))  * -1).toFixed(2)
  })

  const efe_md_95022103 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10209) - Number(activosnocorrientes_ant?.esf_10209_ant))  * -1).toFixed(2)
  })

  const efe_md_95022104 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10210) - Number(activosnocorrientes_ant?.esf_10210_ant))  * -1).toFixed(2)
  })

  const efe_md_95022105 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20202) - Number(pasivosnocorrientes_ant?.esf_20202_ant)).toFixed(2)
  })

  const efe_md_95022106 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20204) - Number(pasivosnocorrientes_ant?.esf_20204_ant)).toFixed(2)
  })

  const efe_md_95022107 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20206) - Number(pasivosnocorrientes_ant?.esf_20206_ant)).toFixed(2)
  })

  const efe_md_95022108 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20208) - Number(pasivosnocorrientes_ant?.esf_20208_ant)).toFixed(2)
  })

  const efe_md_95022109 = computed(() => {
    return ((Number(pasivosnocorrientes?.esf_20209) - Number(pasivosnocorrientes_ant?.esf_20209_ant)) - (Number(pasivosnocorrientes?.esf_2020902) - Number(pasivosnocorrientes_ant?.esf_2020902_ant))).toFixed(2)
  })

  const efe_md_95022110 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20210) - Number(pasivosnocorrientes_ant?.esf_20210_ant)).toFixed(2)
  })

  return (Number(efe_md_95022101.value) + Number(efe_md_95022102.value) + Number(efe_md_95022103.value) + Number(efe_md_95022104.value) + Number(efe_md_95022105.value) + Number(efe_md_95022106.value) + Number(efe_md_95022107.value) + Number(efe_md_95022108.value) + Number(efe_md_95022109.value) + Number(efe_md_95022110.value)).toFixed(2)

}

export const calcular_9502 = () => {
  const reportStore = useReportStore()
  const actividadesdeinversion = reportStore.getReportData("actividadesdeinversionifluc")
  const activosfinancieroslargoplazo = reportStore.getReportData("activosfinancieroslargoplazo")
  const movpropiedadesplantasyequipos = reportStore.getReportData("movpropiedadesplantasyequipos")
  const movintangibles = reportStore.getReportData("movintangibles")
  const movpropiedadesdeinversion = reportStore.getReportData("movpropiedadesdeinversion")
  const movactivosbiologicos = reportStore.getReportData("movactivosbiologicos")
  const activosnocorrientes = reportStore.getReportData("activosnocorrientesifluc")
  const pasivosnocorrientes = reportStore.getReportData("pasivosnocorrientesifluc")

  const activosnocorrientes_ant = reportStore.getReportData("activosnocorrientesifluc_ant", true)
  const pasivosnocorrientes_ant = reportStore.getReportData("pasivosnocorrientesifluc_ant", true)

  const efe_md_950201 = computed(() => Number(actividadesdeinversion?.efe_md_950201).toFixed(2))

  const efe_md_950202 = computed(() => Number(actividadesdeinversion?.efe_md_950202).toFixed(2))

  const efe_md_950203 = computed(() => Number(actividadesdeinversion?.efe_md_950203).toFixed(2))

  const efe_md_950204 = computed(() => Number(actividadesdeinversion?.efe_md_950204).toFixed(2))

  const efe_md_950205 = computed(() => {
    return Number((activosfinancieroslargoplazo?.mov_nuevasinversiones) * -1).toFixed(2)
  })

  const efe_md_950206 = computed(() => Number(actividadesdeinversion?.efe_md_950206).toFixed(2))

  const efe_md_950207 = computed(() => Number(actividadesdeinversion?.efe_md_950207).toFixed(2))

  const efe_md_950208 = computed(() => Number(actividadesdeinversion?.efe_md_950208).toFixed(2))

  const efe_md_950209 = computed(() => {
    return (Number(movpropiedadesplantasyequipos?.mov_total_compras) * -1).toFixed(2)
  })

  const efe_md_950210 = computed(() => Number(actividadesdeinversion?.efe_md_950210).toFixed(2))

  const efe_md_950211 = computed(() => {
    return (Number(movintangibles?.mov_compras) * -1).toFixed(2)
  })

  const efe_md_950212 = computed(() => Number(actividadesdeinversion?.efe_md_950212).toFixed(2))

  const efe_md_95021301 = computed(() => {
    return (Number(movpropiedadesdeinversion?.mov_compras_terrenos) * -1).toFixed(2)
  })

  const efe_md_95021302 = computed(() => {
    return (Number(movpropiedadesdeinversion?.mov_compras_edificios) * -1).toFixed(2)
  })

  const efe_md_95021303 = computed(() => {
    return (Number(movactivosbiologicos?.mov_compras_total) * -1).toFixed(2)
  })

  const efe_md_950213 = computed(() => {
    return (Number(efe_md_95021301.value) + Number(efe_md_95021302.value) + Number(efe_md_95021303.value)).toFixed(2)
  })

  const efe_md_950214 = computed(() => Number(actividadesdeinversion?.efe_md_950214).toFixed(2))

  const efe_md_950215 = computed(() => Number(actividadesdeinversion?.efe_md_950215).toFixed(2))

  const efe_md_950216 = computed(() => Number(actividadesdeinversion?.efe_md_950216).toFixed(2))

  const efe_md_950217 = computed(() => Number(actividadesdeinversion?.efe_md_950217).toFixed(2))

  const efe_md_950218 = computed(() => Number(actividadesdeinversion?.efe_md_950218).toFixed(2))

  const efe_md_950219 = computed(() => Number(actividadesdeinversion?.efe_md_950219).toFixed(2))

  const efe_md_950220 = computed(() => Number(actividadesdeinversion?.efe_md_950220).toFixed(2))

  const efe_md_95022101 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10207) - Number(activosnocorrientes_ant?.esf_10207_ant))  * -1).toFixed(2)
  })

  const efe_md_95022102 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10208) - Number(activosnocorrientes_ant?.esf_10208_ant))  * -1).toFixed(2)
  })

  const efe_md_95022103 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10209) - Number(activosnocorrientes_ant?.esf_10209_ant))  * -1).toFixed(2)
  })

  const efe_md_95022104 = computed(() => {
    return ((Number(activosnocorrientes?.esf_10210) - Number(activosnocorrientes_ant?.esf_10210_ant))  * -1).toFixed(2)
  })

  const efe_md_95022105 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20202) - Number(pasivosnocorrientes_ant?.esf_20202_ant)).toFixed(2)
  })

  const efe_md_95022106 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20204) - Number(pasivosnocorrientes_ant?.esf_20204_ant)).toFixed(2)
  })

  const efe_md_95022107 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20206) - Number(pasivosnocorrientes_ant?.esf_20206_ant)).toFixed(2)
  })

  const efe_md_95022108 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20208) - Number(pasivosnocorrientes_ant?.esf_20208_ant)).toFixed(2)
  })

  const efe_md_95022109 = computed(() => {
    return ((Number(pasivosnocorrientes?.esf_20209) - Number(pasivosnocorrientes_ant?.esf_20209_ant)) - (Number(pasivosnocorrientes?.esf_2020902) - Number(pasivosnocorrientes_ant?.esf_2020902_ant))).toFixed(2)
  })

  const efe_md_95022110 = computed(() => {
    return (Number(pasivosnocorrientes?.esf_20210) - Number(pasivosnocorrientes_ant?.esf_20210_ant)).toFixed(2)
  })

  const efe_md_950221 = ref((Number(efe_md_95022101.value) + Number(efe_md_95022102.value) + Number(efe_md_95022103.value) + Number(efe_md_95022104.value) + Number(efe_md_95022105.value) + Number(efe_md_95022106.value) + Number(efe_md_95022107.value) + Number(efe_md_95022108.value) + Number(efe_md_95022109.value) + Number(efe_md_95022110.value)).toFixed(2))

  return (Number(efe_md_950201.value) + Number(efe_md_950202.value) + Number(efe_md_950203.value) + Number(efe_md_950204.value) + Number(efe_md_950205.value) + Number(efe_md_950206.value) + Number(efe_md_950207.value) + Number(efe_md_950208.value) + Number(efe_md_950209.value) + Number(efe_md_950210.value) + Number(efe_md_950211.value) + Number(efe_md_950212.value) + Number(efe_md_950213.value) + Number(efe_md_950214.value) + Number(efe_md_950215.value) + Number(efe_md_950216.value) + Number(efe_md_950217.value) + Number(efe_md_950218.value) + Number(efe_md_950219.value) + Number(efe_md_950220.value) + Number(efe_md_950221.value)).toFixed(2)
}

export const calcular_950205 = () => {
  const reportStore = useReportStore()

  return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_nuevasinversiones")) * -1).toFixed(2)
}

export const calcular_950209 = () => {
  const reportStore = useReportStore()

  return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_compras")) * -1).toFixed(2)
}

export const calcular_950211 = () => {
  const reportStore = useReportStore()

  return (Number(reportStore.getSingleReportValue("movintangibles", "mov_compras")) * -1).toFixed(2)
}

export const calcular_950213 = () => {
  const reportStore = useReportStore()

  const efe_md_95021301 = computed(() => {
    const value = reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_compras_terrenos")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  const efe_md_95021302 = computed(() => {
    const value = reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_compras_edificios")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  const efe_md_95021303 = computed(() => {
    const value = reportStore.getSingleReportValue("movactivosbiologicos", "mov_compras_total")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  return (Number(efe_md_95021301.value) + Number(efe_md_95021302.value) + Number(efe_md_95021303.value)).toFixed(2)
}

export const calcular_950301 = () => {
  const reportStore = useReportStore()
  const ecp = reportStore.getReportData("ecpifluc")

  const efe_md_95030101 = computed(() => {
    return Number(ecp?.ecp_990201_301)
  })

  const efe_md_95030102 = computed(() => {
    return Number(ecp?.ecp_990201_302)
  })

  const efe_md_95030103 = computed(() => {
    return Number(ecp?.ecp_990202_301)
  })

  const efe_md_95030104 = computed(() => {
    return Number(ecp?.ecp_990202_302)
  })

  return (Number(efe_md_95030101.value) + Number(efe_md_95030102.value) + Number(efe_md_95030103.value) + Number(efe_md_95030104.value)).toFixed(2)
}

export const calcular_950310 = () => {
  const reportStore = useReportStore()
  const actividadesdefinanciamiento = reportStore.getReportData("actividadesdefinanciamientoifluc")
  const pasivosnocorrientes = reportStore.getReportData("pasivosnocorrientesifluc")
  const pasivosnocorrientes_ant = reportStore.getReportData("pasivosnocorrientesifluc_ant", true)
  const movjubilacionpatronal = reportStore.getReportData("movjubilacionpatronal")
  const deshaucio = reportStore.getReportData("deshaucio")
  const ecp = reportStore.getReportData("ecpifluc")

  const efe_md_95031001 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20205) - Number(pasivosnocorrientes_ant?.esf_20205_ant)
  })

  const efe_md_95031002 = computed(() => {
    return Number(pasivosnocorrientes?.esf_202070202) - Number(pasivosnocorrientes_ant?.esf_202070202_ant)
  })

  const efe_md_95031003 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20201) - Number(pasivosnocorrientes_ant?.esf_20201_ant)
  })

  const efe_md_95031004 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20203) - Number(pasivosnocorrientes_ant?.esf_20203_ant)
  })

  const efe_md_95031005 = computed(() => {
    return Number(movjubilacionpatronal?.mov_beneficiospagados)
  })

  const efe_md_95031006 = computed(() => {
    return Number(deshaucio?.mov_beneficiospagados)
  })

  const efe_md_95031007 = computed(() => {
    return Number(actividadesdefinanciamiento?.efe_md_95031007)
  })

  const efe_md_95031008 = computed(() => {
    return ecp?.ecp_99020901_Total
  })

  const efe_md_95031009 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20102")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20102_ant", true)

    return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
  })

  const efe_md_95031010 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20104")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20104_ant", true)

    return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
  })

  return (Number(efe_md_95031001.value) + Number(efe_md_95031002.value) + Number(efe_md_95031003.value) + Number(efe_md_95031004.value) + Number(efe_md_95031005.value) + Number(efe_md_95031006.value) + Number(efe_md_95031007.value) + Number(efe_md_95031008.value) + Number(efe_md_95031009.value) + Number(efe_md_95031010.value)).toFixed(2)
}

export const calcular_9503 = () => {
  const reportStore = useReportStore()
  const ecp = reportStore.getReportData("ecpifluc")
  const actividadesdefinanciamiento = reportStore.getReportData("actividadesdefinanciamientoifluc")
  const otros = reportStore.getReportData("otros")
  const pasivosnocorrientes = reportStore.getReportData("pasivosnocorrientesifluc")
  const movjubilacionpatronal = reportStore.getReportData("movjubilacionpatronal")
  const deshaucio = reportStore.getReportData("deshaucio")

  const pasivosnocorrientes_ant = reportStore.getReportData("pasivosnocorrientesifluc_ant", true)

  const efe_md_95030101 = computed(() => {
    return Number(ecp?.ecp_990201_301)
  })

  const efe_md_95030102 = computed(() => {
    return Number(ecp?.ecp_990201_302)
  })

  const efe_md_95030103 = computed(() => {
    return Number(ecp?.ecp_990202_301)
  })

  const efe_md_95030104 = computed(() => {
    return Number(ecp?.ecp_990202_302)
  })

  const efe_md_950301 = computed(() => {
    return (Number(efe_md_95030101.value) + Number(efe_md_95030102.value) + Number(efe_md_95030103.value) + Number(efe_md_95030104.value)).toFixed(2)
  })

  const efe_md_950302 = computed(()  => {
    return actividadesdefinanciamiento?.efe_md_950302
  })

  const efe_md_950303 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950303
  })

  const efe_md_950304 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950304
  })

  const efe_md_950305 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950305
  })

  const efe_md_950306 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950306
  })

  const efe_md_950307 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950307
  })

  const efe_md_950308 = computed(() => {
    return otros?.mov_dividendos_dividendospagados
  })

  const efe_md_950309 = computed(() => {
    return actividadesdefinanciamiento?.efe_md_950309
  })

  const efe_md_95031001 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20205) - Number(pasivosnocorrientes_ant?.esf_20205_ant)
  })

  const efe_md_95031002 = computed(() => {
    return Number(pasivosnocorrientes?.esf_202070202) - Number(pasivosnocorrientes_ant?.esf_202070202_ant)
  })

  const efe_md_95031003 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20201) - Number(pasivosnocorrientes_ant?.esf_20201_ant)
  })

  const efe_md_95031004 = computed(() => {
    return Number(pasivosnocorrientes?.esf_20203) - Number(pasivosnocorrientes_ant?.esf_20203_ant)
  })

  const efe_md_95031005 = computed(() => {
    return Number(movjubilacionpatronal?.mov_beneficiospagados)
  })

  const efe_md_95031006 = computed(() => {
    return Number(deshaucio?.mov_beneficiospagados)
  })

  const efe_md_95031007 = computed(() => {
    return Number(actividadesdefinanciamiento?.efe_md_95031007)
  })

  const efe_md_95031008 = computed(() => {
    return ecp?.ecp_99020901_Total
  })

  const efe_md_95031009 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20102")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20102_ant", true)

    return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
  })

  const efe_md_95031010 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20104")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20104_ant", true)

    return value && valueAnt ? (Number(value) - Number(valueAnt)).toFixed(2) : "0.00"
  })

  const efe_md_950310 = computed(() => {
    return (Number(efe_md_95031001.value) + Number(efe_md_95031002.value) + Number(efe_md_95031003.value) + Number(efe_md_95031004.value) + Number(efe_md_95031005.value) + Number(efe_md_95031006.value) + Number(efe_md_95031007.value) + Number(efe_md_95031008.value) + Number(efe_md_95031009.value) + Number(efe_md_95031010.value)).toFixed(2)
  })

  return (Number(efe_md_950301.value) + Number(efe_md_950302.value) + Number(efe_md_950303.value) + Number(efe_md_950304.value) + Number(efe_md_950305.value) + Number(efe_md_950306.value) + Number(efe_md_950307.value) + Number(efe_md_950308.value) + Number(efe_md_950309.value) + Number(efe_md_950310.value)).toFixed(2)
}

export const calcular_9504 = () => {
  const reportStore = useReportStore()
  const actividadesdefinanciamiento = reportStore.getReportData("actividadesdefinanciamientoifluc")|| {}

  return actividadesdefinanciamiento.efe_md_950401
}

export const calcular_9505 = () => {
  const financiamiento1 = parseOrZero(calcular_9501())
  const financiamiento2 = parseOrZero(calcular_9502())
  const financiamiento3 = parseOrZero(calcular_9503())
  const financiamiento4 = parseOrZero(calcular_9504())

  return (financiamiento1 + financiamiento2 + financiamiento3 + financiamiento4).toFixed(2)
}

export const calcular_9506 = () => {
  const reportStore = useReportStore()

  return reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10101_ant", true)
}

export const calcular_9507 = () => {
  const financiamiento1 = parseOrZero(calcular_9505())
  const financiamiento2 = parseOrZero(calcular_9506())

  return (financiamiento1 + financiamiento2).toFixed(2)
}

export const calcular_95010101 = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")
  const movperdidasacumuladascuentasincobrablesydeterioro = reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro")

  const activoscorrientes_ant = reportStore.getReportData("activoscorrientesifluc_ant", true)

  const efe_md_9501010101 = computed(() => {
    return ingresos?.eri_40101
  })

  const efe_md_9501010102 = computed(() => {
    return ingresos?.eri_40102
  })

  const efe_md_9501010103 = computed(() => {
    return ingresos?.eri_40103
  })

  const efe_md_9501010104 = computed(() => {
    return ingresos?.eri_40112
  })

  const efe_md_9501010105 = computed(() => {
    return ingresos?.eri_40113
  })

  const efe_md_9501010106 = computed(() => {
    return ingresos?.eri_40114
  })

  const efe_md_9501010107 = computed(() => {
    return ingresos?.eri_40115
  })

  const efe_md_9501010108 = computed(() => {
    return ingresos?.eri_40116
  })

  const efe_md_9501010109 = computed(() => {
    return ((activoscorrientes?.esf_1010205) - (activoscorrientes_ant?.esf_1010205_ant)) * -1
  })

  const efe_md_9501010110 = computed(() => {
    return ((activoscorrientes?.esf_1010204) - (activoscorrientes_ant?.esf_1010204_ant)) * -1
  })

  const efe_md_9501010111 = computed(() => {
    return ((activoscorrientes?.esf_1010207) - (activoscorrientes_ant?.esf_1010207_ant)) * -1
  })

  const efe_md_9501010112 = computed(() => {
    return movperdidasacumuladascuentasincobrablesydeterioro?.provisionesanio
  })

  const efe_md_9501010113 = computed(() => {
    return movperdidasacumuladascuentasincobrablesydeterioro?.bajasoreversiones
  })

  const efe_md_9501010114 = computed(() => {
    return movperdidasacumuladascuentasincobrablesydeterioro?.ajustes
  })

  const efe_md_9501010115 = computed(() => {
    return ((activoscorrientes?.esf_1010201) - (activoscorrientes_ant?.esf_1010201_ant)) * -1
  })

  const efe_md_9501010116 = computed(() => {
    return ((activoscorrientes?.esf_1010202) - (activoscorrientes_ant?.esf_1010202_ant)) * -1
  })

  const efe_md_9501010117 = computed(() => {
    return ((activoscorrientes?.esf_1010203) - (activoscorrientes_ant?.esf_1010203_ant)) * -1
  })

  const efe_md_9501010118 = computed(() => {
    return ((activoscorrientes?.esf_10105) - (activoscorrientes_ant?.esf_10105_ant)) * -1
  })

  const efe_md_9501010119 = computed(() => {
    return ((activoscorrientes?.esf_10106) - (activoscorrientes_ant?.esf_10106_ant)) * -1
  })

  const efe_md_9501010120 = computed(() => {
    return ((activoscorrientes?.esf_10107) - (activoscorrientes_ant?.esf_10107_ant)) * -1
  })

  const efe_md_9501010121 = computed(() => {
    return ((activoscorrientes?.esf_10108) - (activoscorrientes_ant?.esf_10108_ant)) * -1
  })

  return (Number(efe_md_9501010101.value) + Number(efe_md_9501010102.value) + Number(efe_md_9501010103.value) + Number(efe_md_9501010104.value) + Number(efe_md_9501010105.value) + Number(efe_md_9501010106.value) + Number(efe_md_9501010107.value) + Number(efe_md_9501010108.value) + Number(efe_md_9501010109.value) + Number(efe_md_9501010110.value) + Number(efe_md_9501010111.value) + Number(efe_md_9501010112.value) + Number(efe_md_9501010113.value) + Number(efe_md_9501010114.value) + Number(efe_md_9501010115.value) + Number(efe_md_9501010116.value) + Number(efe_md_9501010117.value) + Number(efe_md_9501010118.value) + Number(efe_md_9501010119.value) + Number(efe_md_9501010120.value) + Number(efe_md_9501010121.value)).toFixed(2)

}

export const calcular_95010102  = () => {
  const reportStore = useReportStore()
  const ingresos = reportStore.getReportData("ingresosifluc")
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const activoscorrientes_ant = reportStore.getReportData("activoscorrientesifluc_ant", true)

  const efe_md_9501010201 = computed(() => {
    return ingresos?.eri_40104
  })

  const efe_md_9501010202 = computed(() => {
    return ingresos?.eri_40105
  })

  const efe_md_9501010203 = computed(() => {
    return ingresos?.eri_40106
  })

  const efe_md_9501010204 = computed(() => {
    return ingresos?.eri_40108
  })

  const efe_md_9501010205 = computed(() => {
    return ingresos?.eri_40109
  })

  const efe_md_9501010206 = computed(() => {
    return ingresos?.eri_40110
  })

  const efe_md_9501010207 = computed(() => {
    return ((activoscorrientes?.esf_1010206) - (activoscorrientes_ant?.esf_1010206_ant)) * -1
  })

  return (Number(efe_md_9501010201.value) + Number(efe_md_9501010202.value) + Number(efe_md_9501010203.value) + Number(efe_md_9501010204.value) + Number(efe_md_9501010205.value) + Number(efe_md_9501010206.value) + Number(efe_md_9501010207.value)).toFixed(2)

}

export const calcular_95010201  = () => {
  const reportStore = useReportStore()

  const efe_md_9501020101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("costosifluc", "eri_501")) * -1).toFixed(2)
  })

  const efe_md_9501020102 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501020103 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020104 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020105 = computed(() => {
    const value = reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")

    return Number(value).toFixed(2)
  })

  const efe_md_9501020106 = computed(() => {
    return (Number(reportStore.getSingleReportValue("gastosdeventasifluc", "eri_50201")) * -1).toFixed(2)
  })

  const efe_md_9501020107 = computed(() => {
    return (Number(reportStore.getSingleReportValue("gastosadministrativosifluc", "eri_50202")) * -1).toFixed(2)
  })

  const efe_md_9501020108 = computed(() => {
    const value = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
    const valueAnt = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

    return ((Number(value) - Number(valueAnt)) * -1).toFixed(2)
  })

  const efe_md_9501020109 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020110 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020111 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020112 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_9501020113 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_9501020114 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020115 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020116 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020117 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
  })

  const efe_md_9501020118 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const efe_md_9501020119 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020120 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020121 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020122 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020123 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020124 = computed(() => {
    const value = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
    const valueAnt = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

    return (Number(value) - Number(valueAnt)).toFixed(2)
  })

  const efe_md_9501020125 = computed(() => {
    return (Number(reportStore.getSingleReportValue("otros", "mov_islr_pagos")) * -1).toFixed(2)
  })

  const efe_md_9501020126 = computed(() => {
    return (Number(reportStore.getSingleReportValue("otros", "mov_pt_pagos")) * -1).toFixed(2)
  })

  const efe_md_9501020127 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
  })

  const efe_md_9501020128 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020129 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
  })

  const efe_md_9501020130 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
  })

  const efe_md_9501020131 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_9501020132 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_9501020133 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
  })

  const efe_md_9501020134 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_9501020135 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_9501020136 = computed(() => {
    return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
  })

  const efe_md_9501020137 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020138 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020139 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
  })

  const efe_md_9501020140 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
  })

  const efe_md_9501020141 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020142 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020143 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
  })

  const efe_md_9501020144 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
  })

  const efe_md_9501020145 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
  })

  const efe_md_9501020146 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
  })

  const efe_md_9501020147 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
  })

  const efe_md_9501020148 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
  })

  const efe_md_9501020149 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_9501020150 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_9501020151 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
  })

  const efe_md_9501020152 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_9501020153 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_9501020154 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_9501020155 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
  })

  const efe_md_9501020156 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
  })

  return (Number(efe_md_9501020101.value) + Number(efe_md_9501020102.value) + Number(efe_md_9501020103.value) + Number(efe_md_9501020104.value) + Number(efe_md_9501020105.value) + Number(efe_md_9501020106.value) + Number(efe_md_9501020107.value) + Number(efe_md_9501020108.value) + Number(efe_md_9501020109.value) + Number(efe_md_9501020110.value) + Number(efe_md_9501020111.value) + Number(efe_md_9501020112.value) + Number(efe_md_9501020113.value) + Number(efe_md_9501020114.value) + Number(efe_md_9501020115.value) + Number(efe_md_9501020116.value) + Number(efe_md_9501020117.value) + Number(efe_md_9501020118.value) + Number(efe_md_9501020119.value) + Number(efe_md_9501020120.value) + Number(efe_md_9501020121.value) + Number(efe_md_9501020122.value) + Number(efe_md_9501020123.value) + Number(efe_md_9501020124.value) + Number(efe_md_9501020125.value) + Number(efe_md_9501020126.value) + Number(efe_md_9501020127.value) + Number(efe_md_9501020128.value) + Number(efe_md_9501020129.value) + Number(efe_md_9501020130.value) + Number(efe_md_9501020131.value) + Number(efe_md_9501020132.value) + Number(efe_md_9501020133.value) + Number(efe_md_9501020134.value) + Number(efe_md_9501020135.value) + Number(efe_md_9501020136.value) + Number(efe_md_9501020137.value) + Number(efe_md_9501020138.value) + Number(efe_md_9501020139.value) + Number(efe_md_9501020140.value) + Number(efe_md_9501020141.value) + Number(efe_md_9501020142.value) + Number(efe_md_9501020143.value) + Number(efe_md_9501020144.value) + Number(efe_md_9501020145.value) + Number(efe_md_9501020146.value) + Number(efe_md_9501020147.value) + Number(efe_md_9501020148.value) + Number(efe_md_9501020149.value) + Number(efe_md_9501020150.value) + Number(efe_md_9501020151.value) + Number(efe_md_9501020152.value) + Number(efe_md_9501020153.value) + Number(efe_md_9501020154.value) + Number(efe_md_9501020155.value) + Number(efe_md_9501020156.value)).toFixed(2)

}

export const calcular_95010203 = () => {
  const reportStore = useReportStore()
  const resultados = reportStore.getReportData("resultadosifluc")
  const otros = reportStore.getReportData("otros")

  const efe_md_9501020301 = computed(() => {
    return Number(resultados?.eri_601).toFixed(2)
  })

  const efe_md_9501020302 = computed(() => {
    return (Number(resultados?.eri_601) * -1).toFixed(2)
  })

  const efe_md_9501020303 = computed(() => {
    return Number(otros?.mov_pt_pagos).toFixed(2)
  })

  return (Number(efe_md_9501020301.value) + Number(efe_md_9501020302.value) + Number(efe_md_9501020303.value)).toFixed(2)
}

export const calcular_97 = () => {
  const reportStore = useReportStore()
  const movpropiedadesplantasyequipos = reportStore.getReportData("movpropiedadesplantasyequipos")
  const movpropiedadesdeinversion = reportStore.getReportData("movpropiedadesdeinversion")
  const movintangibles = reportStore.getReportData("movintangibles")
  const movperdidasacumuladascuentasincobrablesydeterioro = reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro")
  const movperdidasacumuladasvalornetorealizacion = reportStore.getReportData("movperdidasacumuladasvalornetorealizacion")
  const activosfinancieroslargoplazo = reportStore.getReportData("activosfinancieroslargoplazo")
  const conciliacionganancianeta = reportStore.getReportData("conciliacionganancianetaifluc")
  const resultados = reportStore.getReportData("resultadosifluc")
  const movactivosbiologicos = reportStore.getReportData("movactivosbiologicos")
  const movimpuestosdiferidos = reportStore.getReportData("movimpuestosdiferidos")
  const movjubilacionpatronal = reportStore.getReportData("movjubilacionpatronal")
  const deshaucio = reportStore.getReportData("deshaucio")

  const efe_md_970101 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_gdd) * -1
  })

  const efe_md_970102 = computed(() => {
    return (movpropiedadesdeinversion?.mov_gastosdedepreciacion_edificios) * -1
  })

  const efe_md_970103 = computed(() => {
    return (movintangibles?.mov_gastosdeamortizacion) * -1
  })

  const efe_md_9701 = (Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2)

  const efe_md_970201 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.provisionesanio) * -1
  })

  const efe_md_970202 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.bajasoreversiones) * -1
  })

  const efe_md_970203 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.ajustes) * -1
  })

  const efe_md_970204 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.provisionesdelanio) * -1
  })

  const efe_md_970205 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.bajasoreversiones) * -1
  })

  const efe_md_970206 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.ajustes) * -1
  })

  const efe_md_970207 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_provisionpordeterioro) * -1
  })

  const efe_md_9702 = (Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2)

  const efe_md_9703 = ref(conciliacionganancianeta?.efe_md_9703)

  const efe_md_9704 = ref(conciliacionganancianeta?.efe_md_9704)

  const efe_md_9705 = ref(conciliacionganancianeta?.efe_md_9705)

  const efe_md_9706 = ref(conciliacionganancianeta?.efe_md_9706)

  const efe_md_9707 = ref(conciliacionganancianeta?.efe_md_9707)

  const efe_md_970801 = computed(() => {
    return (movpropiedadesdeinversion?.mov_valorrazonable_terrenos) * -1
  })

  const efe_md_970802 = computed(() => {
    return (movpropiedadesdeinversion?.mov_valorrazonable_edificios) * -1
  })

  const efe_md_9708 = (Number(efe_md_970801.value) + Number(efe_md_970802.value)).toFixed(2)

  const efe_md_9709 = computed(() => {
    return (resultados?.eri_603) * -1
  })

  const efe_md_9710 = computed(() => {
    return (resultados?.eri_601) * -1
  })

  const efe_md_971101 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_bilddb) * -1
  })

  const efe_md_971102 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_sida) * -1
  })

  const efe_md_971103 = computed(() => {
    return (movpropiedadesdeinversion?.mov_bajasincluida_terrenos) * -1
  })

  const efe_md_971104 = computed(() => {
    return (movpropiedadesdeinversion?.mov_bajasincluida_edificios) * -1
  })

  const efe_md_971105 = computed(() => {
    return (movpropiedadesdeinversion?.mov_otros_terrenos) * -1
  })

  const efe_md_971106 = computed(() => {
    return (movpropiedadesdeinversion?.mov_otros_edificios) * -1
  })

  const efe_md_971107 = computed(() => {
    return (movintangibles?.mov_bajasincluida) * -1
  })

  const efe_md_971108 = computed(() => {
    return (movintangibles?.mov_otros) * -1
  })

  const efe_md_971109 = computed(() => {
    return (movactivosbiologicos?.mov_bajasoventas_total) * -1
  })

  const efe_md_971110 = computed(() => {
    return (movactivosbiologicos?.mov_incrementodisminuciondevalor_total) * -1
  })

  const efe_md_971111 = computed(() => {
    return (movimpuestosdiferidos?.mov_apid_generacionenrevision) * -1
  })

  const efe_md_971112 = computed(() => {
    return (movimpuestosdiferidos?.mov_apid_ajustesresultadospyg) * -1
  })

  const efe_md_971113 = computed(() => {
    return (movimpuestosdiferidos?.mov_ppid_generacionenrevision) * -1
  })

  const efe_md_971114 = computed(() => {
    return (movimpuestosdiferidos?.mov_ppid_ajustesresultadospyg) * -1
  })

  const efe_md_971115 = computed(() => {
    return (movjubilacionpatronal?.mov_costosporservicios) * -1
  })

  const efe_md_971116 = computed(() => {
    return (movjubilacionpatronal?.mov_costofinanciero) * -1
  })

  const efe_md_971117 = computed(() => {
    return (movjubilacionpatronal?.mov_otros) * -1
  })

  const efe_md_971118 = computed(() => {
    return (movjubilacionpatronal?.mov_efectodeliquidaciones) * -1
  })

  const efe_md_971119 = computed(() => {
    return (deshaucio?.mov_costosporservicios) * -1
  })

  const efe_md_971120 = computed(() => {
    return (deshaucio?.mov_costofinanciero)
  })

  const efe_md_971121 = computed(() => {
    return (deshaucio?.mov_otros)
  })

  const efe_md_971122 = computed(() => {
    return (deshaucio?.mov_efectodeliquidaciones)
  })

  const efe_md_971123 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_interesactualizacionantiguasinv) * -1
  })

  const efe_md_971124 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_ajustes) * -1
  })

  const efe_md_9711 = (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)

  return (Number(efe_md_9701) + Number(efe_md_9702) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711)).toFixed(2)
}

export const calcular_97_Solo_TXT = () => {
  const reportStore = useReportStore()
  const movpropiedadesplantasyequipos = reportStore.getReportData("movpropiedadesplantasyequipos")
  const movpropiedadesdeinversion = reportStore.getReportData("movpropiedadesdeinversion")
  const movintangibles = reportStore.getReportData("movintangibles")
  const movperdidasacumuladascuentasincobrablesydeterioro = reportStore.getReportData("movperdidasacumuladascuentasincobrablesydeterioro")
  const movperdidasacumuladasvalornetorealizacion = reportStore.getReportData("movperdidasacumuladasvalornetorealizacion")
  const activosfinancieroslargoplazo = reportStore.getReportData("activosfinancieroslargoplazo")
  const conciliacionganancianeta = reportStore.getReportData("conciliacionganancianetaifluc")
  const movactivosbiologicos = reportStore.getReportData("movactivosbiologicos")
  const movjubilacionpatronal = reportStore.getReportData("movjubilacionpatronal")
  const deshaucio = reportStore.getReportData("deshaucio")

  const efe_md_970101 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_gdd) * -1
  })

  const efe_md_970102 = computed(() => {
    return (movpropiedadesdeinversion?.mov_gastosdedepreciacion_edificios) * -1
  })

  const efe_md_970103 = computed(() => {
    return (movintangibles?.mov_gastosdeamortizacion) * -1
  })

  const efe_md_9701 = (Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2)

  const efe_md_970201 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.provisionesanio) * -1
  })

  const efe_md_970202 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.bajasoreversiones) * -1
  })

  const efe_md_970203 = computed(() => {
    return (movperdidasacumuladascuentasincobrablesydeterioro?.ajustes) * -1
  })

  const efe_md_970204 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.provisionesdelanio) * -1
  })

  const efe_md_970205 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.bajasoreversiones) * -1
  })

  const efe_md_970206 = computed(() => {
    return (movperdidasacumuladasvalornetorealizacion?.ajustes) * -1
  })

  const efe_md_970207 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_provisionpordeterioro) * -1
  })

  const efe_md_9702 = (Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2)

  const efe_md_9703 = ref(conciliacionganancianeta?.efe_md_9703)

  const efe_md_9704 = ref(conciliacionganancianeta?.efe_md_9704)

  const efe_md_9705 = ref(conciliacionganancianeta?.efe_md_9705)

  const efe_md_9706 = ref(conciliacionganancianeta?.efe_md_9706)

  const efe_md_9707 = ref(conciliacionganancianeta?.efe_md_9707)

  const efe_md_970801 = computed(() => {
    return (movpropiedadesdeinversion?.mov_valorrazonable_terrenos) * -1
  })

  const efe_md_970802 = computed(() => {
    return (movpropiedadesdeinversion?.mov_valorrazonable_edificios) * -1
  })

  const efe_md_9708 = (Number(efe_md_970801.value) + Number(efe_md_970802.value)).toFixed(2)

  const efe_md_9709 = ref(0)

  const efe_md_9710 = ref(0)

  const efe_md_971101 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_bilddb) * -1
  })

  const efe_md_971102 = computed(() => {
    return (movpropiedadesplantasyequipos?.mov_total_sida) * -1
  })

  const efe_md_971103 = computed(() => {
    return (movpropiedadesdeinversion?.mov_bajasincluida_terrenos) * -1
  })

  const efe_md_971104 = computed(() => {
    return (movpropiedadesdeinversion?.mov_bajasincluida_edificios) * -1
  })

  const efe_md_971105 = computed(() => {
    return (movpropiedadesdeinversion?.mov_otros_terrenos) * -1
  })

  const efe_md_971106 = computed(() => {
    return (movpropiedadesdeinversion?.mov_otros_edificios) * -1
  })

  const efe_md_971107 = computed(() => {
    return (movintangibles?.mov_bajasincluida) * -1
  })

  const efe_md_971108 = computed(() => {
    return (movintangibles?.mov_otros) * -1
  })

  const efe_md_971109 = computed(() => {
    return (movactivosbiologicos?.mov_bajasoventas_total) * -1
  })

  const efe_md_971110 = computed(() => {
    return (movactivosbiologicos?.mov_incrementodisminuciondevalor_total) * -1
  })

  const efe_md_971111 = ref(0)

  const efe_md_971112 = ref(0)

  const efe_md_971113 = ref(0)

  const efe_md_971114 = ref(0)

  const efe_md_971115 = computed(() => {
    return (movjubilacionpatronal?.mov_costosporservicios)
  })

  const efe_md_971116 = computed(() => {
    return (movjubilacionpatronal?.mov_costofinanciero)
  })

  const efe_md_971117 = computed(() => {
    return (movjubilacionpatronal?.mov_otros)
  })

  const efe_md_971118 = computed(() => {
    return (movjubilacionpatronal?.mov_efectodeliquidaciones)
  })

  const efe_md_971119 = computed(() => {
    return (deshaucio?.mov_costosporservicios)
  })

  const efe_md_971120 = computed(() => {
    return (deshaucio?.mov_costofinanciero)
  })

  const efe_md_971121 = computed(() => {
    return (deshaucio?.mov_otros)
  })

  const efe_md_971122 = computed(() => {
    return (deshaucio?.mov_efectodeliquidaciones)
  })

  const efe_md_971123 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_interesactualizacionantiguasinv) * -1
  })

  const efe_md_971124 = computed(() => {
    return (activosfinancieroslargoplazo?.mov_ajustes) * -1
  })

  const efe_md_9711 = (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)

  // console.log((Number(efe_md_9701) + Number(efe_md_9702) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711)).toFixed(2))

  return (Number(efe_md_9701) + Number(efe_md_9702) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711)).toFixed(2)
}

export const calcular_9701 = () => {
  const reportStore = useReportStore()

  const efe_md_970101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
  })

  const efe_md_970102 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
  })

  const efe_md_970103 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
  })

  return (Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2)
}

export const calcular_9702 = () => {
  const reportStore = useReportStore()

  const efe_md_970201 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
  })

  const efe_md_970202 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_970203 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_970204 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
  })

  const efe_md_970205 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_970206 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_970207 = computed(() => {
    return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
  })

  return (Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2)
}

export const calcular_9708 = () => {
  const reportStore = useReportStore()

  const efe_md_970801 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
  })

  const efe_md_970802 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
  })

  return (Number(efe_md_970801.value) + Number(efe_md_970802.value)).toFixed(2)
}

export const calcular_9709 = () => {
  const reportStore = useReportStore()

  const efe_md_970901 = computed(() => {
    return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")) * -1).toFixed(2)
  })

  return (Number(efe_md_970901.value)).toFixed(2)
}

export const calcular_9710 = () => {
  const reportStore = useReportStore()

  const efe_md_971001 = computed(() => {
    return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")) * -1).toFixed(2)
  })

  return (Number(efe_md_971001.value)).toFixed(2)
}

export const calcular_9711 = () => {

  const reportStore = useReportStore()

  const efe_md_971101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
  })

  const efe_md_971102 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
  })

  const efe_md_971103 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971104 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
  })

  const efe_md_971105 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971106 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
  })

  const efe_md_971107 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
  })

  const efe_md_971108 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
  })

  const efe_md_971109 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
  })

  const efe_md_971110 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
  })

  const efe_md_971111 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_generacionenrevision")) * -1).toFixed(2)
  })

  const efe_md_971112 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_ajustesresultadospyg")) * -1).toFixed(2)
  })

  const efe_md_971113 = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_generacionenrevision")).toFixed(2)
  })

  const efe_md_971114 = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_ajustesresultadospyg")).toFixed(2)
  })

  const efe_md_971115 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971116 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971117 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
  })

  const efe_md_971118 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971119 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971120 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971121 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
  })

  const efe_md_971122 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971123 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  const efe_md_971124 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  return (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)
}

export const calcular_9711_Solo_Txt = () => {

  const reportStore = useReportStore()

  const efe_md_971101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
  })

  const efe_md_971102 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
  })

  const efe_md_971103 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971104 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
  })

  const efe_md_971105 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971106 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
  })

  const efe_md_971107 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
  })

  const efe_md_971108 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
  })

  const efe_md_971109 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
  })

  const efe_md_971110 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
  })

  const efe_md_971111 = computed(() => {
    return 0.00
  })

  const efe_md_971112 = computed(() => {
    return 0.00
  })

  const efe_md_971113 = computed(() => {
    return 0.00
  })

  const efe_md_971114 = computed(() => {
    return 0.00
  })

  const efe_md_971115 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971116 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971117 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
  })

  const efe_md_971118 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971119 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971120 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971121 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
  })

  const efe_md_971122 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971123 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  const efe_md_971124 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes")

    return value ? (Number(value) * -1).toFixed(2) : "0.00"
  })

  return (Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2)
}

export const calcular_9804 = () => {
  const reportStore = useReportStore()

  const efe_md_980401 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  // TODO corregir reactividad en estos casos
  const efe_md_980402 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")).toFixed(2)
  })

  const efe_md_980403 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")).toFixed(2)
  })

  const efe_md_980404 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")).toFixed(2)
  })

  return (Number(efe_md_980401.value) + Number(efe_md_980402.value) + Number(efe_md_980403.value) + Number(efe_md_980404.value)).toFixed(2)
}

export  const calcular_9805 = () => {
  const reportStore = useReportStore()

  const efe_md_980501 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980502 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980503 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980504 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980505 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980506 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980507 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  return (Number(efe_md_980501.value) + Number(efe_md_980502.value) + Number(efe_md_980503.value) + Number(efe_md_980504.value) + Number(efe_md_980505.value) + Number(efe_md_980506.value) + Number(efe_md_980507.value)).toFixed(2)

}

export const calcular_98 = () => {
  const reportStore = useReportStore()

  // Función auxiliar para calcular diferencias
  const calcularDiferencia = (actual, anterior) => {
    (Number(actual) - Number(anterior)) * -1
  }

  // Función auxiliar para multiplicar por -1
  const multiplicarNegativo = valor => (Number(valor) * -1)

  // Valores reactivos
  const efe_md_9801 = ref(calcular_9801())
  const efe_md_9810 = ref(calcular_9810())

  // Computados
  const efe_md_9802 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_9803 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_9804 = computed(() => {
    return calcular_9804()
  })

  const efe_md_980501 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980502 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980503 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980504 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980505 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980506 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980507 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  console.log('efe_md_980501: ', efe_md_980501.value)
  console.log('efe_md_980502: ', efe_md_980502.value)
  console.log('efe_md_980503: ', efe_md_980503.value)
  console.log('efe_md_980504: ', efe_md_980504.value)
  console.log('efe_md_980505: ', efe_md_980505.value)
  console.log('efe_md_980506: ', efe_md_980506.value)
  console.log('efe_md_980507: ', efe_md_980507.value)

  const efe_md_9805 = (Number(efe_md_980501.value) + Number(efe_md_980502.value) + Number(efe_md_980503.value) + Number(efe_md_980504.value) + Number(efe_md_980505.value) + Number(efe_md_980506.value) + Number(efe_md_980507.value)).toFixed(2)

  const efe_md_9806 = computed(() => {
    return (Number(reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")) - Number(reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true))).toFixed(2)
  })

  const efe_md_9807 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9807")).toFixed(2)
  })

  const efe_md_9808 = computed(() => {
    return (Number(reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")) - Number(reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true))).toFixed(2)
  })

  const efe_md_9809 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9809")).toFixed(2)
  })

  console.log('efe_md_9801: ', efe_md_9801.value)
  console.log('efe_md_9802: ', efe_md_9802.value)
  console.log('efe_md_9803: ', efe_md_9803.value)
  console.log('efe_md_9804: ', efe_md_9804.value)
  console.log('efe_md_9805: ', efe_md_9805)
  console.log('efe_md_9806: ', efe_md_9806.value)
  console.log('efe_md_9807: ', efe_md_9807.value)
  console.log('efe_md_9808: ', efe_md_9808.value)
  console.log('efe_md_9809: ', efe_md_9809.value)
  console.log('efe_md_9810: ', efe_md_9810.value)

  return (
    Number(efe_md_9801.value) +
    Number(efe_md_9802.value) +
    Number(efe_md_9803.value) +
    Number(efe_md_9804.value) +
    Number(efe_md_9805) +
    Number(efe_md_9806.value) +
    Number(efe_md_9807.value) +
    Number(efe_md_9808.value) +
    Number(efe_md_9809.value) +
    Number(efe_md_9810.value)
  ).toFixed(2)
}

export const calcular_9801 = () => {
  const reportStore = useReportStore()

  const efe_md_980101 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010205")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010205_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980102 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980103 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980104 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio"))
  })

  const efe_md_980105 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones"))
  })

  const efe_md_980106 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes"))
  })

  return (Number(efe_md_980101.value) + Number(efe_md_980102.value) + Number(efe_md_980103.value) + Number(efe_md_980104.value) + Number(efe_md_980105.value) + Number(efe_md_980106.value)).toFixed(2)
}

export const calcular_9806 = () => {
  const reportStore = useReportStore()

  const efe_md_980601 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  return (Number(efe_md_980601.value)).toFixed(2)
}

export const calcular_9808 = () => {
  const reportStore = useReportStore()

  const efe_md_980801 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  return (Number(efe_md_980801.value)).toFixed(2)
}

export const calcular_9810 = () => {
  const reportStore = useReportStore()

  const efe_md_981001 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981002 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_981003 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_981004 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981005 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981006 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981007 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
  })

  const efe_md_981008 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const efe_md_981009 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981010 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981011 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981012 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981013 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981014 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  return (Number(efe_md_981001.value) + Number(efe_md_981002.value) + Number(efe_md_981003.value) + Number(efe_md_981004.value) + Number(efe_md_981005.value) + Number(efe_md_981006.value) + Number(efe_md_981007.value) + Number(efe_md_981008.value) + Number(efe_md_981009.value) + Number(efe_md_981010.value) + Number(efe_md_981011.value) + Number(efe_md_981012.value) + Number(efe_md_981013.value) + Number(efe_md_981014.value)).toFixed(2)
}

export const calcular_9820 = () => {
  const reportStore = useReportStore()

  const efe_md_96 = computed(() => {
    return calcular_eri_607()
  })

  console.log('comprobación: efe_md_96', efe_md_96.value)

  const efe_md_970101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_gdd")) * -1).toFixed(2)
  })

  const efe_md_970102 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_gastosdedepreciacion_edificios")) * -1).toFixed(2)
  })

  const efe_md_970103 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_gastosdeamortizacion")) * -1).toFixed(2)
  })

  const efe_md_9701 = ref((Number(efe_md_970101.value) + Number(efe_md_970102.value) + Number(efe_md_970103.value)).toFixed(2))

  console.log('comprobación: efe_md_9701', efe_md_9701.value)

  const efe_md_970201 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio")) * -1).toFixed(2)
  })

  const efe_md_970202 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_970203 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_970204 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")) * -1).toFixed(2)
  })

  const efe_md_970205 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")) * -1).toFixed(2)
  })

  const efe_md_970206 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")) * -1).toFixed(2)
  })

  const efe_md_970207 = computed(() => {
    return (Number(reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_provisionpordeterioro")) * -1).toFixed(2)
  })

  const efe_md_9702 = ref((Number(efe_md_970201.value) + Number(efe_md_970202.value) + Number(efe_md_970203.value) + Number(efe_md_970204.value) + Number(efe_md_970205.value) + Number(efe_md_970206.value) + Number(efe_md_970207.value)).toFixed(2))

  console.log('comprobación: efe_md_9702', efe_md_9702.value)

  const efe_md_9703 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9703")).toFixed(2)
  })

  console.log('comprobación: efe_md_9703', efe_md_9703.value)

  const efe_md_9704 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9704")).toFixed(2)
  })

  console.log('comprobación: efe_md_9704', efe_md_9704.value)

  const efe_md_9705 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9705")).toFixed(2)
  })

  console.log('comprobación: efe_md_9705', efe_md_9705.value)

  const efe_md_9706 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9706")).toFixed(2)
  })

  console.log('comprobación: efe_md_9706', efe_md_9706.value)

  const efe_md_9707 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9707")).toFixed(2)
  })

  console.log('comprobación: efe_md_9707', efe_md_9707.value)

  const efe_md_970801 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_terrenos")) * -1).toFixed(2)
  })

  const efe_md_970802 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_valorrazonable_edificios")) * -1).toFixed(2)
  })

  const efe_md_9708 = computed(() => {
    return Number(efe_md_970801.value) + Number(efe_md_970802.value)
  })

  console.log('comprobación: efe_md_9708', efe_md_9708.value)

  const efe_md_9709 = computed(() => {
    return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")) * -1).toFixed(2)
  })

  console.log('comprobación: efe_md_9709', efe_md_9709.value)

  const efe_md_9710 = computed(() => {
    return (Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")) * -1).toFixed(2)
  })

  console.log('comprobación: efe_md_9710', efe_md_9710.value)

  const efe_md_971101 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_bilddb")) * -1).toFixed(2)
  })

  const efe_md_971102 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesplantasyequipos", "mov_total_sida")) * -1).toFixed(2)
  })

  const efe_md_971103 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971104 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_bajasincluida_edificios")) * -1).toFixed(2)
  })

  const efe_md_971105 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_terrenos")) * -1).toFixed(2)
  })

  const efe_md_971106 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movpropiedadesdeinversion", "mov_otros_edificios")) * -1).toFixed(2)
  })

  const efe_md_971107 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_bajasincluida")) * -1).toFixed(2)
  })

  const efe_md_971108 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movintangibles", "mov_otros")) * -1).toFixed(2)
  })

  const efe_md_971109 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_bajasoventas_total")) * -1).toFixed(2)
  })

  const efe_md_971110 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movactivosbiologicos", "mov_incrementodisminuciondevalor_total")) * -1).toFixed(2)
  })

  const efe_md_971111 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_generacionenrevision")) * -1).toFixed(2)
  })

  const efe_md_971112 = computed(() => {
    return (Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_apid_ajustesresultadospyg")) * -1).toFixed(2)
  })

  const efe_md_971113 = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_generacionenrevision")).toFixed(2)
  })

  const efe_md_971114 = computed(() => {
    return Number(reportStore.getSingleReportValue("movimpuestosdiferidos", "mov_ppid_ajustesresultadospyg")).toFixed(2)
  })

  const efe_md_971115 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971116 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971117 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_otros")).toFixed(2)
  })

  const efe_md_971118 = computed(() => {
    return Number(reportStore.getSingleReportValue("movjubilacionpatronal", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971119 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costosporservicios")).toFixed(2)
  })

  const efe_md_971120 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_costofinanciero")).toFixed(2)
  })

  const efe_md_971121 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_otros")).toFixed(2)
  })

  const efe_md_971122 = computed(() => {
    return Number(reportStore.getSingleReportValue("deshaucio", "mov_efectodeliquidaciones")).toFixed(2)
  })

  const efe_md_971123 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_interesactualizacionantiguasinv")

    return (Number(value) * -1).toFixed(2)
  })

  const efe_md_971124 = computed(() => {
    const value = reportStore.getSingleReportValue("activosfinancieroslargoplazo", "mov_ajustes")

    return (Number(value) * -1).toFixed(2)
  })

  const efe_md_9711 = ref((Number(efe_md_971101.value) + Number(efe_md_971102.value) + Number(efe_md_971103.value) + Number(efe_md_971104.value) + Number(efe_md_971105.value) + Number(efe_md_971106.value) + Number(efe_md_971107.value) + Number(efe_md_971108.value) + Number(efe_md_971109.value) + Number(efe_md_971110.value) + Number(efe_md_971111.value) + Number(efe_md_971112.value) + Number(efe_md_971113.value) + Number(efe_md_971114.value) + Number(efe_md_971115.value) + Number(efe_md_971116.value) + Number(efe_md_971117.value) + Number(efe_md_971118.value) + Number(efe_md_971119.value) + Number(efe_md_971120.value) + Number(efe_md_971121.value) + Number(efe_md_971122.value) + Number(efe_md_971123.value) + Number(efe_md_971124.value)).toFixed(2))

  console.log('comprobación: efe_md_9711', efe_md_9711.value)

  const efe_md_97 = ref((Number(efe_md_9701.value) + Number(efe_md_9702.value) + Number(efe_md_9703.value) + Number(efe_md_9704.value) + Number(efe_md_9705.value) + Number(efe_md_9706.value) + Number(efe_md_9707.value) + Number(efe_md_9708.value) + Number(efe_md_9709.value) + Number(efe_md_9710.value) + Number(efe_md_9711.value)).toFixed(2))

  console.log('comprobación: efe_md_97', efe_md_97.value)

  const efe_md_980101 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010205")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010205_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980102 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010204")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010204_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980103 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010207")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010207_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980104 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "provisionesanio"))
  })

  const efe_md_980105 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "bajasoreversiones"))
  })

  const efe_md_980106 = computed(() => {
    return (reportStore.getSingleReportValue("movperdidasacumuladascuentasincobrablesydeterioro", "ajustes"))
  })

  const efe_md_9801 = ref((Number(efe_md_980101.value) + Number(efe_md_980102.value) + Number(efe_md_980103.value) + Number(efe_md_980104.value) + Number(efe_md_980105.value) + Number(efe_md_980106.value)).toFixed(2))

  console.log('comprobación: efe_md_9801', efe_md_9801.value)

  console.log('comprobación: suma efe_md_9801', (Number(efe_md_980101.value) + Number(efe_md_980102.value) + Number(efe_md_980103.value) + Number(efe_md_980104.value) + Number(efe_md_980105.value) + Number(efe_md_980106.value)))

  console.log('comprobación: efe_md_980101', efe_md_980101.value)
  console.log('comprobación: efe_md_980102', efe_md_980102.value)
  console.log('comprobación: efe_md_980103', efe_md_980103.value)
  console.log('comprobación: efe_md_980104', efe_md_980104.value)
  console.log('comprobación: efe_md_980105', efe_md_980105.value)
  console.log('comprobación: efe_md_980106', efe_md_980106.value)


  const efe_md_9802 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010206")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010206_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  console.log('comprobación: efe_md_9802', efe_md_9802.value)

  const efe_md_9803 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10104")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10104_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  console.log('comprobación: efe_md_9803', efe_md_9803.value)

  const efe_md_980401 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10103")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10103_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  // TODO corregir reactividad en estos casos
  const efe_md_980402 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "provisionesdelanio")).toFixed(2)
  })

  const efe_md_980403 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "bajasoreversiones")).toFixed(2)
  })

  const efe_md_980404 = computed(() => {
    return Number(reportStore.getSingleReportValue("movperdidasacumuladasvalornetorealizacion", "ajustes")).toFixed(2)
  })

  const efe_md_9804 = ref((Number(efe_md_980401.value) + Number(efe_md_980402.value) + Number(efe_md_980403.value) + Number(efe_md_980404.value)).toFixed(2))

  console.log('comprobación: efe_md_9804', efe_md_9804.value)

  const efe_md_980501 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010201")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010201_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980502 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010202")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010202_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980503 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_1010203")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_1010203_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980504 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10105")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10105_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980505 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10106")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10106_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980506 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10107")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10107_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_980507 = computed(() => {
    const current = reportStore.getSingleReportValue("activoscorrientesifluc", "esf_10108")
    const previous = reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10108_ant", true)

    return ((Number(current) - Number(previous)) * -1).toFixed(2)
  })

  const efe_md_9805 = ref((Number(efe_md_980501.value) + Number(efe_md_980502.value) + Number(efe_md_980503.value) + Number(efe_md_980504.value) + Number(efe_md_980505.value) + Number(efe_md_980506.value) + Number(efe_md_980507.value)).toFixed(2))

  console.log('comprobación: efe_md_9805', efe_md_9805.value)

  const efe_md_9806 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20103")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20103_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  console.log('comprobación: efe_md_9806', efe_md_9806.value)

  const efe_md_9807 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9807")).toFixed(2)
  })

  console.log('comprobación: efe_md_9807', efe_md_9807.value)

  const efe_md_9808 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_201120202")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_201120202_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  console.log('comprobación: efe_md_9808', efe_md_9808.value)

  const efe_md_9809 = computed(() => {
    return Number(reportStore.getSingleReportValue("conciliacionganancianetaifluc", "efe_md_9809")).toFixed(2)
  })

  console.log('comprobación: efe_md_9809', efe_md_9809.value)

  const efe_md_981001 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20101")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20101_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981002 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_981003 = computed(() => {
    return (0).toFixed(2)
  })

  const efe_md_981004 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20105")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20105_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981005 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20106")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20106_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981006 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20107")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20107_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981007 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_601")).toFixed(2)
  })

  const efe_md_981008 = computed(() => {
    return Number(reportStore.getSingleReportValue("resultadosifluc", "eri_603")).toFixed(2)
  })

  const efe_md_981009 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20108")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20108_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981010 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20109")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20109_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981011 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20110")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20110_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981012 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20111")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20111_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981013 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20113")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20113_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_981014 = computed(() => {
    const current = reportStore.getSingleReportValue("pasivoscorrientesifluc", "esf_20114")
    const previous = reportStore.getSingleReportValue("pasivoscorrientesifluc_ant", "esf_20114_ant", true)

    return (Number(current) - Number(previous)).toFixed(2)
  })

  const efe_md_9810 = ref((Number(efe_md_981001.value) + Number(efe_md_981002.value) + Number(efe_md_981003.value) + Number(efe_md_981004.value) + Number(efe_md_981005.value) + Number(efe_md_981006.value) + Number(efe_md_981007.value) + Number(efe_md_981008.value) + Number(efe_md_981009.value) + Number(efe_md_981010.value) + Number(efe_md_981011.value) + Number(efe_md_981012.value) + Number(efe_md_981013.value) + Number(efe_md_981014.value)).toFixed(2))

  console.log('comprobación: efe_md_9810', efe_md_9810.value)

  const efe_md_98 = ref((Number(efe_md_9801.value) + Number(efe_md_9802.value) + Number(efe_md_9803.value) + Number(efe_md_9804.value) + Number(efe_md_9805.value) + Number(efe_md_9806.value) + Number(efe_md_9807.value) + Number(efe_md_9808.value) + Number(efe_md_9809.value) + Number(efe_md_9810.value)).toFixed(2))

  console.log('comprobación: efe_md_98', efe_md_98.value)

  return (Number(efe_md_96.value) + Number(efe_md_97.value) + Number(efe_md_98.value)).toFixed(2)
}

export const calcularEfeCuadre = () => {
  const reportStore = useReportStore()
  const activoscorrientes = reportStore.getReportData("activoscorrientesifluc")

  const efe_md_9507 = calcular_9507()

  const esf_10101 = computed(() => {
    return activoscorrientes?.esf_10101
  })

  const diferenciaPorCuadrarActividadesDeFinanciamiento = (Number(efe_md_9507) - Number(esf_10101.value)).toFixed(2)

  const efe_9820 = computed(() => calcular_9820())

  const efe_9501 = computed(() => calcular_9501())

  const diferenciaPorCuadrarConciliacion = (Number(efe_9820.value) - Number(efe_9501.value)).toFixed(2)

  const diff = Number(diferenciaPorCuadrarActividadesDeFinanciamiento) - Number(diferenciaPorCuadrarConciliacion)

  const hayCuadre = diff == 0

  localStorage.setItem('efeCuadre', hayCuadre)

  return hayCuadre
}

// PERIODO ANTERIOR
export const calcular_9501_ant = () => {
  const reportStore = useReportStore()

  const getComputedSum = (keys, isAnt = true) => {
    return computed(() => {
      return keys.reduce((sum, key) => {
        const value = Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc_ant", key, isAnt))

        return sum + value
      }, 0).toFixed(2)
    })
  }

  // Define keys for different computations
  const keys_95010101 = Array.from({ length: 21 }, (_, i) => `efe_md_95010101${String(i + 1).padStart(2, "0")}_ant`)
  const keys_95010102 = Array.from({ length: 7 }, (_, i) => `efe_md_950101020${i + 1}_ant`)
  const keys_95010201 = Array.from({ length: 56 }, (_, i) => `efe_md_95010201${String(i + 1).padStart(2, "0")}_ant`)
  const keys_95010203 = ["efe_md_9501020301_ant", "efe_md_9501020302_ant", "efe_md_9501020303_ant"]
  const keys_950108 = ["efe_md_95010801_ant", "efe_md_95010802_ant", "efe_md_95010809_ant", "efe_md_95010810_ant"]

  // Computed sums
  const efe_md_95010101_ant = getComputedSum(keys_95010101)
  const efe_md_95010102_ant = getComputedSum(keys_95010102)
  const efe_md_95010201_ant = getComputedSum(keys_95010201)
  const efe_md_95010203_ant = getComputedSum(keys_95010203)
  const efe_md_950108_ant = getComputedSum(keys_950108)

  const efe_md_950101_ant = computed(() => {
    return (
      Number(efe_md_95010101_ant.value) +
      Number(efe_md_95010102_ant.value) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010103_ant", true)) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010104_ant", true)) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010105_ant", true))
    ).toFixed(2)
  })

  const efe_md_950102_ant = computed(() => {
    return (
      Number(efe_md_95010201_ant.value) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010202_ant", true)) +
      Number(efe_md_95010203_ant.value) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010204_ant", true)) +
      Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_95010205_ant", true))
    ).toFixed(2)
  })

  const efe_md_950105_ant = getComputedSum(["efe_md_95010501_ant", "efe_md_95010502_ant", "efe_md_95010503_ant"])
  const efe_md_950107_ant = getComputedSum(["efe_md_95010701_ant", "efe_md_95010702_ant", "efe_md_95010703_ant"])

  // Final computation
  return (
    Number(efe_md_950101_ant.value) +
    Number(efe_md_950102_ant.value) +
    Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_950103_ant", true)) +
    Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_950104_ant", true)) +
    Number(efe_md_950105_ant.value) +
    Number(reportStore.getSingleReportValue("actividadesdeoperacionifluc", "efe_md_950106_ant", true)) +
    Number(efe_md_950107_ant.value) +
    Number(efe_md_950108_ant.value)
  ).toFixed(2)
}

export const calcular_9502_ant = () => {
  const reportStore = useReportStore()

  const getComputedSum = (keys, isAnt = true) => {
    return computed(() => {
      return keys.reduce((sum, key) => {
        const value = Number(reportStore.getSingleReportValue("actividadesdeinversionifluc_ant", key, true))

        return sum + value
      }, 0).toFixed(2)
    })
  }

  // Claves para diferentes cálculos
  const keysIndividual = [
    "efe_md_950201_ant",
    "efe_md_950202_ant",
    "efe_md_950203_ant",
    "efe_md_950204_ant",
    "efe_md_950205_ant",
    "efe_md_950206_ant",
    "efe_md_950207_ant",
    "efe_md_950208_ant",
    "efe_md_950209_ant",
    "efe_md_950210_ant",
    "efe_md_950211_ant",
    "efe_md_950212_ant",
    "efe_md_950214_ant",
    "efe_md_950215_ant",
    "efe_md_950216_ant",
    "efe_md_950217_ant",
    "efe_md_950218_ant",
    "efe_md_950219_ant",
    "efe_md_950220_ant",
  ]

  const keys950213 = [
    "efe_md_95021301_ant",
    "efe_md_95021302_ant",
    "efe_md_95021303_ant",
  ]

  const keys950221 = Array.from({ length: 10 }, (_, i) => `efe_md_950221${String(i + 1).padStart(2, "0")}_ant`)

  // Cálculos
  const efe_md_950213_ant = getComputedSum(keys950213)
  const efe_md_950221_ant = getComputedSum(keys950221)

  const totalIndividual = getComputedSum(keysIndividual)

  // Cálculo final
  return (
    Number(totalIndividual.value) +
    Number(efe_md_950213_ant.value) +
    Number(efe_md_950221_ant.value)
  ).toFixed(2)
}

export const calcular_9820_ant = () => {
  const reportStore = useReportStore()

  const obtenerDatoAnt = key => {
    return Number(reportStore.getReportData("conciliacionganancianeta_ant", true)?.[key])
  }

  const calcularSuma = keys => {
    return keys.reduce((total, key) => total + obtenerDatoAnt(key), 0).toFixed(2)
  }

  const efe_md_96_ant = computed(() => obtenerDatoAnt("efe_md_96_ant").toFixed(2))

  const efe_md_9701_ant = computed(() =>
    calcularSuma(["efe_md_970101_ant", "efe_md_970102_ant", "efe_md_970103_ant"]),
  )

  const efe_md_9702_ant = computed(() =>
    calcularSuma([
      "efe_md_970201_ant",
      "efe_md_970202_ant",
      "efe_md_970203_ant",
      "efe_md_970204_ant",
      "efe_md_970205_ant",
      "efe_md_970206_ant",
      "efe_md_970207_ant",
    ]),
  )

  const efe_md_9708_ant = computed(() =>
    calcularSuma(["efe_md_970801_ant", "efe_md_970802_ant"]),
  )

  const efe_md_9711_ant = computed(() =>
    calcularSuma([
      "efe_md_971101_ant",
      "efe_md_971102_ant",
      "efe_md_971103_ant",
      "efe_md_971104_ant",
      "efe_md_971105_ant",
      "efe_md_971106_ant",
      "efe_md_971107_ant",
      "efe_md_971108_ant",
      "efe_md_971109_ant",
      "efe_md_971110_ant",
      "efe_md_971111_ant",
      "efe_md_971112_ant",
      "efe_md_971113_ant",
      "efe_md_971114_ant",
      "efe_md_971115_ant",
      "efe_md_971116_ant",
      "efe_md_971117_ant",
      "efe_md_971118_ant",
      "efe_md_971119_ant",
      "efe_md_971120_ant",
      "efe_md_971121_ant",
      "efe_md_971122_ant",
      "efe_md_971123_ant",
      "efe_md_971124_ant",
    ]),
  )

  const efe_md_97_ant = computed(() =>
    calcularSuma([
      efe_md_9701_ant.value,
      efe_md_9702_ant.value,
      "efe_md_9703_ant",
      "efe_md_9704_ant",
      "efe_md_9705_ant",
      "efe_md_9706_ant",
      "efe_md_9707_ant",
      efe_md_9708_ant.value,
      "efe_md_9709_ant",
      "efe_md_9710_ant",
      efe_md_9711_ant.value,
    ]),
  )

  const efe_md_9801_ant = computed(() =>
    calcularSuma([
      "efe_md_980101_ant",
      "efe_md_980102_ant",
      "efe_md_980103_ant",
      "efe_md_980104_ant",
      "efe_md_980105_ant",
      "efe_md_980106_ant",
    ]),
  )

  const efe_md_9804_ant = computed(() =>
    calcularSuma(["efe_md_980401_ant", "efe_md_980402_ant", "efe_md_980403_ant", "efe_md_980404_ant"]),
  )

  const efe_md_9805_ant = computed(() =>
    calcularSuma([
      "efe_md_980501_ant",
      "efe_md_980502_ant",
      "efe_md_980503_ant",
      "efe_md_980504_ant",
      "efe_md_980505_ant",
      "efe_md_980506_ant",
      "efe_md_980507_ant",
    ]),
  )

  const efe_md_9810_ant = computed(() =>
    calcularSuma([
      "efe_md_981001_ant",
      "efe_md_981002_ant",
      "efe_md_981003_ant",
      "efe_md_981004_ant",
      "efe_md_981005_ant",
      "efe_md_981006_ant",
      "efe_md_981007_ant",
      "efe_md_981008_ant",
      "efe_md_981009_ant",
      "efe_md_981010_ant",
      "efe_md_981011_ant",
      "efe_md_981012_ant",
      "efe_md_981013_ant",
      "efe_md_981014_ant",
    ]),
  )

  const efe_md_98_ant = computed(() =>
    calcularSuma([
      efe_md_9801_ant.value,
      "efe_md_9802_ant",
      "efe_md_9803_ant",
      efe_md_9804_ant.value,
      efe_md_9805_ant.value,
      "efe_md_9806_ant",
      "efe_md_9807_ant",
      "efe_md_9808_ant",
      "efe_md_9809_ant",
      efe_md_9810_ant.value,
    ]),
  )

  return (Number(efe_md_96_ant.value) + Number(efe_md_97_ant.value) + Number(efe_md_98_ant.value)).toFixed(2)
}

export const calcular_eri_401_ant = () => {
  const reportStore = useReportStore()

  const obtenerIngresoAnt = key => {
    return Number(reportStore.getReportData("ingresos_ant", true)?.[key]).toFixed(2)
  }

  const eri_40101_ant = ref(Number(reportStore.getReportData("ingresosifluc")?.eri_40101).toFixed(2))

  const eri_40102_ant = computed(() => calcular_eri_40102_ant())

  const eri_40106_ant = computed(() => calcular_eri_40106_ant())

  const eri_40109_ant = computed(() => calcular_eri_40109_ant())

  const eri_40110_ant = computed(() => calcular_eri_40110_ant())

  const resultado = [
    eri_40101_ant.value,
    eri_40102_ant.value,
    obtenerIngresoAnt("eri_40103_ant"),
    obtenerIngresoAnt("eri_40104_ant"),
    obtenerIngresoAnt("eri_40105_ant"),
    eri_40106_ant.value,
    obtenerIngresoAnt("eri_40107_ant"),
    obtenerIngresoAnt("eri_40108_ant"),
    eri_40109_ant.value,
    eri_40110_ant.value,
    obtenerIngresoAnt("eri_40112_ant"),
    obtenerIngresoAnt("eri_40113_ant"),
    obtenerIngresoAnt("eri_40114_ant"),
    obtenerIngresoAnt("eri_40115_ant"),
    obtenerIngresoAnt("eri_40116_ant"),
  ].reduce((total, value) => total + value, 0)

  return resultado.toFixed(2)
}

export const calcular_eri_40102_ant = () => {
  const reportStore = useReportStore()

  const obtenerIngreso = key => {
    return Number(reportStore.getReportData("ingresosifluc")?.[key]).toFixed(2)
  }

  const resultado = [
    obtenerIngreso("eri_4010201"),
    obtenerIngreso("eri_4010202"),
    obtenerIngreso("eri_4010203"),
    obtenerIngreso("eri_4010204"),
  ].reduce((total, value) => total + value, 0)

  return resultado.toFixed(2)
}

export const calcular_eri_40106_ant = () => {
  const reportStore = useReportStore()

  const obtenerIngreso = key => {
    return Number(reportStore.getReportData("ingresosifluc")?.[key]).toFixed(2)
  }

  const resultado = [
    obtenerIngreso("eri_4010601"),
    obtenerIngreso("eri_4010602"),
    obtenerIngreso("eri_4010603"),
  ].reduce((total, value) => total + value, 0)

  return resultado.toFixed(2)
}

export const calcular_eri_40109_ant = () => {
  const eri_4010901 = computed(() => {
    return calcular_eri_4010901()
  })

  const eri_4010902 = computed(() => {
    return calcular_eri_4010902()
  })

  const eri_4010903 = computed(() => {
    return calcular_eri_4010903()
  })

  return (Number(eri_4010901.value) + Number(eri_4010902.value) + Number(eri_4010903.value)).toFixed(2)
}

export const calcular_eri_4010901_ant = () => {
  const eri_401090101_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090101_ant
  })

  const eri_401090103_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090103_ant
  })

  const eri_401090104_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090104_ant
  })

  const eri_401090105_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090105_ant
  })

  const eri_401090106_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090106_ant
  })

  return (Number(eri_401090101_ant.value) + Number(eri_401090103_ant.value) + Number(eri_401090104_ant.value) + Number(eri_401090105_ant.value) + Number(eri_401090106_ant.value)).toFixed(2)
}

export const calcular_eri_4010902_ant  = () => {
  const eri_401090201_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090201_ant
  })

  const eri_401090202_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090202_ant
  })

  const eri_401090203_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090203_ant
  })

  const eri_401090204_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090204_ant
  })

  const eri_401090205_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090205_ant
  })

  const eri_401090206_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090206_ant
  })

  const eri_401090207_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090207_ant
  })

  const eri_401090208_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090208_ant
  })

  return(Number(eri_401090201_ant.value) + Number(eri_401090202_ant.value) + Number(eri_401090203_ant.value) + Number(eri_401090204_ant.value) + Number(eri_401090205_ant.value) + Number(eri_401090206_ant.value) + Number(eri_401090207_ant.value) + Number(eri_401090208_ant.value)).toFixed(2)
}

export const calcular_eri_4010903_ant = () => {
  const eri_401090301_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090301_ant
  })

  const eri_401090302_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090302_ant
  })

  const eri_401090303_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090303_ant
  })

  const eri_401090304_ant = computed(() => {
    return JSON.parse(localStorage.getItem('ingresos_ant')).eri_401090304_ant
  })

  return (Number(eri_401090301_ant.value) + Number(eri_401090302_ant.value) + Number(eri_401090303_ant.value) + Number(eri_401090304_ant.value)).toFixed(2)
}

export const calcular_eri_40110_ant = () => {
  const claves = [
    'eri_4011001_ant',
    'eri_4011002_ant',
    'eri_4011003_ant',
    'eri_4011004_ant',
    'eri_4011005_ant',
    'eri_4011006_ant',
  ]

  const reportStore = useReportStore()
  const ingresosAnt = reportStore.getReportData("ingresos_ant")

  const resultado = claves
    .map(clave => Number(ingresosAnt[clave]))
    .reduce((total, valor) => total + valor, 0)

  return resultado.toFixed(2)
}

export const calcular_eri_403_ant = () => {
  const claves = ['eri_40301_ant', 'eri_40302_ant', 'eri_40303_ant']

  const reportStore = useReportStore()
  const otrosIngresosAnt = reportStore.getReportData("otrosingresos_ant", true)

  const resultado = claves
    .map(clave => Number(otrosIngresosAnt[clave]))
    .reduce((total, valor) => total + valor, 0)

  return resultado.toFixed(2)
}

export const calcular_eri_501_ant = () => {
  const eri_50101_ant = computed(() => {
    return calcular_eri_50101_ant()
  })

  const eri_50102_ant = computed(() => {
    return calcular_eri_50102_ant()
  })

  const eri_50103_ant = computed(() => {
    return calcular_eri_50103_ant()
  })

  const eri_50104_ant = computed(() => {
    return calcular_eri_50104_ant()
  })

  const eri_50105_ant = computed(() => {
    return calcular_eri_50105_ant()
  })

  return (Number(eri_50101_ant.value) + Number(eri_50102_ant.value) + Number(eri_50103_ant.value) + Number(eri_50104_ant.value) + Number(eri_50105_ant.value)).toFixed(2)
}

export const calcular_eri_50101_ant = () => {
  const reportStore = useReportStore()

  const activosCorrientesAnt = reportStore.getReportData("activoscorrientesifluc_ant")
  const costosAnt = reportStore.getReportData("costos_ant", true)

  const localStoreData = (key, fallback) =>
    localStorage.getItem(key) ? Number(localStorage.getItem(key)) : fallback

  const eri_5010101_ant = localStoreData(
    'esf_1010306_ant',
    Number(activosCorrientesAnt.esf_1010306_ant),
  ).toFixed(2)

  const eri_5010102_ant = (costosAnt.eri_5010102).toFixed(2)
  const eri_5010103_ant = (costosAnt.eri_5010103).toFixed(2)

  const eri_5010104_ant = (localStoreData('esf_1010306', Number(activosCorrientesAnt.esf_1010306)) * -1).toFixed(2)

  const eri_5010105_ant = localStoreData(
    'esf_1010301_ant',
    Number(activosCorrientesAnt.esf_1010301_ant),
  ).toFixed(2)

  const eri_5010106_ant = (costosAnt.eri_5010106).toFixed(2)
  const eri_5010107_ant = (costosAnt.eri_5010107).toFixed(2)

  const eri_5010108_ant = (localStoreData('esf_1010301', Number(activosCorrientesAnt.esf_1010301)) * -1).toFixed(2)

  const eri_5010109_ant = localStoreData(
    'esf_1010302_ant',
    Number(activosCorrientesAnt.esf_1010302_ant),
  ).toFixed(2)

  const eri_5010110_ant = (costosAnt.eri_5010110).toFixed(2)

  const eri_5010111_ant = localStoreData(
    'esf_1010305_ant',
    Number(activosCorrientesAnt.esf_1010305_ant),
  ).toFixed(2)

  const eri_5010112_ant = (localStoreData('esf_1010305', Number(activosCorrientesAnt.esf_1010305)) * -1).toFixed(2)

  return (
    Number(eri_5010101_ant) +
    Number(eri_5010102_ant) +
    Number(eri_5010103_ant) +
    Number(eri_5010104_ant) +
    Number(eri_5010105_ant) +
    Number(eri_5010106_ant) +
    Number(eri_5010107_ant) +
    Number(eri_5010108_ant) +
    Number(eri_5010109_ant) +
    Number(eri_5010110_ant) +
    Number(eri_5010111_ant) +
    Number(eri_5010112_ant)
  ).toFixed(2)
}

export const calcular_eri_50102_ant = () => {
  const reportStore = useReportStore()
  const costosAnt = reportStore.getReportData("costos_ant", true)

  const eri_5010201_ant = Number(costosAnt.eri_5010201_ant).toFixed(2)
  const eri_5010202_ant = Number(costosAnt.eri_5010202_ant).toFixed(2)

  return (Number(eri_5010201_ant) + Number(eri_5010202_ant)).toFixed(2)
}

export const calcular_eri_50103_ant = () => {
  const reportStore = useReportStore()
  const costosAnt = reportStore.getReportData("costos_ant", true)

  const eri_5010301_ant = Number(costosAnt.eri_5010301_ant).toFixed(2)
  const eri_5010302_ant = Number(costosAnt.eri_5010302_ant).toFixed(2)

  return (Number(eri_5010301_ant) + Number(eri_5010302_ant)).toFixed(2)
}

export const calcular_eri_50104_ant = () => {
  const reportStore = useReportStore()
  const costosAnt = reportStore.getReportData("costos_ant", true)

  const eri_5010401_ant = Number(costosAnt.eri_5010401_ant).toFixed(2)
  const eri_5010402_ant = Number(costosAnt.eri_5010402_ant).toFixed(2)
  const eri_5010403_ant = Number(costosAnt.eri_5010403_ant).toFixed(2)
  const eri_5010404_ant = Number(costosAnt.eri_5010404_ant).toFixed(2)
  const eri_5010405_ant = Number(costosAnt.eri_5010405_ant).toFixed(2)
  const eri_5010406_ant = Number(costosAnt.eri_5010406_ant).toFixed(2)
  const eri_5010407_ant = Number(costosAnt.eri_5010407_ant).toFixed(2)
  const eri_5010408_ant = Number(costosAnt.eri_5010408_ant).toFixed(2)

  return (
    Number(eri_5010401_ant) +
    Number(eri_5010402_ant) +
    Number(eri_5010403_ant) +
    Number(eri_5010404_ant) +
    Number(eri_5010405_ant) +
    Number(eri_5010406_ant) +
    Number(eri_5010407_ant) +
    Number(eri_5010408_ant)
  ).toFixed(2)
}

export const calcular_eri_50105_ant = () => {
  const reportStore = useReportStore()
  const costosAnt = reportStore.getReportData("costos_ant", true)

  return  Number(costosAnt.eri_5010501_ant).toFixed(2)
}

export const  calcular_eri_502_ant = () => {
  const eri_50201_ant = computed(() => {
    return calcular_eri_50201_ant()
  })

  const eri_50202_ant = computed(() => {
    return calcular_eri_50202_ant()
  })

  const eri_50203_ant = computed(() => {
    return calcular_eri_50203_ant()
  })

  const eri_50204_ant = computed(() => {
    return calcular_eri_50204_ant()
  })

  return (Number(eri_50201_ant.value) + Number(eri_50202_ant.value) + Number(eri_50203_ant.value) + Number(eri_50204_ant.value)).toFixed(2)
}

export const calcular_eri_50201_ant = () => {
  const reportStore = useReportStore()
  const gastosDeVentasAnt = reportStore.getReportData("gastosdeventas_ant", true)

  const getValue = key => Number(gastosDeVentasAnt[key])

  const eri_5020120_ant = (
    getValue("eri_502012001_ant") +
    getValue("eri_502012002_ant") +
    getValue("eri_502012003_ant")
  ).toFixed(2)

  const eri_5020121_ant = (
    getValue("eri_502012101_ant") +
    getValue("eri_502012102_ant")
  ).toFixed(2)

  const eri_5020122_ant = (
    getValue("eri_502012201_ant") +
    getValue("eri_502012202_ant") +
    getValue("eri_502012203_ant") +
    getValue("eri_502012204_ant") +
    getValue("eri_502012205_ant") +
    getValue("eri_502012206_ant") +
    getValue("eri_502012207_ant")
  ).toFixed(2)

  const eri_5020123_ant = (
    getValue("eri_502012301_ant") +
    getValue("eri_502012302_ant") +
    getValue("eri_502012303_ant")
  ).toFixed(2)

  return (
    getValue("eri_5020101_ant") +
    getValue("eri_5020102_ant") +
    getValue("eri_5020103_ant") +
    getValue("eri_5020104_ant") +
    getValue("eri_5020105_ant") +
    getValue("eri_5020106_ant") +
    getValue("eri_5020107_ant") +
    getValue("eri_5020108_ant") +
    getValue("eri_5020109_ant") +
    getValue("eri_5020110_ant") +
    getValue("eri_5020111_ant") +
    getValue("eri_5020112_ant") +
    getValue("eri_5020113_ant") +
    getValue("eri_5020114_ant") +
    getValue("eri_5020115_ant") +
    getValue("eri_5020116_ant") +
    getValue("eri_5020117_ant") +
    getValue("eri_5020118_ant") +
    getValue("eri_5020119_ant") +
    Number(eri_5020120_ant) +
    Number(eri_5020121_ant) +
    Number(eri_5020122_ant) +
    Number(eri_5020123_ant) +
    getValue("eri_5020124_ant") +
    getValue("eri_5020125_ant") +
    getValue("eri_5020126_ant") +
    getValue("eri_5020127_ant") +
    getValue("eri_5020128_ant")
  ).toFixed(2)
}

export const calcular_eri_50202_ant = () => {
  const reportStore = useReportStore()
  const gastosAdministrativosAnt = reportStore.getReportData("gastosadministrativos_ant", true)

  const getValue = key => Number(gastosAdministrativosAnt[key])

  const eri_5020221_ant = (
    getValue("eri_502022101_ant") +
    getValue("eri_502022102_ant") +
    getValue("eri_502022103_ant")
  ).toFixed(2)

  const eri_5020222_ant = (
    getValue("eri_502022201_ant") +
    getValue("eri_502022202_ant")
  ).toFixed(2)

  const eri_5020223_ant = (
    getValue("eri_502022301_ant") +
    getValue("eri_502022302_ant") +
    getValue("eri_502022303_ant") +
    getValue("eri_502022304_ant") +
    getValue("eri_502022305_ant") +
    getValue("eri_502022306_ant") +
    getValue("eri_502022307_ant")
  ).toFixed(2)

  const eri_5020224_ant = (
    getValue("eri_502022401_ant") +
    getValue("eri_502022402_ant") +
    getValue("eri_502022403_ant")
  ).toFixed(2)

  return (
    getValue("eri_5020201_ant") +
    getValue("eri_5020202_ant") +
    getValue("eri_5020203_ant") +
    getValue("eri_5020204_ant") +
    getValue("eri_5020205_ant") +
    getValue("eri_5020206_ant") +
    getValue("eri_5020207_ant") +
    getValue("eri_5020208_ant") +
    getValue("eri_5020209_ant") +
    getValue("eri_5020210_ant") +
    getValue("eri_5020211_ant") +
    getValue("eri_5020212_ant") +
    getValue("eri_5020213_ant") +
    getValue("eri_5020214_ant") +
    getValue("eri_5020215_ant") +
    getValue("eri_5020216_ant") +
    getValue("eri_5020217_ant") +
    getValue("eri_5020218_ant") +
    getValue("eri_5020219_ant") +
    getValue("eri_5020220_ant") +
    Number(eri_5020221_ant) +
    Number(eri_5020222_ant) +
    Number(eri_5020223_ant) +
    Number(eri_5020224_ant) +
    getValue("eri_5020225_ant") +
    getValue("eri_5020226_ant") +
    getValue("eri_5020227_ant") +
    getValue("eri_5020228_ant") +
    getValue("eri_5020229_ant")
  ).toFixed(2)
}

export const calcular_eri_50203_ant = () => {
  const reportStore = useReportStore()
  const gastosFinancierosAnt = reportStore.getReportData("gastosfinancieros_ant", true)

  const getValue = key => Number(gastosFinancierosAnt[key])

  const eri_5020301_ant = (
    getValue("eri_502030101_ant") +
    getValue("eri_502030102_ant") +
    getValue("eri_502030103_ant") +
    getValue("eri_502030104_ant")
  ).toFixed(2)

  const eri_5020302_ant = getValue("eri_502030201_ant").toFixed(2)

  const eri_502030201_ant = (
    getValue("eri_50203020101_ant") +
    getValue("eri_50203020103_ant") +
    getValue("eri_50203020104_ant") +
    getValue("eri_50203020105_ant") +
    getValue("eri_50203020106_ant")
  ).toFixed(2)

  const eri_5020303_ant = (
    getValue("eri_502030301_ant") +
    getValue("eri_502030302_ant") +
    getValue("eri_502030303_ant") +
    getValue("eri_502030304_ant") +
    getValue("eri_502030305_ant") +
    getValue("eri_502030306_ant") +
    getValue("eri_502030307_ant") +
    getValue("eri_502030308_ant")
  ).toFixed(2)

  const eri_5020304_ant = (
    getValue("eri_502030401_ant") +
    getValue("eri_502030402_ant") +
    getValue("eri_502030403_ant") +
    getValue("eri_502030404_ant")
  ).toFixed(2)

  const eri_5020305_ant = (
    getValue("eri_502030501_ant") +
    getValue("eri_502030502_ant") +
    getValue("eri_502030503_ant") +
    getValue("eri_502030504_ant")
  ).toFixed(2)

  return (
    Number(eri_5020301_ant) +
    Number(eri_5020302_ant) +
    Number(eri_5020303_ant) +
    Number(eri_5020304_ant) +
    Number(eri_5020305_ant) +
    getValue("eri_5020306_ant") +
    getValue("eri_5020307_ant") +
    getValue("eri_5020308_ant") +
    getValue("eri_5020309_ant") +
    getValue("eri_5020310_ant") +
    getValue("eri_5020311_ant") +
    getValue("eri_5020312_ant")
  ).toFixed(2)
}

export const calcular_eri_50204_ant = () => {
  const reportStore = useReportStore()
  const otrosGastosAnt = reportStore.getReportData("otrosgastos_ant", true)

  const getValue = key => Number(otrosGastosAnt[key])

  return (getValue("eri_5020401_ant") + getValue("eri_5020402_ant")).toFixed(2)
}

export const calcular_eri_600_ant = () => {
  const reportStore = useReportStore()
  const ingresosAnt = reportStore.getReportData("ingresos_ant", true)
  const costosAnt = reportStore.getReportData("costos_ant", true)

  const eri_401_ant = computed(() => {
    return Number(ingresosAnt.eri_401_ant).toFixed(2)
  })

  const eri_501_ant = computed(() => {
    return Number(costosAnt.eri_501_ant).toFixed(2)
  })

  const eri_50201_ant = computed(() => {
    return calcular_eri_50201_ant()
  })

  const eri_50202_ant = computed(() => {
    return calcular_eri_50202_ant()
  })

  const eri_50203_ant = computed(() => {
    return calcular_eri_50203_ant()
  })

  const eri_50204_ant = computed(() => {
    return calcular_eri_50204_ant()
  })

  const eri_403_ant = computed(() => {
    return calcular_eri_403_ant()
  })

  return ((Number(eri_401_ant.value - eri_501_ant.value) - (Number(eri_50201_ant.value) + Number(eri_50202_ant.value) + Number(eri_50203_ant.value) + Number(eri_50204_ant.value))) + Number(eri_403_ant.value)).toFixed(2)
}

export const calcular_eri_602_ant = () => {
  const reportStore = useReportStore()
  const resultadosAnt = reportStore.getReportData("resultadosifluc_ant", true)

  const eri_600_ant = computed(() => {
    return calcular_eri_600_ant()
  })

  const eri_601_ant = computed(() => {
    return Number(resultadosAnt.eri_601_ant).toFixed(2)
  })

  return (Number(eri_600_ant.value) + Number(eri_601_ant.value)).toFixed(2)
}

export const calcular_eri_604_ant = () => {
  const eri_602_ant = computed(() => {
    return calcular_eri_602_ant()
  })

  const eri_603_ant = computed(() => {
    return JSON.parse(localStorage.getItem('resultadosifluc_ant')).eri_603_ant
  })

  return (Number(eri_602_ant.value) + Number(eri_603_ant.value)).toFixed(2)
}

export const calcular_eri_607_ant = () => {
  const eri_401_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('ingresos_ant')).eri_401_ant).toFixed(2)
  })

  const eri_403_ant = computed(() => {
    return calcular_eri_403_ant()
  })

  const eri_501_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('costos_ant')).eri_501_ant).toFixed(2)
  })

  const eri_50201_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('gastosdeventas_ant')).eri_50201_ant).toFixed(2)
  })

  const eri_50202_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('gastosadministrativos_ant')).eri_50202_ant).toFixed(2)
  })

  const eri_50203_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('gastosfinancieros_ant')).eri_50203_ant).toFixed(2)
  })

  const eri_50204_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('otrosgastos_ant')).eri_50204_ant).toFixed(2)
  })

  const eri_601_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('resultadosifluc_ant')).eri_601_ant).toFixed(2)
  })

  const eri_603_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('resultadosifluc_ant')).eri_603_ant).toFixed(2)
  })

  const eri_605_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('resultadosifluc_ant')).eri_605_ant).toFixed(2)
  })

  const eri_606_ant = computed(() => {
    return Number(JSON.parse(localStorage.getItem('resultadosifluc_ant')).eri_606_ant).toFixed(2)
  })

  const gastoscalculados_ant = (Number(eri_501_ant.value) + Number(eri_50201_ant.value) + Number(eri_50202_ant.value) + Number(eri_50203_ant.value) + Number(eri_50204_ant.value))

  const totalimpuestos_ant = Number(eri_601_ant.value) + Number(eri_603_ant.value) + Number(eri_605_ant.value) + Number(eri_606_ant.value)

  return (Number(eri_401_ant.value) - gastoscalculados_ant + Number(eri_403_ant.value) + totalimpuestos_ant).toFixed(2)
}

export const calcular_eri_702_ant = () => {
  const eri_700_ant = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc_ant')).eri_700_ant
  })

  const eri_701_ant = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc_ant')).eri_701_ant
  })

  return (Number(eri_700_ant.value) + Number(eri_701_ant.value)).toFixed(2)
}

export const calcular_eri_704_ant = () => {
  const eri_702 = computed(() => {
    return calcular_eri_702()
  })

  const eri_703 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_703
  })

  return (Number(eri_702.value) + Number(eri_703.value)).toFixed(2)
}

export const calcular_eri_706_ant = () => {
  const eri_704 = computed(() => {
    return calcular_eri_704()
  })

  const eri_705 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_705
  })

  return (Number(eri_704.value) + Number(eri_705.value)).toFixed(2)
}

export const calcular_eri_707_ant = () => {
  const eri_702 = ref(0)
  const eri_704 = ref(0)
  const eri_706 = ref(0)
  const eri_607 = ref(calcular_eri_607())

  const eri_701 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_701
  })

  const eri_700 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_700
  })

  eri_702.value = (Number(eri_700.value) + Number(eri_701.value)).toFixed(2)

  const eri_703 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_703
  })

  eri_704.value = (Number(eri_702.value) + Number(eri_703.value)).toFixed(2)

  const eri_705 = computed(() => {
    return JSON.parse(localStorage.getItem('operacionesdiscontinuadasifluc')).eri_705
  })

  eri_706.value = (Number(eri_704.value) + Number(eri_705.value)).toFixed(2)

  return (Number(eri_706.value) + Number(eri_607.value)).toFixed(2)

}

export const calcular_eri_800_ant = () => {
  const eri_80001 =computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80001
  })

  const eri_80002 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80002
  })

  const eri_80003 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80003
  })

  const eri_80004 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80004
  })

  const eri_80005 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80005
  })

  const eri_80006 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80006
  })

  const eri_80007 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80007
  })

  const eri_80008 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80008
  })

  const eri_80009 = computed(() => {
    return loadFromLocalStorage('otrosresultadosintegral', {}).eri_80009
  })


  return (Number(eri_80001.value) + Number(eri_80002.value) + Number(eri_80003.value) + Number(eri_80004.value) + Number(eri_80005.value) + Number(eri_80006.value) + Number(eri_80007.value) + Number(eri_80008.value) + Number(eri_80009.value)).toFixed(2)
}

export const calcular_eri_801_ant = () => {
  const eri_707 = computed(() => {
    return calcular_eri_707()
  })

  const eri_800 = computed(() => {
    return calcular_eri_800()
  })

  return (Number(eri_707.value) + Number(eri_800.value)).toFixed(2)
}

// Refactorización del método calcular_9503_ant usando reportStore

export const calcular_9503_ant = () => {
  const reportStore = useReportStore()

  const getComputedValue = (key, field) => {
    return computed(() => {
      const value = reportStore.getSingleReportValue(key, field, true)

      return value !== null ? Number(value).toFixed(2) : '0.00'
    })
  }

  const efe_md_95030101_ant = getComputedValue('ecpifluc', 'ecp_990201_301')
  const efe_md_95030102_ant = getComputedValue('ecpifluc', 'ecp_990201_302')
  const efe_md_95030103_ant = getComputedValue('ecpifluc', 'ecp_990202_301')
  const efe_md_95030104_ant = getComputedValue('ecpifluc', 'ecp_990202_302')

  const efe_md_950301_ant = computed(() => {
    return (
      Number(efe_md_95030101_ant.value) +
      Number(efe_md_95030102_ant.value) +
      Number(efe_md_95030103_ant.value) +
      Number(efe_md_95030104_ant.value)
    ).toFixed(2)
  })

  const efe_md_950302_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950302_ant')
  const efe_md_950303_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950303_ant')
  const efe_md_950304_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950304_ant')
  const efe_md_950305_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950305_ant')
  const efe_md_950306_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950306_ant')
  const efe_md_950307_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950307_ant')

  const efe_md_950308_ant = computed(() => {
    const dividendosPagados = reportStore.getSingleReportValue('otros_ant', 'mov_dividendos_dividendospagados_ant', true)

    return dividendosPagados !== null ? Number(dividendosPagados).toFixed(2) : '0.00'
  })

  const efe_md_950309_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950309_ant')

  const efe_md_95031001_ant = computed(() => {
    const esf20205 = reportStore.getSingleReportValue('pasivosnocorrientesifluc', 'esf_20205', false)
    const esf20205Ant = reportStore.getSingleReportValue('pasivosnocorrientesifluc_ant', 'esf_20205', true)

    return esf20205 !== null && esf20205Ant !== null
      ? (Number(esf20205) - Number(esf20205Ant)).toFixed(2)
      : '0.00'
  })

  const efe_md_95031002_ant = computed(() => {
    const esf202070202 = reportStore.getSingleReportValue('pasivosnocorrientesifluc', 'esf_202070202', false)
    const esf202070202Ant = reportStore.getSingleReportValue('pasivosnocorrientesifluc_ant', 'esf_202070202', true)

    return esf202070202 !== null && esf202070202Ant !== null
      ? (Number(esf202070202) - Number(esf202070202Ant)).toFixed(2)
      : '0.00'
  })

  const efe_md_95031003_ant = computed(() => {
    const esf20201 = reportStore.getSingleReportValue('pasivosnocorrientesifluc', 'esf_20201', false)
    const esf20201Ant = reportStore.getSingleReportValue('pasivosnocorrientesifluc_ant', 'esf_20201', true)

    return esf20201 !== null && esf20201Ant !== null
      ? (Number(esf20201) - Number(esf20201Ant)).toFixed(2)
      : '0.00'
  })

  const efe_md_95031004_ant = computed(() => {
    const esf20203 = reportStore.getSingleReportValue('pasivosnocorrientesifluc', 'esf_20203', false)
    const esf20203Ant = reportStore.getSingleReportValue('pasivosnocorrientesifluc_ant', 'esf_20203', true)

    return esf20203 !== null && esf20203Ant !== null
      ? (Number(esf20203) - Number(esf20203Ant)).toFixed(2)
      : '0.00'
  })

  const efe_md_95031005_ant = getComputedValue('movjubilacionpatronal_ant', 'mov_beneficiospagados_ant')
  const efe_md_95031006_ant = getComputedValue('deshaucio_ant', 'mov_beneficiospagados_ant')
  const efe_md_95031007_ant = getComputedValue('actividadesdefinanciamientoifluc_ant', 'efe_md_95031007_ant')
  const efe_md_95031008_ant = getComputedValue('ecpifluc', 'ecp_99020901_Total')

  const efe_md_950310_ant = computed(() => {
    return (
      Number(efe_md_95031001_ant.value) +
      Number(efe_md_95031002_ant.value) +
      Number(efe_md_95031003_ant.value) +
      Number(efe_md_95031004_ant.value) +
      Number(efe_md_95031005_ant.value) +
      Number(efe_md_95031006_ant.value) +
      Number(efe_md_95031007_ant.value) +
      Number(efe_md_95031008_ant.value)
    ).toFixed(2)
  })

  return (
    Number(efe_md_950301_ant.value) +
    Number(efe_md_950302_ant.value) +
    Number(efe_md_950303_ant.value) +
    Number(efe_md_950304_ant.value) +
    Number(efe_md_950305_ant.value) +
    Number(efe_md_950306_ant.value) +
    Number(efe_md_950307_ant.value) +
    Number(efe_md_950308_ant.value) +
    Number(efe_md_950309_ant.value) +
    Number(efe_md_950310_ant.value)
  ).toFixed(2)
}

export const calcular_9504_ant = () => {
  const reportStore = useReportStore()

  const efe_md_950401_ant = computed(() => {
    const value = reportStore.getSingleReportValue('actividadesdefinanciamientoifluc_ant', 'efe_md_950401_ant', true)

    return value !== null ? Number(value).toFixed(2) : '0.00'
  })

  return efe_md_950401_ant.value
}

export const calcular_9505_ant = () => {
  const financiamiento1 = parseOrZero(calcular_9501_ant())
  const financiamiento2 = parseOrZero(calcular_9502_ant())
  const financiamiento3 = parseOrZero(calcular_9503_ant())
  const financiamiento4 = parseOrZero(calcular_9504_ant())

  return (financiamiento1 + financiamiento2 + financiamiento3 + financiamiento4).toFixed(2)
}

export const calcular_9506_ant = () => {
  const reportStore = useReportStore()

  return Number(reportStore.getSingleReportValue("activoscorrientesifluc_ant", "esf_10101_ant", true)).toFixed(2)
}

export const calcular_9507_ant = () => {
  const financiamiento1 = parseOrZero(calcular_9505_ant())
  const financiamiento2 = parseOrZero(calcular_9506_ant())

  return (financiamiento1 + financiamiento2).toFixed(2)
}














