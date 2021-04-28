function SubstitutionCipher(abc1, abc2) {
  // set up maps in each direction for constant time lookup
  this.encodeCipher = new Map();
  this.decodeCipher = new Map();

  // populate maps
  for (let i = 0; i < abc1.length; i++) {
    this.encodeCipher.set(abc1[i], abc2[i]);
    this.decodeCipher.set(abc2[i], abc1[i]);
  }

  this.encode = function (str) {
    // convert each character based on the encode cipher map, falling back to the character itself
    return str.split('').map(ch => this.encodeCipher.get(ch) || ch).join('');
  }
  this.decode = function (str) {
    // convert each character based on the decode cipher map, falling back to the character itself
    return str.split('').map(ch => this.decodeCipher.get(ch) || ch).join('');
  }
}

// Tests
console.log('Running given sample tests; no further output indicates success');

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
var sub = new SubstitutionCipher(abc1, abc2);
console.assert(sub.encode("abc") === "eta", `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.encode("xyz") === "qxz", `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.encode("aeiou") === "eirfg", `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode("eta") === "abc", `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode("qxz") === "xyz", `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode("eirfg") === "aeiou", `Failed while abc1= ${abc1} , abc2= ${abc2}`);

abc2 = 'tfozcivbsjhengarudlkpwqxmy';
sub = new SubstitutionCipher(abc1, abc2);
console.assert(sub.encode('abc') === 'tfo', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode('tfo') === 'abc', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.encode('tjuukf') === 'kjpphi', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode('kjpphi') === 'tjuukf', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode('tjuukf') === 'ajqqtb', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.encode('ajqqtb') === 'tjuukf', `Failed while abc1= ${abc1} , abc2= ${abc2}`);

console.assert(sub.encode('a_bc&*83') === 't_fo&*83', `Failed while abc1= ${abc1} , abc2= ${abc2}`);
console.assert(sub.decode('t_fo*&83') === 'a_bc*&83', `Failed while abc1= ${abc1} , abc2= ${abc2}`);