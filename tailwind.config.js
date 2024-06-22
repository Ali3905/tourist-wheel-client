// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [nextui()],
};
