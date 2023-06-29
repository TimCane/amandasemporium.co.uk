const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/*/src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      "sans": ["Noto Sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      "serif": ["Noto Serif", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
    },
    colors: {
      white: colors.zinc[100],
      black: colors.zinc[900],

      primary: {
        content: colors.pink[100],
        light: colors.pink[400],
        DEFAULT: colors.pink[600],
      },
      secondary: {
        content: colors.teal[100],
        light: colors.teal[400],
        DEFAULT: colors.teal[600],
      },

      info: colors.blue[600],
      success: colors.green[600],
      warning: colors.yellow[600],
      error: colors.red[600],

      gray: {
        dark: colors.gray[800],
        DEFAULT: colors.gray[600],
        light: colors.gray[400],
        lighter: colors.gray[200],
      },
    },
    extend: {},
  },
  plugins: [],
};
