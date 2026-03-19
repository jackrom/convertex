// src/utils/periodo-normalizer.js
export function normalizePeriodo(raw) {
  return {
    id: raw.id,
    periodo: Number(raw.periodo),
    empresaid: raw.empresaid,
    empresa: raw.empresa ?? null,
    tiporeporte: raw.tiporeporte || "individual",
    createdat: raw.createdat ?? null,
    deletedat: raw.deletedat ?? null,
  }
}
