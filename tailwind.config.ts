import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "480": "480px",
        "340": "340px",
      },
      maxWidth: {
        "480": "480px",
      },
      colors: {
        gray: "#404040",
        brand: "#C8401A", 
      },
      fontFamily: {
        sans: ["DMSans", "sans-serif"],
        play: ["Playfair", "serif"],
      },
      gridTemplateColumns: {
        "cards-grid": "repeat(auto-fill,minmax(250px,1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
