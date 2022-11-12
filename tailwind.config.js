/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,jsx}", "./pages/**/*.{html,jsx}"],
  theme: {
    colors: {
      stablesOrange: "#F05A28",
      stablesBlue: "#0A3D62",
    },
  },
  darkmode: "media",
  extend: {
    colors: {
      stablesOrange: "#F05A28",
      stablesBlue: "#0070F3",
    },
    fontFamily: {
      sans: ["Mellow", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    fontFamily: true,
  },
}
