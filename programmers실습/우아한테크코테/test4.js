// 문자열 s의 처음과 끝이 이어질때, 연속한 구간의 알파벳수 오름차순 정렬
function solution(s) {
  let answer = [];
  const start = s.charAt();
  const end = s.charAt(s)
  let now = start;
  let count = 0;

  // 문자열 s가 분리되어있다는 가정하에 연속한 구간의 알파벳수
  s.split('').forEach((alph, idx) => {
    if (now !== alph) {
      now = alph;
      answer.push(count);
      count = 1;
    } else count += 1;

    if (idx === s.length - 1) answer.push(count);
  });

  // s가 연결될시의 처음과 끝의 연속성 확인
  if (start === end) answer[0] += answer.pop();

  // 오름차순 정렬로 return
  return answer.sort((a, b) => a - b);
}

console.log(solution("aaabbaaa"))
console.log(solution("wowwow"))

console.log(`[2,6]	[1,1,2,2]`)