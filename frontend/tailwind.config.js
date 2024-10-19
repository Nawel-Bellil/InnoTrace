/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      customGrey: '#EDEBEB', 
      customGrey2: '#C8C8C8',
      borderGrey:'#787486', 
      customYellow: '#FABC3F',
      customCyan: '#39DBE6' ,
      customCyan2 : 'rgba(57,219,230,0.1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}