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
        outerSpace: '#454C4C',
        whiteSmoke: '#F5F5F5',
        white: '#FBFCFF',
        },
      extend: {
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  
  