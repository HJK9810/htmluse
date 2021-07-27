function solution(N, road, K) {
  let answer = 1;
  let i = 1;
  let route = 0;
  let check = 0;
  while (i <= N) {
    const Go = road.find(el => el[0] === i || el[1] === i, check);
    if (route + Go[2] > K) check++;
    else {
      route += Go[2];
      i++;
    }

    if (route > K) {
      answer++;
      i = 1;
      check = 0;
    }
  }

  return answer;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3))
console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4))