/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      stables: {
        orange: "#F05A28",
        blue: "#0070F3",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}