module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: false,
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    typography: {
      default: {
        css: {
          maxWidth: '100%'
        }
      },
      lg: {
        css: {
          h1: {
            marginTop: 0
          },
          h2: {
            marginTop: 0
          },
          h3: {
            marginTop: 0
          },
          h4: {
            marginTop: 0
          }
        }
      }
    },
    extend: {
      fontFamily: {
        body:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
      },
      colors: {
        primary: '#ff3c00',
        secondary: '#676778'
      },
      strokeWidth: {
        50: '50'
      },
      height: {
        box: '320px'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
