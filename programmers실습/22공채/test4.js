function solution(n, info) {
  if (info[0] === n) return [-1];
  let answer = [];
  let win = [];
  let infolen = info.length;

  for (let start = 0; start < infolen; start++) {
    let rion = Array.from({ length: start }, () => 0);
    let arrow = n;

    let suma = 0;
    let sumb = 0;

    for (let i = start; i < infolen; i++) {
      if (arrow > info[i]) {
        (i === info.length - 1) ? rion.push(arrow) : rion.push(info[i] + 1);
        arrow -= (info[i] + 1);
        sumb += (10 - i);
      } else {
        if (info[i]) suma += (10 - i);
        (i === info.length - 1) ? rion.push(arrow) : rion.push(0);
      }
    }
    
    suma ? win.push(sumb - suma) : win.push(0);
    answer.push(rion);
  }

  let max = Math.max(...win);
  let len = win.filter(el => el === max).length;
  console.log(`max : ${max}, len : ${len}`)
  console.log(win)
  console.log(answer)

  return answer[win.lastIndexOf(max)];
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]))
console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]))
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]))

	// [0,2,2,0,1,0,0,0,0,0,0]
	// [-1]
	// [1,1,2,0,1,2,2,0,0,0,0]
	// [1,1,1,1,1,1,1,1,0,0,2]