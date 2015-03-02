var assert = require('assert');

function testAssert(a, b) {
  assert.deepEqual(a, b);
  assert.equal(a, b);
}

// substr equavilent to substring
var s1 = 'Node.js ABC';
testAssert(s1.substr(0,1), s1.substring(0,1));

// return the index
var s2 = 'Node.js is similar to Javascript';
testAssert(
    console.log(s2.indexOf('s')),
    console.log(s2.indexOf('s')
      ));
console.log(s2.lastIndexOf('s'));
assert.equal(-1, s2.indexOf('V'));

