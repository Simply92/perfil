/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage:{
        'fondo': "url('/cover2.png')"
      },
      backgroundColor: {
        'primary': "#0a192f"
      },
      fontFamily:{
        'typografy': ["Inter Tight", "sans-serif"]
      }
    },
  },
  plugins: [],
}