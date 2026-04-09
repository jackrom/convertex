<script setup>
definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }
const goBack = () => { window.history.back() }
</script>

<template>
  <div class="error-page error-404">
    <div class="error-bg">
      <div class="stars" />
      <div class="stars stars--sm" />
    </div>

    <div class="error-content">
      <!-- Astronaut flotante -->
      <div class="error-illustration">
        <div class="astronaut">
          <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg" class="astronaut-svg">
            <!-- Cuerpo -->
            <ellipse cx="60" cy="75" rx="32" ry="38" fill="#e8eaf0" stroke="#b0b5c3" stroke-width="2"/>
            <!-- Casco -->
            <circle cx="60" cy="38" r="26" fill="#d4d8e2" stroke="#b0b5c3" stroke-width="2"/>
            <!-- Visor -->
            <ellipse cx="60" cy="36" rx="18" ry="16" fill="#2c3555"/>
            <!-- Reflejo visor -->
            <ellipse cx="53" cy="32" rx="6" ry="4" fill="#4a6fa5" opacity="0.6" transform="rotate(-15 53 32)"/>
            <!-- Ojos tristes en visor -->
            <circle cx="53" cy="38" r="2.5" fill="#db7e3b"/>
            <circle cx="67" cy="38" r="2.5" fill="#db7e3b"/>
            <path d="M52 44 Q60 40 68 44" stroke="#db7e3b" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <!-- Mochila -->
            <rect x="26" y="60" width="8" height="20" rx="3" fill="#b0b5c3"/>
            <rect x="86" y="60" width="8" height="20" rx="3" fill="#b0b5c3"/>
            <!-- Brazos -->
            <path d="M28 70 Q10 55 18 40" stroke="#d4d8e2" stroke-width="8" fill="none" stroke-linecap="round"/>
            <path d="M92 70 Q110 55 102 40" stroke="#d4d8e2" stroke-width="8" fill="none" stroke-linecap="round"/>
            <!-- Piernas -->
            <path d="M45 110 L40 130" stroke="#d4d8e2" stroke-width="8" fill="none" stroke-linecap="round"/>
            <path d="M75 110 L80 130" stroke="#d4d8e2" stroke-width="8" fill="none" stroke-linecap="round"/>
            <!-- Botas -->
            <ellipse cx="38" cy="133" rx="8" ry="5" fill="#b0b5c3"/>
            <ellipse cx="82" cy="133" rx="8" ry="5" fill="#b0b5c3"/>
          </svg>
          <!-- Cable flotante -->
          <svg class="cable" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 Q30 50 60 100 Q90 150 40 200" stroke="#db7e3b" stroke-width="2" fill="none" stroke-dasharray="6 4" opacity="0.5"/>
          </svg>
        </div>

        <!-- Planetas decorativos -->
        <div class="planet planet--1" />
        <div class="planet planet--2" />
        <div class="planet planet--3" />
      </div>

      <div class="error-code">
        <span class="digit digit--bounce">4</span>
        <span class="digit digit--spin">0</span>
        <span class="digit digit--bounce" style="animation-delay:.2s">4</span>
      </div>

      <h1 class="error-title">Houston, tenemos un problema</h1>
      <p class="error-description">
        La p&aacute;gina que buscas se perdi&oacute; en el espacio.
        <br>Parece que esta ruta no existe o fue movida a otra galaxia.
      </p>

      <div class="error-actions">
        <button class="btn-primary" @click="goHome">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </span>
          Volver al inicio
        </button>
        <button class="btn-outline" @click="goBack">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          </span>
          P&aacute;gina anterior
        </button>
      </div>
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

.error-404 {
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 40%, #2c3555 100%);
  color: #e8eaf0;
}

.error-bg {
  position: absolute;
  inset: 0;
  .stars, .stars--sm {
    position: absolute; inset: 0;
    background-image: radial-gradient(2px 2px at 20px 30px, #fff, transparent),
                      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,.8), transparent),
                      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
                      radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,.6), transparent),
                      radial-gradient(2px 2px at 160px 30px, #fff, transparent);
    background-size: 200px 100px;
    animation: twinkle 4s ease-in-out infinite alternate;
  }
  .stars--sm {
    background-size: 300px 150px;
    animation-delay: 2s;
    opacity: .5;
  }
}

@keyframes twinkle {
  0% { opacity: .4; }
  100% { opacity: 1; }
}

.error-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.error-illustration {
  position: relative;
  height: 180px;
  margin-bottom: 1rem;

  .astronaut {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: float 6s ease-in-out infinite;
    .astronaut-svg { width: 100px; height: 120px; }
    .cable {
      position: absolute; top: 100%; left: 50%;
      width: 60px; height: 80px;
      transform: translateX(-50%);
      animation: sway 4s ease-in-out infinite;
    }
  }

  .planet {
    position: absolute;
    border-radius: 50%;
    &--1 {
      width: 20px; height: 20px;
      background: #db7e3b;
      top: 20px; left: 15%;
      animation: orbit 8s linear infinite;
      box-shadow: 0 0 15px rgba(219,126,59,.4);
    }
    &--2 {
      width: 12px; height: 12px;
      background: #4a6fa5;
      top: 40px; right: 18%;
      animation: orbit 12s linear infinite reverse;
      box-shadow: 0 0 10px rgba(74,111,165,.4);
    }
    &--3 {
      width: 8px; height: 8px;
      background: #28C76F;
      bottom: 30px; left: 25%;
      animation: orbit 6s linear infinite;
      box-shadow: 0 0 8px rgba(40,199,111,.4);
    }
  }
}

@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) rotate(-3deg); }
  50% { transform: translate(-50%, calc(-50% - 15px)) rotate(3deg); }
}
@keyframes sway {
  0%, 100% { transform: translateX(-50%) rotate(5deg); }
  50% { transform: translateX(-50%) rotate(-5deg); }
}
@keyframes orbit {
  0% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-8px) translateX(5px); }
  50% { transform: translateY(0) translateX(10px); }
  75% { transform: translateY(8px) translateX(5px); }
  100% { transform: translateY(0) translateX(0); }
}

.error-code {
  font-size: clamp(5rem, 12vw, 8rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: .5rem;
  .digit {
    display: inline-block;
    background: linear-gradient(135deg, #db7e3b, #e8a06a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: none;
    &--bounce { animation: bounce 2s ease-in-out infinite; }
    &--spin { animation: wiggle 3s ease-in-out infinite; }
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes wiggle {
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}

.error-title {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  margin-bottom: .75rem;
  color: #fff;
}

.error-description {
  font-size: 1rem;
  color: #9ba3b8;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-outline {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .75rem 1.5rem;
  border-radius: 10px;
  font-size: .95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .3s ease;
  border: none;
  .btn-icon { display: flex; align-items: center; }
}

.btn-primary {
  background: linear-gradient(135deg, #db7e3b, #e8a06a);
  color: #fff;
  box-shadow: 0 4px 15px rgba(219,126,59,.3);
  &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(219,126,59,.4); }
}

.btn-outline {
  background: transparent;
  color: #9ba3b8;
  border: 1.5px solid #3d4463;
  &:hover { border-color: #db7e3b; color: #db7e3b; transform: translateY(-2px); }
}
</style>
