function solution(n) {
  // let answer = Array.from({length:n}, (v, i)=>Array.from({ length: i + 1 }, el => 0));
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(Array.from({ length: i + 1 }, v => 0));
  }
  let num = 0;
  let x = -1;
  let y = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++x][y] = ++num;
    for (let i = 0; i < n - 1; i++) answer[x][++y] = ++num;
    for (let i = 0; i < n - 2; i++) answer[--x][--y] = ++num;
    n -= 3;
  }

  return answer.flat();
}

console.log(solution(4))
console.log(solution(5))
console.log(solution(6))