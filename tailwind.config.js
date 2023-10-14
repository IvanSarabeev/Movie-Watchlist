/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mini-wallpaper': "url('../src/assets/images/mini-wallpaper.png')",
      },
      fontFamily: {
        'lato': 'Lato, sans-serif',
        'inter': 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}

