const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

webpack(
  {
    mode: "development",
    entry: {
      page: "../Demo/index.js",
      index: "./template/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve("../Demo", "dist"),
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
        template: "./template/index.html",
        chunks: ["index"],
      }),
    ],
  },
  (err, stats) => {
    // [Stats Object](#stats-object)
    if (err || stats.hasErrors()) {
      console.log(err);
    }
    // console.log(stats);
    // 处理完成
  }
);
