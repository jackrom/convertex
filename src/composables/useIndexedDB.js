// src/composables/useIndexedDB.js
import { shallowRef } from 'vue'

const isBrowser = typeof window !== 'undefined'
const isIndexedDBSupported = isBrowser && typeof window.indexedDB !== 'undefined'

const toPromise = request => new Promise((resolve, reject) => {
  if (!request) {
    resolve(undefined)

    return
  }

  request.onsuccess = event => {
    resolve(event.target?.result)
  }

  request.onerror = () => {
    reject(request.error ?? new Error('IndexedDB request failed'))
  }
})

export const useIndexedDB = (config = {}) => {

  if (!isIndexedDBSupported)
    console.warn('[useIndexedDB] IndexedDB is not supported in this environment.')

  const options = {
    dbName: config.dbName ?? 'app-convertex-indexeddb',
    version: config.version ?? 1,
    stores: config.stores ?? [
      { name: 'empresas', options: { keyPath: 'id' }, indexes: [] },
      { name: 'periodos', options: { keyPath: 'id' }, indexes: [] },
      { name: 'reportes', options: { keyPath: 'id' }, indexes: [] },
      { name: 'users', options: { keyPath: 'id' }, indexes: [] },
      // 🔹 NUEVOS STORES PARA LOS VALORES
      {
        name: 'erivalues',
        options: { keyPath: 'id' },
        indexes: [
          { name: 'byReporte', keyPath: 'reporteid' },
          { name: 'byUsuario', keyPath: 'userid' },
          { name: 'byPeriodo', keyPath: 'periodo' },
          { name: 'byNombreCampo', keyPath: 'nombrecampo' },
          // búsqueda típica: valores de un reporte, periodo, tabla y campo
          { name: 'byReportePeriodoTablaCampo', keyPath: ['reporteid', 'periodo', 'tablaorigen', 'nombrecampo'] },
        ],
      },
      {
        name: 'esfvalues',
        options: { keyPath: 'id' },
        indexes: [
          { name: 'byReporte', keyPath: 'reporteid' },
          { name: 'byUsuario', keyPath: 'userid' },
          { name: 'byPeriodo', keyPath: 'periodo' },
          { name: 'byNombreCampo', keyPath: 'nombrecampo' },
          { name: 'byReportePeriodoTablaCampo', keyPath: ['reporteid', 'periodo', 'tablaorigen', 'nombrecampo'] },
        ],
      },
      {
        name: 'efemdvalues',
        options: { keyPath: 'id' },
        indexes: [
          { name: 'byReporte', keyPath: 'reporteid' },
          { name: 'byUsuario', keyPath: 'userid' },
          { name: 'byPeriodo', keyPath: 'periodo' },
          { name: 'byNombreCampo', keyPath: 'nombrecampo' },
          { name: 'byReportePeriodoTablaCampo', keyPath: ['reporteid', 'periodo', 'tablaorigen', 'nombrecampo'] },
        ],
      },
      {
        name: 'ecpvalues',
        options: { keyPath: 'id' },
        indexes: [
          { name: 'byReporte', keyPath: 'reporteid' },
          { name: 'byUsuario', keyPath: 'userid' },
          { name: 'byPeriodo', keyPath: 'periodo' },
          { name: 'byNombreCampo', keyPath: 'nombrecampo' },
          { name: 'byReportePeriodoTablaCampo', keyPath: ['reporteid', 'periodo', 'tablaorigen', 'nombrecampo'] },
        ],
      },
    ],
  }

  const dbRef = shallowRef(null)
  let openingPromise = null

  const closeDB = () => {
    dbRef.value?.close()
    dbRef.value = null
    openingPromise = null
  }

  const deleteDB = () => {
    closeDB()

    if (!isIndexedDBSupported)
      return Promise.resolve()

    return new Promise((resolve, reject) => {
      const deleteRequest = indexedDB.deleteDatabase(options.dbName)

      deleteRequest.onsuccess = () => resolve()
      deleteRequest.onerror = () => reject(deleteRequest.error ?? new Error('Unable to delete IndexedDB'))
    })
  }

  const initStores = db => {
    // Crear los stores configurados en options.stores
    options.stores.forEach(store => {
      console.log(`Iniciando store: ${store.name}`)

      // Si el store ya existe, no lo creamos de nuevo
      if (db.objectStoreNames.contains(store.name)) return

      const { name, options: storeOptions = {}, indexes = [] } = store
      const objectStore = db.createObjectStore(name, storeOptions)

      // Crear índices si es necesario
      indexes.forEach(index => {
        objectStore.createIndex(index.name, index.keyPath, index.options)
      })
    })
  }

  const openDB = () => {
    if (!isIndexedDBSupported)
      return Promise.reject(new Error('IndexedDB is not supported in this environment'))

    if (dbRef.value)
      return Promise.resolve(dbRef.value)

    if (openingPromise)
      return openingPromise

    openingPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(options.dbName, options.version)

      request.onupgradeneeded = event => {
        const db = event.target.result

        initStores(db)
      }

      request.onsuccess = () => {
        dbRef.value = request.result
        dbRef.value.onclose = () => {
          dbRef.value = null
        }
        resolve(dbRef.value)
      }

      request.onerror = () => {
        reject(request.error ?? new Error('Unable to open IndexedDB'))
      }
    })

    return openingPromise.finally(() => {
      openingPromise = null
    })
  }

  const runInStore = async (storeName, mode, action) => {
    if (!isIndexedDBSupported)
      return Promise.reject(new Error('IndexedDB is not supported in this environment'))

    const db = await openDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, mode)
      const store = transaction.objectStore(storeName)

      let request
      try {
        request = action(store)
      } catch (error) {
        transaction.abort()
        reject(error)

        return
      }

      if (!request) {
        resolve(undefined)

        return
      }

      const requestPromise = toPromise(request)

      requestPromise
        .then(resolve)
        .catch(error => {
          transaction.abort()
          reject(error)
        })

      transaction.onerror = () => reject(transaction.error ?? new Error('IndexedDB transaction failed'))
      transaction.onabort = () => reject(transaction.error ?? new Error('IndexedDB transaction aborted'))
    })
  }

  const addItem = (storeName, value, key) => {
    return new Promise(async (resolve, reject) => {
      try {
        const dbInstance = await openDB()
        const transaction = dbInstance.transaction([storeName], 'readwrite')
        const store = transaction.objectStore(storeName)

        const hasInlineKey = store.keyPath != null

        console.log('addItem -> store:', storeName, 'value:', value, 'key:', key, 'inlineKey:', hasInlineKey)

        // Helper para insertar UN solo objeto
        const putOne = (item, customKey) => {
          if (!item || typeof item !== 'object') {
            console.error('addItem: valor inválido para guardar:', item)

            return
          }

          const cleanItem = JSON.parse(JSON.stringify(item))

          // Si el store usa keyPath (inline), NO debemos pasar customKey
          if (hasInlineKey) {
            store.put(cleanItem)
          } else if (typeof customKey !== 'undefined') {
            store.put(cleanItem, customKey)
          } else {
            // store sin keyPath y sin key explícita → error controlado
            console.error(`addItem: store "${storeName}" no tiene keyPath y no se pasó key`)
          }
        }

        if (Array.isArray(value)) {
          value
            .filter(v => v != null)
            .forEach(item => {
              // Para arrays ignoramos el parámetro key global,
              // cada ítem debe tener su propia id si el store usa keyPath.
              putOne(item)
            })
        } else if (value != null) {
          putOne(value, key)
        } else {
          console.warn('addItem: value es null/undefined, no se guarda nada')
        }

        transaction.oncomplete = () => resolve()
        transaction.onerror = () => reject(transaction.error ?? new Error('Error al guardar los datos'))
        transaction.onabort = () => reject(transaction.error ?? new Error('Transacción abortada al guardar los datos'))
      } catch (error) {
        reject(error)
      }
    })
  }

  const putItem = (storeName, value, key) =>
    runInStore(storeName, 'readwrite', store => {
      const hasInlineKey = store.keyPath != null

      if (hasInlineKey) {
        return store.put(value)
      } else {
        return store.put(value, key)
      }
    })

  const updateItem = putItem
  const getItem = (storeName, key) => runInStore(storeName, 'readonly', store => store.get(key))
  const getAll = (storeName, query, count) => runInStore(storeName, 'readonly', store => store.getAll(query, count))
  const getAllKeys = (storeName, query, count) => runInStore(storeName, 'readonly', store => store.getAllKeys(query, count))
  const deleteItem = (storeName, key) => runInStore(storeName, 'readwrite', store => store.delete(key))
  const clearStore = storeName => runInStore(storeName, 'readwrite', store => store.clear())
  const countItems = (storeName, query) => runInStore(storeName, 'readonly', store => store.count(query))
  const getByIndex = (storeName, indexName, key) => runInStore(storeName, 'readonly', store => store.index(indexName).get(key))
  const getAllByIndex = (storeName, indexName, query, count) => runInStore(storeName, 'readonly', store => store.index(indexName).getAll(query, count))

  const runTransaction = async (storeNames, mode, callback) => {
    if (!isIndexedDBSupported)
      return Promise.reject(new Error('IndexedDB is not supported in this environment'))

    const db = await openDB()

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeNames, mode)

      let callbackResult
      let callbackResultPromise
      try {
        callbackResult = callback(transaction)
        callbackResultPromise = Promise.resolve(callbackResult)
      } catch (error) {
        transaction.abort()
        reject(error)

        return
      }

      const finalize = () => {
        callbackResultPromise
          .then(resolve)
          .catch(reject)
      }

      transaction.oncomplete = finalize
      transaction.onerror = () => reject(transaction.error ?? new Error('IndexedDB transaction failed'))
      transaction.onabort = () => reject(transaction.error ?? new Error('IndexedDB transaction aborted'))
    })
  }

  return {
    isSupported: isIndexedDBSupported,
    dbRef,
    openDB,
    closeDB,
    deleteDB,
    addItem,
    putItem,
    updateItem,
    getItem,
    getAll,
    getAllKeys,
    getByIndex,
    getAllByIndex,
    deleteItem,
    clearStore,
    countItems,
    runTransaction,
  }
}
