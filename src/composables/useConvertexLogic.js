export function useConvertexLogic() {

  function calcularAniosDisponibles(periodosEmpresa, aniosPosibles) {
    const usados = periodosEmpresa.map(p => p.periodo)

    return aniosPosibles.filter(a => !usados.includes(a))
  }

  function marcarDuplicados(periodos) {
    return periodos.map(p => {
      const siguiente = p.periodo + 1

      return {
        ...p,
        isDuplicated: periodos.some(
          q => q.empresaid === p.empresaid && q.periodo === siguiente,
        ),
      }
    })
  }

  return {
    calcularAniosDisponibles,
    marcarDuplicados,
  }
}
