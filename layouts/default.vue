// layouts/default.vue
<template>
  <v-app>
    <!-- Navbar con efecto de transparente a sólido al scroll -->
    <v-app-bar
      :elevation="isScrolled ? 4 : 0"
      :color="isScrolled ? 'rgba(18, 18, 18, 0.9)' : 'transparent'"
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
              <v-icon class="me-2 orange-text">mdi-map-marker</v-icon>
              <span class="white-text">123 Calle Principal, Ciudad</span>
            </div>
            <div class="d-flex align-center mb-3">
              <v-icon class="me-2 orange-text">mdi-phone</v-icon>
              <span class="white-text">+1 234 567 890</span>
            </div>
            <div class="d-flex align-center">
              <v-icon class="me-2 green-text">mdi-email</v-icon>
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
  { title: "Nosotros", page: "NOSOTROS" },
  { title: "Contacto", page: "CONTACTO" },
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
  document.documentElement.style.setProperty("--v-theme-background", "#121212");
  document.documentElement.style.setProperty("--v-theme-surface", "#1e1e1e");
  document.body.style.backgroundColor = "#121212";
  document.body.style.color = "white";
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
/* Definición directa de variables para evitar problemas de importación */
:root {
  /* Colores primarios del logo */
  --orange-primary: #ff7e00;
  --orange-light: #ffb347;
  --green-primary: #4caf50;
  --green-light: #8bc34a;

  /* Colores de fondo */
  --background-dark: #121212;
  --background-darker: #0a0a0a;
  --surface-dark: #1e1e1e;

  /* Colores de texto */
  --text-light: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.7);

  /* Gradientes */
  --gradient-orange: linear-gradient(
    135deg,
    var(--orange-light),
    var(--orange-primary)
  );
  --gradient-green: linear-gradient(
    135deg,
    var(--green-light),
    var(--green-primary)
  );
  --gradient-full: linear-gradient(
    135deg,
    var(--orange-primary),
    var(--orange-light),
    var(--green-light),
    var(--green-primary)
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

.orange-text {
  color: var(--orange-primary) !important;
}

.green-text {
  color: var(--green-primary) !important;
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
  color: var(--orange-primary) !important;
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
  background: var(--gradient-orange) !important;
  color: white !important;
}

/* Footer */
.footer {
  background-color: var(--background-darker) !important;
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
</style>
