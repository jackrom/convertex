// src/workers/syncDataWorker.js
self.onmessage = async function (e) {
  const { action, data } = e.data

  if (action === 'syncData') {
    // Aquí puedes poner tu lógica para sincronizar datos con el servidor
    try {
      // Supongamos que tienes una función que sube datos al servidor
      await syncWithServer(data) // Reemplazar con tu función real de sincronización
      self.postMessage({ status: 'success' })
    } catch (error) {
      self.postMessage({ status: 'error', message: error.message })
    }
  }
}

async function syncWithServer(data) {
  // Implementa la sincronización con el backend (usando axios, fetch, etc.)
  console.log("Sincronizando datos con el servidor", data)

  // Ejemplo de llamada al backend
  await fetch('/api/sync', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
