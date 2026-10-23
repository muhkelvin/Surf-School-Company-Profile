/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'deep-tide': '#153A3A',
        'salt-white': '#F7F5EF',
        'sea-glass': '#D9E6D9',
        'surf-coral': '#F16D4F',
        'ocean-mist': '#A9C9C3',
        'warm-sand': '#E8D7BB',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
