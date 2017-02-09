var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.server.base.conf')

var webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(projectRoot, './bin'),
    filename: 'www.js'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  }
})

module.exports = webpackConfig
