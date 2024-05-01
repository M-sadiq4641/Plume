/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImg: "url(./images/Body.png)",
        Explorebg: "url(./images/explore-bg.png)",
      },
      colors: {
        lightorange: "#7f52392d",
        orangish: "#FCB681",
        DarkGray: "#0F0F0F",
      },
    },
  },
  plugins: [],
};
