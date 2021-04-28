// additional runningTotal parameter allows for tail recursion
function factorial(n, runningTotal = 1) {
  // base case: n==0 -> 1 or n==1 -> runningTotal
  // recursive case: n > 1
  return n < 2 ? runningTotal : factorial(n - 1, runningTotal * n);
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(factorial(0) === 1);
console.assert(factorial(1) === 1);
console.assert(factorial(4) === 24);
console.assert(factorial(7) === 5040);
console.assert(factorial(17) === 355687428096000);