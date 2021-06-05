const solution = (brown, yellow) => {
  const mul = brown + yellow;
  const plus = brown / 2 + 2;
  const set = Math.sqrt(Math.pow(plus, 2) - 4 * mul);

  return [((plus + set) / 2), ((plus - set) / 2)];
}

console.log(solution(10, 2))
console.log(solution(8, 1))
console.log(solution(24, 24))