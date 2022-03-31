const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['-apple-system', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'close_btn' : '0 2px 6px rgb(0 0 0 / 50%)'
      },
      backgroundImage : {
        'electronic_product' : "url('https://portotheme.com/html/porto_ecommerce/assets/images/banners/banner-top.jpg')"
      }
    },
    colors: {
      'white': '#fff',
      'gray': {
        'low': '#a8a8a8',
        'middle': '#777',
        'strong': '#555'
      },
      'red': '#ff5b5b',
      'blue': '#08C',
      'green': '#2ba968',
      'opacity': 'rgba(0,0,0,0.4)',
      'dark': {
        'low': '#222529',
        'middle' : '#313438'
      },
      'input': '#f4f4f4',
      'divider': '#e7e7e7',

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}