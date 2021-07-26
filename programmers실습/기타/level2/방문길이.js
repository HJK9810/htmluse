const distance = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
function solution(dirs) {
  let answer = 0;
  let now = [0, 0];
  let his = [];
  dirs.split('').forEach(dir => {
    const [x, y] = distance[dir];
    let route = [...now];
    now = [now[0] + x, now[1] + y];
    route = route.concat(now);
    if (!his.find((el) => JSON.stringify(el) === JSON.stringify(route))) {
      const change = { x: Math.abs(route[2] - route[0]), y: Math.abs(route[3] - route[1]) };
      if (change.x === 1 && change.y === 0) if (Math.abs(now[0]) <= 5) answer++;
      if (change.x === 0 && change.y === 1) if (Math.abs(now[1]) <= 5) answer++;
      his.push(route);
    }
  });

  return answer;
}

console.log(solution("ULURRDLLU"))
console.log(solution("LULLLLLLU"))