/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {},
  extend: {
    colors: {
      stable_orange: "#F05A28",
      stable_blue: "#0070F3",
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
