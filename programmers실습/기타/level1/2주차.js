const grade = (num) => {
  if (num >= 90) return 'A';
  else if (num >= 80) return 'B';
  else if (num >= 70) return 'C';
  else if (num >= 50) return 'D';
  else return 'F';
};

function solution(scores) {
  let answer = '';
  for (let i = 0; i < scores.length; i++) {
    let ary = [];
    for (let j = 0; j < scores.length; j++) {
      ary.push(scores[j][i]);
    }
    console.log(ary)

    const max = Math.max(...ary);
    const min = Math.min(...ary);
    if (max === ary[i] && (ary.indexOf(max, i + 1) === -1 || ary.slice(0, i - 1).indexOf(max) === -1) || min === ary[i] && (ary.indexOf(min, i + 1) === -1 || ary.slice(0, i - 1).indexOf(min) === -1)) ary.splice(i, 1);

    console.log(ary)
    let aver = ary.reduce((r, e) => r + e, 0) / ary.length;
    answer += grade(aver);
  }
  return answer;
}

let ary1 = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]];
let ary2 = [[50, 90], [50, 87]];
let ary3 = [[70, 49, 90], [68, 50, 38], [73, 31, 100]];
let ary4 = [[75, 50, 100], [75, 100, 20], [100, 100, 20]];

// console.log(solution(ary1))
// console.log(solution(ary2))
// console.log(solution(ary3))
console.log(solution(ary4))

// console.log(solution(ary1)=="FBABD")
// console.log(solution(ary2)=="DA")
// console.log(solution(ary3)=="CFD")
// console.log(solution(ary4)=="BBF") 