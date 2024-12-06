/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'heading': ['Poppins', 'sans-serif'],
        'subheading': ['Roboto', 'sans-serif'],
        'para': ['Source Sans 3', 'sans-serif'],
        'carlo':['carlo', 'sans-serif']
      },
      backgroundImage:{
        'hero': "url('/src/assets/images/hero-image.webp')",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}