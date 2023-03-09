/** @typedef { import('tailwindcss/defaultConfig') } DefaultConfig */
/** @typedef { import('tailwindcss/defaultTheme') } DefaultTheme */
/** @typedef { DefaultConfig & { theme: { extend: DefaultTheme } } } TailwindConfig */

/** @type {TailwindConfig} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      limelight: ['Limelight'],
      montserrat: ['Montserrat']
    },
    extend: {
      colors: {
        primary: 'black',
        white: '#ffffff',
        beige: '#FBFAF8',
        green: '#8E9882',
        red: '#CD4C15',
      },
      borderRadius: {
        input: '0.625rem',
      },
      textColor: {
        black: 'black',
        primary: 'black',
        secondary: 'black',
        grey: '#44403C',
      },
    },
    screens: {
      'tablet': '900px',
      'xsLaptop': '1200px',
      'smLaptop': '1400px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
