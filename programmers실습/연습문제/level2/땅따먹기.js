function solution(land) {
  let len = land.length;

  for (let i = len - 2; i >= 0; i--) {
    land[i][0] = Math.max(land[i + 1][1], land[i + 1][2], land[i + 1][3]) + land[i][0];
    land[i][1] = Math.max(land[i + 1][0], land[i + 1][2], land[i + 1][3]) + land[i][1];
    land[i][2] = Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][3]) + land[i][2];
    land[i][3] = Math.max(land[i + 1][0], land[i + 1][1], land[i + 1][2]) + land[i][3];
  }

  return Math.max(...land[0]);
}

let lan = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];
let lan2 = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]
let lan3 = [[3, 3, 3, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]

console.log(solution(lan));
console.log(solution(lan2));
console.log(solution(lan3));