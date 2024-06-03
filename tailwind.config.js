/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        lightBlue: 'rgb(34 211 238 / 44%)',
        lightPink: 'rgb(244 114 182 / 55%)',
        lightPurple: 'rgb(192 132 252 / 55%)'
      }
    },
  },
  plugins: [],
}

