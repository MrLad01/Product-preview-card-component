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
      }
    },
  },
  plugins: [],
}

