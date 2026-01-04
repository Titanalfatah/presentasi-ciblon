/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-dark': '#0a1929',
        'ocean-blue': '#1e3a5f',
        'ocean-light': '#2d5f8d',
        'cyan-bright': '#00d4ff',
        'cyan-light': '#4dd4ff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
