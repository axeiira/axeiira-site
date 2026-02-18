/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Space Grotesk", "sans-serif"],
      mono: ["IBM Plex Mono", "monospace"],
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      main: "#05080d",
      surface: "#0a121b",
      line: "#173045",
      accent: "#43ffd1",
      text: "#e4eef7",
      muted: "#8aa0b4",
      black: "#000000",
      white: "#f6fbff",
    },
    extend: {
      backgroundImage: {
        "accent-line":
          "linear-gradient(90deg, rgba(67, 255, 209, 0) 0%, rgba(67, 255, 209, 0.85) 50%, rgba(67, 255, 209, 0) 100%)",
      },
    },
  },
  plugins: [],
};
