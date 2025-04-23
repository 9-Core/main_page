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
              <div class="contact-icon-wrapper email-bg">
                <v-icon size="22" color="white">mdi-email-outline</v-icon>
              </div>
              <div class="ms-4">
                <div class="contact-label">Envíanos un correo</div>
                <div class="contact-value">contacto@9core.cl</div>
              </div>
            </div>

            <!-- Teléfono -->
            <div class="contact-item mb-6 d-flex align-center">
              <div class="contact-icon-wrapper phone-bg">
                <v-icon size="22" color="white">mdi-phone-outline</v-icon>
              </div>
              <div class="ms-4">
                <div class="contact-label">Llámanos</div>
                <div class="contact-value">+56990829776</div>
              </div>
            </div>

            <!-- Ubicación -->
            <div class="contact-item mb-6 d-flex align-center">
              <div class="contact-icon-wrapper location-bg">
                <v-icon size="22" color="white">mdi-map-marker-outline</v-icon>
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
                :class="socialButtonClass(i)"
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
                        placeholder="Ej: Juan Pérez"
                        hint="Tu nombre completo"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.email"
                        label="Email"
                        :rules="emailRules"
                        variant="outlined"
                        placeholder="Ej: tu@email.com"
                        hint="Correo electrónico de contacto"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.phone"
                        label="Teléfono"
                        :rules="phoneRules"
                        variant="outlined"
                        placeholder="Ej: +56912345678"
                        hint="Formato: +56 9 seguido de 8 dígitos"
                        type="tel"
                        @input="formatPhoneNumber"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-select
                        v-model="formData.service"
                        :items="serviceOptions"
                        label="Servicio de interés"
                        variant="outlined"
                        hint="Selecciona el servicio que te interesa"
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="formData.message"
                        label="Mensaje"
                        :rules="messageRules"
                        variant="outlined"
                        rows="4"
                        placeholder="Escribe aquí los detalles de tu consulta..."
                        hint="Mínimo 10 caracteres"
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

// Reglas de validación mejoradas
const nameRules = [
  (v) => !!v || "El nombre es obligatorio",
  (v) => v.length >= 3 || "El nombre debe tener al menos 3 caracteres",
  (v) =>
    /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/.test(v) ||
    "El nombre solo debe contener letras y espacios",
];

// Validación de email mejorada
const emailRules = [
  (v) => !!v || "El email es obligatorio",
  (v) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "El formato del email no es válido",
  (v) => /\.[a-z]{2,}$/i.test(v) || "El dominio del email no es válido",
];

// Validación específica para número de teléfono chileno
const phoneRules = [
  (v) => !!v || "El número de teléfono es obligatorio",
  (v) =>
    /^\+56[9]\d{8}$/.test(v) ||
    "Debe ser un número chileno válido: +569 seguido de 8 dígitos",
];

// Función para formatear automáticamente el número de teléfono
const formatPhoneNumber = (event) => {
  // Eliminar cualquier carácter que no sea número, excepto el signo +
  const cleaned = formData.value.phone.replace(/[^\d+]/g, "");

  // Si el usuario elimina todo, no aplicar formato
  if (cleaned === "") {
    formData.value.phone = "";
    return;
  }

  // Asegurar que comience con +56
  if (!cleaned.startsWith("+")) {
    formData.value.phone = "+" + cleaned;
  } else if (
    cleaned.startsWith("+") &&
    !cleaned.startsWith("+56") &&
    cleaned.length > 1
  ) {
    formData.value.phone = "+56" + cleaned.substring(1);
  } else {
    formData.value.phone = cleaned;
  }
};

const messageRules = [
  (v) => !!v || "El mensaje es obligatorio",
  (v) => v.length >= 10 || "El mensaje debe tener al menos 10 caracteres",
  (v) => v.length <= 500 || "El mensaje no debe exceder los 500 caracteres",
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

// Función para determinar la clase de color de cada botón social
const socialButtonClass = (index) => {
  const classes = [
    "facebook-color",
    "linkedin-color",
    "instagram-color",
    "twitter-color",
  ];
  return classes[index % classes.length];
};

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
        service: formData.value.service || "No especificado",
        message: formData.value.message,

        // Configuración adicional
        to: "contacto@9core.cl", // Email de la empresa
        from: "Sitio Web 9Core <no-reply@9core.cl>",
        subject: `Nuevo contacto: ${formData.value.name} - ${
          formData.value.service || "Consulta general"
        }`,
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
      text: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Nuevos colores para los iconos */
.email-bg {
  background: linear-gradient(135deg, #4361ee, #3a86ff);
  border: none;
}

.phone-bg {
  background: linear-gradient(135deg, #3a0ca3, #7209b7);
  border: none;
}

.location-bg {
  background: linear-gradient(135deg, #f72585, #b5179e);
  border: none;
}

/* Colores para redes sociales */
.facebook-color {
  color: #1877f2 !important;
  border-color: #1877f2 !important;
}

.linkedin-color {
  color: #0a66c2 !important;
  border-color: #0a66c2 !important;
}

.instagram-color {
  color: #e4405f !important;
  border-color: #e4405f !important;
}

.twitter-color {
  color: #1da1f2 !important;
  border-color: #1da1f2 !important;
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

.contact-item:hover .contact-icon-wrapper {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  transform: scale(1.05);
}

.social-btn {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  background-color: rgba(255, 255, 255, 0.8) !important;
  margin-right: 8px;
  width: 42px;
  height: 42px;
}

.social-btn:hover {
  transform: translateY(-5px);
  background-color: white !important;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
