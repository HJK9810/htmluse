function solution(line) {
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

  // 문자 그리기 
  const drawStart = (points) => {
    // 교차점 x, y 좌표 분리
    let px = [];
    let py = [];
    for (let i = 0; i < points.length; i++) {
      const idx = px.indexOf(points[i][0]);
      if (idx === -1 || py[idx] !== points[i][1]) {
        px.push(points[i][0]);
        py.push(points[i][1]);
      }
    }

    const maxX = Math.max(...px);
    const maxY = Math.max(...py);
    const minX = Math.min(...px);
    const minY = Math.min(...py);
    const leng = maxX - minX + 1;

    // '.'로만 이루어진 보드 생성
    let board = Array.from(Array(maxY - minY + 1), () => Array(leng).fill('.'));

    /** 
     * 교점 위치의 '*' 붙이기
     * 1. [0, 0] = board[maxY][-minX]
     * 2. [1, 1] = board[maxY-1][1-minX]
    */
    points.forEach(([x, y]) => {
      board[maxY - y][x - minX] = '*';
    });

    return board.map(ary => ary.join(''));
  }

  return drawStart(crossPoint());
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