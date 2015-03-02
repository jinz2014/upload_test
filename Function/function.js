console.log('Basic function');
function sum(a) {
  var t = 0;
  for (var i = 0; i <= a; i++) {
    t = t + i;
  }
  return t;
}

for (var i = 0; i <= 5; i++) {
  // call the function sum directly
  var res = sum(i);
  console.log(res);
}


console.log('Basic function callback');
function callback(funcPtr, arg) {
  return funcPtr(arg);
}

// pass function sum as the parameter to the function perform
// call the function sum thru the callback
for (var i = 0; i <= 5; i++) {
  res = callback(sum, i);
  console.log(res);
}

console.log('Basic function callback using a var');
var funcPtr2 = function(arg) {
  var t = 0;
  for (var i = 0; i <= arg; i++) {
    t = t + i;
  }
  return t;
}
// pass function sum as the parameter to the function perform
// pass the input to the callee
for (var i = 0; i <= 5; i++) {
  res = funcPtr2(i);
  console.log(res);
}


console.log('Basic function callback with return value');

// pass the output to the caller
function perform(funcPtr, arg) {
  var t = 0;
  for (var i = 0; i <= arg; i++) {
    t = t + i;
  }
  funcPtr(t);
}

// pass sum as the parameter to the function perform
for (var i = 0; i <= 5; i++) {
  perform(function(res) {console.log(res)} , i);
}


