/** @type {import('tailwindcss').Config} */

import  withMT from "@material-tailwind/react/utils/withMT";


export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    colors: {
      'black': '#000000',
      'darkGray': '#303030',
      'white': '#FFFFFF',
      'red': '#A53226'

    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'mobileDaytime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/mobile/bg-image-daytime.jpg')",
        'mobileNighttime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/mobile/bg-image-nighttime.jpg')",
        'tabletDaytime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/tablet/bg-image-daytime.jpg')",
        'tabletNighttime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/tablet/bg-image-nighttime.jpg')",
        'desktopDaytime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/desktop/bg-image-daytime.jpg')",
        'desktopNighttime': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./src/assets/desktop/bg-image-nighttime.jpg')"
      }
    }
  },
  plugins: [ ],
})

