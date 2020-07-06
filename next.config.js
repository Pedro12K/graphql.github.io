const withLess = require("@zeit/next-less");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const path = require("path");
module.exports = withImages(
  withLess(
    withCSS({
      webpack: (config) => {
        config.resolve.alias["~"] = path.resolve(path.join(__dirname, "src"));
        return config;
      },
    })
  )
);
