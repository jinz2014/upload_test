var clc = require('cli-color');

console.log("Hello Node");

function print(word) {
  console.log(word);
}

function colorPrint(word) {
  console.log(clc.red(word));
}

print("Hello Node");
colorPrint("Hello Node");
