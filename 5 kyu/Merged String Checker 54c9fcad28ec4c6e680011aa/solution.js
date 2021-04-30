// modify function definition to take two new optional arguments part1Idx and part2Idx
function isMerge(s, part1, part2, part1Idx = 0, part2Idx = 0) {

  // next character in string
  const sIdx = part1Idx + part2Idx;

  // no more characters to check; return whether either part has extra characters
  if (sIdx >= s.length)
    return part1Idx === part1.length && part2Idx === part2.length;
  
  // part1's next character is the one being searched for; perform recursive step
  if (s[sIdx] === part1[part1Idx] && isMerge(s, part1, part2, part1Idx + 1, part2Idx))
    return true;
  
  // part2's next character is the one being searched for; perform recursive step
  if (s[sIdx] === part2[part2Idx] && isMerge(s, part1, part2, part1Idx, part2Idx + 1))
    return true;
  
  // neither part1 or part2 had the character being searched for; s is not a merge of them
  return false;
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(isMerge('codewars', 'code', 'wars'));
console.assert(isMerge('codewars', 'cdw', 'oears'));
console.assert(!isMerge('codewars', 'cod', 'wars'));
console.assert(isMerge('acab', 'ab', 'ac'));