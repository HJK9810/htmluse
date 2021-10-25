function solution(k, dungeons) {
  let answer = 0;
  let sortdun = dungeons.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    else return b[1] - a[1];
  });

  let i = 0;
  while (k > 0) {
    if (sortdun[i][0] <= k) {
      k -= sortdun[i][1];
      answer++;
    } else if (sortdun[i][0] > k) break;
    i++;
  }
  return answer;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]))