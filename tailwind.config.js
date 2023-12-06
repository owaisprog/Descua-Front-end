/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        "btnBlue": '#3c65f5',
        "card-bg":'#f5f6f8',
        "lightBlue": "#6384f7",
        "bg-color":"#f4f7fe"

      }
    },
  },
  plugins: [],
}

