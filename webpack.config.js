var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
      index: ['./src/index.js'],
    },
    output: {
      // ./dist
      path: path.join(__dirname, "dist"),
      // nous aurons (vu notre point d'entrée)
      // - dist/index.js
      filename: "[name].js",
      // notre base url
      publicPath: "/",
    }
};
