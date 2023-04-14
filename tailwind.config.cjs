/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Texturina", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        tc_sand: {
          100: "#FDF9F2",
          500: "#FFF1D9",
          900: "#FCD88A",
        },
        tc_earth: {
          100: "#BB8141",
          500: "#9A3707",
          900: "#8C111D",
        },
        tc_forest: {
          100: "#F1EFDB",
          500: "#6D662D",
          900: "#34390B",
        },
        tc_sky: {
          100: "#F0F6FB",
          300: "#B6D2EB",
          500: "#6595CB",
          700: "#264487",
          900: "#132244",
        },
        tc_magic: {
          sand: "#E7FF00",
          earth: "#FC4957",
          forest: "#3BFF65",
          sky: "#15FFFF",
        },
      },
      backgroundImage: {
        bgBanner: "url('/src/assets/backgrounds/bgBanner.png')",
        bgCrystal: "url('/src/assets/backgrounds/bgCrystal.png')",
        bgCrystalMasked: "url('/src/assets/backgrounds/bgCrystalMasked.png')",
        bgMultipleCrystals:
          "url('/src/assets/backgrounds/bgMultipleCrystals.png')",
        crystalElement: "url('/src/assets/images/Crystal-Elements.png')",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
