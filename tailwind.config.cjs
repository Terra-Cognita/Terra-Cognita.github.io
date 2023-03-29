/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Texturina', ...defaultTheme.fontFamily.sans],
      },
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
      },
      backgroundImage: {
        'banner-1': "url('/src/assets/images/BG-Banner1.png')",
        'crystalElement': "url('/src/assets/images/Crystal-Elements.png')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}