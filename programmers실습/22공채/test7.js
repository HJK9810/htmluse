function solution(board, aloc, bloc) {
  let answer = 0;
  // const col = board.length;
  // const row = board[0].length;
  let aside = '';
  let bside = '';

  while (true) {
    let now;

    const move = (ary) => {
      const [x, y] = ary;

      if (aside === 'U') {
        board[x][y] = 0;
        now = [x - 1, y];
        answer++;
        return 'U';
      } else if (aside === 'D') {
        board[x][y] = 0;
        now = [x + 1, y];
        answer++;
        return 'D';
      }

      if (board[x][y + 1]) {
        board[x][y] = 0;
        now = [x, y + 1];
        answer++;
        return 'R';
      } else if (board[x][y - 1]) {
        board[x][y] = 0;
        now = [x, y - 1];
        answer++;
        return 'L';
      } else {
        if (board[x - 1][y]) {
          board[x][y] = 0;
          now = [x - 1, y];
          answer++;
          return 'U';
        } else if (board[x + 1][y]) {
          board[x][y] = 0;
          now = [x + 1, y];
          answer++;
          return 'D';
        } else {
          return 'none';
        }
      }
    }

    aside = move(aloc);
    aloc = now;
    if (aside === 'none') break;

    bside = move(bloc);
    bloc = now;
    if (bside === 'none') break;
  }
  return answer;
}

console.log(solution([[1, 1, 1], [1, 1, 1], [1, 1, 1]], [1, 0], [1, 2]))
console.log(solution([[1, 1, 1], [1, 0, 1], [1, 1, 1]], [1, 0], [1, 2]))
console.log(solution([[1, 1, 1, 1, 1]], [0, 0], [0, 4]))
console.log(solution([[1]], [0, 0], [0, 0]))

// console.log(solution([[1, 1, 1], [1, 1, 1], [1, 1, 1]],	[1, 0],	[1, 2]) ==5)
// console.log(solution([[1, 1, 1], [1, 0, 1], [1, 1, 1]],	[1, 0],	[1, 2]) ==4)
// console.log(solution([[1, 1, 1, 1, 1]],	[0, 0],	[0, 4])==4)
// console.log(solution([[1]],	[0, 0],	[0, 0])==0)