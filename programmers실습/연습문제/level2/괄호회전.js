const check = (ary) => {
  let stack = [];
  const obj = { '(': ')', '{': '}', '[': ']' };

  for (let i = 0; i < ary.length; i++) {
    let a = ary[i];

    if (a === '(' || a === '{' || a === '[') {
      stack.push(a);
    } else {
      if (obj[stack[stack.length - 1]] === a) {
        stack.pop();
      } else return false;
    }
  }

  return stack.length ? false : true;
}

function solution(s) {
  let answer = 0;
  const leng = s.length;
  let change = s.split('');

  for (let i = 0; i < leng; i++) {
    // 변환
    if (check(change)) answer += 1;
    change.push(change.shift());
  }

  return answer;
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))

// console.log(check("[](){}"))