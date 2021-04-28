function coolString(s) {
  // /^(?:[A-Z][a-z])+[A-Z]?$/ 2+ characters, uppercase first
  // /^(?:[a-z][A-Z])+[a-z]?$/ 2+ characters, lowercase first
  // /^[A-Za-z]$/              1 uppercase or lowercase character
  return /^(?:[A-Z][a-z])+[A-Z]?$|^(?:[a-z][A-Z])+[a-z]?$|^[A-Za-z]$/.test(s);
}

// Test
console.log('Running given sample tests; no further output indicates success');

console.assert(coolString("aQwFdA") === true, 'Failed for input ' + "aQwFdA");
console.assert(coolString("aBC") === false, 'Failed for input ' + "aBC");
console.assert(coolString("AaA") === true, 'Failed for input ' + "AaA");
console.assert(coolString("q q") === false, 'Failed for input ' + "q q");
console.assert(coolString("wWw1") === false, 'Failed for input ' + "wWw1");
console.assert(coolString("2") === false, 'Failed for input ' + "2");
console.assert(coolString("aAaAaAa") === true, 'Failed for input ' + "aAaAaAa");
console.assert(coolString("    ") === false, 'Failed for input ' + "    ");