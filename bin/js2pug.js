#! /usr/bin/env node

var
    fs = require('fs')
  , path = require('path')
var
    program = require('commander')
  , js2pug = require('../')

program
  .option('-j, --jade', 'change the output extension to .jade')
  .arguments('<file>')
  .parse(process.argv)

js2pug(program.args[0], program.jade)
