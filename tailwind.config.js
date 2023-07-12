/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-bg': '#272e71',
        'green-bg': '#073c41'
      },
    }
  },
  plugins: [],
}

