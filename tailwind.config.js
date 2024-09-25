/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['poppins','sans-serif'],
        volkhov:['"Volkhov", serif'],
      },
      colors: {
        primary: {
          light: '#23CE6B', // custom light primary color
          DEFAULT: '#2BA84A', // default primary color
          dark: '#2D3A3A', // custom dark primary color
        },
        secondary: '#040F0F', // custom secondary color
      },
    },
  },
  plugins: [],
}

