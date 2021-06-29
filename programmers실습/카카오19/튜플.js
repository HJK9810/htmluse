function solution(s) {
  let answer = [];
  const ary = s.replace('{{', '').replace('}}', '').split('},{');
  const arrS = []

  for (let i = 0; i < ary.length; i++) {
    arrS.push(ary[i].split(','));
  }

  const aryleng = arrS.map(el => el.length);

  for (let i = 1; i <= arrS.length; i++) {
    const idx = aryleng.indexOf(i);
    if (!answer.length) {
      answer.push(arrS[idx].join(''));
    } else {
      answer.push(arrS[idx].filter(el => !answer.includes(el)).join(''));
    }
  }

  return answer.map(el => el *= 1);
}

let str1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}"
let str2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}"
let str3 = "{{20,111},{111}}"
let str4 = "{{123}}"
let str5 = "{{4,2,3},{3},{2,3,4,1},{2,3}}"

console.log(solution(str1))
console.log(solution(str2))
console.log(solution(str3))
console.log(solution(str4))
console.log(solution(str5))