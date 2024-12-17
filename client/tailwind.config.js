/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
  plugins: [require("tailwindcss-animate")],
};
