function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  
  while (people.length) {
    const sum = people.shift();
    answer++;

    if (sum < limit) {
      if ((limit - sum) >= people[people.length - 1]) people.pop();
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 50, 80], 100))