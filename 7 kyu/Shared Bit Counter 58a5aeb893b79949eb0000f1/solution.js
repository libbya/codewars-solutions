// !(a & b): if a and b share exactly zero bits, as a boolean
// Number.isInteger(Math.log2(a & b)): if a and b share exactly 1 bit (causing a & b to be a power of 2)
// return whether neither of these is true (ie negate both and return their logical AND result)
const sharedBits = (a, b) => !!(a & b) && !Number.isInteger(Math.log2(a & b));

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(sharedBits(1, 2) === false, 'Failed for input (1, 2)');
console.assert(sharedBits(16, 8) === false, 'Failed for input (16, 8)');
console.assert(sharedBits(1, 1) === false, 'Failed for input (1, 1)');
console.assert(sharedBits(2, 3) === false, 'Failed for input (2, 3)');
console.assert(sharedBits(7, 10) === false, 'Failed for input (7, 10)');
console.assert(sharedBits(43, 77) === true, 'Failed for input (43, 77)');
console.assert(sharedBits(7, 15) === true, 'Failed for input (7, 15)');
console.assert(sharedBits(23, 7) === true, 'Failed for input (23, 7)');