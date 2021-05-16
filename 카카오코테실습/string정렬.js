function solution(strings, n) {
  let answer = [];
  let str = [];

  let nstrng = strings.map(el => el.charAt(n));
  nstrng.sort();

  for (let i = 0; i < strings.length; i++) {
    str[i] = strings.filter(el => nstrng[i] === el.charAt(n))
  }

  let j = 0;
  while (j < strings.length) {
    let len = str[j].length;

    if (len >= 2) {
      answer.push(str[j].sort());
      j += len;
    } else {
      answer.push(str[j]);
      j++;
    }
  }

  return answer.join().split(',');
}

// 한줄로 간략화
// function solution(strings, n) {
//     return strings.sort((a, b) => a.charAt(n) === b.charAt(n) ? a.localeCompare(b) : a[n].localeCompare(b[n]));
// }

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))