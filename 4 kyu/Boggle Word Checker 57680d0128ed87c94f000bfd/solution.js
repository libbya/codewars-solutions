function dfs( board, word, col, row, wordIndex = 0, visited = {} ) {
  // Initial checks to hopefully fail early
  if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) return false;
  if (visited[row] && visited[row][col]) return false;
  if (board[row][col] !== word[wordIndex]) return false;
  if (wordIndex >= word.length - 1) return true;

  // push current node to visited
  if (!visited[row]) visited[row] = {};
  visited[row][col] = true;

  // search all adjacent nodes
  const offsets = [
    [-1,-1],[ 0,-1],[ 1,-1],
    [-1, 0],        [ 1, 0],
    [-1, 1],[ 0, 1],[ 1, 1]
  ];
  return offsets.some(([rowOffset, colOffset]) => dfs(board, word, col + colOffset, row + rowOffset, wordIndex + 1, JSON.parse(JSON.stringify(visited))));
}

function checkWord( board, word ) {
  // Try to start the word from each space on the board
  return board.some((row,rowIdx) => row.some((_,colIdx) => dfs(board, word, colIdx, rowIdx)));
}

// Tests
console.log('Running given sample tests; no further output indicates success');

var testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

console.assert( checkWord( testBoard, "E" ) == true , 'Failed for input E');
console.assert( checkWord( testBoard, "C" ) == true , 'Failed for input C');
console.assert( checkWord( testBoard, "EAR" ) == true , 'Failed for input EAR');
console.assert( checkWord( testBoard, "EARS" ) == false, 'Failed for input EARS');
console.assert( checkWord( testBoard, "BAILER" ) == true , 'Failed for input BAILER');
console.assert( checkWord( testBoard, "RSCAREIOYBAILNEA" ) == true, "Must be able to check indefinite word lengths going in all directions" );
console.assert( checkWord( testBoard, "CEREAL" ) == false, "Valid guesses can't overlap themselves" );
console.assert( checkWord( testBoard, "ROBES" ) == false, "Valid guesses have to be adjacent" );
console.assert( checkWord( testBoard, "BAKER" ) == false, "All the letters have to be in the board" );
console.assert( checkWord( testBoard, "CARS" ) == false, "Valid guesses cannot wrap around the edges of the board" );
