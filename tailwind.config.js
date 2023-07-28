/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}"
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