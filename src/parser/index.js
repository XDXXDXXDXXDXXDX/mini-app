const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

webpack(
  {
    mode: "development",
    entry: {
      page: "../Demo/index.js",
      // index: "../Demo/index.vue",
      index: "./src/index.js",
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
        // 它会应用到普通的 `.js` 文件
        // 以及 `.vue` 文件中的 `<script>` 块
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        // 它会应用到普通的 `.css` 文件
        // 以及 `.vue` 文件中的 `<style>` 块
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      // 请确保引入这个插件来施展魔法
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
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
