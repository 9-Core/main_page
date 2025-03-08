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
              <v-btn
                color="white"
                size="x-large"
                class="text-primary-dark mr-4"
              >
                <v-icon start icon="mdi-rocket-launch"></v-icon>
                Comenzar Ahora
              </v-btn>
              <v-btn variant="outlined" color="white" size="x-large">
                <v-icon start icon="mdi-information"></v-icon>
                Conoce Más
              </v-btn>
            </div>
          </div>
        </v-slide-x-transition>
      </v-col>
      <v-col cols="12" md="6" class="d-none d-md-flex justify-center">
        <v-img
          src="/hero-image.svg"
          max-width="600"
          class="hero-animation"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No se requiere lógica adicional para este componente
</script>

<style scoped>
/* Hero Section */
.hero {
  background-color: #030f1f !important;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-title {
  color: white !important;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9) !important;
}

.hero-animation {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
