/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'btnGray': 'rgba(67,145,237,0.1)',
        'btnGray2': 'rgba(67,145,237,0.2)'
      },
      boxShadow: {
        'dropShadow': '0px 2px 2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
