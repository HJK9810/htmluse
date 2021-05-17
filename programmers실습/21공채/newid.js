function solution(new_id) {
  let answer = new_id.toLowerCase()
    .replace(/[^\w-_.]/gi, '')
    .replace(/\.{2,}/g, '.') //2개 이상의. 하나의.으로 변환
    .replace(/^\.|\.$/g, '') // first, last의 .제거
    .replace(/^$/g, 'a')
    .slice(0, 15)
    .replace(/\.$/g, '');

  return answer.length > 2 ? answer : answer.padEnd(3, answer[answer.length - 1]);
}

let id1 = "...!@BaT#*..y.abcdefghijklm"
let id2 = "z-+.^."
let id3 = "=.="
let id4 = "123_.def"
let id5 = "abcdefghijklmn.p"

console.log(solution(id1));
console.log(solution(id2));
console.log(solution(id3));
console.log(solution(id4));
console.log(solution(id5));