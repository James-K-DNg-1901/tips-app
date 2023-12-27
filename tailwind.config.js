/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        app: '45em',
        90: '23rem'
      },
      letterSpacing: {
        widest: '.5em'
      },
      fontFamily: {
        mono: ['Space Mono','monospace']
      },
      colors: {
        // primary 
        strongCyan: 'hsl(172, 67%, 45%)',
        // neutral
        VeryDarkCyan: 'hsl(183, 100%, 15%)',
        DarkGrayishCyan: 'hsl(186, 14%, 43%)',
        GrayishCyan: 'hsl(184, 14%, 56%)',
        LightGrayishCyan: 'hsl(185, 41%, 84%)',
        VeryLightGrayishCyan: 'hsl(189, 41%, 97%)',
      }
    },
  },
  plugins: [],
}

