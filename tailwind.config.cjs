/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: "url(src/assets/banner-hero.png)",
      },
      colors: {
        red: "#B50B04",
        yellow: "#F59A1B",
        "color-border": "rgba(60, 33, 12, 0.15)",
      },
    },
  },
  plugins: [],
};
