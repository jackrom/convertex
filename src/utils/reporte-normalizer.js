export function normalizeReporte(raw) {
  return {
    id: raw.id,
    periodoId: raw.periodoId ?? raw.periodoid ?? null,
    empresaId: raw.empresaId ?? raw.empresaid ?? raw.empresa_id ?? null,

    ecp: raw.ecp ?? {},
    eri: raw.eri ?? {},
    esf: raw.esf ?? {},
    notas: raw.notas ?? [],
    sector: raw.sector ?? null,

    origen: raw.origen ?? "api",
    updatedAt: raw.updatedAt ?? null,
    createdAt: raw.createdAt ?? null,
  }
}
