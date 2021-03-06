// https://github.com/shelljs/shelljs
require('shelljs/global')
var replace = require("replace")
var path = require('path')
var config = require('../config')

var devPath = config.dev.baseUrl + ':' + config.dev.port

var source = path.resolve(__dirname, '../src/index.html')
var destination = path.resolve(__dirname, '../views/layouts/base.dust')

cp(source, destination)

replace({
  regex: '%DEV_PATH%',
  replacement: devPath,
  paths: ['views/layouts/base.dust'],
  silent: true
})
