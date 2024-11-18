import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        colorChange: "colorChange 3s ease-in-out infinite",
        buttonColorChange: "buttonColorChange 4s ease-in-out infinite",
      },
      keyframes: {
        colorChange: {
          "0%": { color: "rgb(255, 0, 128)" },
          "25%": { color: "rgb(0, 255, 255)" },
          "50%": { color: "rgb(128, 0, 255)" },
          "75%": { color: "rgb(0, 255, 128)" },
          "100%": { color: "rgb(255, 128, 0)" },
        },
        buttonColorChange: {
          "0%": { backgroundColor: "rgb(255, 99, 71)" }, 
          "25%": { backgroundColor: "rgb(135, 206, 250)" }, 
          "50%": { backgroundColor: "rgb(60, 179, 113)" }, 
          "75%": { backgroundColor: "rgb(238, 130, 238)" }, 
          "100%": { backgroundColor: "rgb(255, 165, 0)" }, 
        },
      },
    },
  },
  plugins: [],
};

export default config;
