<!-- components/HeroMinimal.vue -->
<template>
  <v-container fluid class="hero-minimal pa-0">
    <div class="animated-bg"></div>
    
    <v-row class="align-center justify-center ma-0" style="min-height: 100vh">
      <v-col cols="12" md="10" lg="8" class="text-center">
        <div class="logo-animation mb-8">
          <v-img
            src="../public/image.png"
            max-width="180"
            class="mx-auto hero-logo"
            alt="9-CORE Logo"
          ></v-img>
        </div>

        <h1 class="text-h1 font-weight-black mb-6 glow-text">
          <span class="core-text">9</span>
          <span class="core-text">{{ displayedWord }}</span>
          <span class="blink-cursor">|</span>
        </h1>

        <p class="text-h5 mb-12 hero-tagline slide-up-fade">
          Transformamos ideas en <span class="typewriter">realidad digital</span>
        </p>

        <div class="button-group slide-up-fade">
          <v-btn
            size="x-large"
            class="gradient-btn px-8 py-3 me-4"
            min-width="200"
            rounded="xl"
            elevation="8"
          >
            CONÓCENOS
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
          
          <v-btn
            size="x-large"
            variant="outlined"
            class="outline-btn px-8 py-3"
            min-width="200"
            rounded="xl"
          >
            SERVICIOS
          </v-btn>
        </div>
        
        <div class="scroll-indicator mt-16">
          <v-icon class="scroll-icon pulse">mdi-chevron-down</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// No se requiere lógica adicional para este componente
</script>


<script>
export default {
  data() {
    return {
      words: ['CORE', 'COMPROMISO', 'CONTROL', 'CREATIVIDAD', 'CONFIANZA', 'COMUNIDAD', 'CONEXIÓN', 'CLOUD', 'CAPACITACIÓN', 'COMUNICACIÓN', 'CULTURA', 'CIBERSEGURIDAD', 'CLOUD', 'CÓDIGO', 'CONECTIVIDAD', 'CUMPLIMIENTO', 'COSTOS'],
      currentWord: '', // Palabra completa
      displayedWord: '', // Parte mostrada
      wordIndex: 0,
      typingSpeed: 150, // Velocidad de tipeo (en milisegundos)
      deletingSpeed: 75, // Velocidad de borrado
    };
  },
  mounted() {
    this.typeWord(); // Inicia el efecto de tipeo al montar el componente
  },
  methods: {
    async typeWord() {
      this.currentWord = this.words[this.wordIndex];
      for (let i = 0; i <= this.currentWord.length; i++) {
        this.displayedWord = this.currentWord.substring(0, i);
        await this.delay(this.typingSpeed);
      }
      await this.delay(1000); // Espera un segundo antes de borrar
      this.deleteWord();
    },
    async deleteWord() {
      for (let i = this.currentWord.length; i >= 0; i--) {
        this.displayedWord = this.currentWord.substring(0, i);
        await this.delay(this.deletingSpeed);
      }
      this.wordIndex = (this.wordIndex + 1) % this.words.length; // Siguiente palabra
      this.typeWord(); // Inicia el tipeo de la siguiente palabra
    },
    delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
  },
};
</script>

<style scoped>
.hero-minimal {
  position: relative;
  background-color: var(--neutral-darkest);
  overflow: hidden;
  z-index: 1;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(79, 70, 229, 0.15), transparent 70%),
    radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1), transparent 70%);
  z-index: -1;
  animation: pulse-bg 10s infinite alternate;
}

@keyframes pulse-bg {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.logo-animation {
  position: relative;
  z-index: 2;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-logo {
  transition: all 0.8s ease;
  filter: drop-shadow(0 0 10px rgba(79, 70, 229, 0.3));
}

.core-text {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.1em;
  font-weight: 900;
  color: var(--neutral-light);
  position: relative;
}

.blink-cursor {
  color: var(--primary-main);
  font-weight: bold;
  margin-left: 5px;
  animation: blink 1.2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-tagline {
  color: var(--neutral-medium);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: 0.5px;
}

.typewriter {
  color: var(--neutral-light);
  /* border-right: 3px solid var(--primary-main);
  padding-right: 5px;
  animation: typing 3.5s steps(40) infinite; */
}

@keyframes typing {
  0%, 100% { width: 0; }
  50% { width: 100%; }
}

.glow-text {
  text-shadow: 0 0 20px rgba(79, 70, 229, 0.2);
}

.gradient-btn {
  background: var(--gradient-full);
  color: white !important;
  letter-spacing: 1px;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.3);
  text-transform: none;
  position: relative;
  overflow: hidden;
}

.gradient-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.gradient-btn:hover::after {
  transform: translateX(100%);
}

.gradient-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(79, 70, 229, 0.5);
}

.outline-btn {
  border: 2px solid var(--primary-light) !important;
  color: var(--primary-light) !important;
  letter-spacing: 1px;
  font-weight: 700;
  transition: all 0.3s ease;
  text-transform: none;
}

.outline-btn:hover {
  background-color: rgba(79, 70, 229, 0.1) !important;
  transform: translateY(-3px);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-icon {
  color: var(--primary-light);
  font-size: 32px;
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(10px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up-fade {
  animation: slideUpFade 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideUpFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.button-group {
  animation: slideUpFade 1s ease-out 0.3s forwards;
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 600px) {
  h1 {
    font-size: 2.5rem !important;
  }

  .hero-tagline {
    font-size: 1.1rem !important;
    padding: 0 16px;
  }
  
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .gradient-btn, .outline-btn {
    width: 100%;
    margin: 8px 0;
  }
}
</style>