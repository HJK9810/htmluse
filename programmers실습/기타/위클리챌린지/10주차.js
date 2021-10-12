function solution(line) {
  let answer = [];
  let funct = {};

  line.forEach((el, idx) => {
    const [A, B, C] = el;
    funct[idx] = function (x) { return ((-A / B) * x - (C / B)) };
  });

  console.log(funct)

  let ary = [];
  let px = [];
  let py = [];
  for (let i = 0; i < ary.length; i++) {
    px.push(ary[i][0]);
    py.push(ary[i][1]);
  }

  const maxX = Math.max(...x);
  const maxY = Math.max(...y);
  const minX = Math.min(...x);
  const minY = Math.min(...y);

  for (let i = minX; i <= maxX; i++) {
    let str = '';
    const idx = px.filter((el, idx) => { if (el === i) return idx });
    for (let j = minY; i <= maxY; j++) {
      // [i, j]가 ary에 포함일 경우 * 아닐경우 .입력
      if (idx.length) str += '*';
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