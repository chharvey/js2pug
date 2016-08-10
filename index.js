var
    fs = require('fs')
  , path = require('path')
  , program = require('commander')

/**
 * Converts a js file into a Pug file containing unbuffered block code.
 * @param  {string} file    the file (relative directory) to convert
 * @param  {boolean} jade   whether to use file extension `.jade` (truthy) or `.pug` (falsy)
 * @return {undefined}      returns undefined
 */
module.exports = function js2pug(file, jade) {
  // Algorithm
  // - take contents of file, named 'file.js'
  // - search-and-replace every `\n` (U+000A line feed) with
  //   `\n  ` (U+000A line feed, U+0020 space, U+0020 space) (for indentation)
  // - prepend `-\n` (U+002D hyphen-minus, U+000A line feed)
  // - search-and-replace every `//` with `//-` (for unbuffered comments)
  // - write to new file 'file.js.pug'
  var sourcefile = path.parse(path.normalize(process.cwd() + '/' + file))
    , sourcefilestr = sourcefile.dir + '/' + sourcefile.base

  fs.readFile(sourcefilestr, 'utf8', function (err, data) {
    if (err) return console.error('There was an error reading the file: ', err)
    var outfilestr = sourcefilestr + ((jade) ? '.jade' : '.pug')
      , outfile = path.parse(outfilestr)
    data = '-\n  ' + data.replace(/\n/g,'\n  ')
    data = data.replace(/\/\//g, '//-')
    fs.writeFile(outfilestr, data, function (err) {
      if (err) return console.error('There was an error writing the file: ', err)
      console.log('Success! ' + sourcefile.base + ' > ' + outfile.base)
    })
  })
  return
}
