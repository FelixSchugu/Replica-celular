module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
        minMsg: "1rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
