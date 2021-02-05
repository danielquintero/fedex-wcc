module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['visited'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
