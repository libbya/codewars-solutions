function sortBytes(uint32) {
  // split bytes using goofy js bit math
  // >>> prevents casting to signed integer
  const bytes = [uint32 >>> 24, (uint32 >> 16) & 0xff, (uint32 >> 8) & 0xff, uint32 & 0xff]

  // descending
  bytes.sort((a,b) => b - a);

  // need to use >>> again to have highest byte remain positive
  return ((bytes[0] << 24) >>> 0) + (bytes[1] << 16) + (bytes[2] << 8) + bytes[3];
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert( sortBytes(0xdeadbeef) === 0xefdebead, "failed: sortBytes(0xdeadbeef)" );
console.assert( sortBytes(0xdadb0d) === 0xdbda0d00, "failed: sortBytes(0xdadb0d)" );

for ( let i=100; i--; ) {
  const x = Math.floor( Math.random() * 2**32 );
  console.assert( sortBytes(x) >= x , `failed property: sortBytes(x) >= x where: x = ${ x }` );
}