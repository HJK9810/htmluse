const grade = (num) => {
  if (num >= 90) return 'A';
  else if (num >= 80) return 'B';
  else if (num >= 70) return 'C';
  else if (num >= 50) return 'D';
  else return 'F';
};

function solution(scores) {
  let answer = '';
  const Score = scores.reduce((result, row) => row.map((e, i) => [...(result[i] || []), e]), []);
  for (let i = 0; i < Score.length; i++) {
    let ary = Score[i];
    if (Math.max(...ary) === ary[i] || Math.min(...ary) === ary[i]) ary.splice(i, 1);
    let aver = ary.reduce((r, e) => r + e, 0) / ary.length;
    answer += grade(aver);
  }
  return answer;
}

let ary1 = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]];
let ary2 = [[50, 90], [50, 87]];
let ary3 = [[70, 49, 90], [68, 50, 38], [73, 31, 100]];

console.log(solution(ary1))
console.log(solution(ary2))
console.log(solution(ary3))