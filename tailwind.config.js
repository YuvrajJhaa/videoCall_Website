/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto : ['Roboto', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif'],
        Dancing : ['Dancing Script', 'cursive']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),]
}

