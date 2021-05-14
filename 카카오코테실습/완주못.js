function solution(participant, completion) {
  let answer = '';
  let N = participant.length

  for(let i=0;i<N;i++) {
    completion.includes(participant[i]) ? participant[i] = '' : answer = participant[i];
    console.log(`answer: ${answer}, el: ${participant[i]}`);
  }

  console.log(participant)
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))