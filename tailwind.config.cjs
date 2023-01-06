/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1920px",
    },
    colors: {
      gold: "#BFA181",
      turqoise: "#178582",
      black: "#0A1828",
    },
    fontFamily: {
      montserrat: "Montserrat",
    },
    extend: {},
  },
  plugins: [],
};
