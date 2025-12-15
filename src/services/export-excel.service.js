import * as XLSX from "xlsx"

import { useAudit } from "@/composables/useAudit"

const audit = useAudit()

export function useExcelExporter() {

  function exportarExcel(reporte) {
    const wb = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([reporte.ecp]), "ECP")
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([reporte.eri]), "ERI")
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([reporte.esf]), "ESF")
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(reporte.notas), "Notas")
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet([reporte.sector]), "Sector")

    audit.registrar({
      modulo: "export",
      accion: "export_excel",
      targetId: reporte.id,
      empresaId: reporte.empresaId,
      periodoId: reporte.periodoId,
      meta: { tipo: "excel" },
    })

    XLSX.writeFile(wb, "Reporte-Financiero.xlsx")
  }

  return { exportarExcel }
}
