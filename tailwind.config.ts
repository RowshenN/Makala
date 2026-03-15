import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        gray: "#404040"
      },
      gridTemplateColumns: {
        "cards-grid": "repeat(auto-fill,minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};

export default config;
