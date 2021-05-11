const solution = (s, n) => {
  let answer = s.split('').map(el => {
    if (el) {
      el = String.fromCharCode(el.charCodeAt(0) + n);
      console.log(el)
      if (el > 'z') {
        el = (el - 'z' - 1) + 'a'
      } else if (el > 'Z') {
        el = (el - 'Z' - 1) + 'a'
      }
    }
  });
  return answer;
}


console.log(solution("AB", 1))
console.log(solution("Z", 1))
console.log(solution("a B z", 4))
