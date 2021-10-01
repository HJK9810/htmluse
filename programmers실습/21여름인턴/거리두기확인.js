function solution(places) {
  let answer = [];

  places.forEach(room => {
    room = room.map(v => v.split(''));
    let intary = Array.from({length:5},() => new Array(5).fill(0));

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const now = room[i][j];

        if (now === 'P') {
          if (i === 0) {
            if (j === 0) {
              intary[1][0] -= 3;
              intary[0][1] -= 3;
            } else if (j === 4) {
              intary[1][4] -= 3;
              intary[0][3] -= 3;
            } else {
              intary[i + 1][j] -= 3;
              intary[i][j + 1] -= 3;
              intary[i][j - 1] -= 3;
            }
          } else if (i === 4) {
            if (j === 0) {
              intary[3][0] -= 3;
              intary[4][1] -= 3;
            } else if (j === 4) {
              intary[3][4] -= 3;
              intary[4][3] -= 3;
            } else {
              intary[i - 1][j] -= 3;
              intary[i][j + 1] -= 3;
              intary[i][j - 1] -= 3;
            }
          } else {
            intary[i + 1][j]
            intary[i - 1][j] -= 3;
            intary[i][j + 1] -= 3;
            intary[i][j - 1] -= 3;
          }
        } else if (now === 'X') {
          intary[i][j] += 10;
        } else {
          intary[i][j] += 2;
        }
      }
    }
    console.log(intary)
    const check = [].concat(...intary).some(v => v <= -2);
    console.log(check)
    check ? answer.push(0) : answer.push(1);
  });

  return answer;
}

let ary = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

console.log(solution(ary))
console.log(`solution : ${[1, 0, 1, 1, 1]}`)