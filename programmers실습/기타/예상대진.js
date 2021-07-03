function solution(n, a, b) {
  let answer = 1;
  let A, B;
  a > b ? [A, B] = [a, b] : [A, B] = [b, a];

  while (n !== 2) {
    if (A === B + 1 && A % 2 === 0) {
      return answer;
    } else {
      answer++;
      n /= 2;
      A = Math.ceil(A / 2);
      B = Math.ceil(B / 2);
    }
  }

  return answer;
}

console.log(solution(8, 4, 7))