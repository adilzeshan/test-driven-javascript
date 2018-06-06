'use strict';

require('../../../lib/arrays/iterators/myFilter');
const assert = require('chai').assert;

describe('Array #myFilter()', () => {
  context('array is dense', () => {
    it('should run the callback array.length times', () => {
      let numberOfTimesCallbackHasRun = 0;

      ['item', 'item', 'item'].myFilter(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('array is sparse', () => {
    it('should not run the callback for undeclared indices', () => {
      let numberOfTimesCallbackHasRun = 0;

      [, 'item', , 'item', , 'item'].myFilter(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myFilter(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myFilter(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myFilter(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });

  context('optional parameter', () => {
    it('should accept an optional parameter', () => {
      ['item'].myFilter(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });

  context('return value', () => {
    it('should return an array', () => {
      const output = ['item'].myFilter(function callback() { });

      assert.strictEqual(Array.isArray(output), true);
    });

    it('should return a new array, not the original array', () => {
      const originalArray = ['item'];

      const newArray = originalArray.myFilter(function callback() { });

      assert.notStrictEqual(newArray, originalArray);
    });
  });
});
