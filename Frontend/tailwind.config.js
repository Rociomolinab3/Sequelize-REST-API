/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily: {
      'sans': ['Jost', 'sans-serif'],
      'serif': ['Playfair Display', 'serif'],
    },},
  },
  plugins: [],
}