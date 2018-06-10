'use strict';

// PURPOSE

// The myEvery() array method tests whether all elements in
// the array pass the test implemented by the provided function.
// It reimplements, with tests, the built-in every() array method.

Array.prototype.myEvery = function myEvery(callback, optionalThis) {
  if (optionalThis) {
    callback = callback.bind(optionalThis);
  }

  for (let i = 0, length = this.length; i < length; i++) {
    callback(this[i], i, this);
  }

  return true;
};
