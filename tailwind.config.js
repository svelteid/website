module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        body:
          'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
      },
      color: {
        primary: '#ff3c00'
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
