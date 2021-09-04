const Num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const Numleng = [4, 3, 3, 5, 4, 4, 3, 5, 5, 4];

function solution(s) {
  let answer = '';

  while (s) {
    if (Number(s.charAt(0))) {
      answer += s.charAt(0);
      s = s.substring(1);
    } else {
      let end;

      for (end = 0; end < 5; end++) {
        if (Number(s.charAt(end))) break;
        else {
          const Nword = s.slice(0, end);
          const word = Num.indexOf(Nword);

          if (word !== -1) break;
        }
      }

      answer += Num.indexOf(s.slice(0, end));
      s = s.substring(end);
    }
  }
  answer *= 1
  return answer;
}

let s1 = "one4seveneight"
let s2 = "23four5six7"
let s3 = "2three45sixseven"
let s4 = "123"

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));