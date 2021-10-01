const quad = (ary, size, answer, start) => {
  const first = ary[start[0]][start[1]];
  if (size === 1) { // size가 1일경우는 체크할 필요 없음
    first ? answer[1] += 1 : answer[0] += 1;
    return;
  }

  const half = size / 2;
  let check = true;

  // 지정 범위 내의 값이 모두 같은지 체크 아닐경우 false
  for (let i = start[0]; i < size + start[0]; i++) {
    for (let j = start[1]; j < size + start[1]; j++) {
      if (first !== ary[i][j]) {
        check = false;
        break;
      }
    }
    if (!check) break;
  }

  if (check) { // 첫 값과 지정한 범위의 수가 모두 같다
    first ? answer[1] += 1 : answer[0] += 1;
    return;
  }

  // false일 경우의 재귀귀함수
  quad(ary, half, answer, start);
  quad(ary, half, answer, [start[0] + half, start[1]]);
  quad(ary, half, answer, [start[0], start[1] + half]);
  quad(ary, half, answer, [start[0] + half, start[1] + half]);

  return;
}

function solution(arr) {
  let answer = [0, 0];
  let size = arr.length;
  // quad(전체배열, 배열의 열&행의 크기, 출력될 해답, 시작점좌표)
  quad(arr, size, answer, [0, 0]);
  return answer;
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]))
console.log(solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]]))