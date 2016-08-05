# js2pug
Converts Javascript into Pug

This program converts a normal Javascript file into
a [**Pug**](https://github.com/pugjs/pug) file
(formerly [Jade](http://jade-lang.com/)),
containing unbuffered block code.

This is useful if you want to write your (server-side) Pug data in actual Javascript.

## Installation & Usage
```
$ npm install [-g] js2pug
```

Currently only available on the command line. Will introduce programmatic support later.

```
$ js2pug [--jade] file.js
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
