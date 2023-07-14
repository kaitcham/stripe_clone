/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#3a3a3a',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        600: '600',
      },
      maxWidth: {
        page: '1060px',
      },
      lineHeight: {
        'extra-loose': '1.25',
      },
    },
  },
  plugins: [],
};
