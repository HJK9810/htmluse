function solution(enter, leave) {
  let answer = [];
  let anstack = Array.from({ length: enter.length }, () => new Set);
  let stack = [];

  for (let count = 0; count <= enter.length + leave.length; count++) {
    if (enter.length > 0) {
      const sted = enter.shift();
      stack.push(sted);
    }

    if (stack.length === 1 && stack[0] === leave[0]) {
      stack.pop();
      leave.shift();
    } else {
      while (stack.indexOf(leave[0]) !== -1) {
        for (let i = 0; i < stack.length; i++) {
          for (let j = 0; j < stack.length; j++) {
            anstack[stack[i] - 1].add(stack[j]);
          }
        }
        const lsted = leave.shift();
        const idx = stack.indexOf(lsted);
        stack.splice(idx, 1);
      }
    }
  }

  for (let i = 0; i < anstack.length; i++) {
    anstack[i].size ? answer.push(anstack[i].size - 1) : answer.push(0);
  }

  return answer;
}

console.log(solution([1, 3, 2], [1, 2, 3]))
console.log(solution([1, 4, 2, 3], [2, 1, 3, 4]))
console.log(solution([3, 2, 1], [2, 1, 3]))
console.log(solution([3, 2, 1], [1, 3, 2]))
console.log(solution([1, 4, 2, 3], [2, 1, 4, 3]))
console.log(solution([1, 2, 3], [3, 2, 1]))

console.log(`[0,1,1]\n [2,2,1,3]\n [1,1,2]\n [2,2,2]\n	[2,2,0,2]\n [2, 2, 2]\n`)