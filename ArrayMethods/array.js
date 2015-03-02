var assert = require('assert');

var array1 = [];

//
var array2 = [1, 2];

//
var array3 = new Array();

// support elements of different type
array1.push('a');
array1.push("a");
array1.push(1);
array1.push('1');
array1.push(2);
console.log(array1);
// a1
console.log(array1[0] + array1[2]);
console.log(array1[0] + array1[3]);

//---------------------------------
// array 2
//---------------------------------

array2.push(3);
array2.push(4);
assert.equal(array2.length, 4);
console.log(array2);

// pop 4 
array2.pop();

// remove 1 and 2 in [1,2,3]
array2.splice(0, 2);

console.log(array2);
