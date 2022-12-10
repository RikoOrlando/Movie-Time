/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        red100: "#FF0000",
        red50: "#E74C3C",
        white100: "#E5E5E5",
        black10: "#00000033",
      },
    },
  },
  plugins: [],
};
