var webpack    = require('webpack')
module.exports = function ()
{
  return {
    entry: {
      main: './src/index.js',
      vendor: 'moment'
    },
    output: {
      filename: '[name].js',
      path: './dist'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      })
    ]
  }
}