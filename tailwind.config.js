module.exports = {
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      safelist: ['from-neptune-primary', 'to-neptune-secondary', 'from-syndromi-primary', 'to-syndromi-secondary', 'from-kairos-primary', 'to-kairos-secondary', 'from-kano-primary', 'to-kano-secondary', 'from-sakka-primary', 'to-sakka-secondary', 'shadow-neptune', 'shadow-syndromi', 'shadow-kairos', 'shadow-kano', 'shadow-sakka'],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
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
      'kairos-secondary': '#0054FF',
      'kano-primary': '#3991FF',
      'kano-secondary': '#0048BE',
      'sakka-primary': '#724569',
      'sakka-secondary': '#30389B'
    }),
    borderRadius: {
      DEFAULT: '30px',
      xl: '60px'
    },
    boxShadow: {
      DEFAULT: '0px 8px 30px rgba(0, 0, 0, 0.25)',
      neptune: '0px 4px 30px rgba(0, 81, 158, 0.5)',
      syndromi: '0px 4px 30px rgba(164, 96, 0, 0.5)',
      kairos: '0px 4px 30px rgba(3, 59, 160, 0.5)',
      kano: '0px 4px 30px rgba(3, 59, 160, 0.5)',
      sakka: '0px 4px 30px rgba(51, 56, 148, 0.5)'
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