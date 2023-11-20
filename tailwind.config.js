/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#0F172A",
          200: "#0F172AAA",
          100: "#0F172A60",
        },
        secondary: {
          300: "#38BDF8",
          200: "#38BDF8AA",
          100: "#38BDF860",
        },
      },
      screens: {
        xsm: "350px",
      },
    },
  },
  plugins: [],
};
