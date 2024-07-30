/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Nunito", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      main: "#010B12",
      green: "#00C875",
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "horizontal-blue":
          "linear-gradient(90deg, #00C1F1 10.18%, #00C875 49.68%, #E9E942 88.68%);",
        "horizontal-red":
          "linear-gradient(90deg, #F10000 0%, #9309F0 50.68%, #2B2EE4 100%);",
      },
      dropShadow: {
        "purple":
          "0px 2px 4px rgba(138, 11, 238, 1)",
        "button":
          "0px 8px 8px rgba(138, 11, 238, 1)"
      },
    },
  },
  plugins: [],
}

