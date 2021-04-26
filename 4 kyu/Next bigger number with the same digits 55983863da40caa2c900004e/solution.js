function nextBigger(n){
  // convert from string to array of digits
  const numArr = n.toString().split('').map(Number);

  // number array can be considered as [[A],B,[C]]
  // where B < C[0]
  // and there is no i such that C[i] < C[i+1]
  // A may have length 0

  // find index of B
  let lastSmallerIdx = null;
  for (let i = numArr.length - 2; i >= 0; i--) {
    if (numArr[i] < numArr[i + 1]) {
      lastSmallerIdx = i;
      break;
    }
  }

  // if all digits of number are in descending order, we cannot make a larger number
  // with the same digits
  //
  // according to spec, return -1 in this case
  if (lastSmallerIdx === null) return -1;

  // begin to populate the output
  // all digits in A are copied verbatim
  let outArr = numArr.slice(0, lastSmallerIdx);

  // find smallest digit in C that is greater than B
  // this is guaranteed to find something since C[0] > B by definition
  let nextLarger = numArr[lastSmallerIdx + 1], nextLargerIdx = lastSmallerIdx + 1;
  for (let i = lastSmallerIdx + 2; i < numArr.length; i++) {
    if (numArr[i] > numArr[lastSmallerIdx] && numArr[i] < nextLarger) {
      nextLarger = numArr[i];
      nextLargerIdx = i;
      if (nextLarger === numArr[lastSmallerIdx] + 1) break;
    }
  }

  // switch digit from C with B
  // need only perform half a switch - we don't use A or B after the switch
  numArr[nextLargerIdx] = numArr[lastSmallerIdx];

  // push digit from C onto output
  // this is equivalent to completing the switch, then pushing B
  outArr.push(nextLarger);

  // sort C ascending and push onto output
  const remainingDigits = numArr.slice(lastSmallerIdx + 1);
  remainingDigits.sort();
  outArr = outArr.concat(remainingDigits);

  // format output according to spec & return
  return Number(outArr.join(''));
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(nextBigger(12) === 21, `Failed when given input: 12`);
console.assert(nextBigger(513) === 531, `Failed when given input: 513`);
console.assert(nextBigger(2017) === 2071, `Failed when given input: 2017`);
console.assert(nextBigger(414) === 441, `Failed when given input: 414`);
console.assert(nextBigger(144) === 414, `Failed when given input: 144`);
console.assert(nextBigger(58943) ===  59348, `Failed when given input: 58943`);
console.assert(nextBigger(53943) ===  54339, `Failed when given input: 53943`);