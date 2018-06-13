'use strict';

// PURPOSE

// The mySome() array method tests whether at least one element in the array
// passes the test implemented by the provided function. It reimplements, with
// tests, the built-in some() array method.

Array.prototype.mySome = function mySome(callback, optionalThis) {
  if (optionalThis) {
    callback = callback.bind(optionalThis);
  }

  for (let i = 0, length = this.length; i < length; i++) {
    callback(this[i], i, this);
  }
};
