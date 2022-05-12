// 1, 2, 3을 일정하게 하기 위해 수맞추기
function solution(arr) {
  let matchNum = [0, 0, 0];

  // 1, 2, 3의 수 체크
  for (let i = 0; i < arr.length; i++) {
    matchNum[arr[i] - 1] += 1;
  }

  // 가장 많은 수의값
  let maxN = Math.max(...matchNum);

  return matchNum.map(el => maxN - el);
}


console.log(solution([2, 1, 3, 1, 2, 1]))
console.log(solution([3, 3, 3, 3, 3, 3]))
console.log(solution([1, 2, 3]))

console.log(`[0, 1, 2]	[6, 6, 0]	[0, 0, 0]`)