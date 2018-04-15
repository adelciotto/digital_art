const path = require('path')

module.exports = {
  entry: {
    churches: './src/churches/churches.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js'],
    alias: {
      common: path.resolve(__dirname, 'src/common')
    }
  }
}
