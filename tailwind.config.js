/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/*.{html,js}", // This looks for files directly in the src folder
    "./*.html",          // This looks for files in the root folder
  ],
  theme: {
    extend: {
      colors: {
        blue: { 950: '#020617' },
        cyan: { 400: '#22d3ee', 500: '#06b6d4' },
      },
    },
  },
  plugins: [],
}