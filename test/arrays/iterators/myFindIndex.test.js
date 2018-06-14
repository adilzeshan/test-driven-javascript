'use strict';

require('../../../lib/arrays/iterators/myFindIndex');
const assert = require('chai').assert;

describe('Array #myFindIndex()', () => {
  context('all callbacks return falsy values', () => {
    it('should run callback array.length times', () => {
      let numberOfTimesCallbackHasRun = 0;

      ['item', 'item', 'item'].myFindIndex(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myFindIndex(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myFindIndex(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myFindIndex(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });
});
