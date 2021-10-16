function solution(line) {
  let answer = [];
  let funct = {};

  // 함수 분리
  line.forEach((el, idx) => {
    const [A, B, C] = el;
    funct[idx] = function (x) { return ((-A / B) * x - (C / B)) };
  });

  console.log(funct)

  // 교차점 찾기
  let ary = [];

  // 교차점 x, y 좌표 분리
  let px = [];
  let py = [];
  for (let i = 0; i < ary.length; i++) {
    px.push(ary[i][0]);
    py.push(ary[i][1]);
  }

  const maxX = Math.max(...px);
  const maxY = Math.max(...py);
  const minX = Math.min(...px);
  const minY = Math.min(...py);

  for (let i = minX; i <= maxX; i++) {
    let str = '';
    const idx = px.filter((el, idx) => { if (el === i) return idx });
    for (let j = minY; i <= maxY; j++) {
      // [i, j]가 ary에 포함일 경우 * 아닐경우 .입력
      if (idx.indexOf(j) !== -1) str += '*';
      else str += '.';
    }
  }
  return answer;
}

console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]))
console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]]))
console.log(solution([[1, -1, 0], [2, -1, 0]]))
console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]))

console.log(["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"])
console.log(["*.*"])
console.log(["*"])
console.log(["*"])