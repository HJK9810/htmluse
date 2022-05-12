// 삼각형 회전

function solution(grid, clockwise) {
  let answer = [];
  const len = grid.length - 1;
  if (clockwise) {
    // 시계방향으로 돌 경우
    for (let i = len; i >= 0; i--) {
      let str = '';
      const glen = grid[i].length - 1;
      let start = len;
      let count = 0;
      for (let j = glen; j >= 0; j--) {
        str += grid[start].charAt(j);
        count++;

        if (count === 2) {
          start -= 1;
          count = 0;
        }
      }

      answer.unshift(str);
    }
  } else {
    // 반시계방향으로 돌 경우
    for (let i = 0; i < grid.length; i++) {
      let str = ''
      let j = i;

      while (str.length < grid[len - i].length) {
        str += grid[j].slice(i * 2, (i + 1) * 2).split('').reverse().join('');
        j++;
      }

      answer.unshift(str);
    }
  }
  return answer;
}

console.log(solution(["1", "234", "56789"], true))
console.log(solution(["A", "MAN", "DRINK", "WATER11"], false))

console.log(`["5", "762", "98431"],	["1", "K1R", "NNIET", "AAMRDAW"]`)