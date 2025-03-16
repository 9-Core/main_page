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

      <v-row class="d-flex justify-center" >

      <!-- contactanos izquierda -->
        <v-col cols="12" md="4" class="pl-md-8">
          <v-row class="flex-column" no-gutters>
        <!-- Sección de Contacto -->
            <v-col class="mb-4">
              <h3 class="text-h6 font-weight-bold contacto">CONTACTO</h3>
            </v-col>

            <!-- Título principal -->
            <v-col class="mb-6">
              <h1 class="text-h3 font-weight-bold contacto-titulo">¿Hablamos de tu proyecto?</h1>
            </v-col>

            <!-- Párrafo descriptivo -->
            <v-col class="mb-6">
              <p class="text-body-1 w-80 text-grey text-justify font-weight-bold pr-16">
                Estamos listos para ayudarte a convertir tus ideas en
                soluciones tecnológicas innovadoras. Contactanos y
                descubre cómo podemos impulsar tu negocio.
              </p>
            </v-col>
            <!-- Los iconos -->
            <v-col class="mb-4 mt-4">
              <div class="d-flex align-center">
                <div 
                  class="mr-4 d-flex align-center justify-center"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #e4e8ff;
                    border-radius: 30%;
                  "
                >
                  <v-icon color="blue-darken-2">mdi-email-outline</v-icon>
                </div>
                <div class="text-body-1">
                  <div class="text-caption text-grey">Envíanos un correo</div>
                  <div class="text-black-darken text-icon">info@tudominio.com</div>
                </div>
              </div>
            </v-col>
            <v-col class="mb-4 mt-4">
              <div class="d-flex align-center">
                <div 
                  class="mr-4 d-flex align-center justify-center"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: #d9ffd94d;
                    border-radius: 30%;
                  "
                >
                  <v-icon color="green-darken-1">mdi-phone-outline</v-icon>
                </div>
                <div class="text-body-1">
                  <div class="text-caption text-grey">Llámanos</div>
                  <div class="text-black-darken text-icon">+1 (555) 123-4567</div>
                </div>
              </div>
            </v-col>
            <v-col class="mb-4 mt-4">
              <div class="d-flex align-center">
                <div 
                  class="mr-4 d-flex align-center justify-center"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 183, 77, 0.2);
                    border-radius: 30%;
                  "
                >
                  <v-icon color="orange-darken-2">mdi-map-marker-outline</v-icon>
                </div>
                <div class="text-body-1">
                  <div class="text-caption text-grey">Visítanos</div>
                  <div class="text-black-darken text-icon">Torre Tech, Piso 8</div>
                </div>
              </div>
            </v-col>
            <v-col class="mb-4 mt-4">
              <div class="mt-10">
              <h4 class="text-subtitle-1 text-icon font-weight-bold mb-3">Síguenos en</h4>
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
            </v-col>
          </v-row>
        </v-col>
<!-- contactanos derecha -->       
        <v-col cols="12" md="4" class="pr-md-8 elevation-3 elevation-md-3 pa-6 rounded-lg" style="border-radius: 8px; transition: all 0.3s;">
          <h3 class="text-h5 mb-5 contact-heading">Envíanos un mensaje</h3>

          <v-form ref="formRef" v-model="valid" @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.name"
                  label="Nombre"
                  :rules="nameRules"
                  variant="outlined"
                  color="#4caf50"
                  class="input-field"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.email"
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
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="formData.phone"
                  label="Telefono"
                  :rules="phoneRules"
                  variant="outlined"
                  color="#4caf50"
                  class="input-field"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  v-model="formData.service"
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
                  v-model="formData.message"
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

            <v-row class="d-flex justify-left">
              <v-col cols="6">
                <v-btn
                  type="submit"
                  size="large"
                  class="gradient-btn"
                  block
                  :loading="loading"
                  append-icon="$paper-plane"
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
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref,  nextTick } from "vue";

const valid = ref(false);
const loading = ref(false);
const formData  = ref({
  name: "",
  email: "",
  service: "",
  message: "",
  phone: ""
});

const formRef = ref(null);

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

const phoneRules = [
  (v) => !!v || "El número de teléfono es obligatorio",
  (v) => /^[0-9]+$/.test(v) || "El número de teléfono debe contener solo dígitos",
  (v) => v.length >= 9 || "El número de teléfono debe tener al menos 9 dígitos",
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
  { icon: "mdi-linkedin", url: "#" },
  { icon: "mdi-instagram", url: "#" },
];

const submitForm = async () => {
  if (!valid.value) return;

  loading.value = true;

  try {
    // Crear el contenido HTML del correo

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="color: #ff7e00;">Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${formData.value.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.value.email}">${
      formData.value.email
    }</a></p>
        ${
          formData.value.service
            ? `<p><strong>Servicio de interés:</strong> ${formData.value.service}</p>`
            : ""
        }
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 15px;">
          <h3 style="margin-top: 0; color: #4caf50;">Mensaje:</h3>
          <p style="white-space: pre-line;">${formData.value.message}</p>
        </div>
      </div>
    `;

    // Enviar solicitud a la API
    const { data, error } = await useFetch("/api/mail/send", {
      method: "POST",
      body: {
        to: formData.value.email, // Correo de destino
        subject: `Formulario de contacto - ${
          formData.value.service || "Consulta general"
        }`,
        text: `Mensaje de ${formData.value.name} (${formData.value.email}): ${formData.value.message}`,
        html: htmlContent,
        from: `Sitio Web 9core noreplyoso.o7@gmail.com`,
        replyTo: formData.value.email,
      },
    });

    if (error.value) {
      throw new Error(error.value.message || "Error al enviar el mensaje");
    }
    // Mostrar mensaje de éxito
    snackbar.value = {
      show: true,
      text: "¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.",
      color: "#4caf50",
    };

    formRef.value.reset();
    await new Promise(resolve => setTimeout(resolve, 0));
    formRef.value.resetValidation();
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);

    // Mostrar mensaje de error
    snackbar.value = {
      show: true,
      text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
      color: "#f44336", // Color rojo para error
    };
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Estilos específicos para la sección de contacto */
.contact-section {
  background-color: #ffffff;
  position: relative;
}

.contacto-titulo{
  color: #000000;
}

.contacto{
  color: blue;
}

.text-icon{
  color: #000000;
}

.input-field{
  color: #000000;
}
/*
.section-title {
  background: linear-gradient(135deg, #ff7e00, #ffb347, #8bc34a, #4caf50);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}
*/
.section-subtitle {
  color: #000000 !important;
}

.contact-heading {
  color: #000000;
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
  color: rgb(0, 0, 0);
}

.contact-text {
  color: rgba(0, 0, 0, 0.7);
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