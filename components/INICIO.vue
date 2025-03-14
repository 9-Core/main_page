<!-- components/HeroMinimal.vue -->
<template>
  <v-container fluid class="hero-minimal pa-0">
    <v-row class="align-center justify-center ma-0" style="min-height: 100vh">
      <v-col cols="12" class="text-center">
        <div class="logo-container mb-12">
          <v-img
            src="/logo.png"
            max-width="300"
            class="mx-auto hero-logo"
            alt="9-CORE Logo"
          ></v-img>
        </div>

        <h1 class="text-h2 font-weight-bold mb-8 company-name primary-text">
          CORE<span class="vertical-bar">|</span>
        </h1>

        <p class="text-h5 mb-12 hero-tagline">
          Nuestro compromiso es ofrecer soluciones innovadoras
        </p>

        <v-btn
          size="x-large"
          class="gradient-btn px-8 py-3"
          min-width="200"
          rounded="pill"
        >
          CONÓCENOS
        </v-btn>
      </v-col>
    </v-row>

    <!-- Degradado de fondo sutil -->
    <div class="background-overlay"></div>
  </v-container>
</template>

<script setup>
// No se requiere lógica adicional para este componente
</script>

<style scoped>
.hero-minimal {
  position: relative;
  background-color: var(--neutral-light);
  overflow: hidden;
}

.company-name {
  letter-spacing: 2px;
  font-size: 4rem !important;
  position: relative;
  display: inline-block;
}

.vertical-bar {
  color: var(--primary-main);
  font-weight: bold;
  margin-left: 5px;
}

.hero-tagline {
  color: var(--neutral-medium);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

.logo-container {
  position: relative;
  z-index: 2;
}

.hero-logo {
  transition: all 0.8s ease;
}

.hero-logo:hover {
  transform: rotate(10deg) scale(1.05);
}

.gradient-btn {
  background: var(--gradient-full);
  color: white !important;
  letter-spacing: 1px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(61, 90, 241, 0.25);
}

.gradient-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(61, 90, 241, 0.35);
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 30% 70%,
      rgba(var(--primary-main-rgb), 0.05),
      transparent 60%
    ),
    radial-gradient(
      circle at 70% 30%,
      rgba(var(--tertiary-main-rgb), 0.05),
      transparent 60%
    );
  z-index: 1;
  pointer-events: none;
}

@media (max-width: 600px) {
  .company-name {
    font-size: 3rem !important;
  }

  .hero-tagline {
    font-size: 1.25rem !important;
    padding: 0 16px;
  }
}
</style>
