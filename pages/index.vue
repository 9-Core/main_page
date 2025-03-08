//pages/index.vue
<template>
  <div class="index-page">
    <!-- Contenido condicional según la página seleccionada -->
    <div v-if="currentPage === 'INICIO'">
      <INICIO />
    </div>

    <div v-else-if="currentPage === 'SERVICIOS'">
      <SERVICIOS />
    </div>

    <div v-else-if="currentPage === 'PROYECTOS'">
      <PROYECTOS />
    </div>

    <div v-else-if="currentPage === 'NOSOTROS'">
      <NOSOTROS />
    </div>

    <div v-else-if="currentPage === 'CONTACTO'">
      <CONTACTO />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
// Intentar obtener el currentPage del layout
let currentPage;
try {
  currentPage = inject("currentPage");
  if (!currentPage) {
    currentPage = ref("INICIO");
  }
} catch (e) {
  currentPage = ref("INICIO");
}

// Escuchar eventos de cambio de página desde el layout
onMounted(() => {
  window.addEventListener("change-page", (e) => {
    currentPage.value = e.detail.page;
  });
});
</script>

<style>
/* Estilos globales para la página de inicio */
.index-page {
  background-color: #121212 !important;
  color: white;
}

/* Fix para el texto primario oscuro */
.text-primary-dark {
  color: #030f1f !important;
}
</style>
