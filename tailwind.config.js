/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
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
      backgroundImage: {
        'menu': "url('/src/assets/images/menu.svg')",
        'close': "url('/src/assets/images/close.svg')",
        'main': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/src/assets/images/upro-taller.jpg')",
        'inscription': "linear-gradient(to right bottom, rgba(140,26,86,0.5), rgba(140,26,86,0.5)), url('/src/assets/images/upro.jpeg')",
        'main-why-desktop': "linear-gradient(0deg, rgba(229,231,235,1) 71%, rgba(255,255,255,1) 71%)",
        'main-why-mobile': "linear-gradient(0deg, rgba(229,231,235,1) 77%, rgba(255,255,255,1) 77%)"
      }
    },
  },
  plugins: [],
}

