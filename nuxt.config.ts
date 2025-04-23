// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    "vuetify/styles",
    "ol/ol.css",
    "@mdi/font/css/materialdesignicons.css",
    "@/assets/css/theme.css",
  ],

  build: {
    transpile: ["vuetify"],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  compatibilityDate: "2025-03-07",
});
