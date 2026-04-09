<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }

// Animación de progreso de mantenimiento
const progress = ref(0)
let progressTimer = null
onMounted(() => {
  progressTimer = setInterval(() => {
    if (progress.value < 92) progress.value += Math.random() * 2
    else progress.value = 92 + Math.sin(Date.now() / 1000) * 3
  }, 300)
})
onUnmounted(() => { if (progressTimer) clearInterval(progressTimer) })
</script>

<template>
  <div class="error-page maintenance-page">
    <div class="error-content">
      <div class="error-illustration">
        <!-- Engranajes animados -->
        <div class="maint-gears">
          <div class="maint-gear maint-gear--big">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L55 20 L65 15 L63 27 L75 28 L68 38 L80 45 L70 50 L80 55 L68 62 L75 72 L63 73 L65 85 L55 80 L50 90 L45 80 L35 85 L37 73 L25 72 L32 62 L20 55 L30 50 L20 45 L32 38 L25 28 L37 27 L35 15 L45 20 Z" fill="none" stroke="#db7e3b" stroke-width="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="#db7e3b" stroke-width="2"/>
            </svg>
          </div>
          <div class="maint-gear maint-gear--small">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15 L55 25 L65 22 L62 33 L72 35 L66 44 L76 50 L66 56 L72 65 L62 67 L65 78 L55 75 L50 85 L45 75 L35 78 L38 67 L28 65 L34 56 L24 50 L34 44 L28 35 L38 33 L35 22 L45 25 Z" fill="none" stroke="#e8a06a" stroke-width="2"/>
              <circle cx="50" cy="50" r="12" fill="none" stroke="#e8a06a" stroke-width="2"/>
            </svg>
          </div>
        </div>
        <!-- Herramientas -->
        <div class="maint-tools">
          <div class="tool-wrench">🔧</div>
          <div class="tool-hammer">🔨</div>
        </div>
      </div>

      <div class="maint-badge">
        <span class="badge-dot" />
        Mantenimiento programado
      </div>

      <h1 class="error-title">Estamos mejorando Convertex</h1>
      <p class="error-description">
        Nuestro equipo está trabajando para ofrecerte una mejor experiencia.
        <br>Volveremos en breve con nuevas mejoras.
      </p>

      <!-- Barra de progreso -->
      <div class="progress-section">
        <div class="progress-label">Progreso estimado</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: Math.min(progress, 95) + '%' }" />
        </div>
        <div class="progress-pct">{{ Math.round(Math.min(progress, 95)) }}%</div>
      </div>

      <div class="error-actions">
        <button class="btn-primary" @click="goHome">
          Intentar de nuevo
        </button>
        <button class="btn-outline" href="mailto:info@facilcontabilidad.com">
          Contactar soporte
        </button>
      </div>
    </div>

    <!-- Partículas de fondo -->
    <div class="bg-dots">
      <div v-for="i in 10" :key="i" class="bg-dot" :style="{ left: (i * 9 + 3) + '%', top: (Math.sin(i) * 30 + 50) + '%', animationDelay: (i * 0.5) + 's' }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100dvh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; font-family: 'Inter', 'Segoe UI', sans-serif;
}
.maintenance-page {
  background: linear-gradient(135deg, #0d1520 0%, #1a2740 40%, #2c3555 100%);
  color: #e8eaf0;
}
.error-content { position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 550px; }

.error-illustration {
  height: 170px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.5rem; position: relative;
}

.maint-gears {
  position: relative; width: 140px; height: 140px;

  .maint-gear {
    position: absolute;
    svg { width: 100%; height: 100%; }

    &--big {
      width: 90px; height: 90px; top: 10px; left: 0;
      animation: spin-gear 8s linear infinite;
    }
    &--small {
      width: 60px; height: 60px; top: 50px; left: 65px;
      animation: spin-gear 5s linear infinite reverse;
    }
  }
}
@keyframes spin-gear { to { transform: rotate(360deg); } }

.maint-tools {
  position: absolute;
  .tool-wrench {
    font-size: 28px; position: absolute; top: -20px; right: -40px;
    animation: tool-bounce 2s ease-in-out infinite;
  }
  .tool-hammer {
    font-size: 24px; position: absolute; bottom: -20px; left: -50px;
    animation: tool-bounce 2s ease-in-out infinite .8s;
  }
}
@keyframes tool-bounce { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-8px) rotate(10deg); } }

.maint-badge {
  display: inline-flex; align-items: center; gap: .5rem;
  background: rgba(219,126,59,.12); color: #db7e3b;
  padding: .4rem 1rem; border-radius: 20px; font-size: .85rem; font-weight: 600;
  margin-bottom: 1rem;
  .badge-dot {
    width: 8px; height: 8px; background: #db7e3b; border-radius: 50%;
    animation: dot-pulse 1.5s ease-in-out infinite;
  }
}
@keyframes dot-pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.7); } }

.error-title { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; margin-bottom: .75rem; color: #fff; }
.error-description { font-size: 1rem; color: #9ba3b8; line-height: 1.6; margin-bottom: 1.5rem; strong { color: #db7e3b; } }

.progress-section {
  margin-bottom: 2rem;
  .progress-label { font-size: .8rem; color: #6b7590; margin-bottom: .5rem; text-transform: uppercase; letter-spacing: 1px; }
  .progress-bar {
    width: 100%; max-width: 300px; height: 8px; background: rgba(255,255,255,.08);
    border-radius: 4px; margin: 0 auto .5rem; overflow: hidden;
  }
  .progress-fill {
    height: 100%; border-radius: 4px;
    background: linear-gradient(90deg, #db7e3b, #e8a06a);
    transition: width .3s ease;
    box-shadow: 0 0 10px rgba(219,126,59,.4);
  }
  .progress-pct {
    font-size: 1.5rem; font-weight: 800;
    background: linear-gradient(135deg, #db7e3b, #e8a06a);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
}

.error-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary, .btn-outline {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .75rem 1.5rem; border-radius: 10px; font-size: .95rem;
  font-weight: 600; cursor: pointer; transition: all .3s ease; border: none;
}
.btn-primary {
  background: linear-gradient(135deg, #db7e3b, #e8a06a); color: #fff;
  box-shadow: 0 4px 15px rgba(219,126,59,.3);
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(219,126,59,.4); }
}
.btn-outline {
  background: transparent; color: #9ba3b8; border: 1.5px solid #3d4463;
  &:hover { border-color: #db7e3b; color: #db7e3b; transform: translateY(-2px); }
}

.bg-dots {
  position: absolute; inset: 0; pointer-events: none;
  .bg-dot {
    position: absolute; width: 4px; height: 4px;
    background: rgba(219,126,59,.2); border-radius: 50%;
    animation: drift 6s ease-in-out infinite alternate;
  }
}
@keyframes drift { 0% { transform: translate(0,0); opacity: .3; } 100% { transform: translate(10px,-20px); opacity: .6; } }
</style>
