function solution(s) {
  let answer = [];
  const len = s.length / 2;

  for (let i = 1; i <= len; i++) {
    let string = '';
    let j = 0;
    while (j < s.length) {
      let count = 1;
      let maxium = j + i;
      let stand = s.substring(j, maxium);
      let check = s.substring(maxium, maxium + i);

      while (stand === check) {
        maxium += i;
        check = s.substring(maxium, maxium + i);
        count++;
      }

      if (count > 1) {
        string += (count + stand);
        j += count * i;
      } else {
        string += stand;
        j += i;
      }
    }
    answer.push(string.length);
  }
  return Math.min(...answer);
}

// console.log(solution("aabbaccc"))
// console.log(solution("ababcdcdababcdcd"))
// console.log(solution("abcabcdede"))
// console.log(solution("abcabcabcabcdededededede"))
// console.log(solution("xababcdcdababcdcd"))

console.log(solution("aabbaccc") === 7)
console.log(solution("ababcdcdababcdcd") === 9)
console.log(solution("abcabcdede") === 8)
console.log(solution("abcabcabcabcdededededede") === 14)
console.log(solution("xababcdcdababcdcd") === 17)