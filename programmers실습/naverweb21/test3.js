function solution(block, board) {
  let answer = 0;

  switch (block) {
    case 0:
      for (let i = board.length - 1; i > 1; i--) {
        let check = 0;
        const idx = board[i].indexOf(0);
        for (let j = i - 1; j >= 0; j--) {
          if (board[j][idx] !== 0) break;
          else check++;
        }

        if (check === 3) {
          for (let j = i; j >= i - 3; j--) {
            board[j][idx] = 1;
          }
        }
      }
      break;
    case 1:
      for (let i = board.length - 1; i >= 0; i--) {
        let check = 0;
        if (board[i].filter(el => el === 0).length !== 3) continue;

        const idx = board[i].indexOf(0);
        for (let j = idx; j < 4; j++) {
          if (board[i][j] !== 0) break;
          else check++;
        }

        if (check === 3) {
          for (let j = idx; j < 4; j++) {
            board[i][j] = 1;
          }
        }
        check = 0;
      }
      break;
    case 2:
      for (let i = board.length - 1; i > 0; i--) {
        const idx = board[i].indexOf(0);

        if (board[i][idx] !== 0 || board[i][idx + 1] !== 0 || board[i - 1][idx] !== 0) {
          continue;
        } else {
          board[i][idx] = 1;
          board[i][idx + 1] = 1;
          board[i - 1][idx] = 1;
        }
      }
      break;
    case 3:
      for (let i = board.length - 1; i > 0; i--) {
        const idx = board[i].indexOf(0);

        if (board[i][idx] !== 0 || board[i][idx + 1] !== 0 || board[i - 1][idx + 1] !== 0) {
          continue;
        } else {
          board[i][idx] = 1;
          board[i][idx + 1] = 1;
          board[i - 1][idx + 1] = 1;
        }
      }
      break;
    case 4:
      for (let i = board.length - 1; i > 0; i--) {
        const idx = board[i].indexOf(0);

        if (board[i][idx] !== 0 || board[i - 1][idx - 1] !== 0 || board[i - 1][idx] !== 0) {
          continue;
        } else {
          board[i][idx] = 1;
          board[i - 1][idx - 1] = 1;
          board[i - 1][idx] = 1;
        }
      }
      break;
    case 5:
      for (let i = board.length - 1; i > 0; i--) {
        const idx = board[i].indexOf(0);

        if (board[i][idx] !== 0 || board[i - 1][idx + 1] !== 0 || board[i - 1][idx] !== 0) {
          continue;
        } else {
          board[i][idx] = 1;
          board[i - 1][idx + 1] = 1;
          board[i - 1][idx] = 1;
        }
      }
      break;
    default:
      break;
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i].filter(el => el === 1).length === 4) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(0, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))
console.log(solution(1, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))
console.log(solution(2, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))
console.log(solution(3, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))
console.log(solution(4, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))
console.log(solution(5, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))