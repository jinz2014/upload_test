// private var PI
var PI = Math.PI;
 
// export area which is a function with one argument
exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};
