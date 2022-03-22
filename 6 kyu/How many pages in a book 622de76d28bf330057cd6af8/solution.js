function amountOfPages(summary) {
  let pages = 0;

  // for any n >= 0, there are 9(n+1) * 10^n (n+1)-digit numbers
  //   9 1-digit, 90 2-digit, 900 3-digit, etc.
  // remove up to that many digits from summary total, and increment pages by the number removed / n
  // until summary = 0
  for (let i = 0; summary > 0; i++) {
    const maxSummaryDigits = (i + 1) * 9 * 10 ** i
    const summaryDigits = Math.min(summary, maxSummaryDigits);
    pages += summaryDigits / (i + 1);
    summary -= summaryDigits;
  }

  return pages;
}

// Tests
console.log('Running given sample tests; no further output indicates success');
console.assert(amountOfPages(5) === 5)
console.assert(amountOfPages(25) === 17)
console.assert(amountOfPages(1095) === 401)
console.assert(amountOfPages(185) === 97)
console.assert(amountOfPages(660) === 256)