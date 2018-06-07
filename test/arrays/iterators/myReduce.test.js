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

    context('callback parameters', () => {
      it('should start by setting first argument to initial value', () => {
        ['item'].myReduce(function callback(accumulator) {
          assert.strictEqual(accumulator, 'initial value');
        }, 'initial value');
      });

      it('should start by setting second argument to first element', () => {
        ['item'].myReduce(function callback(accumulator, currentValue) {
          assert.strictEqual(currentValue, 'item');
        }, 'initial value');
      });
    });
  });
});
