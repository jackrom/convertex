<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useI18n } from "vue-i18n"
import { useEmpresasDeletedStore } from "@/@store/empresasDeleted.store"

// ──────────────────────────────────────────────
// i18n: acceso directo a messages (sin usar t())
// ──────────────────────────────────────────────
const { messages, locale } = useI18n({ useScope: "global" })

const getRawMessage = key => {
  const all = messages.value?.[locale.value]
  if (!all || !key) return undefined

  return key.split(".").reduce((acc, part) => {
    if (acc && typeof acc === "object" && part in acc)
      return acc[part]

    return undefined
  }, all)
}

const safeT = (key, fallback) => {
  const raw = getRawMessage(key)

  if (typeof raw === "string")
    return raw

  if (raw !== undefined) {
    console.warn("[i18n] clave", key, "no es string. Tipo =", typeof raw, "Valor =", raw)

    return fallback ?? key
  }

  return fallback ?? key
}

// ──────────────────────────────────────────────
// i18n: recomendaciones (array)
// ──────────────────────────────────────────────
const items = computed(() => {
  try {
    const raw = getRawMessage("convertex.deletedCompanies.recommendations")

    console.log('raw: ', raw)

    const arr = Array.isArray(raw) ? raw : (raw?.loc ?? raw)

    console.log('raw: ', raw)

    return arr.map(entry => {
      if (typeof entry === "string")
        return entry

      if (entry && typeof entry === "object") {
        // Caso típico que estás viendo en pantalla
        if (typeof entry.loc?.source === "string")
          return entry.loc.source

        if (typeof entry.static === "string")
          return entry.static
      }

      // Fallback por si acaso
      return String(entry)
    })



  } catch (err) {
    console.warn(
      "[i18n] error leyendo convertex.deletedCompanies.recommendations:",
      err,
    )

    return []
  }
})

// ──────────────────────────────────────────────
// Store de empresas eliminadas
// ──────────────────────────────────────────────
const deletedStore = useEmpresasDeletedStore()

const rowPerPage = ref(10)
const currentPage = ref(1)

const totalEmpresasEliminadasConvertex = computed(
  () => deletedStore.empresas.length,
)

const totalPage = computed(() =>
  totalEmpresasEliminadasConvertex.value > 0
    ? Math.ceil(totalEmpresasEliminadasConvertex.value / rowPerPage.value)
    : 1,
)

const empresasPaginadas = computed(() => {
  const start = (currentPage.value - 1) * rowPerPage.value
  const end = start + rowPerPage.value

  return deletedStore.empresas.slice(start, end)
})

// Texto de paginación SIN usar t()
const paginationData = computed(() => {
  const firstIndex = totalEmpresasEliminadasConvertex.value
    ? (currentPage.value - 1) * rowPerPage.value + 1
    : 0

  const lastIndex = totalEmpresasEliminadasConvertex.value
    ? Math.min(
      currentPage.value * rowPerPage.value,
      totalEmpresasEliminadasConvertex.value,
    )
    : 0

  const tplRaw = getRawMessage("convertex.deletedCompanies.pagination")

  const tpl =
    typeof tplRaw === "string"
      ? tplRaw
      : "Showing {first} to {last} of {total} records"

  return tpl
    .replace("{first}", String(firstIndex))
    .replace("{last}", String(lastIndex))
    .replace("{total}", String(totalEmpresasEliminadasConvertex.value))
})

watch(
  totalPage,
  newTotal => {
    if (currentPage.value > newTotal) currentPage.value = newTotal
  },
  { immediate: true },
)

onMounted(async () => {
  if (!deletedStore.loaded) {
    try {
      await deletedStore.load()
    } catch (err) {
      console.error("No se pudieron cargar las empresas eliminadas", err)
    }
  }
})
</script>

<template>
  <div>
    <VCard :title="safeT('dashboards.analytics.title', 'Analytics')">
      <VCardText>
        <h2>{{ safeT('dashboards.analytics.subtitle', 'Resumen') }}</h2>
      </VCardText>

      <VCardText>
        <!-- Si existe arreglo en i18n, lo usamos -->
        <VList v-if="items.length">
          <VListItem
            v-for="(item, idx) in items"
            :key="idx"
          >
            {{ item }}
          </VListItem>
        </VList>

        <!-- Fallback si por alguna razón no hay arreglo en i18n -->
        <VList v-else>
          <VListItem>Ingrese valores únicamente hasta con 2 decimales</VListItem>
          <VListItem>Para la separación decimal utilizar punto</VListItem>
          <VListItem>No utilizar ni coma ni punto para la separación de miles</VListItem>
          <VListItem>
            Al ingresar la información de cada módulo (ESF, ERI, ECP, EFE) recuerde dar clic en el botón Guardar
          </VListItem>
        </VList>
      </VCardText>
    </VCard>
  </div>

  <VDivider style="margin-bottom: 10px" />

  <div>
    <VCard :title="safeT('convertex.deletedCompanies.tableTitle', 'Empresas eliminadas')">
      <VTable
        class="text-no-wrap"
        style="margin-top: 20px;"
      >
        <thead>
          <tr>
            <th>{{ safeT('convertex.deletedCompanies.headers.ruc', 'RUC') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.company', 'Empresa') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.city', 'Ciudad') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.province', 'Provincia') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.user', 'Usuario') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.createdAt', 'Fecha creación') }}</th>
            <th>{{ safeT('convertex.deletedCompanies.headers.deletedAt', 'Fecha eliminación') }}</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="empresa in empresasPaginadas"
            :key="empresa.id"
            style="height: 3.75rem;"
          >
            <td>
              <span class="text-capitalize text-base">
                {{ empresa.ruc }}
              </span>
            </td>

            <td>
              <span class="text-capitalize text-base font-weight-semibold">
                {{ empresa.nombre }}
              </span>
            </td>

            <td>
              <span class="text-base">
                {{ empresa.ciudad }}
              </span>
            </td>

            <td>{{ empresa.provincia }}</td>
            <td>{{ empresa.userid ?? empresa.userId }}</td>
            <td>{{ empresa.createdat }}</td>
            <td>{{ empresa.deletedat }}</td>
          </tr>
        </tbody>

        <tfoot v-show="!deletedStore.empresas.length">
          <tr>
            <td
              colspan="7"
              class="text-center"
            >
              {{ safeT('convertex.deletedCompanies.noData', 'No hay registros') }}
            </td>
          </tr>
        </tfoot>
      </VTable>

      <VCardText class="d-flex align-center flex-wrap justify-space-between gap-4 py-3 px-5">
        <span class="text-sm text-disabled">
          {{ paginationData }}
        </span>

        <VPagination
          v-model="currentPage"
          size="small"
          :total-visible="5"
          :length="totalPage"
        />
      </VCardText>
    </VCard>
  </div>
</template>
