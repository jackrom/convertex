import { usePdfExporter } from "@/services/export-pdf.service"
import { ecpTemplate } from "@/utils/pdf-templates/ecp.template"
import { eriTemplate } from "@/utils/pdf-templates/eri.template"
import { esfTemplate } from "@/utils/pdf-templates/esf.template"
import { notasTemplate } from "@/utils/pdf-templates/notas.template"
import { sectorTemplate } from "@/utils/pdf-templates/sector.template"

import { useAudit } from "@/composables/useAudit"

const audit = useAudit()

export function useExporter() {
  const pdf = usePdfExporter()

  function exportarPdf(reporte) {
    const doc = {
      content: [
        { text: "Reporte Financiero Convertex", style: "titulo", margin: [0, 0, 0, 20] },

        { text: "ECP", style: "subtitulo" },
        ecpTemplate(reporte.ecp),

        { text: "ERI", style: "subtitulo", margin: [0, 20, 0, 0] },
        eriTemplate(reporte.eri),

        { text: "ESF", style: "subtitulo", margin: [0, 20, 0, 0] },
        esfTemplate(reporte.esf),

        { text: "Notas", style: "subtitulo", margin: [0, 20, 0, 0] },
        ...notasTemplate(reporte.notas),

        { text: "Sector", style: "subtitulo", margin: [0, 20, 0, 0] },
        sectorTemplate(reporte.sector),
      ],

      styles: {
        titulo: { fontSize: 16, bold: true },
        subtitulo: { fontSize: 14, bold: true },
      },
    }

    audit.registrar({
      modulo: "export",
      accion: "export_pdf",
      targetId: reporte.id,
      empresaId: reporte.empresaId,
      periodoId: reporte.periodoId,
      antes: null,
      despues: null,
      meta: { tipo: "pdf" },
    })

    pdf.exportar(doc, "Reporte-Financiero")
  }

  return { exportarPdf }
}
