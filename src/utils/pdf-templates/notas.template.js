export function notasTemplate(notas) {
  return notas.map(nota => [
    { text: `Nota ${nota.numero}: ${nota.titulo}`, bold: true, margin: [0, 10, 0, 4] },
    nota.contenido,
  ])
}
