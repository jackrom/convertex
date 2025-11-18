// src/composables/useSafeI18n.js
import { useI18n } from 'vue-i18n'

export function useSafeI18n(scope = 'global') {
  const i18n = useI18n({ useScope: scope })
  const { t, messages, locale } = i18n

  // 🔹 Acceso seguro al mensaje crudo dentro de messages[locale]
  const getRawMessage = key => {
    const allMessages = messages.value?.[locale.value]
    if (!allMessages || !key)
      return undefined

    return key.split('.').reduce((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc)
        return acc[part]

      return undefined
    }, allMessages)
  }

  const safeT = (key, fallback) => {
    if (!key)
      return fallback ?? ''

    // 1) Intentar leer el valor crudo del árbol de mensajes
    const raw = getRawMessage(key)

    if (typeof raw === 'string') {
      // ✅ Es un string normal, lo devolvemos y NO llamamos a t()
      return raw
    }

    if (raw !== undefined) {
      // 🔸 La clave existe pero NO es string → avisamos y devolvemos fallback
      console.warn('[i18n] clave', key, 'no es string. Tipo =', typeof raw, 'Valor =', raw)

      return fallback ?? key
    }

    // 2) Si no existe en messages, probamos con t() (por si viene de otro scope)
    try {
      const res = t(key)

      // Desreferenciamos cualquier objeto Proxy devuelto por vue-i18n
      const resValue = typeof res === 'object' && res !== null && 'value' in res ? res.value : res

      return typeof resValue === 'string' ? resValue : (fallback ?? key)
    } catch (err) {
      console.warn('[i18n] error con clave', key, err)

      return fallback ?? key
    }
  }

  return { t, safeT }
}
