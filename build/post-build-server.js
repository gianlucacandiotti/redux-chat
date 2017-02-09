var path = require('path')
var fs = require('fs-extra')

var binPath = path.resolve(__dirname, '../bin')
var distPath = path.resolve(__dirname, '../dist')

fs.emptydirSync(binPath)

fs.copySync(path.resolve(distPath, 'www.bundle.js'), path.resolve(binPath, 'www.js'));
