<!-- components/ContactSection.vue -->
<template>
  <v-container fluid class="contact-section py-16">
    <v-container>
      <v-row class="mb-8">
        <v-col cols="12" class="text-center">
          <h2 class="text-h3 mb-4 section-title">Contacto</h2>
          <p class="text-subtitle-1 section-subtitle">
            Estamos listos para impulsar tu próximo proyecto
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="pr-md-8">
          <h3 class="text-h5 mb-5 contact-heading">Envíanos un mensaje</h3>

          <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.name"
                  label="Nombre"
                  :rules="nameRules"
                  variant="outlined"
                  color="#ff7e00"
                  class="input-field"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  :rules="emailRules"
                  variant="outlined"
                  color="#4caf50"
                  class="input-field"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="form.service"
                  :items="serviceOptions"
                  label="Servicio de interés"
                  variant="outlined"
                  color="#ff7e00"
                  class="input-field"
                ></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="Mensaje"
                  :rules="messageRules"
                  variant="outlined"
                  color="#4caf50"
                  class="input-field"
                  rows="5"
                  required
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-btn
                  type="submit"
                  size="large"
                  class="gradient-btn"
                  block
                  :loading="loading"
                >
                  <v-icon start>mdi-send</v-icon>
                  Enviar Mensaje
                </v-btn>
              </v-col>
            </v-row>
          </v-form>

          <v-snackbar
            v-model="snackbar.show"
            :color="snackbar.color"
            :timeout="3000"
          >
            {{ snackbar.text }}
            <template v-slot:actions>
              <v-btn variant="text" @click="snackbar.show = false">
                Cerrar
              </v-btn>
            </template>
          </v-snackbar>
        </v-col>

        <v-col cols="12" md="6" class="pl-md-8">
          <div class="contact-info-container">
            <h3 class="text-h5 mb-5 contact-heading">
              Información de Contacto
            </h3>

            <div class="contact-info-item d-flex align-center mb-6">
              <div class="icon-wrapper orange-bg">
                <v-icon icon="mdi-map-marker" class="contact-icon"></v-icon>
              </div>
              <div class="ml-4">
                <h4 class="text-subtitle-1 font-weight-bold mb-1">
                  Visítanos en
                </h4>
                <p class="text-body-2 contact-text">
                  123 Calle Principal, Ciudad, CP 12345
                </p>
              </div>
            </div>

            <div class="contact-info-item d-flex align-center mb-6">
              <div class="icon-wrapper green-bg">
                <v-icon icon="mdi-phone" class="contact-icon"></v-icon>
              </div>
              <div class="ml-4">
                <h4 class="text-subtitle-1 font-weight-bold mb-1">Llámanos</h4>
                <p class="text-body-2 contact-text">+34 123 456 789</p>
              </div>
            </div>

            <div class="contact-info-item d-flex align-center mb-6">
              <div class="icon-wrapper orange-bg">
                <v-icon icon="mdi-email" class="contact-icon"></v-icon>
              </div>
              <div class="ml-4">
                <h4 class="text-subtitle-1 font-weight-bold mb-1">
                  Escríbenos
                </h4>
                <p class="text-body-2 contact-text">contacto@9core.com</p>
              </div>
            </div>

            <div class="contact-info-item d-flex align-center">
              <div class="icon-wrapper green-bg">
                <v-icon icon="mdi-clock" class="contact-icon"></v-icon>
              </div>
              <div class="ml-4">
                <h4 class="text-subtitle-1 font-weight-bold mb-1">Horario</h4>
                <p class="text-body-2 contact-text">Lun - Vie: 9:00 - 18:00</p>
              </div>
            </div>

            <div class="mt-10">
              <h4 class="text-subtitle-1 font-weight-bold mb-3">Síguenos en</h4>
              <div class="d-flex gap-3">
                <v-btn
                  v-for="(social, i) in socialLinks"
                  :key="i"
                  :href="social.url"
                  icon
                  variant="text"
                  class="social-btn"
                  :class="i % 2 === 0 ? 'orange-text' : 'green-text'"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-16">
        <v-col cols="12">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              class="map-iframe"
            ></iframe>
            <div class="map-overlay"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(false);
const loading = ref(false);
const form = ref({
  name: "",
  email: "",
  service: "",
  message: "",
});

const snackbar = ref({
  show: false,
  text: "",
  color: "",
});

const nameRules = [
  (v) => !!v || "El nombre es obligatorio",
  (v) => v.length >= 3 || "El nombre debe tener al menos 3 caracteres",
];

const emailRules = [
  (v) => !!v || "El email es obligatorio",
  (v) => /.+@.+\..+/.test(v) || "El email debe ser válido",
];

const messageRules = [
  (v) => !!v || "El mensaje es obligatorio",
  (v) => v.length >= 10 || "El mensaje debe tener al menos 10 caracteres",
];

const serviceOptions = [
  "Consultoría IT",
  "Desarrollo Software",
  "Cloud Solutions",
  "Ciberseguridad",
  "Inteligencia Artificial",
  "Analytics",
];

const socialLinks = [
  { icon: "mdi-facebook", url: "#" },
  { icon: "mdi-twitter", url: "#" },
  { icon: "mdi-linkedin", url: "#" },
  { icon: "mdi-instagram", url: "#" },
];

const submitForm = async () => {
  if (!valid.value) return;

  loading.value = true;

  // Simulación de envío de formulario
  await new Promise((resolve) => setTimeout(resolve, 1500));

  loading.value = false;
  snackbar.value = {
    show: true,
    text: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
    color: "#4caf50",
  };

  // Resetear el formulario
  form.value = {
    name: "",
    email: "",
    service: "",
    message: "",
  };
};
</script>

<style scoped>
/* Estilos específicos para la sección de contacto */
.contact-section {
  background-color: #121212;
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

.contact-heading {
  color: #ffffff;
  font-weight: 600;
  position: relative;
  padding-bottom: 15px;
}

.contact-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #ff7e00, #4caf50);
}

.input-field {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.gradient-btn {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  color: white !important;
  height: 54px;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.gradient-btn:hover {
  box-shadow: 0 5px 15px rgba(255, 126, 0, 0.4);
  transform: translateY(-3px);
}

.contact-info-container {
  background-color: #1e1e1e;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  height: 100%;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.orange-bg {
  background-color: rgba(255, 126, 0, 0.15);
}

.green-bg {
  background-color: rgba(76, 175, 80, 0.15);
}

.contact-icon {
  color: white;
}

.contact-text {
  color: rgba(255, 255, 255, 0.7);
}

.orange-text {
  color: #ff7e00 !important;
}

.green-text {
  color: #4caf50 !important;
}

.map-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.map-iframe {
  display: block;
  filter: grayscale(0.8) contrast(1.2);
  border-radius: 12px;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 126, 0, 0.1),
    rgba(76, 175, 80, 0.1)
  );
  pointer-events: none;
  border-radius: 12px;
}

.social-btn {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-5px);
}

/* Estilos responsivos */
@media (max-width: 960px) {
  .pl-md-8,
  .pr-md-8 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  .contact-info-container {
    margin-top: 40px;
  }
}
</style>
