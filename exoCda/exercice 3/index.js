let board = "";
let evenRow = "# # # # ";
let oddRow = " # # # #";

for (let i = 0; i < 8; i++) {

  if (i % 2 == 0) board += evenRow + '\n';
  else board += oddRow + '\n';
}

console.log(board)