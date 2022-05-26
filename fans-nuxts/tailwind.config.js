const defaultTheme = require('tailwindcss/defaultTheme')
const { colors, maxWidth, screens, dropShadow } = require('./config/tailwind/theme')

const tailWindConfig = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors,
      maxWidth,
      fontFamily: {
        Ballo2: ["'Baloo 2'", ...defaultTheme.fontFamily.sans],
        Roboto: ["'Roboto'", ...defaultTheme.fontFamily.sans],
      },
      screens,
      dropShadow
    },
  },
  plugins: [],
}
module.exports = tailWindConfig
