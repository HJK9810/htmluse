function solution(s) {
  if (s.charAt(0) === ')' || s.charAt((s.length) - 1) === '(') {
    return false;
  } else {
    return s.match(/\(/g).length === s.match(/\)/g).length ? true : false;
  }
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))