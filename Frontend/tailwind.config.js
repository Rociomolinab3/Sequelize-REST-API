/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto_cond':['roboto_cond','roboto_cond'],
        'roboto':['Roboto','sans-serif']
      },
      colors: {
        'primary': '#cc0972',
        'secondary': '#6d6e70',
        'yellow': '#f49e27',
        'green': '#67c1b8',
        'violet': '#6d2c66',
        'blue': '#252b5f',
        'light': '#e9e9e9',
        'dark': '#222222',
      },
      backgroundImage:{
        'fondo': "url('https://firebasestorage.googleapis.com/v0/b/web-upro.appspot.com/o/preinscripciones%2FIlustraciones%20Landing_Mesa%20de%20trabajo%201.svg?alt=media&token=d2234cda-6851-486c-88aa-ad3d424c7106')",
      }
      
    },
  },
  plugins: [],
}