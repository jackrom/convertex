import { SECTOR_MODEL } from "@/utils/sector-model";

export function useSectorLogic() {

  function normalizarSector(raw) {
    return {
      ...SECTOR_MODEL,
      ...raw,
    }
  }

  function validarSector(sector) {
    if (!sector.actividadEconomica) {
      throw new Error("La actividad económica es obligatoria.")
    }
    if (!sector.codigoCiiu) {
      throw new Error("El código CIIU es obligatorio.")
    }
  }

  return {
    normalizarSector,
    validarSector,
  }
}
