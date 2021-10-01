function changetrap(now, roads) {
  for (let j = 0; j < roads.length; j++) {
    let ary = roads[j];
    if (ary[1] == now) {
      [ary[0], ary[1], ary[2]] = [ary[1], ary[0], ary[2]];
    }
  }
  console.log(roads)
  return roads;
}

function solution(n, start, end, roads, traps) {
  let time = 0;
  let now = start;
  let count = [];

  for (let i = 0; i < roads.length; i++) {
    count[i] = 0;
  }

  while (now != end) {
    for (let road of roads) {
      if (road[0] == now) {
        if ((road[0] - road[1]) < 0 && count[road] < 2) {
          time += road[2]
          now = road[1];
          count[road] += 1;
          console.log('time: ' + time)
          console.log('now : ' + now)
          if (traps.includes(now)) {
            roads = changetrap(now, roads);
            break;
          }

          console.log('\n');
        }
      }
    }
  }

  return time;
}

console.log(solution(3, 1, 3, [[1, 2, 2], [3, 2, 3]], [2]))
// console.log(solution(4, 1, 4, [[1, 2, 1], [3, 2, 1], [2, 4, 1]], [2, 3]))