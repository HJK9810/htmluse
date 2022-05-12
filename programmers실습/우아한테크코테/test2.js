// log의 순서가 시작, 끝으로 이루어졌을때 총 공부시간 구하기
function solution(log) {
  // 입력시간 분단위로 전환
  const mins = log.map(el => {
    const [hour, min] = el.split(':');
    return Number(hour) * 60 + Number(min);
  });

  // 공부시간 추산
  let sumTime = 0;

  for (let i = 0; i < log.length; i += 2) {
    const studyTime = mins[i + 1] - mins[i];

    if (studyTime < 5) continue; // 5분 미만일경우 0로 치기
    else if (studyTime >= 105) sumTime += 105; // 1시간 45분을 넘을경우 1시간 45으로 치환
    else sumTime += studyTime;
  }

  const hour = String(Math.floor(sumTime / 60)).padStart(2, 0);
  const minutes = String(sumTime % 60).padStart(2, 0);

  return `${hour}:${minutes}`;
}

let l1 = ["08:30", "09:00", "14:00", "16:00", "16:01", "16:06", "16:07", "16:11"]
let l2 = ["01:00", "08:00", "15:00", "15:04", "23:00", "23:59"]

console.log(solution(l1))
console.log(solution(l2))

console.log(solution(l1) === "02:20")
console.log(solution(l2) === "02:44")