const path = require("path");

module.exports = {

  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "./bundle.js"
  },
  devtool: "source-map",
  devServer: {
      contentBase: path.resolve(__dirname, "docs"),
      open: true
  },


}
