function solution(orders, course) {
  let answer = [];
  let menu = [];

  // menu 분리
  for (let j = 0; j < orders.length; j++) {
    orders[j] = orders[j].split('').sort().join('');
    let order = orders[j];
    for (let i = 0; i < order.length; i++) {
      if (menu.indexOf(order.charAt(i)) === -1) menu.push(order.charAt(i));
    }
  }

  // 가능한 코스 매칭 멱집합 사용.
  const subsets = (ary) => {
    const res = [];

    const dfs = (start, arr) => {
      res.push(arr.join(''));

      if (arr.length === ary) return;

      for (let i = start; i < ary.length; i++) {
        dfs(i + 1, [...arr, ary[i]]);
      }
    };
    dfs(0, []);

    return res;
  };
  let sets = subsets(menu);
  let cors = [];
  for (let i = 0; i < course.length; i++) {
    cors = cors.concat(sets.filter(el => el.length === course[i]));
  }

  // 모든 코스들중 2명 이상 섭취한것 고르기
  let coursecheck = {};
  for (let i = 0; i < cors.length; i++) {
    const filtlen = orders.filter(el => el.indexOf(cors[i]) !== -1).length;
    if (filtlen >= 2) coursecheck[cors[i]] = filtlen;
  }
  return coursecheck;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))