#! /usr/bin/env node

var
    fs = require('fs')
  , path = require('path')
  , program = require('commander')

program
  .option('-j, --jade', 'change the output extension to .jade')
  .arguments('<file>')
  .parse(process.argv)

var sourcefile = path.parse(path.normalize(process.cwd() + '/' + program.args[0]))
  , sourcefilestr = sourcefile.dir + '/' + sourcefile.base

fs.readFile(sourcefilestr, 'utf8', function (err, data) {
  if (err) return console.error('There was an error reading the file: ', err)
  var outfilestr = sourcefilestr + ((program.jade) ? '.jade' : '.pug')
    , outfile = path.parse(outfilestr)
  data = '-\n  ' + data.replace(/\n/g,'\n  ')
  data = data.replace(/\/\//g, '//-')
  fs.writeFile(outfilestr, data, function (err) {
    if (err) return console.error('There was an error writing the file: ', err)
    console.log('Success! ' + sourcefile.base + ' > ' + outfile.base)
  })
})
