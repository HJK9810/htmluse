function solution(board, moves) {
  var answer = 0;
  let box = [];

  for (let i = 0; i < moves.length; i++) {
    let num = moves[i] - 1;
    let j = 0;

    for (j = 0; j < board.length; j++) {
      if (board[j][num]) {
        box.push(board[j][num]);
        board[j][num] = 0;
        break;
      }
      // if (box.length > 1 && box[j] === box[j - 1]) {
      //   box.pop();
      //   box.pop();
      // }
    }
  }

  let last = new Set(box);

  answer = box.length - last.size;

  return answer;
}

let b = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
let m = [1, 5, 3, 5, 1, 2, 1, 4]
console.log(solution(b, m));