import { NOTA_MODEL } from "@/utils/notas-model"

export function useNotasLogic() {

  function crearNota(numero) {
    return {
      ...NOTA_MODEL,
      id: crypto.randomUUID(),
      numero,
    }
  }

  function agregarNota(lista) {
    const numero = lista.length + 1
    const nueva = crearNota(numero)

    lista.push(nueva)

    return lista
  }

  function eliminarNota(lista, id) {
    const filtrado = lista.filter(n => n.id !== id)

    // renumerar
    return filtrado.map((n, idx) => ({ ...n, numero: idx + 1 }))
  }

  function normalizarNotas(raw) {
    if (!Array.isArray(raw)) return []

    return raw.map((n, index) => ({
      ...NOTA_MODEL,
      ...n,
      id: n.id ?? crypto.randomUUID(),
      numero: n.numero ?? index + 1,
    }))
  }

  return {
    crearNota,
    agregarNota,
    eliminarNota,
    normalizarNotas,
  }
}
