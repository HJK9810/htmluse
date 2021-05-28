function solution(n) {
  let answer = [];

  while (n > 0) {
    if (n % 3 === 0) {
      answer.unshift(4);
      n = n / 3 - 1;
    } else if (n % 3 === 1) {
      answer.unshift(1);
      n = Math.floor(n / 3);
    } else {
      answer.unshift(2);
      n = Math.floor(n / 3);
    }
  }

  return answer.join('');
}

console.log(solution(1))
console.log(solution(2))
console.log(solution(3))
console.log(solution(4))
console.log(solution(8))
console.log(solution(9))
console.log(solution(10))