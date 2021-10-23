module.exports = {
  mode: 'jit',
  // you dont need `purge: enabled: production` because you are using jit
  purge: [ 
    "./src/**/*.svelte",
    // may also want to include HTML files
    "./src/**/*.html"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        lato: [ 'Lato'],
        bree: ['"Bree Serif"']
      } 
    },
  },
  variants: {},
  plugins: [require("tailwindcss-padding-safe")()],
}