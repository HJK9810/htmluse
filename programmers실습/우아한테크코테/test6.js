// 휴가 가능한 나라 계산

function solution(time, plans) {
  const start = 18; // 금요일 퇴근시간
  const arive = 13; // 월요일 출근시간

  for (let i = 0; i < plans.length; i++) {
    // 출발시간과 도착시간을 시간과 AM/PM으로 분리
    const [stime, swhen] = plans[i][1].match(/[a-z]+|[^a-z]+/gi);
    const [atime, awhen] = plans[i][2].match(/[a-z]+|[^a-z]+/gi);
    // 오후일 경우 시간에 12를 추가해 24시간제로 전환
    const startime = swhen === 'AM' ? stime : stime + 12;
    const arrivetime = awhen === 'AM' ? atime : atime + 12;

    let spendTime = 0; // 휴가를 위한 시간이 정규출근시간을 침해하는 총 시간
    // 출발시간이 금요일 근무시간을 침해하는 경우
    if (startime <= 9) spendTime += 9.5;
    else {
      if (start - startime > 0) spendTime += start - startime;
    }
    // 도착시간이 월요일 근무시간을 침해하는 경우
    if (arrivetime >= 18) spendTime += 5;
    else {
      if (arrivetime - arive > 0) spendTime += arrivetime - arive;
    }
    // 총 시간이 침해 가능한 시간 이내일 경우 여행지명 출력
    if (time >= spendTime) return plans[i][0];
  }
  // 전혀 갈수 없을경우 여행지명은 빈칸
  return '';
}

console.log(solution(3.5, [["홍콩", "11PM", "9AM"], ["엘에이", "3PM", "2PM"]]))
console.log(solution(3.5, [["홍콩", "11PM", "9AM"], ["엘에이", "3PM", "2PM"]]) === "홍콩")