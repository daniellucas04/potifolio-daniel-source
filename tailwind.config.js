/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#111111',
        'primary-card': '#1e1e1e',
        'white-read': '#FCFDF2'
      }
    },
  },
  plugins: [],
}
