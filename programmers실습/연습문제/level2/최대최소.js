function solution(s) {
  let answer = [];
  let nums = s.split(' ').map(el => +el);

  answer.push(Math.min(...nums));
  answer.push(Math.max(...nums));

  return answer.join(' ');
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));