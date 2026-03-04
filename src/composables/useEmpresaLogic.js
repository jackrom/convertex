import { normalizeEmpresa } from "@/utils/id-normalizer"

export function useEmpresaLogic() {

  function calcularLimiteEmpresas(empresas, storage) {
    return empresas.length >= storage
  }

  function prepararListaEmpresas(listaRaw) {
    return listaRaw.map(e => normalizeEmpresa(e))
  }

  return {
    calcularLimiteEmpresas,
    prepararListaEmpresas,
  }
}
