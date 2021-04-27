function cache(func) {

  // cache
  const c = new Map();

  return function () {
    // Need to serialize arguments because Map.has() and Map.get()
    // compare objects by SameValueZero which compares objects by reference
    // NOTE: This will break when given arguments that don't serialize to JSON
    // (e.g. functions) but no such values are tested
    if (!c.has(JSON.stringify(arguments))) {
      // cache result if not already in cache
      c.set(JSON.stringify(arguments), func(...arguments))
    }
    // now result is guaranteed to be in cache; get and return it
    return c.get(JSON.stringify(arguments));
  }
}

// Tests
console.log('Running given sample tests; no further output indicates success');

var complexFunctionCalls = 0;
var complexFunction = function (arg1) {
  complexFunctionCalls++;
  return arg1.split('').reverse().join('');
};
var voidFunction = function () {
  complexFunctionCalls++;
};

var cached = cache(complexFunction);

console.assert(typeof cached === 'function', 'Your cache function must return a function');

console.assert(cached('foo') === 'oof', 'The cache function returned incorrect result');
console.assert(complexFunctionCalls == 1, 'The inner function wasn\'t called');
console.assert(cached('foo') === 'oof', 'The cache function returned incorrect result');
console.assert(complexFunctionCalls == 1, 'The inner function was called multiple times');

console.assert(cached('bar') === 'rab', 'The cache function returned incorrect result');
console.assert(complexFunctionCalls == 2, 'The inner function wasn\'t called');
console.assert(cached('bar') === 'rab', 'The cache function returned incorrect result');
console.assert(complexFunctionCalls == 2, 'The inner function was called multiple times');

console.assert(cached('foo') === 'oof', 'The cache function returned incorrect result');
console.assert(complexFunctionCalls == 2, 'The inner function was called multiple times');

complexFunctionCalls = 0;
cached = cache(voidFunction);

console.assert(cached() === undefined, 'A void function must still return undefined');
console.assert(complexFunctionCalls == 1, 'The inner function wasn\'t called');
console.assert(cached() === undefined, 'A void function must still return undefined');
console.assert(complexFunctionCalls == 1, 'The inner function was called multiple times');

var cachedSquare = cache(function (n) { return n * n; });
var cachedCube = cache(function (n) { return n * n * n; });
console.assert(cachedSquare(5) === 25, 'Cached function did not return the correct result');
console.assert(cachedCube(5) === 125, 'Cached function did not return the correct result');

complexFunctionCalls = 0;

var getAllKeys = cache(function (obj1, obj2) {
  complexFunctionCalls++;
  return Object.keys(obj1).concat(Object.keys(obj2));
});

var obj1 = { foo: 'foo', bar: 'bar' };
var obj2 = { baz: 'baz' };

function arrayShallowEquals(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.assert(arrayShallowEquals(getAllKeys(obj1, obj2), ['foo', 'bar', 'baz']), 'Cached function did not return the correct result');
console.assert(complexFunctionCalls == 1, 'The inner function wasn\'t called');
console.assert(arrayShallowEquals(getAllKeys(obj2, obj1), ['baz', 'foo', 'bar']), 'Cached function did not return the correct result');
console.assert(complexFunctionCalls == 2, 'The inner function wasn\'t called');
console.assert(arrayShallowEquals(getAllKeys(obj1, obj2), ['foo', 'bar', 'baz']), 'Cached function did not return the correct result');
console.assert(complexFunctionCalls == 2, 'The inner function was called multiple times');