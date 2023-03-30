/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./features/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-primary)",
        "fb-primary": "var(--color-fb-primary)",
        "grey": "var(--color-grey)",
        "grey-border": "var(--color-grey-border)",
        "ig-secondary-text": "var(--color-ig-secondary-text)",
        "ig-link": "var(--color-ig-link)"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  }
}
