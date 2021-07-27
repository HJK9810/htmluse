const distance = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
function solution(dirs) {
  let now = [0, 0];
  let his = new Set();
  const directs = dirs.split('');

  for (const dir of directs) {
    const nx = now[0] + distance[dir][0];
    const ny = now[1] + distance[dir][1];

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 방향이 다르더라도 같은 길을 지나기 때문
    his.add('' + now[0] + now[1] + nx + ny);
    his.add('' + nx + ny + now[0] + now[1]);

    now = [nx, ny];
  }

  return his.size / 2;
}

console.log(solution("ULURRDLLU"))
console.log(solution("LULLLLLLU"))