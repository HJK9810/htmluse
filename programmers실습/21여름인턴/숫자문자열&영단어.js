const Num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  let answer = s;

  for (let i = 0; i < Num.length; i++) {
    const ary = answer.split(Num[i]); // Num[i]에 해당하는 부분을 ''으로 비우며 배열로 분리
    answer = ary.join(i); // ''부분에 i값을 넣으며 문자열로 합치기
  }
  return answer *= 1; // 가장 속도가 빠른 실수 -> 정수 변환법
}

let s1 = "one4seveneight"
let s2 = "23four5six7"
let s3 = "2three45sixseven"
let s4 = "123"

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));