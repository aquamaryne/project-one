/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: 
    {
      fontFamily: {
        'impact-regular': ['Impact', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif']
      }
    },
    color: {
      
    }
  },
  plugins: [],
}
