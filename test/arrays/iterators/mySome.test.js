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

      it('should return false', () => {
        const someResult = ['item', 'item', 'item'].mySome(function callback() {
          return false;
        });

        assert.strictEqual(someResult, false);
      });
    });
  });

  context('a callback returns a truthy value', () => {
    it('should terminate early and immediately', () => {
      let numberOfTimesCallbackHasRun = 0;

      [false, true, false].mySome(function callback(element) {
        numberOfTimesCallbackHasRun++;
        return element;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 2);
    });

    it('should return true', () => {
      const someResult = ['item'].mySome(function callback() {
        return true;
      });

      assert.strictEqual(someResult, true);
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

  context('optional parameter', () => {
    it('should accept an optional this object', () => {
      ['item'].mySome(function callback() {
        assert.strictEqual(this.prop, 'I am accessible inside the callback.');
      }, { prop: 'I am accessible inside the callback.' });
    });
  });

  context('array is sparse', () => {
    it('should not run callback on undeclared indices', () => {
      let numberOfTimesCallbackHasRun = 0;

      [, , 'item'].mySome(function callback() {
        numberOfTimesCallbackHasRun++;
        return false;
      });

      assert.strictEqual(numberOfTimesCallbackHasRun, 1);
    });
  });
});
