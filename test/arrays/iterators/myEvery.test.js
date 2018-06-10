'use strict';

require('../../../lib/arrays/iterators/myEvery');
const assert = require('chai').assert;

describe('Array #myEvery()', () => {
  context('array is dense', () => {
    context('all callbacks return truthy values', () => {
      it('should run the callback array.length times', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item', 'item', 'item'].myEvery(function callback() {
          numberOfTimesCallbackHasRun++;
          return true;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 3);
      });

      it('should return true', () => {
        const everyResult = ['item'].myEvery(function callback() {
          return true;
        });

        assert.strictEqual(everyResult, true);
      });
    });

    context('a callback returns a falsy value', () => {
      it('should terminate early and immediately', () => {
        let numberOfTimesCallbackHasRun = 0;

        [true, false, true].myEvery(function callback(element) {
          numberOfTimesCallbackHasRun++;
          return element;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 2);
      });
    });
  });

  context('callback parameters', () => {
    it('should pass in ith element as first argument to callback', () => {
      ['item'].myEvery(function callback(element) {
        assert.strictEqual(element, 'item');
      });
    });

    it('should pass in ith position as second argument to callback', () => {
      ['item'].myEvery(function callback(element, index) {
        assert.strictEqual(index, 0);
      });
    });

    it('should pass in original array as third argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myEvery(function callback(element, index, originalArray) {
        assert.strictEqual(originalArray, testArray);
      });
    });
  });

  context('optional parameter', () => {
    it('should accept an optional this object', () => {
      ['item'].myEvery(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });
});
