/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Outfit"', "sans-serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "3px -3px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};
