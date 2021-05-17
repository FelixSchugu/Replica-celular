module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      navGray: "#f9f9f9",
      bgMain: "#ffffff",
      black: "black",
      borderGray: "#d1d1d1",
      borderLightGray: "#e7e6e9",
      lightBlue: "#007aff",
      msgWspGreen:"#dbf6c7",
      msgWspWhite: "#fbfbfb",
      bgMainWsp: "#e9e2da",
      darkGray:"#242424",
      mediumGray: "#646464",
    },
    extend: {
      width: {
        anchoPantalla: " 89%",
      },
      height: {
        altoPantalla: "68%",
      },
      maxWidth: {
        maxMsg: "12rem",
      },
      minHeight: {
        minMsg: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
