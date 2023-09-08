const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    extend:{
      colors:{
        disabled: '#E0E0E0',
      }
    }
  },
  plugins: [nextui({
    themes: {
      light: {
        disabled: '#E0E0E0',
      },
      dark: {
        disabled: '#E0E0E0',
      },
    }
  })],
}
