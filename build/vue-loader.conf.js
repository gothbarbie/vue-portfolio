var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'
var variables = require('../src/variables')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('postcss-import')({
      path: 'src'
    }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions'],
      features: {
        customProperties: { variables }
      }
    })
  ]
}
