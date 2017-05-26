const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './web/assets/js/app.js',
  output: {
    filename: './web/bundles/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
      })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./web/assets/css/style.css')
  ]
}
