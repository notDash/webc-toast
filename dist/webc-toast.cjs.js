'use strict';

// src/foo.js
function foo () {
    console.log(`this is cool ${'hahah'}`);
  }

// src/main.js

console.log(foo());
console.log(1);

function main () {
  console.log(`this is cool ${'hahah'}`);
}

module.exports = main;
