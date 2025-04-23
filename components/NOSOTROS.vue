<!-- components/AboutUsSection.vue -->
<template>
  <v-container fluid class="about-section py-16">
    <div class="about-bg-pattern"></div>

    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-12">
          <h3 class="text-h3 mb-6 main-heading font-weight-black">
            Impulsando el Éxito de Nuestros
            <span class="text-gradient">Clientes</span>
          </h3>
        </v-col>
      </v-row>

      <!-- Información de la empresa - Ahora en diseño vertical -->
      <v-row>
        <v-col cols="12" lg="8" class="mx-auto mb-12">
          <p class="text-body-1 mb-5 main-text text-justify">
            En <strong class="text-gradient">9Core</strong>, nos dedicamos a
            proporcionar soluciones tecnológicas innovadoras y personalizadas
            que ayudan a las empresas a prosperar en la era digital. Nuestro
            enfoque se centra en comprender las necesidades únicas de cada
            cliente y desarrollar estrategias tecnológicas que generen un
            impacto real en su negocio.
          </p>

          <p class="text-body-1 mb-8 main-text text-justify">
            Combinamos experiencia técnica con un profundo conocimiento del
            mercado para ofrecer soluciones que no solo resuelven problemas
            actuales, sino que también preparan a tu empresa para los desafíos
            del futuro.
          </p>
        </v-col>
      </v-row>

      <!-- Cards de Misión/Visión - Ahora una debajo de otra -->
      <v-row>
        <v-col cols="12" lg="8" class="mx-auto mb-10">
          <!-- Card de Misión -->
          <v-card
            class="mission-card mb-10 glass-card"
            rounded="xl"
            elevation="8"
          >
            <v-card-item>
              <div class="pa-4">
                <div class="d-flex align-center mb-4">
                  <v-icon size="32" color="primary" class="me-3"
                    >mdi-rocket-launch</v-icon
                  >
                  <h3 class="text-h5 font-weight-bold card-title primary-text">
                    Nuestra Misión
                  </h3>
                </div>
                <p class="text-body-1 card-text text-justify">
                  "Impulsamos el crecimiento y la competitividad de las
                  organizaciones con soluciones innovadoras, diseñadas a la
                  medida de cada necesidad. Proporcionamos tecnología ágil y
                  escalable que optimiza procesos, generando valor real y
                  sostenible. Nuestro compromiso con la excelencia, la atención
                  personalizada y el acompañamiento continuo garantiza que cada
                  implementación convierta desafíos en oportunidades de éxito."
                </p>
              </div>
            </v-card-item>
          </v-card>

          <!-- Card de Visión -->
          <v-card class="vision-card glass-card" rounded="xl" elevation="8">
            <v-card-item>
              <div class="pa-4">
                <div class="d-flex align-center mb-4">
                  <v-icon size="32" color="tertiary" class="me-3"
                    >mdi-eye</v-icon
                  >
                  <h3 class="text-h5 font-weight-bold card-title tertiary-text">
                    Nuestra Visión
                  </h3>
                </div>
                <p class="text-body-1 card-text text-justify">
                  "Ser referentes en la transformación digital de las
                  organizaciones mediante soluciones innovadoras que generen un
                  impacto real en su crecimiento y competitividad. Buscamos ser
                  reconocidos por nuestra excelencia tecnológica, nuestra
                  capacidad para resolver desafíos complejos y nuestro
                  compromiso con el éxito de cada cliente. Aspiramos a
                  contribuir en el ecosistema digital, creando tecnología que
                  impulse el progreso y deje una huella duradera en la
                  industria."
                </p>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Stats en contenedores - Reordenados en una fila de 4 elementos -->
      <v-row class="stats-row mt-12">
        <v-col cols="12" class="text-center mb-6">
          <h3 class="text-h4 font-weight-bold mb-8">Nuestros Números</h3>
        </v-col>

        <v-col cols="6" sm="6" md="3" class="mb-6">
          <div class="stat-container">
            <div class="stat-icon">
              <v-icon size="32" color="primary">mdi-account-group</v-icon>
            </div>
            <div class="stat-number primary-text">12+</div>
            <div class="stat-label">Clientes satisfechos</div>
          </div>
        </v-col>

        <v-col cols="6" sm="6" md="3" class="mb-6">
          <div class="stat-container">
            <div class="stat-icon">
              <v-icon size="32" color="secondary">mdi-check-circle</v-icon>
            </div>
            <div class="stat-number secondary-text">20+</div>
            <div class="stat-label">Proyectos completados</div>
          </div>
        </v-col>

        <v-col cols="6" sm="6" md="3" class="mb-6">
          <div class="stat-container">
            <div class="stat-icon">
              <v-icon size="32" color="tertiary">mdi-calendar-clock</v-icon>
            </div>
            <div class="stat-number tertiary-text">1+</div>
            <div class="stat-label">Años de experiencia</div>
          </div>
        </v-col>

        <v-col cols="6" sm="6" md="3" class="mb-6">
          <div class="stat-container">
            <div class="stat-icon">
              <v-icon size="32" color="primary">mdi-brain</v-icon>
            </div>
            <div class="stat-number primary-text">5+</div>
            <div class="stat-label">Expertos en tecnología</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
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
/* Estilos para la sección de Sobre Nosotros */
.about-section {
  background-color: #f8f9fa;
  position: relative;
  color: #343a40;
  overflow: hidden;
}

.about-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 10% 20%,
      rgba(79, 70, 229, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(16, 185, 129, 0.05) 0%,
      transparent 50%
    );
  z-index: 0;
}

.text-gradient {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.section-subtitle {
  color: var(--text-muted);
  line-height: 1.6;
}

.custom-divider {
  background: var(--gradient-full);
  border-radius: 4px;
}

/* Estilos para el contenido principal */
.main-heading {
  font-weight: 700;
  line-height: 1.2;
}

.main-text {
  line-height: 1.7;
  font-size: 1.1rem;
}

/* Estilos para estadísticas */
.stats-row {
  margin-top: 3rem;
}

.stat-container {
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  border: 1px solid rgba(31, 25, 25, 0.473);
  transition: all 0.3s ease;
  height: 100%;
}

.stat-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.05);
}

.stat-icon {
  margin-bottom: 16px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
}

/* Estilos para tarjetas de misión y visión */
.mission-vision-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.glass-card {
  background-color: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.mission-card {
  border-left: 6px solid var(--primary-main);
}

.vision-card {
  border-left: 6px solid var(--tertiary-main);
}

.mission-card:hover,
.vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
}

.card-title {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.card-text {
  line-height: 1.7;
  font-size: 1rem;
}

/* Media queries para responsividad */
@media (max-width: 960px) {
  .content-wrapper {
    margin-bottom: 3rem;
  }

  .main-heading {
    font-size: 2rem !important;
  }

  .mission-card,
  .vision-card {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 600px) {
  .stat-container {
    padding: 16px;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
