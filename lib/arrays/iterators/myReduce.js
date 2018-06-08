'use strict';

// PURPOSE

// The myReduce() array method applies a function against an accumulator and
// each element in the array (from left to right) to reduce it to a single
// value. It reimplements, with tests, the built-in reduce() array method.

Array.prototype.myReduce = function myReduce(callback, initialValue) {
  let startingIndex = Number(Object.keys(this)[0]);
  let resultSoFar = initialValue;

  if (initialValue === undefined) {
    resultSoFar = this[0];
    startingIndex++;
  }

  for (let i = startingIndex, length = this.length; i < length; i++) {
    if (i in this) {
      resultSoFar = callback(resultSoFar, this[i], i);
    }
  }

  return resultSoFar;
};
