function solution(n) {
  let answer = n + 1;
  let num = n.toString(2).split('').filter(el => el === '1').length;

  while (answer > n) {
    let check = answer.toString(2).split('').filter(el => el === '1').length;
    if (num === check) {
      return answer;
    }
    answer++;
  }
}

console.log(solution(78))
console.log(solution(15))