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

    it('should return -1', () => {
      const findIndexResult =
        ['item', 'item', 'item'].myFindIndex(function callback() {
          return false;
        });

      assert.strictEqual(findIndexResult, -1);
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

  context('optional parameter', () => {
    it('should accept an optional this object', () => {
      ['item'].myFindIndex(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });

  context('a callback returns a truthy value', () => {
    it('should terminate early and immediately', () => {
      let numberOfTimesCallbackHasRun = 0;

      [false, true, false].myFindIndex(function callback(element) {
        numberOfTimesCallbackHasRun++;
        return element;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 2);
    });
  });
});
