const path = require('path');

module.exports = {
  entry: './src/index.js',
  "mode" : "production",
  output: {
    filename: 'main.js',
    publicPath: "/Restaurant-Page-with-Webpack/",
  },
};