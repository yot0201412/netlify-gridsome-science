const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    plugin(function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
        'p' : { 'line-height': '2.25rem'},
        // 'p' : { 'lg:line-height': '5rem'},
        'ol': {'list-style-type': 'decimal'}

      })
    })
  ],
}
