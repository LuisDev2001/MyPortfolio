const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join('./src'),
    hot: true,
    port: 9000,
  }
}