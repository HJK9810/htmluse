function solution(land) {
  let answer = 0;

  for (let i = 0; i < land.length; i++) {
    let ary = [...land[i]];
    let max = Math.max(...ary);
    let j = ary.indexOf(max)

    answer += max;
    if (i != land.length - 1) {
      if (ary.filter(el => el === max).length > 1) {
        j === land[i + 1].indexOf(Math.max(...land[i + 1])) ? land[i + 1][ary.indexOf(max, 2)] = 0 : land[i + 1][j] = 0;
      } else {
        land[i + 1][j] = 0;
      }
    }
  }

  return answer;
}

let lan = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];
let lan2 = [[4, 3, 2, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]
let lan3 = [[3, 3, 3, 1], [2, 2, 2, 1], [6, 6, 6, 4], [8, 7, 6, 5]]

console.log(solution(lan));
console.log(solution(lan2));
console.log(solution(lan3));