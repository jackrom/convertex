<template>
  <VContainer>
    <VTable>
      <thead>
      <tr>
        <th>Título</th>
        <th>Descripción</th>
        <th>Tema</th>
        <th>Duración</th>
        <th>Tiempo Transcurrido</th>
        <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(audio, index) in audioList" :key="audio.title">
        <td>{{ audio.title }}</td>
        <td>{{ audio.description }}</td>
        <td>{{ audio.topic }}</td>
        <td>{{ formatTime(audio.duration) }}</td>
        <td v-if="currentAudioIndex === index">{{ formatTime(currentTime) }}</td>
        <td v-else>00:00</td>
        <td>
          <VBtn
            class="btn-small"
            v-if="!audio.isPlaying"
            :disabled="isPlaying && currentAudioIndex !== index"
            icon
            @click="playAudio(index)"
          >
            <VIcon small>mdi-play</VIcon>
          </VBtn>
          <VBtn
            v-if="audio.isPlaying"
            class="btn-small"
            icon
            @click="pauseAudio"
          >
            <VIcon small>mdi-pause</VIcon>
          </VBtn>
          <VBtn
            class="btn-small"
            icon
            @click="stopAudio"
          >
            <VIcon small>mdi-stop</VIcon>
          </VBtn>
        </td>
      </tr>
      </tbody>
    </VTable>
  </VContainer>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const audioList = ref([
  {
    title: 'Audio 1',
    file: '/audios/01_CAPITULO_6.Mejorando_la_Activacion.mp3',
    description: 'Capítulo 6: Mejorando la Activación',
    topic: 'Activación',
    duration: 0, // Se actualizará al cargar
    isPlaying: false,
  },
  {
    title: 'Audio 2',
    file: '/audios/audio2.mp3',
    description: 'Capítulo 7: Gestión del Tiempo',
    topic: 'Productividad',
    duration: 0,
    isPlaying: false,
  },
  {
    title: 'Audio 3',
    file: '/audios/audio3.mp3',
    description: 'Capítulo 8: Comunicación Eficaz',
    topic: 'Habilidades Blandas',
    duration: 0,
    isPlaying: false,
  },
])

const audio = new Audio()
const isPlaying = ref(false)
const currentAudioIndex = ref(null)
const currentTime = ref(0)

const playAudio = async index => {
  try {
    if (currentAudioIndex.value === index) {
      await audio.play()
    } else {
      stopAudio()
      audio.src = audioList.value[index].file

      audio.onloadedmetadata = () => {
        audioList.value[index].duration = audio.duration
      }

      audio.ontimeupdate = () => {
        currentTime.value = audio.currentTime
      }

      await audio.play()
      currentAudioIndex.value = index
    }
    audioList.value[index].isPlaying = true
    isPlaying.value = true

    audio.onended = stopAudio
    audio.onerror = () => {
      console.error(`No se pudo cargar el archivo: ${audio.src}`)
      stopAudio()
    }
  } catch (error) {
    console.error('Error al intentar reproducir el audio:', error)
  }
}

const pauseAudio = () => {
  if (currentAudioIndex.value !== null) {
    audio.pause()
    audioList.value[currentAudioIndex.value].isPlaying = false
    isPlaying.value = false
  }
}

const stopAudio = () => {
  if (currentAudioIndex.value !== null) {
    audio.pause()
    audio.currentTime = 0
    currentTime.value = 0
    audioList.value[currentAudioIndex.value].isPlaying = false
    isPlaying.value = false
    currentAudioIndex.value = null
  }
}

// Formatea el tiempo en formato mm:ss
const formatTime = time => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

onUnmounted(() => {
  audio.pause()
  audio.src = ''
})
</script>

<style scoped>
.btn-small {
  width: 24px;
  height: 24px;
  padding: 0;
  min-width: 24px;
}

.VIcon {
  font-size: 18px;
}
</style>
