const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/javascript/index.js",
    tasks: "./src/javascript/modules/tasks.js",
    projects: "./src/javascript/modules/projects.js",
    dom_materials: "./src/javascript/modules/dom_materials.js",
    app_logic: "./src/javascript/modules/app_logic.js",
    forms: "./src/javascript/modules/forms.js",
    calendar: "./src/javascript/modules/calendar.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/index.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
