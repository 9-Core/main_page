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
        <v-card-item class="service-header">
          <div class="d-flex align-center mb-2">
            <v-avatar
              size="64"
              :class="getIconGradientClass(selectedService)"
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
          <div class="technologies-container mb-4">
            <div class="technologies-body">
              <h4
                class="text-subtitle-1 font-weight-bold technologies-title mb-4"
              >
                Tecnologías relacionadas:
              </h4>

              <div
                v-if="services[selectedService].techCategories"
                class="tech-categories-wrapper"
              >
                <div
                  v-for="(techs, category) in services[selectedService]
                    .techCategories"
                  :key="category"
                  class="tech-category mb-4"
                >
                  <div class="tech-category-name mb-2">{{ category }}</div>
                  <div class="d-flex flex-wrap">
                    <v-chip
                      v-for="(tech, index) in techs"
                      :key="index"
                      class="ma-1 tech-chip"
                      size="small"
                      label
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="var(--neutral-medium)"
            variant="text"
            @click="closeDialog"
            class="close-btn"
          >
            CERRAR
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

// Función para obtener la clase de gradiente para el icono según el servicio
const getIconGradientClass = (serviceIndex) => {
  const gradientClasses = [
    "blue-purple-gradient", // Gradiente 1: Azul-Morado
    "purple-pink-gradient", // Gradiente 2: Morado-Rosa
    "blue-teal-gradient", // Gradiente 3: Azul-Turquesa
    "purple-blue-gradient", // Gradiente 4: Morado-Azul
    "indigo-blue-gradient", // Gradiente 5: Índigo-Azul
  ];

  // Usa el módulo para asegurarte de no exceder el número de gradientes disponibles
  return gradientClasses[serviceIndex % gradientClasses.length];
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
    techCategories: {
      "Herramientas de Automatización": [
        "UiPath",
        "Power Automate",
        "Pentaho",
        "SSIS/SSDT",
        "Scheduler",
      ],
      "Lenguajes de Programación": ["Python", ".NET Core", "C#"],
      "Testing y QA": ["Selenium", "Playwright"],
      "Integración/ETL": ["SSIS/SSDT", "Pentaho"],
    },
  },
  {
    icon: "mdi-code-braces",
    title: "Desarrollo de Sistemas y Software",
    description:
      "Creamos sistemas y aplicaciones personalizadas utilizando tecnologías modernas e innovadoras que se adaptan a tus necesidades específicas.",
    techCategories: {
      "Lenguajes de Programación": [
        "JavaScript",
        "Python",
        "C#",
        ".NET Core",
        "Java",
        "Swift",
      ],
      "Frameworks Frontend": [
        "React.js",
        "Vue.js",
        "Angular",
        "Next.js",
        "Nuxt",
      ],
      "Frameworks Backend": [
        "Spring Boot",
        "Django",
        "Quarkus",
        ".NET Core",
        "Node.js",
      ],
      "UI Frameworks": ["WPF", "MAUI"],
      Versionamiento: ["GitHub", "GitLab", "Bitbucket", "Git"],
    },
  },
  {
    icon: "mdi-account-group",
    title: "Outsourcing",
    description:
      "Proporcionamos servicios de externalización de TI de alta calidad, permitiéndote enfocarte en tu negocio principal mientras gestionamos tu infraestructura tecnológica.",
    techCategories: {
      "Gestión de Proyectos": [
        "Jira",
        "Microsoft Project",
        "Trello",
        "Azure DevOps",
      ],
      Metodologías: ["ITIL", "Scrum", "Kanban", "DevOps"],
      Soporte: ["Help Desk", "Service Desk"],
      Infraestructura: ["Windows Server", "Azure", "GCP", "AWS"],
    },
  },
  {
    icon: "mdi-cloud",
    title: "Cloud Solutions",
    description:
      "Implementamos y gestionamos infraestructuras cloud escalables, seguras y rentables para optimizar tus operaciones digitales.",
    techCategories: {
      "Proveedores Cloud": ["Azure", "GCP (Google Cloud Platform)", "AWS"],
      "Infraestructura como Código": ["Terraform", "YAML"],
      Containers: ["Docker", "Kubernetes"],
      "Servicios Cloud": [
        "Azure Functions",
        "Google Cloud Functions",
        "Lambda",
      ],
      "Bases de Datos Cloud": ["CosmosDB", "BigQuery", "DynamoDB"],
    },
  },
  {
    icon: "mdi-cogs",
    title: "Servicios TI",
    description:
      "Ofrecemos una gama completa de servicios de tecnología de la información, desde soporte técnico hasta planificación estratégica.",
    techCategories: {
      Metodologías: ["ITIL", "COBIT"],
      Soporte: ["Help Desk", "Service Desk"],
      Monitoreo: ["Nagios", "Zabbix", "Prometheus", "Grafana"],
      "Centros de Operaciones": ["NOC", "SOC"],
      Hosting: ["Windows Server IIS", "Azure", "GCP"],
    },
  },
  {
    icon: "mdi-robot",
    title: "Soluciones con IA",
    description:
      "Integramos inteligencia artificial en tus procesos para mejorar la toma de decisiones, automatizar tareas repetitivas y descubrir nuevas oportunidades.",
    techCategories: {
      "Machine Learning": ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
      "Procesamiento de Lenguaje": ["NLP", "HuggingFace", "BERT", "GPT"],
      "Computer Vision": ["OpenCV", "TensorFlow Vision"],
      Plataformas: ["Azure ML", "Google AI", "OpenAI"],
      Lenguajes: ["Python", "R", "Julia"],
    },
  },
  {
    icon: "mdi-cellphone",
    title: "Desarrollo de Aplicaciones Móviles",
    description:
      "Creamos aplicaciones nativas y multiplataforma que brindan experiencias excepcionales a tus usuarios en cualquier dispositivo.",
    techCategories: {
      Frameworks: ["React Native", "Flutter", "MAUI"],
      Plataformas: ["Android", "iOS"],
      Lenguajes: ["Swift", "Kotlin", "JavaScript", "C#"],
      Herramientas: ["Android Studio", "Xcode"],
      "UI/UX": ["Material Design", "iOS Design Guidelines"],
    },
  },
  {
    icon: "mdi-chart-bar",
    title: "Data Analytics",
    description:
      "Transformamos tus datos en insights accionables mediante análisis avanzados, visualizaciones y dashboards interactivos.",
    techCategories: {
      "Plataformas BI": ["Power BI", "Tableau", "Looker Studio"],
      Lenguajes: ["Python", "R", "SQL"],
      "Bases de Datos": ["SQL Server", "PostgreSQL", "MongoDB", "BigQuery"],
      "Big Data": ["Hadoop", "Spark"],
      ETL: ["SSIS/SSDT", "Pentaho", "Informatica"],
    },
  },
  {
    icon: "mdi-school",
    title: "Capacitación",
    description:
      "Desarrollamos programas de formación personalizados para que tu equipo domine las tecnologías implementadas y maximice su potencial.",
    techCategories: {
      "Plataformas E-learning": ["Moodle", "Canvas", "LMS"],
      Metodologías: ["Mentoring", "Workshops", "Bootcamps"],
      Certificaciones: ["Microsoft", "AWS", "Google Cloud", "ITIL", "Scrum"],
      "Áreas de Formación": [
        "Desarrollo",
        "Cloud",
        "DevOps",
        "Data Science",
        "IA",
      ],
    },
  },
  {
    icon: "mdi-refresh",
    title: "Servicio Continuo",
    description:
      "Proporcionamos mantenimiento, actualizaciones y soporte permanente para garantizar que tus soluciones tecnológicas evolucionen con tu negocio.",
    techCategories: {
      DevOps: ["CI/CD", "Jenkins", "Azure DevOps", "GitHub Actions"],
      Versionamiento: ["GitLab", "GitHub", "Bitbucket"],
      Monitoreo: ["Prometheus", "Grafana", "ELK Stack"],
      SLAs: ["Gestión de Incidentes", "Respaldo de Datos", "Actualizaciones"],
      Testing: ["Selenium", "Playwright", "JUnit", "NUnit"],
    },
  },
  {
    icon: "mdi-lightbulb",
    title: "Asesoría Tecnológica",
    description:
      "Ofrecemos consultoría estratégica para alinear tus iniciativas tecnológicas con tus objetivos de negocio, maximizando el retorno de inversión.",
    techCategories: {
      "Transformación Digital": ["Roadmap Digital", "Estrategia Tecnológica"],
      Metodologías: ["Enterprise Architecture", "TOGAF", "ITIL"],
      Innovación: ["IA", "Blockchain", "Cloud", "IoT"],
      Seguridad: ["Ciberseguridad", "Cumplimiento Normativo", "GDPR"],
    },
  },
  {
    icon: "mdi-memory",
    title: "Blockchain y Tecnologías Emergentes",
    description:
      "Implementamos soluciones basadas en tecnologías emergentes como Blockchain para crear sistemas seguros, transparentes y descentralizados.",
    techCategories: {
      Blockchain: ["Blockchain", "Blockcerts", "Ethereum", "Hyperledger"],
      "Smart Contracts": ["Solidity", "Chaincode"],
      Infraestructura: ["Nodos Blockchain", "Redes Privadas"],
      Seguridad: ["Criptografía", "Tokenización", "Identidad Digital"],
    },
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

/* Nuevos gradientes para iconos */
.blue-purple-gradient {
  background: linear-gradient(135deg, #2979ff, #5e35b1);
}

.purple-pink-gradient {
  background: linear-gradient(135deg, #673ab7, #e91e63);
}

.blue-teal-gradient {
  background: linear-gradient(135deg, #1976d2, #00897b);
}

.purple-blue-gradient {
  background: linear-gradient(135deg, #7b1fa2, #1565c0);
}

.indigo-blue-gradient {
  background: linear-gradient(135deg, #3949ab, #0288d1);
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
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.service-header {
  background-color: #fff;
  border-bottom: 1px solid rgba(200, 210, 255, 0.1);
}

.service-dialog-title {
  color: var(--neutral-darkest) !important;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.5px;
}

.service-avatar {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.service-description {
  color: var(--neutral-medium) !important;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Nuevos estilos mejorados para la sección de tecnologías */
.dialog-content {
  padding-bottom: 0;
  overflow: visible;
  max-height: none;
}

.technologies-container {
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(26, 35, 126, 0.2);
}

.technologies-body {
  background: linear-gradient(135deg, #3949ab, #3f51b5, #5c6bc0, #3f51b5);
  padding: 20px;
  max-height: 50vh;
  overflow-y: auto;
  border-radius: 12px;
}

.technologies-title {
  color: white !important;
  font-weight: 600;
}

.tech-categories-wrapper {
  margin-top: 10px;
}

/* Estilos para categorías de tecnologías */
.tech-category {
  margin-bottom: 20px;
}

.tech-category:last-child {
  margin-bottom: 0;
}

.tech-category-name {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  font-size: 0.95rem;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  margin-bottom: 10px;
}

.tech-chip {
  background-color: rgba(255, 255, 255, 0.15) !important;
  color: white !important;
  font-weight: 500;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 4px;
}

.tech-chip:hover {
  background-color: rgba(255, 255, 255, 0.25) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
  margin-bottom: 8px;
  font-weight: 500;
}

/* Mejoras responsivas */
@media (max-width: 599px) {
  .service-dialog-title {
    font-size: 1.5rem !important;
  }

  .service-avatar {
    margin-bottom: 16px;
    margin-right: 0 !important;
  }

  .technologies-body {
    max-height: 60vh;
  }
}
</style>
