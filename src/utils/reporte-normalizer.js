export function normalizeReporte(raw) {

  return {
    reporteid: raw.reporteid,
    periodoid: raw.periodoId ?? raw.periodoid ?? null,
    empresaid: raw.empresaId ?? raw.empresaid ?? raw.empresaid ?? null,

    values: raw.values ?? {},

    empresa: raw.empresa ?? {},
    periodo: raw.periodo ?? {},
    esconsolidado: !!raw.esconsolidado,
    origen: raw.origen ?? "api",
    updatedat: raw.updatedat ?? null,
    createdat: raw.createdat ?? null,
  }
}
