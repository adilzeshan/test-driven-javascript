'use strict';

// PURPOSE

// The myEach() array method executes a provided function once for each array
// element. It reimplements, with tests, the built-in forEach() array method.

Array.prototype.myEach = function myEach(callback, optionalThis) {
  if (optionalThis) {
    callback = callback.bind(optionalThis);
  }

  for (let i = 0, length = this.length; i < length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};
