/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.tsx"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px'
      },
      letterSpacing: 
      {
        'vwide': '0.5em'
      },
      colors: {
        'dark-cyan' : 'hsl(158, 36%, 37%)',
        'cream' : 'hsl(30, 38%, 92%)',
        'vdark-blue' : 'hsl(212, 21%, 14%)',
        'dark-grayish-blue' : 'hsl(228, 12%, 48%)'
      }
    },
  },
  plugins: [],
}

