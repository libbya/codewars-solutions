function solution(roman){
  return roman.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/g).map(n => ({
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IX: 9,
    IV: 4,
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }[n])).reduce((acc, cur) => acc + cur)
}

// Test
console.log('Running given sample tests; no further output indicates success');

console.assert(solution('XXI') === 21)
console.assert(solution('I') === 1)
console.assert(solution('IV') === 4)
console.assert(solution('MMVIII') === 2008)
console.assert(solution('MDCLXVI') === 1666)