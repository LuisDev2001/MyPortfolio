const path = require('path');
/**
 * Call plugins for webpack css & html
 */
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/js/main.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  mode: "development",
  devServer: {
    contentBase: path.join('./src'),
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    }),
    new HtmlWebpackPlugin({
      title: "Mi portafolio",
      template: path.resolve(__dirname, 'src/index.html'),
      /*minify: {
        //Minificar mi html para producción
        collapseWhitespace: true,
      }*/
    })
  ]
};