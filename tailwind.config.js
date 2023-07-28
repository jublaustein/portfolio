/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
    },
  },
    plugins: [],
  }
}