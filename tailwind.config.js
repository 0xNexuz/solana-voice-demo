/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#0e1419",
        "primary-container": "#00f5ff",
        "on-primary": "#003739",
        "secondary": "#e9c176",
        "secondary-container": "#604403",
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}