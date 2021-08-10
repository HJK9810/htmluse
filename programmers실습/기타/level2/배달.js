function solution(N, road, K) {
  let answer = 0;
  let routes = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }).fill(Infinity));
  for (let i = 0; i <= N; i++) routes[i][i] = 0;

  // 플로이드 와샬알고리즘을 위한 그래프 작성
  road.forEach(route => {
    const [first, second, time] = route;

    // 중복제거 - 중복시, 가장 '작은' 시간값을 그래프에 입력
    // else - '양방향' 이기에 동일값 입력
    if (routes[first][second] !== Infinity) routes[first][second] = routes[second][first] = Math.min(routes[first][second], time);
    else routes[first][second] = routes[second][first] = time;
  });

  // 플로이드 와샬 알고리즘
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
        if (routes[i][k] + routes[k][j] < routes[i][j]) routes[i][j] = routes[i][k] + routes[k][j];
      }
    }
  }

  for (let i = 0; i <= N; i++) {
    if (routes[1][i] <= K) answer++;
  }

  return answer;
}

console.log(solution(5, [[1, 2, 1], [2, 3, 3], [5, 2, 2], [1, 4, 2], [5, 3, 1], [5, 4, 2]], 3))
console.log(solution(6, [[1, 2, 1], [1, 3, 2], [2, 3, 2], [3, 4, 3], [3, 5, 2], [3, 5, 3], [5, 6, 1]], 4))