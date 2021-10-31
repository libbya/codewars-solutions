function solve(s) {
  return Math.max(...s.split(/[aeiou]+/g).map(str => str.split('').map(ch => ch.charCodeAt() - 96).reduce((a, c) => a + c, 0)))
};

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(solve("zodiac") === 26);
console.assert(solve("chruschtschov") === 80);
console.assert(solve("khrushchev") === 38);
console.assert(solve("strength") === 57);
console.assert(solve("catchphrase") === 73);
console.assert(solve("twelfthstreet") === 103);
console.assert(solve("mischtschenkoana") === 80);