function abbreviate(string) {
  // from groups of 4+ letters, replace all but first and last
  // done to all groups due to g flag
  return string.replace(/(?<=[a-z])[a-z]{2,}(?=[a-z])/gi, match => match.length);
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(abbreviate("internationalization") === "i18n");
console.assert(abbreviate("accessibility") === "a11y");
console.assert(abbreviate("Accessibility") === "A11y");
console.assert(abbreviate("elephant-ride") === "e6t-r2e");