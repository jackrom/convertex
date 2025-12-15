<template>
  <Label>
    Descargue en el siguiente enlace el archivo modelo:
    <a
      href="https://www.facilcontabilidad.com/mapeo101"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://www.facilcontabilidad.com/mapeo101
    </a>
  </Label>
  <VContainer>
    <VFileInput
      label="Cargar archivo Excel o CSV"
      accept=".xlsx, .csv"
      @change="handleFileUpload"
    />

    <div v-for="(data, sheetName) in sheetsData" :key="sheetName">
      <VListSubheader>{{ sheetName }}</VListSubheader>
      <VTable dense>
        <thead>
          <tr>
            <th v-for="(header, index) in data.headers" :key="index">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data.rows" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </div>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue'
import * as XLSX from 'xlsx'
import Papa from 'papaparse'
import { asignacionValores, asignacionValoresERI, asignacionValoresESF } from "@core/utils/mapeo101"

const sheetsData = ref({})

const handleFileUpload = event => {
  const file = event.target.files[0]
  if (!file) return

  const fileExtension = file.name.split('.').pop().toLowerCase()
  const reader = new FileReader()

  if (fileExtension === 'xlsx') {
    reader.onload = async e => {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: 'array' })
      const sheets = {}

      workbook.SheetNames.forEach(sheetName => {
        const worksheet = workbook.Sheets[sheetName]
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
        if (json.length > 0) {
          sheets[sheetName] = {
            headers: json[0],
            rows: json.slice(1),
          }
        }
      })

      sheetsData.value = sheets
      processValuesExcel(sheetsData.value)
    }
    reader.readAsArrayBuffer(file)
  } else if (fileExtension === 'csv') {
    reader.onload = e => {
      Papa.parse(e.target.result, {
        delimiter: ';', // Punto y coma como separador
        header: false,
        skipEmptyLines: true,
        complete: result => {
          const csvData = result.data
          const sheetName = file.name

          sheetsData.value = {
            [sheetName]: {
              headers: csvData[0],
              rows: csvData.slice(1),
            },
          }
          processValuesCsv(sheetsData.value)
        },
      })
    }
    reader.readAsText(file, 'utf-8')
  }
}

const processValuesExcel = sheetData => {
  let valoresEnExcel = []
  for (const [sheetName, data] of Object.entries(sheetData)) {
    data.rows.forEach(row => {
      let cellValue = {}
      row.forEach((cell, index) => {
        if (index === 0) {
          cellValue.modulo = sheetName
          cellValue.codigo = cell
        }
        if (index === 2) {
          cellValue.valor = cell
        }
      })
      valoresEnExcel.push(cellValue)
    })
  }
  console.log('valoresEnExcel: ', valoresEnExcel)
  asignarValoresToCuenta(valoresEnExcel)
}

const processValuesCsv = sheetData => {
  let valoresEnExcel = []
  for (const [sheetName, data] of Object.entries(sheetData)) {
    data.rows.forEach(row => {
      let cellValue = {}
      row.forEach((cell, index) => {
        if (index === 0) {
          cellValue.modulo = sheetName
          cellValue.codigo = cell
        }
        if (index === 2) {
          cellValue.valor = cell
        }
      })
      valoresEnExcel.push(cellValue)
    })
  }
  console.log('valoresEnExcel: ', valoresEnExcel)
  asignarValoresToCuentaCSV(valoresEnExcel)
}

const formatDecimalSeparator = value => {
  if (typeof value === 'string') {
    return value.replace(/,/g, '.')
  }

  return value
}

const formatToNumber = value => {
  const num = parseFloat(value).toFixed(2)

  return isNaN(num) ? 0 : num
}

const asignarValoresToCuenta = valores => {
  valores.forEach(cuenta => {
    if (cuenta.modulo === 'ESF') {
      asignacionValoresESF(cuenta.codigo, formatToNumber(cuenta.valor))
    } else if (cuenta.modulo === 'ERI') {
      asignacionValoresERI(cuenta.codigo, formatToNumber(cuenta.valor))
    }
  })
}

const asignarValoresToCuentaCSV = valores => {
  valores.forEach(cuenta => {
    asignacionValores(cuenta.codigo, formatToNumber(cuenta.valor))
  })
}
</script>
