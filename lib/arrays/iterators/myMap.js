'use strict';

// PURPOSE

// The myMap() array method creates a new array with the results of
// calling a provided function on every element in the calling array.
// It reimplements, with tests, the built-in map() array method.

Array.prototype.myMap = function myMap(callback) {
  for (let i = 0, length = this.length; i < length; i++) {
    if (i in this) {
      callback(this[i], i);
    }
  }
};
