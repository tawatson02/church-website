/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      darkerBlue: '#0071BA',
      lightBlue: '#1DA0DB',
      paleGreen: '#00A88B',
      gunmetal: '#2A3030',
      oxfordBlue: '#011638',
      whiteSmoke: '#F5F5F5',
      white: '#FBFCFF',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};