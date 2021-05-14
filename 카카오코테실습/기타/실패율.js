// 내림차순 정렬 & 인덱스 출력
function setary(set) {
  let ary = [...set].sort((a, b) => b - a);
  let ans = [];
  let check = 0;

  for (let i = 0; i < set.length; i++) {
    let index = set.findIndex(el => ary[i] === el);
    // 중복체크 : 같은 값은 인덱스 순으로 정렬
    (i != 0) ?
      ((ary[i] == ary[i - 1]) ? check += 1 : check = 0)
      : check = 0;

    ans.push(index + check + 1);
  }
  return ans;
}

function solution(N, stages) {
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

  return setary(pass);
}

let stage1 = [2, 1, 2, 6, 2, 4, 3, 3]
let stage2 = [4, 4, 4, 4, 4]

console.log(solution(5, stage1))
console.log(solution(4, stage2))