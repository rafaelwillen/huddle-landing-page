/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#CC0081",
      paleCyan: "hsl(193,100%, 96%)",
      darkCyan: "hsl(192,100%, 9%)",
      blue: "hsl(208, 11%, 55%)",
      black: "#000",
      white: "#fff"
    },
    fontFamily: {
      heading: "Poppins, sans-serif",
      main: "Open Sans, sans-serif"
    },
    extend: {
      backgroundImage: {
        "hero-pattern-mobile": "url('/src/assets/images/bg-hero-mobile.svg')",
        "hero-pattern-desktop": "url('/src/assets/images/bg-hero-desktop.svg')"
      }
    }
  },
  plugins: [],
}
