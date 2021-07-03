function solution(n, t, m, p) {
  let answer = '';
  let stack = ['0', '0'];
  let k = 0;

  for (let i = 1; i < m * t; i++) {
    i.toString(n).split('').forEach(el => stack.push(el));
    const num = m * k + p;

    if (stack[num]) {
      answer += stack[num];
      k++;
    }
    if (answer.length === t) return answer.toUpperCase();
  }
}

// console.log(solution(2, 4, 2, 1))
// console.log(solution(2, 4, 2, 1).length)
// console.log(solution(16, 16, 2, 1))
// console.log(solution(16, 16, 2, 1).length)
// console.log(solution(16, 16, 2, 2))
// console.log(solution(16, 16, 2, 2).length)
console.log(solution(2, 4, 2, 1) === "0111")
console.log(solution(16, 16, 2, 1) === "02468ACE11111111")
console.log(solution(16, 16, 2, 2) === "13579BDF01234567")