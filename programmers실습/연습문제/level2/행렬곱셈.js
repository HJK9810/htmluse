function solution(arr1, arr2) {
  let answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let ary = Array(arr2[0].length).fill(0);
    for (let k = 0; k < arr2[0].length; k++) {
      for (let j = 0; j < arr2.length; j++) {
        ary[k] += arr1[i][j] * arr2[j][k];
      }
    }
    answer.push(ary);
  }

  return answer;
}

let ary1 = [[1, 4], [3, 2], [4, 1]]
let ary2 = [[3, 3], [3, 3]]
let arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]]
let arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]]

console.log(solution(ary1, ary2));
console.log(solution(arr1, arr2));