export function normalizeEmpresa(raw) {
  return {
    id: raw.id ?? raw.ruc,
    nombre: raw.nombre ?? "",
    ruc: raw.ruc ?? "",
    email: raw.email ?? "",
    gerente: raw.gerente ?? "",
    direccion: raw.direccion ?? "",
    telefono: raw.telefono ?? "",
    ciudad: raw.ciudad ?? "",
    provincia: raw.provincia ?? "",
    origen: raw.origen ?? "convertex",
    userid: raw.userid,
    avatar: raw.avatar ?? null,
  }
}
