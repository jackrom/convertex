import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

pdfMake.vfs = pdfFonts.pdfMake.vfs

export function usePdfExporter() {

  function exportar(docDefinition, nombre) {
    pdfMake.createPdf(docDefinition).download(`${nombre}.pdf`)
  }

  return { exportar }
}
