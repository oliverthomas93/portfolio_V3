/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ot-dark': '#303634',
        'ot-lighter': '#78716C',
        'ot-light': '#c3c5c4',
        'ot-blue': '#1282A2',
        'ot-green': '#81B29A',
        'ot-brown': '#F2CC8F',
      },
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}
