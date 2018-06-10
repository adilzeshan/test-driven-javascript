# Test-Driven JavaScript

This project reimplements various built-in JavaScript methods using test-driven development.

## Arrays
### Iterators

| Native        | Custom         | Test Suite   | Implementation
|:------------- |:---------------|:-------------|:--------------
| [`.forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | `.myEach`       | [`myEach.test.js`](/test/arrays/iterators/myEach.test.js) | [`myEach.js`](/lib/arrays/iterators/myEach.js) |
| [`.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) | `.myMap`        | [`myMap.test.js`](/test/arrays/iterators/myMap.test.js) | [`myMap.js`](/lib/arrays/iterators/myMap.js) |
| [`.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) | `.myFilter`     | [`myFilter.test.js`](/test/arrays/iterators/myFilter.test.js) | [`myFilter.js`](/lib/arrays/iterators/myFilter.js) |
| [`.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) | `.myReduce`     | [`myReduce.test.js`](/test/arrays/iterators/myReduce.test.js) | [`myReduce.js`](/lib/arrays/iterators/myReduce.js) |
| [`.reduceRight`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) | `.myReduceRight`| | |
| [`.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) | `.myEvery`      | [`myEvery.test.js`](/test/arrays/iterators/myEvery.test.js) | [`myEvery.js`](/lib/arrays/iterators/myEvery.js) |
| [`.some`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) | `.mySome`       | | |
| [`.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) | `.myFind`       | | |
| [`.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) | `.myFindIndex`  | | |

### Accessors

| Native        | Custom         | Test Suite   | Implementation
|:------------- |:---------------|:-------------|:--------------
| [`.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | `.myConcat`     | | |
| [`.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) | `.myIncludes`   | | |
| [`.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) | `.myIndexOf`    | | |
| [`.lastIndexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | `.myLastIndexOf`| | |
| [`.join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) | `.myJoin`       | | |
| [`.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) | `.mySlice`      | | |
| [`.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) | `.myToString`   | | |

### Mutators

| Native        | Custom         | Test Suite   | Implementation
|:------------- |:---------------|:-------------|:--------------
| [`.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) | `.myPop`        | | |
| [`.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) | `.myPush`       | | |
| [`.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) | `.myFill`       | | |
| [`.copyWithin`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) | `.myCopyWithin` | | |
| [`.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) | `.myReverse`   | | |
| [`.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) | `.myShift`      | | |
| [`.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) | `.myUnshift`    | | |
| [`.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) | `.mySplice`     | | |
| [`.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) | `.mySort`       | | |


## Functions

| Native        | Custom         | Test Suite   | Implementation
|:------------- |:---------------|:-------------|:--------------
| [`.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) | `.myBind`       | | |
| [`.call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) | `.myCall`       | | |
| [`.apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) | `.myApply`      | | |

## Objects

## Strings

## Numbers

## Booleans

## Requirements
* Node and NPM

## Installation

```
$ git clone git@github.com:adilzeshan/test-driven-javascript.git
$ cd test-driven-javascript
$ npm install
```

## Usage

`$ npm test`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)