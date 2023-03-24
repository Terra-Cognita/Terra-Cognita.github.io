/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        sand:{
          100: '#FDF9F2',
          500: '#FFF1D9',
          900: '#FCD88A', 
        },
        earth: {
          100: '#BB8141',
          500: '#9A3707',
          900: '#8C111D',

        },
        forest: {
          100: '#F1EFDB',
          500: '#6D662D',
          900: '#34390B',

        },
        sky: {
          100: '#F0F6FB',
          300: '#B6D2EB',
          500: '#6595CB',
          700: '#264487',
          900: '#132244',

        },
        magic: {
          sand: '#E7FF00',
          earth: '#FC4957',
          forest: '#3BFF65',
          sky: '#15FFFF',
        }
      }
    },
  },
  plugins: [],
}
