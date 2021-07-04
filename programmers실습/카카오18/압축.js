function solution(msg) {
  let answer = [];
  let word = msg.split('');
  let dic = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));

  while (word.length !== 0) {
    let alph = word.shift();
    let idx = [];

    for (let i = 0; i < word.length; i++) {
      idx.push(dic.indexOf(alph));

      if (idx !== -1) {
        alph += word.shift();
      } else {
        word.unshift(alph.charAt(alph.length - 1));
        answer.push(idx[idx.length - 2]);
        dic.push(word);
        break;
      }
    }
  }

  return answer;
}

console.log(solution('KAKAO'))
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'))
console.log(solution('ABABABABABABABAB'))