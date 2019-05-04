var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js"
  }, 
  module: {
    rules: [
      { test: /\.(js)$/,use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: [
                   'file-loader'
                 ] }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({ template: 'src/index.html'})
  ],
  mode: 'development'
}