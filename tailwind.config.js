/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: '#0b0d17',
        blue: '#d0d6f9'
      },
      fontFamily: {
        bellefair: "'Bellefair', sans-serif",
        barlow: "'Barlow', sans-serif",
        'barlow-condensed': "'Barlow Condensed', sans-serif"
      },
      fontWeight: {
        regular: '400',
      },
      backgroundImage: {
        'home-desktop': "url(/assets/images/home/background-home-desktop.jpg)",
      },
      boxShadow: {
        explore: '0 0 0 88px rgba(255, 255, 255, 10.36%)',
      }
    },
  },
  plugins: [],
}

