// src/utils/ruc-validator.js
// ══════════════════════════════════════════════════════════════
// Validador de RUC ecuatoriano
//
// Reglas:
// 1. Debe tener exactamente 13 dígitos numéricos
// 2. Los 2 primeros dígitos (provincia) deben ser 01-24 o 30
// 3. El tercer dígito determina el tipo:
//    - 0-5: Persona natural (módulo 10)
//    - 6: Entidad pública (módulo 11)
//    - 9: Sociedad privada (módulo 11)
// 4. Los 3 últimos dígitos deben ser "001"
// 5. Validación de dígito verificador según algoritmo SRI
//
// NOTA: Desde 2020, el SRI emite RUCs para S.A.S. y otros tipos
// nuevos de empresa cuyo dígito verificador no siempre coincide
// con el algoritmo clásico de módulo 11. Por eso la validación
// del dígito verificador es una ADVERTENCIA, no un bloqueo.
// ══════════════════════════════════════════════════════════════

/**
 * Valida el formato y algoritmo de un RUC ecuatoriano.
 * @param {string} ruc
 * @returns {{ valid: boolean, warning?: string, error?: string }}
 */
export function validarRucEcuador(ruc) {
  if (!ruc) return { valid: false, error: "El RUC es requerido" }

  const cleaned = String(ruc).trim()

  // 1. Solo dígitos
  if (!/^\d+$/.test(cleaned)) {
    return { valid: false, error: "El RUC debe contener solo números" }
  }

  // 2. Exactamente 13 dígitos
  if (cleaned.length !== 13) {
    return { valid: false, error: "El RUC debe tener exactamente 13 dígitos" }
  }

  // 3. Código de provincia (01-24 o 30)
  const provincia = parseInt(cleaned.substring(0, 2), 10)
  if ((provincia < 1 || provincia > 24) && provincia !== 30) {
    return { valid: false, error: "Los 2 primeros dígitos no corresponden a una provincia válida" }
  }

  // 4. Tercer dígito (tipo de contribuyente)
  const tercerDigito = parseInt(cleaned[2], 10)

  // 5. Últimos 3 dígitos deben ser "001"
  const establecimiento = cleaned.substring(10, 13)
  if (establecimiento !== "001") {
    return { valid: false, error: "Los 3 últimos dígitos deben ser 001" }
  }

  // 6. Validación del dígito verificador (NO bloqueante)
  const digits = cleaned.split("").map(Number)
  let checkDigitOk = true

  try {
    if (tercerDigito >= 0 && tercerDigito <= 5) {
      checkDigitOk = validarModulo10(digits)
    } else if (tercerDigito === 6) {
      checkDigitOk = validarModulo11Publico(digits)
    } else if (tercerDigito === 9) {
      checkDigitOk = validarModulo11Privado(digits)
    }
    // Para tercerDigito 7, 8: no hay algoritmo estándar, se acepta
  } catch {
    checkDigitOk = false
  }

  // RUC válido estructuralmente — advertencia si el dígito verificador no coincide
  if (!checkDigitOk) {
    return {
      valid: true,
      warning: "RUC aceptado. El dígito verificador no coincide con el algoritmo estándar, verifique con el SRI.",
    }
  }

  return { valid: true }
}

/**
 * Módulo 10 — Persona natural (cédula)
 */
function validarModulo10(digits) {
  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2]
  let suma = 0

  for (let i = 0; i < 9; i++) {
    let valor = digits[i] * coeficientes[i]
    if (valor >= 10) valor -= 9
    suma += valor
  }

  const residuo = suma % 10
  const verificador = residuo === 0 ? 0 : 10 - residuo

  return verificador === digits[9]
}

/**
 * Módulo 11 — Entidad pública
 */
function validarModulo11Publico(digits) {
  const coeficientes = [3, 2, 7, 6, 5, 4, 3, 2]
  let suma = 0

  for (let i = 0; i < 8; i++) {
    suma += digits[i] * coeficientes[i]
  }

  const residuo = suma % 11
  const verificador = residuo === 0 ? 0 : 11 - residuo

  return verificador === digits[8]
}

/**
 * Módulo 11 — Sociedad privada
 */
function validarModulo11Privado(digits) {
  const coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2]
  let suma = 0

  for (let i = 0; i < 9; i++) {
    suma += digits[i] * coeficientes[i]
  }

  const residuo = suma % 11
  const verificador = residuo === 0 ? 0 : 11 - residuo

  return verificador === digits[9]
}

/**
 * Validador para usar con Vuetify :rules
 * @param {string} value
 * @returns {true | string}
 */
export const rucValidator = value => {
  if (!value) return true
  const result = validarRucEcuador(value)

  if (!result.valid) return result.error
  // Advertencia no bloquea el formulario
  return true
}

/**
 * Validador que retorna el warning (para mostrarlo en UI)
 * @param {string} value
 * @returns {{ valid: boolean, warning?: string, error?: string }}
 */
export const rucValidatorFull = value => {
  if (!value) return { valid: false, error: "El RUC es requerido" }
  return validarRucEcuador(value)
}
