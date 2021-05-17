const Calculator = function () {
  this.evaluate = string => {
    // /\-?\d+(?:\.\d+)?(?:e\-?\d+)?/ matches the string representation of a JS number:
    // \-?\d+: whole number part; may be negative
    // (?:\.\d+)?: fractional part, including decimal; optional
    // (?:e\-?\d+)?: exponent, including e; optional, will occur after fractional part if both exist, may be negative

    const timesdivide = /(\-?\d+(?:\.\d+)?(?:e\-?\d+)?) (\*|\/) (\-?\d+(?:\.\d+)?(?:e\-?\d+)?)/;  // Number *|/ Number
    const plusminus = /(\-?\d+(?:\.\d+)?(?:e\-?\d+)?) (\+|\-) (\-?\d+(?:\.\d+)?(?:e\-?\d+)?)/;    // Number +|- Number

    // highest order precedence we need to worry about is *|/
    while (timesdivide.test(string)) {
      string = string.replace(timesdivide, (_, n1, op, n2) => {
        if (op === '*') return n1 * n2;
        return n1 / n2;
      })
    }

    // no more *|/, move on to +|-
    while (plusminus.test(string)) {
      string = string.replace(plusminus, (_, n1, op, n2) => {
        if (op === '+') return +n1 + +n2;
        return n1 - n2;
      })
    }

    // output expected to be a Number
    return +string;
  }
};

// Tests
console.log('Running given sample tests; no further output indicates success');

var calculate = new Calculator()
const assertApproxEquals = (n1, n2) => Math.abs(n1 - n2) <= 1e-9
console.assert(assertApproxEquals(calculate.evaluate('127'), 127));
console.assert(assertApproxEquals(calculate.evaluate('2 + 3'), 5));
console.assert(assertApproxEquals(calculate.evaluate('2 - 3 - 4'), -5));
console.assert(assertApproxEquals(calculate.evaluate('10 * 5 / 2'), 25));