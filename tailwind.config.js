module.exports = {
  mode:"jit",
  purge: [     
    './public/**/*.htm',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '250': '250ms'
      }
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}