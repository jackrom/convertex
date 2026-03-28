<!-- src/views/soporte/TutorialesList.vue -->
<!--
  ══════════════════════════════════════════════════════════════════════
  Página de Tutoriales — Convertex / iFluc

  - Sidebar con categorías navegables
  - Grid de videos por categoría
  - Modal con reproductor Vimeo embebido
  - Datos parametrizables desde la BD
  ══════════════════════════════════════════════════════════════════════
-->
<script setup>
import { ref, computed, onMounted } from "vue"
import { useTutorialsStore } from "@/@store/tutorials.store"

const store = useTutorialsStore()
const activeCategory = ref(null)
const selectedVideo = ref(null)
const searchQuery = ref("")

onMounted(async () => {
  await store.fetchActive()
  if (store.categories.length && !activeCategory.value) {
    activeCategory.value = store.categories[0]
  }
})

const filteredItems = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  let items = activeCategory.value === "__all"
    ? store.items
    : store.byCategory(activeCategory.value)

  if (q) {
    items = items.filter(t =>
      t.titulo.toLowerCase().includes(q) ||
      (t.descripcion ?? "").toLowerCase().includes(q),
    )
  }
  
  return items
})

const categoriesWithCount = computed(() => {
  const cats = store.categories.map(cat => ({
    key: cat,
    label: cat,
    count: (store.grouped[cat] ?? []).length,
  }))
  
  return [
    { key: "__all", label: "Todos", count: store.items.length },
    ...cats,
  ]
})

const openVideo = tut => { selectedVideo.value = tut }
const closeVideo = () => { selectedVideo.value = null }

const selectCategory = key => {
  activeCategory.value = key
  searchQuery.value = ""
}

// Build proper embed URL for Vimeo
const getEmbedUrl = tut => {
  if (!tut?.video_url) return ""
  const url = tut.video_url

  // Already an embed URL
  if (url.includes("player.vimeo.com") || url.includes("youtube.com/embed")) {
    return url
  }

  // Regular Vimeo URL → convert to embed
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
  }

  // Regular YouTube URL → convert to embed
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
  }
  
  return url
}
</script>

<template>
  <section class="tp">
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- HEADER -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="tp-header">
      <div class="tp-header__left">
        <VBtn
          icon
          variant="text"
          size="small"
          class="tp-header__back mr-2"
          @click="$router.back()"
        >
          <VIcon>tabler-arrow-left</VIcon>
        </VBtn>
        <div>
          <h1 class="tp-header__title">
            Tutoriales
          </h1>
          <p class="tp-header__sub">
            {{ store.items.length }} videos disponibles
          </p>
        </div>
      </div>

      <div class="tp-header__right">
        <VTextField
          v-model="searchQuery"
          placeholder="Buscar tutorial..."
          variant="outlined"
          density="compact"
          hide-details
          prepend-inner-icon="tabler-search"
          clearable
          class="tp-search"
        />
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- BODY: Sidebar + Grid -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <div class="tp-body">
      <!-- SIDEBAR -->
      <nav class="tp-sidebar">
        <div class="tp-sidebar__label">
          Categorías
        </div>
        <button
          v-for="cat in categoriesWithCount"
          :key="cat.key"
          class="tp-sidebar__item"
          :class="{ 'tp-sidebar__item--active': activeCategory === cat.key }"
          @click="selectCategory(cat.key)"
        >
          <div class="tp-sidebar__bar" />
          <span class="tp-sidebar__name">{{ cat.label }}</span>
          <span class="tp-sidebar__count">{{ cat.count }}</span>
        </button>
      </nav>

      <!-- CONTENT -->
      <div class="tp-content">
        <!-- Category title -->
        <div class="tp-content__head">
          <h2 class="tp-content__title">
            {{ activeCategory === '__all' ? 'Todos los tutoriales' : activeCategory }}
          </h2>
          <span class="tp-content__count">{{ filteredItems.length }} videos</span>
        </div>

        <!-- Loading -->
        <div
          v-if="store.loading"
          class="tp-content__loading"
        >
          <VProgressCircular
            indeterminate
            size="32"
            color="primary"
          />
          <span>Cargando tutoriales...</span>
        </div>

        <!-- Grid -->
        <div
          v-else-if="filteredItems.length"
          class="tp-grid"
        >
          <button
            v-for="tut in filteredItems"
            :key="tut.id"
            class="tp-card"
            @click="openVideo(tut)"
          >
            <!-- Thumbnail area -->
            <div class="tp-card__thumb">
              <div class="tp-card__play-overlay">
                <div class="tp-card__play-btn">
                  <VIcon
                    size="24"
                    color="white"
                  >
                    tabler-player-play-filled
                  </VIcon>
                </div>
              </div>
              <div class="tp-card__provider">
                <VIcon size="12">
                  {{ tut.video_provider === 'youtube' ? 'tabler-brand-youtube' : 'tabler-brand-vimeo' }}
                </VIcon>
                {{ tut.video_provider === 'youtube' ? 'YouTube' : 'Vimeo' }}
              </div>
              <div
                v-if="tut.duracion"
                class="tp-card__duration"
              >
                {{ tut.duracion }}
              </div>
              <VChip
                v-if="tut.destacado"
                size="x-small"
                color="warning"
                variant="flat"
                class="tp-card__badge"
              >
                Nuevo
              </VChip>
            </div>

            <!-- Info -->
            <div class="tp-card__info">
              <div class="tp-card__cat">
                {{ tut.categoria }}
              </div>
              <div class="tp-card__title">
                {{ tut.titulo }}
              </div>
              <div
                v-if="tut.descripcion"
                class="tp-card__desc"
              >
                {{ tut.descripcion }}
              </div>
            </div>
          </button>
        </div>

        <!-- Empty -->
        <div
          v-else
          class="tp-content__empty"
        >
          <VIcon
            size="40"
            color="grey-lighten-1"
          >
            tabler-video-off
          </VIcon>
          <div>{{ searchQuery ? 'Sin resultados para esta búsqueda' : 'No hay tutoriales en esta categoría' }}</div>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════════════════ -->
    <!-- VIDEO MODAL -->
    <!-- ═══════════════════════════════════════════════════════════════ -->
    <VDialog
      :model-value="!!selectedVideo"
      max-width="900"
      @update:model-value="closeVideo"
    >
      <VCard
        v-if="selectedVideo"
        class="tp-modal"
      >
        <div class="tp-modal__head">
          <div class="tp-modal__head-left">
            <VChip
              size="x-small"
              variant="tonal"
              color="primary"
              class="mr-2"
            >
              {{ selectedVideo.categoria }}
            </VChip>
            <div class="tp-modal__title">
              {{ selectedVideo.titulo }}
            </div>
            <div
              v-if="selectedVideo.descripcion"
              class="tp-modal__desc"
            >
              {{ selectedVideo.descripcion }}
            </div>
          </div>
          <VBtn
            icon
            variant="text"
            size="small"
            @click="closeVideo"
          >
            <VIcon>tabler-x</VIcon>
          </VBtn>
        </div>

        <div class="tp-modal__frame">
          <iframe
            :src="getEmbedUrl(selectedVideo)"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
      </VCard>
    </VDialog>
  </section>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════════════════
   TOKENS
   ═══════════════════════════════════════════════════════════════ */
.tp {
  --tp-navy: #2C3555;
  --tp-amber: #D4884A;
  --tp-bg: #F7F7F5;
  --tp-r: 10px;
  --tp-ff: "DM Sans", "Outfit", -apple-system, sans-serif;

  font-family: var(--tp-ff);
  color: var(--tp-navy);
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* ═══════════════════════════════════════════════════════════════
   HEADER
   ═══════════════════════════════════════════════════════════════ */
.tp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(44, 53, 85, 0.06);
  background: white;
  flex-shrink: 0;
}

.tp-header__left {
  display: flex;
  align-items: center;
}

.tp-header__back {
  color: rgba(44, 53, 85, 0.5) !important;
}

.tp-header__title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.01em;
}

.tp-header__sub {
  font-size: 12px;
  color: rgba(44, 53, 85, 0.4);
  margin: 0;
}

.tp-search { width: 260px; }
.tp-search :deep(.v-field) { border-radius: 8px !important; font-size: 13px; }

/* ═══════════════════════════════════════════════════════════════
   BODY
   ═══════════════════════════════════════════════════════════════ */
.tp-body {
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ═══════════════════════════════════════════════════════════════
   SIDEBAR
   ═══════════════════════════════════════════════════════════════ */
.tp-sidebar {
  width: 240px;
  min-width: 240px;
  border-right: 1px solid rgba(44, 53, 85, 0.05);
  padding: 16px 0;
  background: rgba(44, 53, 85, 0.01);
  overflow-y: auto;
}

.tp-sidebar__label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(44, 53, 85, 0.3);
  padding: 0 20px;
  margin-bottom: 8px;
}

.tp-sidebar__item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% - 12px);
  margin: 0 6px;
  padding: 9px 14px 9px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.12s;
  text-align: left;
  font-size: 13px;
  color: rgba(44, 53, 85, 0.6);
}

.tp-sidebar__item:hover { background: rgba(44, 53, 85, 0.03); }

.tp-sidebar__item--active {
  background: rgba(212, 136, 74, 0.06);
  color: var(--tp-navy);
  font-weight: 600;
}

.tp-sidebar__bar {
  width: 3px;
  min-width: 3px;
  height: 20px;
  border-radius: 0 3px 3px 0;
  background: transparent;
  transition: background 0.15s;
}

.tp-sidebar__item--active .tp-sidebar__bar {
  background: var(--tp-amber);
}

.tp-sidebar__name { flex: 1; }

.tp-sidebar__count {
  font-size: 11px;
  font-weight: 600;
  color: rgba(44, 53, 85, 0.25);
  background: rgba(44, 53, 85, 0.04);
  padding: 1px 7px;
  border-radius: 10px;
}

.tp-sidebar__item--active .tp-sidebar__count {
  background: rgba(212, 136, 74, 0.1);
  color: var(--tp-amber);
}

/* ═══════════════════════════════════════════════════════════════
   CONTENT
   ═══════════════════════════════════════════════════════════════ */
.tp-content {
  flex: 1;
  padding: 24px 28px;
  overflow-y: auto;
}

.tp-content__head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 20px;
}

.tp-content__title {
  font-size: 17px;
  font-weight: 600;
  margin: 0;
}

.tp-content__count {
  font-size: 12px;
  color: rgba(44, 53, 85, 0.35);
}

.tp-content__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px;
  color: rgba(44, 53, 85, 0.4);
  font-size: 13px;
}

.tp-content__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 60px;
  color: rgba(44, 53, 85, 0.3);
  font-size: 13px;
}

/* ═══════════════════════════════════════════════════════════════
   VIDEO CARDS GRID
   ═══════════════════════════════════════════════════════════════ */
.tp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.tp-card {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid rgba(44, 53, 85, 0.05);
  border-radius: var(--tp-r);
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  overflow: hidden;
  width: 100%;
}

.tp-card:hover {
  border-color: rgba(212, 136, 74, 0.2);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

/* Thumbnail */
.tp-card__thumb {
  position: relative;
  height: 150px;
  background: linear-gradient(135deg, #2C3555 0%, #3d4a6e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.tp-card__play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  transition: background 0.2s;
}

.tp-card:hover .tp-card__play-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.tp-card__play-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--tp-amber);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(212, 136, 74, 0.4);
  transition: transform 0.2s;
}

.tp-card:hover .tp-card__play-btn {
  transform: scale(1.1);
}

.tp-card__provider {
  position: absolute;
  bottom: 8px;
  left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(0, 0, 0, 0.4);
  padding: 2px 8px;
  border-radius: 4px;
}

.tp-card__duration {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 8px;
  border-radius: 4px;
}

.tp-card__badge {
  position: absolute;
  top: 8px;
  right: 8px;
}

/* Info */
.tp-card__info {
  padding: 14px 16px 16px;
}

.tp-card__cat {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--tp-amber);
  margin-bottom: 4px;
}

.tp-card__title {
  font-size: 14px;
  font-weight: 600;
  color: var(--tp-navy);
  margin-bottom: 4px;
  line-height: 1.3;
}

.tp-card__desc {
  font-size: 12px;
  color: rgba(44, 53, 85, 0.45);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ═══════════════════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════════════════ */
.tp-modal { border-radius: var(--tp-r) !important; overflow: hidden; }

.tp-modal__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 22px;
}

.tp-modal__head-left { flex: 1; }

.tp-modal__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--tp-navy);
  margin-top: 6px;
}

.tp-modal__desc {
  font-size: 12.5px;
  color: rgba(44, 53, 85, 0.45);
  margin-top: 2px;
}

.tp-modal__frame {
  position: relative;
  padding-bottom: 56.25%;
  background: #000;
}

.tp-modal__frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .tp-body { flex-direction: column; }
  .tp-sidebar {
    width: 100%; min-width: 100%;
    border-right: none; border-bottom: 1px solid rgba(44, 53, 85, 0.05);
    flex-direction: row; overflow-x: auto;
    padding: 8px; gap: 4px;
    display: flex;
  }
  .tp-sidebar__label { display: none; }
  .tp-sidebar__item { min-width: auto; white-space: nowrap; padding: 7px 12px; }
  .tp-sidebar__bar { display: none; }
  .tp-content { padding: 16px; }
  .tp-grid { grid-template-columns: 1fr; }
  .tp-search { width: 180px; }
}
</style>
