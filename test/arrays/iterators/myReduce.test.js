'use strict';

require('../../../lib/arrays/iterators/myReduce');
const assert = require('chai').assert;

describe('Array #myReduce()', () => {
  context('with optional initial value', () => {
    context('array is dense', () => {
      it('should run the callback array.length times', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item', 'item', 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        }, 'initial value');

        assert.strictEqual(numberOfTimesCallbackHasRun, 3);
      });
    });
  });
});
