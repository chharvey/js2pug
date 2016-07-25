# js2pug
Converts Javascript into Pug

This program converts a normal Javascript file into
a [**Pug**](https://github.com/pugjs/pug) file
(formerly [Jade](http://jade-lang.com/)),
containing unbuffered block code.

This is really useful if you want to write your (server-side) Pug data in Javascript
and also want it available client-side. Just serve both `.js` and `.pug` files!

## Installation & Usage
```
$ npm install [-g] js2pug
```

Currently only available on the command line. Will introduce programmatic support later.

```
$ js2pug file.js [--jade]
```
where `file.js` is the name of your source file, and
`file.js.pug` will be the name of the output file (in the same directory).

The `--jade` option specifies `.jade` instead of `.pug` for the output file extension.

## Example

src (`file.js`):
```js
var MyClass = (function () {
  function MyClass() {
    // CONSTRUCTOR
  }
  return MyClass
})()
```

out (`file.js.pug` or `file.js.jade`):
```jade
-
  var MyClass = (function () {
    function MyClass() {
      //- CONSTRUCTOR
    }
    return MyClass
  })()
```

## Algorithm
- take contents of file, named 'file.js'
- search-and-replace every `\n` (U+000A line feed) with
  `\n  ` (U+000A line feed, U+0020 space, U+0020 space) (for indentation)
- prepend `-\n` (U+002D hyphen-minus, U+000A line feed)
- search-and-replace every `//` with `//-` (for unbuffered comments)
- write to new file 'file.js.pug'
