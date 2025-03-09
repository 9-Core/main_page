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
            class="service-card"
            :class="i % 2 === 0 ? 'orange-border' : 'green-border'"
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
    icon: "mdi-cog-refresh",
    title: "Automatización y Optimización de Procesos",
    description:
      "Mejoramos la eficiencia operativa mediante la automatización de flujos de trabajo y optimización de procesos empresariales clave.",
  },
  {
    icon: "mdi-code-braces",
    title: "Desarrollo de Sistemas y Software",
    description:
      "Creamos sistemas y aplicaciones personalizadas utilizando tecnologías modernas e innovadoras que se adaptan a tus necesidades específicas.",
  },
  {
    icon: "mdi-account-group",
    title: "Outsourcing",
    description:
      "Proporcionamos servicios de externalización de TI de alta calidad, permitiéndote enfocarte en tu negocio principal mientras gestionamos tu infraestructura tecnológica.",
  },
  {
    icon: "mdi-cloud",
    title: "Cloud Solutions",
    description:
      "Implementamos y gestionamos infraestructuras cloud escalables, seguras y rentables para optimizar tus operaciones digitales.",
  },
  {
    icon: "mdi-cogs",
    title: "Servicios TI",
    description:
      "Ofrecemos una gama completa de servicios de tecnología de la información, desde soporte técnico hasta planificación estratégica.",
  },
  {
    icon: "mdi-robot",
    title: "Soluciones con IA",
    description:
      "Integramos inteligencia artificial en tus procesos para mejorar la toma de decisiones, automatizar tareas repetitivas y descubrir nuevas oportunidades.",
  },
  {
    icon: "mdi-cellphone",
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Creamos aplicaciones nativas y multiplataforma que brindan experiencias excepcionales a tus usuarios en cualquier dispositivo.",
  },
  {
    icon: "mdi-chart-bar",
    title: "Data Analytics",
    description:
      "Transformamos tus datos en insights accionables mediante análisis avanzados, visualizaciones y dashboards interactivos.",
  },
  {
    icon: "mdi-school",
    title: "Capacitación",
    description:
      "Desarrollamos programas de formación personalizados para que tu equipo domine las tecnologías implementadas y maximice su potencial.",
  },
  {
    icon: "mdi-refresh",
    title: "Servicio Continuo",
    description:
      "Proporcionamos mantenimiento, actualizaciones y soporte permanente para garantizar que tus soluciones tecnológicas evolucionen con tu negocio.",
  },
  {
    icon: "mdi-lightbulb",
    title: "Asesoría Tecnológica",
    description:
      "Ofrecemos consultoría estratégica para alinear tus iniciativas tecnológicas con tus objetivos de negocio, maximizando el retorno de inversión.",
  },
  {
    icon: "mdi-alert-decagram",
    title: "Automatización de Procesos",
    description:
      "Implementamos tecnologías RPA (Robotic Process Automation) y flujos de trabajo inteligentes para reducir costes y eliminar errores en procesos repetitivos.",
  },
];
</script>

<style scoped>
/* Estilos específicos para la sección de servicios */
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

.service-card {
  background-color: #1e1e1e !important;
  transition: all 0.3s ease;
  border-top: 3px solid transparent;
}

.orange-border {
  border-image: linear-gradient(to right, #ff7e00, #ffb347) 1;
}

.green-border {
  border-image: linear-gradient(to right, #4caf50, #8bc34a) 1;
}

.service-title {
  color: #ffffff !important;
}

.service-text {
  color: rgba(255, 255, 255, 0.7) !important;
}

.orange-text {
  color: #ff7e00 !important;
}

.green-text {
  color: #4caf50 !important;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5) !important;
}
</style>
