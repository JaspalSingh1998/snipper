module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "5xl": "3.5rem",
      },
      colors: {
        body: "#383838",
        muted: "#ADADAD",
      },
      backgroundImage: (theme) => ({
        "hero-bg": 'url("./asset/Background.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
