module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-font-magician"),
    require("cssnano")({ preset: "default" })
  ]
};
