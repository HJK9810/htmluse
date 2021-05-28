function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += (A[i] * B[i]);
  }

  return answer;
}

let a1 = [1, 4, 2]
let b1 = [5, 4, 4]
let a2 = [1, 2]
let b2 = [3, 4]

console.log(solution(a1, b1))
console.log(solution(a2, b2))