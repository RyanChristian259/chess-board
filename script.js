/* 
 This function displays a "chess board" made
 of hash tags in the console. Length and width
 of board is supplied by a number when
 function is called.
*/

function chessBoard(size) {
  let board = "";
  
  // Create board by alternating spaces and hash tags
  // Outer loop creates rows
  for (let i = 0; i < size; i++) {
    // Inner loop creates " " and # pattern
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) board += " ";
      else board += "#";
    }
    // Creates new board line after length requirement is met
    board += "\n";
  }
  console.log(board);
}

chessBoard(50);
