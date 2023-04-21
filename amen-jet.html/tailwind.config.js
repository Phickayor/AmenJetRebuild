/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: '#FFBE34',
        headingfont: '#1C1F35',
        primary2: '#091242',
        secondary1: '#F4F4F4',
        paragraphfont: '#666C89',
        paleColor: 'rgba(232, 232, 232, 0.5)',
        circle: '#1F2A69'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        krub: ['Krub', 'serif']
      }
    }
  },
  plugins: []
};
