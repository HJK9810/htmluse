function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let count = i;
    let sum = 0;

    while (sum < n) {
      sum += count;
      count++;
    }

    if (sum === n)
      answer++;
  }

  return answer;
}

console.log(solution(15))
console.log(solution(7))
console.log(solution(12))