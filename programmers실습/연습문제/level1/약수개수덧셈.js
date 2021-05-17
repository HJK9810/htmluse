function checkdivnum(num) {
  let ary = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0)
      ary.push(i);
  }
  return ary.length;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    checkdivnum(i) % 2 != 0 ? answer -= i : answer += i;
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));