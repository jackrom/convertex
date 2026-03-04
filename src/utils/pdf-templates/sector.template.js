export function sectorTemplate(sector) {
  return {
    table: {
      widths: ["*", "auto"],
      body: [
        ["Actividad Económica", sector.actividadEconomica],
        ["Código CIIU", sector.codigoCiiu],
        ["Descripción", sector.descripcion],
        ["Tipo de Empresa", sector.tipoEmpresa],
        ["Sector Económico", sector.sectorEconomico],
      ],
    },
    layout: "lightHorizontalLines",
  }
}
