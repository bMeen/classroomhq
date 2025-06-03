/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      logo: ["Rubik Doodle Shadow", "system-ui"],
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        "text-primary": "#E0E0E6",
        "text-secondary": "#111827",
        muted: "#6B7280",
        "color-present": "#1E8E70",
        "color-late": "#B8860B",
        "color-absent": "#C05050",
      },
    },
  },
  plugins: [],
};
