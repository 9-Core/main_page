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
            class="project-card"
          >
            <div class="project-image-container">
              <v-img :src="project.image" height="200" cover></v-img>
              <div
                class="project-overlay"
                :class="i % 2 === 0 ? 'orange-overlay' : 'green-overlay'"
              ></div>
            </div>
            <v-card-item>
              <v-chip
                class="mb-3"
                :color="i % 2 === 0 ? '#ff7e00' : '#4caf50'"
                text-color="white"
                >{{ project.category }}</v-chip
              >
              <v-card-title class="text-h5 project-title mb-2">{{
                project.title
              }}</v-card-title>
              <v-card-text class="project-text">{{
                project.description
              }}</v-card-text>
              <v-card-actions class="mt-2">
                <v-btn
                  variant="text"
                  class="project-btn px-0"
                  :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                >
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
        <v-btn class="gradient-btn">
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
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.section-subtitle {
  color: #ffffff !important;
}

.project-card {
  background-color: #1e1e1e !important;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5) !important;
}

.project-image-container {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.orange-overlay {
  background: linear-gradient(
    135deg,
    rgba(255, 126, 0, 0.6),
    rgba(255, 179, 71, 0.6)
  );
}

.green-overlay {
  background: linear-gradient(
    135deg,
    rgba(76, 175, 80, 0.6),
    rgba(139, 195, 74, 0.6)
  );
}

.project-card:hover .project-overlay {
  opacity: 0.5;
}

.project-title {
  color: #ffffff !important;
  transition: all 0.3s ease;
}

.project-card:hover .project-title {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
}

.project-text {
  color: rgba(255, 255, 255, 0.7) !important;
}

.orange-text {
  color: #ff7e00 !important;
}

.green-text {
  color: #4caf50 !important;
}

.gradient-btn {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  color: white !important;
  padding: 0 24px;
  height: 48px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.gradient-btn:hover {
  box-shadow: 0 5px 15px rgba(255, 126, 0, 0.4);
  transform: translateY(-3px);
}
</style>
