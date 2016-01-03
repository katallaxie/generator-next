// syntax in ES3 and ES5
'use strict';

// ES5 and beyond ...
require('babel-register')({
  // use .babelrc
  babelrc: true
});

// requiring the generator
exports = module.exports = require('./generator');
