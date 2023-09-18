/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        algreya: ['Algreya Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}