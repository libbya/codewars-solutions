function findPartMaxProd(n) {
  if (n < 4) return [[n], n];

  // All solutions for n >= 4 are of the form [3..., 2...], e.g. 13 => [3,3,3,2,2]
  // no solution will have more than 2 twos, as 2**3 < 3**2
  // as n increases, 2 -> 3, if no free 2s, 3 -> 2,2
  // pattern for twos (starting at n=4): 0,2,1,0,2,1,...
  // since n<4 is covered, we can save the subtraction by offsetting the pattern
  const twos = [0, 2, 1][n % 3];

  // pattern for threes (starting at n=4): 0,1,2,1,2,3,2,3,4,...
  // if we consider this pattern in groups of 3, the kth group will be [k, k+1, k+2]
  // nth number in pattern is n's group + n's index within that group
  // find k using integer division, index of n within group k using mod
  const threes = Math.floor((n - 4) / 3) + (n - 4) % 3;

  // [4,3,3,...] has an equal sum to [3,...,3,2,2] so must submit both iff twos === 2
  // [3,...,3] portion is the same for both
  const arrThrees = Array(threes).fill(3);

  const product = 2 ** twos * 3 ** threes;

  // twos < 2 => only [3,...,3,2] or [3,...,3]
  if (twos < 2) return [arrThrees.concat(Array(twos).fill(2)), product];

  // twos === 2 => [4,3,...,3], [3,...,3,2,2]
  return [[4].concat(arrThrees), arrThrees.concat(Array(twos).fill(2)), product];
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(JSON.stringify(findPartMaxProd(8)) === JSON.stringify([[3, 3, 2], 18]));
console.assert(JSON.stringify(findPartMaxProd(10)) === JSON.stringify([[4, 3, 3], [3, 3, 2, 2], 36]));