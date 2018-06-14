'use strict';

// PURPOSE

// The myFindIndex() array method returns the index of the first element in the
// array that satisfies the provided testing function. Otherwise -1 is returned.
// It reimplements, with tests, the built-in findIndex() array method.

Array.prototype.myFindIndex = function findIndex(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i);
  }
};
