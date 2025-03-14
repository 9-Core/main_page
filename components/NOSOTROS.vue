<!-- components/AboutUsSection.vue -->
<template>
  <v-container fluid class="about-section py-16">
    <v-container>
      <v-row class="mb-16">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 mb-4 section-title">Sobre Nosotros</h2>
          <p class="text-subtitle-1 section-subtitle">
            Conoce quiénes somos y nuestra misión
          </p>
        </v-col>
      </v-row>

      <!-- Sección principal - Resumen y Stats -->
      <v-row>
        <!-- Contenido Izquierdo -->
        <v-col cols="12" md="6" class="pe-md-8">
          <div class="content-wrapper">
            <h3 class="text-h3 mb-6 main-heading">
              Impulsando el Éxito de Nuestros Clientes
            </h3>
            <p class="text-body-1 mb-5 main-text">
              En 9Core, nos dedicamos a proporcionar soluciones tecnológicas
              innovadoras y personalizadas que ayudan a las empresas a prosperar
              en la era digital. Nuestro enfoque se centra en comprender las
              necesidades únicas de cada cliente y desarrollar estrategias
              tecnológicas que generen un impacto real en su negocio.
            </p>

            <!-- Stats en fila -->
            <v-row class="stats-row mt-12">
              <v-col cols="6" md="3">
                <div class="stat-item">
                  <div class="stat-number primary-text">200+</div>
                  <div class="stat-label">Clientes satisfechos</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="stat-item">
                  <div class="stat-number primary-text">500+</div>
                  <div class="stat-label">Proyectos completados</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="stat-item">
                  <div class="stat-number primary-text">15+</div>
                  <div class="stat-label">Años de experiencia</div>
                </div>
              </v-col>
              <v-col cols="6" md="3">
                <div class="stat-item">
                  <div class="stat-number primary-text">50+</div>
                  <div class="stat-label">Expertos en tecnología</div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <!-- Cards de Misión/Visión a la derecha -->
        <v-col cols="12" md="6">
          <div class="mission-vision-wrapper">
            <!-- Card de Misión -->
            <v-card class="mission-card mb-6">
              <v-card-item>
                <h3 class="text-h5 mb-3 card-title primary-text">
                  Nuestra Misión
                </h3>
                <p class="text-body-1 card-text">
                  "Impulsamos el crecimiento y la competitividad de las
                  organizaciones con soluciones innovadoras, diseñadas a la
                  medida de cada necesidad. Proporcionamos tecnología ágil y
                  escalable que optimiza procesos, generando valor real y
                  sostenible. Nuestro compromiso con la excelencia, la atención
                  personalizada y el acompañamiento continuo garantiza que cada
                  implementación convierta desafíos en oportunidades de éxito."
                </p>
              </v-card-item>
            </v-card>

            <!-- Card de Visión -->
            <v-card class="vision-card">
              <v-card-item>
                <h3 class="text-h5 mb-3 card-title tertiary-text">
                  Nuestra Visión
                </h3>
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
  background-color: var(--background-dark);
  position: relative;
  color: var(--text-light);
}

.section-title {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.section-subtitle {
  color: var(--text-muted);
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

.stat-item {
  text-align: left;
  margin-bottom: 1.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Estilos para tarjetas de misión y visión */
.mission-vision-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.mission-card,
.vision-card {
  background-color: var(--neutral-light) !important;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  border-left: 6px solid transparent;
}

.mission-card {
  border-left-color: var(--primary-main);
}

.vision-card {
  border-left-color: var(--tertiary-main);
}

.card-title {
  font-weight: 600;
}

.card-text {
  color: var(--neutral-medium);
  line-height: 1.6;
}

/* Estilos para la sección de hitos */
.custom-divider {
  background: linear-gradient(
    to right,
    transparent,
    var(--primary-main),
    var(--tertiary-main),
    transparent
  );
  height: 1px;
  border: none;
  opacity: 0.3;
}

.milestone-title {
  color: var(--text-light);
  font-weight: 600;
}

.milestone-desc {
  color: var(--text-muted);
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

/* Media queries para responsividad */
@media (max-width: 960px) {
  .content-wrapper {
    margin-bottom: 3rem;
  }

  .stat-item {
    text-align: center;
  }
}
</style>
