const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./asset/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    // path.resolve : 경로를 조합해주는 Node.js API
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: "index.html" })],
};
