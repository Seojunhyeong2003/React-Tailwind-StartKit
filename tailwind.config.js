/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'blade':['Blade'],
        'nanum':['Nanum']
      },
    },
  },
  plugins: [],
}

