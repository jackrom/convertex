class InformeEri {
  constructor() {
    this.codigoseri = []
  }

  pasarObjetoEri(nombre, obj, codigoseri) {
    let textoeri = ''

    Object.keys(obj).forEach(key => {
      if (nombre === 'eri.ingresos' && key == 'eri_401') {
        console.log('eri_401', obj[key])
        codigoseri.push(key)
        textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
      }
      if (
        key == 'eri_401' ||
        key == 'eri_5' ||
        key == 'empresaId' ||
        key == 'id' ||
        key == 'periodoId' ||
        key == 'reporteId' ||
        key == 'userId' ||
        key == 'createdAt' ||
        key == 'updatedAt'
      ) {
        // console.log(key)
      } else {
        if (codigoseri.findIndex(r => r == key) < 0) {
          // cambiar a positivos los codigod ERI 601 y 603 debido a un error del SRI
          if (key == 'eri_601' && obj[key] < 0 || key == 'eri_603' && obj[key] < 0) {
            codigoseri.push(key)
            textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key] * -1).toFixed(2) : Number(obj[key] * -1).toFixed(2)}\n`
          } else {
            codigoseri.push(key)
            textoeri += `${key.replace('eri_', '')} ${(typeof obj[key] === 'number') ? (obj[key]).toFixed(2) : Number(obj[key]).toFixed(2)}\n`
          }
        }
      }
    })

    return textoeri
  }
}

// Uso:
const informe1 = new InformeEri()
let resultado1 = informe1.pasarObjetoEri('eri.ingresos', objetoEri1);
// `informe1.codigoseri` contiene ahora los códigos del primer informe.

const informe2 = new InformeEri()
let resultado2 = informe2.pasarObjetoEri('eri.ingresos', objetoEri2);
// `informe2.codigoseri` contiene ahora los códigos del segundo informe, independiente del primero.
