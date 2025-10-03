<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Desarrollado
      <VIcon
        icon="tabler-heart"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      por <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Juassic Studio</a>
    </span>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href=""
        target="noopener noreferrer"
      >Licencia</a>
      <a
        href="https://facilcontabilidad.com/"
        target="noopener noreferrer"
      >Más aplicaciones</a>
      <a
        href=""
        target="noopener noreferrer"
      >Documentación</a>
    </span>
  </div>
</template>
