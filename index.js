#! /usr/bin/env node

var
    fs = require('fs')
  , path = require('path')

var sourcefile = path.parse(path.normalize(process.cwd() + '/' + process.argv[2])) // process.cwd() === directory from which node was run
  , sourcefilestr = sourcefile.dir + '/' + sourcefile.base
  , ext = (process.argv[3] === '--jade') ? '.jade' : '.pug'

fs.readFile(sourcefilestr, 'utf8', function (err, data) {
  if (err) return console.error('There was an error reading the file: ', err)
  var outfilestr = sourcefilestr + ext
    , outfile = path.parse(outfilestr)
  data = '-\n  ' + data.replace(/\n/g,'\n  ')
  data = data.replace(/\/\//g, '//-')
  fs.writeFile(outfilestr, data, function (err) {
    if (err) return console.error('There was an error writing the file: ', err)
    console.log('Success! ' + sourcefile.base + ' > ' + outfile.base)
  })
})
