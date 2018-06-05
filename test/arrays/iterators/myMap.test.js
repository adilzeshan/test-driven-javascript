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
  });
});
