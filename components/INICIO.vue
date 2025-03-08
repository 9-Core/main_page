<!-- components/HeroSection.vue -->
<template>
  <v-container fluid class="hero pa-0">
    <v-row class="align-center ma-0" style="min-height: 90vh">
      <v-col cols="12" md="6" class="px-8">
        <v-slide-x-transition appear>
          <div>
            <h1 class="text-h2 font-weight-bold mb-6 hero-title">
              Innovación Digital para tu Empresa
            </h1>
            <p class="text-h5 mb-8 hero-subtitle">
              Transformamos ideas en soluciones tecnológicas que impulsan el
              crecimiento de tu negocio
            </p>
            <div class="d-flex flex-wrap gap-4">
              <v-btn size="x-large" class="primary-btn mr-4">
                <v-icon start icon="mdi-rocket-launch"></v-icon>
                Comenzar Ahora
              </v-btn>
              <v-btn size="x-large" class="secondary-btn">
                <v-icon start icon="mdi-information"></v-icon>
                Conoce Más
              </v-btn>
            </div>
          </div>
        </v-slide-x-transition>
      </v-col>
      <v-col cols="12" md="6" class="d-none d-md-flex justify-center">
        <div class="hero-image-container">
          <v-img src="/logo.png" max-width="400" class="hero-animation"></v-img>
        </div>
      </v-col>
    </v-row>

    <!-- Partículas/elementos decorativos con los colores del logo -->
    <div class="decorative-element orange-element"></div>
    <div class="decorative-element green-element"></div>
  </v-container>
</template>

<script setup>
// No se requiere lógica adicional para este componente
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: var(--background-dark) !important;
  color: var(--text-light);
  position: relative;
  overflow: hidden;
}

.hero-title {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.hero-subtitle {
  color: var(--text-light) !important;
}

.hero-image-container {
  position: relative;
  z-index: 2;
}

.hero-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Elementos decorativos */
.decorative-element {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  z-index: 1;
}

.orange-element {
  background-color: var(--orange-primary);
  width: 300px;
  height: 300px;
  top: -100px;
  right: 10%;
  animation: pulse-orange 8s ease-in-out infinite alternate;
}

.green-element {
  background-color: var(--green-primary);
  width: 250px;
  height: 250px;
  bottom: -50px;
  left: 5%;
  animation: pulse-green 10s ease-in-out infinite alternate;
}

@keyframes pulse-orange {
  0% {
    transform: scale(0.8) translate(0, 0);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.2) translate(50px, 30px);
    opacity: 0.5;
  }
}

@keyframes pulse-green {
  0% {
    transform: scale(0.9) translate(0, 0);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.3) translate(-30px, 50px);
    opacity: 0.5;
  }
}
</style>
