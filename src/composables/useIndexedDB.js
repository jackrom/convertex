// src/composables/useIndexedDB.js
export const useIndexedDB = () => {
  const dbName = 'empresasDB' // Nombre de la base de datos
  const storeName = 'empresas' // Nombre del almacén de datos

  let db = null

  const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1)

      request.onsuccess = (event) => {
        db = event.target.result
        resolve(db)
      }

      request.onerror = (event) => {
        reject('Error al abrir la base de datos')
      }

      request.onupgradeneeded = (event) => {
        db = event.target.result
        db.createObjectStore(storeName, { keyPath: 'id' }) // 'id' es la clave primaria
      }
    })
  }

  const saveData = data => {
    return new Promise(async (resolve, reject) => {
      try {
        const dbInstance = await openDB()
        const transaction = dbInstance.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)

        console.log(data)

        data.forEach(item => store.put(item)) // Guardamos cada item en el almacén
        transaction.oncomplete = () => resolve()
        transaction.onerror = error => reject('Error al guardar los datos');
      } catch (error) {
        reject(error)
      }
    })
  }

  const getData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const dbInstance = await openDB()
        const transaction = dbInstance.transaction([storeName], 'readonly')
        const store = transaction.objectStore(storeName)
        const data = []

        store.openCursor().onsuccess = function (event) {
          const cursor = event.target.result
          if (cursor) {
            data.push(cursor.value)
            cursor.continue()
          } else {
            resolve(data) // Retorna los datos cuando ya no hay más registros
          }
        }
        transaction.onerror = (error) => reject('Error al obtener los datos')
      } catch (error) {
        reject(error)
      }
    })
  }

  return { saveData, getData }
}
