function solution(p) {
  let answer = '';
  let stak = [];
  let putin = 0;
  let popout = 0;

  for (let i = 0; i < p.length; i++) {
    const a = p.charAt(i);

    if (a === '(') {
      if (putin === popout) {
        stak.push(a);
        answer += a;
        putin++;
      } else {
        stak.pop();
        answer += ')';
        popout++;
      }
    } else {
      if (stak.length === 0) {
        stak.push('(');
        answer += '(';
        putin++;
      } else {
        stak.pop();
        answer += ')';
        popout++;
      }
    }
  }

  return answer;
}

console.log(solution("(()())()"))
console.log(solution(")("))
console.log(solution("()))((()"))