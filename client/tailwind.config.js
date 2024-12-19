/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_background: "#121212",
        light_background: "#1f1f1f",
        primary_purple: "#9b78ee",
      },
      fontFamily:{
        sans: ['Roboto', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
