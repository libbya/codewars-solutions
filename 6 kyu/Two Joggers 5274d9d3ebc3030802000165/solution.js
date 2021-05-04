var nbrOfLaps = function (x, y) {
  // Euclidean GCF algorithm
  const gcf = (a,b) => b === 0 ? a : gcf(b, a % b);

  // answer: x must go (y/gcf(x,y)) laps, y must go (x/gcf(x,y)) laps
  const z = gcf(Math.max(x,y), Math.min(x,y));
  return [y / z, x / z];
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(JSON.stringify(nbrOfLaps(5, 3)) === JSON.stringify([3,5]));
console.assert(JSON.stringify(nbrOfLaps(4, 6)) === JSON.stringify([3,2]));
console.assert(JSON.stringify(nbrOfLaps(5, 5)) === JSON.stringify([1,1]));