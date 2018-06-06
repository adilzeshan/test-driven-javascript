'use strict';

// PURPOSE

// The myMap() array method creates a new array with the results of
// calling a provided function on every element in the calling array.
// It reimplements, with tests, the built-in map() array method.

Array.prototype.myMap = function myMap(callback, optionalThis) {
  const mappedArray = [];

  if (optionalThis) {
    callback = callback.bind(optionalThis);
  }

  for (let i = 0, length = this.length; i < length; i++) {
    if (i in this) {
      mappedArray[i] = callback(this[i], i, this);
    }
  }

  return mappedArray;
};
