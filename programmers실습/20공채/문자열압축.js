function solution(s) {
  let answer = [];
  const len = s.length / 2;

  for (let i = 1; i <= len; i++) {
    let string = '';
    for (let j = 0; j < s.length; j++) {
      let count = 0;
      let stand = s.substring(j, j + i);
      let check;

      if (count) string += (count + stand);
      else string += stand;
    }
    console.log(`string: ${string}`)
    answer.push(string.length);
  }
  console.log(answer)
  return Math.min(...answer);
}

console.log(solution("aabbaccc"))
// console.log(solution("ababcdcdababcdcd"))
// console.log(solution("abcabcdede"))
// console.log(solution("abcabcabcabcdededededede"))
// console.log(solution("xababcdcdababcdcd"))

// console.log(solution("aabbaccc")===7)
// console.log(solution("ababcdcdababcdcd")===9)
// console.log(solution("abcabcdede")===8)
// console.log(solution("abcabcabcabcdededededede")===14)
// console.log(solution("xababcdcdababcdcd")===17)