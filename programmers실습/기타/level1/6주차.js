function solution(weights, head2head) {
  let answer = [];
  let Weigh = Array.from({ length: weights.length }, () => 0);


  for (let i = 0; i < head2head.length; i++) {
    const head = head2head[i].split('');
    let count = 0;

    for (let j = 0; j < head.length; j++) {
      if (head[j] === 'W') {
        count++;
        if (weights[i] < weights[j]) Weigh[i]++;
      }
    }

    answer.push(count);
  }

  return [...answer.keys()].sort((a, b) => {
    if (answer[b] !== answer[a]) return answer[b] - answer[a];
    else {
      if (Weigh[a] !== Weigh[b]) return Weigh[b] - Weigh[a];
      else {
        return weights[a] !== weights[b] ? weights[b] - weights[a] : answer[b] - answer[a];
      }
    }
  }).map(el => el + 1);
}

let ary1 = [50, 82, 75, 120]
let wl1 = ["NLWL", "WNLL", "LWNW", "WWLN"]
let ary2 = [145, 92, 86]
let wl2 = ["NLW", "WNL", "LWN"]
let ary3 = [60, 70, 60]
let wl3 = ["NNN", "NNN", "NNN"]

console.log(solution(ary1, wl1))
console.log(solution(ary2, wl2))
console.log(solution(ary3, wl3))

console.log(JSON.stringify(solution(ary1, wl1)) == JSON.stringify([3, 4, 1, 2]))
console.log(JSON.stringify(solution(ary2, wl2)) == JSON.stringify([2, 3, 1]))
console.log(JSON.stringify(solution(ary3, wl3)) == JSON.stringify([2, 1, 3]))