function solution(name) {
  let answer = 0;
  let start = ''.padEnd(name.legth, 'A');
  let i = 0;
  let LR = 'R';

  while (i < name.length) {
    let nwordcode = name[i].charCodeAt();
    if (nwordcode - 65 > 13) {
      answer += (1 + 90 - nwordcode);
      start[i] = name[i];
    } else {
      answer += (nwordcode - 65);
      start[i] = name[i];
    }

    if (i === 0 && name[i + 1] === 'A') {
      i = name.length - 1;
      LR = 'L';
    } else {
      LR === 'R' ? i++ : i--;
    }

    if (name === start) break;
  }

  return answer;
}

console.log(solution("JEROEN"))
console.log(solution("JAN"))