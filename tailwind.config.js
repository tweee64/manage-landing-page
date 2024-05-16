/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "image-background": "url('./images/bg-tablet-pattern.svg')",
      },
    },
  },
  plugins: [],
};
