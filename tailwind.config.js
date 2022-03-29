module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      
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
      'dark': '#222529',
      'input': '#f4f4f4',
      'divider': '#e7e7e7'

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}