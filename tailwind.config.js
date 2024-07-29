/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Myanmar"],
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
        "horizontal-main":
          "linear-gradient(90deg, #00C1F1 10.18%, #00C875 49.68%, #E9E942 88.68%);",
      },
    },
  },
  plugins: [],
}

