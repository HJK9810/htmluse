function solution(m, musicinfos) {
  let answer = [];
  let timelen = [];
  musicinfos.forEach(inform => {
    // [시작시간, 종료시간, 제목, 곡정보]
    const [start, fisnish, title, info] = inform.split(',');
    const [sh, sm] = start.split(':');
    const [fh, fm] = fisnish.split(':');
    // 진행된 시간 계산
    const time = (fh - sh) * 60 + (fm - sm);
    // 진행된 시간만큼 들려진 곡 정보
    const check = info.repeat(time).slice(0, time);
    const idx = check.indexOf(m)

    if (idx !== -1) { // 곡 정보내에 들은 값이 존재한다
      if (check[idx + m.length] !== '#') { // #이 있을경우 해당 일치값이 아니다.
        answer.push(title);
        timelen.push(time);
      }
    }
  });
  // 길이가 1 === 일치하는것이 없을경우, 유일값 출력
  if(answer.length===1) return answer[0];
  else { // 일치값이 여러개일경우
    const ary = new Set(timelen);
    const max = Math.max(...timelen);
    // 시간이 동일? 먼저값. 시간 다름? 가장 긴것(max값)
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