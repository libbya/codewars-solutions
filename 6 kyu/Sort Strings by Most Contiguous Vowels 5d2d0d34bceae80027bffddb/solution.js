function sortStringsByVowels(strings) {
  // map [string] into [{string, # contiguous vowels}]
  let sMap = strings.map(str => {
    const vowelGroups = str.match(/[aeiou]+/gi);
    return {
      str,
      len: vowelGroups ? Math.max(...vowelGroups.map(g => g.length)) : 0
    }
  })

  // sort on # contiguous vowels using Array.sort()
  sMap.sort((a, b) => b.len - a.len)

  // map [{string, # contiguous vowels}] into [string]
  return sMap.map(({ str }) => str);
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(JSON.stringify(sortStringsByVowels(["aa", "eee", "oo", "iiii"])) === JSON.stringify(["iiii", "eee", "aa", "oo"]));
console.assert(JSON.stringify(sortStringsByVowels(["a", "e", "ii", "ooo", "u"])) === JSON.stringify( ["ooo", "ii", "a", "e", "u"]));
console.assert(JSON.stringify(sortStringsByVowels(["ioue", "ee", "uoiea"])) === JSON.stringify( ["uoiea", "ioue", "ee"]));
console.assert(JSON.stringify(sortStringsByVowels(["high", "day", "boot"])) === JSON.stringify( ["boot", "high", "day"]));
console.assert(JSON.stringify(sortStringsByVowels(["none", "uuu", "Yuuuge!!"])) === JSON.stringify( ["uuu", "Yuuuge!!", "none"]));
console.assert(JSON.stringify(sortStringsByVowels(["AIBRH", "", "YOUNG", "GREEEN"])) === JSON.stringify( ["GREEEN", "AIBRH", "YOUNG", ""]));
console.assert(JSON.stringify(sortStringsByVowels(["jyn", "joan", "jimmy", "joey"])) === JSON.stringify( ["joan", "joey", "jimmy", "jyn"]));
console.assert(JSON.stringify(sortStringsByVowels(["uijijeoj", "lkjlkjww2", "iiutrqy"])) === JSON.stringify( ["iiutrqy", "uijijeoj", "lkjlkjww2"]));
console.assert(JSON.stringify(sortStringsByVowels(["how about now", "a beautiful trio of"])) === JSON.stringify( ["a beautiful trio of", "how about now"]));
console.assert(JSON.stringify(sortStringsByVowels(["every", "bataux", "is", "waaaay", "loose"])) === JSON.stringify( ["waaaay", "bataux", "loose", "every", "is"]));
