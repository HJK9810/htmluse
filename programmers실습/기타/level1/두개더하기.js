function solution(numbers) {
  let answer = new Set();

  for (let i of numbers) {
    for (let j of numbers) {
      if (i != j)
        answer.add(i + j);
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));