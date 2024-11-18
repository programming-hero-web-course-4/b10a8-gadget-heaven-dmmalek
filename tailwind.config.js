/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: 'rgb(149, 56, 226)',

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

