const distance = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
function solution(dirs) {
  let answer = 0;
  let now = [0, 0];
  dirs.split('').forEach(dir => {
    const [x, y] = distance[dir];
    now = [now[0] + x, now[1] + y];
    if ((now[0] >= -5 && now[0] <= 5) && (now[1] >= -5 && now[0] <= 5)) answer++;
  });

  return answer;
}

console.log(solution("ULURRDLLU"))
console.log(solution("LULLLLLLU"))