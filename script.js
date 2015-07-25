//This function displays a "chess board" made
//of hash tags in the console. Length and width
//of board is supplied by the user when
//function is called.
function chessBoard(size){
  var board = "";
//create board by alternating spaces and hash tags
      for (var i = 0;i < size; i++) {
        for (var j = 0 ; j < size; j++) {
          if ((i+j) % 2 === 0)
          board += " ";
          else
          board += "#";
    }
//creates new line board after length requirement is met
      board +="\n";
  }
console.log(board);
}

chessBoard(50);
