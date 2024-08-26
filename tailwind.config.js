/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      },
      keyframes: {
        'morph': {
          '0%': { scale: '1' },
          '100%': { scale: '1.2'},
        }
      },
      animation: {
        'morph': 'morph 1.5s alternate infinite'
      },
      backgroundImage: {
        'city': "url('/src/assets/city.png')",
        'rain': "url('/src/assets/rain.gif')"
      }
    }
  },
  plugins: []
}

