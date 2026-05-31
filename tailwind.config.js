/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      bg: "var(--bg)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      muted: "var(--muted)",
      divider: "var(--divider)",
      accent: "var(--accent)",
      black: "#000000",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [],
};
