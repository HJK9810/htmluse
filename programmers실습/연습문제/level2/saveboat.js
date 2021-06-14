function solution(people, limit) {
  let answer = 0;
  let boat = 0;
  let last = people.length - 1;
  people.sort((a, b) => b - a);

  while (boat <= last) {
    answer++;
    if (boat === last) break;

    if (people[boat] + people[last] <= limit) {
      boat++;
      last--;
    } else {
      boat++;
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 50, 80], 100))