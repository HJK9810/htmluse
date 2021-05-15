function solution(d, budget) {
  let answer = 0;
  let ary = d.sort((a, b) => a - b);

  while (budget >= ary[0]) {
    let shifted = ary.shift();

    if (budget - shifted < 0) {
      continue;
    } else {
      budget -= shifted;
    }
    answer++;
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9))
console.log(solution([2, 2, 3, 3], 10))