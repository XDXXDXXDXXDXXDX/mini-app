const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

webpack(
  {
    mode: "development",
    entry: {
      page: path.resolve(__dirname, "../Demo/index.js"),
      index: path.resolve(__dirname, "./template/index.js"),
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "../Demo/dist"),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./template/index.html"),
        chunks: ["index"],
      }),
      new CleanWebpackPlugin(),
    ],
  },
  (err, stats) => {
    // [Stats Object](#stats-object)
    if (err || stats.hasErrors()) {
      console.log(err);
    }
    // 处理完成
  }
);
