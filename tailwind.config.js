/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#1E2640",
        darkGrayBg: "#F2F2F2",
        grayBg: "#fafafa",
      },
      boxShadow: {
        cardShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
      },
    },
  },
  plugins: [],
};
