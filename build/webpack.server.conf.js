var fs = require('fs')
var path = require('path')
var utils = require('./utils')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../bin/www')
  },
  output: {
    path: path.resolve(__dirname, '../bin'),
    filename: 'www.build.js'
  },
  target: 'node',
  externals: fs.readdirSync(path.resolve(__dirname, '../node_modules')).concat([
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
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'sass': path.resolve(__dirname, '../src/sass'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/js/components'),
      'modules': path.resolve(__dirname, '../src/js/modules'),
      'routers': path.resolve(__dirname, '../src/js/routers'),
      'pages': path.resolve(__dirname, '../src/js/pages'),
      'utils': path.resolve(__dirname, '../src/js/utils')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, '..')
        ],
        exclude: /node_modules/,
        query: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
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
        loader: 'css/locals?modules&importLoaders=1!postcss!sass',
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
  }
}
