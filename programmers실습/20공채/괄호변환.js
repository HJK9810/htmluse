function solution(p) {
  if (!p.length) return '';

  let answer = '';
  let left = 0;
  let right = 0;
  let check = false;

  for (let i = 0; i < p.length; i++) {
    if (p.charAt(i) === '(') left++;
    if (p.charAt(i) === ')') right++;

    if (right > left) check = true; // 올바르지 않은 괄호

    if (right === left) { // U와 V 쪼개기
      if (check) {
        answer = answer + '(' + solution(p.slice(i + 1)) + ')';
        for (let j = 1; j < i; j++) {
          if (p.charAt(j) === ')') answer += '(';
          if (p.charAt(j) === '(') answer += ')';
        }
        return answer;
      } else {
        answer = answer + p.slice(0, i + 1) + solution(p.slice(i + 1));
        return answer;
      }
    }
  }
}

console.log(solution("(()())()"))
console.log(solution(")("))
console.log(solution("()))((()"))
console.log(solution(""))

// console.log(solution("(()())()")==='(()())()')
// console.log(solution(")(")==='()')
// console.log(solution("()))((()")==='()(())()')
// console.log(solution("")==='')