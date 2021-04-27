function vowelIndices(word) {
  // Node 8.x doesn't have String.matchAll
  // so we have to exec the regex in a loop.
  const re = /[aeiouy]/gi;
  const out = [];

  let match = re.exec(word);
  while (match !== null) {
    out.push(match.index + 1);
    match = re.exec(word);
  }

  return out;

  // in later Node versions: return [...word.matchAll(/[aeiouy]/gi)].map(({index}) => index + 1);
}

// Tests
const arrayShallowEquals = require('../../helpers/js/arrayshallowequals');
console.log('Running given sample tests; no further output indicates success');

console.assert(arrayShallowEquals(vowelIndices("mmm"), [], `Failed for input ${'mmm'}`));
console.assert(arrayShallowEquals(vowelIndices("apple"), [1,5], `Failed for input ${'apple'}`));
console.assert(arrayShallowEquals(vowelIndices("super"), [2,4], `Failed for input ${'super'}`));
console.assert(arrayShallowEquals(vowelIndices("orange"), [1,3,6], `Failed for input ${'orange'}`));
console.assert(arrayShallowEquals(vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33], `Failed for input ${'supercalifragilisticexpialidocious'}`));