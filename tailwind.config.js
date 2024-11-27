/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b1b03',
        secondary: '#D2B48C',
        accent: '#4682B4',
        base: '#f0f0f0',
        text: '#222222'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}