const path = require('path');

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    library: "test",
    libraryTarget: "umd",
    filename: "dist/webpack-bundle.js",
  },
  resolve: {
    extensions: ['.js']
  },
};
