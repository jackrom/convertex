/*=========================================================================================
  File Name: excelMultiSheet.js
  Description: Download Excel Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: IFluc Facil Contabilidad
  Author: Juassic Studio
  Author URL: https://juassic.com
==========================================================================================*/
/* eslint-disable */
require('script-loader!file-saver')
import XLSX from 'xlsx'

function Workbook() {
  if (!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}

function s2ab(s) {
  var buf = new ArrayBuffer(s.length);
  var view = new Uint8Array(buf);
  for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
  return buf;
}

function sheet_from_array_of_arrays(data, opts) {
  let ws = {}
  let range = {
    s: {
      c: 10000000,
      r: 10000000
    },
    e: {
      c: 0,
      r: 0
    }
  };
  for (var R = 0; R != data.length; ++R) {
    for (var C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      let cell = {
        v: data[R][C]
      };
      if (cell.v == null) continue;
      let cell_ref = XLSX.utils.encode_cell({
        c: C,
        r: R
      });

      if (typeof cell.v === 'number') {
        cell.t = 'n'
      }
      else if (typeof cell.v === 'boolean') {
        cell.t = 'b'
      }
      else if (cell.v instanceof Date) {
        cell.t = 'd'
				cell.z = 'dd/mm/yyyy hh:mm:ss'
      } else {
        cell.t = 's'
      }
      ws[cell_ref] = cell
    }
  }
  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
  return ws
}

function datenum(v, date1904) {
  if (date1904) v += 1462
  let epoch = Date.parse(v)
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}

function generateArray(table) {
  var out = [];
  var rows = table.querySelectorAll('tr');
  var ranges = [];
  for (var R = 0; R < rows.length; ++R) {
    var outRow = [];
    var row = rows[R];
    var columns = row.querySelectorAll('td');
    for (var C = 0; C < columns.length; ++C) {
      var cell = columns[C];
      var colspan = cell.getAttribute('colspan');
      var rowspan = cell.getAttribute('rowspan');
      var cellValue = cell.innerText;
      if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

      ranges.forEach(function (range) {
        if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
          for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
        }
      });

      if (rowspan || colspan) {
        rowspan = rowspan || 1;
        colspan = colspan || 1;
        ranges.push({
          s: {
            r: R,
            c: outRow.length
          },
          e: {
            r: R + rowspan - 1,
            c: outRow.length + colspan - 1
          }
        });
      };

      outRow.push(cellValue !== "" ? cellValue : null);

      if (colspan)
        for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
    }
    out.push(outRow);
  }
  return [out, ranges];
};

export function export_json_to_multisheet_excel ({ headerList, dataList, filename, sheetnameList, autoWidthList, bookType=  'xlsx' } = {}) {
  filename = filename || 'anexos'
  let wb = new Workbook()
  for(let index = 0; index < dataList.length; index++)
  {
    let data = [...(dataList[index])]
    data.unshift(headerList[index])
    let ws = sheet_from_array_of_arrays(data)
    let ws_name = sheetnameList[index] || "Anexos"
    let autoWidth = autoWidthList[index]
    if (autoWidth) {
      const colWidth = data.map(row => row.map(val => {
        if (val == null) {
          return { 'wch': 10 }
        } else if (val.toString().charCodeAt(0) > 255) {
          return {'wch': val.toString().length * 2}
        } else {
          return {'wch': val.toString().length}
        }
      }))
      let result = colWidth[0]
      for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
          if (result[j]['wch'] < colWidth[i][j]['wch']) {
            result[j]['wch'] = colWidth[i][j]['wch']
          }
        }
      }
      ws['!cols'] = result
    }
    wb.SheetNames.push(ws_name)
    wb.Sheets[ws_name] = ws
    console.log(wb)
  }
  let wbout = XLSX.write(wb, {
    bookType: bookType,
    bookSST: false,
    type: 'binary'
  })
  saveAs(new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  }), `${filename}.${bookType}`)
}
