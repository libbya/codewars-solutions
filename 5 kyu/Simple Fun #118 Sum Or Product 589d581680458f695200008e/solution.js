function sumOrProduct(arr) {
  // base case
  if (arr.length === 1) return arr[0];

  arr.sort((a, b) => a - b);

  // if arr contains 1 and 2, replace both with a single 3 and perform recursive step: [1, ..., 2, ...] -> [..., 3, ...]
  // otherwise, multiply or add first 2 entries (whichever is higher) and perform recursive step: [a, b, ...] -> [..., max(a + b, a * b)]

  const newN = Math.max(arr[0] + arr[1], arr[0] * arr[1]);

  // if first number is not 1, arr does not satisfy [ 1, ..., 2, ...]
  if (arr[0] !== 1) return sumOrProduct(arr.slice(2).concat(newN));

  // arr is sorted so we can binary search for 2
  let bounds = [0, arr.length], test = Math.floor((bounds[0] + bounds[1]) / 2);
  while (bounds[0] < bounds[1]) {
    if (arr[test] > 2) bounds[1] = test - 1;
    else if (arr[test] < 2) bounds[0] = test + 1;
    else break;
    test = Math.floor((bounds[0] + bounds[1]) / 2);
  }

  if (arr[test] === 2) {
    // [1, ..., 2, ...] -> [..., 3, ...]
    return sumOrProduct([...arr.slice(1, test), ...arr.slice(test + 1), 3])
  }
  // [a, b, ...] -> [..., max(a + b, a * b)]
  return sumOrProduct(arr.slice(2).concat(newN));
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(sumOrProduct([1, 3, 2]) === 9, 'Failed with input ' + [1, 3, 2])
console.assert(sumOrProduct([1, 2, 1]) === 4, 'Failed with input ' + [1, 2, 1])
console.assert(sumOrProduct([1, 1, 1]) === 3, 'Failed with input ' + [1, 1, 1])
console.assert(sumOrProduct([1]) === 1, 'Failed with input ' + [1])
console.assert(sumOrProduct([9]) === 9, 'Failed with input ' + [9])
console.assert(sumOrProduct([1, 1]) === 2, 'Failed with input ' + [1, 1])
console.assert(sumOrProduct([5, 1]) === 6, 'Failed with input ' + [5, 1])
console.assert(sumOrProduct([1, 5, 7]) === 42, 'Failed with input ' + [1, 5, 7])
console.assert(sumOrProduct([1, 6, 5]) === 36, 'Failed with input ' + [1, 6, 5])
console.assert(sumOrProduct([1, 1, 5, 7]) === 70, 'Failed with input ' + [1, 1, 5, 7])
console.assert(sumOrProduct([1, 1, 1, 1]) === 4, 'Failed with input ' + [1, 1, 1, 1])
console.assert(sumOrProduct([1, 1, 1, 1, 1]) === 6, 'Failed with input ' + [1, 1, 1, 1, 1])
console.assert(sumOrProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === 1458, 'Failed with input ' + [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
console.assert(sumOrProduct([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) === 972, 'Failed with input ' + [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
console.assert(sumOrProduct([1, 2, 1, 4, 5]) === 80, 'Failed with input ' + [1, 2, 1, 4, 5])
console.assert(sumOrProduct([10, 20, 30]) === 6000, 'Failed with input ' + [10, 20, 30])