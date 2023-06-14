/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayTheme: "#666567",
        blackTheme: "#060a16",
        oliveGreenTheme: "#414322",
        grayLigthTheme: "#c2bcba",
        darkBlueTheme: "#222641",
        orangeTheme: "#fca311",
      },
    },
  },
  plugins: [],
};
