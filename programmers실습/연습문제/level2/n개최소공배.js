const solution = (arr) => {
  const gcd = (a, b) => b ? gcd(b, a % b) : a;
  return arr.reduce((a, b) => a * b / gcd(a, b));
}

console.log(solution([2, 6, 8, 14]))
console.log(solution([1, 2, 3]))