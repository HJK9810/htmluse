function solution(n, lost, reserve) {
  let ary = new Array(n + 1).fill(1);
  ary[0] = 0;
  for (let i = 1; i <= n; i++) {
    let r = 0, l = 3;
    if (lost.includes(i)) {
      ary[i] = 0;
      l = 1;
    }
    if (reserve.includes(i)) {
      ary[i] = 2;
      r = 1;
    }
    if (r === l) {
      ary[i] = 1;
    }
  }

  for (let i = 1; i <= n; i++) {
    if (ary[i] === 0 && ary[i - 1] === 2) {
      ary[i - 1] = 1;
      ary[i] = 1;
    } else if (ary[i] === 0 && ary[i + 1] === 2) {
      ary[i + 1] = 1;
      ary[i] = 1;
    }
  }
  console.log(ary)

  return ary.filter(el => el > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));