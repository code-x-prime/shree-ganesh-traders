import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D94F0A",
        "primary-dark": "#B03A06",
        accent: "#D4A017",
        "bg-cream": "#FDF8F2",
        "bg-section": "#FFF7EE",
        "text-dark": "#1A1A1A",
        "text-mid": "#4A4A4A",
        "text-muted": "#7A7A7A",
        border: "#E8D9C8",
        "green-leaf": "#2D6A2D",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
