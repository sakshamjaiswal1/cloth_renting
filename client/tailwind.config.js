/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-red": "#DF3C4B",
      white: "#fff",
      black: "#2B2D3C",
      "grey": "#2e3234",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      iphoneSE: { max: "420px" },
      galaxyFold: { max: "390px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
