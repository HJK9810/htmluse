function solution(n) {
  let answer = [];
  let strnum = [4, 1, 2];
  answer.unshift(strnum[n % 3]);

  while (n > 3) {
    answer.unshift(strnum[n % 3]);
    n /= 3;
  }

  return answer.join('');
}

console.log(solution(1))
console.log(solution(2))
console.log(solution(3))
console.log(solution(4))