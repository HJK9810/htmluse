function solution(board, skill) {
  let answer = 0;
  const slen = skill.length;

  for (let i = 0; i < slen; i++) {
    const [check, x1, y1, x2, y2, damage] = skill[i];

    if (check === 1) {
      for (let j = x1; j <= x2; j++) {
        for (let k = y1; k <= y2; k++) {
          board[j][k] -= damage;
        }
      }
    } else {
      for (let j = x1; j <= x2; j++) {
        for (let k = y1; k <= y2; k++) {
          board[j][k] += damage;
        }
      }
    }
  }

  // answer = board.reduce((acc, it) => [...acc, ...it], []).filter(el => el > 0).length;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] > 0) answer += 1;
    }
  }
  return answer;
}

let b1 = [[5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5], [5, 5, 5, 5, 5]]
let sk1 = [[1, 0, 0, 3, 4, 4], [1, 2, 0, 2, 3, 2], [2, 1, 0, 3, 1, 2], [1, 0, 1, 3, 3, 1]]
let b2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let sk2 = [[1, 1, 1, 2, 2, 4], [1, 0, 0, 1, 1, 2], [2, 2, 0, 2, 0, 100]]

console.log(solution(b1, sk1))
console.log(solution(b2, sk2))

// console.log(solution(b1, sk1) === 10)
// console.log(solution(b2, sk2) === 6)