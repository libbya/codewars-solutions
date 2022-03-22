// requires node >=10.4 for BigInt
var lastDigit = function(str1, str2){  
  if (str2 === '0') return 1;
  const loops = [
    [0],
    [1],
    [2,4,8,6],
    [3,9,7,1],
    [4,6],
    [5],
    [6],
    [7,9,3,1],
    [8,4,2,6],
    [9,1]
  ];
  const int1 = +(str1.slice(-1));
  const int2 = BigInt(str2);
  const idx = Number((int2 - 1n) % BigInt(loops[int1].length));
  return loops[int1][idx]
}

// Tests
