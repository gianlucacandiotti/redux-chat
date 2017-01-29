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
    extensions: ['', '.js', '.jsx', '.json'],
    fallback: [path.join(projectRoot, './node_modules')],
    alias: {
      'sass': path.resolve(projectRoot, './src/sass'),
      'assets': path.resolve(projectRoot, './src/assets'),
      'components': path.resolve(projectRoot, './src/js/components'),
      'modules': path.resolve(projectRoot, './src/js/modules'),
      'routers': path.resolve(projectRoot, './src/js/routers'),
      'pages': path.resolve(projectRoot, './src/js/pages'),
      'utils': path.resolve(projectRoot, './src/js/utils')
    }
  },
  resolveLoader: {
    fallback: [path.join(projectRoot, './node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          emitFile: false
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          emitFile: false
        }
      },
      {
        test: /\.scssm$/,
        loader: 'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss!sass',
        include: [
          path.resolve(__dirname, '..')
        ],
        exclude: /node_modules/
      }
    ]
  },
  postcss() {
    return [
      require('autoprefixer')
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}
