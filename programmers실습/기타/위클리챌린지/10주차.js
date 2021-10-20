const crossPoint = ([a, b, e], [c, d, f]) => {
  if (a * d - b * c) {
    const Px = (b * f - e * d) / (a * d - b * c);
    const Py = (e * c - a * f) / (a * d - b * c);
    return [Px, Py];
  } else return [];
}

function solution(line) {
  let answer = [];

  // 교차점 찾기
  let ary = [];
  let linelng = line.length;

  for (let i = 0; i < linelng; i++) {
    const lin1 = line[i];
    for (let j = i + 1; j < linelng; j++) {

      const lin2 = line[j];
      const arr = crossPoint(lin1, lin2);

      if (!arr.length) continue; // 평행선일경우
      // 교차점이 정수일경우에만 포함
      if (Math.floor(arr[0]) === arr[0] && Math.floor(arr[1]) === arr[1]) ary.push(arr);
    }
  }
  console.log(ary)
  // 교차점 x, y 좌표 분리
  let px = [];
  let py = [];
  for (let i = 0; i < ary.length; i++) {
    const idx = px.indexOf(ary[i][0]);
    if (idx === -1 || py[idx] !== ary[i][1]) {
      px.push(ary[i][0]);
      py.push(ary[i][1]);
    }
  }

  const maxX = Math.max(...px);
  const maxY = Math.max(...py);
  const minX = Math.min(...px);
  const minY = Math.min(...py);
  console.log(`maxX:${maxX}, minX: ${minX}`)
  console.log(`maxY:${maxY}, minY: ${minY}`)
  // 문자 그리기 
  for (let i = maxY; i >= minY; i--) {
    let str = '';
    const idx = py.filter((el, idx) => { if (el === i) return idx });
    const leng = maxX - minX + 1;
    if (!idx.length) {
      str.padEnd(leng, '.');
    } else {
      let start = minX;
      for (let j = 0; j < idx.length; j++) {
        const x = px[idx[j]];
        str += '*'.padStart(x - start, '.');
      }
    }

    answer.push(str.padEnd(leng, '.'));
  }
  return answer;
}

console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]))
// console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]]))
// console.log(solution([[1, -1, 0], [2, -1, 0]]))
// console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]))

// console.log('\n')
// console.log(["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"])
// console.log(["*.*"])
// console.log(["*"])
// console.log(["*"])