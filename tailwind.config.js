/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-black-1': 'rgba(0,0,0,0.8)',
        'custom-black-2': 'rgba(0,0,0,0.6)',
      },
      fontFamily: {
        Rubik: ["'Rubik'", ...defaultTheme.fontFamily.sans],
        Krub: ["'Krub'", ...defaultTheme.fontFamily.sans],
        Staatliches: ["'Staatliches'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
