/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        winBg: '#1E1E1E',
        winBlue: '#0A84FF',
        winGray: '#2D2D2D',
        winText: '#E0E0E0',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)'
      },
      borderRadius: {
        xl2: '1rem',
      }
    },
  },
  plugins: [],
}