/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        questionLight: "url('/src/images/Question.png')",
        chartLight: "url('/src/images/Chart.png')",
        skyLight: "url('/src/images/SkyLight.png')",
        sun: "url('/src/images/sun.png')",
        questionDark: "url('/src/images/QuestionDark.png')",
        chartDark: "url('/src/images/ChartDark.png')",
        skyDark: "url('/src/images/SkyNight.png')",
        moon: "url('/src/images/Moon.png')",
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        "primary": "#6AAA64",
        "secondary": "#CEB02C",
        "tertiary": "#939B9F",
        "backLight": "#FFFFFF",
        "backDark": "#262B3C",
        "headerGray": "#F3F3F3",
        "headerDark": "#dadce04d",
        "boardEmpty": "#939b9f4d",
        "keyboard": "#dadce04d",
        "keyboardDark": "#dadce008",
        "keyboardKey": "#D3D6DA",
        "popDropLight": "#f3f3f3e3",
        "popDropDark": "#262b3ce3",
        "popBorderLight": "#000",
        "popBorderDark": "#939B9F",
        "modalLight": "#F3F3F3",
        "modalDark": "#262B3C",
      }),
      colors: {
        "boardKey": "#FFFFFF",
        "keyboardKey": "#56575E",
        "keyDark": "#565F7E",
        "titleDark": "#DADCE0",
      },
      width: {
        '100': "39rem"
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}
