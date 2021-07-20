function solution(m, musicinfos) {
  let answer = [];
  let timelen = [];
  musicinfos.forEach(inform => {
    const [start, fisnish, title, info] = inform.split(',');
    const [sh, sm] = start.split(':');
    const [fh, fm] = fisnish.split(':');
    const time = (fh - sh) * 60 + (fm - sm);
    const check = info.repeat(time).slice(0, time);
    const idx = check.indexOf(m)

    if (idx !== -1) {
      if (check[idx + m.length] !== '#') {
        answer.push(title);
        timelen.push(time);
      }
    }
  });

  if(answer.length===1) return answer[0];
  else {
    const ary = new Set(timelen);
    const max = Math.max(...timelen);
    return ary === 1? answer[0] : answer[timelen.indexOf(max)];
  }
}

let info1 = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
let info2 = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]
let info3 = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]

console.log(solution("ABCDEFG", info1))
console.log(solution("CC#BCC#BCC#BCC#B", info2))
console.log(solution("ABC", info3))

// console.log(solution("ABCDEFG", info1)==="HELLO")
// console.log(solution("CC#BCC#BCC#BCC#B", info2)==="FOO")
// console.log(solution("ABC", info3)==="WORLD")