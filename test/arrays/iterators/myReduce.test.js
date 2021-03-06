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

      it('should actually reduce', () => {
        const reduceResult =
          [1, 2, 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);

        assert.strictEqual(reduceResult, 6);
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

      it('should start by setting third argument to first index', () => {
        ['item'].myReduce(function callback(accumulator, currentValue, index) {
          assert.strictEqual(index, 0);
        }, 'initial value');
      });
    });

    context('array is sparse', () => {
      it('should not run callback on missing indices at start of array', () => {
        let numberOfTimesCallbackHasRun = 0;

        [, 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        }, 'initial value');

        assert.strictEqual(numberOfTimesCallbackHasRun, 1);
      });

      it('should not run callback on missing indices throughout array', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item', , 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        }, 'initial value');

        assert.strictEqual(numberOfTimesCallbackHasRun, 2);
      });

      it('should reduce, even if array starts with missing indices', () => {
        const reduceResult =
          [, 1, 2, 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);

        assert.strictEqual(reduceResult, 6);
      });

      it('should reduce, even if array has missing indices throughout', () => {
        const reduceResult =
          [1, , 2, , 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);

        assert.strictEqual(reduceResult, 6);
      });
    });

    context('array is empty', () => {
      it('should return initial value', () => {
        const result = [].myReduce(function callback() { }, 'initial value');

        assert.strictEqual(result, 'initial value');
      });

      it('should not run callback at all', () => {
        let numberOfTimesCallbackHasRun = 0;

        [].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        }, 'initial value');

        assert.strictEqual(numberOfTimesCallbackHasRun, 0);
      });
    });
  });

  context('without optional initial value', () => {
    context('array is dense', () => {
      it('should run the callback array.length - 1 times', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item', 'item', 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 2);
      });

      it('should actually reduce', () => {
        const reduceResult =
          [1, 2, 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          });

        assert.strictEqual(reduceResult, 6);
      });

      it('should return solo value for array with only one element', () => {
        const reduceResult = ['item'].myReduce(function callback() { });

        assert.strictEqual(reduceResult, 'item');
      });

      it('should not run callback for array with only one element', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 0);
      });
    });

    context('callback parameters', () => {
      it('should start by setting first argument to first element', () => {
        ['initial value', 'item'].myReduce(function callback(accumulator) {
          assert.strictEqual(accumulator, 'initial value');
        });
      });

      it('should start by setting second argument to second element', () => {
        ['initial value', 'item']
          .myReduce(function callback(accumulator, currentValue) {
            assert.strictEqual(currentValue, 'item');
          });
      });

      it('should start by setting third argument to second index', () => {
        ['initial value', 'item']
          .myReduce(function callback(accumulator, currentValue, currentIndex) {
            assert.strictEqual(currentIndex, 1);
          });
      });
    });

    context('array is sparse', () => {
      it('should not run callback on missing indices at start of array', () => {
        let numberOfTimesCallbackHasRun = 0;

        [, 'initial value', 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 1);
      });

      it('should not run callback on missing indices throughout array', () => {
        let numberOfTimesCallbackHasRun = 0;

        ['initial value', , 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 1);
      });

      it('should reduce, even if array starts with missing indices', () => {
        const reduceResult =
          [, 1, 2, 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          });

        assert.strictEqual(reduceResult, 6);
      });

      it('should reduce, even if array has missing indices throughout', () => {
        const reduceResult =
          [1, , 2, , 3].myReduce(function callback(accumulator, currentValue) {
            return accumulator + currentValue;
          });

        assert.strictEqual(reduceResult, 6);
      });

      it('should return solo value for array with only one element', () => {
        const reduceResult = [, , 'item'].myReduce(function callback() { });

        assert.strictEqual(reduceResult, 'item');
      });

      it('should not run callback for array with only one element', () => {
        let numberOfTimesCallbackHasRun = 0;

        [, , 'item'].myReduce(function callback() {
          numberOfTimesCallbackHasRun++;
        });

        assert.strictEqual(numberOfTimesCallbackHasRun, 0);
      });
    });

    context('array is empty', () => {
      it('should throw a TypeError', () => {
        let isError = false;

        try {
          [].myReduce(function callback() { });
        } catch (error) {
          isError = error instanceof TypeError;
        }

        assert.strictEqual(isError, true);
      });

      it('should throw a TypeError for sparse array', () => {
        let isError = false;

        try {
          [, , , ].myReduce(function callback() { });
        } catch (error) {
          isError = error instanceof TypeError;
        }

        assert.strictEqual(isError, true);
      });
    });
  });

  context('optional callback parameter', () => {
    it('should pass in original array as fourth argument to callback', () => {
      const testArray = ['item', 'item'];

      testArray.myReduce(
        function callback(
          accumulator,
          currentValue,
          currentIndex,
          originalArray
        ) {
          assert.strictEqual(originalArray, testArray);
        });
    });
  });
});
