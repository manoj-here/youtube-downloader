/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ytRed: '#FF0000',
        ytBlack: '#0E0E0E',
        ytGray: '#262626',
        ytWhite: '#F1F1F1'
      },
    },
  },
  plugins: [],
};
