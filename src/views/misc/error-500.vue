<script setup>
definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }
const retry = () => { window.location.reload() }
</script>

<template>
  <div class="error-page error-500">
    <div class="error-content">
      <!-- Robot roto -->
      <div class="error-illustration">
        <div class="robot">
          <div class="robot-head">
            <div class="robot-eye robot-eye--left">
              <div class="robot-pupil" />
            </div>
            <div class="robot-eye robot-eye--right">
              <div class="robot-x">✕</div>
            </div>
            <div class="robot-mouth" />
            <div class="robot-antenna" />
          </div>
          <div class="robot-body">
            <div class="robot-arm robot-arm--left" />
            <div class="robot-arm robot-arm--right" />
            <div class="robot-chest">
              <div class="robot-light" />
            </div>
          </div>
          <!-- Humo -->
          <div class="smoke">
            <div class="smoke-puff smoke-puff--1" />
            <div class="smoke-puff smoke-puff--2" />
            <div class="smoke-puff smoke-puff--3" />
          </div>
          <!-- Chispas -->
          <div class="sparks">
            <div class="spark spark--1" />
            <div class="spark spark--2" />
            <div class="spark spark--3" />
          </div>
        </div>
      </div>

      <div class="error-code">
        <span class="digit">5</span>
        <span class="digit digit--glitch">0</span>
        <span class="digit">0</span>
      </div>

      <h1 class="error-title">Algo explot&oacute; en el servidor</h1>
      <p class="error-description">
        Nuestro robot de confianza tuvo un peque&ntilde;o cortocircuito.
        <br>El equipo t&eacute;cnico ya fue notificado y est&aacute; trabajando en ello.
      </p>

      <div class="error-actions">
        <button class="btn-primary" @click="retry">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </span>
          Reintentar
        </button>
        <button class="btn-outline" @click="goHome">
          Volver al inicio
        </button>
      </div>
    </div>

    <!-- Engranajes decorativos -->
    <div class="gears">
      <div class="gear gear--1" />
      <div class="gear gear--2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

.error-500 {
  background: linear-gradient(135deg, #1a0a0a 0%, #2d1515 40%, #3d1f1f 100%);
  color: #e8eaf0;
}

.error-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.error-illustration {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.robot {
  position: relative;
  animation: shake 0.5s ease-in-out infinite;

  .robot-head {
    width: 80px; height: 60px;
    background: #b0b5c3;
    border-radius: 12px 12px 8px 8px;
    position: relative;
    margin: 0 auto;
    border: 2px solid #8a90a0;
  }

  .robot-eye {
    width: 20px; height: 20px;
    background: #1a1f35;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    &--left { left: 12px; }
    &--right { right: 12px; }
  }

  .robot-pupil {
    width: 8px; height: 8px;
    background: #db7e3b;
    border-radius: 50%;
    animation: blink 3s ease-in-out infinite;
  }

  .robot-x {
    color: #FF4C51;
    font-size: 14px;
    font-weight: 900;
  }

  .robot-mouth {
    width: 30px; height: 4px;
    background: #FF4C51;
    border-radius: 2px;
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%) rotate(5deg);
  }

  .robot-antenna {
    width: 3px; height: 15px;
    background: #8a90a0;
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    &::after {
      content: '';
      width: 8px; height: 8px;
      background: #FF4C51;
      border-radius: 50%;
      position: absolute;
      top: -5px;
      left: -2.5px;
      animation: pulse 1s ease-in-out infinite;
    }
  }

  .robot-body {
    width: 70px; height: 50px;
    background: #9ba3b8;
    border-radius: 8px;
    margin: 4px auto 0;
    position: relative;
    border: 2px solid #8a90a0;
  }

  .robot-arm {
    width: 10px; height: 40px;
    background: #b0b5c3;
    border-radius: 5px;
    position: absolute;
    top: 5px;
    &--left {
      left: -14px;
      transform: rotate(20deg);
      transform-origin: top center;
      animation: armWave 2s ease-in-out infinite;
    }
    &--right {
      right: -14px;
      transform: rotate(-15deg);
    }
  }

  .robot-chest {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .robot-light {
    width: 12px; height: 12px;
    background: #FF4C51;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(255,76,81,.6);
  }
}

.smoke {
  position: absolute;
  top: -20px;
  right: -10px;

  .smoke-puff {
    width: 12px; height: 12px;
    background: rgba(180,180,180,.4);
    border-radius: 50%;
    position: absolute;
    animation: rise 2s ease-out infinite;
    &--1 { animation-delay: 0s; }
    &--2 { left: 10px; animation-delay: 0.6s; }
    &--3 { left: -5px; animation-delay: 1.2s; }
  }
}

.sparks {
  position: absolute;
  top: 30px;
  left: -20px;

  .spark {
    width: 4px; height: 4px;
    background: #FF9F43;
    border-radius: 50%;
    position: absolute;
    animation: sparkle 1s ease-out infinite;
    &--1 { animation-delay: 0s; }
    &--2 { top: 10px; left: 5px; animation-delay: 0.3s; }
    &--3 { top: -5px; left: 8px; animation-delay: 0.6s; }
  }
}

@keyframes shake { 0%,100% { transform: translateX(0); } 25% { transform: translateX(-3px) rotate(-1deg); } 75% { transform: translateX(3px) rotate(1deg); } }
@keyframes blink { 0%,90%,100% { opacity: 1; } 95% { opacity: 0; } }
@keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .5; transform: scale(.8); } }
@keyframes armWave { 0%,100% { transform: rotate(20deg); } 50% { transform: rotate(-10deg); } }
@keyframes rise { 0% { transform: translateY(0) scale(1); opacity: .6; } 100% { transform: translateY(-40px) scale(2); opacity: 0; } }
@keyframes sparkle { 0% { transform: translate(0) scale(1); opacity: 1; } 100% { transform: translate(-15px, -20px) scale(0); opacity: 0; } }

.gears {
  position: absolute;
  bottom: -30px;
  right: -30px;
  opacity: .06;

  .gear {
    border: 12px dashed #fff;
    border-radius: 50%;
    &--1 { width: 120px; height: 120px; animation: spin 10s linear infinite; }
    &--2 { width: 80px; height: 80px; position: absolute; top: -40px; left: -60px; animation: spin 7s linear infinite reverse; }
  }
}
@keyframes spin { to { transform: rotate(360deg); } }

.error-code {
  font-size: clamp(5rem, 12vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: .5rem;
  .digit {
    display: inline-block;
    background: linear-gradient(135deg, #FF4C51, #ff7b7f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    &--glitch { animation: glitch .3s ease-in-out infinite alternate; }
  }
}
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(2px, -1px); }
  60% { transform: translate(-1px, -2px); }
  80% { transform: translate(1px, 1px); }
  100% { transform: translate(0); }
}

.error-title { font-size: clamp(1.3rem, 3vw, 1.8rem); font-weight: 700; margin-bottom: .75rem; color: #fff; }
.error-description { font-size: 1rem; color: #9ba3b8; line-height: 1.6; margin-bottom: 2rem; }

.error-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

.btn-primary, .btn-outline {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .75rem 1.5rem; border-radius: 10px; font-size: .95rem;
  font-weight: 600; cursor: pointer; transition: all .3s ease; border: none;
  .btn-icon { display: flex; align-items: center; }
}
.btn-primary {
  background: linear-gradient(135deg, #FF4C51, #ff7b7f);
  color: #fff;
  box-shadow: 0 4px 15px rgba(255,76,81,.3);
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,76,81,.4); }
}
.btn-outline {
  background: transparent; color: #9ba3b8; border: 1.5px solid #3d2020;
  &:hover { border-color: #FF4C51; color: #FF4C51; transform: translateY(-2px); }
}
</style>
