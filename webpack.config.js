const HtmlWebpackPlugin = require("html-webpack-plugin");
const convert = require("koa-connect");
const history = require("connect-history-api-fallback");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[chunkhash].js",
    chunkFilename: "bundle.[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("src/index.html"),
      inject: "body"
    }),
    new MinifyPlugin()
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
        test: /\.(gif|jpg|png|svg)$/,
        use: "file-loader"
      }
    ]
  }
};

module.exports.serve = {
  add: (app, middleware, options) => {
    app.use(convert(history({})));
  }
};
