<template>
  <v-container fluid class="contact-section py-16">
    <v-container>
      <v-row class="d-flex justify-center">
        <!-- Información de contacto - Izquierda -->
        <v-col cols="12" md="6" class="pe-md-6">
          <h3 class="text-h3 mb-6 main-heading font-weight-black">
            ¿Hablamos de tu <span class="text-gradient">Proyecto</span>?
          </h3>

          <p class="text-body-1 mb-5">
            Estamos listos para ayudarte a convertir tus ideas en soluciones
            tecnológicas innovadoras. Contáctanos y descubre cómo podemos
            impulsar tu negocio.
          </p>

          <!-- Información de contacto -->
          <div class="mt-8">
            <!-- Email -->
            <div class="contact-item mb-6 d-flex align-center">
              <div class="contact-icon-wrapper primary-bg">
                <v-icon size="22" color="primary">mdi-email-outline</v-icon>
              </div>
              <div class="ms-4">
                <div class="contact-label">Envíanos un correo</div>
                <div class="contact-value">contacto@9core.cl</div>
              </div>
            </div>

            <!-- Teléfono -->
            <div class="contact-item mb-6 d-flex align-center">
              <div class="contact-icon-wrapper secondary-bg">
                <v-icon size="22" color="secondary">mdi-phone-outline</v-icon>
              </div>
              <div class="ms-4">
                <div class="contact-label">Llámanos</div>
                <div class="contact-value">+56990829776</div>
              </div>
            </div>

            <!-- Ubicación -->
            <div class="contact-item mb-6 d-flex align-center">
              <div class="contact-icon-wrapper tertiary-bg">
                <v-icon size="22" color="tertiary"
                  >mdi-map-marker-outline</v-icon
                >
              </div>
              <div class="ms-4">
                <div class="contact-label">Visítanos</div>
                <div class="contact-value">Torre Tech, Piso 8</div>
              </div>
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="mt-10">
            <h4 class="text-subtitle-1 font-weight-bold mb-3">Síguenos en</h4>
            <div class="d-flex">
              <v-btn
                v-for="(social, i) in socialLinks"
                :key="i"
                :href="social.url"
                icon
                variant="outlined"
                size="large"
                class="social-btn me-2"
                :class="i % 2 === 0 ? 'primary-text' : 'secondary-text'"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <!-- Formulario de contacto - Derecha -->
        <v-col cols="12" md="6">
          <v-card class="contact-form-card" rounded="lg" elevation="3">
            <v-card-item>
              <div class="pa-4">
                <div class="d-flex align-center mb-6">
                  <v-icon size="28" color="primary" class="me-3"
                    >mdi-message-text</v-icon
                  >
                  <h3 class="text-h5 font-weight-bold primary-text">
                    Envíanos un mensaje
                  </h3>
                </div>

                <v-form
                  ref="formRef"
                  v-model="valid"
                  @submit.prevent="submitForm"
                >
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.name"
                        label="Nombre"
                        :rules="nameRules"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.email"
                        label="Email"
                        :rules="emailRules"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.phone"
                        label="Teléfono"
                        :rules="phoneRules"
                        variant="outlined"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-select
                        v-model="formData.service"
                        :items="serviceOptions"
                        label="Servicio de interés"
                        variant="outlined"
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="formData.message"
                        label="Mensaje"
                        :rules="messageRules"
                        variant="outlined"
                        rows="4"
                        required
                      ></v-textarea>
                    </v-col>

                    <v-col cols="12">
                      <v-btn
                        type="submit"
                        size="large"
                        class="gradient-btn"
                        :loading="loading"
                        block
                      >
                        <v-icon start>mdi-send</v-icon>
                        Enviar Mensaje
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000">
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar.show = false"> Cerrar </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const valid = ref(false);
const loading = ref(false);
const formData = ref({
  name: "",
  email: "",
  service: "",
  message: "",
  phone: "",
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
  (v) =>
    /^[0-9]+$/.test(v) || "El número de teléfono debe contener solo dígitos",
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
  //{ icon: "mdi-twitter", url: "#" },
];

const submitForm = async () => {
  if (!valid.value) return;
  loading.value = true;

  try {
    // Enviar solicitud a la API con los datos del formulario
    const { data, error } = await useFetch("/api/send", {
      method: "POST",
      body: {
        // Datos del formulario
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        service: formData.value.service,
        message: formData.value.message,

        // Configuración adicional
        to: "info@tudominio.com", // Email de la empresa (reemplazar con el correo real)
        from: "Sitio Web 9Core <jamenesesrojas@gmail.com>",
      },
    });

    if (error.value) {
      throw new Error(error.value.message || "Error al enviar el mensaje");
    }

    if (!data.value.success) {
      throw new Error(data.value.statusMessage || "Error al enviar el mensaje");
    }

    // Mostrar mensaje de éxito
    snackbar.value = {
      show: true,
      text: "¡Mensaje enviado con éxito! Te hemos enviado una confirmación por correo electrónico.",
      color: "success",
    };

    // Resetear el formulario
    formRef.value.reset();
    setTimeout(() => {
      formRef.value.resetValidation();
    }, 0);
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);

    // Mostrar mensaje de error
    snackbar.value = {
      show: true,
      text: "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.",
      color: "error",
    };
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Estilos para la sección de contacto */
.contact-section {
  background-color: #f8f9fa;
  position: relative;
  color: #343a40;
  overflow: hidden;
}

.text-gradient {
  background: var(--gradient-full);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent !important;
  font-weight: bold;
}

.section-subtitle {
  color: #6c757d;
  line-height: 1.6;
}

.custom-divider {
  background: linear-gradient(to right, #4361ee, #3a86ff);
  border-radius: 4px;
}

.contact-icon-wrapper {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.primary-bg {
  border: 1px solid rgba(67, 97, 238, 0.2);
  background-color: rgba(67, 97, 238, 0.05);
}

.secondary-bg {
  border: 1px solid rgba(58, 134, 255, 0.2);
  background-color: rgba(58, 134, 255, 0.05);
}

.tertiary-bg {
  border: 1px solid rgba(76, 201, 240, 0.2);
  background-color: rgba(76, 201, 240, 0.05);
}

.contact-label {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.contact-value {
  color: #343a40;
  font-size: 1.1rem;
  font-weight: 500;
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.social-btn {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  margin-right: 8px;
  width: 42px;
  height: 42px;
}

.social-btn:hover {
  transform: translateY(-5px);
  background-color: rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.contact-form-card {
  background-color: white;
  border-left: 4px solid #4361ee;
  transition: all 0.3s ease;
}

.contact-form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.primary-text {
  color: var(--primary-main) !important;
}

.secondary-text {
  color: var(--secondary-main) !important;
}
.gradient-btn {
  background: linear-gradient(to right, #4361ee, #3a86ff);
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.gradient-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.2);
}

@media (max-width: 960px) {
  .contact-form-card {
    margin-top: 2rem;
  }

  .main-heading {
    font-size: 1.8rem !important;
  }
}

@media (max-width: 600px) {
  .contact-icon-wrapper {
    width: 38px;
    height: 38px;
  }

  .contact-value {
    font-size: 1rem;
  }

  .social-btn {
    margin-right: 8px;
  }

  .gradient-btn {
    font-size: 0.95rem;
  }

  .custom-divider {
    width: 80px;
  }
}
</style>
