function isSolved(board) {
  // 1 or 2 if all 3 spaces are that number, else 0
  const winner = triple => triple[1] === triple[0] && triple[2] === triple[0] ? triple[0] : 0;

  for (let triple of [
    board[0],                                 // first row
    board[1],                                 // second row
    board[2],                                 // third row
    board.map(row => row[0]),                 // first col
    board.map(row => row[1]),                 // second col
    board.map(row => row[2]),                 // third col
    [board[0][0], board[1][1], board[2][2]],  // \ diagonal
    [board[0][2], board[1][1], board[2][0]]   // / diagonal
  ]) {
    // if we have a winner, return it
    if (winner(triple) !== 0) return winner(triple);
  }
  // we have no winner; return -1 if still spaces to fill, else 0 (tie)
  return board.some(row => row.some(n => n === 0)) ? -1 : 0;
}

// Tests
console.log('Running given sample tests; no further output indicates success');

console.assert(isSolved([[0,0,1],[0,1,2],[2,1,0]]) === -1);