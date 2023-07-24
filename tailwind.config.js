/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
          colors:
    {
      'peach':'#EF798A',
      'green':'#68B0AB',
      'white':'#FFFFFF',
      'lgreen':'#8FC0A9'
    },
    
    },

    fontFamily: 
    {
      'nunito': ['"Nunito"', 'sans-serif'],
    },
  



  },


  plugins: [],
}

