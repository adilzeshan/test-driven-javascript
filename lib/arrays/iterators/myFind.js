'use strict';

// PURPOSE

// The myFind() array method returns the value of the first element in the array
//  that satisfies the provided testing function. Otherwise undefined is
// returned. It reimplements, with tests, the built-in find() array method.

Array.prototype.myFind = function myFind(callback) {
  for (let i = 0, length = this.length; i < length; i++) {
    callback(this[i], i);
  }
};
