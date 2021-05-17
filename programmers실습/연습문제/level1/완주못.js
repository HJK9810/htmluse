function solution(participant, completion) {
  let answer = '';
  let N = participant.length

  // 양쪽모두 내림차순 정렬
  participant.sort();
  completion.sort();

  // 정렬한것을 비교하며 불일치 찾기
  for (let i = 0; i < N; i++) {
    if (participant[i] != completion[i]) {
      return participant[i]
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))