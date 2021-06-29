function solution(s) {
  let answer = [0, 0];

  while (s !== '1') {
    const len = s.split('').filter(el => el === '1').length;
    answer[1] += s.length - len;
    answer[0]++;
    s = len.toString(2);
  }
  return answer;
}

console.log(solution("110010101001"))
console.log(solution("01110"))
console.log(solution("1111111"))