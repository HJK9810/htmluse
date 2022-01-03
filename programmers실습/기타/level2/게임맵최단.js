function solution(maps) {
  let answer = Number.MAX_SAFE_INTEGER;
  let now = [0, 0];
  let end = [maps.length - 1, maps[0].length - 1]; // 맵의 좌표 : [세로 : n, 가로 : m]
  let que = [], visited = [];

  while(visited.length) {
    if(now[0]===end[0]&&now[1]===end[1]) {
      break;
    }
  }
  
  return answer;
}

let ary1 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]
let ary2 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]

console.log(solution(ary1))
console.log(solution(ary2))

console.log(solution(ary1) === 11)
console.log(solution(ary2) === -1)