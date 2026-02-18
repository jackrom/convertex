export function usePeriodoLogic() {

  function marcarDuplicados(periodos = []) {
    const activos = periodos.filter(p => !p.deletedat)

    const index = new Set(
      activos.map(p =>
        `${p.empresaid}__${Number(p.periodo)}__${Boolean(p.esconsolidado)}`,
      ),
    )

    return periodos.map(p => {
      const nextKey = `${p.empresaid}__${Number(p.periodo) + 1}__${Boolean(p.esconsolidado)}`

      return {
        ...p,
        isDuplicated: index.has(nextKey),
      }
    })
  }

  function periodosActivos(periodos) {
    return periodos.filter(p => !p.deletedat)
  }

  const buildYearIndex = (periodosEmpresa = []) => {
    const idx = new Map() // year -> { hasCon: bool, hasNo: bool }

    for (const p of periodosEmpresa) {
      if (!p || p.deletedat) continue

      const year = Number(p.periodo)
      const entry = idx.get(year) ?? { hasCon: false, hasNo: false }

      if (Boolean(p.esconsolidado)) entry.hasCon = true
      else entry.hasNo = true

      idx.set(year, entry)
    }

    return idx
  }

  // ✅ Solo filtra el año cuando ya existen las 2 versiones
  const aniosDisponibles = (periodosEmpresa = [], ANIOS = []) => {
    const idx = buildYearIndex(periodosEmpresa)

    return ANIOS.filter(year => {
      const e = idx.get(Number(year))
      const hasBoth = e?.hasCon && e?.hasNo

      return !hasBoth
    })
  }

  // ✅ Para un año seleccionado, decide qué variante falta
  // forcedEsconsolidado:
  //   - true/false => debe forzarse esa opción (solo falta esa contraparte)
  //   - null => puede escoger (no existe ninguno)
  //   - "blocked" => ya existen ambos (no debería poder crear)
  const variantRulesForYear = (periodosEmpresa = [], year) => {
    const idx = buildYearIndex(periodosEmpresa)
    const e = idx.get(Number(year)) ?? { hasCon: false, hasNo: false }

    if (e.hasCon && e.hasNo) {
      return { allowed: [], forcedEsconsolidado: "blocked" }
    }

    // si existe NO consolidado => solo falta consolidado (true)
    if (e.hasNo && !e.hasCon) {
      return { allowed: [true], forcedEsconsolidado: true }
    }

    // si existe consolidado => solo falta NO consolidado (false)
    if (e.hasCon && !e.hasNo) {
      return { allowed: [false], forcedEsconsolidado: false }
    }

    // no existe ninguno => ambos permitidos
    return { allowed: [false, true], forcedEsconsolidado: null }
  }

  return {
    marcarDuplicados,
    periodosActivos,
    aniosDisponibles,
    variantRulesForYear,
  }
}
