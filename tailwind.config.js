/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
