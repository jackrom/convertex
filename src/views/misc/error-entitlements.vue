<script setup>
import { useRoute } from 'vue-router'

definePage({
  meta: { layout: 'blank', public: true },
})

const route = useRoute()
const reason = route.query?.reason || 'unknown'

const themes = {
  auth: {
    title: 'Error de autenticación',
    description: 'Tu sesión no pudo ser verificada. Esto puede ocurrir si tu token expiró o si no tienes los permisos necesarios.',
    icon: 'key',
    accent: '#db7e3b',
    accentLight: '#e8a06a',
    bgGrad: 'linear-gradient(135deg, #0d1117 0%, #1a2235 40%, #2c3555 100%)',
  },
  'auth-loop': {
    title: 'Bucle de autenticación',
    description: 'Detectamos un ciclo al verificar tu sesión. Limpia las cookies del navegador e intenta nuevamente.',
    icon: 'loop',
    accent: '#FF9F43',
    accentLight: '#ffc078',
    bgGrad: 'linear-gradient(135deg, #1a1400 0%, #2d2210 40%, #3d3520 100%)',
  },
  'api-unavailable': {
    title: 'Servidor no disponible',
    description: 'No fue posible conectar con el servidor de FacilContabilidad. Verifica tu conexión e intenta nuevamente.',
    icon: 'server',
    accent: '#FF4C51',
    accentLight: '#ff7b7f',
    bgGrad: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 40%, #3d1f1f 100%)',
  },
  entitlements: {
    title: 'Sin acceso a la aplicación',
    description: 'No pudimos verificar tus permisos y suscripciones activas. Es posible que tu cuenta no tenga acceso a Convertex.',
    icon: 'badge',
    accent: '#8B5CF6',
    accentLight: '#a78bfa',
    bgGrad: 'linear-gradient(135deg, #0d0a1a 0%, #1a1535 40%, #2c2555 100%)',
  },
  unknown: {
    title: 'Error inesperado',
    description: 'Ocurrió un error inesperado al cargar la aplicación. Por favor, intenta nuevamente.',
    icon: 'alert',
    accent: '#db7e3b',
    accentLight: '#e8a06a',
    bgGrad: 'linear-gradient(135deg, #0d1117 0%, #161d2e 40%, #2c3555 100%)',
  },
}

const theme = themes[reason] || themes.unknown

const handleRetry = () => {
  sessionStorage.clear()
  window.location.href = '/'
}

const contactSupport = () => {
  window.location.href = 'mailto:info@facilcontabilidad.com?subject=Error Convertex - ' + encodeURIComponent(reason)
}
</script>

<template>
  <div class="error-page" :style="{ background: theme.bgGrad }">
    <div class="error-content">
      <!-- Ilustración dinámica según el tipo de error -->
      <div class="error-illustration">
        <!-- Key / Auth error -->
        <div v-if="theme.icon === 'key'" class="illust-key">
          <div class="key-ring">
            <div class="key-head" />
            <div class="key-shaft">
              <div class="key-tooth key-tooth--1" />
              <div class="key-tooth key-tooth--2" />
              <div class="key-tooth key-tooth--3" />
            </div>
          </div>
          <div class="key-crack key-crack--1" />
          <div class="key-crack key-crack--2" />
          <div class="key-crack key-crack--3" />
          <div class="key-sparkle key-sparkle--1">✦</div>
          <div class="key-sparkle key-sparkle--2">✦</div>
        </div>

        <!-- Loop / Auth loop -->
        <div v-if="theme.icon === 'loop'" class="illust-loop">
          <div class="loop-ring loop-ring--outer" />
          <div class="loop-ring loop-ring--inner" />
          <div class="loop-arrows">
            <div class="loop-arrow loop-arrow--1">➤</div>
            <div class="loop-arrow loop-arrow--2">➤</div>
            <div class="loop-arrow loop-arrow--3">➤</div>
          </div>
          <div class="loop-center">∞</div>
        </div>

        <!-- Server / API unavailable -->
        <div v-if="theme.icon === 'server'" class="illust-server">
          <div class="server-rack">
            <div class="server-unit server-unit--1">
              <div class="server-light server-light--off" />
              <div class="server-lines">
                <div class="server-line" />
                <div class="server-line" />
              </div>
            </div>
            <div class="server-unit server-unit--2">
              <div class="server-light server-light--blink" />
              <div class="server-lines">
                <div class="server-line" />
                <div class="server-line" />
              </div>
            </div>
            <div class="server-unit server-unit--3">
              <div class="server-light server-light--off" />
              <div class="server-lines">
                <div class="server-line" />
                <div class="server-line" />
              </div>
            </div>
          </div>
          <div class="server-cable server-cable--1" />
          <div class="server-cable server-cable--2" />
          <div class="server-zap">⚡</div>
          <div class="server-smoke">
            <div class="srv-smoke-puff srv-smoke-puff--1" />
            <div class="srv-smoke-puff srv-smoke-puff--2" />
          </div>
        </div>

        <!-- Badge / Entitlements -->
        <div v-if="theme.icon === 'badge'" class="illust-badge">
          <div class="badge-card">
            <div class="badge-avatar" />
            <div class="badge-text-lines">
              <div class="badge-line badge-line--1" />
              <div class="badge-line badge-line--2" />
            </div>
            <div class="badge-stamp">✕</div>
          </div>
          <div class="badge-particle badge-particle--1" />
          <div class="badge-particle badge-particle--2" />
          <div class="badge-particle badge-particle--3" />
        </div>

        <!-- Alert / Unknown -->
        <div v-if="theme.icon === 'alert'" class="illust-alert">
          <div class="alert-triangle">
            <div class="alert-exclaim">!</div>
          </div>
          <div class="alert-wave alert-wave--1" />
          <div class="alert-wave alert-wave--2" />
          <div class="alert-wave alert-wave--3" />
        </div>
      </div>

      <!-- Badge de error -->
      <div class="error-badge" :style="{ background: `${theme.accent}20`, color: theme.accent }">
        <span class="badge-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </span>
        {{ reason }}
      </div>

      <h1 class="error-title">{{ theme.title }}</h1>
      <p class="error-description">{{ theme.description }}</p>

      <div class="error-actions">
        <button class="btn-primary" :style="{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`, boxShadow: `0 4px 15px ${theme.accent}4d` }" @click="handleRetry">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </span>
          Reintentar
        </button>
        <button class="btn-outline" @click="contactSupport">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          Contactar soporte
        </button>
      </div>
    </div>

    <!-- Partículas de fondo -->
    <div class="bg-particles">
      <div v-for="i in 6" :key="i" class="bg-particle" :style="{ left: (i * 15 + 5) + '%', animationDelay: (i * 0.7) + 's', animationDuration: (4 + i * 0.6) + 's', background: theme.accent + '30' }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  min-height: 100dvh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #e8eaf0;
}

.error-content { position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 550px; }

.error-illustration {
  height: 170px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.5rem; position: relative;
}

/* ── Key Illustration ── */
.illust-key {
  position: relative; animation: key-wobble 3s ease-in-out infinite;

  .key-ring {
    display: flex; align-items: center;
  }
  .key-head {
    width: 40px; height: 40px; border: 5px solid #db7e3b;
    border-radius: 50%; position: relative;
    &::after { content: ''; width: 10px; height: 10px; background: #db7e3b; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); }
  }
  .key-shaft {
    width: 60px; height: 8px; background: #db7e3b; border-radius: 0 4px 4px 0;
    position: relative; margin-left: -2px;
  }
  .key-tooth {
    position: absolute; bottom: -6px; width: 6px; height: 6px; background: #db7e3b;
    &--1 { right: 8px; }
    &--2 { right: 22px; height: 10px; }
    &--3 { right: 36px; height: 8px; }
  }
  .key-crack {
    position: absolute; width: 2px; background: #FF4C51;
    &--1 { height: 20px; top: -5px; left: 45px; transform: rotate(30deg); animation: crack-flash 2s ease-in-out infinite; }
    &--2 { height: 15px; top: 5px; left: 50px; transform: rotate(-20deg); animation: crack-flash 2s ease-in-out infinite .5s; }
    &--3 { height: 12px; top: -2px; left: 55px; transform: rotate(45deg); animation: crack-flash 2s ease-in-out infinite 1s; }
  }
  .key-sparkle {
    position: absolute; color: #db7e3b; font-size: 14px; animation: sparkle-float 2s ease-in-out infinite;
    &--1 { top: -15px; right: -10px; }
    &--2 { bottom: -10px; left: 20px; animation-delay: 1s; font-size: 10px; }
  }
}
@keyframes key-wobble { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-5deg); } 75% { transform: rotate(5deg); } }
@keyframes crack-flash { 0%,100% { opacity: 1; } 50% { opacity: .2; } }
@keyframes sparkle-float { 0%,100% { transform: translateY(0) scale(1); opacity: 1; } 50% { transform: translateY(-8px) scale(1.3); opacity: .5; } }

/* ── Loop Illustration ── */
.illust-loop {
  position: relative; width: 120px; height: 120px;

  .loop-ring {
    position: absolute; border-radius: 50%; border: 3px dashed;
    &--outer { inset: 0; border-color: #FF9F43; animation: spin-cw 6s linear infinite; }
    &--inner { inset: 15px; border-color: rgba(255,159,67,.4); animation: spin-ccw 4s linear infinite; }
  }
  .loop-arrows {
    position: absolute; inset: 0;
    animation: spin-cw 3s linear infinite;
    .loop-arrow {
      position: absolute; color: #FF9F43; font-size: 16px; font-weight: 900;
      &--1 { top: -2px; left: 50%; transform: translateX(-50%); }
      &--2 { bottom: 20px; right: -2px; transform: rotate(120deg); }
      &--3 { bottom: 20px; left: -2px; transform: rotate(240deg); }
    }
  }
  .loop-center {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    font-size: 2.5rem; font-weight: 900; color: #FF9F43;
    animation: pulse-inf 2s ease-in-out infinite;
  }
}
@keyframes spin-cw { to { transform: rotate(360deg); } }
@keyframes spin-ccw { to { transform: rotate(-360deg); } }
@keyframes pulse-inf { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 1; } 50% { transform: translate(-50%,-50%) scale(1.15); opacity: .6; } }

/* ── Server Illustration ── */
.illust-server {
  position: relative;

  .server-rack {
    display: flex; flex-direction: column; gap: 6px;
    animation: server-shake .4s ease-in-out infinite;
  }
  .server-unit {
    width: 90px; height: 28px; background: #2a3045; border: 2px solid #3d4a6e;
    border-radius: 6px; display: flex; align-items: center; padding: 0 8px; gap: 8px;
  }
  .server-light {
    width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
    &--off { background: #555; }
    &--blink { background: #FF4C51; animation: blink-red 1s step-end infinite; box-shadow: 0 0 8px rgba(255,76,81,.6); }
  }
  .server-lines { flex: 1; display: flex; flex-direction: column; gap: 3px; }
  .server-line { height: 2px; background: #3d4a6e; border-radius: 1px; }

  .server-cable {
    position: absolute; width: 2px; background: #3d4a6e;
    &--1 { height: 25px; bottom: -25px; left: 20px; }
    &--2 { height: 25px; bottom: -25px; right: 20px; }
  }

  .server-zap {
    position: absolute; top: -20px; right: -20px; font-size: 28px;
    animation: zap-flash .5s ease-in-out infinite alternate;
  }

  .server-smoke {
    position: absolute; top: -15px; left: 10px;
    .srv-smoke-puff {
      width: 10px; height: 10px; background: rgba(180,180,180,.3); border-radius: 50%;
      position: absolute; animation: rise-smoke 2s ease-out infinite;
      &--1 { animation-delay: 0s; }
      &--2 { left: 12px; animation-delay: .8s; }
    }
  }
}
@keyframes server-shake { 0%,100% { transform: translateX(0); } 50% { transform: translateX(2px); } }
@keyframes blink-red { 0%,100% { opacity: 1; } 50% { opacity: .2; } }
@keyframes zap-flash { 0% { transform: scale(1) rotate(0); opacity: 1; } 100% { transform: scale(1.2) rotate(10deg); opacity: .4; } }
@keyframes rise-smoke { 0% { transform: translateY(0) scale(1); opacity: .5; } 100% { transform: translateY(-30px) scale(2); opacity: 0; } }

/* ── Badge Illustration ── */
.illust-badge {
  position: relative;

  .badge-card {
    width: 100px; height: 130px; background: #1e1e3a; border: 2px solid #3d3d6e;
    border-radius: 12px; padding: 14px 10px; display: flex; flex-direction: column;
    align-items: center; gap: 8px; position: relative;
    animation: badge-float 3s ease-in-out infinite;
  }
  .badge-avatar {
    width: 36px; height: 36px; background: #3d3d6e; border-radius: 50%;
  }
  .badge-text-lines { width: 100%; display: flex; flex-direction: column; gap: 5px; align-items: center; }
  .badge-line {
    height: 4px; background: #3d3d6e; border-radius: 2px;
    &--1 { width: 70%; }
    &--2 { width: 50%; }
  }
  .badge-stamp {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%) rotate(-15deg);
    font-size: 3rem; font-weight: 900; color: #FF4C51; opacity: .7;
    animation: stamp-pulse 2s ease-in-out infinite;
  }

  .badge-particle {
    position: absolute; width: 6px; height: 6px; background: #8B5CF6; border-radius: 50%;
    animation: particle-drift 3s ease-in-out infinite;
    &--1 { top: 10px; right: -15px; }
    &--2 { bottom: 10px; left: -15px; animation-delay: 1s; }
    &--3 { top: -10px; left: 30px; animation-delay: 2s; width: 4px; height: 4px; }
  }
}
@keyframes badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
@keyframes stamp-pulse { 0%,100% { opacity: .7; transform: translate(-50%,-50%) rotate(-15deg) scale(1); } 50% { opacity: .3; transform: translate(-50%,-50%) rotate(-15deg) scale(1.1); } }
@keyframes particle-drift { 0%,100% { transform: translate(0,0); opacity: .8; } 50% { transform: translate(5px,-10px); opacity: .3; } }

/* ── Alert Illustration ── */
.illust-alert {
  position: relative;

  .alert-triangle {
    width: 0; height: 0;
    border-left: 50px solid transparent; border-right: 50px solid transparent;
    border-bottom: 86px solid #db7e3b;
    position: relative; animation: alert-bounce 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(219,126,59,.3));
  }
  .alert-exclaim {
    position: absolute; top: 30px; left: 50%; transform: translateX(-50%);
    font-size: 2.5rem; font-weight: 900; color: #1a1f35; line-height: 1;
  }

  .alert-wave {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    border: 2px solid rgba(219,126,59,.3); border-radius: 50%;
    animation: wave-expand 2s ease-out infinite;
    &--1 { width: 130px; height: 130px; }
    &--2 { width: 130px; height: 130px; animation-delay: .6s; }
    &--3 { width: 130px; height: 130px; animation-delay: 1.2s; }
  }
}
@keyframes alert-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
@keyframes wave-expand { 0% { transform: translate(-50%,-50%) scale(.8); opacity: .6; } 100% { transform: translate(-50%,-50%) scale(1.5); opacity: 0; } }

/* ── Common Elements ── */
.error-badge {
  display: inline-flex; align-items: center; gap: .4rem;
  padding: .35rem .9rem; border-radius: 20px; font-size: .8rem; font-weight: 600;
  margin-bottom: 1rem; text-transform: uppercase; letter-spacing: .5px;
  .badge-icon { display: flex; align-items: center; }
}

.error-title { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; margin-bottom: .75rem; color: #fff; }
.error-description { font-size: 1rem; color: #9ba3b8; line-height: 1.7; margin-bottom: 2rem; max-width: 440px; margin-inline: auto; }

.error-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary, .btn-outline {
  display: inline-flex; align-items: center; gap: .5rem;
  padding: .75rem 1.5rem; border-radius: 10px; font-size: .95rem;
  font-weight: 600; cursor: pointer; transition: all .3s ease; border: none;
  .btn-icon { display: flex; align-items: center; }
}
.btn-primary {
  color: #fff;
  &:hover { transform: translateY(-2px); filter: brightness(1.1); }
}
.btn-outline {
  background: transparent; color: #9ba3b8; border: 1.5px solid #3d4463;
  &:hover { border-color: #db7e3b; color: #db7e3b; transform: translateY(-2px); }
}

/* ── Background Particles ── */
.bg-particles {
  position: absolute; inset: 0; pointer-events: none;
  .bg-particle {
    position: absolute; bottom: -10px;
    width: 5px; height: 5px; border-radius: 50%;
    animation: float-up-particle 5s ease-in infinite;
  }
}
@keyframes float-up-particle { 0% { transform: translateY(0); opacity: .5; } 100% { transform: translateY(-100vh); opacity: 0; } }
</style>
