'use strict';

require('../../../lib/arrays/iterators/myEach');
const assert = require('chai').assert;

describe('Array #myEach()', () => {
  context('array is dense', () => {
    it('should run the callback array.length times', () => {
      let numberOfTimesCallbackHasRun = 0;

      ['item', 'item', 'item'].myEach(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('array is sparse', () => {
    it('should not run the callback on undeclared indices', () => {
      let numberOfTimesCallbackHasRun = 0;

      [, 'item', , 'item', , 'item'].myEach(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myEach(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myEach(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      let testArray = ['item', 'item'];
      testArray.myEach(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });
});
