var c = 5;

console.log('count = %d', c);

console.info('count = %d', c);

console.error('count = %d', c);

console.warn('count = %d', c);

console.time('sum up elements');
var s = 0;
for (var i = 0; i < 1000000; i++) {
  s = s + i*i + 4*i + i/2;
}
console.timeEnd('sum up elements');

