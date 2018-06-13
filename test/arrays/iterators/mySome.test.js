'use strict';

require('../../../lib/arrays/iterators/mySome');
const assert = require('chai').assert;

describe('Array #mySome()', () => {
  context('array is dense', () => {
    context('all callbacks return falsy values', () => {
      it('should run the callback array.length times', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item', 'item', 'item'].mySome(function callback() {
          numberOfTimesCallbackHasRun++;
          return false;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 3);
      });
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].mySome(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].mySome(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.mySome(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });
});