function solution(numbers) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let answer = 0;

  nums.forEach(el => {
    if (numbers.indexOf(el) === -1) answer += el;
  });
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))
console.log(solution([5, 8, 4, 0, 6, 7, 9]))