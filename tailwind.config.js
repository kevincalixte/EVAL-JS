/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        DEFAULT: '1200px',
      },
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1200px',
      'xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
}