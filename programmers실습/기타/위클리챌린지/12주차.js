// 피로도
function solution(k, dungeons) {
  let max = Number.MIN_SAFE_INTEGER;

  const DFS = (p, pass, npass) => {
    // 모든 던전을 확인한 경우
    if (pass.length + npass.length === dungeons.length) max = max > pass.length ? max : pass.length;
    else { // 모든 던전을 아직 확인하지 못한 경우
      for (let i = 0; i < dungeons.length; i++) {
        // 방문 여부 확인
        if (!pass.includes(i) && !npass.includes(i)) {
          if (p >= dungeons[i][0]) {
            pass.push(i);
            DFS(p - dungeons[i][1], pass, npass);
            pass.pop();
          } else {
            npass.push(i);
            DFS(p, pass, npass);
            npass.pop(i);
          }
        }
      }
    }
  }

  DFS(k, [], []);
  return max;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]))