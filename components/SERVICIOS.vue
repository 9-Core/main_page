<!-- components/ServicesSection.vue -->
<template>
  <v-container class="py-16">
    <v-row class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 mb-4 section-title">Nuestros Servicios</h2>
        <p class="text-subtitle-1 section-subtitle">
          Soluciones integrales para tu negocio
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(service, i) in services" :key="i" cols="12" md="4">
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 8 : 2"
            height="100%"
            class="service-card hover-effect"
            :class="i % 2 === 0 ? 'orange-card' : 'green-card'"
          >
            <v-card-item>
              <v-icon
                :icon="service.icon"
                size="48"
                :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                class="mb-4"
              ></v-icon>
              <v-card-title class="text-h5 service-title">{{
                service.title
              }}</v-card-title>
              <v-card-text class="service-text">{{
                service.description
              }}</v-card-text>
              <v-card-actions>
                <v-btn
                  variant="text"
                  class="service-btn px-0"
                  :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                >
                  Saber más
                  <v-icon end icon="mdi-arrow-right"></v-icon>
                </v-btn>
              </v-card-actions>
            </v-card-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const services = [
  {
    icon: "mdi-laptop-account",
    title: "Consultoría IT",
    description:
      "Asesoramiento estratégico para optimizar tus procesos tecnológicos y maximizar el ROI.",
  },
  {
    icon: "mdi-code-braces",
    title: "Desarrollo Software",
    description:
      "Soluciones personalizadas utilizando las últimas tecnologías y mejores prácticas.",
  },
  {
    icon: "mdi-cloud",
    title: "Cloud Solutions",
    description:
      "Implementación y gestión de infraestructuras cloud escalables y seguras.",
  },
  {
    icon: "mdi-shield-check",
    title: "Ciberseguridad",
    description:
      "Protección integral para tus activos digitales y datos sensibles.",
  },
  {
    icon: "mdi-robot",
    title: "Inteligencia Artificial",
    description: "Soluciones de IA y Machine Learning para optimizar procesos.",
  },
  {
    icon: "mdi-view-dashboard",
    title: "Analytics",
    description: "Análisis de datos para una toma de decisiones informada.",
  },
];
</script>

<style scoped>
/* Estilos específicos para la sección de servicios */
.section-title {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.section-subtitle {
  color: var(--text-light) !important;
}

.service-card {
  background-color: var(--surface-dark) !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.orange-card::before {
  background: var(--gradient-orange);
}

.green-card::before {
  background: var(--gradient-green);
}

.service-title {
  color: var(--text-light) !important;
}

.service-text {
  color: var(--text-muted) !important;
}

.service-btn {
  font-weight: 500;
}

.orange-text {
  color: var(--orange-primary) !important;
}

.green-text {
  color: var(--green-primary) !important;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: translateY(-10px);
}
</style>
