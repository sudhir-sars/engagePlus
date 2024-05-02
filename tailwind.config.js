/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(5px)',  // Adjust blur amount here
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}