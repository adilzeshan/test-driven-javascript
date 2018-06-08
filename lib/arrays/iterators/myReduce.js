'use strict';

// PURPOSE

// The myReduce() array method applies a function against an accumulator and
// each element in the array (from left to right) to reduce it to a single
// value. It reimplements, with tests, the built-in reduce() array method.

Array.prototype.myReduce = function myReduce(callback, initialValue) {
  const arrayOfIndices = Object.keys(this);
  let startingIndex = Number(arrayOfIndices[0]);
  let resultSoFar = initialValue;

  if (initialValue === undefined) {
    if (arrayOfIndices.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    resultSoFar = this[arrayOfIndices[0]];
    startingIndex++;
  }

  for (let i = startingIndex, length = this.length; i < length; i++) {
    if (i in this) {
      resultSoFar = callback(resultSoFar, this[i], i);
    }
  }

  return resultSoFar;
};
