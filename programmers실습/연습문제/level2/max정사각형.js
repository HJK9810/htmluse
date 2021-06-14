function solution(board) {
  let answer = 0;
  const row = board[0].length;
  const col = board.length;

  if (row < 2 || col < 2) return 1;

  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      if (board[i][j] > 0) {
        const min = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]);
        board[i][j] = min + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}

console.log(solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]))
console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]))