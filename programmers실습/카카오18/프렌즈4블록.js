function solution(m, n, board) {
  board = board.map(el => el.split(''));

  while (true) {
    let out = [];

    // 파각용 블럭 있는지 체크
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i + 1][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j + 1]) out.push([i, j]);
        }
      }
    }
    if (!out.length) break;

    // 파각용 블럭 0으로 전환.
    for (let i = 0; i < out.length; i++) {
      const col = out[i][0];
      const row = out[i][1];

      board[col][row] = 0;
      board[col][row + 1] = 0;
      board[col + 1][row] = 0;
      board[col + 1][row + 1] = 0;
    }

    // 파각된 블럭 당기기
    for (let i = m - 1; i > 0; i--) {
      // 0이 하나라도 없을 경우
      if (!board[i].some(el => !el)) continue;

      // 해당 줄에 파각할 0이 존재할경우
      for (let j = 0; j < n; j++) {
        for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
          if (board[k][j]) {
            board[i][j] = board[k][j];
            board[k][j] = 0;
            break;
          }
        }
      }
    }
  }
  return [].concat(...board).filter(el => !el).length;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

// console.log(solution(4,	5,	["CCBDE", "AAADE", "AAABF", "CCBBF"])===14)
// console.log(solution(6,	6,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])===15)