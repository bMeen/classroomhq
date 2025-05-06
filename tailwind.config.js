/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      logo: ["Rubik Doodle Shadow", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#1d1c1a",
        "primary-hover": "#3f3e3a",
        muted: "#6B7280",
        "color-present": "#36D399",
        "color-late": "#FBBD23",
        "color-absent": "#F87272",
      },
    },
  },
  plugins: [],
};
