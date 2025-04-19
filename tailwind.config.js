/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D24F0A",
        light: "#f8ccb6",
        dark: "#461a03",
        muted: "#D3D3D3",
        secondary: "#eaebe6",
        third: "#BBBCB8",
        fourth: "#5D5E5C",
        fifth: "#373837",
        sixth: "#252524",
      },
    },
  },
  plugins: [],
};
