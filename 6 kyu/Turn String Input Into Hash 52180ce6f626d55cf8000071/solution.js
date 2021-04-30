// string given as "a=1, Bb=2, ..."
// should be turned into object with the same k/v pairs
// one-liner solution: slight modification to input string makes it valid JSON
// a=b -> "a":b
const strToHash = str => JSON.parse(`{${str.replace(/(\w+)=(\d+)/g, '"$1":$2')}}`);

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert( JSON.stringify(strToHash("a=1, b=2, c=3, d=4")) === JSON.stringify({ 'a': 1, 'b': 2, 'c': 3, 'd': 4}), 'Could still be correct; test relies on order of keys being the same')
console.assert( JSON.stringify(strToHash("")) === JSON.stringify({}),  'Could still be correct; test relies on order of keys being the same')