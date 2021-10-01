function solution(places) {
  let answer = [];

  places.forEach(room => {
    room = room.map(v => v.split(''));
    let check = true;
    if(room[0][0] ==='O') {
      if(room[1][0]==='P'||room[0][1]==='P') check = false;
    }

    for (let i = 0; i < 4; i++) {
      if(!check) break;
      
      for (let j = 0; j < 4; j++) {
        const now = room[i][j];

        if (now === 'P') {
          if (room[i][j + 1] === 'P' || room[i + 1][j] === 'P') {
            check = false;
            break;
          } else if (room[i][j + 1] === 'O') {
            if ((j < 4 && room[i][j + 2] === 'P') || room[i + 1][j + 1] === 'P') {
              check = false;
              break;
            }
          } else if (room[i + 1][j] === 'O') {
            if ((i < 4 && room[i + 2][j] === 'P') || room[i + 1][j + 1] === 'P') {
              check = false;
              break;
            }
          }
        }
      }

      if (!check) break;
    }

    check ? answer.push(1) : answer.push(0);
  });


  return answer;
}

let ary = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]

console.log(solution(ary))
console.log(`solution : ${[1, 0, 1, 1, 1]}`)