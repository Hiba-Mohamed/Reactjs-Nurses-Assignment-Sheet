/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {

    },

    fontFamily: 
    {
      'nunito': ['"Nunito"', 'sans-serif'],
    },
  

    colors:
    {
      'peach':'#EF798A',
      'green':'#68B0AB',
      'white':'#FFFFFF',
      'lgreen':'#8FC0A9'
    },

  },


  plugins: [],
}

