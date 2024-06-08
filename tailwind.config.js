/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors:{
          Base:"#E3000F",
          TextColor:"#5F5D5D",
       },
    },
  },
  plugins: [],
}