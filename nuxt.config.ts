// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // plugins: [{ src: "./plugins/vue-slick-carousel.js" }],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
