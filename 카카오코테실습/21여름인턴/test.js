const Num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  let answer = '';

  while (s) {
    let num = Number(s.charAt(0));

    if (num) {
      answer += num;
      s = s.substring(1);
    } else {
      let word = Num.find(element => s.indexOf(element) === 0);
      answer += Num.indexOf(word);

      s = s.substring((word.length));
    }
  }

  return Number(answer);
}

let s1 = "one4seveneight"
let s2 = "23four5six7"
let s3 = "2three45sixseven"
let s4 = "123"

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));