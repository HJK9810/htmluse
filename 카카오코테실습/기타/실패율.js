// 내림차순 정렬 & 인덱스 출력
function setary(set) {
  let ary = [...set].sort((a, b) => a - b);
  console.log(ary)
  let ans = [];

  for (let i = 0; i < set.length; i++) {
    let index = set.findIndex(el => ary[i] === el)
    ans.push(index)
    console.log(index)
  }
  return ans;
}

function solution(N, stages) {
  let answer = [];
  let set = [];
  let pass = [];
  let base = stages.length;

  for (let i = 0; i < N; i++) {
    let check = stages.filter(el => el == (i + 1));
    set[i] = check.length;
  }

  // 실패율 계산
  for (let i = 0; i < set.length; i++) {
    if (!i) {
      pass[i] = set[i] / base
    } else {
      base -= set[i - 1]
      pass[i] = set[i] / base
    }
  }
  answer = setary(pass)
  return answer;
}

let stage1 = [2, 1, 2, 6, 2, 4, 3, 3]
let stage2 = [4, 4, 4, 4, 4]

console.log(solution(5, stage1))
console.log(solution(4, stage2))