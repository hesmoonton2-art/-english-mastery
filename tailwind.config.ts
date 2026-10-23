import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Noto Sans Myanmar",
          "Padauk",
          "Pyidaungsu",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mm: ["Noto Sans Myanmar", "Padauk", "Pyidaungsu", "Myanmar Text", "sans-serif"],
      },
      colors: {
        ink: {
          50: "#f5f6f8",
          100: "#e9ebef",
          200: "#d3d7df",
          300: "#b0b8c6",
          400: "#8792a7",
          500: "#68758c",
          600: "#535e73",
          700: "#444d5e",
          800: "#3a4150",
          900: "#1e2430",
          950: "#12161f",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#bcdeff",
          300: "#8ec9ff",
          400: "#59aaff",
          500: "#338aff",
          600: "#1b6bf5",
          700: "#1555e1",
          800: "#1846b6",
          900: "#1a3f8f",
        },
        gold: {
          400: "#e0a83a",
          500: "#c98f21",
          600: "#a9741a",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(18, 22, 31, 0.04), 0 8px 24px -12px rgba(18, 22, 31, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
