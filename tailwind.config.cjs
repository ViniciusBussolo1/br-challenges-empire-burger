/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      Lilita: ["Lilita One", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: "url(src/assets/banner-hero.png)",
        "oferta-red": "url(src/assets/ofertas/oferta-1.png)",
        "oferta-yellow": "url(src/assets/ofertas/oferta-2.png)",
        "oferta-brown": "url(src/assets/ofertas/oferta-3.png)",
        "banner-cardapio": "url(src/assets/banner-menu.png)",
      },
      colors: {
        white: "#FFFFFF",
        red: "#B50B04",
        yellow: "#F59A1B",
        black: "rgba(29, 6, 5, 0.9)",
        brown: "rgba(59, 32, 11, 1)",
        texto: "rgba(29, 6, 5, 0.69)",
        timer: "rgba(29, 6, 5, 0.2)",
        "color-hover": " #34201F",
        "color-button": "#F43127",
        "color-border": "rgba(60, 33, 12, 0.15)",
        "color-oferta-h2": "rgba(255, 255, 255, 0.9)",
        "color-oferta-span": "rgba(255, 255, 255, 0.69)",
        "traco-funcionamento": "rgba(29, 6, 5, 0.4)",
        "texto-funcionamento": "rgba(255, 255, 255, 0.85)",
      },
      dropShadow: {
        cardsShadow: "0px 4px 40px rgba(179, 155, 132, 0.5)",
      },
    },
  },
  plugins: [],
};
