'use strict';

// PURPOSE

// The myReduce() array method applies a function against an accumulator and
// each element in the array (from left to right) to reduce it to a single
// value. It reimplements, with tests, the built-in reduce() array method.

Array.prototype.myReduce = function myReduce(callback, initialValue) {
  for (let i = 0, length = this.length; i < length; i++) {
    callback(initialValue, this[0], 0);
  }
};