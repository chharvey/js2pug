# js2pug
Converts Javascript into Pug

This program converts a normal Javascript file into
a [**Pug**](https://github.com/pugjs/pug) file
(formerly [Jade](http://jade-lang.com/)),
containing unbuffered block code.

This is useful if you want to write your (server-side) Pug data in actual Javascript.

## Installation & Usage

### Command Line
To run from the command line, install globally.
```
$ npm install -g js2pug
$ js2pug [--jade] file.js
```
where `file.js` is the name of your source file (relative path), and
`file.js.pug` will be the name of the output file (in the same directory).

The `--jade` option specifies `.jade` instead of `.pug` for the output file extension.

### Programmatic
To use in your own node module, install as a dependency.
```
$ npm install --save[-dev] js2pug
```
```js
var js2pug = require('js2pug')

js2pug('file.js')       // file.js -> file.js.pug
js2pug('file.js', true) // file.js -> file.js.jade
```
The function `js2pug()` returns `undefined`. (This may change at a later time.)

## Example

src: `file.js`:
```js
var MyClass = (function () {
  // CONSTRUCTOR
  function MyClass() {
  }
  return MyClass
})()
```

out: `file.js.pug` or `file.js.jade`:
```jade
-
  var MyClass = (function () {
    //- CONSTRUCTOR
    function MyClass() {
    }
    return MyClass
  })()
```

## Changelog
On [GitHub](https://github.com/chharvey/js2pug/releases).
