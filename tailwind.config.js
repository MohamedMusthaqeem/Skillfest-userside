/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        "Primary":"#071952",
        "Secondary":"#EFC75E"
      }
      ,fontFamily:{
        Monoton:"Monoton",
        Poppins:"poppins",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

