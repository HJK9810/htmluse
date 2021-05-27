function solution(n) {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return (solution(n - 1)+ solution(n - 2)) % 1234567;
  }
}

console.log(solution(4));