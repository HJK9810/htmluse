function solution(enter, leave) {
  let answer = Array.from({ length: enter.length }, () => 0);
  let stack = [];

  for (let i = 0; i < enter.length + leave.length; i++) {
    if (enter.length > 0) {
      const sted = enter.shift();
      stack.push(sted);
    }

    if (stack.indexOf(leave[0]) !== -1) {
      const lsted = leave.shift();
      const idx = stack.indexOf(lsted);
      stack.splice(idx, 1);
      answer[lsted - 1] = stack.length;
    }
  }

  return answer;
}

console.log(solution([1, 3, 2], [1, 2, 3]))
// console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]))
// console.log(solution([3, 2, 1], [2, 1, 3]))
// console.log(solution([3, 2, 1], [1, 3, 2]))
// console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]))

	// [0,1,1]	[2,2,1,3] 	[1,1,2]	[2,2,2]	[2,2,0,2]