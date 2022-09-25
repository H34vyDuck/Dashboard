/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ".index.html",
  content: ["./index.html"],
  theme: {
    extend: {
      rounded: {
        '50': '50px',
      },
      height: {
        '80': '80vh',
      },
      fontFamily: {
        merri: ['Merriweather Sans'],
        garamond:['EB Garamond']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
