var n = 3;
var b = 0;

/* no error caught !
try {
  var c = n/b;
} catch (err) {
  console.log(err);
}
*/

try {
  var c = n/b;
  if (c == Infinity)
    throw new Error("Divide by 0");
} catch (err) {
  // [Error: Divide by 0]
  console.log(err);
}
