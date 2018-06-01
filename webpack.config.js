const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    chunkFilename: "[name].[chunkhash].js"
  },
  devtool: "",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src/index.html"),
      inject: "body"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader?cacheDirectory"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: "style-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader"
      }
    ]
  }
};
