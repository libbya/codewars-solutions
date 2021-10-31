function dataReverse(data) {
  return data.length ?
    data
      .join('')
      .match(/.{8}/g)
      .reverse()
      .join('')
      .split('')
      .map(Number)
    : data
}

// Tests
console.log('Running given sample tests; no further output indicates success');
const arrayShallowEquals = require('../../helpers/js/arrayshallowequals');

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
console.assert(arrayShallowEquals(dataReverse(data1), data2))
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]
console.assert(arrayShallowEquals(dataReverse(data3), data4))