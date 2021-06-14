function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  while (people.length) {
    const sum = people.shift();
    answer++;

    if (sum < limit) {
      const lastpeo = people.filter(el => el <= (limit - sum));
      if (lastpeo.length) {
        const max = Math.max(...lastpeo);
        people.splice(people.indexOf(max), 1);
      }
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 50, 80], 100))