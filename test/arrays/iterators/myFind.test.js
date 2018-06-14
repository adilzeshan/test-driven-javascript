'use strict';

require('../../../lib/arrays/iterators/myFind');
const assert = require('chai').assert;

describe('Array #myFind()', () => {
  context('all callbacks return falsy values', () => {
    it('should run the callback array.length times', () => {
      let numberOfTimesCallbackHasRun = 0;

      ['item', 'item', 'item'].myFind(function callback() {
        numberOfTimesCallbackHasRun++;
        return false;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 3);
    });

    it('should return undefined', () => {
      const findResult = ['item', 'item', 'item'].myFind(function callback() {
        return false;
      });

      assert.strictEqual(findResult, undefined);
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myFind(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myFind(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myFind(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });

  context('optional parameter', () => {
    it('should accept an optional this object', () => {
      ['item'].myFind(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });

  context('a callback returns a truthy value', () => {
    it('should terminate early and immediately', () => {
      let numberOfTimesCallbackHasRun = 0;

      [false, true, false].myFind(function callback(element) {
        numberOfTimesCallbackHasRun++;
        return element;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 2);
    });

    it('should return the element for which callback is truthy', () => {
      const findResult =
        ['item 1', 'item 2', 'item 3'].myFind(function callback(element) {
          return element === 'item 2';
        });

      assert.strictEqual(findResult, 'item 2');
    });
  });
});
