export function normalizePeriodo(raw) {
  return {
    id: raw.id,
    periodo: Number(raw.periodo),
    empresaid: raw.empresaid,
    empresa: raw.empresa ?? null,
    createdat: raw.createdat ?? null,
    deletedat: raw.deletedat ?? null,
  }
}
