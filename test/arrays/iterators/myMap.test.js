'use strict';

require('../../../lib/arrays/iterators/myMap');
const assert = require('chai').assert;

describe('Array #myMap()', () => {
  context('array is dense', () => {
    it('should run the callback array.length times', () => {
      let numberOfTimesCallbackHasRun = 0;

      ['item', 'item', 'item'].myMap(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('array is sparse', () => {
    it('should not run the callback on undeclared indices', () => {
      let numberOfTimesCallbackHasRun = 0;

      [, 'item', , 'item', , 'item'].myMap(function callback() {
        numberOfTimesCallbackHasRun++;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myMap(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myMap(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myMap(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });

  context('optional parameter', () => {
    it('should accept an optional parameter', () => {
      ['item'].myMap(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });

  context('return value', () => {
    it('should return an array', () => {
      const output = ['item'].myMap(function callback() { });

      assert.strictEqual(Array.isArray(output), true);
    });

    it('should return a new array, not the original array', () => {
      const originalArray = ['item'];

      const newArray = originalArray.myMap(function callback() { });

      assert.notStrictEqual(newArray, originalArray);
    });

    it('should return a mapped array', () => {
      const mappedArray = [1].myMap(function callback(element) {
        return element * 2;
      });

      assert.strictEqual(mappedArray[0], 2);
    });

    it('should preserve undeclared indices in the mapped array', () => {
      const mappedArray = [, 'item'].myMap(function callback() { });

      assert.strictEqual(0 in mappedArray, false);
      assert.strictEqual(mappedArray.length, 2);
    });
  });
});
