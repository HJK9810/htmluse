function solution(N, stages) {
  let set = [];
  let pass = [];

  // 실패율계산 간략화
  for (let i = 0; i < N; i++) {
    let up = stages.filter(el => el == (i + 1)).length;
    let base = stages.filter(el => el >= (i + 1)).length;
    set[i] = i;

    (base === 0) ? pass[i] = 0 : pass[i] = up / base;
  }

  // 값을 따라 내림차순. 같은 값은 index의 오름차순
  set.sort((a, b) => {
    return (pass[b] === pass[a]) ? a - b : pass[b] - pass[a];
  });

  return set.map(el => el + 1);
}

let stage1 = [2, 1, 2, 6, 2, 4, 3, 3]
let stage2 = [4, 4, 4, 4, 4]

console.log(solution(5, stage1))
console.log(solution(4, stage2))