module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['"Nunito"']
      }
    },
    gradientColorStops: theme => ({
      'neptune-primary': '#01A2FE',
      'neptune-secondary': '#0270DD',
      'syndromi-primary': '#FFC04C',
      'syndromi-secondary': '#FF9502',
      'kairos-primary': '#1ACDD8',
      'kairos-secondary': '#0054FF'
    }),
    borderRadius: {
      DEFAULT: '30px',
      xl: '60px'
    },
    boxShadow: {
      DEFAULT: '0px 8px 30px rgba(0, 0, 0, 0.25)'
    },
    height: {
      xl: '300px',
      app: '200px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}