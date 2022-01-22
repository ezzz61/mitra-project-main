module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#147CBA",
        "blue-secondary": "#074C85",
        "black-primary": "#373737",
      },
    },
  },
  plugins: [],
};
