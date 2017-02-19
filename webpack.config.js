const {join: joinPath} = require('path')

const Copy = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: './src/main.js',
  output: {
    path: joinPath(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new Copy([
      {
        from: './src/*.html',
        flatten: true
      },
      {
        from: './src/assets',
        to: 'assets'
      },
      {
        from: './src/*.txt',
        flatten: true
      }
    ]),
    new ExtractTextPlugin('styles.css')
  ]
}
