/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#156BCA",
        darkGray: "#1F2833",
        gray: "#5C635A",
        lightBlue: "#D4E9FF",
        red: "#F15E4A",
      },
    },
  },
  plugins: [],
};
