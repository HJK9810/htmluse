function solution(n) {
  let ans = 0;
  while (n > 0) {
    if (n % 2 === 0) n /= 2;
    else {
      n -= 1;
      ans++;
    }
  }
  return ans;
}

console.log(solution(5))
console.log(solution(6))
console.log(solution(5000))

console.log(solution(5)===2)
console.log(solution(6)===2)
console.log(solution(5000)===5)