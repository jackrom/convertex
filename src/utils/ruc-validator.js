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
// ══════════════════════════════════════════════════════════════

/**
 * Valida el formato y algoritmo de un RUC ecuatoriano.
 * @param {string} ruc
 * @returns {{ valid: boolean, error?: string }}
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

  // 6. Validación del dígito verificador
  const digits = cleaned.split("").map(Number)

  try {
    if (tercerDigito >= 0 && tercerDigito <= 5) {
      // Persona natural → módulo 10
      if (!validarModulo10(digits)) {
        return { valid: false, error: "El dígito verificador no es válido (persona natural)" }
      }
    } else if (tercerDigito === 6) {
      // Entidad pública → módulo 11 (coeficientes públicos)
      if (!validarModulo11Publico(digits)) {
        return { valid: false, error: "El dígito verificador no es válido (entidad pública)" }
      }
    } else if (tercerDigito === 9) {
      // Sociedad privada → módulo 11 (coeficientes privados)
      if (!validarModulo11Privado(digits)) {
        return { valid: false, error: "El dígito verificador no es válido (sociedad privada)" }
      }
    } else {
      return { valid: false, error: "El tercer dígito no es válido (debe ser 0-6 o 9)" }
    }
  } catch {
    return { valid: false, error: "Error al validar el dígito verificador" }
  }

  return { valid: true }
}

/**
 * Módulo 10 — Persona natural (cédula)
 * Coeficientes: [2, 1, 2, 1, 2, 1, 2, 1, 2]
 * Dígito verificador: posición 9 (índice 9)
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
 * Coeficientes: [3, 2, 7, 6, 5, 4, 3, 2]
 * Dígito verificador: posición 8 (índice 8)
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
 * Coeficientes: [4, 3, 2, 7, 6, 5, 4, 3, 2]
 * Dígito verificador: posición 9 (índice 9)
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
  if (!value) return true // requiredValidator handles empty
  const result = validarRucEcuador(value)

  return result.valid || result.error
}
