import { useEmpresaService } from "@/services/empresa.service"
import { usePeriodoService } from "@/services/periodo.service"
import { useReporteService } from "@/services/reporte.service"

export function useConvertexApi() {
  return {
    empresas: useEmpresaService(),
    periodos: usePeriodoService(),
    reportes: useReporteService(),
  }
}
