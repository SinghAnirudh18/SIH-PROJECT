/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['DM Serif Text', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
