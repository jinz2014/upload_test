var assert = require('assert');

function testAssert(a, b) {
  assert.equal(a, b);
  assert.deepEqual(a, b);
  assert.strictEqual(a, b);
}

var s1 = 'abc';
var s2 = 'abc';
testAssert(s1, s2);

var s1 = 2;
var s2 = 2;
testAssert(s1, s2);

var o1 = [1,2,3];
var o2 = o1;
testAssert(o1, o2);

// o1 o2 are not the same object, == is false, deepEqual is true
var o1 = [1,2,3];
var o2 = [1,2,3];
assert.notEqual(o1,o2);
assert.deepEqual(o1, o2);
assert.notStrictEqual(o1, o2);
