// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "normalize.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/main.scss",
  ],

  modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      // Nunito: [200, 300, 400, 500, 600, 700, 800, 900],
      Nunito: "200..900",
    },
  },
});
