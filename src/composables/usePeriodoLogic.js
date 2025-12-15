export function usePeriodoLogic() {

  function marcarDuplicados(periodos) {
    return periodos.map(p => {
      const siguiente = p.periodo + 1

      return {
        ...p,
        isDuplicated: periodos.some(
          q =>
            q.empresaid === p.empresaid &&
            q.periodo === siguiente &&
            !q.deletedat,
        ),
      }
    })
  }

  function periodosActivos(periodos) {
    return periodos.filter(p => !p.deletedat)
  }

  function aniosDisponibles(periodosEmpresa, aniosPosibles) {
    const usados = periodosEmpresa.map(p => p.periodo)

    return aniosPosibles.filter(a => !usados.includes(a))
  }

  return {
    marcarDuplicados,
    periodosActivos,
    aniosDisponibles,
  }
}
