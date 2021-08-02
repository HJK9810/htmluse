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

  // 가능한 코스 매칭

  return answer;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]))
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]))
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]))