function solution(line) {
  let answer = [];

  // 교차점 찾기
  const crossPoint = () => {
    let point = [];

    let linelng = line.length;

    for (let i = 0; i < linelng - 1; i++) {
      for (let j = i + 1; j < linelng; j++) {
        const [a, b, e] = line[i];
        const [c, d, f] = line[j];

        const slope = a * d - b * c;

        if (slope) {
          const Px = (b * f - e * d) / slope;
          const Py = (e * c - a * f) / slope;
          // Px와 Py모두 정수일 경우 포함 -> Number.isInteger() : 함수 안이 정수이면 true 아님 false
          if (Number.isInteger(Px) && Number.isInteger(Py)) point.push([Px, Py]);
        }
      }
    }

    return point;
  }


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
  const leng = maxX - minX + 1;

  // 문자 그리기 
  for (let i = maxY; i >= minY; i--) {
    let str = '';
    let idx = [];

    // 교점이 해당 y좌표에 존재하는가 체크
    for (let j = 0; j < py.length; j++) {
      if (i === py[j]) idx.push(j);
    }

    if (!idx.length) { // 교점이 존재하지 않는경우
      str.padEnd(leng, '.');
    } else { // 교점이 존재하는 경우
      let start = minX;
      let yidx = [];
      // 교점의 x좌표 산출 & 정렬
      for (let j = 0; j < idx.length; j++) {
        yidx.push(px[idx[j]]);
      }
      yidx.sort((a, b) => a - b);

      for (let j = 0; j < yidx.length; j++) {
        if (yidx[j] === minX) {
          str += '*';
        } else {
          str = str.padEnd(yidx[j] - start, '.') + '*';
        }
      }
    }

    answer.push(str.padEnd(leng, '.'));
  }
  return answer;
}

console.log(solution([[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]]))
console.log(solution([[0, 1, -1], [1, 0, -1], [1, 0, 1]]))
console.log(solution([[1, -1, 0], [2, -1, 0]]))
console.log(solution([[1, -1, 0], [2, -1, 0], [4, -1, 0]]))

console.log('\n')
console.log(["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"])
console.log(["*.*"])
console.log(["*"])
console.log(["*"])