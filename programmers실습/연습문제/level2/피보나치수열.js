// 재귀함수는 런타임 오류 발생...
function solution(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return (solution(n - 1) + solution(n - 2)) % 1234567;
  }
}

function solution(n) {
  let answer = 0;
  let memo = [0, 1];

  if (n < 2) {
    return memo[n];
  } else {
    for (let i = 2; i <= n; i++) {
      memo.push((memo[i - 1] + memo[i - 2]) % 1234567);

    }
  }
  answer = memo[n];

  return answer;
}

console.log(solution(4));