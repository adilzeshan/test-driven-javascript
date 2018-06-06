'use strict';

// PURPOSE

// The myFilter() array method creates a new array with all
// elements that pass the test implemented by the provided function.
// It reimplements, with tests, the built-in filter() array method.

Array.prototype.myFilter = function myFilter(callback, optionalThis) {
  let filteredArray = [];

  if (optionalThis) {
    callback = callback.bind(optionalThis);
  }

  for (let i = 0, length = this.length; i < length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
  }

  return filteredArray;
};
