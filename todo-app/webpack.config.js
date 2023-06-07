let path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/js/index.js",

  output: {
    path: path.join(__dirname, "public/"),
    filename: "index.js",
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "public/",
    watchContentBase: true, // livereloadに必要、contentBaseにあるファイルの変更を検出するための設定
    open: true, // 起動時にブラウザを自動で開く
  },
};
