function solution(s) {
  let string = s.split('');
  if (string.length % 2 === 1) {
    return 0;
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        string.splice(i, 2);
        i = -1;
      }
      if (string.length === 0)
        return 1;
    }
  }

  return s.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'))
console.log(solution('cdcd'))