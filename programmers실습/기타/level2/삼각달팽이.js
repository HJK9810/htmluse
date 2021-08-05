function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(Array.from({ length: i + 1 }, v => 0));
  }
  let i = 1;
  answer[0][0] = 1;
  const DOWN = (x, y) => {
    const next = answer[x][y + 1];
    if (next === 0) { next = i + 1; i++; }
    else if (answer[x + 1][y] !== 0) return answer;
    else (a = x, b = y) => {
      const next = answer[a + 1][b];
      if (next === 0) { next = i + 1; i++; }
      else if (answer[a - 1][b + 1] !== 0) return answer;
      else (x = a, y = b) => {
        const next = answer[x][y + 1];
        if (next === 0) { next = i + 1; i++; }
        else if (answer[x + 1][y] !== 0) return answer;
        else DOWN(x, y);
      }
    }
  }
  // const DOWN = (x, y) => {
  //   const next = answer[x][y + 1];
  //   if (next === 0) {next = i + 1; i++;}
  //   else if (answer[x + 1][y] !== 0) return answer;
  //   else RIGHT(x, y);
  // }
  // const RIGHT = (x, y) => {
  //   const next = answer[x + 1][y];
  //   if (next === 0) {next = i + 1; i++;}
  //   else if (answer[x - 1][y + 1] !== 0) return answer;
  //   else UP(x, y);
  // }
  // const UP = (x, y) => {
  //   const next = answer[x][y + 1];
  //   if (next === 0) {next = i + 1; i++;}
  //   else if (answer[x + 1][y] !== 0) return answer;
  //   else DOWN(x, y);
  // }

  DOWN(0, 0);
}

console.log(solution(4))
console.log(solution(5))
console.log(solution(6))