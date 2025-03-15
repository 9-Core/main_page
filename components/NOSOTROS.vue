<!-- components/AboutUsSection.vue -->
<template>
  <v-container fluid class="about-section py-16">
    <div class="about-bg-pattern"></div>
    
    <v-container>
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <span class="overline text-gradient d-block mb-2">QUIÉNES SOMOS</span>
          <h2 class="text-h3 mb-4 font-weight-black white-text">Sobre Nosotros</h2>
          <v-divider class="mx-auto custom-divider mb-8" width="100" thickness="4"></v-divider>
          <p class="text-subtitle-1 section-subtitle mx-auto" style="max-width: 700px">
            Un equipo apasionado por transformar el futuro digital
          </p>
        </v-col>
      </v-row>

      <!-- Sección principal - Resumen y Stats -->
      <v-row>
        <!-- Contenido Izquierdo -->
        <v-col cols="12" md="6" class="pe-md-12">
          <div class="content-wrapper">
            <h3 class="text-h3 mb-6 main-heading font-weight-black">
              Impulsando el Éxito de Nuestros <span class="text-gradient">Clientes</span>
            </h3>
            
            <p class="text-body-1 mb-5 main-text">
              En <strong class="text-gradient">9Core</strong>, nos dedicamos a proporcionar soluciones tecnológicas
              innovadoras y personalizadas que ayudan a las empresas a prosperar
              en la era digital. Nuestro enfoque se centra en comprender las
              necesidades únicas de cada cliente y desarrollar estrategias
              tecnológicas que generen un impacto real en su negocio.
            </p>
            
            <p class="text-body-1 mb-8 main-text">
              Combinamos experiencia técnica con un profundo conocimiento del mercado para 
              ofrecer soluciones que no solo resuelven problemas actuales, sino que también
              preparan a tu empresa para los desafíos del futuro.
            </p>

            <!-- Stats en contenedores con estilo -->
            <v-row class="stats-row mt-12 gx-3">
              <v-col cols="6" md="6" class="mb-6">
                <div class="stat-container">
                  <div class="stat-icon">
                    <v-icon size="32" color="primary">mdi-account-group</v-icon>
                  </div>
                  <div class="stat-number primary-text">200+</div>
                  <div class="stat-label">Clientes satisfechos</div>
                </div>
              </v-col>
              
              <v-col cols="6" md="6" class="mb-6">
                <div class="stat-container">
                  <div class="stat-icon">
                    <v-icon size="32" color="secondary">mdi-check-circle</v-icon>
                  </div>
                  <div class="stat-number secondary-text">500+</div>
                  <div class="stat-label">Proyectos completados</div>
                </div>
              </v-col>
              
              <!-- <v-col cols="6" md="6" class="mb-6">
                <div class="stat-container">
                  <div class="stat-icon">
                    <v-icon size="32" color="tertiary">mdi-calendar-clock</v-icon>
                  </div>
                  <div class="stat-number tertiary-text">15+</div>
                  <div class="stat-label">Años de experiencia</div>
                </div>
              </v-col>
              
              <v-col cols="6" md="6" class="mb-6">
                <div class="stat-container">
                  <div class="stat-icon">
                    <v-icon size="32" color="primary">mdi-brain</v-icon>
                  </div>
                  <div class="stat-number primary-text">50+</div>
                  <div class="stat-label">Expertos en tecnología</div>
                </div>
              </v-col> -->

              
            </v-row>
          </div>
        </v-col>

        <!-- Cards de Misión/Visión a la derecha -->
        <v-col cols="12" md="6">
          <div class="mission-vision-wrapper">
            <!-- Card de Misión -->
            <v-card class="mission-card mb-6 glass-card" rounded="xl" elevation="8">
              <v-card-item>
                <div class="pa-4">
                  <div class="d-flex align-center mb-4">
                    <v-icon size="32" color="primary" class="me-3">mdi-rocket-launch</v-icon>
                    <h3 class="text-h5 font-weight-bold card-title primary-text">
                      Nuestra Misión
                    </h3>
                  </div>
                  <p class="text-body-1 card-text">
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
                    <v-icon size="32" color="tertiary" class="me-3">mdi-eye</v-icon>
                    <h3 class="text-h5 font-weight-bold card-title tertiary-text">
                      Nuestra Visión
                    </h3>
                  </div>
                  <p class="text-body-1 card-text">
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
  background-color: var(--neutral-darkest);
  position: relative;
  color: var(--text-light);
  overflow: hidden;
}

.about-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
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
  color: var(--text-light);
  font-weight: 700;
  line-height: 1.2;
}

.main-text {
  color: var(--text-muted);
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
  border: 1px solid rgba(255, 255, 255, 0.05);
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
  color: var(--text-muted);
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

.mission-card:hover, .vision-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
}

.card-title {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.card-text {
  color: var(--text-muted);
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
  
  .mission-card, .vision-card {
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