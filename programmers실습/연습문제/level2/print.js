function solution(priorities, location) {
  let answer = 0;
  const stack = priorities.map((el, i) => ({
    loca: i === location,
    val: el
  }));

  while (true) {
    const standard = stack.shift();
    if (stack.some(el => el.val > standard.val)) {
      stack.push(standard);
    } else {
      answer++;
      if (standard.loca) return answer;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2))
console.log(solution([1, 1, 9, 1, 1, 1], 0))