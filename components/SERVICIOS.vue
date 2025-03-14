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
        <div class="service-logo-container" @click="openServiceDialog(i)">
          <div class="service-inner">
            <v-icon
              :icon="service.icon"
              size="42"
              class="service-icon mb-3 primary-text"
            ></v-icon>
            <div class="service-name">{{ getShortTitle(service.title) }}</div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog para mostrar el detalle del servicio -->
    <v-dialog v-model="dialogOpen" max-width="700">
      <v-card v-if="selectedService !== null" class="service-dialog">
        <v-card-item>
          <div class="d-flex align-center mb-2">
            <v-avatar
              size="64"
              :class="
                selectedService % 2 === 0
                  ? 'primary-gradient'
                  : 'tertiary-gradient'
              "
              class="service-avatar me-4"
            >
              <v-icon
                :icon="services[selectedService].icon"
                size="36"
                color="white"
              ></v-icon>
            </v-avatar>
            <v-card-title class="text-h4 service-dialog-title">
              {{ services[selectedService].title }}
            </v-card-title>
          </div>
        </v-card-item>

        <v-card-text class="dialog-content">
          <p class="text-body-1 service-description mb-6">
            {{ services[selectedService].description }}
          </p>

          <!-- Tecnologías relacionadas -->
          <div class="technologies-section mb-4">
            <h4 class="text-subtitle-1 font-weight-bold mb-3">
              Tecnologías relacionadas:
            </h4>
            <div class="d-flex flex-wrap gap-2">
              <v-chip
                v-for="(tech, index) in services[selectedService].technologies"
                :key="index"
                :color="
                  selectedService % 2 === 0
                    ? 'var(--primary-light)'
                    : 'var(--tertiary-light)'
                "
                class="ma-1 tech-chip"
                size="small"
                label
              >
                {{ tech }}
              </v-chip>
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="var(--neutral-medium)"
            variant="text"
            @click="closeDialog"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const selectedService = ref(null);
const dialogOpen = ref(false);

const openServiceDialog = (index) => {
  selectedService.value = index;
  dialogOpen.value = true;
};

const closeDialog = () => {
  dialogOpen.value = false;
};

// Función para acortar títulos largos en la visualización de iconos
const getShortTitle = (title) => {
  const words = title.split(" ");
  if (words.length <= 2) return title;
  return words[0];
};

const services = [
  {
    icon: "mdi-cog-refresh",
    title: "Automatización y Optimización de Procesos",
    description:
      "Mejoramos la eficiencia operativa mediante la automatización de flujos de trabajo y optimización de procesos empresariales clave.",
    technologies: [
      "RPA",
      "Python",
      "UiPath",
      "Power Automate",
      "Zapier",
      "Integromat",
    ],
  },
  {
    icon: "mdi-code-braces",
    title: "Desarrollo de Sistemas y Software",
    description:
      "Creamos sistemas y aplicaciones personalizadas utilizando tecnologías modernas e innovadoras que se adaptan a tus necesidades específicas.",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Vue.js",
      "Node.js",
      "TypeScript",
      "Java",
      "C#",
    ],
  },
  {
    icon: "mdi-account-group",
    title: "Outsourcing",
    description:
      "Proporcionamos servicios de externalización de TI de alta calidad, permitiéndote enfocarte en tu negocio principal mientras gestionamos tu infraestructura tecnológica.",
    technologies: [
      "Gestión de Proyectos",
      "ITIL",
      "DevOps",
      "Help Desk",
      "Service Desk",
    ],
  },
  {
    icon: "mdi-cloud",
    title: "Cloud Solutions",
    description:
      "Implementamos y gestionamos infraestructuras cloud escalables, seguras y rentables para optimizar tus operaciones digitales.",
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CloudFormation",
    ],
  },
  {
    icon: "mdi-cogs",
    title: "Servicios TI",
    description:
      "Ofrecemos una gama completa de servicios de tecnología de la información, desde soporte técnico hasta planificación estratégica.",
    technologies: [
      "ITIL",
      "COBIT",
      "Help Desk",
      "Service Desk",
      "Monitoreo",
      "NOC",
      "SOC",
    ],
  },
  {
    icon: "mdi-robot",
    title: "Soluciones con IA",
    description:
      "Integramos inteligencia artificial en tus procesos para mejorar la toma de decisiones, automatizar tareas repetitivas y descubrir nuevas oportunidades.",
    technologies: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "TensorFlow",
      "PyTorch",
      "OpenAI",
    ],
  },
  {
    icon: "mdi-cellphone",
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Creamos aplicaciones nativas y multiplataforma que brindan experiencias excepcionales a tus usuarios en cualquier dispositivo.",
    technologies: [
      "React Native",
      "Flutter",
      "Kotlin",
      "Swift",
      "PWA",
      "Android",
      "iOS",
    ],
  },
  {
    icon: "mdi-chart-bar",
    title: "Data Analytics",
    description:
      "Transformamos tus datos en insights accionables mediante análisis avanzados, visualizaciones y dashboards interactivos.",
    technologies: [
      "Power BI",
      "Tableau",
      "Python",
      "R",
      "SQL",
      "Hadoop",
      "Spark",
      "Big Data",
    ],
  },
  {
    icon: "mdi-school",
    title: "Capacitación",
    description:
      "Desarrollamos programas de formación personalizados para que tu equipo domine las tecnologías implementadas y maximice su potencial.",
    technologies: [
      "E-learning",
      "Mentoring",
      "Workshops",
      "Bootcamps",
      "Certificaciones",
      "LMS",
    ],
  },
  {
    icon: "mdi-refresh",
    title: "Servicio Continuo",
    description:
      "Proporcionamos mantenimiento, actualizaciones y soporte permanente para garantizar que tus soluciones tecnológicas evolucionen con tu negocio.",
    technologies: [
      "DevOps",
      "CI/CD",
      "GitLab",
      "GitHub",
      "Jenkins",
      "SLAs",
      "Monitoreo",
    ],
  },
  {
    icon: "mdi-lightbulb",
    title: "Asesoría Tecnológica",
    description:
      "Ofrecemos consultoría estratégica para alinear tus iniciativas tecnológicas con tus objetivos de negocio, maximizando el retorno de inversión.",
    technologies: [
      "Roadmap Digital",
      "Transformación Digital",
      "Enterprise Architecture",
      "TOGAF",
      "ITIL",
    ],
  },
  {
    icon: "mdi-alert-decagram",
    title: "Automatización de Procesos",
    description:
      "Implementamos tecnologías RPA (Robotic Process Automation) y flujos de trabajo inteligentes para reducir costes y eliminar errores en procesos repetitivos.",
    technologies: [
      "UiPath",
      "Automation Anywhere",
      "Blue Prism",
      "Microsoft Power Automate",
      "WorkFusion",
    ],
  },
];
</script>

<style scoped>
/* Estilos base */
.service-section {
  overflow: hidden;
  background-color: var(--background-default);
}

.section-title {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
  letter-spacing: 1px;
}

.section-subtitle {
  color: var(--neutral-medium) !important;
  opacity: 0.9;
}

/* Estilos para las tarjetas de iconos */
.service-logo-container {
  aspect-ratio: 1/1;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  background-color: var(--background-paper);
  box-shadow: 0 6px 15px rgba(42, 61, 173, 0.05);
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
  background-color: var(--background-paper);
  transition: all 0.5s ease;
}

.service-logo-container:hover .service-inner {
  background-color: var(--neutral-light);
}

.primary-gradient {
  background: var(--gradient-primary);
}

.tertiary-gradient {
  background: var(--gradient-tertiary);
}

.service-logo-container:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 15px 30px rgba(42, 61, 173, 0.1);
}

.service-icon {
  color: var(--primary-main) !important;
  filter: drop-shadow(0 2px 4px rgba(42, 61, 173, 0.1));
  transition: all 0.4s ease;
}

.service-logo-container:hover .service-icon {
  transform: scale(1.15);
}

.service-name {
  margin-top: 8px;
  color: var(--neutral-darkest);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.2;
  transition: all 0.3s ease;
}

/* Estilos para el dialog */
.service-dialog {
  background-color: var(--background-paper);
  border-radius: 20px;
  overflow: hidden;
}

.service-dialog-title {
  color: var(--neutral-darkest) !important;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.service-avatar {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.service-description {
  color: var(--neutral-medium) !important;
  line-height: 1.6;
  font-size: 1.1rem;
}

.technologies-section {
  background-color: var(--neutral-light);
  padding: 16px;
  border-radius: 12px;
}

.tech-chip {
  color: white !important;
  font-weight: 500;
}

/* Mejoras responsivas */
@media (max-width: 599px) {
  .service-dialog-title {
    font-size: 1.5rem !important;
  }

  .dialog-content {
    padding: 16px;
  }

  .service-avatar {
    margin-bottom: 16px;
    margin-right: 0 !important;
  }
}
</style>
