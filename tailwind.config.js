/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-100': '#acbff0',
        'primary-300': '#8aa7f0',
        'primary-700': '#7194ed',
      }
    },
  },
  plugins: [],
};
