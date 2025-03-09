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
                  :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                  class="mb-2"
                ></v-icon>
                <div class="text-subtitle-1 font-weight-bold value-title">
                  {{ value.title }}
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-btn class="gradient-btn">
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
          <div class="logo-container">
            <v-img src="/image.png" max-width="400" class="about-logo"></v-img>
            <div class="glow-effect orange-glow"></div>
            <div class="glow-effect green-glow"></div>
          </div>
        </v-col>
      </v-row>

      <!-- Misión y Visión -->
      <v-row class="mission-vision-section my-16">
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <v-card class="mission-card h-100">
            <v-card-item>
              <div class="d-flex align-center mb-4">
                <div class="mission-icon-wrapper orange-bg mr-4">
                  <v-icon icon="mdi-flag" size="32" color="white"></v-icon>
                </div>
                <h3 class="text-h4 mission-title">Misión</h3>
              </div>
              <v-card-text class="pa-0">
                <p class="text-body-1 mission-text">
                  Impulsamos el crecimiento y la competitividad de las
                  organizaciones con soluciones innovadoras, diseñadas a la
                  medida de cada necesidad. Proporcionamos tecnología ágil y
                  escalable que optimiza procesos, generando valor real y
                  sostenible. Nuestro compromiso con la excelencia, la atención
                  personalizada y el acompañamiento continuo garantiza que cada
                  implementación convierta desafíos en oportunidades de éxito.
                </p>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="vision-card h-100">
            <v-card-item>
              <div class="d-flex align-center mb-4">
                <div class="mission-icon-wrapper green-bg mr-4">
                  <v-icon icon="mdi-eye" size="32" color="white"></v-icon>
                </div>
                <h3 class="text-h4 vision-title">Visión</h3>
              </div>
              <v-card-text class="pa-0">
                <p class="text-body-1 mission-text">
                  Ser referentes en la transformación digital de las
                  organizaciones mediante soluciones innovadoras que generen un
                  impacto real en su crecimiento y competitividad. Buscamos ser
                  reconocidos por nuestra excelencia tecnológica, nuestra
                  capacidad para resolver desafíos complejos y nuestro
                  compromiso con el éxito de cada cliente. Aspiramos a
                  contribuir en el ecosistema digital, creando tecnología que
                  impulse el progreso y deje una huella duradera en la
                  industria.
                </p>
              </v-card-text>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12">
          <v-divider class="mb-16 custom-divider"></v-divider>

          <v-row>
            <v-col
              v-for="(milestone, i) in milestones"
              :key="i"
              cols="12"
              sm="6"
              md="3"
            >
              <div class="text-center milestone-item">
                <div
                  class="text-h5 milestone-year mb-2"
                  :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                >
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
  background-color: #121212 !important;
  position: relative;
}

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

.about-heading {
  background: linear-gradient(135deg, #ff7e00, #ffb347);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.about-text {
  color: rgba(255, 255, 255, 0.8) !important;
}

.orange-text {
  color: #ff7e00 !important;
}

.green-text {
  color: #4caf50 !important;
}

.logo-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-logo {
  position: relative;
  z-index: 2;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.glow-effect {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
  z-index: 1;
}

.orange-glow {
  background-color: #ff7e00;
  width: 200px;
  height: 200px;
  top: -30px;
  right: 20%;
  animation: pulse 6s ease-in-out infinite alternate;
}

.green-glow {
  background-color: #4caf50;
  width: 180px;
  height: 180px;
  bottom: -20px;
  left: 20%;
  animation: pulse 8s ease-in-out infinite alternate-reverse;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.7;
  }
}

.value-card {
  background-color: rgba(255, 255, 255, 0.05) !important;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.value-card:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.value-title {
  color: #ffffff !important;
}

.gradient-btn {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  color: white !important;
  position: relative;
  transition: all 0.3s ease;
}

.gradient-btn:hover {
  box-shadow: 0 5px 15px rgba(255, 126, 0, 0.4);
  transform: translateY(-3px);
}

.custom-divider {
  background: linear-gradient(
    to right,
    transparent,
    #ff7e00,
    #4caf50,
    transparent
  );
  height: 1px;
  border: none;
  opacity: 0.3;
}

.milestone-title {
  color: #ffffff !important;
  font-weight: 600;
}

.milestone-desc {
  color: rgba(255, 255, 255, 0.7) !important;
}

.milestone-item {
  position: relative;
  padding: 1rem;
  transition: all 0.3s ease;
}

.milestone-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transform: translateY(-5px);
}

/* Estilos para misión y visión */
.mission-vision-section {
  position: relative;
}

.mission-card,
.vision-card {
  background-color: rgba(255, 255, 255, 0.03) !important;
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.mission-card {
  border-left: 4px solid #ff7e00;
}

.vision-card {
  border-left: 4px solid #4caf50;
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
}

.mission-icon-wrapper {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.orange-bg {
  background-color: rgba(255, 126, 0, 0.8);
}

.green-bg {
  background-color: rgba(76, 175, 80, 0.8);
}

.mission-title {
  background: linear-gradient(135deg, #ff7e00, #ffb347);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.vision-title {
  background: linear-gradient(135deg, #4caf50, #8bc34a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.mission-text {
  color: rgba(255, 255, 255, 0.8) !important;
  line-height: 1.7;
}
</style>
