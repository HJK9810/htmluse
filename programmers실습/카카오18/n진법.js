function solution(n, t, m, p) {
  let answer = '';
  let stack = [];
  let k = 1;

  for (let i = 0; i < m * t; i++) {
    i.toString(n).split('').forEach(el => stack.push(el));
    if (stack[(k - 1) + p]) {
      answer += stack[(k - 1) + p];
      k++;
    }
    if (answer.length === t) return answer;
  }
}

console.log(solution(2, 4, 2, 1))
console.log(solution(2, 4, 2, 1).length)
console.log(solution(16, 16, 2, 1))
console.log(solution(16, 16, 2, 1).length)
console.log(solution(16, 16, 2, 2))
console.log(solution(16, 16, 2, 2).length)
// console.log(solution(2, 4, 2, 1) === "0111")
// console.log(solution(16, 16, 2, 1) === "02468ACE11111111")
// console.log(solution(16, 16, 2, 2) === "13579BDF01234567")