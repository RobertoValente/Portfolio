/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/*.html',
  ],
  theme: {
    screens: {
      'xs': '360px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        'default': ['Nunito'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui')
  ],

  dasiyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}