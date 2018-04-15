const config = require('./webpack.config.js')

config.mode = 'development'
config.devtool = 'source-map'
config.devServer = {
  port: 9000
}

module.exports = config
