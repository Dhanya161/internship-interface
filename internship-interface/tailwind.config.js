/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('/src/images/homepage.jpg')",
        footer: "url('/src/images/footer.jpg')",
        world: "url('/src/images/world.png')",
      },

      colors: {
        primary: "#0c000f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        golden: "#c4c233",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        italianno: ["Italianno", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
