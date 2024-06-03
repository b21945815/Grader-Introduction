/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      colors: {
        "grey-0": { DEFAULT: "#fff", dark: "#18212f" },
        "grey-50": { DEFAULT: "#f9fafb", dark: "#111827" },
        "grey-100": { DEFAULT: "#f3f4f6", dark: "#1f2937" },
        "grey-200": { DEFAULT: "#e5e7eb", dark: "#374151" },
        "grey-300": { DEFAULT: "#d1d5db", dark: "#4b5563" },
        "grey-400": { DEFAULT: "#9ca3af", dark: "#6b7280" },
        "grey-500": { DEFAULT: "#6b7280", dark: "#9ca3af" },
        "grey-600": { DEFAULT: "#4b5563", dark: "#d1d5db" },
        "grey-700": { DEFAULT: "#374151", dark: "#e5e7eb" },
        "grey-800": { DEFAULT: "#1f2937", dark: "#f3f4f6" },
        "brand-50": { DEFAULT: "#eef2ff" },
        "brand-100": { DEFAULT: "#e0e7ff" },
        "brand-200": { DEFAULT: "#c7d2fe" },
        "brand-500": { DEFAULT: "#6366f1" },
        "brand-600": { DEFAULT: "#4f46e5" },
        "brand-700": { DEFAULT: "#4338ca" },
        "brand-800": { DEFAULT: "#3730a3" },
        "brand-900": { DEFAULT: "#312e81" },
        "red-100": { DEFAULT: "#fee2e2" },
        "red-700": { DEFAULT: "#b91c1c" },
        "red-800": { DEFAULT: "#991b1b" },
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
      width: {
        200: "50rem",
      },
    },
  },
  plugins: [],
};
