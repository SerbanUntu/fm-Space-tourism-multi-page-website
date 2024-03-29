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
        blue: '#d0d6f9',
        header: 'rgba(255, 255, 255, 4%)'
      },
      fontFamily: {
        bellefair: "'Bellefair', sans-serif",
        barlow: "'Barlow', sans-serif",
        'barlow-condensed': "'Barlow Condensed', sans-serif"
      },
      fontWeight: {
        regular: '400',
        bold: '700'
      },
      backgroundImage: {
        'home-desktop': "url(/assets/images/home/background-home-desktop.jpg)",
        'home-mobile': "url(/assets/images/home/background-home-mobile.jpg)",
        'home-tablet': "url(/assets/images/home/background-home-tablet.jpg)",
        'crew-desktop': "url(/assets/images/crew/background-crew-desktop.jpg)",
        'crew-mobile': "url(/assets/images/crew/background-crew-mobile.jpg)",
        'crew-tablet': "url(/assets/images/crew/background-crew-tablet.jpg)",
        'destination-desktop': "url(/assets/images/destination/background-destination-desktop.jpg)",
        'destination-mobile': "url(/assets/images/destination/background-destination-mobile.jpg)",
        'destination-tablet': "url(/assets/images/destination/background-destination-tablet.jpg)",
        'technology-desktop': "url(/assets/images/technology/background-technology-desktop.jpg)",
        'technology-mobile': "url(/assets/images/technology/background-technology-mobile.jpg)",
        'technology-tablet': "url(/assets/images/technology/background-technology-tablet.jpg)",
      },
      boxShadow: {
        explore: '0 0 0 88px rgba(255, 255, 255, 10.36%)',
      }
    },
  },
  plugins: [],
}

