function solution(msg) {
  let answer = [];
  let word = msg.split('');
  let dic = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

  while (word.length !== 0) {
    let alph = word.shift();
    let idx = dic.indexOf(alph);

    for (let i = 0; i <= word.length + 1; i++) {
      alph += word[0];
      const index = dic.indexOf(alph);

      if (index !== -1) {
        idx = index;
        let a = word.shift();
      } else {
        dic.push(alph);
        answer.push(idx + 1);
        break;
      }     
    }
  }

  return answer;
}

console.log(solution('KAKAO'))
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
console.log(solution('ABABABABABABABAB'))