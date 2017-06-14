const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '..', 'src')
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.scss', '.css'],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  }
}
