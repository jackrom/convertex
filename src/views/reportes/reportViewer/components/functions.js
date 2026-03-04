const numberFormatter = new Intl.NumberFormat("es-EC", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export const formatMoney = value => numberFormatter.format(Number(value || 0))

export const round2 = val => Number((Number(val) || 0).toFixed(2))

export const isZero = value => Math.abs(Number(value || 0)) < 0.005

export const toNumber = v => {
  const n = Number(v)

  return Number.isFinite(n) ? n : 0
}
