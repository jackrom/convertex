<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }

// Countdown simulado
const countdown = ref({ m: 5, s: 0 })
let timer = null
onMounted(() => {
  timer = setInterval(() => {
    if (countdown.value.s > 0) countdown.value.s--
    else if (countdown.value.m > 0) { countdown.value.m--; countdown.value.s = 59 }
    else { clearInterval(timer); window.location.reload() }
  }, 1000)
})
onUnmounted(() => { if (timer) clearInterval(timer) })
const pad = n => String(n).padStart(2, '0')
</script>

<template>
  <div class="error-page error-503">
    <div class="error-content">
      <div class="error-illustration">
        <!-- Semáforo / Señal de tráfico -->
        <div class="traffic-light">
          <div class="tl-pole" />
          <div class="tl-box">
            <div class="tl-light tl-light--red" />
            <div class="tl-light tl-light--yellow tl-light--active" />
            <div class="tl-light tl-light--green" />
          </div>
        </div>
        <!-- Conos -->
        <div class="cone cone--1">
          <div class="cone-body" />
          <div class="cone-stripe" />
        </div>
        <div class="cone cone--2">
          <div class="cone-body" />
          <div class="cone-stripe" />
        </div>
        <!-- Barricada -->
        <div class="barricade">
          <div class="bar-stripe" />
        </div>
      </div>

      <div class="error-code">
        <span class="digit">5</span>
        <span class="digit digit--pulse">0</span>
        <span class="digit">3</span>
      </div>

      <h1 class="error-title">Servicio en mantenimiento</h1>
      <p class="error-description">
        Estamos haciendo mejoras para ti. El servicio estar&aacute; disponible pronto.
        <br>Gracias por tu paciencia.
      </p>

      <div class="countdown">
        <div class="countdown-label">Tiempo estimado de espera</div>
        <div class="countdown-timer">
          <div class="countdown-block">
            <span class="countdown-num">{{ pad(countdown.m) }}</span>
            <span class="countdown-unit">min</span>
          </div>
          <span class="countdown-sep">:</span>
          <div class="countdown-block">
            <span class="countdown-num">{{ pad(countdown.s) }}</span>
            <span class="countdown-unit">seg</span>
          </div>
        </div>
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

    <!-- Partículas decorativas -->
    <div class="particles">
      <div v-for="i in 8" :key="i" class="particle" :style="{ left: (i * 12) + '%', animationDelay: (i * 0.4) + 's', animationDuration: (3 + i * 0.5) + 's' }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100dvh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; font-family: 'Inter', 'Segoe UI', sans-serif;
}
.error-503 {
  background: linear-gradient(135deg, #0d1520 0%, #1a2740 40%, #2c3555 100%);
  color: #e8eaf0;
}
.error-content { position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 600px; }

.error-illustration {
  height: 180px; position: relative; margin-bottom: 1rem; display: flex; align-items: flex-end; justify-content: center; gap: 2rem;
}

.traffic-light {
  position: relative;
  .tl-pole { width: 6px; height: 60px; background: #555; margin: 0 auto; border-radius: 3px; }
  .tl-box {
    width: 36px; background: #333; border-radius: 8px; padding: 6px;
    display: flex; flex-direction: column; gap: 5px; border: 2px solid #444;
  }
  .tl-light {
    width: 24px; height: 24px; border-radius: 50%; opacity: .2;
    &--red { background: #FF4C51; }
    &--yellow { background: #FF9F43; }
    &--green { background: #28C76F; }
    &--active { opacity: 1; animation: blink-light 2s ease-in-out infinite; box-shadow: 0 0 15px rgba(255,159,67,.6); }
  }
}
@keyframes blink-light { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

.cone {
  .cone-body {
    width: 0; height: 0;
    border-left: 14px solid transparent; border-right: 14px solid transparent;
    border-bottom: 40px solid #FF9F43;
  }
  .cone-stripe {
    width: 28px; height: 6px; background: #fff; margin-top: -22px; margin-left: 0;
    position: relative;
  }
  &--2 { transform: rotate(8deg); }
}

.barricade {
  width: 100px; height: 12px; background: #FF9F43; border-radius: 3px;
  position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%);
  .bar-stripe {
    width: 100%; height: 100%;
    background: repeating-linear-gradient(45deg, transparent, transparent 8px, #fff 8px, #fff 12px);
    border-radius: 3px;
  }
}

.error-code {
  font-size: clamp(5rem, 12vw, 8rem); font-weight: 900; line-height: 1; margin-bottom: .5rem;
  .digit {
    display: inline-block;
    background: linear-gradient(135deg, #FF9F43, #ffc078);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    &--pulse { animation: pulse-digit 2s ease-in-out infinite; }
  }
}
@keyframes pulse-digit { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }

.error-title { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 700; margin-bottom: .75rem; color: #fff; }
.error-description { font-size: 1rem; color: #9ba3b8; line-height: 1.6; margin-bottom: 1.5rem; }

.countdown {
  margin-bottom: 2rem;
  .countdown-label { font-size: .85rem; color: #6b7590; margin-bottom: .5rem; text-transform: uppercase; letter-spacing: 1px; }
  .countdown-timer { display: flex; align-items: center; justify-content: center; gap: .5rem; }
  .countdown-block { text-align: center; }
  .countdown-num {
    font-size: 2.5rem; font-weight: 900; display: block;
    background: linear-gradient(135deg, #FF9F43, #ffc078);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .countdown-unit { font-size: .75rem; color: #6b7590; text-transform: uppercase; }
  .countdown-sep { font-size: 2rem; color: #FF9F43; font-weight: 700; animation: blink-light 1s step-end infinite; }
}

.error-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary, .btn-outline {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .75rem 1.5rem; border-radius: 10px; font-size: .95rem;
  font-weight: 600; cursor: pointer; transition: all .3s ease; border: none;
}
.btn-primary {
  background: linear-gradient(135deg, #FF9F43, #ffc078); color: #1a1f35;
  box-shadow: 0 4px 15px rgba(255,159,67,.3);
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,159,67,.4); }
}
.btn-outline {
  background: transparent; color: #9ba3b8; border: 1.5px solid #3d4463;
  &:hover { border-color: #FF9F43; color: #FF9F43; transform: translateY(-2px); }
}

.particles {
  position: absolute; inset: 0; pointer-events: none;
  .particle {
    position: absolute; bottom: -10px;
    width: 4px; height: 4px; background: rgba(255,159,67,.3); border-radius: 50%;
    animation: float-up 4s ease-in infinite;
  }
}
@keyframes float-up { 0% { transform: translateY(0); opacity: .6; } 100% { transform: translateY(-100vh); opacity: 0; } }
</style>
