'use strict';

process.on('uncaughtException', (e) => {
  console.log('on uncaughtException: ' + e.message);
});

const sum = (a, b) => {
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    return a + b;
  } else {
    throw new Error('a and b should be numbers');
  }
};

console.log(sum(2, 3));
console.log(sum(7, 'A'));