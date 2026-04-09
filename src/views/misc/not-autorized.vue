<script setup>
definePage({
  meta: { layout: 'blank', public: true },
})

const goHome = () => { window.location.href = '/' }
const contactSupport = () => { window.location.href = 'mailto:info@facilcontabilidad.com?subject=Renovar suscripción Convertex' }
</script>

<template>
  <div class="error-page error-sub">
    <div class="error-content">
      <div class="error-illustration">
        <!-- Reloj de arena -->
        <div class="hourglass">
          <div class="hg-frame hg-frame--top" />
          <div class="hg-body">
            <div class="hg-top">
              <div class="hg-sand hg-sand--top" />
            </div>
            <div class="hg-neck" />
            <div class="hg-bottom">
              <div class="hg-sand hg-sand--bottom" />
            </div>
            <!-- Partículas de arena -->
            <div class="sand-stream" />
          </div>
          <div class="hg-frame hg-frame--bottom" />
        </div>
        <!-- Monedas cayendo -->
        <div class="coins">
          <div class="coin coin--1">$</div>
          <div class="coin coin--2">$</div>
          <div class="coin coin--3">$</div>
        </div>
      </div>

      <div class="error-badge">
        <span class="badge-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </span>
        Suscripci&oacute;n vencida
      </div>

      <h1 class="error-title">Tu suscripci&oacute;n ha expirado</h1>
      <p class="error-description">
        Tu acceso a <strong>Convertex</strong> se encuentra inactivo o vencido.
        <br>Renueva tu plan para seguir preparando tus reportes financieros sin interrupciones.
      </p>

      <div class="plan-card">
        <div class="plan-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#db7e3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="plan-info">
          <div class="plan-name">Plan Anual Convertex</div>
          <div class="plan-price">Desde <strong>$95</strong>/a&ntilde;o</div>
        </div>
        <button class="btn-renew" @click="contactSupport">
          Renovar
        </button>
      </div>

      <div class="error-actions">
        <button class="btn-primary" @click="contactSupport">
          <span class="btn-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </span>
          Contactar para renovar
        </button>
        <button class="btn-outline" @click="goHome">
          Regresar
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
.error-sub {
  background: linear-gradient(135deg, #0d1117 0%, #161d2e 40%, #2c3555 100%);
  color: #e8eaf0;
}
.error-content { position: relative; z-index: 1; text-align: center; padding: 2rem; max-width: 550px; }

.error-illustration {
  height: 160px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.5rem; position: relative;
}

.hourglass {
  position: relative; animation: tilt 4s ease-in-out infinite;

  .hg-frame {
    width: 60px; height: 6px; background: #db7e3b; border-radius: 3px; margin: 0 auto;
    &--top { margin-bottom: -2px; z-index: 2; position: relative; }
    &--bottom { margin-top: -2px; z-index: 2; position: relative; }
  }

  .hg-body { position: relative; height: 100px; width: 60px; margin: 0 auto; }

  .hg-top {
    width: 50px; height: 45px; margin: 0 auto;
    background: rgba(219,126,59,.08);
    clip-path: polygon(0 0, 100% 0, 60% 100%, 40% 100%);
    overflow: hidden;
  }

  .hg-sand--top {
    width: 100%; height: 40%;
    background: linear-gradient(to bottom, #db7e3b, #e8a06a);
    border-radius: 0 0 50% 50%;
    animation: drain 4s ease-in-out infinite;
  }

  .hg-neck {
    width: 4px; height: 6px; background: rgba(219,126,59,.3);
    margin: 0 auto;
  }

  .hg-bottom {
    width: 50px; height: 45px; margin: 0 auto;
    background: rgba(219,126,59,.08);
    clip-path: polygon(40% 0, 60% 0, 100% 100%, 0 100%);
    overflow: hidden;
    display: flex; align-items: flex-end;
  }

  .hg-sand--bottom {
    width: 100%; height: 80%;
    background: linear-gradient(to top, #db7e3b, #e8a06a);
    border-radius: 50% 50% 0 0;
    animation: fill 4s ease-in-out infinite;
  }

  .sand-stream {
    position: absolute; left: 50%; top: 42px;
    width: 2px; height: 16px;
    background: #db7e3b;
    transform: translateX(-50%);
    animation: stream 4s ease-in-out infinite;
  }
}

@keyframes tilt { 0%,100% { transform: rotate(0); } 50% { transform: rotate(3deg); } }
@keyframes drain { 0% { height: 60%; } 100% { height: 10%; } }
@keyframes fill { 0% { height: 40%; } 100% { height: 90%; } }
@keyframes stream { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

.coins {
  position: absolute; right: 10%; top: 20px;
  .coin {
    width: 24px; height: 24px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 900; color: #8B6914;
    position: absolute;
    animation: coin-fall 3s ease-in infinite;
    box-shadow: 0 2px 6px rgba(255,215,0,.3);
    &--1 { left: 0; animation-delay: 0s; }
    &--2 { left: 15px; animation-delay: 1s; }
    &--3 { left: -10px; animation-delay: 2s; }
  }
}
@keyframes coin-fall {
  0% { transform: translateY(0) rotate(0); opacity: 1; }
  100% { transform: translateY(120px) rotate(360deg); opacity: 0; }
}

.error-badge {
  display: inline-flex; align-items: center; gap: .5rem;
  background: rgba(255,76,81,.15); color: #FF4C51;
  padding: .4rem 1rem; border-radius: 20px; font-size: .85rem; font-weight: 600;
  margin-bottom: 1rem;
  .badge-icon { display: flex; align-items: center; }
}

.error-title { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; margin-bottom: .75rem; color: #fff; }
.error-description { font-size: 1rem; color: #9ba3b8; line-height: 1.6; margin-bottom: 1.5rem; strong { color: #db7e3b; } }

.plan-card {
  display: flex; align-items: center; gap: 1rem;
  background: rgba(255,255,255,.05); border: 1px solid rgba(219,126,59,.2);
  border-radius: 12px; padding: 1rem 1.25rem;
  margin-bottom: 2rem;
  .plan-icon { flex-shrink: 0; }
  .plan-info { text-align: left; flex: 1; }
  .plan-name { font-weight: 600; font-size: .95rem; color: #e8eaf0; }
  .plan-price { font-size: .85rem; color: #9ba3b8; strong { color: #db7e3b; font-size: 1.1rem; } }
  .btn-renew {
    padding: .5rem 1rem; border-radius: 8px; font-size: .85rem; font-weight: 600;
    background: linear-gradient(135deg, #db7e3b, #e8a06a); color: #fff;
    border: none; cursor: pointer; white-space: nowrap;
    transition: all .3s ease;
    &:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(219,126,59,.3); }
  }
}

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
