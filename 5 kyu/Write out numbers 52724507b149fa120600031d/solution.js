function number2words(n) {
  // handle edge case n === 0
  if (n === 0) return 'zero';

  const teens = ['ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const ones = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
  const hundreds = ones.map(el => el ? el + 'hundred ' : el);
  const nums = n.toString().padStart(6, '0').split('').map(Number);

  let out = '';

  // hundred thousands - thousands
  out += hundreds[nums[0]];
  if (nums[1] === 1) out += teens[nums[2]];
  else out += [tens[nums[1]], ones[nums[2]]].filter(el => el).join('-');  // if both tens and ones place exists, join with hyphen
  if (nums[1] > 1 && !nums[2]) out += ' ';  // tens place does not have a trailing space since tens are sometimes joined with hyphen

  if (out) out += 'thousand ';

  // hundreds - ones
  out += hundreds[nums[3]];
  if (nums[4] === 1) out += teens[nums[5]];
  else out += [tens[nums[4]], ones[nums[5]]].filter(el => el).join('-');
  return out.trim();
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(number2words(0) === "zero");
console.assert(number2words(1) === "one");
console.assert(number2words(8) === "eight");
console.assert(number2words(10) === "ten");
console.assert(number2words(19) === "nineteen");
console.assert(number2words(20) === "twenty");
console.assert(number2words(22) === "twenty-two");
console.assert(number2words(54) === "fifty-four");
console.assert(number2words(80) === "eighty");
console.assert(number2words(98) === "ninety-eight");
console.assert(number2words(100) === "one hundred");
console.assert(number2words(301) === "three hundred one");
console.assert(number2words(793) === "seven hundred ninety-three");
console.assert(number2words(800) === "eight hundred");
console.assert(number2words(650) === "six hundred fifty");
console.assert(number2words(1000) === "one thousand");
console.assert(number2words(1003) === "one thousand three");