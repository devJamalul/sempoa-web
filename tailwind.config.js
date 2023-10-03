/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{edge,js,ts,vue,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "#052c1e",
        lightGreen: "#06db6b",
        themeSlate: "#E9F2EF",
      },
    },
  },
  plugins: [],
};
