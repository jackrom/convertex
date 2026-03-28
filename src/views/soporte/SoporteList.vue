<!-- src/views/soporte/SoportePage.vue -->
<script setup>
import { ref, onMounted } from "vue"
import { useTutorialsStore } from "@/@store/tutorials.store"
import { useFaqsStore } from "@/@store/faqs.store"

const tutStore = useTutorialsStore()
const faqStore = useFaqsStore()
const faqOpen = ref(null)
const selectedVideo = ref(null)

onMounted(async () => {
  await Promise.all([
    tutStore.fetchSoporte(),
    faqStore.fetchActive(),
  ])
})

const openVideo = (tut) => { selectedVideo.value = tut }
const closeVideo = () => { selectedVideo.value = null }

const getEmbedUrl = (tut) => {
  if (!tut?.video_url) return ""
  const url = tut.video_url
  if (url.includes("player.vimeo.com") || url.includes("youtube.com/embed")) return url
  const vm = url.match(/vimeo\.com\/(\d+)/)
  if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1`
  return url
}

const APP_LABEL = import.meta.env.VITE_APP_LABEL || "Convertex"
const soporteUrl = "https://facilcontabilidad.net/"
const waUrl = "https://wa.me/593999999999?text=Hola%2C%20necesito%20soporte"
const email = "soporte@facilcontabilidad.com"
</script>

<template>
  <section class="sp">
    <!-- HERO -->
    <div class="sp-hero">
      <div class="sp-hero__bg" />
      <div class="sp-hero__content">
        <div class="sp-hero__badge"><VIcon size="14">tabler-headset</VIcon>Centro de Soporte</div>
        <h1 class="sp-hero__title">¿Necesitas ayuda con<br><span class="sp-hero__accent">tus reportes financieros?</span></h1>
        <p class="sp-hero__sub">Completa los tutoriales, ingresa tu información y agenda una sesión de soporte <strong>gratuita</strong>.</p>
        <!-- Alert -->
        <div class="sp-hero__alert">
          <div class="sp-hero__alert-icon">
            <VIcon size="20" color="#C8702A">tabler-alert-triangle</VIcon>
          </div>
          <div class="sp-hero__alert-text">
            <strong>Importante:</strong> El soporte es gratuito únicamente si
            has completado todos los tutoriales y tienes la información ingresada
            en los módulos. Caso contrario, el soporte tendrá un costo de
            <strong>$50 USD</strong> por sesión.
          </div>
        </div>
        <div class="sp-hero__actions">
          <VBtn size="large" color="#C8702A" variant="flat" class="sp-hero__cta" prepend-icon="tabler-calendar-event" :href="soporteUrl" target="_blank">Agendar Soporte</VBtn>
          <VBtn size="large" variant="outlined" class="sp-hero__cta2" prepend-icon="tabler-player-play" :to="{ name: 'tutoriales-TutorialList' }">Ver Todos los Tutoriales</VBtn>
        </div>
      </div>
      <div class="sp-hero__illustration">
        <div class="sp-hero__float sp-hero__float--1"><VIcon size="28" color="#C8702A">tabler-report-analytics</VIcon></div>
        <div class="sp-hero__float sp-hero__float--2"><VIcon size="24" color="#2c3555">tabler-calculator</VIcon></div>
        <div class="sp-hero__float sp-hero__float--3"><VIcon size="22" color="#477130">tabler-check</VIcon></div>
        <div class="sp-hero__float sp-hero__float--4"><VIcon size="26" color="#C8702A">tabler-file-spreadsheet</VIcon></div>
      </div>
    </div>

    <!-- TUTORIALS (mostrar_en_soporte=true from DB) -->
    <div class="sp-section">
      <div class="sp-section__header">
        <div class="sp-section__label"><VIcon size="16" class="mr-2">tabler-player-play</VIcon>Tutoriales</div>
        <h2 class="sp-section__title">Aprende a usar {{ APP_LABEL }}</h2>
        <p class="sp-section__desc">Completa estos tutoriales antes de solicitar soporte.</p>
      </div>
      <div v-if="tutStore.soporteItems.length" class="sp-tutorials">
        <button v-for="tut in tutStore.soporteItems" :key="tut.id" class="sp-tut-card" @click="openVideo(tut)">
          <div class="sp-tut-card__icon"><VIcon size="24">{{ tut.icono || 'tabler-player-play' }}</VIcon></div>
          <div class="sp-tut-card__body">
            <div class="sp-tut-card__title">{{ tut.titulo }}</div>
            <div class="sp-tut-card__desc">{{ tut.descripcion }}</div>
          </div>
          <div class="sp-tut-card__meta"><VIcon size="14" class="mr-1">tabler-clock</VIcon>{{ tut.duracion }}</div>
          <div class="sp-tut-card__play"><VIcon size="18">tabler-player-play-filled</VIcon></div>
        </button>
      </div>
      <div v-else-if="tutStore.loading" class="sp-tutorials"><VSkeletonLoader v-for="i in 3" :key="i" type="list-item-three-line" /></div>
      <div v-else class="sp-empty"><VIcon size="32" color="grey-lighten-1">tabler-video-off</VIcon><span>No hay tutoriales destacados</span></div>
      <div class="mt-4 text-center"><VBtn variant="text" color="primary" :to="{ name: 'tutoriales-TutorialList' }" append-icon="tabler-arrow-right">Ver todos los tutoriales</VBtn></div>
    </div>

    <!-- FAQ (from DB) -->
    <div class="sp-section sp-section--alt">
      <div class="sp-section__header">
        <div class="sp-section__label"><VIcon size="16" class="mr-2">tabler-help-circle</VIcon>Preguntas Frecuentes</div>
        <h2 class="sp-section__title">Resuelve tus dudas</h2>
      </div>
      <div class="sp-faq">
        <VExpansionPanels v-if="faqStore.items.length" v-model="faqOpen" variant="accordion">
          <VExpansionPanel v-for="faq in faqStore.items" :key="faq.id" class="sp-faq__panel">
            <VExpansionPanelTitle class="sp-faq__q"><VIcon size="18" color="#C8702A" class="mr-3">tabler-message-circle-question</VIcon>{{ faq.pregunta }}</VExpansionPanelTitle>
            <VExpansionPanelText class="sp-faq__a">{{ faq.respuesta }}</VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
        <div v-else-if="faqStore.loading"><VSkeletonLoader v-for="i in 4" :key="i" type="list-item-two-line" class="mb-2" /></div>
        <div v-else class="sp-empty"><VIcon size="32" color="grey-lighten-1">tabler-help-off</VIcon><span>No hay FAQs configuradas</span></div>
      </div>
    </div>

    <!-- CONTACT -->
    <div class="sp-section">
      <div class="sp-section__header">
        <div class="sp-section__label"><VIcon size="16" class="mr-2">tabler-message</VIcon>Contacto</div>
        <h2 class="sp-section__title">Canales de comunicación</h2>
      </div>
      <div class="sp-contact-grid">
        <a :href="soporteUrl" target="_blank" class="sp-ccard sp-ccard--cal"><div class="sp-ccard__ic"><VIcon size="28">tabler-calendar-event</VIcon></div><div class="sp-ccard__name">Agendar Videollamada</div><div class="sp-ccard__info">Elige el horario que prefieras</div><div class="sp-ccard__go">Ir al calendario <VIcon size="15">tabler-arrow-right</VIcon></div></a>
        <!-- <a :href="waUrl" target="_blank" class="sp-ccard sp-ccard--wa"><div class="sp-ccard__ic"><VIcon size="28">tabler-brand-whatsapp</VIcon></div><div class="sp-ccard__name">WhatsApp</div><div class="sp-ccard__info">Respuesta en horario laboral</div><div class="sp-ccard__go">Abrir chat <VIcon size="15">tabler-arrow-right</VIcon></div></a>
        <a :href="`mailto:${email}`" class="sp-ccard sp-ccard--em"><div class="sp-ccard__ic"><VIcon size="28">tabler-mail</VIcon></div><div class="sp-ccard__name">Correo</div><div class="sp-ccard__info">{{ email }}</div><div class="sp-ccard__go">Enviar correo <VIcon size="15">tabler-arrow-right</VIcon></div></a> -->
      </div>
    </div>

    <!-- FOOTER -->
    <div class="sp-footer"><span class="sp-footer__text">¿Listo para agendar tu sesión?</span><VBtn size="large" color="#C8702A" variant="flat" prepend-icon="tabler-calendar-event" :href="soporteUrl" target="_blank">Agendar Soporte</VBtn></div>

    <!-- VIDEO MODAL -->
    <VDialog :model-value="!!selectedVideo" max-width="900" @update:model-value="closeVideo">
      <VCard v-if="selectedVideo" class="sp-modal">
        <div class="sp-modal__head"><div><div class="sp-modal__title">{{ selectedVideo.titulo }}</div><div class="sp-modal__desc">{{ selectedVideo.descripcion }}</div></div><VBtn icon variant="text" size="small" @click="closeVideo"><VIcon>tabler-x</VIcon></VBtn></div>
        <div class="sp-modal__frame"><iframe :src="getEmbedUrl(selectedVideo)" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen /></div>
      </VCard>
    </VDialog>
  </section>
</template>

<style scoped>
.sp{--sp-accent:#C8702A;--sp-navy:#2c3555;--sp-r:12px;--sp-fd:"DM Serif Display",Georgia,serif;--sp-ff:"DM Sans",-apple-system,sans-serif;font-family:var(--sp-ff);color:var(--sp-navy);background:#FAFAF8}
.sp-hero{position:relative;padding:56px 48px 48px;overflow:hidden;background:linear-gradient(135deg,#FDF6EE 0%,#F5EDE3 50%,#EDE4D8 100%);border-bottom:1px solid rgba(200,112,42,.12)}
.sp-hero__bg{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 20% 50%,rgba(200,112,42,.06) 0%,transparent 50%),radial-gradient(ellipse at 80% 20%,rgba(44,53,85,.04) 0%,transparent 50%)}
.sp-hero__content{position:relative;max-width:640px;z-index:1}
.sp-hero__badge{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:rgba(200,112,42,.1);color:var(--sp-accent);border-radius:20px;font-size:12px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;margin-bottom:20px}
.sp-hero__title{font-family:var(--sp-fd);font-size:36px;font-weight:400;line-height:1.2;color:var(--sp-navy);margin:0 0 16px}
.sp-hero__accent{color:var(--sp-accent)}
.sp-hero__sub{font-size:15px;line-height:1.7;color:rgba(44,53,85,.65);margin:0 0 28px;max-width:520px}
.sp-hero__actions{display:flex;gap:12px;margin-bottom:32px}
.sp-hero__cta{font-weight:600!important;border-radius:10px!important;padding:0 28px!important;box-shadow:0 4px 14px rgba(200,112,42,.25)!important}
.sp-hero__cta:hover{box-shadow:0 6px 20px rgba(200,112,42,.35)!important;transform:translateY(-1px)}
.sp-hero__cta2{border-radius:10px!important;border-color:rgba(44,53,85,.2)!important;color:var(--sp-navy)!important}
.sp-hero__alert{display:flex;gap:14px;padding:16px 20px;background:rgba(255,255,255,.7);border:1px solid rgba(200,112,42,.15);border-radius:var(--sp-r);backdrop-filter:blur(8px); margin-bottom: 20px;}
.sp-hero__alert-icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(200,112,42,.08);border-radius:8px;flex-shrink:0}
.sp-hero__alert-text{font-size:13px;line-height:1.6;color:rgba(44,53,85,.7);}
.sp-hero__alert-text strong{color:var(--sp-navy)}
.sp-hero__illustration{position:absolute;right:48px;top:50%;transform:translateY(-50%);width:260px;height:260px;z-index:0}
.sp-hero__float{position:absolute;width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.8);border-radius:14px;box-shadow:0 4px 20px rgba(0,0,0,.06);animation:sp-float 6s ease-in-out infinite}
.sp-hero__float--1{top:10%;left:20%}.sp-hero__float--2{top:5%;right:10%;animation-delay:1.5s}.sp-hero__float--3{bottom:20%;left:5%;animation-delay:3s}.sp-hero__float--4{bottom:10%;right:20%;animation-delay:4.5s}
@keyframes sp-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.sp-section{padding:48px}.sp-section--alt{background:rgba(44,53,85,.02)}
.sp-section__header{margin-bottom:32px}
.sp-section__label{display:inline-flex;align-items:center;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;color:var(--sp-accent);margin-bottom:8px}
.sp-section__title{font-family:var(--sp-fd);font-size:26px;font-weight:400;color:var(--sp-navy);margin:0 0 8px}
.sp-section__desc{font-size:14px;color:rgba(44,53,85,.55);line-height:1.6;max-width:480px}
.sp-tutorials{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px}
.sp-tut-card{display:flex;align-items:center;gap:14px;padding:16px 18px;background:white;border:1px solid rgba(44,53,85,.06);border-radius:var(--sp-r);cursor:pointer;transition:all .2s;text-align:left;width:100%}
.sp-tut-card:hover{border-color:rgba(200,112,42,.2);box-shadow:0 4px 16px rgba(200,112,42,.08);transform:translateY(-2px)}
.sp-tut-card__icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(200,112,42,.06);color:var(--sp-accent);border-radius:10px;flex-shrink:0}
.sp-tut-card__body{flex:1;min-width:0}
.sp-tut-card__title{font-size:14px;font-weight:600;color:var(--sp-navy);margin-bottom:2px}
.sp-tut-card__desc{font-size:12px;color:rgba(44,53,85,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sp-tut-card__meta{display:flex;align-items:center;font-size:11px;color:rgba(44,53,85,.4);white-space:nowrap}
.sp-tut-card__play{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(200,112,42,.08);color:var(--sp-accent);border-radius:50%;flex-shrink:0;transition:all .2s}
.sp-tut-card:hover .sp-tut-card__play{background:var(--sp-accent);color:white}
.sp-faq{max-width:720px}
.sp-faq__panel{border-radius:var(--sp-r)!important;border:1px solid rgba(44,53,85,.06)!important;box-shadow:none!important;margin-bottom:6px}
.sp-faq__panel::before{display:none!important}
.sp-faq__q{font-size:14px;font-weight:500;color:var(--sp-navy);min-height:52px!important}
.sp-faq__a{font-size:13.5px;line-height:1.7;color:rgba(44,53,85,.65)}
.sp-contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.sp-ccard{display:flex;flex-direction:column;padding:28px 24px;border-radius:var(--sp-r);border:1px solid rgba(44,53,85,.06);background:white;text-decoration:none;color:inherit;transition:all .25s}
.sp-ccard:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.06)}
.sp-ccard__ic{width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:12px;margin-bottom:18px}
.sp-ccard--cal .sp-ccard__ic{background:rgba(200,112,42,.08);color:var(--sp-accent)}
.sp-ccard--wa .sp-ccard__ic{background:rgba(37,211,102,.08);color:#25D366}
.sp-ccard--em .sp-ccard__ic{background:rgba(44,53,85,.06);color:var(--sp-navy)}
.sp-ccard__name{font-size:16px;font-weight:600;margin-bottom:8px}
.sp-ccard__info{font-size:13px;color:rgba(44,53,85,.5);line-height:1.6;flex:1;margin-bottom:18px}
.sp-ccard__go{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--sp-accent);transition:gap .2s}
.sp-ccard:hover .sp-ccard__go{gap:10px}
.sp-footer{display:flex;align-items:center;justify-content:center;gap:24px;padding:40px 48px;background:linear-gradient(135deg,var(--sp-navy) 0%,#3d4a6e 100%)}
.sp-footer__text{font-family:var(--sp-fd);font-size:20px;color:rgba(255,255,255,.9)}
.sp-empty{display:flex;flex-direction:column;align-items:center;gap:8px;padding:40px;color:rgba(44,53,85,.3);font-size:13px}
.sp-modal{border-radius:var(--sp-r)!important;overflow:hidden}
.sp-modal__head{display:flex;align-items:flex-start;justify-content:space-between;padding:18px 22px}
.sp-modal__title{font-size:16px;font-weight:600}
.sp-modal__desc{font-size:12.5px;color:rgba(44,53,85,.45);margin-top:2px}
.sp-modal__frame{position:relative;padding-bottom:56.25%;background:#000}
.sp-modal__frame iframe{position:absolute;inset:0;width:100%;height:100%}
@media(max-width:960px){.sp-hero{padding:36px 24px}.sp-hero__title{font-size:28px}.sp-hero__illustration{display:none}.sp-section{padding:36px 24px}.sp-contact-grid{grid-template-columns:1fr}.sp-tutorials{grid-template-columns:1fr}.sp-footer{flex-direction:column;text-align:center;padding:32px 24px}.sp-hero__actions{flex-direction:column}}
</style>
