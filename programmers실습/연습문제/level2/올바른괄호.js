function solution(s) {
  let stak = [];

  for (let i = 0; i < s.length; i++) {
    let a = s.charAt(i);

    if (a === '(') {
      stak.push(a);
    } else {
      if (stak.length === 0) {
        return false;
      }
      stak.pop(s.charAt(i - 1));
    }
  }

  return stak.length !== 0 ? false : true;
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))