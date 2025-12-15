// src/services/indexeddb.service.js
import { openDB } from "idb"

const DB_NAME = "convertexdb"

const DB_VERSION = 1

export function useIndexedDBService() {
  const dbPromise = openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      console.log("[IDB] upgrade a versión", DB_VERSION)

      const ensureStore = (name, options) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, options)
        }
      }

      // -------------------------
      // Stores existentes
      // -------------------------
      ensureStore("empresas", { keyPath: "id", autoIncrement: true  })
      ensureStore("periodos", { keyPath: "id", autoIncrement: true  })
      ensureStore("reportes", { keyPath: "reporteid", autoIncrement: true  })
      ensureStore( "users", { keyPath: 'id' })

      // 🔹 Auditoría (ya la tenías)
      ensureStore("auditoria", { keyPath: "id", autoIncrement: true })

      // 🔹 NUEVO: logs funcionales (useLogger / LogsDashboard)
      ensureStore("logs", { keyPath: "id", autoIncrement: true  })

      ensureStore("esfvaluesconvertexs",   { keyPath: "id", autoIncrement: true })
      ensureStore("erivaluesconvertexs",   { keyPath: "id", autoIncrement: true })
      ensureStore("efemdvaluesconvertexs", { keyPath: "id", autoIncrement: true })
      ensureStore("ecpvaluesconvertexs",   { keyPath: "id", autoIncrement: true })
    },
  })

  // 🔑 Helper: resuelve el nombre REAL de store
  async function getDbAndStore(store) {
    const db = await dbPromise
    let realStore = store

    // Alias explícito: "audit" -> "auditoria"
    if (
      store === "audit" &&
      !db.objectStoreNames.contains("audit") &&
      db.objectStoreNames.contains("auditoria")
    ) {
      realStore = "auditoria"
    }

    if (!db.objectStoreNames.contains(realStore)) {
      console.error(
        `[IDB] ❌ objectStore "${store}" / real "${realStore}" NO existe. Stores:`,
        Array.from(db.objectStoreNames),
      )
      throw new Error(`IndexedDB: objectStore "${store}" no existe`)
    }

    return { db, storeName: realStore }
  }

  // -----------------------------
  // Métodos públicos
  // -----------------------------

  async function getAll(store) {
    const { db, storeName } = await getDbAndStore(store)

    return db.getAll(storeName)
  }

  async function getByKey(store, key) {
    const { db, storeName } = await getDbAndStore(store)

    return db.get(storeName, key)
  }

  async function put(store, value, key) {
    const { db, storeName } = await getDbAndStore(store)
    const tx = db.transaction(storeName, "readwrite")
    const st = tx.objectStore(storeName)

    key ? st.put(value, key) : st.put(value)

    await tx.done
  }

  async function bulkPut(store, items) {
    const { db, storeName } = await getDbAndStore(store)
    const tx = db.transaction(storeName, "readwrite")
    const st = tx.objectStore(storeName)

    for (const item of items) {
      st.put(item)
    }

    await tx.done
  }

  async function clear(store) {
    const { db, storeName } = await getDbAndStore(store)
    const tx = db.transaction(storeName, "readwrite")

    tx.objectStore(storeName).clear()
    await tx.done
  }

  async function remove(store, key) {
    const { db, storeName } = await getDbAndStore(store)
    const tx = db.transaction(storeName, "readwrite")

    tx.objectStore(storeName).delete(key)
    await tx.done
  }

  return {
    getAll,
    getByKey,
    put,
    bulkPut,
    clear,
    remove,
  }
}
