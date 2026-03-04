export function normalizePeriodo(raw) {
  return {
    id: raw.id,
    periodo: Number(raw.periodo),
    empresaid: raw.empresaid,
    empresa: raw.empresa ?? null,
    esconsolidado: !!raw.esconsolidado,
    createdat: raw.createdat ?? null,
    deletedat: raw.deletedat ?? null,
  }
}
