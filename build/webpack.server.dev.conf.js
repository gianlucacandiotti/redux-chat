var fs = require('fs')
var path = require('path')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: path.resolve(projectRoot, './bin/www')
  },
  output: {
    path: path.resolve(projectRoot, './bin'),
    filename: 'www.build.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(projectRoot, './node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'sass': path.resolve(projectRoot, './src/sass'),
      'assets': path.resolve(projectRoot, './src/assets'),
      'components': path.resolve(projectRoot, './src/js/components'),
      'modules': path.resolve(projectRoot, './src/js/modules'),
      'pages': path.resolve(projectRoot, './src/js/pages'),
      'routers': path.resolve(projectRoot, './src/js/routers'),
      'factories': path.resolve(projectRoot, './src/js/factories'),
      'utils': path.resolve(projectRoot, './src/js/utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          emitFile: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          emitFile: false
        }
      },
      {
        test: /\.scssm$/,
        loader: [
          {
            loader: 'css-loader/locals',
            query: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              modules: true
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
    poll: 1000
  }
}
