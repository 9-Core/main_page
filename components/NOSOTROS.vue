<!-- components/AboutUsSection.vue -->
<template>
  <v-container fluid class="about-section py-16">
    <v-container>
      <v-row class="mb-8">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 mb-4 section-title">Sobre Nosotros</h2>
          <p class="text-subtitle-1 section-subtitle">
            Conoce quiénes somos y nuestra misión
          </p>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" md="6" order="2" order-md="1">
          <h3 class="text-h4 mb-4 about-heading">
            Innovación y experiencia a tu servicio
          </h3>
          <p class="text-body-1 mb-4 about-text">
            Somos un equipo de expertos en tecnología con más de 15 años de
            experiencia creando soluciones digitales para empresas de todos los
            tamaños. Nuestra pasión por la innovación y el compromiso con la
            excelencia nos han convertido en líderes del sector.
          </p>
          <p class="text-body-1 mb-6 about-text">
            Nuestro enfoque combina conocimiento técnico de vanguardia con una
            profunda comprensión de los desafíos empresariales actuales,
            permitiéndonos ofrecer soluciones que no solo resuelven problemas
            inmediatos, sino que preparan a nuestros clientes para el futuro
            digital.
          </p>

          <v-row class="mb-6">
            <v-col v-for="(value, i) in companyValues" :key="i" cols="6" sm="4">
              <v-card class="value-card pa-4 text-center" flat>
                <v-icon
                  :icon="value.icon"
                  size="36"
                  color="#5db9f0"
                  class="mb-2"
                ></v-icon>
                <div class="text-subtitle-1 font-weight-bold value-title">
                  {{ value.title }}
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-btn color="#5db9f0" size="large" class="about-btn">
            Conoce al equipo
            <v-icon end icon="mdi-account-group"></v-icon>
          </v-btn>
        </v-col>

        <v-col
          cols="12"
          md="6"
          order="1"
          order-md="2"
          class="d-flex justify-center mb-8 mb-md-0"
        >
          <v-img
            src="/about-us-image.svg"
            max-width="500"
            class="about-image"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12">
          <v-divider class="mb-16" color="rgba(93, 185, 240, 0.2)"></v-divider>

          <v-row>
            <v-col
              v-for="(milestone, i) in milestones"
              :key="i"
              cols="12"
              sm="6"
              md="3"
            >
              <div class="text-center milestone-item">
                <div class="text-h5 milestone-year mb-2">
                  {{ milestone.year }}
                </div>
                <div class="text-subtitle-1 milestone-title mb-2">
                  {{ milestone.title }}
                </div>
                <div class="text-body-2 milestone-desc">
                  {{ milestone.description }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
const companyValues = [
  { title: "Innovación", icon: "mdi-lightbulb" },
  { title: "Calidad", icon: "mdi-check-decagram" },
  { title: "Compromiso", icon: "mdi-handshake" },
  { title: "Transparencia", icon: "mdi-eye" },
  { title: "Colaboración", icon: "mdi-account-group" },
  { title: "Adaptabilidad", icon: "mdi-refresh" },
];

const milestones = [
  {
    year: "2008",
    title: "Fundación",
    description:
      "Iniciamos operaciones con un equipo de 5 personas especializadas en desarrollo web.",
  },
  {
    year: "2012",
    title: "Expansión",
    description:
      "Ampliamos nuestros servicios para incluir soluciones cloud y consultoria IT.",
  },
  {
    year: "2016",
    title: "Reconocimiento",
    description:
      "Recibimos premio a la innovación tecnológica por nuestras soluciones disruptivas.",
  },
  {
    year: "2023",
    title: "Liderazgo",
    description:
      "Consolidamos nuestra posición como líderes en transformación digital empresarial.",
  },
];
</script>

<style scoped>
/* Estilos específicos para la sección de nosotros */
.about-section {
  background-color: rgba(5, 21, 40, 0.9) !important;
}

.section-title {
  color: #5db9f0 !important;
}

.section-subtitle {
  color: white !important;
}

.about-heading {
  color: #5db9f0 !important;
}

.about-text {
  color: white !important;
}

.about-btn {
  color: white !important;
}

.about-image {
  animation: floatAbout 6s ease-in-out infinite;
}

@keyframes floatAbout {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.value-card {
  background-color: rgba(93, 185, 240, 0.1) !important;
  border-bottom: 2px solid #5db9f0;
}

.value-title {
  color: white !important;
}

.milestone-year {
  color: #5db9f0 !important;
  font-weight: bold;
}

.milestone-title {
  color: white !important;
  font-weight: bold;
}

.milestone-desc {
  color: rgba(255, 255, 255, 0.8) !important;
}
</style>
