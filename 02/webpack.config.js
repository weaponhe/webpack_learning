var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function ()
{
  return {
    entry: './src/index.js',
    output: {
      path: './dist',
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?sourceMap'
        })
      }]
    },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true})
    ]
  }
}