function solution(n, lost, reserve) {
  let ary = new Array(n + 1).fill(1);
  ary[0] = 0;
  lost.forEach(el => ary[el] = 0);
  reserve.forEach(el => ary[el] = 2);

  for (let i = 1; i <= n; i++) {
    if (ary[i] === 0 && ary[i - 1] === 2) {
      ary[i - 1] = 1;
      ary[i] = 1;
    } else if (ary[i] === 0 && ary[i + 1] === 2) {
      ary[i + 1] = 1;
      ary[i] = 1;
    }
  }

  return ary.filter(el => el > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));