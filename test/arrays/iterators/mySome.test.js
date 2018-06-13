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
});
