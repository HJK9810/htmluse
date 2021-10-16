function solution(n, left, right) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      answer = Array.from({length:n}, (el, i) => i+1);
    } else {
      for (let j = 0; j < n; j++) {
        if (j <= i) answer.push(i + 1);
        else answer.push(j + 1);
      }
    }
  }

  return right === n * n - 1 ? answer.slice(left) : answer.slice(left, right + 1);
}


console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))
console.log(`[3,2,2,3]\n[4,3,3,3,4,4,4,4]`)