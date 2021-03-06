const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        ...colors,
        background: colors.gray[50],
        primary: colors.rose,
        gray: colors.trueGray,
        whiteAlpha: {
          50: "rgba(255, 255, 255, 0.05)",
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.2)",
          300: "rgba(255, 255, 255, 0.3)",
          400: "rgba(255, 255, 255, 0.4)",
          500: "rgba(255, 255, 255, 0.5)",
          600: "rgba(255, 255, 255, 0.6)",
          700: "rgba(255, 255, 255, 0.7)",
          800: "rgba(255, 255, 255, 0.8)",
          900: "rgba(255, 255, 255, 0.9)",
        },
        blackAlpha: {
          50: "rgba(0, 0, 0, 0.05)",
          100: "rgba(0, 0, 0, 0.1)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(0, 0, 0, 0.3)",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(0, 0, 0, 0.5)",
          600: "rgba(0, 0, 0, 0.6)",
          700: "rgba(0, 0, 0, 0.7)",
          800: "rgba(0, 0, 0, 0.8)",
          900: "rgba(0, 0, 0, 0.9)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
