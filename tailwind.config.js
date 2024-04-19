/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '80': '5rem',
      '30':'1.875rem',
      '36':'2.25rem',
      '12':'0.75rem',
      '16':'1rem',
      '14':'0.875rem',
      '64':'4rem',
      '20':'1.25rem'
    },
    fontFamily: {
      'Playfair-Display': ['Playfair Display'],
      'DM-Sans':["DM Sans"]
  },
    extend: {
      width: {
        '402': '25.125rem',
      },
      height: {
        '720': '45rem',
        '424':'26.5rem',
        '512':'32rem',
        '560':'35rem'
      },
      spacing: {
        '72': '4.5rem',
      },
      colors: {
        black:{
          soft:'#141414'
        },
        gray:{
          soft:'#f3f3f3',
          dark:'#D9D9D9'
        }
      }
    },
  },
  plugins: [],
}

