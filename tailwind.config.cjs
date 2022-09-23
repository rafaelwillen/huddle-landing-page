/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "hsl(322, 100%, 66%)",
      paleCyan: "hsl(193,100%, 96%)",
      darkCyan: "hsl(192,100%, 9%)",
      blue: "hsl(208, 11%, 55%)",
      black: "#000",
      white: "#fff"
    },
    fontFamily: {
      heading: "Poppins, sans-serif",
      main: "Open Sans, sans-serif"
    }
  },
  plugins: [],
}
