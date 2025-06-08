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
        "text-primary": "var(--text-primary)",
        "text-secondary": "#111827",
        muted: "#6B7280",
        "color-present": "#1E8E70",
        "color-late": "#B8860B",
        "color-absent": "#C05050",
      },
      animation: {
        "slide-in": "slideIn 300ms ease-out forwards",
        "slide-out": "slideOut 300ms ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideOut: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateX(-30px)" },
        },
      },
    },
  },
  plugins: [],
};
