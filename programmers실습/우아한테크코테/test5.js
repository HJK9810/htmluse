// 일정 규칙에 따라 2차배열 채우기

// 해당 배열에 0이 존재하는지 검사하는 함수
const check = (ary) => {
  for (let i = 0; i < ary.length; i++) {
    // leng : i행에 있는 0의 수
    let leng = ary[i].filter(el => !el).length;
    if (leng) return false;
  }
  // 0이 하나라도 없는 경우
  return true;
}


function solution(rows, columns) {
  let answer = Array.from({ length: rows }, () => new Array(columns).fill(0));
  let r = 0;
  let c = 0;

  answer[0][0] = 1;

  let now = 2;
  while (true) {
    if (now % 2 !== 0) {
      r === rows - 1 ? r = 0 : r += 1;
    } else {
      c === columns - 1 ? c = 0 : c += 1;
    }

    // [r, c]가 [0, 0]값이며 now가 홀수일 경우 같은 위치만을 반복하며 무한괘도
    if (r === 0 && c === 0 && now % 2 !== 0) break;
    else answer[r][c] = now;
    now++;

    // answer배열에 0이 하나라도 없을 경우
    if (check(answer)) break;
  }

  return answer;
}

console.log(solution(3, 4))
console.log(solution(3, 3))

console.log(`[[8, 2, 13, 14], [16, 10, 4, 15], [17, 11, 12, 6]]`)
console.log(`[[1, 2, 0], [0, 3, 4], [6, 0, 5]]`)