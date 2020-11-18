'use strict';

// src/foo.js
var foo = 'hello world!';

// src/main.js
function main () {
  console.log(foo);
  console.log("this is cool ".concat('hahah'));
}

module.exports = main;
