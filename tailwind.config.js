/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '980px', // Small screens (e.g., mobile)
        'md': '980px', // Medium screens (e.g., tablet)
      },
    },
  },
  plugins: [],
}