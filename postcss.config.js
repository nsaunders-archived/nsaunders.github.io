module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-font-magician"),
    require("@fullhuman/postcss-purgecss")({ content: ["index.html"] }),
    require("cssnano")({ preset: "default" })
  ]
};
