function expand(expr) {
  // (ax+b)^m
  let [_, a, x, b, m] = expr.match(/(-?\d*)(\D)\+?(-?\d*)\)\^(\d+)/)

  // anything^0 == 1
  if (m === '0') return '1';

  // coefficients of 1 and -1 omit the number; replace them manually
  if (a === '-') a = -1;
  if (!a) a = 1;

  // work with numbers rather than strings
  [a, b, m] = [a, b, m].map(Number);

  // initialize coefficients array (backwards so we can use index as the exponent)
  let coeffs = [b, a];

  for (let i = 2; i <= m; ++i) {
    // equivalent to multiplying coefficients by (ax * b)
    let c1 = [0, ...coeffs].map(c => c * a);
    let c2 = coeffs.map(c => c * b);
    for (let j = 0; j <= c2.length; ++j) {
      coeffs[j] = c1[j] + (c2[j] || 0);
    }
  }
  return coeffs
    .map((c, idx) => {  // coeffs[idx] = n => coeffs[idx] = nx^idx
      if (c === 0) return '';
      if (idx === 0) return c;
      return (c === -1 ? '-' : c !== 1 ? '' + c : '') + x + ((idx > 1) ? '^' + idx : '');
    })
    .filter(c => c !== '')  // remove entries where coefficient was zero
    .reverse()              // we filled the array backwards to allow idx to be the exponent
    .join('+')              // join into one string
    .replace(/\+\-/g, '-'); // remove + when adding a negative number
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(expand("(x+1)^0") === "1");
console.assert(expand("(x+1)^1") === "x+1");
console.assert(expand("(x+1)^2") === "x^2+2x+1");
console.assert(expand("(x-1)^0") === "1");
console.assert(expand("(x-1)^1") === "x-1");
console.assert(expand("(x-1)^2") === "x^2-2x+1");
console.assert(expand("(5m+3)^4") === "625m^4+1500m^3+1350m^2+540m+81");
console.assert(expand("(2x-3)^3") === "8x^3-36x^2+54x-27");
console.assert(expand("(7x-7)^0") === "1");
console.assert(expand("(-5m+3)^4") === "625m^4-1500m^3+1350m^2-540m+81");
console.assert(expand("(-2k-3)^3") === "-8k^3-36k^2-54k-27");
console.assert(expand("(-7x-7)^0") === "1");
