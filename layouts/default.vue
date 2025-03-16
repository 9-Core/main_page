// layouts/default.vue
<template>
  <v-app>
    <!-- Navbar con efecto de transparente a sólido al scroll -->
    <v-app-bar
      :elevation="isScrolled ? 4 : 0"
      :color="isScrolled ? 'rgba(19, 21, 37, 0.9)' : 'transparent'"
      fixed
    >
      <v-container class="d-flex align-center px-6">
        <v-img
          src="/image.png"
          alt="Logo 9Core"
          max-width="40"
          class="me-3"
        ></v-img>

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
            class="ml-4 primary-btn white-text"
            @click="changePage('CONTACTO')"
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
          src="/image.png"
          alt="Logo"
          max-width="60"
          class="mx-auto mb-4"
        ></v-img>
        <div class="text-h6 font-weight-bold core-logo-text">9 Core</div>
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
          <v-btn
            block
            class="primary-btn mt-2 white-text"
            @click="
              changePage('CONTACTO');
              drawer = false;
            "
          >
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
                src="/image.png"
                alt="Logo"
                max-width="40"
                class="me-3"
              ></v-img>
              <h3 class="text-h6 font-weight-bold core-logo-text">9 Core</h3>
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
            <h3 class="text-h6 font-weight-bold section-title mb-4">
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
            <h3 class="text-h6 font-weight-bold section-title mb-4">
              Contacto
            </h3>
            <div class="d-flex align-center mb-3">
              <v-icon class="me-2 primary-text">mdi-map-marker</v-icon>
              <span class="white-text">123 Calle Principal, Ciudad</span>
            </div>
            <div class="d-flex align-center mb-3">
              <v-icon class="me-2 secondary-text">mdi-phone</v-icon>
              <span class="white-text">+1 234 567 890</span>
            </div>
            <div class="d-flex align-center">
              <v-icon class="me-2 tertiary-text">mdi-email</v-icon>
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
import { ref, onMounted, onUnmounted, provide } from "vue";

const drawer = ref(false);
const isScrolled = ref(false);
const currentPage = ref("INICIO"); // Valor predeterminado

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
  document.documentElement.style.setProperty("--v-theme-background", "#131525");
  document.documentElement.style.setProperty("--v-theme-surface", "#2D2E3F");
  document.body.style.backgroundColor = "#131525";
  document.body.style.color = "#E4E6F5";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
/* Definición directa de variables para evitar problemas de importación */
:root {
  /* Colores primarios - Azul */
  --primary-main: #3d5af1; /* Azul vibrante */
  --primary-light: #6b7eff;
  --primary-dark: #2a3dad;

  /* Colores secundarios - Morado */
  --secondary-main: #7b42f6; /* Morado */
  --secondary-light: #9e6ffd;
  --secondary-dark: #5b2acf;

  /* Colores terciarios - Verde */
  --tertiary-main: #22caac; /* Verde-azulado */
  --tertiary-light: #4eecd2;
  --tertiary-dark: #169c83;

  /* Colores neutrales */
  --neutral-darkest: #1a1b25; /* Casi negro */
  --neutral-dark: #2d2e3f; /* Fondos oscuros */
  --neutral-medium: #6c6f8a; /* Textos secundarios */
  --neutral-light: #e4e6f5; /* Fondos claros */
  --neutral-lightest: #ffffff; /* Blanco */

  /* Colores de fondo */
  --background-default: #f7f8fc; /* Fondo principal */
  --background-paper: #ffffff; /* Componentes elevados */
  --background-dark: #131525; /* Secciones contrastantes */

  /* Colores de texto */
  --text-light: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.7);

  /* Gradientes */
  --gradient-primary: linear-gradient(
    135deg,
    var(--primary-light),
    var(--primary-dark)
  );
  --gradient-secondary: linear-gradient(
    135deg,
    var(--secondary-light),
    var(--secondary-dark)
  );
  --gradient-tertiary: linear-gradient(
    135deg,
    var(--tertiary-light),
    var(--tertiary-dark)
  );
  --gradient-full: linear-gradient(
    135deg,
    var(--primary-main),
    var(--secondary-main),
    var(--tertiary-main)
  );
}

/* Estilos específicos para el layout */
.core-logo-text {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.primary-text {
  color: var(--primary-main) !important;
}

.secondary-text {
  color: var(--secondary-main) !important;
}

.tertiary-text {
  color: var(--tertiary-main) !important;
}

.white-text {
  color: var(--text-light) !important;
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
  background: var(--gradient-full);
  transition: width 0.3s ease;
}

.nav-active::after,
.nav-link:hover::after {
  width: 80%;
}

.nav-text {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
}

.menu-btn {
  color: var(--primary-main) !important;
}

.social-btn {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
}

.drawer-bg {
  background-color: var(--background-dark) !important;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

/* Botones */
.primary-btn {
  background: var(--gradient-primary) !important;
  color: white !important;
}

/* Footer */
.footer {
  background-color: var(--neutral-darkest) !important;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-list {
  background-color: transparent !important;
  padding: 0 !important;
}

.transparent-list {
  background-color: transparent !important;
}

.divider {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

/* Titles */
.section-title {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
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

/* Main content area styles */
.main-content {
  background-color: var(--background-default) !important;
}

/* Dark sections */
.dark-section {
  background-color: var(--background-dark) !important;
  color: var(--neutral-light) !important;
}

.gradient-btn {
  background: var(--gradient-full);
  color: white !important;
  letter-spacing: 1px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(61, 90, 241, 0.25);
}
</style>
