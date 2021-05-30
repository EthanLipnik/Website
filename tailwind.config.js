module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['"Nunito"']
      }
    },
    borderRadius: {
      DEFAULT: '30px',
      xl: '60px'
    },
    boxShadow: {
      DEFAULT: '0px 8px 30px rgba(0, 0, 0, 0.25)'
    },
    height: {
      xl: '300px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}