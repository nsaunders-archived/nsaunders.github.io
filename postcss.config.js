const { NODE_ENV } = process.env;

if (NODE_ENV !== "production") {
  console.warn("Currently using development configuration. For production builds, set NODE_ENV to \"production\".");
}

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-font-magician"),
    NODE_ENV === "production"
      ? require("@fullhuman/postcss-purgecss")({ content: ["index.html"], defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [] })
      : null,
    NODE_ENV === "production"
      ? require("cssnano")({ preset: "default" })
      : null
  ].filter(a => a)
};
