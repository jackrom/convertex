// src/utils/plan-cuentas.js
// Carga de catálogos JSON (ajusta las rutas a donde tengas tus archivos)
import esfRaw from "@/assets/jsondata/esf.json"
import eriRaw from "@/assets/jsondata/eri.json"
import ecpRaw from "@/assets/jsondata/ecp.json"
import efeRaw from "@/assets/jsondata/efe.json"

// Construye un Map<string, string> = CODIGO -> NOMBRE DE LA CUENTA
function buildCatalogMap(raw = []) {
  const map = new Map()

  for (const item of raw) {
    if (!item || !item.CODIGO) continue

    const codigo = String(item.CODIGO).trim()
    const nombre = String(item["NOMBRE DE LA CUENTA"] || "").trim()

    if (!codigo) continue

    map.set(codigo, nombre)
  }

  return map
}

// Mapas por tipo de reporte
const esfMap = buildCatalogMap(esfRaw)
const eriMap = buildCatalogMap(eriRaw)
const ecpMap = buildCatalogMap(ecpRaw)
const efeMap = buildCatalogMap(efeRaw)

// Mapeo tipo -> prefijo real en nombrecampo
// ej: esf_10101, eri_40101, ecp_3xxxx, efe_md_20101
const tipoToPrefix = {
  esf: "esf",
  eri: "eri",
  ecp: "ecp",
  efe: "efe_md",
}

// Mapeo tipo -> catálogo
const tipoToCatalog = {
  esf: esfMap,
  eri: eriMap,
  ecp: ecpMap,
  efe: efeMap,
}

/**
 * Devuelve el nombre de la cuenta dado el tipo de estado y el código del plan
 * @param {"esf" | "eri" | "ecp" | "efe"} tipo
 * @param {string|number} codigo
 * @returns {string|null}
 */
export function getNombreCuenta(tipo, codigo) {
  const catalog = tipoToCatalog[tipo]
  if (!catalog) return null

  const key = String(codigo).trim()

  return catalog.get(key) || null
}

/**
 * Parsear nombrecampo -> { codigo, isAnterior }
 *
 * Soporta formatos:
 *  - esf_10101
 *  - esf_10101_ant
 *  - esf_ant_10101
 *  - eri_40101
 *  - ecp_3010201
 *  - efe_md_20101
 *  - efe_md_20101_ant
 *  - efe_md_ant_20101
 */
export function parseNombreCampo(tipo, nombrecampo) {
  if (!nombrecampo) return null

  const prefix = tipoToPrefix[tipo] || tipo
  const nc = String(nombrecampo)

  // 1) prefijo + código + _ant  → esf_10101_ant / efe_md_20101_ant
  let regex = new RegExp(`^${prefix}_(\\d+)_ant$`)
  let m = nc.match(regex)
  if (m) {
    return {
      codigo: m[1],
      isAnterior: true,
    }
  }

  // 2) prefijo + ant_ + código → esf_ant_10101 / efe_md_ant_20101
  regex = new RegExp(`^${prefix}_ant_(\\d+)$`)
  m = nc.match(regex)
  if (m) {
    return {
      codigo: m[1],
      isAnterior: true,
    }
  }

  // 3) prefijo + código → esf_10101 / efe_md_20101
  regex = new RegExp(`^${prefix}_(\\d+)$`)
  m = nc.match(regex)
  if (m) {
    return {
      codigo: m[1],
      isAnterior: false,
    }
  }

  return null
}
