// layouts/default.vue
<template>
  <v-app>
    <!-- Navbar con efecto de transparente a sólido al scroll -->
    <v-app-bar
      :elevation="isScrolled ? 4 : 0"
      :color="isScrolled ? 'rgba(3, 15, 31, 0.9)' : 'transparent'"
      fixed
    >
      <v-container class="d-flex align-center px-6">
        <div class="d-flex align-center">
          <v-img src="/logo.png" alt="Logo" max-width="40" class="me-3"></v-img>
          <v-app-bar-title
            class="text-h5 font-weight-bold site-title"
            style="white-space: nowrap; overflow: visible; min-width: 120px"
          >
            9Core
          </v-app-bar-title>
        </div>

        <v-spacer></v-spacer>

        <!-- Menú Desktop con navegación interna -->
        <div class="d-none d-md-flex align-center">
          <v-btn
            v-for="(item, i) in menuItems"
            :key="i"
            :class="{ 'nav-active': currentPage === item.page }"
            variant="text"
            class="mx-2 nav-link nav-text"
            @click="changePage(item.page)"
          >
            <span>{{ item.title }}</span>
          </v-btn>

          <!-- Botón de contacto destacado -->
          <v-btn
            color="#5db9f0"
            class="ml-4 contact-btn white-text"
            :class="{ 'light-btn': !isScrolled }"
            to="/contacto"
          >
            <v-icon start>mdi-email</v-icon>
            Contactar
          </v-btn>
        </div>

        <!-- Botón de menú móvil -->
        <v-btn icon class="d-flex d-md-none menu-btn" @click="drawer = !drawer">
          <v-icon>{{ drawer ? "mdi-close" : "mdi-menu" }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Menú móvil -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="drawer-bg pa-4"
    >
      <div class="text-center mb-6">
        <v-img
          src="/logo.png"
          alt="Logo"
          max-width="60"
          class="mx-auto mb-4"
        ></v-img>
        <div class="text-h6 font-weight-bold site-title">9 Core</div>
      </div>

      <v-divider class="mb-4 divider"></v-divider>

      <v-list class="transparent-list">
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :active="currentPage === item.page"
          rounded="lg"
          class="mb-2"
          @click="
            changePage(item.page);
            drawer = false;
          "
        >
          <v-list-item-title class="font-weight-medium nav-text">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item class="mt-4">
          <v-btn block color="#5db9f0" to="/contacto" class="mt-2 white-text">
            <v-icon start>mdi-email</v-icon>
            Contactar
          </v-btn>
        </v-list-item>
      </v-list>

      <!-- Social links en menú móvil -->
      <div class="d-flex justify-center gap-2 mt-8">
        <v-btn
          v-for="(social, i) in socialLinks"
          :key="i"
          :href="social.url"
          icon
          variant="text"
          class="social-btn"
        >
          <v-icon>{{ social.icon }}</v-icon>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <!-- Main content -->
    <v-main class="main-content">
      <slot />
    </v-main>

    <!-- Footer -->
    <v-footer class="footer">
      <v-container>
        <v-row>
          <!-- Información de la empresa -->
          <v-col cols="12" md="4" class="white-text">
            <div class="d-flex align-center mb-4">
              <v-img
                src="/logo-white.png"
                alt="Logo"
                max-width="40"
                class="me-3"
              ></v-img>
              <h3 class="text-h6 font-weight-bold site-title">9 Core</h3>
            </div>
            <p class="text-body-2 mb-4">
              Transformando negocios a través de soluciones tecnológicas
              innovadoras
            </p>
            <div class="d-flex gap-2">
              <v-btn
                v-for="(social, i) in socialLinks"
                :key="i"
                :href="social.url"
                icon
                variant="text"
                class="social-btn"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </v-col>

          <!-- Links rápidos -->
          <v-col cols="12" md="4">
            <h3 class="text-h6 font-weight-bold site-title mb-4">
              Links Rápidos
            </h3>
            <v-list class="footer-list">
              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                class="pa-0 mb-2"
                @click="changePage(item.page)"
                style="cursor: pointer"
              >
                <v-list-item-title class="white-text">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>

          <!-- Contacto -->
          <v-col cols="12" md="4">
            <h3 class="text-h6 font-weight-bold site-title mb-4">Contacto</h3>
            <div class="d-flex align-center mb-3">
              <v-icon class="me-2 site-title">mdi-map-marker</v-icon>
              <span class="white-text">123 Calle Principal, Ciudad</span>
            </div>
            <div class="d-flex align-center mb-3">
              <v-icon class="me-2 site-title">mdi-phone</v-icon>
              <span class="white-text">+1 234 567 890</span>
            </div>
            <div class="d-flex align-center">
              <v-icon class="me-2 site-title">mdi-email</v-icon>
              <span class="white-text">contacto@9core.com</span>
            </div>
          </v-col>
        </v-row>

        <!-- Copyright -->
        <v-divider class="my-4 divider"></v-divider>
        <div class="text-center white-text">
          © {{ new Date().getFullYear() }} 9 Core. Todos los derechos
          reservados.
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted, provide, inject } from "vue";

const drawer = ref(false);
const isScrolled = ref(false);
const currentPage = ref("INICIO"); // Valor predeterminado

// Verifica si hay un valor de página proporcionado por algún padre
try {
  const parentCurrentPage = inject("currentPage", null);
  if (parentCurrentPage) {
    currentPage.value = parentCurrentPage.value;
  }
} catch (e) {
  // Si falla el inject, mantener el valor predeterminado
}

// Proporcionar el currentPage a los componentes hijos
provide("currentPage", currentPage);

// Proporcionar la función para cambiar de página
const changePage = (page) => {
  currentPage.value = page;

  // Emitir un evento personalizado para notificar a index.vue
  window.dispatchEvent(
    new CustomEvent("change-page", {
      detail: { page },
    })
  );

  // Hacer scroll al inicio
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

provide("changePage", changePage);

const menuItems = [
  { title: "Inicio", page: "INICIO" },
  { title: "Servicios", page: "SERVICIOS" },
  { title: "Proyectos", page: "PROYECTOS" },
  { title: "Nosotros", page: "NOSOTROS" },
];

const socialLinks = [
  { icon: "mdi-linkedin", url: "#" },
  { icon: "mdi-twitter", url: "#" },
  { icon: "mdi-facebook", url: "#" },
  { icon: "mdi-instagram", url: "#" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Forzar tema oscuro
  document.documentElement.style.setProperty("--v-theme-background", "#030f1f");
  document.documentElement.style.setProperty("--v-theme-surface", "#030f1f");
  document.body.style.backgroundColor = "#030f1f";
  document.body.style.color = "white";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
/* Estilos globales del layout */
html,
body {
  background-color: #030f1f !important;
  color: white !important;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.v-application {
  background-color: #030f1f !important;
}

.main-content {
  background-color: #030f1f !important;
  min-height: 100vh;
}

/* Colores y estilos específicos */
.site-title {
  color: #5db9f0 !important;
}

.white-text {
  color: white !important;
}

.nav-text {
  color: #5db9f0 !important;
}

.menu-btn {
  color: #5db9f0 !important;
}

.social-btn {
  color: #5db9f0 !important;
}

/* Elementos de navegación */
.nav-link {
  position: relative;
  margin: 0 0.5rem;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #5db9f0;
  transition: width 0.3s ease;
}

.nav-active::after,
.nav-link:hover::after {
  width: 80%;
}

.light-btn {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.drawer-bg {
  background-color: #030f1f !important;
  border-left: 1px solid rgba(93, 185, 240, 0.2);
}

/* Footer */
.footer {
  background-color: #030f1f !important;
  border-top: 1px solid rgba(93, 185, 240, 0.2);
}

.footer-list {
  background-color: transparent !important;
  padding: 0 !important;
}

.transparent-list {
  background-color: transparent !important;
}

.divider {
  border-color: rgba(93, 185, 240, 0.3) !important;
}

/* Transitions */
.v-navigation-drawer {
  transition: transform 0.3s ease;
}

.transition-scroll {
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
