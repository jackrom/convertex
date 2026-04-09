<script setup>
definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }
const goLogin = () => {
  sessionStorage.clear()
  window.location.href = '/'
}
</script>

<template>
  <div class="error-page error-401">
    <div class="error-content">
      <div class="error-illustration">
        <!-- Escudo/Candado -->
        <div class="shield">
          <div class="shield-body">
            <div class="lock">
              <div class="lock-top" />
              <div class="lock-body">
                <div class="keyhole" />
              </div>
            </div>
          </div>
          <div class="shield-pulse" />
          <div class="shield-pulse shield-pulse--2" />
        </div>
      </div>

      <div class="error-code">
        <span class="digit">4</span>
        <span class="digit digit--lock">0</span>
        <span class="digit">1</span>
      </div>

      <h1 class="error-title">Acceso no autorizado</h1>
      <p class="error-description">
        No tienes permiso para acceder a este recurso.
        <br>Verifica tus credenciales o contacta al administrador.
      </p>

      <div class="error-actions">
        <button class="btn-primary" @click="goLogin">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          </span>
          Iniciar sesi&oacute;n
        </button>
        <button class="btn-outline" @click="goHome">
          Volver al inicio
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100dvh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; font-family: 'Inter', 'Segoe UI', sans-serif;
}
.error-401 {
  background: linear-gradient(135deg, #0a0e1a 0%, #151d30 40%, #2c3555 100%);
  color: #e8eaf0;
}
.error-content { position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 600px; }

.error-illustration {
  height: 180px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
}

.shield {
  position: relative;

  .shield-body {
    width: 100px; height: 120px;
    background: linear-gradient(135deg, #2c3555, #3d4a6e);
    clip-path: polygon(50% 0%, 100% 25%, 100% 70%, 50% 100%, 0% 70%, 0% 25%);
    display: flex; align-items: center; justify-content: center;
    border: 2px solid #4a5a80;
    animation: shield-float 3s ease-in-out infinite;
  }

  .shield-pulse, .shield-pulse--2 {
    position: absolute; inset: -15px;
    border: 2px solid rgba(219,126,59,.2);
    clip-path: polygon(50% 0%, 100% 25%, 100% 70%, 50% 100%, 0% 70%, 0% 25%);
    animation: pulse-out 2s ease-out infinite;
  }
  .shield-pulse--2 { animation-delay: 1s; }
}

.lock {
  .lock-top {
    width: 28px; height: 20px;
    border: 4px solid #db7e3b; border-bottom: none;
    border-radius: 14px 14px 0 0;
    margin: 0 auto;
  }
  .lock-body {
    width: 36px; height: 26px;
    background: #db7e3b;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
  }
  .keyhole {
    width: 8px; height: 8px;
    background: #1a1f35;
    border-radius: 50%;
    position: relative;
    &::after {
      content: '';
      width: 4px; height: 10px;
      background: #1a1f35;
      position: absolute;
      top: 6px; left: 2px;
      border-radius: 0 0 2px 2px;
    }
  }
}

@keyframes shield-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes pulse-out { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.3); opacity: 0; } }

.error-code {
  font-size: clamp(5rem, 12vw, 8rem); font-weight: 900; line-height: 1; margin-bottom: .5rem;
  .digit {
    display: inline-block;
    background: linear-gradient(135deg, #db7e3b, #e8a06a);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    &--lock { animation: shake-lock 2s ease-in-out infinite; }
  }
}
@keyframes shake-lock {
  0%,100% { transform: translateX(0); }
  10%,30%,50% { transform: translateX(-4px); }
  20%,40% { transform: translateX(4px); }
  60% { transform: translateX(0); }
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
  background: linear-gradient(135deg, #db7e3b, #e8a06a); color: #fff;
  box-shadow: 0 4px 15px rgba(219,126,59,.3);
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(219,126,59,.4); }
}
.btn-outline {
  background: transparent; color: #9ba3b8; border: 1.5px solid #3d4463;
  &:hover { border-color: #db7e3b; color: #db7e3b; transform: translateY(-2px); }
}
</style>
