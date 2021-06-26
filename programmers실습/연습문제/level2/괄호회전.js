function solution(s) {
  let stak = [];
  const leng = s.length;

  for (let i = 0; i < leng; i++) {
    let a = s.charAt(i);

    if (a === '(' || a === '{' || a === '[') {
      stak.push(a);
    } else {
      if (stak.length === 0) {
        return 'X';
      }
      stak.pop(s.charAt(i - 1));
    }
  }

  return stak.length !== 0 ? 'X' : 'O';
}

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))