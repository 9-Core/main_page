<!-- components/ProjectsSection.vue -->
<template>
  <v-container class="py-16">
    <v-row class="mb-8">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 mb-4 section-title">Nuestros Proyectos</h2>
        <p class="text-subtitle-1 section-subtitle">
          Casos de éxito que demuestran nuestra experiencia
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(project, i) in projects"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        class="mb-6"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            :elevation="isHovering ? 8 : 2"
            class="project-card h-100"
          >
            <v-img :src="project.image" height="200" cover></v-img>
            <v-card-item>
              <v-chip class="mb-3" color="#5db9f0" text-color="white">{{
                project.category
              }}</v-chip>
              <v-card-title class="text-h5 project-title mb-2">{{
                project.title
              }}</v-card-title>
              <v-card-text class="project-text">{{
                project.description
              }}</v-card-text>
              <v-card-actions class="mt-2">
                <v-btn variant="text" class="project-btn px-0">
                  Ver detalles
                  <v-icon end icon="mdi-arrow-right"></v-icon>
                </v-btn>
              </v-card-actions>
            </v-card-item>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" class="text-center">
        <v-btn color="#5db9f0" size="large" class="view-all-btn">
          Ver todos los proyectos
          <v-icon end icon="mdi-arrow-right"></v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const projects = [
  {
    title: "Plataforma E-commerce",
    category: "Desarrollo Web",
    description:
      "Implementación de tienda online con pasarela de pagos integrada para empresa retail con más de 50,000 productos.",
    image: "/projects/ecommerce.jpg",
  },
  {
    title: "Sistema ERP Cloud",
    category: "Cloud Solutions",
    description:
      "Migración y optimización de sistema ERP a entorno cloud, mejorando velocidad y reduciendo costos en un 30%.",
    image: "/projects/erp.jpg",
  },
  {
    title: "Automatización Industrial",
    category: "AI & IoT",
    description:
      "Implementación de sistemas de monitoreo y control en tiempo real para planta de manufactura usando IoT.",
    image: "/projects/iot.jpg",
  },
  {
    title: "App Movilidad Urbana",
    category: "Desarrollo Móvil",
    description:
      "Aplicación móvil para servicio de transporte urbano con más de 100,000 usuarios activos mensuales.",
    image: "/projects/mobility.jpg",
  },
  {
    title: "Seguridad Bancaria",
    category: "Ciberseguridad",
    description:
      "Implementación de protocolos de seguridad avanzados para institución financiera con operaciones en 5 países.",
    image: "/projects/security.jpg",
  },
  {
    title: "BI para Retail",
    category: "Analytics",
    description:
      "Dashboards de Business Intelligence para cadena de retail, incrementando ventas en un 25% mediante análisis predictivo.",
    image: "/projects/analytics.jpg",
  },
];
</script>

<style scoped>
/* Estilos específicos para la sección de proyectos */
.section-title {
  color: #5db9f0 !important;
}

.section-subtitle {
  color: white !important;
}

.project-card {
  background-color: rgba(5, 21, 40, 0.7) !important;
  transition: all 0.3s ease;
  height: 100%;
}

.project-title {
  color: #5db9f0 !important;
}

.project-text {
  color: white !important;
}

.project-btn {
  color: #5db9f0 !important;
}

.view-all-btn {
  color: white !important;
}
</style>
