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
});
