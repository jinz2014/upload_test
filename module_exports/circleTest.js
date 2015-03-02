// root of mod export is not a function
var circle = require('./circle.js');

// { area : [Function], circumference : [Function]}
console.log(circle); 
console.log(circle.area(4));
console.log(circle.circumference(8));

// root of mod export is a function
var square = require('./square.js');
// [Function]
console.log(square);
console.log(square(4));
