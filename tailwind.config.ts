import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          "100": "#E0F2FF",
          DEFAULT: "#007BFF", // Classic blue
        },
        secondary: "#60A5FA", // Light blue (Tailwind's blue-400)
        black: {
          "100": "#2C3E50",
          "200": "#1A1A1A",
          "300": "#4B5563",
          DEFAULT: "#000000",
        },
        white: {
          "100": "#F9FAFB",
          DEFAULT: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(0, 123, 255)", // blue shadow
      },
      fontFamily: {
        abc: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

module.exports = config;
