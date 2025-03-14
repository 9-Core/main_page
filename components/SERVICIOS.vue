<!-- components/ServicesSection.vue -->
<template>
  <v-container class="py-16 service-section">
    <v-row class="mb-12">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 mb-4 section-title">Nuestros Servicios</h2>
        <p class="text-subtitle-1 section-subtitle">
          Soluciones integrales para tu negocio
        </p>
      </v-col>
    </v-row>

    <!-- Grid de servicios (logos y nombres) -->
    <v-row class="service-grid px-2">
      <v-col
        v-for="(service, i) in services"
        :key="i"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="mb-6"
      >
        <div
          class="service-logo-container"
          :class="{
            'service-selected': selectedService === i,
            'orange-gradient': i % 2 === 0,
            'green-gradient': i % 2 !== 0,
          }"
          @click="toggleService(i)"
        >
          <div class="service-inner">
            <v-icon
              :icon="service.icon"
              size="42"
              class="service-icon mb-3"
            ></v-icon>
            <div class="service-name">{{ getShortTitle(service.title) }}</div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Área de detalle del servicio seleccionado -->
    <v-slide-y-transition>
      <div v-if="selectedService !== null" class="detail-container mt-8">
        <v-row>
          <v-col cols="12">
            <v-card
              :class="selectedService % 2 === 0 ? 'orange-glow' : 'green-glow'"
              class="service-detail-card"
            >
              <div class="card-content-wrapper">
                <div class="service-detail-header">
                  <v-avatar
                    size="64"
                    :class="
                      selectedService % 2 === 0
                        ? 'orange-gradient'
                        : 'green-gradient'
                    "
                    class="service-avatar me-4"
                  >
                    <v-icon
                      :icon="services[selectedService].icon"
                      size="36"
                      color="white"
                    ></v-icon>
                  </v-avatar>
                  <h3 class="text-h4 service-title">
                    {{ services[selectedService].title }}
                  </h3>
                </div>

                <v-card-text class="service-text mt-6 text-body-1">
                  {{ services[selectedService].description }}
                </v-card-text>

                <v-card-actions class="mt-4">
                  <v-btn
                    :class="
                      selectedService % 2 === 0 ? 'orange-btn' : 'green-btn'
                    "
                    class="service-btn px-6 py-2"
                    elevation="2"
                  >
                    Saber más
                    <v-icon end icon="mdi-arrow-right" class="ms-2"></v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-slide-y-transition>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const selectedService = ref(null);

const toggleService = (index) => {
  // Añadir pequeño retraso para mejorar la transición visual
  if (selectedService.value === index) {
    selectedService.value = null;
  } else {
    if (selectedService.value !== null) {
      // Si ya hay uno seleccionado, primero cerramos y luego abrimos el nuevo
      selectedService.value = null;
      setTimeout(() => {
        selectedService.value = index;
      }, 100);
    } else {
      selectedService.value = index;
    }
  }
};

// Función para acortar títulos largos en la visualización de iconos
const getShortTitle = (title) => {
  const words = title.split(" ");
  if (words.length <= 2) return title;

  // Para "Automatización y Optimización de Procesos" → "Automatización"
  // Para "Desarrollo de Sistemas y Software" → "Desarrollo"
  return words[0];
};

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
/* Estilos base */
.service-section {
  overflow: hidden;
}

.section-title {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
  letter-spacing: 1px;
}

.section-subtitle {
  color: #ffffff !important;
  opacity: 0.9;
}

/* Estilos para las tarjetas de iconos */
.service-logo-container {
  aspect-ratio: 1/1;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.service-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: rgba(30, 30, 30, 0.85);
  transition: all 0.5s ease;
  backdrop-filter: blur(5px);
}

.service-logo-container:hover .service-inner {
  background-color: rgba(30, 30, 30, 0.7);
}

.orange-gradient {
  background: linear-gradient(145deg, #ff7e00, #ffb347);
}

.green-gradient {
  background: linear-gradient(145deg, #4caf50, #8bc34a);
}

.service-logo-container:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.service-selected {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.service-icon {
  color: white !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: all 0.4s ease;
}

.service-logo-container:hover .service-icon {
  transform: scale(1.15);
}

.service-selected .service-icon {
  transform: scale(1.15);
}

.service-name {
  margin-top: 8px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.2;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* Estilos para el detalle expandido */
.detail-container {
  position: relative;
}

.service-detail-card {
  background-color: rgba(30, 30, 30, 0.95) !important;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}

.orange-glow {
  box-shadow: 0 10px 30px rgba(255, 126, 0, 0.15);
}

.green-glow {
  box-shadow: 0 10px 30px rgba(76, 175, 80, 0.15);
}

.card-content-wrapper {
  padding: 32px;
}

.service-detail-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.service-avatar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.service-title {
  color: #ffffff !important;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.service-text {
  color: rgba(255, 255, 255, 0.85) !important;
  line-height: 1.6;
  font-size: 1.1rem;
}

.service-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: 30px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}

.orange-btn {
  background: linear-gradient(145deg, #ff7e00, #ffb347) !important;
  color: white !important;
}

.green-btn {
  background: linear-gradient(145deg, #4caf50, #8bc34a) !important;
  color: white !important;
}

.service-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3) !important;
}

/* Animaciones adicionales */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 126, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 126, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 126, 0, 0);
  }
}

/* Mejoras responsivas */
@media (max-width: 599px) {
  .card-content-wrapper {
    padding: 20px;
  }

  .service-detail-header {
    flex-direction: column;
    text-align: center;
  }

  .service-avatar {
    margin-bottom: 16px;
    margin-right: 0 !important;
  }

  .service-title {
    font-size: 1.5rem !important;
  }

  .service-card-actions {
    justify-content: center;
  }
}
</style>
